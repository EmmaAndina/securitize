const { Given, When, Then } = require('cucumber');
const chromedriver = require('chromedriver');
const webdriver = require('selenium-webdriver');
const { By , Key} = require('selenium-webdriver');
const {assert} = require("chai")

var driver = new webdriver.Builder()
.forBrowser('chrome').build();



// BACKGROUND

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




// FIRST EXCERCISE

When ("Button DO-1 is clicked", async function(){
    var DO1 = await driver.findElement(By.css("#do1"));
    await DO1.click();
}),


Then ("Button DO-2 is disabled", async function(){
    var DO2 = await driver.findElement(By.css("#do2"));
    await assert.isNull (await DO2.click());
}),
When ("Button DO-2 is clicked", async function(){
    var DO2 = await driver.findElement(By.css("#do2"));
    await DO2.click();
}),
Then ("Button DO-1 is disabled", async function(){
    var DO1 = await driver.findElement(By.css("#do1"));
    await assert.isNull (await DO1.click());
})



// SECOND EXCERCISE


When ("Up arrow is clicked AND it's size increases", async function(){

    var UP = await driver.findElement(By.css("#btnIncreaseFont"));
    let TEXT = await driver.findElement(By.xpath("//p[@id='textFontSize']"));
    let FontSize = await TEXT.getCssValue("font-size"); 
    await UP.click();
    FontSize = await TEXT.getCssValue("font-size"); 
    await assert.isTrue ( FontSize == "23px")});

Then ("Down arrow is clicked AND it's size decreases", async function(){

        var DOWN = await driver.findElement(By.css("#btnDecreaseFont"));
        let TEXT = await driver.findElement(By.xpath("//p[@id='textFontSize']"));
        let FontSize = await TEXT.getCssValue("font-size"); 
        await DOWN.click();
        FontSize = await TEXT.getCssValue("font-size");
        await assert.isTrue ( FontSize == "20px")});


// BONUS EXCERCISE

When (/^the colour "(.*)" is written$/, async function(color){


    
    var BGinput = await driver.findElement(By.css("#bgColor"));
    var button = await driver.findElement(By.css("#btnSetBgColor"));
    await BGinput.sendKeys(color);
    await button.click();
});




 Then (/^Background colour changes to "(.*)"$/, async function(colorname){

    var BG = await driver.findElement(By.css("#formToColorize"));
    console.log (await BG.getCssValue("background"));
    await assert.isTrue (await BG.getAttribute("style") == "background: "+colorname+";");

 });
 


