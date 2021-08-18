# Implement HATEOAS in Spring Projects​

[slide hideTitle]

# HATEOAS Dependency​

Spring HATEOAS makes adding hypermedia links to RESTful API responses much easier.

Begin by adding it as a Maven dependency:

```xml
<dependency>​
  <groupId>org.springframework.hateoas</groupId>​
  <artifactId>spring-hateoas</artifactId>​
</dependency>​
```

[/slide]

[slide hideTitle]

# Application Database

We are going to build an example application that implements HATEOAS.

It will have a small database with three related entities:

- **Students**
  * `id` - **bigint(20)**, primary key
  * `age` - **int(11)**
  * `name` - **varchar(255)**

- **Courses**
  * `id` - **bigint(20)**, primary key
  * `name` - **varchar(255)**
  * `price` - **double**

- **Orders** - linked table
  * `id` - **bigint(20)**, primary key
  * (`course_id`) - **bigint(20)** - linked to `id` in **Courses**
  * (`student_id`) - **bigint(20)** - linked to `id` in **Studentss**

[/slide]

[slide hideTitle]

# Preparing Controllers

The first possible implenentation is for our DTOs to extend the `RepresentationModel<T>` class, adding links directly to our entity.

The second variant is to use the `linkTo` and `methodOn` methods from the `WebMvcLinkBuilder` class.

```java
​import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;​
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;​
```

[/slide]

[slide hideTitle]

# Controller Logic

When using the `WebMvcLinkBuilder` approach, we work with single entities.

Using the `EntityModel` class, we set the main entity (e.g. Student), along with the links, such as `self` and `orders`:

```java
... // Without extending the RepresentationModel<T> interface​
Optional<Student> studentOpt = this.studentRepository.findById(id);​
return studentOpt​
    .map(s -> ResponseEntity.ok(​
      EntityModel.of(s, getStudentLinks(s))))​
    .orElse(ResponseEntity.notFound().build()); 
```

We implement the `getStudentLinks` method as follows:

```java
private Link[] getStudentLinks(Student student) {​
    Link self = linkTo(methodOn(StudentsController.class)​
        .getStudent(student.getId()))​
        .withSelfRel();​

    Link orders = linkTo(methodOn(StudentsController.class)​
        .getAllOrdersByStudentId(student.getId()))​
        .withRel("orders");​

    return List.of(self, orders).toArray(new Link[0]);​
}
```

Since we are using the `WebMvcLinkBuilder` approach, we make new `Link` object instances for each possible endpoint.

Then, we return them as an array, in order to pass them as a second argument to the `EntityModel.of()` method.

The resulting links will look like this:

```json
"_links": { ​
  "self": {"href":"http://api.softuni.org/students/6079754"},​
  "orders": {"href":"http://api.softuni.org/students/6079754/orders"}​
} 
```

[/slide]

[slide hideTitle]

# Controller Logic using the RepresentationModel

The second way to implement HATEOAS is by extending `RepresentationModel`:

```java
... // Extending the RepresentationModel<T> interface​
Student student = this.studentService.findById(id);​

student.add(linkTo(methodOn(StudentsController.class)​
    .getStudent(student.getId()))​
    .withSelfRel());​

student.add(linkTo(methodOn(StudentsController.class)​
    .deleteStudent(student.getId()))​
    .withRel("delete"));​

student.add(linkTo(methodOn(StudentsController.class)​
    .updateStudent(student.getId(), student))​
    .withRel("update"));​

student.add(linkTo(methodOn(OrdersController.class)​
    .findAllOrdersByUserId(student.getId()))​
    .withRel("orders"));​​

return ResponseEntity.ok(student);​
...
```

Since `Student` instances extend `RepresentationModel`, they can use the `add` method to accept each link.

The `linkTo` method creates a new `ControllerLinkBuilder` 
for each student/orders endpoint.

The `withRel(String rel)` method creates the `Link` built by the current builder instance with the given `rel` string.

[/slide]

[slide hideTitle]

# Benefits of using HATEOAS

HATEOAS is a powerful tool that allows us to build a RESTful API that is easy to understand and maintain.

It brings a lot of benefits to our API:

 - Since the latest URLs are always available to the client, we can easily change API endpoints without introducing breaking changes

- The `_links` object allows for Hypermedia APIs to be browsed with a graphical user interface, such as the HAL Explorer

- It provides users with a clearer view of what operations they are authorised to do, since forbidden endpoints are not included

[/slide]

[slide hideTitle]

# Disadvantages

A big disadvantage of a Hypermedia API is that it is harder to develop.

Implementing links into each response is a complex task, since we have to take into account user permissions, and ultimately - the state to provide to the client.

This also makes such APIs harder to test when compared to a vanilla REST API.

On the client side, additional code is required in order to handle HATEOAS responses.

[/slide]
