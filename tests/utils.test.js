import { parseToCents } from "../utils.js";

test('parseToCents', () => {
  expect(parseToCents(2,99)).toBe(299);
});