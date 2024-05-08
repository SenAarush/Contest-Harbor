
# Contest Harbor

Contest Harbor: Your one-stop shop to discover, track, and conquer coding challenges!






## Installation

Enter the following commands to use the Web-App

```bash
  git clone https://github.com/SenAarush/Contest-Harbor
  cd Server
  npm i
  cd ..
  cd Client
  npm i
  // set up python environment
  python3 -m venv virt
  source virt/bin/activate
  pip install -r requirements.txt
```

    
## Documentation

### Server
This contains the API responsible for authentication and authorization based on responses from the Client. 
The following modules have been used to create it:-
[ExpressJS](https://expressjs.com/): A fast, minimalist web framework for Node.js
[Bcrypt](https://github.com/kelektiv/node.bcrypt.js): A library to help hash passwords
[Mongoose](https://mongoosejs.com/): A MongoDB object modeling tool
[Cookie-Parser](https://www.npmjs.com/package/cookie-parser): A Express.js middleware parsing Cookie headers
[JsonWebToken](https://github.com/auth0/node-jsonwebtoken): A library to generate JWT tokens
[Validator](https://www.npmjs.com/package/validator): A library of string validators and sanitizers

### Client

TODO :: Add docs for frontend..





### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` : An availiable port number

`DATABASE` : Mongodb connection string

`SECRET_KEY` : For JWT authorization


## API Reference

#### All routes for User

|Route|Method|Request|Description     |  Success Response |
|------|-|---------|-----------------|---------|
|/user/login|POST|email, password|Initiates a new session for a user|email and token|   
|/user/signup|POST|name, email, password|Enters a new user to the sytem|email and token|         





