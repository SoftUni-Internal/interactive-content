# Spring Security

[slide hideTitle]
# Spring Security - Definition

Imagine spring security as being a watchman or security guard in front of a **web application**, which stopping every request.

The security guard typically asks two questions:
- "**Who you are?**" 
- "**What do you want?**" 

The security guard asks those** two questions** if you are **requesting something** from the web application.

By answering the first question "**Who you are?**" we are telling the guard who you are.

Note that just telling the guard is **not enough** here we also have to prove, by providing some kind of "ID".

Then you answer the **second question** "**What do you want?**" by just stating **what we want** or **what we would like to do**, with this step no proof is needed.

Answering the first question "**Who you are?**" is what's called **authentication**.

Most web applications like **Facebook** or **LinkedIn** have some representation of an "**ID**" or an account that uniquely **corresponds** to a user.

When a user **accesses** one of these applications, he needs to tell which of **those millions of accounts** in the system corresponds to him.

After telling this **information**, also the user needs to **prove that it** is indeed him.

A common way this is done is by providing your **user name** and **password**, which is called **knowledge-based authentication**.

There are also two other different types of **authentication**:

- **Position based** - an app sends you a text message or email
- **Multi-factor authentication** - a combination of user ID plus password and position based authentication

**Authorization**: this is the security guard examining what you want and then deciding if you are allowed to do that.

In other words, it is answering the question "**Can this user do what they're trying to do?**" and the answer for this question is **yes** or **no**.

The user might be able to do one **particular operation** and they may **not be able to do another operation**. 

For example, a regular user into **e-commerce can purchase merchandise**, **comment**, etc., but an **admin** could add merchandise, change price, delete users, etc.

Those were the two of the five concepts and terms associated with spring security, the other three are:
- **Principal**
- **Granted Authority**
- **Roles**


[/slide]


[slide hideTitle]
# Spring Security Filter Chain

[image assetsSrc="Java-Spring-Advanced-Spring-Security-3.png" /]

When requests are **sent**, it goes through **different filters**, one of those is "**DelegatingFilterProxy**", which delegates to "**FilterChainProxy**" the authentication process.

By default there is no **authentication filter installed**, it should be added additionally.

This filter will check every request for authentication if needed.

[/slide]

[slide hideTitle]
# Security Context and Authentication

The `SecurityContext` and `SecurityContextHolder` are two **fundamental** classes of Spring Security. 

The `SecurityContext` is used to **store information** for authenticated users, also known as a **principle**. 

To get information for the user, **username**, **email**, **password**, etc., we need to get this `SecurityContext` first. 

The `SecurityContextHolder` is a helper class, which provides access to **the security context**. 

The `SecurityContextHolder` uses a `ThreadLocal` object to **store security context**, which makes security context **always available** to methods in the **same thread of execution**, even if we do not pass the `SecurityContext` object around. 

There will be no **memory leaks when** using `ThreadLocal` because **Spring Security** takes care of cleaning all unused threads.

## Spring Security Mechanism

Security filters mentioned above **decides** whether the required **authentication** and **authorization** existing or not, by using two classes:

- **Authentication manager** - validate username and password
- **Access decision manager** - check the role and decide whether the user can access a resource or not


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

As an argument `configure()` method receive an **instance** of `HttpSecurity`, that way we can set which web pages are accessible by a log-in user and which are not.

