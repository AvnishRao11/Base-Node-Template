This is a base node js  project template , which anyone can use as it has been prepared, by keeping some of the important code principles and project management recommendations . Feel free to change anything . 


`src` -> Inside the src folder all the actural source code regarding the project will reside, this will not include the tests . (You might need to make a seperate folder for tests)


Lets take a look inside the `src` folder 

   -  `config`-> In this folder anything and everything regarding any configuration of setup of a library or module  will be done. For example : setting up `dotenv` so that we can use the environment variable anywhere in a cleaner fashion, that is done the `server.config.js` . One more example can be to setup for Logging library that can help to prepare meaningful logs, so configuration for this library should also be done here . 

    - `routes`-> In the routes folder , we register a route and the corresponding middleware and controllers to it . 

    - `middlewares`-> They are just going to intercept the incoming request where we can write our validations , authenticators etc.
    
    - `controllers`-> They are kind of last middleware as post them you call your business layer to execute the business logic. In Controllers we just receive the incoming request and data and then past it to the business layer , one once business layer returns the output , we structure the API response in controllers and send the output . 

    - `Repository`-> This folder contains all the logic using which we interect the DB by writing queries , all the raw queries , or ORM queries will go here 
 
    -`Services`-> It contains business logic and interect with the repositories data from the database 

    -`Utils`-> Utils contains helper methods ,error classes  

 
### Setup The Project 

   - Download this template from github and open it in your text editor . 
   - In the root directory create `.env` file and the following Variables 

   ```
      PORT = <Port number of your choice> 
   ```
   - Inside the `src/config` folder create a `config.json`  file and write the following code : 
   ```
         {
   "development": {
      "username": "root",
      "password": null,
      "database": "database_development",
      "host": "127.0.0.1",
      "dialect": "mysql"
   },
   "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
   },
   "production": {
      "username": "root",
      "password": null,
      "database": "database_production",
      "host": "127.0.0.1",
      "dialect": "mysql"
   }
   }
```
``` 
   - If youre setting up your developement environment , then write the username of your db , password of your db and in dialect 
   mention whatever db you are using for ex : mysql , mariadb etc . 
   
- To run the server execute the following comaand : 
```
   npm run dev
```