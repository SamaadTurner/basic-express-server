'use strict';
const cors = require('dotenv').config();
const server = require('./src/server');
const PORT = process.env.PORT || 3001;

// entry point!
server.start(PORT);