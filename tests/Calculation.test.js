const Addition = require('../src/Operations/Addition');
const Division = require('../src/Operations/Division');
const Multiplication = require('../src/Operations/Multiplication');
const Square = require('../src/Operations/Square');
const SquareRoot = require('../src/Operations/SquareRoot');
const Subtraction = require('../src/Operations/Subtraction');
const Calculation = require("../src/models/Calculation");

test('Testing calculation instantiation', () => {
    //assigning the results of the calculator sum method to an object, calculator returns an object
    let op = Addition
    let calculation = new Calculation(1,2,op);
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.op).toBe(op);
});

test('Test Get Results for addition function', () => {
    //I need to test the instantiation of the calculation object
    let op = Addition;
    let calculation = new Calculation(1,2, op);
    expect(calculation.GetResults()).toBe(3);
});

test('Test Get Results for subtraction function', () => {
    //I need to test the instantiation of the calculation object
    let op = Subtraction;
    let calculation = new Calculation(1,2, op);
    expect(calculation.GetResults()).toBe(-1);
});

test('Test Get Results for multiplication function', () => {
    //I need to test the instantiation of the calculation object
    let op = Multiplication;
    let calculation = new Calculation(1,2, op);
    expect(calculation.GetResults()).toBe(2);
});

test('Test Get Results for division function', () => {
    //I need to test the instantiation of the calculation object
    let op = Division;
    let calculation = new Calculation(1,2, op);
    expect(calculation.GetResults()).toBe(.5);
});

test('Test Get Results for square function', () => {
    //I need to test the instantiation of the calculation object
    let op = Square;
    let calculation = new Calculation(1,1, op);
    expect(calculation.GetResults()).toBe(1);
});

test('Test Get Results for square root function', () => {
    //I need to test the instantiation of the calculation object
    let op = SquareRoot;
    let calculation = new Calculation(1,1, op);
    expect(calculation.GetResults()).toBe(1);
});
