import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import Product from './product';
import schema from './schema';


const adapter = new SQLiteAdapter({
	dbName: 'ExammpleWatermelonDB',
	schema,
	onSetUpError: error => {
		console.log(JSON.stringify(error));
	}
});

export const database = new Database({
	adapter,
	modelClasses: [Product],
});