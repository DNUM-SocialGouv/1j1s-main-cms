import configSync from "./config-sync";
import meilisearchConfiguration from "./meilisearch";
import minioConfiguration from "./minio";
import populateDeepConfiguration from "./populate-deep";
import sentryConfiguration from "./sentry";
import slugifyConfiguration from "./slugify";
import usersPermissionsConfiguration from "./users-permissions";

export default ({ env }) => ({
  "config-sync": configSync,
  meilisearch: meilisearchConfiguration(env),
  sentry: sentryConfiguration(env),
  slugify: slugifyConfiguration,
  "strapi-plugin-populate-deep": populateDeepConfiguration,
  upload: minioConfiguration(env),
  "users-permissions": usersPermissionsConfiguration,
});
