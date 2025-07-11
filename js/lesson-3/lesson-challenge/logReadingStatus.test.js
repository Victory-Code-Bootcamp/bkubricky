const logReadingStatus = require("./logReadingStatus");

describe("logReadingStatus", () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, "log").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test("logs reading status for each book in valid array", () => {
    const library = [
      { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
      { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
      {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false,
      },
    ];

    logReadingStatus(library);

    expect(consoleSpy).toHaveBeenCalledWith("The Road Ahead read status: true");
    expect(consoleSpy).toHaveBeenCalledWith(
      "Walter Isaacson read status: true"
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      "Mockingjay: The Final Book of The Hunger Games read status: false"
    );
  });

  test("handles empty array without error", () => {
    logReadingStatus([]);
    expect(consoleSpy).not.toHaveBeenCalled();
  });

  test("handles array with null or invalid entries", () => {
    const badLibrary = [
      null,
      { title: "Valid Book", readingStatus: true },
      { title: 123, readingStatus: "yes" },
      {},
    ];

    logReadingStatus(badLibrary);

    expect(consoleSpy).toHaveBeenCalledWith(
      "Entry at index 0 is invalid or missing data"
    );
    expect(consoleSpy).toHaveBeenCalledWith("Valid Book read status: true");
    expect(consoleSpy).toHaveBeenCalledWith(
      "Entry at index 2 is invalid or missing data"
    );
    expect(consoleSpy).toHaveBeenCalledWith(
      "Entry at index 3 is invalid or missing data"
    );
  });

  test("throws error when input is not an array", () => {
    expect(() => logReadingStatus("not an array")).toThrow(TypeError);
    expect(() => logReadingStatus(null)).toThrow(TypeError);
    expect(() => logReadingStatus({})).toThrow(TypeError);
  });
});
