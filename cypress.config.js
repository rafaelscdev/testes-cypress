const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: 'cypress-mochawesome',
  reporterOptions: {
    reportDir: 'cypress/relatorio',
    overwrite: true,
    html: true,
    json: false,
    timestamp: 'ddmmyyyy_HHMMss'
  }
});
