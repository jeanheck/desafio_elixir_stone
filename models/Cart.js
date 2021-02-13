import { isEmptyArray, toCurrency } from "../utils/utils.js";

export class Cart {
  constructor(shopping_list, emails) {
    try {
      if(isEmptyArray(shopping_list)){
        throw new Error("The shopping list can't be empty!");
      }
      if(isEmptyArray(emails)){
        throw new Error("The emails list can't be empty!");
      }
      this.shopping_list = shopping_list; 
      this.emails = emails;
      this.total = this.calculateTotal();
    }catch (error) {
      throw error;
    }
  }

  calculateTotal(){
    return this.shopping_list.map((product) => { return product.amount * product.price})
                    .reduce((total, current) => {return total += current});
  }

  getTotalPerClient(){
    const quotient = Math.floor(this.total / this.emails.length);
    const rest = this.total % this.emails.length;
  
    return this.emails.map((email, key, array) => {
      let valueToPay = quotient;

      //if exists remaind value, we sum it to the debt of the last customer
      if (Object.is(array.length - 1, key)){  
        valueToPay = rest === 0 ? quotient : quotient + rest;
      }

      return {email: email.text, debt: toCurrency(valueToPay)};
    })
  }
}