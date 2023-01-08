const LIMITE_ENTRIES_EVENEMENT = 1000;
const LIMITE_MAX_EVENEMENTS = 100000;
const LIMITE_MAX_FACETS = 100000;

export const configurationEvenementMeilisearch = {
  entriesQuery: {
    limit: LIMITE_ENTRIES_EVENEMENT,
  },
  settings: {
    filterableAttributes: ["type", "online", "lieu", "dateDebut"],
    searchableAttributes: ["titre", "description", "organismeOrganisateur"],
    sortableAttributes: ["dateDebut"],
    displayedAttributes: ["titre", "dateDebut", "dateFin", "organismeOrganisateur", "lieu", "slug"],
    pagination: {
      maxTotalHits: LIMITE_MAX_EVENEMENTS
    },
    faceting: {
      maxValuesPerFacet: LIMITE_MAX_FACETS
    },
  }
};
