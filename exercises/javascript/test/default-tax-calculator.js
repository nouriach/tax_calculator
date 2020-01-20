const { TaxCalculator } = require('../tax-calculator');

/**
* @deprecated
*/
let NewTaxCalculator = class NewTaxCalculator extends TaxCalculator {
  constructor() {
    super();
  }
  calculateTax(vehicle) {
    return -1;
  }
}

module.exports = {
  NewTaxCalculator: NewTaxCalculator
}