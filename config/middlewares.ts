export default [
  "strapi::errors",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
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
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": ["'self'", "data:", "blob:", "dl.airtable.com", process.env.MINIO_ENDPOINT, `*.${process.env.MINIO_ENDPOINTº}`],
          "media-src": ["'self'", "data:", "blob:", "dl.airtable.com", process.env.MINIO_ENDPOINT, `*.${process.env.MINIO_ENDPOINTº}`],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
];
