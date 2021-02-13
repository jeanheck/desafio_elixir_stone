import { Cart } from "../../models/Cart.js";

const products = [
  {
    name: 'Shirt',
    amount: 4,
    price: 100
  }
];
const emails = [
  {text: 'firstuser@gmail.com'},
  {text: 'seconduser@gmail.com'},
  {text: 'thirduser@gmail.com'}
];

const cart = new Cart(products, emails);

test('Cart -> creating a new cart with a products empty list', () => {
  expect(() => {new Cart([], emails)}).toThrow(Error);
  expect(() => {new Cart([], emails)})
    .toThrow("The shopping list can't be empty!");
});
test('Cart -> creating a new cart with a emails empty list', () => {
  expect(() => {new Cart(products, [])}).toThrow(Error);
  expect(() => {new Cart(products, [])})
    .toThrow("The emails list can't be empty!");
});
test('Cart -> creating a new cart with acceptable lists', () => {  
  expect(cart.shopping_list).toBe(products);
  expect(cart.emails).toBe(emails);
  expect(cart.total).toBe(400);
});
test('Cart -> getTotalPerClient -> divide value between the clients', () => {
  const valueToPay = [{"debt": "R$ 1,33", "email": "firstuser@gmail.com"}, {"debt": "R$ 1,33", "email": "seconduser@gmail.com"}, {"debt": "R$ 1,34", "email": "thirduser@gmail.com"}];
  expect(encodeURIComponent(cart.getTotalPerClient())).toStrictEqual(encodeURIComponent(valueToPay));
});