You can read more about Spring Security Architecture [here](https://spring.io/guides/topicals/spring-security-architecture).

[/slide]

[slide hideTitle]
# Registration

## User

```java
@Entity
public class User implements UserDetails {
    private String username;
    private String password;
    private boolean isAccountNonExpired;
    private boolean isAccountNonLocked;
    private boolean isCredentialsNonExpired;
    private boolean isEnabled;
    private Set<Role> authorities;
}
```

In this example, a **user entity** is created, which **implements** the `UserDetails` interface, and few properties are added too.

## Roles

Into the previous example we have property `Role` for the user entity, when creating the `Role` class the `GrantedAuthority` interface should be implemented:

```java
public class Role implements GrantedAuthority {
    private String authority;
}
```
The `GrantedAuthority` interface has only one method `authority`.

## Simple Granted Authority

Granted authorities are a form of **expressing privileges** or **permissions** for an authenticated user, so if the user is not authenticated granted authority is not possible.

Granted authorities can be express by using plain old names for example:

- **READ_PROFILE**
- **EDIT_PROFILE**
- **DELETE_PROFILE**
- **ACCESS_PUBLIC_API**

It is a list of permissions that the user has inside our application.

For better understanding we can compare granted authority with roles, which are also expressed using plain names:

- **ROLE_ADMIN**
- **ROLE_USER**
- **ROLE_SALES**
- **ROLE_MANAGEMENT**

There is a subtle difference in naming.

In the **spring security context** there is no restriction for naming granted authorities, but for roles there are is a **prefix** to the name of the role with the "**ROLE**" keyword so this is the reason other roles sound the same: **role admin**, **role user**, **role sales**. 

**Roles** and **authorities** also differ in granularity, **authorities** are very small pieces of permission, like read API, modify API. 

Roles are more **coarse they grounded** bigger authorities like role admin that group all the permissions like reading, edit, and delete profiles.

## UserService

Implementing the `UserDetailsService` interface:

```java
@Service
public class UserServiceImpl implements UserDetailsService {
   private BCryptPasswordEncoder bCryptPasswordEncoder;
   public UserServiceImpl(BCryptPasswordEncoder bCryptPasswordEncoder){
      this.bCryptPasswordEncoder = bCryptPasswordEncoder;
   }
     public void register(RegisterModel registerModel) { 
        bCryptPasswordEncoder.encode(password)); // Encrypt password
     }
}
```
In this example, `UserServiceImpl` implements the `UserDetailsService` **interface**, which has one method `register` which **encrypts** the password.

But to encrypt the **password**, a dependency `BCryptPasswordEncoder` should be **injected** from the constructor.

The `UserDetailsService` could be implemented together with `UserService`
## Register User in Memory with Overriding Configure

```java
...
@Override
protected void configure (AuthenticationManagerBuilder auth) throws Exception {
auth
  .inMemoryAuthentication()
    .withUser("user")                       
          .password(bCryptPasswordEncoder.encode("user")).roles("USER")
    .and()
    .withUser("admin")
         .password(bCryptPasswordEncoder.encode("admin")).roles("ADMIN");
}...
```
In this example, **in-memory authentication** is used for storing usernames and passwords.

[/slide]

[slide hideTitle]
# Login Mechanism

When a client sends an HTTP **request**, the session is **created**, for the current **session cookie is sent**, that way the server knows this is the same session.

Next, the user logs in to the application, and together with the l**ogin credentials** (username, password), the session cookie is also **sent**.

Then the **server validates** the user and the cookie and grand access to the allowed resources.

## Configuration

Example of how to configure login page:

```java
// SecurityConfiguration.java

.and()
  .formLogin().loginPage("/login").permitAll()
  .usernameParameter("username")
  .passwordParameter("password")
```
The address of the login plage is `/login`, with `.permitAll()` there is **no restriction to anybody open** this page, and accepts two parameters "username" and "password".

The input form looks like this: 

```js
// login.html

<input type='text' name='username'/>
<input type='text' name='password'/>

```
## UserService

An example implementation of user service:

```java
// UserServiceImpl.java

@Service
public class UserServiceImpl implements UserDetailsService { //User Service Interface

   // Service logic
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
   //...
    }
}
```
`UserServiceImpl` implements the `UserDetailsService` interface, where a `loadUserByUsername()` method is **overwritten** and inside we can access the user into the database by using the user repository.

## Controller

Example of login controller:

```java
@Controller
public class LoginController {
    @GetMapping("/login")
    public String getLoginPage(@RequestParam(required = false) String error, Model model) {
        if(error != null){
            model.addAttribute("error", "Error");
        }
        return "login";
    }
}
```
This controller returns the login page, where an input form is located, when the "**submit**" button is pressed, the login **information** will be submitted and a security filter will be activated.


[/slide]

[slide hideTitle]
# Logout

Example of logout:

```java
.and()                      
.logout().logoutSuccessUrl("/login?logout").permitAll(); //Logout, no Controller is required
```
For logout a controller is not needed, it is enough to submit on the `/login?logout` route, and the user will be logged out.

[/slide]

[slide hideTitle]
# Remember Me

Example of remember me:
```java
// SecurityConfiguration.java

.and()
     .rememberMe()
     .rememberMeParameter("remember")
     .key("remember Me Encryption Key")
     .rememberMeCookieName("rememberMeCookieName")
     .tokenValiditySeconds(10000);
```

If the application has remembered the user **functionality** which is **encrypted** on the client-side, the server sends a cookie, and when the client accesses the application, the user is **automatically** logged in.

Remember me into the view:

```js
// login.html

<input name='remember' type='checkbox' />
```

In the login form, a checkbox is placed and the **information is sent** to the controller.

[/slide]

[slide hideTitle]
# Principal

Аuthentication is the process of identifying a person trying to access the application.

Тhe principle is a person we have **identified through the process of authentication**, in other words, a principle is a **currently** logged-in user.
 
In the context of spring security, it is that unique **information** or **account** in the system that you tie to a specific person.

When giving the **user ID** and **password** the application establishes the **principle** and remembers it.

This is the reason why we **authenticate** with an application only once and we do not need to enter a user ID or password for every request or page load. 

```js
@GetMapping("/user")
public String getUser(Principal principal) {
    System.out.println(principal.getName()); // Print Logged-In username
    return "user";
}

```

[/slide]

[slide hideTitle]
# Pre / Post Authorize

Spring security could provide fine great permission on method level:

```java
// SecurityConfiguration.java

@EnableGlobalMethodSecurity(prePostEnabled = true) // Enables PreAuthorize
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

}
```

```java
// UserService.java

public interface UserService extends UserDetailsService {
    @PreAuthorize("hasRole('ADMIN')") // Requires Admin Role to execute
    void delete();
}

```

With `@PreAuthorize()` annotation we could authorize the user on the service level.

[/slide]

[slide hideTitle]
# No Access Handling

It is possible to costume exception handling page to be created:

```js
// SecurityConfiguration.java

.and()
.exceptionHandling().accessDeniedPage("/unauthorized");
```


```js
// AccessController.java

@GetMapping("/unauthorized")
public String unauthorized() {
    return "unauthorized";
}
```
[/slide]
