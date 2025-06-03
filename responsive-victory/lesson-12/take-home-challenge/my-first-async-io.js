const fs = require("fs");
const filePath = process.argv[2];
fs.readFile(filePath, "utf8", function (err, data) {
  if (err) {
    // If an error occurs (e.g., file not found), print the error and exit
    console.error("Error reading file:", err.message);
    return;
  }
  const newlineCount = data.split("\n").length - 1;
  console.log(newlineCount);
});

//   'use strict'
//     const fs = require('fs')
//     const file = process.argv[2]

//     fs.readFile(file, function (err, contents) {
//       if (err) {
//         return console.log(err)
//       }
//       // fs.readFile(file, 'utf8', callback) can also be used
//       const lines = contents.toString().split('\n').length - 1
//       console.log(lines)
//     })
