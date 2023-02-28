import coreStoresConfigFilesToExclude from "./core-stores-config-files-to-exclude";

export default {
  enabled: true,
  config: {
    syncDir: "config/config-sync/files/",
    minify: false,
    importOnBootstrap: true,
    excludedTypes: ["i18n-locale"],
    excludedConfig: [...coreStoresConfigFilesToExclude]
  },
};
