import Constante from "../constante";

export default {
  entriesQuery: {
    limit: Constante.LIMITE_ENTRIES_QUERY,
  },
  settings: {
    filterableAttributes: ["type", "online", "lieu", "dateDebut"],
    searchableAttributes: ["titre", "description", "organismeOrganisateur"],
    sortableAttributes: ["dateDebut"],
    displayedAttributes: ["titre", "dateDebut", "dateFin", "organismeOrganisateur", "lieu", "slug"],
    pagination: {
      maxTotalHits: Constante.LIMITE_MAX_HITS
    },
    faceting: {
      maxValuesPerFacet: Constante.LIMITE_MAX_FACETS
    },
  }
};
