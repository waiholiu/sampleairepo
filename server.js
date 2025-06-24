const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Hello World endpoint
app.get('/hello', (req, res) => {
  res.json({
    message: "Hello, World!",
    timestamp: new Date().toISOString(),
    status: "success"
  });
});

// Root endpoint for basic info
app.get('/', (req, res) => {
  res.json({
    message: "Sample Web API",
    description: "A simple web API with hello world endpoint",
    endpoints: {
      "/hello": "GET - Returns hello world message"
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Hello endpoint available at: http://localhost:${PORT}/hello`);
});

module.exports = app;