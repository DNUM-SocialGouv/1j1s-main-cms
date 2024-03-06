export default (env: any) => ({
  config: {
    provider: "aws-s3",
    providerOptions: {
      s3Options: {
        accessKeyId: env("MINIO_ACCESS_KEY"),
        secretAccessKey: env("MINIO_SECRET_KEY"),
        region: "us-east-1",
        endpoint: env("MINIO_ENDPOINT"),
        params: {
          Bucket: env("MINIO_BUCKET"),
        },
        forcePathStyle: true,
      },
    },
  },
});
