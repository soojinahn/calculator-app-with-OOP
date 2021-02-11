const MathOperations=require('./Operations/MathOperations');
const Calculation = require("./models/calculation");

class Calculator{
    //static methods can be called wo instatiating and good for actions
    static Sum(a,b){
        //this is how you create a new object and good for data and actions
        return new Calculation(a,b, "Sum");
    }
}

module.exports = Calculator;