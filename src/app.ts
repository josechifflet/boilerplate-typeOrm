import helmet from 'helmet';
import cors from 'cors';
import express from 'express';
import v1Routes from './apiV1/index';
import compression from 'compression';
import config from './config/config';
import { errorCatch } from './utils/errorHandler';
import { json, urlencoded } from 'body-parser';

const corsOptions = {
  origin(origin: string, call: (err: Error | null, allow?: boolean) => void) {
    if (config.WHITELIST_URLS?.indexOf(origin) !== -1 || !origin) {
      call(null, true);
    } else {
      call(new Error('Not allowed'), false);
    }
  },
  credentials: true,
  allowedHeaders: [
    'Save-Data',
    'Content-Type',
    'Authorization',
    'Content-Length',
    'X-Requested-With',
    'Accept',
  ],
}

export const App = (): express.Application => {
  const app: express.Application = express();
  app.use(compression());
  app.use(cors(corsOptions));
  app.use(helmet());
  app.use(json());
  app.use(urlencoded({ extended: false }));
  app.use('/', v1Routes);
  app.use(errorCatch)
  return app;
};
