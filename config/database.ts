import url from "url";

export default ({ env }: any) => {
  try {
    const databaseURL = env("DATABASE_URL", "postgres://database-user:database-password@127.0.0.1:5432/cms-principal")
    const databaseConnection = url.parse(databaseURL);

    // Checking if the database is PostgreSQL.
    if (databaseConnection.protocol !== "postgres:") { throw new Error("Database must be PostgreSQL."); }

    // Parsing the database hostname from the URL.
    if (databaseConnection.hostname === null) { throw new Error("No database hostname found."); }
    const host = databaseConnection.hostname;

    // Parsing the database port from the URL.
    if (databaseConnection.port === null) { throw new Error("No database port found."); }
    const port = databaseConnection.port;

    // Parsing the database name from the URL.
    if (databaseConnection.pathname === null) { throw new Error("No database name found."); }
    const database = databaseConnection.pathname.substring(1);

    // Parsing the database credentials from the URL.
    if (databaseConnection.auth === null) { throw new Error("No database credentials found"); }
    const [user, password] = databaseConnection.auth.split(':');

    return {
      connection: {
        client: "postgres",
        connection: {
          host,
          port,
          database,
          user,
          password,
          ssl: env.bool("DATABASE_SSL", false),
        },
      },
    }
  } catch (error: any) {
    console.error("Error while configuring the database connection:", error.message)

    process.exit(1);
  }
};
