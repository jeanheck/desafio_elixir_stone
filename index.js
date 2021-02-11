import { Cart } from "./models/Cart.js";
import { EmailFactory } from "./models/Email.js";
import { ProductFactory } from "./models/Product.js";
import { createList, toCurrency } from "./utils.js";

const PRODUCTS_LIST_SIZE = 100;
const EMAILS_LIST_SIZE = 33;

console.log('Loading data...');

const shopping_list = createList(ProductFactory, PRODUCTS_LIST_SIZE);
const emails = createList(EmailFactory, EMAILS_LIST_SIZE);

console.log('Done!');

try {
  console.log('Checking values...');

  let cart = new Cart(shopping_list, emails);

  console.log('Done!');

  console.log('Total to pay for each client:');
  console.table(cart.getTotalPerClient());
  console.log('Total: ', toCurrency(cart.total));
}catch (error) {
  console.log(`ERROR: ${error.message}`);
}


