# Simple Demonstration

[slide hideTitle]

# Unit Testing

Unit testing of a web application is not different from testing a console application.

In a web application, we can test individual components (units), and these tests should be independent of the project infrastructure.

The same frameworks are used for testing web applications such as JUnit, Mockito.

In spring we will use another framework called MockMvc which will help us for testing the controller in a web application. 

It is important to not test Spring MVC build-in logic, for example, we should not test whether the build-in password encoder works correctly or not.

Spring MVC framework is a regular application for creating web applications and it went to the entire software testing process mentioned above, which means all features were tested and works correctly.

What is important to test is the custom functionality of our project, the code that we have written and it is part of our project.

[/slide]


[slide hideTitle]
# Unit Testing Example Set Up

The process of unit testing simple service is as follows:

```java
@Entity
@Table(name = "users")
public class User {
  private String id;
  private String username;
  private String password;

  ...
}
```
A entity "User" is create, with three properties: "id", "username", and "password".

Next, to work with the "User" entity, a repository is needed:

```java
@Repository
public interface UserRepository
extends JpaRepository < User, String > {
  User findByUsername(String username);
}

```
We should not work with the service directly, but the interface is used:

```java
public interface UserService {
  User getUserByUsername(String username);
}

```

There is only one method into the service's interface named `getUserByUsername()`, which checks if a user with a certain username exists.

And the actual service, which implements the "UserService" interface:

```java
@Service
public class UserServiceImpl implements UserService {
  ...
  public User getUserByUsername(String username) {
    return this.userRepository.findByUsername(username);
  }
}

```

What the "UserServiceImpl" service does is implement the logic of finding a user by username.

Before start testing this service, we should keep in mind that there are is a dependency on `userRepository`.

[/slide]


[slide hideTitle]

# Unit Testing - AAA

The Arrange-Act-Assert is the pattern that we are going to use to test the "UserServiceImpl" service.

- Arrange: is to create the input data that we will pass to the tested component

- Act: we will call the tested unit with the data that we have just created and we will store the result in a variable

- Assert: compare the actual result that was produced by the unit with the expected result, if these values match the test pass otherwise the tests fail

## Mock Repository

We start by creating a mock repository:

```java
public class UserServiceTests {
  private User testUser;
  private UserRepository mockedUserRepository;

  @Before
  public void init() {
    this.testUser = new User() {
      {
        setId("SOME_UUID");
        setUsername("Peter");
        setPassword("123");
      }
    };

    this.mockedUserRepository = Mockito.mock(UserRepository.class);
  }
}
```

First, we create a mock repository and eliminate the service's dependency.

## Arrange

```java
public class UserServiceTests {
  @Test
  public void userService_GetUserWithCorrectUsername_ShouldReturnCorrect() {
    // Arrange
    Mockito.when(this.mockedUserRepository
        .findByUsername("Peter"))
      .thenReturn(this.testUser);

    UserService userService = new
    UserServiceImpl(this.mockedUserRepository);
    User expected = this.testUser;
  }
}

```

The "**UserServiceTests**" tests if the service returns the correct name.
## Act

```java
public class UserServiceTests {
  @Test
  public void
  userService_GetUserWithCorrectUsername_ShouldReturnCorrect() {
    ...

    // Act
    User actual = userService.getUserByUsername("Peter");

    ...
  }
}

```

Here we invoke the real service witch mocked dependencies. 

Here we store the actual user into the "**actual**" object.

## Assert

```java
public class UserServiceTests {
  @Test
  public void
  userService_GetUserWithCorrectUsername_ShouldReturnCorrect() {
    ...
    // Assert
    Assert.assertEquals("Broken...", expected.getId(),
      actual.getId());
    Assert.assertEquals("Broken...", expected.getUsername(),
      actual.getUsername());
    Assert.assertEquals("Broken...", expected.getPassword(),
      actual.getPassword());
  }
}
```

Into the assert part, we check if the result from the tests matches the actual result of invoking the service.

[/slide]

[slide hideTitle]

# Testing

When we test a web application, as a priority we should test controllers, services, and custom components.

For example, if we have a costume validator, we should tests it by using unit tests.

Different components of the application are by using a different approach and different levels
- Unit testing
- Integration testing
- End-to-End testing

This is the so-called testing pyramid, where the lowest level is unit testing, the next level is integration testing and the higher level is End-to-End testing.

Where end-to-end testing tests all the components of an application in a fully integrated testing environment that mimics the real world.

End-to-end testing includes testing the interaction with external systems integrations business processes and developed reports so we can uncover and address any issues that may occur.

End-to-end testing will allow testers to uncover issues with the current process.

It will test components in an environment that mimics real-world use and verify interaction with external systems third-party integrations configurations business processes reports and security

[/slide]    