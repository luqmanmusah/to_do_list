const stringLength = require('./stringLength');

test('check the length',() => {
    expect(stringLength('luqman')).toEqual(6);
});
test('length of "My name is luqman Musah" is too long',() => {
    expect(stringLength('My name is luqman Musah')).toThrow('string is too long');
});
