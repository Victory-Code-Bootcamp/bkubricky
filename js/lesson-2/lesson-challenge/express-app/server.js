const express = require("express");
const app = express();
const mainRoutes = require("./routes/mainRoutes");

// Use the router
app.use("/", mainRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
