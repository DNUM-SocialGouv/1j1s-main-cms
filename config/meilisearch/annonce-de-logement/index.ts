import { transformerAnnonceDeLogement } from "./annonce-de-logement.tranformation";

const LIMITE_MAX_FACETS = 100000;
const LIMITE_MAX_LOGEMENTS = 100000;
const ENTRIES_QUERY = 5000;

export default {
  entriesQuery: {
    limit: ENTRIES_QUERY,
  },
  settings: {
    filterableAttributes: [
      "typeBien",
      "type",
      "localisation.ville",
      "localisation.codePostal",
      "prix",
      "surface",
      "surfaceMax"
    ],
    searchableAttributes: [
      "localisation.ville",
      "localisation.codePostal",
    ],
    displayedAttributes: [
      "slug",
      "titre",
      "dateDeDisponibilite",
      "dateDeMiseAJour",
      "devise",
      "prix",
      "prixHT",
      "surface",
      "surfaceMax",
      "surfaceAAfficher",
      "type",
      "url",
      "imagesUrl",
      "sourceUpdatedAt",
      "localisationAAfficher",
    ],
    pagination: {
      maxTotalHits: LIMITE_MAX_LOGEMENTS
    },
    faceting: {
      maxValuesPerFacet: LIMITE_MAX_FACETS
    },
  },
  transformEntry: transformerAnnonceDeLogement
};
