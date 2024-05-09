
# Contest Harbor
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)[![MongoDB](https://img.shields.io/badge/MongoDB-47A248.svg?style=for-the-badge&logo=MongoDB&logoColor=white)](https://www.mongodb.com/)[![Express.js](https://img.shields.io/badge/Express.js-000000.svg?style=for-the-badge&logo=Express&logoColor=white)](https://expressjs.com/)![ReactJS](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black)[![Node.js Badge](https://img.shields.io/badge/Node.js-5FA04E.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)




Contest Harbor: Your one-stop shop to discover, track, and conquer coding challenges!






## Installation

-  Clone the repo  
```bash
  git clone https://github.com/SenAarush/Contest-Harbor
```
- Install the dependencies
```bash
  cd Server
  npm i
  cd ..
  cd Client
  npm i
```
- set up python environment
```bash
python3 -m venv virt
source virt/bin/activate
pip install -r requirements.txt
```

    
## Run Locally

- Go to the Client directory & start the frontend
```bash
cd Client
npm run dev
```
- Go to the Server directory

```bash
cd Server
```
- Add the env file, following the env documentation
- Activate the python virtual environment
```bash
source /virt/bin/activate
```
- Run the Server
```bash
node app.js
```





## Documentation

### Server

This contains the API responsible for authentication and authorization based on responses from the Client. 
The following modules have been used to create it:- 

[ExpressJS](https://expressjs.com/): A fast, minimalist web framework for Node.js

[Bcrypt](https://github.com/kelektiv/node.bcrypt.js): A library to help hash passwords

[Mongoose](https://mongoosejs.com/): A MongoDB object modeling tool

[Cookie-Parser](https://www.npmjs.com/package/cookie-parser):
 A Express.js middleware parsing Cookie headers

[JsonWebToken](https://github.com/auth0/node-jsonwebtoken): A library to generate JWT tokens

[Validator](https://www.npmjs.com/package/validator): A library of string validators and sanitizers

### Client

- / : It is the entry point to the web app, landing page that serves to introduce the user to the premise of the app.

  ![Landing Page](https://ik.imagekit.io/senaarush/Contest-Harbor/Screenshot_20240509_235937.png?updatedAt=1715280718404)
  
- /login: Self-explanatory, login page.
  
  ![Login Page](https://ik.imagekit.io/senaarush/Contest-Harbor/Screenshot_20240510_001847.png?updatedAt=1715280718308)
  
-  /signup: Self-explanatory, Register page.
  
   ![Sign Up](https://ik.imagekit.io/senaarush/Contest-Harbor/Screenshot_20240510_002001.png?updatedAt=1715280718339)
  
- /contests: Contains all the fetched contests from the competetive coding websites

  ![Contests](https://ik.imagekit.io/senaarush/Contest-Harbor/Screenshot_20240510_001736.png?updatedAt=1715280718482)
 
- /user/contests: Contains marked contests for a specific user
  
  ![User Contests](https://ik.imagekit.io/senaarush/Contest-Harbor/Screenshot_20240510_002043.png?updatedAt=1715280718343)





## Environment Variables

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
|/user/contests|GET|token|Checks if a user is authenticated|Fetching all contests for user|





