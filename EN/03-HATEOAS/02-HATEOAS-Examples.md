# HATEOAS Examples

[slide hideTitle]

# A Response Without HATEOAS​

Many APIs return the requested data as a response, without providing additional metadata, causing many inconveniences, and in many cases - stopping applications from operating properly.

```js
GET https://www.mysocial.com/api/users/2384935

---------------------------------

{​
 "id": 2384935,​
 "name" : "Anne Brooks",​
 "username" : "peteb.439"
 "age": 32 ​
}​
```

In this example we retrieve a user representation.

While we receive the required response payload, we are not provided with the possible endpoints, for example.

This can become an issue when URIs get updated, for instance.

Many developers may not be aware of this update, causing them to receive errors, such as 404 (Not Found).

Another possible problem is **field renaming**.

If the initial `User` class looks like this:

```java
class User {
  private final int id;
  private String name;
  private String username;
  private int age;

  // ...

}
```

And in a new version we decide to split the `name` field into separate fields:

```java
class User {
  private final int id;
  private String firstName;
  private String lastName;
  private String username;
  private int age;

  // ...

}
```

...we may cause inconvenience to long-time users of our API.

They may try passing in the older `name` parameter:

```
curl -X POST -d '{"name": "James Peterson", "username":"james_p8454", "age":58}'
```

These are just some of the issues that come with API versioning.

There are three versioning approaches when it comes to developing an API:

- **Knot** - every new version renders older ones unusable, because it introduces breaking changes
  * this is statistically the worst approach, as it lowers the retention rate

- **Point-to-Point** (P2P) - we run and maintain each previous version
  * very cost ineffective

- **Compatible** - each new version is fully compatible with multiple previous ones
  * the best implementation
  * uses HATEOAS

APIs should be developed in a continous manner, without focusing as much on version numbers.

[/slide]

[slide hideTitle]

# A Response Using HATEOAS​

```json
{ 
  "id": 2384935, 
  "name": "Anne Brooks", 
  "age": 32, 
  "username" : "anneb.439",​
  "_links": { ​
    "self": {"href":"http://www.mysocial.com/api/users/2384935"},​
    "delete": {"href":"http://www.mysocial.com/api/users/delete/2384935"},​
    "update": {"href":"http://www.mysocial.com/api/users/update/2384935"},​
    "posts": {"href":"http://www.mysocial.com/api/posts/allByUserId/2384935"}​
  } ​
}​
```

[/slide]