import { CONFIGS } from "./configs.js";

export function getRandomAmount () {
  return Math.floor(Math.random() * CONFIGS.MAX_AMOUNT) + 1;
}
export function parseToCents(price){
  return parseInt(price) * CONFIGS.ONE_REAL_IN_CENTS;
}
export function toCurrency(value){
  return (value / CONFIGS.ONE_REAL_IN_CENTS).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
export function isEmptyArray(array){
  return !array || array === [] || array.length === 0;
}
export function createList(Factory, size){
  let list = [];

  for (let i = 0; i < size; i++) {
    list.push(Factory.prototype.new())
  }

  return list;
}