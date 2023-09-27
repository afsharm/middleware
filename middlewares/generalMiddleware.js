const generalMiddleware = (req, res, next) => {
  console.log('Middleware function running...');

  if (req.path !== '/') {

    const headerName = 'x-contract-id';
    const headerValue = req.headers[headerName.toLowerCase()];

    if (!headerValue || headerValue.length !== 5) {
      return res.status(400).json({ error: `Invalid ${headerName} header` });
    }
  }
  
  next();
};

module.exports = generalMiddleware;