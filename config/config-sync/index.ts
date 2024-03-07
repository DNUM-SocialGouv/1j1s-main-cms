import coreStoresConfigFilesToExclude from "./core-stores-config-files-to-exclude";

export default function ({ env }: any) {

  const importOnBootstrap = env.bool('IMPORT_CONFIG_ON_BOOTSTRAP', true) as boolean

  return {
    enabled: true,
    config: {
      syncDir: "config/config-sync/files/",
      minify: false,
      importOnBootstrap,
      excludedTypes: ["i18n-locale"],
      excludedConfig: [...coreStoresConfigFilesToExclude]
    }
  }
}
