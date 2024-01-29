import {database} from './database';

export type Product = {
	createdAt?: Date;
	name: string;
	price: string | number;
	note: string | undefined;
};

const products = database.collections.get('products');

export const observeProducts = () => products.query().observe();

export const saveProduct = (async({name, price, note}: Product) => {
	await database.write(async () => {
		const productReg = await database.get('products').create(entry => {
			entry.name = name
			entry.price = Number(price),
			entry.note = note
		});
		return productReg
	});
});