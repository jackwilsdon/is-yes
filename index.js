module.exports = function(value) {
  var lowerCaseValue =
    value && typeof value.toLowerCase === 'function'
      ? value.toLowerCase()
      : value;

  return (
    lowerCaseValue === 1 ||
    lowerCaseValue === true ||
    lowerCaseValue === 'yes' ||
    lowerCaseValue === 'y' ||
    lowerCaseValue === '1' ||
    lowerCaseValue === 'true'
  );
};
