export default [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": ["'self'", "data:", "blob:", "dl.airtable.com", process.env.MINIO_ENDPOINT],
          "media-src": ["'self'", "data:", "blob:", "dl.airtable.com", process.env.MINIO_ENDPOINT],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  {
    name: "strapi::body",
    config: {
      jsonLimit: "200mb"
    }
  },
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
