const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');


module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter", // For html reports
  e2e: {
    setupNodeEvents(on, config) { 
      require('cypress-mochawesome-reporter/plugin')(on);
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
          "json": true,
          "timestamp": "mmddyyyy_HHMMss",
          "charts": true,
          "autoOpen": true
      }
  }
  },
});
