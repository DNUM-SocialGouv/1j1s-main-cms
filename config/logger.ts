'use strict';

// See docs in https://docs.strapi.io/dev-docs/configurations/middlewares#logger
// for more information about the logger configuration for Strapi

import * as winston from 'winston';
import { formats as strapiLogFormats } from '@strapi/logger';

// See LogForm docs for logstash format : https://github.com/winstonjs/logform#logstash
const logstashFormat = () => winston.format.logstash()

const prettyFormat = () => strapiLogFormats.prettyPrint() as winston.Logform.Format

export default function ({ env }: any) {
  // Available log levels :
  // error: 0, warn: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6
  // See https://github.com/winstonjs/triple-beam/blob/master/config/npm.js
  const logLevel = env('LOG_LEVEL', 'http') as string
  // Available log formats : logstash, pretty
  const logFormat = env('LOG_FORMAT', 'pretty') as string

  return {
    transports: [
      new winston.transports.Console({
        level: logLevel,
        format: winston.format.combine(
          winston.format.timestamp(),
          (logFormat === 'logstash') ? logstashFormat() : prettyFormat()
        ),
      }),
    ],
  }
};
