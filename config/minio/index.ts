export default (env: any) => ({
  config: {
    provider: "aws-s3",
    providerOptions: {
      accessKeyId: env("MINIO_ACCESS_KEY"),
      secretAccessKey: env("MINIO_SECRET_KEY"),
      endpoint: env("MINIO_ENDPOINT"),
      //s3ForcePathStyle: true,
      //baseUrl: `${env("MINIO_ENDPOINT")}/${env("MINIO_BUCKET")}`,
      region: 'us-east-1',
      Bucket: env("MINIO_BUCKET"),
      params: {
        Bucket: env("MINIO_BUCKET"),
      },
    },
  },
});
