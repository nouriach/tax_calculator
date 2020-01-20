const { FuelType } = require('./fuel-type');



let TaxCalculator = class TaxCalculator {
  constructor(year) {
    if (year === undefined) {
      let date = new Date();
      this.year = date.getFullYear();
    } else {
      this.year = year;
    }
    
  }

  
  getYear() {
    return this.year;
  }

  calculateTax(vehicle) {
    

    if (vehicle.co2Emissions === 0) {
      return 0;
    }
    else if (vehicle.co2Emissions <= 50){
      return 10;
    }
    else if (vehicle.co2Emissions > 50 && vehicle.co2Emissions <= 75) {
      return 25;
    }
    else if (vehicle.co2Emissions > 75 && vehicle.co2Emissions <= 90) {
      return 105;
    }
    else if (vehicle.co2Emissions > 90 && vehicle.co2Emissions <= 100) {
      return 125;
    }
    else if (vehicle.co2Emissions > 100 && vehicle.co2Emissions <= 110) {
      return 145;
    }
    else if (vehicle.co2Emissions > 110 && vehicle.co2Emissions <= 135) {
      return 165;
    }
    else if (vehicle.co2Emissions > 135 && vehicle.co2Emissions <= 150) {
      return 205;
    }
    else if (vehicle.co2Emissions > 150 && vehicle.co2Emissions <= 170) {
      return 515;
    }
    else if (vehicle.co2Emissions > 170 && vehicle.co2Emissions <= 190) {
      return 830;
    }
    else if (vehicle.co2Emissions > 190 && vehicle.co2Emissions <= 225) {
      return 1240;
    }
    else if (vehicle.co2Emissions > 225 && vehicle.co2Emissions <= 255) {
      return 1760;
    }
    else if (vehicle.co2Emissions > 255) {
      return 2070;
    }
    else {
          throw new Error('You have to implement the method doSomething!');
    }
  
  }

}
module.exports = { TaxCalculator: TaxCalculator }