const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Sample endpoint
app.get('/api/hello', (req, res) => {
  res.json({
    message: 'Hello World!',
    timestamp: new Date().toISOString(),
    endpoint: '/api/hello'
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Express.js sample website!',
    availableEndpoints: [
      'GET /',
      'GET /api/hello'
    ]
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Express.js server running at http://localhost:${port}`);
});

module.exports = app;