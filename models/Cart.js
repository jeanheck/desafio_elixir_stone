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
    let rest = this.total % this.emails.length;
    let debts = this.emails.map((email) => {
      return {email: email.text, debt: quotient}
    });

    debts.forEach(item => {
      if(rest > 0){
        item.debt += 1;
        rest -= 1;
      }
      item.debt = toCurrency(item.debt);
    });

    return debts;
  }
}