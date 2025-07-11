const sortArray = require("./sortArray");

describe("sortArray", () => {
  test("sorts an array of numbers in ascending order", () => {
    expect(sortArray([3, 1, 4, 1, 5, 9])).toEqual([1, 1, 3, 4, 5, 9]);
  });

  test("sorts an array of negative numbers", () => {
    expect(sortArray([-2, -5, 3, 0])).toEqual([-5, -2, 0, 3]);
  });

  test("sorts an array of strings alphabetically", () => {
    expect(sortArray(["banana", "apple", "cherry"])).toEqual([
      "apple",
      "banana",
      "cherry",
    ]);
  });

  test("throws error on mixed data types", () => {
    expect(() => sortArray([1, "2", 3])).toThrow(TypeError);
  });

  test("throws error on unsupported data types (e.g., object)", () => {
    expect(() => sortArray([{}, {}, {}])).toThrow(TypeError);
  });

  test("returns empty array when given empty array", () => {
    expect(sortArray([])).toEqual([]);
  });

  test("does not mutate the original array", () => {
    const input = [3, 2, 1];
    const copy = [...input];
    sortArray(input);
    expect(input).toEqual(copy);
  });

  test("throws error when input is not an array", () => {
    expect(() => sortArray("not an array")).toThrow(TypeError);
    expect(() => sortArray(null)).toThrow(TypeError);
    expect(() => sortArray({})).toThrow(TypeError);
  });
});
