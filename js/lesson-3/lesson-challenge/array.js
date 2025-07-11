function isInArray(input, array) {
  if (!Array.isArray(array)) {
    throw new TypeError("Second argument must be an array");
  }

  // Use some() for NaN-safe check
  return array.some((item) => Object.is(item, input));
}

module.exports = isInArray;
