import { App } from './app';
import config from './config/config';
import connection from './db/index';

const PORT: number = +config.PORT || 3000;
(async () => {
	try {
		await connection();
		const app = App();
		app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
		console.log(`NODE ENV => ${config.NODE_ENV}`);
	} catch (err) {
		console.log(`CONNECTION REFUSED: ${err}`);
	}
})();
