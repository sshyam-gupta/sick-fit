require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');

const db = require('./db');

const server = createServer();

server.start({
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL
  },
  port: process.env.PORT,
  playground: '/playground'
}, callback => {
  console.log(`Server Started at port ${callback.port} access playground at http://localhost:${callback.port}/playground`);
});