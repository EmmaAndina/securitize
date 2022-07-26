const { Given, When, Then } = require('cucumber');
const chromedriver = require('chromedriver');
const webdriver = require('selenium-webdriver');
const { By , Key} = require('selenium-webdriver');
const {assert} = require("chai")

var driver = new webdriver.Builder()
.forBrowser('chrome').build();

//setDefaultTimeout("60000");


Given(/^Get to "(.*)"$/, async function(url){
    await driver.get(url);
    await driver.sleep(1500);
    });

When("Login", async function(){

var user = await driver.findElement(By.xpath("//body/div[1]/div[1]/form[1]/input[1]"))
await user.sendKeys("admin");
await driver.sleep(1000);
var pass = await driver.findElement(By.xpath("//body/div[1]/div[1]/form[1]/input[2]"))
await pass.sendKeys("admin");
await driver.sleep(1000);
await pass.sendKeys(Key.ENTER);
});

var DO1 = await driver.findElement(By.css("#do1"));
var DO2 = await driver.findElement(By.css("#do2"));

When ("Button DO-1 is clicked", async function(){
    await DO1.click();
}),


Then ("Button DO-2 is disabled", async function(){
    await assert.isTrue (await DO2.isDisplayed());
}),
When ("Button DO-1 is clicked", async function(){
    await DO2.click();
}),
Then ("Button DO-1 is disabled", async function(){
    await assert.isTrue (await DO1.isDisplayed());
}),



When ("the UP arrow is clicked", async function(){}),
Then ("the font size gets bigger", async function(){}),
When ("the DOWN arrow is clicked", async function(){}),
Then ("the font size gets smaller", async function(){})


//When a "colorname" is written
//Then Background color changes to "colorname" 
