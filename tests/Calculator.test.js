const Calculator = require('../src/Calculator');

test('Calculator adding two numbers', () => {
    //I need to test the instantiation of the calculation object
    let result = Calculator.Addition(1,2);
    expect(result).toBe(3);
});

test('Calculator subtracting two numbers', () => {
    //I need to test the instantiation of the calculation object
    let result = Calculator.Subtraction(1,2);
    expect(result).toBe(-1);
});

test('Calculator multiplying two numbers', () => {
    //I need to test the instantiation of the calculation object
    let result = Calculator.Multiplication(1,2);
    expect(result).toBe(2);
});

test('Calculator dividing two numbers', () => {
    //I need to test the instantiation of the calculation object
    let result = Calculator.Division(1,2);
    expect(result).toBe(.5);
});

test('Calculator squaring a number', () => {
    //I need to test the instantiation of the calculation object
    let result = Calculator.Square(1);
    expect(result).toBe(1);
});

test('Calculator taking square root of a number', () => {
    //I need to test the instantiation of the calculation object
    let result = Calculator.SquareRoot(1);
    expect(result).toBe(1);
});

test('Calculator adding to calculations', () => {
    //I need to test the instantiation of the calculation object
    let calculations = Calculator.Calculations;
    calculations.forEach(function (calc) {
        console.log(calc.GetResults())
    });
});

