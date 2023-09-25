export default ({ env }: any) => {
  const databaseURL = env("DATABASE_URL", "postgres://database-user:database-password@127.0.0.1:5432/cms-principal")

  return {
    connection: {
      client: "postgres",
      connection: {
        host: databaseURL.hostname,
        port: databaseURL.port,
        database: databaseURL.pathname.substr(1),
        user: databaseURL.username,
        password: databaseURL.password,
        ssl: env.bool("DATABASE_SSL", false),
      },
    },
  }
};
