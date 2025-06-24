# Sample Web API

A simple web API built with Node.js and Express that provides a hello world endpoint.

## Features

- Simple REST API with JSON responses
- Hello World endpoint
- Lightweight and easy to run

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

```bash
npm start
```

The server will start on port 3000 (or the port specified in the PORT environment variable).

## API Endpoints

### GET /hello

Returns a hello world message in JSON format.

**Response:**
```json
{
  "message": "Hello, World!",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "status": "success"
}
```

### GET /

Returns basic information about the API.

**Response:**
```json
{
  "message": "Sample Web API",
  "description": "A simple web API with hello world endpoint",
  "endpoints": {
    "/hello": "GET - Returns hello world message"
  }
}
```

## Testing

You can test the API using curl, Postman, or any HTTP client:

```bash
curl http://localhost:3000/hello
```
