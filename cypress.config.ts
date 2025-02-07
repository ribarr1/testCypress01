import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    //baseUrl: 'http://localhost:3000', 
    specPattern: 'cypress/e2e/**/*.spec.{js,ts}', 
    supportFile: 'cypress/support/e2e.ts', 
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true
  }
});
