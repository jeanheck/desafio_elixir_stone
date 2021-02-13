import { Cart } from "../../models/Cart.js";

const products = [
  {
    name: 'Shirt',
    amount: 4,
    price: 100
  }
];
const emails = [
  {text: 'userNumberOne@gmail.com'},
  {text: 'userNumberTwo@gmail.com'},
  {text: 'userNumberThree@gmail.com'},
  {text: 'userNumberFour@gmail.com'},
  {text: 'userNumberFive@gmail.com'},
  {text: 'userNumberSix@gmail.com'},
  {text: 'userNumberSeven@gmail.com'},
  {text: 'userNumberEight@gmail.com'},
  {text: 'userNumberNine@gmail.com'}
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
  const valueToPay = [
    {"debt": "R$ 0,45", "email": "userNumberOne@gmail.com"}, 
    {"debt": "R$ 0,45", "email": "userNumberTwo@gmail.com"}, 
    {"debt": "R$ 0,45", "email": "userNumberThree@gmail.com"},
    {"debt": "R$ 0,45", "email": "userNumberFour@gmail.com"},
    {"debt": "R$ 0,44", "email": "userNumberFive@gmail.com"},
    {"debt": "R$ 0,44", "email": "userNumberSix@gmail.com"},
    {"debt": "R$ 0,44", "email": "userNumberSeven@gmail.com"},
    {"debt": "R$ 0,44", "email": "userNumberEight@gmail.com"},
    {"debt": "R$ 0,44", "email": "userNumberNine@gmail.com"}
  ];
  expect(cart.getTotalPerClient()).toStrictEqual(valueToPay);
});