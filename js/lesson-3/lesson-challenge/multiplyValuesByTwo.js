function multiplyValuesByTwo(obj) {
  if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
    throw new TypeError("Input must be a non-null object (not an array)");
  }

  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === "number") {
      result[key] = value * 2;
    } else {
      result[key] = value; // leave non-number values unchanged
    }
  }
  return result;
}

module.exports = multiplyValuesByTwo;
