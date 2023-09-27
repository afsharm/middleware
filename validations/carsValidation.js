const carsValidateRequestBody = (req, res, next) => {

  // supposing these field are present in the request body
  const { carName, ownerEmail, maxSpeed, producer } = req.body;

  // if the condition is not met, just return HTTP status 400
  if (!carName || carName.length < 5) {
    return res.status(400).json({ error: 'carName must have at least 4 characters' });
  }

  if (!maxSpeed || typeof maxSpeed !== 'number' || isNaN(maxSpeed)) {
    return res.status(400).json({ error: 'maxSpeed should be a number' });
  }

  if (!ownerEmail || !isValidEmail(ownerEmail)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  // validate the nested object
  if (!producer || typeof producer !== 'object') {
    return res.status(400).json({ error: 'Invalid producer object' });
  }

  if (!producer.name || typeof producer.name !== 'string' || producer.name.trim().length === 0) {
    return res.status(400).json({ error: 'Invalid producer name' });
  }

  if (!producer.address || typeof producer.address !== 'string' || producer.address.trim().length === 0) {
    return res.status(400).json({ error: 'Invalid producer address' });
  }

  next();
};

// a simple email validator
const isValidEmail = (email) => {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
};

module.exports = carsValidateRequestBody;