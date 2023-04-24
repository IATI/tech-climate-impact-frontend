const { defineConfig } = require("cypress");

module.exports = defineConfig({
  fixturesFolder: "cypress/fixtures",
  screenshotOnRunFailure: false,
  video: false,
  e2e: {
    baseUrl: "https://climate.iatistandard.org",
  },
});
