// mymodule.js
const fs = require("fs");
const path = require("path");

//export this function as the filesname, unless otherwise stated
module.exports = function (dir, ext, callback) {
  // look at the directory, then return the files inside it
  fs.readdir(dir, (err, files) => {
    if (err) {
      return callback(err);
    }

    //look at the files, as requested above, filter them and add a period before the extension
    const filtered = files.filter((file) => path.extname(file) === "." + ext);
    //run the callback function with these parameters
    callback(null, filtered);
  });
};

//  'use strict'
//     const fs = require('fs')
//     const path = require('path')

//     module.exports = function (dir, filterStr, callback) {
//       fs.readdir(dir, function (err, list) {
//         if (err) {
//           return callback(err)
//         }

//         list = list.filter(function (file) {
//           return path.extname(file) === '.' + filterStr
//         })

//         callback(null, list)
//       })
//     }
