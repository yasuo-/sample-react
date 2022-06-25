import { defineConfig } from "cypress";

import plugins from "./cypress/plugins";

import PluginEvents = Cypress.PluginEvents;
import PluginConfigOptions = Cypress.PluginConfigOptions;

export default defineConfig({
  e2e: {
    setupNodeEvents(on: PluginEvents, config: PluginConfigOptions) {
      return plugins(on, config);
    },
    baseUrl: "http://localhost:31000",
  },
});
