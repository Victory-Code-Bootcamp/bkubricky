// http-get.js
const http = require("http");

// start after the first two portions of argv
const url = process.argv[2];

// get the info after the first two portions of argv
http
  .get(url, (response) => {
    // Set encoding so data is a string instead of Buffer
    response.setEncoding("utf8");

    // On each chunk of data, print it to the console
    response.on("data", (chunk) => {
      console.log(chunk);
    });

    // handle errors from the response stream
    response.on("error", (err) => {
      console.error("Response error:", err.message);
    });
  })
  .on("error", (err) => {
    // Handle errors
    console.error("Request error:", err.message);
  });

// 'use strict'
// const http = require('http')

// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// }).on('error', console.error)
