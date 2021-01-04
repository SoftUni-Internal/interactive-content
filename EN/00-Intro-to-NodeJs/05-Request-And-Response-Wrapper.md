# Request & Response Wrapper

[slide]

# The Request Wrapper

The request wrapper is used to **provide information about the HTTP request** to the server.

It is called a wrapper because it is **an object, containing key-value pairs of information from the request**.

It has many properties, ranging from the **type of request** to its **headers and protocol versions**.

Here are some of the more commonly used properties:

- `httpVersion` - Specifies the **version** of the HTTP protocol.

- `headers` - Passes **context and credentials** as request headers.

- `method` - Specifies the type of the request (`GET`, `POST`, `PUT`, `DELETE` etc.).

- `url` - The request's **URL**.

[/slide]

[slide]

# Example 1: Request Wrapper

Here is an example of how to put the request wrapper to use:

```js
const http = require("http");
const url = require("url");
const port = 3000;

http.createServer((req, res) => {
    let path = url.parse(req['url']).pathname;

    if (path === '/') {
        console.log("You are currently on the home page");
    } else {
        // Log the current page in the console.
    }
}).listen(port);
```

[/slide]

[slide]

# The Response Wrapper

The response wrapper does the **exact opposite of the request wrapper**.

It is used to send **data and status information** as a response from the server.

These are some of the methods used with it: 

- `res.writeHead` - Adds a response header with a **status code**, **content type** and **message**.

- `res.write` - Can be used instead of `writeHead`. Will send a **default header**.

- `res.statusCode` - Specifies the **HTTP status code** when not using `writeHead`.

It is recommended to **use the proper HTTP status codes in every response** as it **significantly improves the website's SEO**.

Here are some of the more common status codes and their meaning: 

```js
200     //Successful operation
301     //Resource moved permanently to given link
401     //Unauthorized access
404     //Resource not found
500     //Server error
```

[/slide]

[slide]

# Example 2: Response Wrapper

Here is how to send data to the client from the server:

```js
const http = require('http');
const port = 3000;

http.createServer((req, res) => {
    
    res.writeHead(200, {
    'Content-Type': 'text/plain'
    }); 

    // Sends a status code 200 (success) and specifies that the data sent will be of type text

    res.write("How are things going on the client side?");

    // Sends an UTF-8 encoded text message to the client

    res.end();  
    
    // Ends the response

}).listen(port);

```

It is very important to **always use the proper status codes and to end the response**.

[/slide]
