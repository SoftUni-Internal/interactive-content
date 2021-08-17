# HATEOAS Examples

[slide hideTitle]

# A Response Without HATEOAS​

Many APIs return the requested data as a response, without providing additional metadata, causing many inconveniences, and in many cases - stopping applications from operating properly.

```js
GET https://www.mysocial.com/api/users/2384935

---------------------------------

{​
 "id": 2384935,​
 "name" : "Peter Brooks",​
 "username" : "peteb.439"
 "age": 32 ​
}​
```

In this example we retrieve a user representation.

While we receive the required response payload, we are not provided with the possible endpoints, for example.

This can become an issue when URIs get updated, for instance.

Many developers may not be aware of this update, causing them to receive errors, such as 404 (Not Found).

Another possible problem is field renaming.

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
    "self": {"href":"http://www.mysocial.com/api/users/2384935"},​
    "delete": {"href":"http://www.mysocial.com/api/users/delete/2384935"},​
    "update": {"href":"http://www.mysocial.com/api/users/update/2384935"},​
    "posts": {"href":"http://www.mysocial.com/api/posts/allByUserId/2384935"}​
  } ​
}​
```

[/slide]