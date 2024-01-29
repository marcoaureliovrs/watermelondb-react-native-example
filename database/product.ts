import { Model } from '@nozbe/watermelondb';

import {field, readonly, date, action, writer} from '@nozbe/watermelondb/decorators';

export default class Product extends Model {

	static table = 'products';

	@field('name') name;

	@field('price') price;

	@field('note') note;

	@readonly @date('created_at') createdAt;

}