# Implement HATEOAS in Spring Projects​

[slide hideTitle]

# HATEOAS Dependency​

```xml
<dependency>​
  <groupId>org.springframework.hateoas</groupId>​
  <artifactId>spring-hateoas</artifactId>​
</dependency>​
```

[/slide]

[slide hideTitle]

# Application Database



[/slide]

[slide hideTitle]

# Preparing Controllers

```java
​import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;​
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;​
```

[/slide]

[slide hideTitle]

# Controller Logic

```java
... // Without extending the RepresentationModel<T> interface​
Optional<Student> studentOpt = this.studentRepository.findById(id);​
return studentOpt​
    .map(s -> ResponseEntity.ok(​
EntityModel.of(s, getStudentLinks(s))))​
.orElse(ResponseEntity.notFound().build()); 

---------------------------------------------------​

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

[/slide]

[slide hideTitle]

# Controller Logic using the RepresentationModel

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

[/slide]

[slide hideTitle]

# Benefits of using HATEOAS



[/slide]

[slide hideTitle]

# Disadvantages



[/slide]
