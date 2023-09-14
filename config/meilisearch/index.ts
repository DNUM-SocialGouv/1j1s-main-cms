import configurationAnnonceDeLogementMeilisearch from "./annonce-de-logement/index";
import configurationEvenementMeilisearch from "./evenement/index";
import configurationFicheMetierMeilisearch from "./fiche-metier/index";
import configurationOffreDeStageMeilisearch from "./offre-de-stage/index";

// @ts-ignore
export default (env) => ({
  config: {
    host: env("PLUGIN_MEILISEARCH_URL"),
    apiKey: env("PLUGIN_MEILISEARCH_API_KEY"),
    "annonce-de-logement": configurationAnnonceDeLogementMeilisearch,
    "evenement": configurationEvenementMeilisearch,
    "fiche-metier": configurationFicheMetierMeilisearch,
    "offre-de-stage": configurationOffreDeStageMeilisearch,
  },
});
