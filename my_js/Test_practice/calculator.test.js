const calculator = require('./calculator');

describe('Calculator', () => {
    test('Addition', () => {
        expect(calculator.addition(3,3)).toBe(6);
    });
    test('Subtration', () => {
        expect(calculator.subraction(3,3)).toBe(0);
    });
    test('Multiplication', () => {
        expect(calculator.multiplication(3,3)).toBe(9);
    });
    test('Division', () => {
        expect(calculator.division(3,3)).toBe(1);
    });
});