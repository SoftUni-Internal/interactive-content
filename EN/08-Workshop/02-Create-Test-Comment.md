[slide hideTitle]

# Create Test Comment

For the main **test**, we create a void method called **testGetComments()**. We will create two helping methods:

- **initRoute()**
- **initComments()**

First, we will create a **route** instance. Then we will create two comments. Then we will set the two of them to our route, and we will save it in the mock database.

If everything is done right, we will make a get request to the comments, and verify if they are saved.

```java
    private static final String COMMENT_1 = "Testing Comment 1";
    private static final String COMMENT_2 = "Testing Comment 2";

    @Test
    void testGetComments() throws Exception {
        Route route = initComments(initRoute());

        mockMvc.perform(get("/api/comments/"+ route.getId()))
                .andExpect(status().isOk());
    }

    private Route initRoute() {
        Route testRoute = new Route();
        testRoute.setName("Testing route");

        return routeRepository.save(testRoute);
    }

    private Route initComments(Route route) {

        Comment commentTest1 = new Comment();
        commentTest1.setCreated(LocalDateTime.now());
        commentTest1.setAuthor(testUser);
        commentTest1.setTextContent(COMMENT_1);
        commentTest1.setApproved(true);
        commentTest1.setRoute(route);

        Comment commentTest2 = new Comment();
        commentTest2.setCreated(LocalDateTime.now());
        commentTest2.setAuthor(testUser);
        commentTest2.setTextContent(COMMENT_2);
        commentTest2.setApproved(true);
        commentTest2.setRoute(route);

        route.setComments(Set.of(commentTest1, commentTest2));
        return routeRepository.save(route);
    }
```

[/slide]

[slide hideTitle]

# Verify Test

If we want to **Test** the test we created, we can right-click on the **@Test** annotation, and select **Run 'testGetComments()'**.

[image assetsSrc="14-Test-Comment.png" /]

This will verify the test, and if everything is correct you will see green ticks.

[image assetsSrc="15-Test-Result.png" /]

[/slide]
