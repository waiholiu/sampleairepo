# Sample Express.js Website

A simple Express.js website with sample endpoints.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

3. The server will run at `http://localhost:3000`

## Available Endpoints

- `GET /` - Welcome message with available endpoints
- `GET /api/hello` - Sample endpoint returning a hello world message with timestamp

## Example Usage

```bash
# Test the root endpoint
curl http://localhost:3000/

# Test the sample endpoint
curl http://localhost:3000/api/hello
```
