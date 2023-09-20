const logger = (req, res, next)  => {
    console.log('Request Method: ' + req.method);
    console.log('Request Path: ' + req.path);
    next();
  };
  
  module.exports = logger;