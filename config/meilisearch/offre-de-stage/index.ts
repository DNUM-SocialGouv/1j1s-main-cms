import { transformerOffreDeStage } from "./offre-de-stage.transformation";
import Constante from "../constante";

export default {
  entriesQuery: {
    limit: Constante.LIMITE_ENTRIES_QUERY,
  },
  settings: {
    filterableAttributes: [
      "domaines",
      "source",
      "dateDeDebut",
      "teletravailPossible",
      "niveauEtude",
      "dureeCategorisee",
      "dureeEnJour",
      "dureeEnJourMax",
      "localisation.ville",
      "localisation.region",
      "localisation.departement",
      "localisationFiltree"
    ],
    searchableAttributes: [
      "titre",
      "description",
      "domaines",
      "nomEmployeur",
      "localisation.ville",
      "localisation.region",
      "localisation.departement",
      "duree",
    ],
    sortableAttributes: ["dateDeDebut"],
    displayedAttributes: [
      "titre",
      "domaines",
      "dateDeDebut",
      "source",
      "nomEmployeur",
      "dureeCategorisee",
      "localisationFiltree",
      "slug"
    ],
    pagination: {
      maxTotalHits: Constante.LIMITE_MAX_HITS
    },
    // facetings https://docs.meilisearch.com/reference/api/settings.html#get-settings
    faceting: {
      maxValuesPerFacet: Constante.LIMITE_MAX_FACETS
    },
    synonyms: {
      ingenieur: ["\"6 mois\""],
      "fin d'etudes": ["\"6 mois\"", "\"3 mois\"", "\"2 mois\""],
      "dut": ["\"3 mois\"", "\"2 mois\""]
    },
  },
  transformEntry: transformerOffreDeStage,
};
