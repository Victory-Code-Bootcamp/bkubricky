const createUser = (first, time) => ({ first, time });

console.log(createUser("Alice", 25));

function getCode(chars) {
  if (chars > 15) return "AA";
  else if (chars > 13) return "AB";
  else if (chars > 10) return "BB";
  else if (chars > 7) return "BC";
  else if (chars > 5) return "CC";
  else return "DD";
}

console.log(getCode(14));

function getTCode(char) {
  return char > 15
    ? "AA"
    : char > 13
    ? "AB"
    : char > 10
    ? "BB"
    : char > 7
    ? "BC"
    : char > 5
    ? "CC"
    : "DD";
}

console.log(getTCode(14));
