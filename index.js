// Import the Express library
const express = require('express');

// Create an instance of an Express app
const app = express();

// Define a port to listen on (use 3000 or an environment-defined port)
const PORT = process.env.PORT || 3000;

// Set up a simple route for the root URL ("/")
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
