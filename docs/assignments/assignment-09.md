# Assignment 9 - Server-side JavaScript
Create a small http server, that the client can send new messages to and receive the complete array of messages from.

Prerequisite: To get a better separation of frontend and backend, create a folder `frontend`. Move the files `script.js` and `index.html` into this folder.

1. Write a first simple Node.js program:
    1. Turn your code base into an npm package, using `npm init` on the command line in the root directory. If you don't 
    know which value makes sense for the upcoming questions, just take the default (with `RETURN`).
    1. Create a file for your server code `server/index.js`, and just a put `console.log()` call in the file for now.
    2. Define the command of starting the server to your `package.json`, within the scripts section, giving it the alias
    `"start"`:
        ```javascript
          "scripts": {
            "start": "node server/index.js",
            ...
          },
        ```
    1. Check your alias with `npm start` on the command prompt. It should execute your log statement.

2. Write your first express server serving static files:
    1. Install `express` with: `npm install express`.
    2. Now, write the express server serving your static HTML and JavaScript files located in `frontend` with the help of 
        1. https://expressjs.com/en/starter/hello-world.html, and
        2. https://expressjs.com/de/starter/static-files.html
    3. Check if it works, opening http://localhost:3000 in your browser.

3. Add an endpoint `api/messages`, responding to a `GET` request with the array of messages in JSON format. You can test
this endpoint by opening `localhost:3000/api/messages` in your browser and see if an (empty) array is returned.  
Hint 1: https://expressjs.com/en/starter/basic-routing.html  
Hint 2: https://expressjs.com/en/4x/api.html#res.json  

4. Also add a handler for a `POST` request, that add's the incoming message to the `messages` array. The message is 
expected as `Content-Type: application/json`.  
Hint 1: To parse and access the JSON body use the `express.json()` middleware, see 
http://expressjs.com/en/guide/using-middleware.html#middleware.built-in and 
http://expressjs.com/en/4x/api.html#express.json.  
Hint 2: The proper status code for a succesful `POST` request is `201`.  
Hint 3: To send an HTTP response without a body, you will need `http://expressjs.com/en/4x/api.html#res.end`.  

5. You can test your `POST` request with a rest client of your choice, e.g. Postman (https://www.getpostman.com/).


    
    

