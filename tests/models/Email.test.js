import { EmailFactory } from "../../models/Email.js"

test('EmailFactory -> Creating a email using the factory', () => {
  const Email = EmailFactory.prototype.new();

  expect(Email.text).toEqual(expect.anything());
});