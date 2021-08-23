# Testing the Web Layer

[slide hideTitle]

# Testing Controller

UserController example:

```java
@Controller
@RequestMapping("/users")
public class UserController {
    // Inject UserService in constructor
    @GetMapping("/{id}")
    public ModelAndView getById(@PathVariable("id") Long id, ModelAndView modelAndView) {
        modelAndView.addObject("user", this.userService.findById(id));
        modelAndView.setViewName("one");
        return modelAndView;
    }
    @GetMapping("/all")
    public ModelAndView findAll(ModelAndView modelAndView){
        modelAndView.addObject("users", this.userService.findAll());
        modelAndView.setViewName("all");
        return modelAndView;
    }
}
```
In this example, we inject "UserService" into the constructor.

The first action has mapping, which returns a user by id, where we add the user into the view and return the view.

Then we have another action, where we display all users.

A service `this.userService.findAll()` which returns a collection of users, and then they are added to the view and as a result `modelAndView` si returned.

[/slide]

[slide hideTitle]

# MockMvcResultMatchers Methods

|**Method Name**|**Description**|
|---|---|
|`request()`|Access to request-related assertions.|
|`handler()`|Access to assertions for the handler that handled the request.|
|`model()`|Access to model-related assertions.|
|`view()`|Access to assertions on the selected view.|
|`flash()`|Access to flash attribute assertions.|
|`status()`|Access to response status assertions.|
|`header()`|Access to response header assertions.|
|`content()`|Access to response body assertions.|

You can read more about **MockMvcResultMatchers methods** [here](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/test/web/servlet/result/MockMvcResultMatchers.html).

[/slide]

[slide hideTitle]

# Simple Test Examples 

- Test example with "**MockMvc**" with regular MVC controller:

```java
@SpringBootTest
@AutoConfigureMockMvc
public class UserControllerTests {
    @Autowired
    private MockMvc mockMvc;
    @Test
    public void when_getOneStudents_returnFirst() throws Exception {
        mockMvc
                .perform(MockMvcRequestBuilders
                        .get("/users/1"))
                .andExpect(status().isOk())
                .andExpect(view().name("one"))
                .andExpect(model().attributeExists("user"));
}
```
In this example, by using "MockMvc" we can create an application context and HTTP requests could be sent.

A test named `when_getOneStudents_returnFirst()` is created which trows exception if there is no user with "id = 1" and the name of the is not "one".

- Test example with "**MockMvc**" with REST controller:

```java
@SpringBootTest
@AutoConfigureMockMvc
public class AuthorsControllerTest {
    // @Autowired MockMvc and AuthorRepository 
  @BeforeEach
  public void setUp() { // Add two test authors in repository }
  @AfterEach
  public void tearDown() { authorRepository.deleteAll(); }
  @Test
  public void testGetAuthorsCorrect() throws Exception {
    this.mockMvc.perform(get("/authors")).
        andExpect(status().isOk()).
        andExpect(jsonPath("$", hasSize(2))).
        andExpect(jsonPath("$.[0].name", is(author1Name))).
        andExpect(jsonPath("$.[1].name", is(author2Name)));  }
```
A GET request is sent to `/authors`, then validate that the REST address is up and running.

Then we can validate every part of the JSON response, by setting testing data, in this case, "author1Name" and "author2Name".

## Testing with MockUser 

When using Spring Security, some application methods could not me assccess, to solv this problem when testing we use `@WithMockUser()`:

```java
@Test
@WithMockUser("customUsername")
public void getMessageWithMockUserCustomUsername() {
    String message = messageService.getMessage();
...
}
```

When using this annotation, the Spring Security context will be populated with a testing user, which could even have roles.

## Specific Roles

`@WithMockUser()` with roles:

```java
@Test
@WithMockUser(username="admin",roles={"USER","ADMIN"})
public void getMessageWithMockUserCustomUser() {
    String message = messageService.getMessage();
    ...
}
```


When testing saving in database methods, we can use embedded database by adding `@AutoConfigureTestDatabase`:

```java
@SpringBootTest
@AutoConfigureMockMvc
@AutoConfigureTestDatabase(connection = EmbeddedDatabaseConnection.H2)
public class UserControllerTests { 
    // Tests
}

```
[/slide]