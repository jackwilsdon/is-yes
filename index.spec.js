var isYes = require('.');

it.each([
  [1, true],
  [true, true],
  ['yes', true],
  ['y', true],
  ['1', true],
  ['true', true],
  [0, false],
  [false, false],
  ['no', false],
  [{}, false],
  [undefined, false],
  [null, false],
  [{ toLowerCase: false }, false],
  [{ toLowerCase: function() {} }, false],
])('isYes(%p) === %p', function(word, expectedYes) {
  expect(isYes(word)).toEqual(expectedYes);
});
