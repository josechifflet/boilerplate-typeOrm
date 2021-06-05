import { createConnection } from 'typeorm';
import config from '../config/config';
import { entities } from './models';

const connection = async () => {
  return createConnection({
    type: config.DB_CONNECTOR as any,
    host: config.DB_HOST,
    port: config.DB_PORT,
    username: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_DATABASE,
    synchronize: config.NODE_ENV !== 'production',
    logging: config.NODE_ENV !== 'production',
    entities,
    cli: {
      entitiesDir: 'src/db/models',
      migrationsDir: 'src/db/migrations',
      subscribersDir: 'src/db/subscribers',
    },
  });
};

export default connection;
