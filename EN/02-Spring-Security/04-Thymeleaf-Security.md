# Thymeleaf Security

[slide hideTitle]
# Functionality to Thymeleaf

Views are **security-aware** in most real-life applications that's the case.

There are lots of **situations** where we like to show or hide some **content** If the user is authenticated or not.

There are cases when we would like to **show** or **hide** some **content** or **features** if the user has a particular **role** or **particular** permission.

There are could be cases when we want to **display** user details like user name, email, permissions, etc. 

The only place we can get this type of **information** is from **Sprint security**.

For that, we need to have the **security context available** and extract that **information** at the view level to use them effectively.

**Thymeleaf** has Spring Security **add-ons** that make it easy to implement such **features**.

To use **Thymeleaf** with Spring Security **two things should be done**.

The first one is we need to add the **Thymeleaf** extra Spring Security dependacyes:


```js
<dependency>
    <groupId>org.thymeleaf.extras</groupId>
    <artifactId>thymeleaf-extras-springsecurity5</artifactId>
</dependency>

```
Then we have to use the specific **Thymeleaf** security attributes that enable you to do the **security features**.

[/slide]

[slide hideTitle]
# Principal

The next step to use **Thymeleaf** security is to create a naming schema:

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

In this example we create the **schema** `xmlns:sec=`, then we can use some of the `sec` **build-in methods**.

For example, we could **lock content**, by using `sec:authentication=`, where the property value will show if the user is **authenticated**.

## Roles

It is possible to authorize roles too:

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
In this example, we can lock **content** only for authorized users in the "**ADMIN**" role.

[/slide]