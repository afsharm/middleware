const generalMiddleware = (req, res, next) => {
  console.log('Middleware function running...');

  if (req.path !== '/') { // for the sake of simpilicty do not force the header on the root path

    //many applications expect parametric headers on all requests
    const headerName = 'x-contract-id';
    const headerValue = req.headers[headerName.toLowerCase()];

    if (!headerValue || headerValue.length !== 5) {
      return res.status(400).json({ error: `Invalid ${headerName} header` });
    }
  }
  
  next(); // pass the control to the next middleware
};

module.exports = generalMiddleware;