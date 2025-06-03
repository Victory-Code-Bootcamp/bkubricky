// we need to use fs and path
const fs = require("fs");
const path = require("path");

// access the 3rd and 4th parameters
const dirPath = process.argv[2];
const extension = process.argv[3];

// handle errors
fs.readdir(dirPath, (err, files) => {
  if (err) {
    return console.error("Error reading directory:", err);
  }
  // iterate through the files and log them
  files.forEach((file) => {
    if (path.extname(file) === "." + extension) {
      console.log(file);
    }
  });
});

// 'use strict'
// const fs = require('fs')
// const path = require('path')

// const folder = process.argv[2]
// const ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })
