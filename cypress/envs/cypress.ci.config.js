const { defineConfig } = require("cypress");

module.exports = defineConfig({
  fixturesFolder: "cypress/fixtures",
  screenshotOnRunFailure: false,
  video: false,
  e2e: {
    baseUrl: "http://localhost:3000",
  },
});
