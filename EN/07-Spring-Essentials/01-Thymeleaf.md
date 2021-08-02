# Thymeleaf
[slide hideTitle]

# What is Thymeleaf

Thymeleaf is a Java template engine for server-side rendering, which means HTML, XML, JavaScript, CSS, and text are processed and created on the server and the client receives (browser) fully functional HTML.

Thymeleaf makes the views more dynamic, by using different variables and executing an operation on to the variables and also iterate over collections.

Thymeleaf is not the only technology that could render HTML on the server, the others are Razor view (ASP.Net Core), Django (Python), and others.
[/slide]

[slide hideTitle]
# How to Use Thymeleaf

Use Spring Initializer to import Thymeleaf, or use this dependency in the `pom.xml` file:

```js
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>
``` 
Define the Thymeleaf library in the HTML templates:  

```js
<html lang="en" xmlns:th="http://www.thymeleaf.org">
```

## Change Thymeleaf Version

We also can change the Thymeleaf version in the `pom.xml` file:

```js
<properties>
  <thymeleaf.version>
    3.0.12.RELEASE
  </thymeleaf.version>
  <thymeleaf-layout-dialect.version>
    2.5.2
  </thymeleaf-layout-dialect.version>
</properties>
```

Very often it is not necessary to set thymeleaf's, because spring Boot is responsible for setting up the version. 

[/slide]

[slide hideTitle]
# Thymeleaf Syntax

## Tags and Attributes

All Thymeleaf tags and attributes begin with `th:` by default:

```js
<p th:text="Example"></p>
```
In this example the "Example" could be a string, and also a dynamic expression passed by the controller.

Example of Thymeleaf tag (element processor):

```js
<th:block>
  ...
</th:block>
```
The `<th:block>` is an attribute container that disappears in the HTML.

[/slide]

[slide hideTitle]
# Standard Expressions

|**Expression Name**|**Syntax**|**Explenation**|
|---|---|---|
|Variable Expressions|`${...}`|It is used to access a variable (model) passed to the view by the controller.|
|Selection Expressions|`*{...}`|It is used to select a field into an object.|
|Accessing Bean|`${@...}`|It is used for accessing a bin into the application context.|
|Link (URL) Expressions|`@{...}`|It is used for URL creating.|
|Fragment Expressions|`~{...}`|It is used for fragments.|

## Variable Expressions

The Variable Expressions are received from the model, which was set by attribute into the controller.

`${...}`

There are several ways to access those model's properties:

- Session: `${#session.user.name}`

The session object is not located in the model, but the default session scope. 

And if there are users in the session, the name of the user could be extracted. 

What we have to do in the controller is to set the user upon successful login.

- `${title}`: this is the model's attribute

- `${game.id}`: this is spring expression language, where we access the name of the bin and extract the "id" property

## If-else and Switch

We also could have conditions, like the bool attribute which returns true/false.

- If - else

```js
<div th:if="${student.passExam}">Show results</div>
<div th:unless="${student.passExam}">Not pass</div>
```
In this example `student.passExam` returns true/false and depending on the result different string is returned.

- Switch

```js
<div th:switch="${user.role}">
  <p th:case="'admin'">User is an administrator</p>
  <p th:case="#{roles.manager}">User is a manager</p>
</div>
```

In this example depending on the user's role, different cases will be executed. 

## Default Expressions (Elvis Operator)

By using the Elvis operator, we can execute inline condition:

```js
<p>Age:
   <span th:text="*{age} ?: 'missing age'"> </span>
</p>
```

In this example, if "age" is not null, "missing age" will be the default value.

The example above is equivalent to:

```js
<p>Age: 
   <span th:text="*{age != null}? *{age}:'missing age'"></span>
</p>

```

## Link Expressions

Link Expressions are used to build URLs:

`@{...}`

- Example

```JS
<a th:href="@{/register}">Register</a>
```
In this example, we add the path of the application and then the "register" action.

- We can also pass query string parameters:

```js
<a th:href="@{/details(id=${game.id})}">Details</a>

// Result -> /details?id=3

```

- Create dynamic URLs, it is also called path variable

```js
<a th:href="@{/games/{id}/edit(id=${game.id})}">Edit</a>

// Result -> /games/3/edit  

```

## Iteration

When we want to iterate over collection:

```js
<tr th:each="s : ${students}">
        <td th:text="${s.name}"></td>
        <td th:text="${s.score}"></td>
        <td th:text="${s.age}"></td>
</tr>
```
The `th:` construction is the most commonly used because very often iteration over collection is needed when there is more than one record.

We can attach the object to the parent element:

```js
<tr th:each="s : ${students}" th:object="${s}">
        <td th:text="*{name}"></td>
        <td th:text="*{score}"></td>
        <td th:text="*{age}"></td>
</tr>
```

## Appending and Prepending


[/slide]


