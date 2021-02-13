import { ProductFactory } from "../../models/Product.js"

test('ProductFactory -> Creating a product using the factory', () => {
  const Product = ProductFactory.prototype.new();

  expect(Product.name).toEqual(expect.anything());
  expect(Product.amount).toEqual(expect.anything());
  expect(Product.price).toEqual(expect.anything());
});