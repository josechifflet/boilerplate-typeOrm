import helmet from 'helmet';
import cors from 'cors';
import express from 'express';
import v1Routes from './apiV1/index';
import { json, urlencoded } from 'body-parser';
import { apiKeyMiddleware } from './middlewares';
import { errorHandler } from './utils/errorHandler';

export const App = (): express.Application => {
  const app: express.Application = express();
  app.use(cors());
  app.use(helmet());
  app.use(urlencoded({ extended: true, limit: '1kb' }));
  app.use(json({ limit: '1kb' }));

  app.use('/', (_, res) => res.status(200).send());
  app.use('/v1', apiKeyMiddleware, v1Routes);
  app.use('*', (_, res) => res.status(404).send());

  app.use(errorHandler);
  return app;
};
