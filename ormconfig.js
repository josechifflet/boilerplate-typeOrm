require('dotenv');

module.exports = {
  type: process.env.DB_CONNECTOR,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: true,
  entities: ['dist/models/**/*.js'],
  migrations: ['dist/db/migrations/**/*.js'],
  subscribers: ['dist/db/subscribers/**/*.js'],
  cli: {
    entitiesDir: 'src/models',
    migrationsDir: 'src/db/migrations',
    subscribersDir: 'src/db/subscribers'
  }
};
