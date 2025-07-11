function sortArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Input must be an array");
  }

  if (arr.length === 0) {
    return [];
  }

  const firstType = typeof arr[0];
  const isUniformType = arr.every((item) => typeof item === firstType);

  if (!isUniformType) {
    throw new TypeError("Array contains mixed or unsupported data types");
  }

  switch (firstType) {
    case "number":
      if (
        //All items must satisfy the condition (every)
        // is it a type number and is a number? then false, if it were opposite (true) the the error would be thrown
        !arr.every((item) => typeof item === "number" && !Number.isNaN(item))
      ) {
        throw new TypeError("Array contains invalid number values");
      }
      return [...arr].sort((a, b) => a - b);
    case "string":
      return [...arr].sort();
    default:
      throw new TypeError(`Unsupported data type in array: ${firstType}`);
  }
}

module.exports = sortArray;
