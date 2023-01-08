import { configurationAnnonceDeLogementMeilisearch } from "./meilisearch/annonce-de-logement";
import { configurationEvenementMeilisearch } from "./meilisearch/evenement";
import { configurationFicheMetierMeilisearch } from "./meilisearch/fiche-metier";
import { configurationOffreDeStageMeilisearch } from "./meilisearch/offre-de-stage";

export default ({ env }) => ({
  meilisearch: {
    config: {
      host: env("PLUGIN_MEILISEARCH_URL"),
      apiKey: env("PLUGIN_MEILISEARCH_API_KEY")
    },
    "annonce-de-logement": configurationAnnonceDeLogementMeilisearch,
    "evenement": configurationEvenementMeilisearch,
    "fiche-metier": configurationFicheMetierMeilisearch,
    "offre-de-stage": configurationOffreDeStageMeilisearch,
  },
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("MINIO_ACCESS_KEY"),
        secretAccessKey: env("MINIO_SECRET_KEY"),
        endpoint: env("MINIO_ENDPOINT"),
        s3ForcePathStyle: true,
        params: {
          Bucket: env("MINIO_BUCKET"),
        },
      },
    },
  },
})
