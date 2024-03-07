import coreStoresConfigFilesToExclude from "./core-stores-config-files-to-exclude";

console.log('Loading config-sync')

export default (env: any) => {

  const importOnBootstrap = env.bool('IMPORT_CONFIG_ON_BOOTSTRAP', true) as boolean

  console.log('importOnBootstrap: ', importOnBootstrap)

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