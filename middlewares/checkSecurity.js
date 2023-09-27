// Import required modules
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');

// Create a middleware function
const checkSecurity = (app) => {
  // Use Helmet middleware to set various security-related HTTP headers
  app.use(helmet());

  // Use XSS-Clean middleware to sanitize user input from the request body
  app.use(xss());

  // Set a rate limiter middleware to protect against brute-force and DOS attacks
  // Adjust the configuration as per your requirements
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
  });

  app.use('/api', limiter); // Apply rate limiter to API endpoints that need protection

};

module.exports = checkSecurity;