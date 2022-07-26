

This to have in consideration in this automation assessment:

    - Dependencies used: {selenium-webdriver, cucumber, cucumber-html-reporter, chromedriver, chai}
    - It's been done using JS instead of Java.
    - The functions created for this exercise can be found in features/steps/securitize.JS
    - The diferent scenarios are detailed using Gherkin syntax in feature/test/securitize.feature
    - This suite can be run using the following command: "npm run test" (script detailled in package.json)
    - Once this automation process in completed, it's results will be consumed in an HTML file as a report
      that can be opened directly from the file (assessment/reports/cucumber_report.html) o by runing
      the following commands "node reportGenerator.js" or "npm run report"