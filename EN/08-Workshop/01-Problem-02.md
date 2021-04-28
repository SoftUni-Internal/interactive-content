# Appendix A: Using the Local REST Service 

[slide hideTitle]
# Starting the Service 

// Video: 01: Initial application setup, api.js set up + utility.js set up. 

The REST service will be the "server" folder in the provided resources. It has no dependencies and can be started by opening a terminal in its directory and executing: 

node server.js 

If it initialized correctly, you should see a message about the host address and port, on which the service will respond to requests. 

[/slide]

[slide hideTitle]
# Sending Requests  

// Video: 02.1: Adding more functions to api.js (login, register, logout).

To send a request, use the **hostname** and **port**, shown in the initialization log and resource address and method as described in the **application requirements**. 

If the data needs to be included in the request, it must be **JSON-encoded** and the appropriate **Content-Type** **header** must be added. 

Similarly, if the service is to return data, it will be **JSON-encoded**.

Note that **some requests do not return a body** and attempting to parse them will throw an exception. 

**Read** requests, as well as **login** and **register** requests, do not require authentication. 

All other requests must be authenticated. 
[/slide]

[slide hideTitle]
# Required Headers 

// Video: 02.2: Data.js set up + testing the api.js functions in the browser. 

To send the data to the server, include a Content-Type header and encode the body as a JSON string: 

```
Content-Type: application/json 
{JSON-encoded request body as described in the application requirements}
```
To perform an authenticated request, include an X-Authorization header, set to the value of the session token, and returned by an earlier login or register request: 

`X-Authorization: {session token}`
[/slide]

[slide hideTitle]
# Server Response 

// Video: 03: Routing set up. Creating decorateContest middleware. 

Data response:

```
HTTP/1.1 200 OK
Access-Contrl-Allow-Origin: *
Content-Type: application/json
{JSON-encoded response data}
```
Empty response:
```
HTTP/1.1 204 No Content
Access-Contrl-Allow-Origin: *
```
Error response:
```
HTTP/1.1 400 Request Error
Access-Contrl-Allow-Origin: *
Content-Type: application/json
{JSON-encoded error message}
```
## More Information
You can find more details on the GitHub [repository](https://github.com/softuni-practice-server/softuni-practice-server/blob/master/README.md) of the service.


[/slide]