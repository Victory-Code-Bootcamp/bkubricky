// http-collect.js
const http = require("http");

const url = process.argv[2];

// use the url to start collecting data
http
  .get(url, (response) => {
    // make the data readable
    response.setEncoding("utf8");
    //create a string for the data to go into
    let fullData = "";
    // build the data
    response.on("data", (chunk) => {
      fullData += chunk;
    });
    // once completed, console log it
    response.on("end", () => {
      console.log(fullData.length);
      console.log(fullData);
    });
    // handle errors
    response.on("error", (err) => {
      console.error("Response error:", err.message);
    });
  })
  .on("error", (err) => {
    console.error("Request error:", err.message);
  });
