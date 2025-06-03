const express = require("express");
const router = express.Router();
const welcomeUser = require("../modulePractice");

// Homepage
router.get("/", (req, res) => {
  res.send("Welcome to the homepage!");
});

// About page
router.get("/about", (req, res) => {
  res.send("This is the about page.");
});

// Dynamic user ID route
router.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID is: ${userId}`);
});

// Greeting route using the custom module
router.get("/greet/:username", (req, res) => {
  const username = req.params.username;
  const message = welcomeUser(username);
  console.log(message);
  res.send(message);
});

module.exports = router;
