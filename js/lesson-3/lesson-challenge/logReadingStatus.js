function logReadingStatus(library) {
  if (!Array.isArray(library)) {
    throw new TypeError("Input must be an array");
  }

  library.forEach((book, index) => {
    if (
      book &&
      typeof book.title === "string" &&
      typeof book.readingStatus === "boolean"
    ) {
      console.log(`${book.title} read status: ${book.readingStatus}`);
    } else {
      console.log(`Entry at index ${index} is invalid or missing data`);
    }
  });
}

module.exports = logReadingStatus;
