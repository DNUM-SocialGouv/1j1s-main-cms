export default (env: any) => ({
  config: {
    provider: 'aws-s3',
    providerOptions: { // deprecated ? pour s3Options ?
      s3Options: {
        accessKeyId: env('MINIO_ACCESS_KEY'),
        secretAccessKey: env('MINIO_SECRET_KEY'),
        region: env('AWS_REGION'),
        params: {
          Bucket: env('MINIO_BUCKET'),
        },
        endpoint: env('MINIO_ENDPOINT'),
        baseUrl: 'https://s3.eu-west-3.amazonaws.com/strapi-medias', // This line sets the custom url format
        s3ForcePathStyle: true,
      },
      // baseUrl: 'https://s3.us-east-1.amazonaws.com/main-strapi-medias', // This line sets the custom url format
    },
  },
});
