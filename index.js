import { Cart } from "./models/Cart.js";
import { EmailFactory } from "./models/Email.js";
import { ProductFactory } from "./models/Product.js";
import { createList, toCurrency } from "./utils.js";
import { CONFIGS } from "./constants.js";

try {
  console.log('Loading data...');
  const shopping_list = createList(ProductFactory, CONFIGS.PRODUCTS_LIST_SIZE);
  const emails = createList(EmailFactory, CONFIGS.EMAILS_LIST_SIZE);
  console.log('Done!');

  console.log('Checking values...');
  let cart = new Cart(shopping_list, emails);
  console.log('Done!');

  console.log('Total to pay for each client:');
  console.table(cart.getTotalPerClient());
  console.log('Total: ', toCurrency(cart.total));
}catch (error) {
  console.log(`ERROR: ${error.message}`);
}