const MAX_AMOUNT = 100;

export function getRandomAmount () {
  return Math.floor(Math.random() * MAX_AMOUNT) + 1;
}
export function parseToCents(price){
  return parseInt(price) * 100;
}
export function toCurrency(value){
  return (value / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
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