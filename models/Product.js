import { getRandomAmount, parseToCents } from "../utils.js";
import faker from 'faker';

class Product {
  constructor(name, amount, price) {
    this.name = name;
    this.amount = amount;
    this.price = price;
  }
}

export function ProductFactory() {};
ProductFactory.prototype.new = () => {
  return new Product(
    faker.commerce.productName(),
    getRandomAmount(),
    parseToCents(faker.commerce.price())
  );
};