const reverseString = require('./reverseString')

test('reverse the string', () => {
    expect(reverseString('man')).toBe('nam');
});