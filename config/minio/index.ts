export default (env: any) => ({
  config: {
    provider: 'strapi-provider-upload-ts-minio',
    providerOptions: {
      accessKey: env('MINIO_ACCESS_KEY'),
      secretKey: env('MINIO_SECRET_KEY'),
      bucket: env('MINIO_BUCKET'),
      endPoint: env('MINIO_ENDPOINT'),
    },
  },
 /* config: {
    provider: "aws-s3",
    providerOptions: {
      accessKeyId: env("MINIO_ACCESS_KEY"),
      secretAccessKey: env("MINIO_SECRET_KEY"),
      endpoint: env("MINIO_ENDPOINT"),
      region: 'us-east-1',
      baseUrl: `${env("MINIO_ENDPOINT")}/${env("MINIO_BUCKET")}`, // This line sets the custom url format
      s3ForcePathStyle: true,
      params: {
        Bucket: env("MINIO_BUCKET"),
      },
    },
  }, */
});
