import dotEnv = require('dotenv');
dotEnv.config();
const config = {
  NODE_ENV: process.env.NODE_ENV!,
  PORT: process.env.PORT!,

  DB_USER: process.env.DB_USER!,
  DB_PASSWORD: process.env.DB_PASSWORD!,
  DB_DATABASE: process.env.DB_DATABASE!,
  DB_CONNECTOR: process.env.DB_DIALECT!,
  DB_HOST: process.env.DB_HOST!,
  DB_PORT: +process.env.DB_PORT!,

  JWT_PRIVATE_KEY: process.env.JWT_PRIVATE_KEY!.replace(/\\n/g, '\n')!,
  JWT_PUBLIC_KEY: process.env.JWT_PUBLIC_KEY!.replace(/\\n/g, '\n')!,
  JWT_PASSPHRASE: process.env.JWT_PASSPHRASE!,
  JWT_ISSUER: process.env.JWT_ISSUER!,
  JWT_KID: process.env.JWT_KID!,
  JWT_TOKEN_USE: process.env.JWT_TOKEN_USE!,
  JWT_AUDIENCE: process.env.JWT_AUDIENCE!.split(' ')!,
  JWT_ALG: process.env.JWT_ALG!,
  JWT_EXPIRATION: process.env.JWT_EXPIRATION!,
  X_API_KEY: process.env.X_API_KEY!,
};
export default config;
