import slugifyConfiguration from "./slugify";
import meilisearchConfiguration from "./meilisearch";
import minioConfiguration from "./minio";

export default ({ env }) => ({
  meilisearch: meilisearchConfiguration(env),
  slugify: slugifyConfiguration,
  upload: minioConfiguration(env),
});
