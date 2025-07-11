const isInArray = require("./array");

describe("isInArray", () => {
  test("should return true for value in array", () => {
    expect(isInArray(3, [1, 2, 3, 4])).toBe(true);
  });

  test("should return false for value not in array", () => {
    expect(isInArray(5, [1, 2, 3, 4])).toBe(false);
  });

  test("should return true for string match", () => {
    expect(isInArray("apple", ["banana", "apple", "cherry"])).toBe(true);
  });

  test("should return false for case-sensitive string mismatch", () => {
    expect(isInArray("Apple", ["apple"])).toBe(false);
  });

  test("should handle NaN correctly", () => {
    expect(isInArray(NaN, [1, 2, NaN])).toBe(true);
  });

  test("should handle null and undefined", () => {
    expect(isInArray(null, [undefined, null])).toBe(true);
    expect(isInArray(undefined, [undefined, null])).toBe(true);
  });

  test("should return false if array is empty", () => {
    expect(isInArray(1, [])).toBe(false);
  });

  test("should throw error if second argument is not an array", () => {
    expect(() => isInArray(1, null)).toThrow(TypeError);
    expect(() => isInArray(1, {})).toThrow(TypeError);
    expect(() => isInArray(1, "not an array")).toThrow(TypeError);
  });

  test("should handle boolean values", () => {
    expect(isInArray(true, [false, true])).toBe(true);
    expect(isInArray(false, [false, true])).toBe(true);
    expect(isInArray(true, [])).toBe(false);
  });
});
