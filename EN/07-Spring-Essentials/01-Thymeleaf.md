# Thymeleaf
[slide hideTitle]

# What is Thymeleaf

Thymeleaf is a **Java template engine** for server-side rendering, which means HTML, XML, JavaScript, CSS, and text are **processed and created** on the server, and the client (browser) **receives fully functional HTML**.

Thymeleaf makes views more **dynamic**, by using different variables and **executing operations** onto the variables and also **iterate** over collections.

Thymeleaf is **not the only technology** that could render HTML on the server, the others are Razor view (ASP.Net Core), Django (Python), and others.
[/slide]

[slide hideTitle]
# How to Use Thymeleaf

We ca use Spring Initializer to **import** Thymeleaf, or use this dependency in the `pom.xml` file:

```js
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>
``` 
Next, we should define the **Thymeleaf library** in the HTML templates:  

```js
<html lang="en" xmlns:th="http://www.thymeleaf.org">
```

## Change Thymeleaf Version

We also can **change** the Thymeleaf version in the `pom.xml` file:

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

Very often it is not necessary to set Thymeleaf's version because Spring Boot is responsible for setting up the version, this is set automatically. 

[/slide]

[slide hideTitle]
# Thymeleaf Syntax

## Tags and Attributes

All Thymeleaf tags and attributes begin with `th:` by default:

```js
<p th:text="Example"></p>
```
In this example the `th:text= ` could be a **string**, and also a **dynamic** expression passed by the controller.

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
|Variable Expressions|`${...}`|It is used to access a variable passed to the view by the controller.|
|Selection Expressions|`*{...}`|It is used to select a field into an object.|
|Accessing Bean|`${@...}`|It is used for accessing a bin into the application context.|
|Link (URL) Expressions|`@{...}`|It is used for URL creating.|
|Fragment Expressions|`~{...}`|It is used for fragments.|

## Variable Expressions

The Variable Expressions are **received** from the model, which was set by attribute into the controller.

`${...}`

There are several ways to **access** those model's properties:

- **Session**: `${#session.user.name}`

The session object is **not located in the model** but in the **default** session scope. 

And if there are users in the session, the name of the user could be extracted. 

What we have to do in the controller is to set the user upon **successful** login.

- `${title}`: is the model's attribute

- `${game.id}`: is Spring Expression Language, where we access the name of the bin and extract the "id" property

## If-else and Switch

We also could have **conditions**, like the bool attribute which returns true/false.

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

The `th:attrappend` and `th:attrprepend` attributes, which append (suffix) or prepend (prefix) the result of their evaluation to the existing attribute values:

```js
<input type="button" value="Play" class="btn" th:attrappend="class=${' ' + cssStyle}" />
```

The `th:classappend`: is the shorter syntax: 

```js
<tr th:each="error : ${errors}" class="row" th:classappend="${error} ? 'bg-danger'">
```

[/slide]

[slide hideTitle]
# Forms in Thymeleaf

In Thymeleaf we can create input forms with validations:

```js
<form th:action="@{/user}" th:method="post">
    <input type="number" name="id"/>
    <input type="text" name="name"/>
    <button type="submit"/>
</form>
```

The `th:action` is equivalent to the "action" attribute in HTML form, which is the route that the form will be submitted. 

The `th:method="post"` is the recommendet methods for sending sensitive data via HTTP.

We could have a controller that will accept an object of a given type:

```java
@PostMapping("/user")
public ModelAndView register(@ModelAttribute User user) { 
  ... 
}
```
When the request is sent, the controller (endpoint) will receive a model, which will have two properties "id" and "name".

## Fragments

Often we want to include in our templates fragments from other templates where common uses for this are footers, headers, and menus.

Define the fragments available for inclusion, which we can be done by using the `th:fragment` attribute.

After that we can easily include it on our home page using one of the `th:include` or `th:replace` attributes.

By using fragments:
- We can make reusable code snippets
- Reduce code duplications
- Improve code readability
- Increase code maintainability

Example: Create a class with fragments 

```js
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:th="http://www.thymeleaf.org">
  <body>  
    <div th:fragment="copy">
      &copy; Spring Team 2021
    </div>  
  </body>  
</html>
```

## Fragments referenses:

```js
<body>
  ...
  <footer th:include="footer::copy"></footer>
  // OR
  <footer th:replace="footer::copy"></footer>
  ...
</body>
```

In this example, the name of the fragment is `footer::copy`, which reference the `th:fragment="copy"` from the previous example.

The difference between `th:include` and `th:replace` is that "include" takes the tag's content embed it and saves the footer, where "replace" replace the entire footer with the `div` fragment.

## Difference Between Include and Replace

```js
<footer th:include="footer :: copy"></footer>
<footer th:replace="footer :: copy"></ footer>
 ...
```

Result:

```js
<footer>
    &copy; Spring Team 2021
</footer>
<div>
    &copy; Spring Team 2021
</div>    
...
```

## Create Fragment Without `th:fragment`

```js
// footer.html

<th:block>
  <footer> Spring Team 2021 </footer>
</th:block>
```

Use Fragment
 
```js
// index.html

...
<th:block th:include="~{/fragments/footer}> </th:block>
...
```
[/slide]


