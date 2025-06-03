const fs = require("fs");
// the third item will be the file path
const filePath = process.argv[2];
//check to see if there's even anything there
if (!filePath) {
  console.error("Please provide a file path as the first argument.");
  process.exit(1);
}
// read the file and convert it to utf8
const fileContent = fs.readFileSync(filePath, "utf8");
// split the by line break minus one for the last line
const newlineCount = fileContent.split("\n").length - 1;
console.log(newlineCount);

// 'use strict'
//     const fs = require('fs')

//     const contents = fs.readFileSync(process.argv[2])
//     const lines = contents.toString().split('\n').length - 1
//     console.log(lines)

//     // note you can avoid the .toString() by passing 'utf8' as the
//     // second argument to readFileSync, then you'll get a String!
//     //
//     // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
