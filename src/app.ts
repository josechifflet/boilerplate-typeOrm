import helmet from 'helmet';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import v1Routes from './apiV1/index';
import { internalServerError, notFound } from './utils/errorHandler';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import config from './config/config';

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
  app.use(helmet());
  app.use(cors(corsOptions));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(compression());
  app.use(cookieParser());
  
  app.use('/', v1Routes);
  
  app.use(notFound)
  app.use(internalServerError)


  return app;
};
