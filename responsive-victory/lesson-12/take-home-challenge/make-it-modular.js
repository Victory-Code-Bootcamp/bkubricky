// make-it-modular.js
// pull info from the mymodule file and use the variable name: mymodule
const mymodule = require("./mymodule");

const dir = process.argv[2];
const ext = process.argv[3];

//run the function with these variables from the other file (mymodule)
mymodule(dir, ext, (err, data) => {
  if (err) {
    return console.error("Error:", err.message);
  }
  // javascript command foreach iterates through the items in data (in this case the files)
  data.forEach((file) => console.log(file));
});

// 'use strict'
// const filterFn = require('./solution_filter.js')
// const dir = process.argv[2]
// const filterStr = process.argv[3]

// filterFn(dir, filterStr, function (err, list) {
//   if (err) {
//     return console.error('There was an error:', err)
//   }

//   list.forEach(function (file) {
//     console.log(file)
//   })
// })
