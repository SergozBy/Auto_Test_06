const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "retries": 2,
    "baseUrl": "http://localhost:3000",
    viewportWidth: 360,
    viewportHeight: 800,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
