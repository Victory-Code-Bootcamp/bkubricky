const multiplyValuesByTwo = require("./multiplyValuesByTwo");

describe("multiplyValuesByTwo", () => {
  test("multiplies positive integers by 2", () => {
    expect(multiplyValuesByTwo({ a: 1, b: 2, c: 3 })).toEqual({
      a: 2,
      b: 4,
      c: 6,
    });
  });

  test("multiplies zero values by 2", () => {
    expect(multiplyValuesByTwo({ zero: 0 })).toEqual({ zero: 0 });
  });

  test("multiplies negative numbers by 2", () => {
    expect(multiplyValuesByTwo({ neg: -5, negFloat: -2.5 })).toEqual({
      neg: -10,
      negFloat: -5,
    });
  });

  test("multiplies floating point numbers by 2", () => {
    expect(multiplyValuesByTwo({ pi: 3.14, fraction: 0.5 })).toEqual({
      pi: 6.28,
      fraction: 1,
    });
  });

  test("leaves non-number values unchanged", () => {
    expect(
      multiplyValuesByTwo({
        str: "hello",
        bool: true,
        arr: [1, 2],
        nested: { a: 1 },
      })
    ).toEqual({ str: "hello", bool: true, arr: [1, 2], nested: { a: 1 } });
  });

  test("throws error if input is not an object or is null or array", () => {
    expect(() => multiplyValuesByTwo(null)).toThrow(TypeError);
    expect(() => multiplyValuesByTwo(42)).toThrow(TypeError);
    expect(() => multiplyValuesByTwo("string")).toThrow(TypeError);
    expect(() => multiplyValuesByTwo([1, 2, 3])).toThrow(TypeError);
  });
});
