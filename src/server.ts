import { App } from './app';
import config from './config/config';
import connection from './db/index';
import { logError, logInfo } from './utils/logger';

const PORT: number = +(config.PORT as string) || 3000;
(async () => {
	try {
		await connection();
		const app = App();
		app.listen(PORT, () => logInfo(`Server is listening on ${PORT}`));
		logInfo(`NODE ENV => ${config.NODE_ENV}`);
	} catch (err) {
		logError(`CONNECTION REFUSED: ${err}`);
	}
})();
