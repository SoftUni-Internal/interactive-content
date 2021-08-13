# Spring Security

[slide hideTitle]
# Spring Security - Definition

Imagine spring security as being a watchman or security guard in front of a web application, which stopping every request.

The security guard typically asks two questions:
- "Who you are?" 
- "What do you want?" 

The security guard asks those two questions if you are requesting something from the web application.

By answering the first question "Who you are?" we are telling the guard who you are.

Note that just telling the guard is not enough here we also have to prove, by providing some kind of ID.

Then you answer the second question "What do you want?" by just stating what we want or what we would like to do, with this step no proof is needed.

Answering the first question "Who you are?" is what's called **authentication**.

Most web applications like Facebook or LinkedIn have some representation of an ID or an account that kind of uniquely corresponds to a user.

When a user accesses one of these applications, he needs to tell which of those millions of accounts in the system corresponds to him.

After telling this information, also the user needs to prove that it is indeed him.

A common way this is done is by providing your user ID and password, which is called knowledge-based authentication.

There are also two other different types of authentication:

- Position based - an app sends you a text message or email
- Multi-factor authentication - a combination of user ID plus password and position based authentication

**Authorization**: this is the security guard examining what you want and then deciding if you are allowed to do that.

In other words, it is answering the question "Can this user do what they're trying to do?" and the answer for this question is **yes** or **no**.

The user might be able to do one particular operation and they may not be able to do another operation. 

For example, a regular user into e-commerce can purchase merchandise, comment, etc., but an admin could add merchandise, change price, delete users, etc.

Those were the two of the five concepts and terms associated with spring security, the other three are:
- Principal
- Granted Authority
- Roles


[/slide]


[slide hideTitle]
# Spring Security Filter Chain

[image assetsSrc="Java-Spring-Advanced-Spring-Security-3.png" /]

When requests are sent, it goes through different filters, one of those is "DelegatingFilterProxy", which delegates to "FilterChainProxy" the authentication process.

By default there is no authentication filter installed, it should be added additionally.

This filter will check every request for authentication if needed.

[/slide]

[slide hideTitle]
# Security Context and Authentication

The `SecurityContext` and `SecurityContextHolder` are two fundamental classes of Spring Security. 

The `SecurityContext` is used to store information for authenticated users, also known as a principle. 

In order to get information for the user, username, email, password, etc., we need to get this `SecurityContext` first. 

The `SecurityContextHolder` is a helper class, which provides access to the security context. 

The `SecurityContextHolder` uses a `ThreadLocal` object to store security context, which makes security context always available to methods in the same thread of execution, even if we do not pass the `SecurityContext` object around. 

There will be no memory leaks when using `ThreadLocal` because Spring Security takes care of cleaning all unused threads.

## Spring Security Mechanism

Security filters mentioned above decides whether the required authentication and authorization existing or not, by using two classes:

- Authentication manager - validate username and password
- Access decision manager - check the role and decide whether the user can access a resource or not


[/slide]

[slide hideTitle]
# Spring Security Maven and Configuration

To use Spring Security dependency, we need to add it into the `pom.xml` file:

```js
<dependency>
   <groupId>org.springframework.boot</groupId>
   <artifactId>spring-boot-starter-security</artifactId>
</dependency>
```

## Spring Security Configuration 

Next step is to configure Spring Security:

```java
@Configuration
@EnableWebSecurity //Can be omitted because of WebSecurityConfigurerAdapter
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
   // The configuration logic
}
```

To configure Spring Security, `WebSecurityConfigurerAdapter` needs to be extended, then we write the configuration logic.

Then the `configure()` method should be override:

```java
@Override
protected void configure(HttpSecurity http) throws Exception {
http
    .authorizeRequests()  // Authorize Requests
    .antMatchers('/', '/register').permitAll()  // Permit Routes
    .anyRequest().authenticated()  // Require Authentication
}
```

As an argument `configure()` method receive an instance of `HttpSecurity`, that way we can set which web pages are accessible by a log-in user and which not.

You can read more about Spring Security Architecture [here](https://spring.io/guides/topicals/spring-security-architecture).

[/slide]

[slide hideTitle]
# Registration

## User

## Roles

## Simple Granted Authority

## UserService

## Register User in Memory with Overriding Configure
[/slide]

[slide hideTitle]
# Login


## Configuration

## UserService

## Controller


[/slide]

[slide hideTitle]
# Logout



[/slide]

[slide hideTitle]
# Principal



[/slide]

[slide hideTitle]
# Pre / Post Authorize



[/slide]

[slide hideTitle]
# No Access Handling



[/slide]
