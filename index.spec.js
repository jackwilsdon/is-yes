var isYes = require('.');

it.each([
  ['yes', true],
  ['y', true],
  ['1', true],
  ['true', true],
  ['no', false],
  [{}, false],
  [undefined, false],
  [null, false],
  [{ toLowerCase: false }, false],
  [{ toLowerCase: function() {} }, false],
])('isYes(%p) === %p', function(word, expectedYes) {
  expect(isYes(word)).toEqual(expectedYes);
});
