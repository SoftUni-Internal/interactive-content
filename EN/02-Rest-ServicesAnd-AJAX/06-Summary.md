[slide hideTitle]

# Summary

# In this lesson you learned:

-  HTTP is a **text-based client-server protocol** used for transferring Web resources

-  REST is an architecture style for **client-server communication**

   -  Based on **request-response**

-  **REST requests:**

   -  GET

   ```
   GET /api/example
   HOST: example-server
   token: example
   ```

   -  POST

   ```
   POST /api/example
   HOST: example-server
   Content-Type:application/json
   Accept:application/json
   token: example
   {
   //BODY
   }
   ```

   -  PUT

   ```
   PUT /api/example/1
   HOST: example-server
   Content-Type:application/json
   Accept:application/json
   token: example
   {
    //BODY
   }
   ```

   -  PATCH

   ```
   PATCH /api/example/1
   HOST: example-server
   Content-Type:application/json
   Accept:application/json
   token: example
   {
    //BODY
   }
   ```

   -  DELETE

   ```
   DELETE /api/example/1
   HOST: example-server
   token: example
   ```

-  **RESTful** services provide **CRUD** operations over HTTP

-  **AJAX** allows us to load dynamic content in the background

   -  **XMLHttpRequest**

   ```js
   const httpRequest = new XMLHttpRequest();

   httpRequest.addEventListener('readystatechange', function () {});

   httpRequest.open('GET', url);
   httpRequest.send();
   ```

   -  **Fetch**

   ```js
   fetch('/api/example.json')
      .then((response) => {})
      .catch((err) => {});
   ```

## In the next lesson, you will learn:

-  Asynchronous Programming and Promises:

   -  What is Asynchronous Programming.

   -  Deep dive into Promises.

   -  Async and await.

[/slide]
