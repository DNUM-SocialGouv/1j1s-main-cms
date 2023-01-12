import { transformerAnnonceDeLogement } from "./annonce-de-logement.transformation";
import Constante from "../constante";

export default {
  entriesQuery: {
    limit: Constante.LIMITE_ENTRIES_QUERY,
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
      maxTotalHits: Constante.LIMITE_MAX_HITS
    },
    faceting: {
      maxValuesPerFacet: Constante.LIMITE_MAX_FACETS
    },
  },
  transformEntry: transformerAnnonceDeLogement
};
