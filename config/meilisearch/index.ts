import { configurationAnnonceDeLogementMeilisearch } from "./annonce-de-logement";
import { configurationEvenementMeilisearch } from "./evenement";
import { configurationFicheMetierMeilisearch } from "./fiche-metier";
import { configurationOffreDeStageMeilisearch } from "./offre-de-stage";

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
