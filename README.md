# middleware

In this project some express.js middlewares are used for validation and security checks. `index.js` is the main file of the project. 3 route are defined in the `index.js`. The first one, which is the root route, is not checked in the general middleware. The second one has its own dedicated middleware. And the third one is just generally check.

The main middleware is called generalMiddleware. It check if a specific header called `'x-contract-id'` is present or not. If present it should have 5 character as length. The root route is not checked here just for simpilicty.

The next middleware which is implemented in the form of a method/function is responsible for security check. `checkSecurity` uses populare express.js packages to do check for XSS and other measures. Also `limiter` is used to prevent DOS attacks.

In the `index.js` also there is a simple error handling layer.


To run the project:

* yarn install
* node index.js
* browse localhost:3000
* use postman to call other APIs
