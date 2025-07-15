// Import Mongoose and create a schema
const mongoose = require("mongoose");

// Define the Todo schema with timestamps option
const TodoSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true, // Every todo must have a text description
    },
    completed: {
      type: Boolean,
      default: false, // Default value for completed is false
    },
  },
  { timestamps: true }
); // Adds createdAt and updatedAt automatically

// Create the Todo model using the schema
const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
