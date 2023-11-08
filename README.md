# VerdeVista / E-Commerce API Project

Welcome to the E-Commerce API project! 
The main objective is to build the backend of an ecommerce dedicated to the sale of plants online.
This project combines the power of Node.js, Express, MySQL/Sequelize, and various web development technologies to create a robust backend for an online store. As a developer, you will have the opportunity to showcase your skills in building a fully functional RESTful API for an e-commerce platform.

![](https://github.com/Cocera/VerdeVista_backend_ecommerce/blob/main/assets/diagramDB.gif)
<a href="https://dbdiagram.io/d/VerdeVistaDB-653fe02cffbf5169f0bfeff4">Link to the project diagram</a>

## 🌐 Endpoints

The following are the different endpoints implemented in the API:

- <strong>Products</strong> main endpoints
  - CRUD operations for products
  - Endpoint to create a product
  - Endpoint to update a product
  - Endpoint to delete a product
  - Endpoint to retrieve products with their categories
  - Endpoint to retrieve a product by its ID
  - Filters to search for a product by name and price
  - Filter to sort products by price from highest to lowest

- <strong>Categories</strong> main endpoints
  - CRUD operations for categories
  - Endpoint to create a category
  - Endpoint to update a category
  - Endpoint to delete a category
  - Endpoint to view all categories with their products
  - Endpoint to retrieve a category by its ID
  - Filter to search for a category by name

- <strong>Orders</strong> main endpoints
  - Endpoint to view orders with the products they contain
  - Endpoint to create orders

- <strong>Users</strong> main endpoints
  - Endpoint to register a user using bcrypt
  - Endpoint to log in using bcrypt + JWT
  - Endpoint to retrieve information of the logged-in user with their orders and products
  - Endpoint to log out

- Seeders
  - Creation of seeders for Products, Users, Categories, Addresses and Payment Methods in order to facilitate the verification of endpoints in the API.

## Middleware
- <strong>Admin & Superadmin</strong> middleware
  - This middleware checks if the user making a request has the role of 'admin' and 'superadmin'.
  - It accesses the user's role from the req.user.role property.
  - If the user's role is not 'admin,' it returns a 403 Forbidden response with a message indicating that the user does not have access permissions.
  
- <strong>Authentication</strong> middleware
  - This middleware is responsible for authenticating incoming requests based on JSON Web Tokens (JWTs).
  - The middleware then attempts to verify and decode the JWT token using a secret key (jwt_secret) and the jsonwebtoken library.
  - After decoding the token, it retrieves the user's information by querying the User model using the user's ID contained in the JWT payload.
  - It also checks if the token is valid and exists in the Token model, ensuring it's associated with the correct user.

- <strong>Errors</strong> middleware
  - This middleware handles errors in a Node.js application, especially those related to Sequelize.
  - If one of these error types is encountered, it uses the handleValidationError function to process and respond with appropriate error messages.
  - If the error is not one of these types, it sends a generic 500 Internal Server Error response with a message stating that something went wrong.

## Technologies used
<ul>
<li><strong>Node.js:</strong> Node.js is the runtime environment that allows JavaScript to run on the server. It's the foundation for building the backend of the application.</li>

<li><strong>Express.js:</strong> Express.js is a web application framework for Node.js. It simplifies the process of building robust and scalable APIs. In this project, Express is used for creating routes, handling middleware, and managing HTTP requests and responses.</li>

<li><strong>MySQL:</strong> MySQL is a popular open-source relational database management system. It's used for storing and managing structured data, making it a great choice for an e-commerce application where data consistency and relationships are crucial.</li>

<li><strong>Sequelize:</strong> Sequelize is an Object-Relational Mapping (ORM) library for Node.js. It simplifies database interactions by allowing developers to work with databases using JavaScript objects. It's particularly useful for defining models, managing database schemas, and executing queries.</li>

<li><strong>Bcrypt:</strong> Bcrypt is a password-hashing library used for securely storing user passwords. It helps protect user data by applying a one-way hashing algorithm.</li>

<li><strong>JWT (JSON Web Tokens):</strong> In this project, JWTs are used for user authentication and authorization. They provide a secure way to transmit user identity information between the client and server.</li>

<li><strong>Postman:</strong> A valuable tool for ensuring the correctness and reliability of your API's functionality during development and testing phases, testing API endpoints, making requests, and analyzing responses.</li>
</ul>


## 🚀 Connect with me!
<a href="https://www.linkedin.com/in/veronica-polegre-304a3b297/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>