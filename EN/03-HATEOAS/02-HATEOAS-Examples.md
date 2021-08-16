# HATEOAS Examples

[slide hideTitle]

# A Response Without HATEOAS​

```json
{​
 "id": 2,​
 "name" : "Peter",​
 "age": 12 ​
}​
```

[/slide]

[slide hideTitle]

# A Response Using HATEOAS​

```json
{ 
  "id": 2, 
  "name": "Peter", 
  "age": 12, ​
  "_links": { ​
    "self": {"href":"http://localhost:8080/students/2"},​
    "delete": {"href":"http://localhost:8080/students/delete/2"},​
    "update": {"href":"http://localhost:8080/students/update/2"},​
    "orders": {"href":"http://localhost:8080/orders/allByStudentId/2"}​
  } ​
}​
```

[/slide]