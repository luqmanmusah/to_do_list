const capitalize = require('./capitalize');

test('Capitalize the first letter', () => {
    expect(capitalize('luqman')).toBe('Luqman');
});