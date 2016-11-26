'use strict';

class FactoryPattern {
  constructor() {
  
  }

  createEmployee(empType) {
    let employee;
    if (empType === "partTime") {
      employee = new PartTime();
    } else if (empType === 'fullTime') {
      employee = new FullTime();
    }

    employee.type = empType;

    employee.say = function() {
      console.log(this.type + ": rate " + this.hourly);
    }
  }
}