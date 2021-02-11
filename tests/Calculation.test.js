//Arrange

const Calculation = require('../src/models/calculation');

test('Calculator adding two numbers', () => {
    //assigning the results of the calculator sum method to an object, calculator returns an object
    let calculation = new Calculation(1,2,"Sum");
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.op).toBe("Sum");
});

test('Test Get Results function', () => {
    //I need to test the instantiation of the calculation object
    let calculation = new Calculation(1,2,"Sum");
    expect(calculation.GetResults()).toBe(3);
});

