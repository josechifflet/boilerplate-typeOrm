import dotEnv = require('dotenv');
dotEnv.config();
const config = {
	NODE_ENV: process.env.NODE_ENV,
	WHITELIST_URLS: process.env.WHITELIST_URLS?.split(' '),
	DB_USER: process.env.DB_USERNAME,
	DB_PASSWORD: process.env.DB_PASSWORD,
	DB_DATABASE: process.env.DB_DATABASE,
	DB_CONNECTOR: process.env.DB_DIALECT,
	DB_HOST: process.env.DB_HOST,
	DB_PORT: process.env.DB_PORT,
	PORT: process.env.PORT,
	JWT_SECRET: process.env.JWT_SECRET,
};
export default config;
