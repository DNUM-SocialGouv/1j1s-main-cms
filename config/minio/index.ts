export default (env: any) => ({
  /*config: {
    provider: 'strapi-provider-upload-ts-minio',
    providerOptions: {
      accessKey: env('MINIO_ACCESS_KEY'),
      secretKey: env('MINIO_SECRET_KEY'),
      bucket: env('MINIO_BUCKET'),
      endPoint: env('MINIO_ENDPOINT'),
    },
  },*/
/*
   config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("MINIO_ACCESS_KEY"),
        secretAccessKey: env("MINIO_SECRET_KEY"),
        endpoint: env("MINIO_ENDPOINT"),
        region: 'us-east-1',
        baseUrl: `${env("MINIO_ENDPOINT")}/${env("MINIO_BUCKET")}`, // Needed for cegedim.cloud
        s3ForcePathStyle: true,
        params: {
          Bucket: env("MINIO_BUCKET"),
        },
      },
    },
  */

  config: {
    provider: 'aws-s3',
    providerOptions: {
      s3Options: {
        /*  accessKeyId: env("MINIO_ACCESS_KEY"),
          secretAccessKey: env("MINIO_SECRET_KEY"),*/
        credentials: {
          accessKeyId: env("MINIO_ACCESS_KEY"),
          secretAccessKey: env("MINIO_SECRET_KEY"),
        },
        region: 'us-east-1',
        endpoint: env('MINIO_ENDPOINT'),
        //baseUrl: `${env("MINIO_ENDPOINT")}/${env("MINIO_BUCKET")}`, // Needed for cegedim.cloud
        params: {
          //ACL: process.env.AWS_ACL || 'public-read',
          //signedUrlExpires: process.env.AWS_SIGNED_URL_EXPIRES || 15 * 60,
          Bucket: env("MINIO_BUCKET"),
        },
      },
    },
    actionOptions: {
      upload: {},
      uploadStream: {},
      delete: {},
    },
  },
});
