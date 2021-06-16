[slide hideTitle]
# Summary

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/EN/Intro-to-Node-JS/interactive-js-backend-nodejs-60-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- Event loop
  * defines the **order of execution** of all called functions
  * continuously looks for, stacks, and handles events 

- Modules
  * **core**, **local** and **third-party** modules and their differences
  
  * **installing** a third-party module
    
  * **using modules** in a program

```js
const qs = require("querystring");

const query = "?product=Sofa&quantity=3";

const queryObject = qs.parse(query);
```

- Web servers

   * software solution that operates with **web requests**

   * **creating** a web server

```js
const http = require("http");

http
    .createServer((req, res) => {
        res.write("This text will be sent to the client.");
        res.end();
    })
    .listen(3000);

console.log("Node.js server running on port 3000");
```

- Request and response wrappers

   * **wrapping** information about requests and responses in a **single object**

## In the next lesson you will learn:

- Streams and utilities

- **Continuous streaming** of data

- Working with the **file system**

- **Debugging** a Node.js application

[/slide]
