export default (env: any) => ({
  enabled: true,
  config: {
    dsn: env("SENTRY_DSN"),
    init: {
      release: `${env("npm_package_name")}@${env("npm_package_version")}`,
      environment: env("SENTRY_ENVIRONMENT", "dev")
    }
  },
})
