'use strict';

const express = require('express');
const cors = require('cors');
const app = express();
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const handle404Error = require('./error-handlers/404');
const handle500Error = require('./error-handlers/500');

// middleware
app.use(cors());
app.use(express.json());
app.use(logger);  


// CRUD routes

app.get('/person', validator, (req, res) => {
  const name = req.query.name;
  res.json({ name });
});


module.exports = {
  app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log('Server is running on PORT ::', PORT);
    });
  },
};