const express = require('express');
const generalMiddleware = require('./middlewares/generalMiddleware');
const checkSecurity = require('./middlewares/checkSecurity');
const carsValidateRequestBody = require('./validations/carsValidation');

const app = express();
const port = 3000;

app.use(express.json());
checkSecurity(app);
app.use(generalMiddleware);

// Error handling middleware for handling bad requests
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        res.status(400).json({ message: 'Bad request.' });
    } else {
        next();
    }
});

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.post('/cars', carsValidateRequestBody, (req, res) => {
    res.send('[POST] cars');
});

app.get('/cars/:id', (req, res) => {
    console.log(req.params);
    res.send(`You passed ${req.params.id}`);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});