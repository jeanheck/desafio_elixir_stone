import { parseToCents, getRandomAmount, toCurrency, isEmptyArray, createList } from "../../utils/utils.js";
import { ProductFactory } from "../../models/Product.js"
import { EmailFactory } from "../../models/Email.js"

test('parseToCents -> covert R$ 299.00, in a equivalente value in Cents', () => {
  expect(parseToCents(299)).toBe(29900);
});

test('getRandomAmount -> check if return is a number, between 1 and 100', () => {
  const randomAmount = getRandomAmount();
  expect(typeof randomAmount).toBe('number');
  expect(randomAmount).toBeGreaterThanOrEqual(1);
  expect(randomAmount).toBeLessThanOrEqual(100);
});

test('toCurrency -> format 19900 Cents in R$ 199,00', () => {
  expect(encodeURIComponent(toCurrency(19900))).toEqual(encodeURIComponent('R$ 199,00'))
});

test('isEmptyArray -> check if array is true/false', () => {
  const emptyArray = [];
  const arrayWithValues = [1, 2, 3];

  expect(isEmptyArray(emptyArray)).toBe(true);
  expect(isEmptyArray(arrayWithValues)).toBe(false);
});

const LIST_SIZE = 3;

test('createList -> with ProductFactory', () => {
  const products = createList(ProductFactory, LIST_SIZE);
  
  expect(products.length).toBe(3);
  expect(products.some((product) => {return product.name === null})).toBe(false);
  expect(products.some((product) => {return product.amount === null})).toBe(false);
  expect(products.some((product) => {return product.price === null})).toBe(false);
});

test('createList -> with EmailFactory', () => {
  const emails = createList(EmailFactory, LIST_SIZE);
  
  expect(emails.length).toBe(3);
  expect(emails.some((email) => {return email.text === null})).toBe(false);
});