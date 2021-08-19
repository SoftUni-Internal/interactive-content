# REST API

[slide hideTitle]

# RESTful Design

An API, short for Application Programming Interface, is a software intermediary that allows us to access third-party functionality in our applications.

A RESTful API follows specific architectural constraints, such as abstracting the underlying third-party logic from developers.

While REST is not an official protocol or standard, RESTful APIs tend to have similar structure conventions, request/response payload structure, and error handling.

APIs can be accessed through different communication protocols.

They are most often accessed over HTTPS, and accept JSON both as a request and response payload.

[/slide]

[slide hideTitle]

# RESTful API

For an API to be considered RESTful, it must follow the six guiding principles, introduced in 2000 by Roy Fielding.

## Client-Server

For the duration of an HTTP request, there must be one client, requesting a resource, and one server, returning a response.

## Statelessness

A RESTful API is not allowed to store information about the state of another machine during the communication process.

Each request from a client to a server is independent and must be treated as though it was the first request the server has ever seen from that client.

## Cacheability

Response messages from the server to the client are explicitly labeled as cacheable or non-cacheable.

This way, responses can be cached by the client if the information on the server has not been changed since the last request.

## Uniform Interface

RESTful architectures must have a uniform interface between all clients and servers.

For example, a server must not require a different way of accessing data if a client has a Windows laptop versus an iPhone or a Unix server.

Gaining access to these endpoints is the same for any machine trying to access this information.

## Layered System

A layered system means that a client can have access to an endpoint that relies on other endpoints without having to understand all of the underlying implementations.

If client A wants to communicate with server B and that server goes out to Google or some other database in order to generate a response, client A should not have to accommodate for any other technologies besides accessing server B's endpoint.

Layering allows very complicated tasks to be completed without having to understand all of the underlying complexities that are required to generate the response.

## Code on Demand

Code on Demand is an optional constraint for RESTful applications, but it opens a possibility for code like JavaScript, for example, to be sent off to the client for execution.

[/slide]

[slide hideTitle]

# SOAP and RPC

## SOAP

In 1999, a year after XML-RPC was created, Microsoft introduced the Simple Object Access Protocol (SOAP).

Every SOAP message starts and ends with an `Envelope`.

Then comes the `Header` - an optional subelement with application-related specifics or processing requirements.

The `Body` contains the request or response, along with a `Fault` block that can be used to display an error message.

The WS-Security extension encrypts SOAP messages and makes them readable only by the recipient, by using a security token.

SOAP operations can also chain messages, keeping the server aware of the previous request.

## RPC

The earliest and simplest form of API was Remote Procedure Call (RPC).

Since the client and server use different call parameters, they must be converted to be understood on the other side.

This conversion is performed by dedicated pieces of code, called stubs.

When a client calls a server via RPC API, the client stub converts the parameters used in the function call.

Then, а server stub de-converts them and executes the function.

The same happens with the response, but in reverse order.

XML-RPC, however, is unable to distinguish between different data types.

This forces developers to include additional metadata, like `id` and `type` parameters.

[/slide]

[slide hideTitle]

# HTTP GET

The HTTP GET method is used by the client to retrieve a representation of a resource in a REST API.

- Retrieving a list of users

```js
GET https://api.softuni.org/users
```

- Retrieving a single user

```js
GET https://api.softuni.org/users/4078643
```

If no error occurs, the server returns a status code of 200 (OK).

If the requested resource does not exist, it returns a 404 (Not Found) error.

[/slide]

[slide hideTitle]

# HTTP POST

To create new resources, we use the POST method.

More specifically, it is used to create children resources to a parent (e.g `/users`):

```js
POST https://api.softuni.org/users

--------------------------------------------

{
  "id" (assigned when persisted): 494574387683
  "username": "chrischarles348",
  "firstName": "Chris",
  "lastName": "Charles",
  "age": 38,
  "country": "UK"
}
```

When the resource is created successfully, the server returns a status code of 201 (Created).

Once the server receives the request payload, it is responsible for associating the new resource to the parent by assigning it with an ID and resource URI:

```js
GET https://api.softuni.org/users/494574387683
```

[/slide]

[slide hideTitle]

# HTTP PUT

The PUT method is used to update an existing resource, by fully replacing it.

```js
PUT https://api.softuni.org/courses/693

--------------------------------------------

{
  "name": "Java Spring Advanced",
  "technology": "Java",
  "difficulty": "Advanced"
}
```

A PUT request payload contains a newly-updated representation of the original resource.

However, in case the resource ID passed by the client does not exist, the method creates a new resource, similarly to POST.

It returns a status code of 200 - if a resource is updated, and 201 - if a new one is created.

## HTTP PATCH

Alternatively, we can use the PATCH method to partially update an existing resource:

```js
PATCH https://api.softuni.org/courses/279

--------------------------------------------

{
  "technology": "JavaScript"
}
```

[/slide]

[slide hideTitle]

# HTTP DELETE

The DELETE method is used to remove a resource:

```js
DELETE https://api.softuni.org/users/467650935643
```

It returns either a status code of 200 (when we want to include the deleted entity), or 204 (No Content).

A second DELETE call on the same URI results in a 404 (Not Found) error.

[/slide]
