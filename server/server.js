const express = require('express');
const run = require('./db/conn'); // Import the MongoDB connection function from conn.js
const app = express();
const port = process.env.PORT || 5000;

// Establish a connection to MongoDB
run();

// Middleware for parsing JSON requests
app.use(express.json());

// Define your API routes
//app.use('/api', require('./routes/api'));    // TODO: CHANGE API ROUTES

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});