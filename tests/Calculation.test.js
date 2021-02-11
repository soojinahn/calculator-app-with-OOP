//Arrange

const Calculation = require('../src/models/calculation');

test('Calculator adding two numbers', () => {
    //Act
    let calculation = new Calculation(1,2,"Sum");
    expect(calculation.a).toBe(1);
    expect(calculation.b).toBe(2);
    expect(calculation.op).toBe("Sum");

});
