# DayTech Backend

A simple Express.js backend application with CORS support.

## Features

- Express.js server
- CORS configuration
- Message handling endpoint
- Multer for form data parsing

## Prerequisites

- Node.js (v14 or higher recommended)
- npm

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

## Configuration

Create a `.env` file in the root directory with the following variables:

```env
# Server Port (default: 3001)
PORT=3001

# Frontend URL for CORS (default: http://localhost:3000)
FRONTEND_URL=http://localhost:3000
```

### Environment Variables

| Variable     | Description                  | Default               |
| ------------ | ---------------------------- | --------------------- |
| PORT         | Server port number           | 3001                  |
| FRONTEND_URL | Frontend URL for CORS origin | http://localhost:3000 |

## Development

Start the server with nodemon (auto-restart on changes):

```bash
npm start
```

The server will run at `http://localhost:3001`

## Production Deployment

1. Set the `FRONTEND_URL` environment variable to your production frontend URL:

```env
FRONTEND_URL=https://your-frontend-domain.com
```

2. Start the server:

```bash
node index.js
```

Or use a process manager like PM2 for production:

```bash
npm install -g pm2
pm start index.js
```

## API Endpoints

### POST /messages

Send a message to the backend.

**Request:**

- Method: POST
- Content-Type: application/x-www-form-urlencoded

**Response:** (depends on messageController implementation)

## CORS

CORS is configured to allow requests from the URL specified in `FRONTEND_URL`. Make sure to update this variable when deploying to production.

## Dependencies

- express - Web framework
- cors - CORS middleware
- multer - File upload middleware
- dotenv - Environment variable management

## License

ISC
