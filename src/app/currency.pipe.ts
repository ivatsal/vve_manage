import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (typeof value === 'number') {
      return this.formatBudget(value as number);
    }
    return value;
  }
  
  formatBudget(budget: number): string {
    if (budget >= 10000000) {
      return (budget / 10000000).toFixed(2) + " Crores";
    } else if (budget >= 100000) {
      return (budget / 100000).toFixed(2) + " Lacs";
    } else if (budget >= 1000) {
      return (budget / 1000).toFixed(2) + " Thousand";
    } else {
      return budget.toString();
    }
  }
}