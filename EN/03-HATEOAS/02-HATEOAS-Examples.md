# HATEOAS Examples

[slide hideTitle]

# A Response Without HATEOAS​

Many APIs return the requested data as a response, without providing additional metadata or backwards compatibility.

```js
GET https://api.twitter.com/users/2384935

---------------------------------

{​
 "id": 2384935,​
 "name" : "Peter Brooks",​
 "username" : "peteb.439"
 "age": 32 ​
}​
```

[/slide]

[slide hideTitle]

# A Response Using HATEOAS​

```json
{ 
  "id": 2384935, 
  "name": "Peter Brooks", 
  "age": 32, 
  "username" : "peteb.439",​
  "_links": { ​
    "self": {"href":"http://localhost:8080/students/2"},​
    "delete": {"href":"http://localhost:8080/students/delete/2"},​
    "update": {"href":"http://localhost:8080/students/update/2"},​
    "orders": {"href":"http://localhost:8080/orders/allByStudentId/2"}​
  } ​
}​
```

[/slide]