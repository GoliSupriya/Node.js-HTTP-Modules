# Node.js HTTP Modules

A collection of example Node.js HTTP server-side modules demonstrating handling of:

- HTTP GET requests  
- HTTP POST requests  
- Custom headers  
- Query parameters  
- A central server file to bring everything together  

---


## Features

- Lightweight modules illustrating how Node.js core `http` module works  
- Modular separation (server logic, GET, POST, header handling, query parameters)  
- Easy to extend for advanced uses  

---

- **server.js**: Entry point. Starts the HTTP server and dispatches to the modules above.  
- **customHeader.js**: Adds or inspects custom headers on requests/responses.  
- **getRequest.js**: Contains logic for handling incoming GET requests.  
- **postRequest.js**: Contains logic for handling incoming POST requests (e.g. reading body data).  
- **queryParameters.js**: Parses and handles query parameters from the URL (e.g. `?id=123&name=foo`).  

# getRequest.js
 open postman and select get method then paste the url and click on send

 # postRequest.js
 open postman and select post method then paste the url , click on raw and enter some data and click on send

 # queryParameters.js 
 open postman and paste the url as 'http://localhost:3000/search/?data=123'


