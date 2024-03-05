export default (env: any) => ({
  config: {
    provider: "aws-s3",
    providerOptions: {
      s3Options: {
        accessKeyId: env("MINIO_ACCESS_KEY"),
        secretAccessKey: env("MINIO_SECRET_KEY"),
        region: "us-east-1",
        endpoint: env("MINIO_ENDPOINT"), // region in the endpoint but no bucket name
        params: {
          Bucket: env("MINIO_BUCKET"), // bucket name in the providerOptions
        },
        forcePathStyle: true,
      },
    },
  },
});
