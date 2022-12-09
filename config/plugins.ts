const LIMITE_ENTRIES_EVENEMENT = 1000
const LIMITE_MAX_LOGEMENTS = 100000
const LIMITE_MAX_EVENEMENTS = 100000
const LIMITE_MAX_FACETS = 100000

const getSurfaceToDisplay = (surface: string, surfaceMax: string): string => {
  if (surfaceMax === null) return `${surface}m²`
  return `de ${surface} à ${surfaceMax}m²`
}
interface Localisation  {
  ville: string
  codePostal: string
}

const getLocalisationToDisplay = (localisation: Localisation): string => {
  const { ville, codePostal } = localisation
  if (ville && codePostal) return codePostal + ' - ' + ville;
  if (codePostal) return codePostal
  return ville;
}


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

    "annonce-de-logement": {
      entriesQuery: {
        limit: 5000,
      },
      settings: {
        filterableAttributes: [
          "typeBien",
          "type",
          "localisation.ville",
          "localisation.codePostal",
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
          "prix",
          "prixHT",
          "surface",
          "surfaceMax",
          "surfaceAAfficher",
          "type",
          "url",
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
      transformEntry({ entry }) {
        return {
          ...entry,
          surfaceAAfficher: getSurfaceToDisplay(entry.surface, entry.surfaceMax),
          dateDeMiseAJour: entry.sourceUpdatedAt,
          localisationAAfficher: getLocalisationToDisplay(entry.localisation),
          localisation: entry.localisation && {
            ville: entry.localisation.ville,
            codePostal: entry.localisation.codePostal,
          },
        }
      },
    },
  },
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('MINIO_ACCESS_KEY'),
        secretAccessKey: env('MINIO_SECRET_KEY'),
        endpoint: env('MINIO_ENDPOINT'),
        s3ForcePathStyle: true,
        params: {
          Bucket: env('MINIO_BUCKET'),
        },
      },
    },
  },
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        'annonce-de-logement': {
          field: 'slug',
          references: ['titre', 'identifiantSource']
        },
        'evenement': {
          field: 'slug',
          references: ['titre', 'idSource']
        },
      },
      slugifyWithCount: true, // DEVNOTE : the count does not work with compound references
    },
  },
})
