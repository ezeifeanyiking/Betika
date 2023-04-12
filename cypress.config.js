const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');


module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter", // For html reports
  e2e: {
    setupNodeEvents(on, config) { 
      // implement node event listeners here
      on('before:run', async (details) => { // For html report
        console.log('override before:run');
        await beforeRunHook(details);
      });

      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook(); 
      })
    },
    video: false,
    specPattern: "cypress/e2e/Betika/allTests.spec.cy.js",
    watchForFileChanges: false,
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    requestTimeout: 15000,
    pageLoadTimeout: 120000,
    "reporterOptions": {
      "reporterEnabled": "mochawesome",
      "mochawesomeReporterOptions": {
          "reportDir": "cypress/report",
          "quite": true,
          "overwrite": false,
          "html": false,
          "json": true
      }
  }
  },
});
