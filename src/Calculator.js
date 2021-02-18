const Addition=require('./operations/Addition');
const Division=require('./operations/Division');
const Multiplication=require('./operations/Multiplication');
const Square=require('./operations/Square');
const SquareRoot=require('./operations/SquareRoot');
const Subtraction=require('./operations/Subtraction');
const Calculation = require("./models/Calculation");

class Calculator{

    static Calculations = [];
    //static methods can be called wo instantiating and good for actions
    static Addition(a,b){
        //this is how you create a new object and good for data and actions
        let calculation = Calculation.make(a,b, Addition);
        return calculation;
    }

    static Subtraction(a,b){
        //this is how you create a new object and good for data and actions
        let calculation = Calculation.make(a,b, Subtraction);
        return calculation;
    }

    static Multiplication(a,b){
        //this is how you create a new object and good for data and actions
        let calculation = Calculation.make(a,b, Multiplication);
        return calculation;
    }

    static Division(a,b){
        //this is how you create a new object and good for data and actions
        let calculation = Calculation.make(a,b, Division);
        return calculation;
    }

    static Square(a, b){
        //this is how you create a new object and good for data and actions
        let calculation = Calculation.make(a,b, Square);
        return calculation;
    }

    static SquareRoot(a, b){
        //this is how you create a new object and good for data and actions
        let calculation = Calculation.make(a,b, SquareRoot);
        return calculation;
    }
}

module.exports = Calculator;