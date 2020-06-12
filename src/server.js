import 'dotenv/config';
import sirv from 'sirv';
import express from 'express';
import bodyParser from 'body-parser';
import * as sapper from '@sapper/server';

const {
	PORT,
	NODE_ENV,
	AUTH0_CLIENT_ID,
	AUTH0_DOMAIN,
	BASE_URL = `https://${process.env.VERCEL_URL}`
} = process.env;

const dev = NODE_ENV === 'development';

const app = express();

app.use(
	bodyParser.json(),
	bodyParser.urlencoded({ extended: false }),

	sirv('static', { dev }),

	sapper.middleware({
		session: async (req) => {
			const user = null;

			return {
				ip: req.headers['x-forwarded-for'] || '',
				user
			};
		}
	})
);

app.listen(PORT, err => {
	if (err) console.log('error', err);
});

export default app;