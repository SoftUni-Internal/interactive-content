# Thymeleaf Security

[slide hideTitle]
# Functionality to Thymeleaf


```js
<dependency>
	<groupId>org.thymeleaf.extras</groupId>
	<artifactId>thymeleaf-extras-springsecurity5</artifactId>
</dependency>

```
[/slide]

[slide hideTitle]
# Principal


```js
// index.xml

<!DOCTYPE html>
<html lang='en'
      xmlns:th='http://www.thymeleaf.org'
      xmlns:sec='http://www.thymeleaf.org/extras/spring-security'>
<body>
<div sec:authentication='name'>
    The value of the 'name' property of the authentication object should appear here.
</div>
</body>
</html>


```
[/slide]

[slide hideTitle]
# Roles



```js
// index.xml

<!DOCTYPE html>
<html lang='en'
      xmlns:th='http://www.thymeleaf.org'
      xmlns:sec='http://www.thymeleaf.org/extras/spring-security'>
<body>
<div sec:authorize='hasRole("ADMIN")'>
    This content is only shown to administrators.
</div>
</body>
</html>
```

```
[/slide]