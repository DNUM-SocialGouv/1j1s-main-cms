import coreStoresConfigFilesToExclude from "./core-stores-config-files-to-exclude";

export default {
  enabled: true,
  config: {
    syncDir: "config/config-sync/files/",
    minify: false,
    importOnBoostrap: true,
    excludedTypes: ["i18n-locale"],
    excludedConfig: [...coreStoresConfigFilesToExclude]
  },
};
