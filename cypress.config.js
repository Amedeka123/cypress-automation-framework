const { defineConfig } = require("cypress");

// const fs = require("fs-extra");
// const path = require("path");

// function getConfigurationByFile(file) {
//   const pathToConfigFile = path.resolve( "cypress\\config", `${file}.json`);

//   if (!fs.existsSync(pathToConfigFile)){
//     console.log("No custom congfig file found.")
//     return {};
//   }
//    return fs.readJson(pathToConfigFile);
// }

module.exports = defineConfig({
  e2e: {
    projectId: "tn4rs3",
    // setupNodeEvents(on, config) {
    //   // implement node event listeners here
    //   const file = config.env.configFile || "  ";

    //   return getConfigurationByFile(file);
    // },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    chromeWebSecurity: false,
    env: {
      first_Name: "Ama",
      webdriveruni_homePage: "http://www.webdriveruniversity.com",
    },
    baseUrl: "http://www.webdriveruniversity.com",
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    screenshotsFolder: "./cypress/screenshot",
    trashAssetsBeforeRuns: true,
    video: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      configFile: "reporter-config.json",
    },
    // reporter: "mochawesome",
    // reporterOptions: {
    //   reportDir: "cypress/results/mochawesome",
    //   overwrite: false,
    //   html: false,
    //   json: false,
    // },

    retries: {
      runMode: 0,
      openMode: 1,
    },
  },
});

