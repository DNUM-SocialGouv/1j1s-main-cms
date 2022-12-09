const LIMITE_ENTRIES_EVENEMENT = 1000
const LIMITE_MAX_EVENEMENTS = 100000
const LIMITE_MAX_FACETS = 100000

module.exports = ({env}) => ({
  meilisearch: {
    config: {
      host: env('PLUGIN_MEILISEARCH_URL'),
      apiKey: env("PLUGIN_MEILISEARCH_API_KEY")
    },
    "evenement": {
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
    },
  },
})
