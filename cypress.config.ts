import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    //baseUrl: 'http://localhost:3000',
    baseUrl: 'https://practicetestautomation.com/',
    specPattern: 'cypress/e2e/*/.spec.{js,ts}', 
    supportFile: 'cypress/support/e2e.ts',
    viewportWidth: 1280,
    viewportHeight: 800,
    defaultCommandTimeout: 5000,
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true
  }
});
