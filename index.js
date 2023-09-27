const express = require('express');
const generalMiddleware = require('./middlewares/generalMiddleware');
const checkSecurity = require('./middlewares/checkSecurity');
const carsValidateRequestBody = require('./validations/carsValidation');

const app = express();
const port = 3000;

// we need the req.body json data
app.use(express.json());

// check security measures
checkSecurity(app);

// use the next middleware
app.use(generalMiddleware);

// Error handling middleware for handling bad requests
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        res.status(400).json({ message: 'Bad request.' });
    } else {
        next();
    }
});

// route for the root
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// a sample post route
app.post('/cars', carsValidateRequestBody, (req, res) => {
    res.send('[POST] cars');
});

// a route with parameters
app.get('/cars/:id', (req, res) => {
    console.log(req.params);
    res.send(`You passed ${req.params.id}`);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});