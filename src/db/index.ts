import { createConnection, getConnectionOptions } from 'typeorm';
import { entities } from './models';

const connection = async () => {
  const options = await getConnectionOptions();
  return createConnection({
    ...options,
    entities
  });
};

export default connection;
