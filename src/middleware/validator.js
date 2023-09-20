
const validator = (req, res, next) => {
    const name = req.query.name;
  
    if (!name) {
      return res.status(500).json({ error: 'Name parameter is missing' });
    }
  
    // If the name parameter is present, continue to the next middleware or route
    next();
  }
  
  module.exports = validator;