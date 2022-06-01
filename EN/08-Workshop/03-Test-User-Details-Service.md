[slide hideTitle]

# Test Spring Security

In the **PathfinderUserDetailsServiceTest** we will test the spring security.

```java
@ExtendWith(MockitoExtension.class)
class PathfinderUserDetailsServiceTest {

}
```

First, we will create the **User** and **Admin** roles. Next, we will create a **user** entity and give him the roles.

```java
    private User testUser;
    private Role adminRole, userRole;

    private PathfinderUserDetailsService serviceToTest;

    @Mock
    private UserRepository mockUserRepository;

    @BeforeEach
    void init() {

        //ARRANGE
        serviceToTest = new PathfinderUserDetailsService(mockUserRepository);

        adminRole = new Role();
        adminRole.setRole(RoleNameEnum.ADMIN);

        userRole = new Role();
        userRole.setRole(RoleNameEnum.USER);

        testUser = new User();
        testUser.setUsername("test");
        testUser.setPassword("topsecret");
        testUser.setRoles(Set.of(adminRole, userRole));
    }
```

[/slide]

[slide hideTitle]

# Create Tests

This time we will create **two tests**.

- The first test will test with an **invalid user**.
- In the second test, we **create and save a user** to the **mock database**. Then we check if it **exists**. Then we check if it has the roles we set him in the **init()** method.

```java
    @Test
    void testUserNotFound() {
        Assertions.assertThrows(
                UsernameNotFoundException.class,
                () -> serviceToTest.loadUserByUsername("invalid_user_email@not-exist.com")
        );
    }

    @Test
    void testUserFound() {

        // Arrange
        Mockito.when(mockUserRepository.findByUsername(testUser.getUsername())).
                thenReturn(Optional.of(testUser));

        // Act
        var actual = serviceToTest.loadUserByUsername(testUser.getUsername());

        // Assert

        String expectedRoles = "ROLE_ADMIN, ROLE_USER";
        String actualRoles = actual.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(
                Collectors.joining(", "));

        Assertions.assertEquals(actual.getUsername(), testUser.getUsername());
        Assertions.assertEquals(expectedRoles, actualRoles);
    }
```

We can run both tests, at the same time, by holding **Ctrl + Shift + F10**.

[image assetsSrc="16-Test-All.png" /]

In the next workshop, we will start with **deploying** our project to the web.

[/slide]
