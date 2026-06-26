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
        // Pool de connexions PostgreSQL géré par Knex (le moteur SQL sous Strapi).
        //
        // Le réglage important ici est `acquireTimeoutMillis`. Par défaut, Knex fait attendre
        // une requête jusqu'à 60 s pour obtenir une connexion libre. Lors d'une rafale, ces
        // attentes s'empilent (event loop occupé, mémoire qui monte) et ont contribué au crash
        // du conteneur en production (incidents du 24/06 et du 05/07 2026). On raccourcit à 5 s
        // pour échouer vite (« fail fast ») plutôt que d'empiler.
        // Nuance importante : ce timeout borne la DURÉE d'attente, pas le NOMBRE de requêtes en
        // file (la file d'attente n'est pas plafonnée ici). La vraie limite de charge vient de
        // l'amont : le cache du sitemap côté front. Ce pool est un garde-fou, pas le correctif.
        //
        // max reste volontairement à 10 : la base prod autorise 80 connexions, mais augmenter
        // ce plafond n'absorbe PAS une rafale (Knex ne crée pas de connexions au-delà du besoin)
        // et rapproche du max_connections de l'addon. Ne l'augmenter qu'avec une raison mesurée,
        // en gardant une marge pour les migrations, l'admin Strapi et Meilisearch.
        pool: {
          min: env.int("DATABASE_POOL_MIN", 2),
          max: env.int("DATABASE_POOL_MAX", 10),
          acquireTimeoutMillis: env.int("DATABASE_POOL_ACQUIRE_TIMEOUT", 5000),
          createTimeoutMillis: env.int("DATABASE_POOL_CREATE_TIMEOUT", 10000),
        },
      },
    }
  } catch (error: any) {
    console.error("Error while configuring the database connection:", error.message)

    process.exit(1);
  }
};
