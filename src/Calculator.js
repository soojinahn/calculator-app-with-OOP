const MathOperations=require('./Operations/MathOperations');
const Calculation = require("./models/calculation");

class Calculator{
    static Sum(a,b){
        let calculation = new Calculation(a,b, "Sum");
        return calculation;
    }
}

module.exports = Calculator;