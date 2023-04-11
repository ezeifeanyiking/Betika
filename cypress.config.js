const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter", // For html reports
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on); // For html report
    },
    specPattern: "cypress/e2e/Betika/allTests.spec.cy.js",
    watchForFileChanges: false,
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    requestTimeout: 15000,
    pageLoadTimeout: 120000,
  },
});
