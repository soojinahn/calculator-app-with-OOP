const Addition=require('./Operations/Addition');
const Division=require('./Operations/Division');
const Multiplication=require('./Operations/Multiplication');
const Square=require('./Operations/Square');
const SquareRoot=require('./Operations/SquareRoot');
const Subtraction=require('./Operations/Subtraction');
const Calculation = require("./models/Calculation");

class Calculator{

    static Calculations = [];
    //static methods can be called wo instantiating and good for actions
    static Addition(a,b){
        //this is how you create a new object and good for data and actions
        let calculation = new Calculation(a,b, Addition);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }

    static Subtraction(a,b){
        //this is how you create a new object and good for data and actions
        let calculation = new Calculation(a,b, Subtraction);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }

    static Multiplication(a,b){
        //this is how you create a new object and good for data and actions
        let calculation = new Calculation(a,b, Multiplication);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }

    static Division(a,b){
        //this is how you create a new object and good for data and actions
        let calculation = new Calculation(a,b, Division);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }

    static Square(a){
        //this is how you create a new object and good for data and actions
        let calculation = new Calculation(a, Square);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }

    static SquareRoot(a){
        //this is how you create a new object and good for data and actions
        let calculation = new Calculation(a, SquareRoot);
        Calculator.Calculations.push(calculation);
        return calculation.GetResults();
    }

}

module.exports = Calculator;