# middleware

In this project, some Express.js middlewares are used for validation and security checks. The index.js file serves as the main file of the project and defines three routes.

The first route, which is the root route, is not checked by the general middleware for simplicity. The second route has its own dedicated middleware. Lastly, the third route undergoes general checks.

The main middleware, called generalMiddleware, verifies the presence of a specific header called 'x-contract-id'. If present, it should have a length of 5 characters.

The next middleware is implemented as a method/function and is responsible for security checks. The checkSecurity function utilizes popular Express.js packages to perform checks for Cross-Site Scripting (XSS) and other security measures. Additionally, a limiter is used to prevent Denial-of-Service (DOS) attacks.

Furthermore, the index.js file contains a simple error handling layer.

To run the project:

Install the dependencies using yarn install.
Run node index.js.
Navigate to localhost:3000 in your web browser.
Use Postman to call the other APIs as required.

List of routes is as below:

* http://localhost:3000/cars [POST]
* http://localhost:3000/cars/1234567 [GET]
* http://localhost:3000/ [GET]

For more details import the postman collection which is available in the project.