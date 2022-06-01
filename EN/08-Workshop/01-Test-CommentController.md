[slide hideTitle]

# Test Comment Controller

The **Comment Controller Test** must have **@SpringBootTest** and **AutoConfigureMockMvc**.

```java
@SpringBootTest
@AutoConfigureMockMvc
public class CommentControllerTest {
}
```

Inside the **controller**, we will add **@Autowired** properties to inject the **object dependency implicitly**. We will have **MockMvc**, **RouteRepository**, and **UserRepository**.

```java
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private RouteRepository routeRepository;

    @Autowired
    private UserRepository userRepository;

```

[/slide]

[slide hideTitle]

# Before and After Test

We want to prepare a few things before, going to the test method.

We want to create a **setUp()** and **tearDown()** methods that will initialize before and after the main test is done.

In the **setUp()** method, we create a testUser, with which we will create test comments.

For the **tearDown()** method, we want to destroy the instances.

Here are the **two** methods, and the field for the **testUser**:

```java
    private User testUser;

    @BeforeEach
    void setUp() {
        testUser = new User();
        testUser.setUsername("test");
        testUser.setFullName("Test Tester");
        testUser.setPassword("12345");

        testUser = userRepository.save(testUser);
    }

    @AfterEach
    void tearDown() {
        userRepository.deleteAll();
        routeRepository.deleteAll();
    }
```

[/slide]
