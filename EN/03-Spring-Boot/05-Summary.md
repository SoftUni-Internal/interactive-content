[slide hideTitle]

# Summary

## In this lesson you learned:

**Spring Boot Components**

- **Spring Boot** has the following components:

  - **Starters**
  - **Auto-Configuration**
  - **CLI**
  - **Actuator**

- **Beans** are objects within an **IoC** container

```java
@Bean
public Animal getDog(){
    return new Dog();
}
```

- A **bean** can have six different contexts:

  - **Singleton**
  - **Prototype**
  - **Request**
  - **Session**
  - **Application**
  - **WebSocket**

- **Spring Boot** offers **annotations** and **interfaces** that run functions **before** or **after** a bean's **lifecycle phases**

```java
@Component
public class UserRepository {
 
    private DbConnection dbConnection;
    @PreDestroy
    public void preDestroy() {
        dbConnection.close();
    }
}
```

```java
@Component
public class BeanForDestruction implements DisposableBean {

    @Override
    public void destroy() throws Exception {
        System.out.println(
          "Callback triggered - DisposableBean.");
    }
}
```

- **Spring Boot** is configured in **external files** like `application.properties`


- **Spring Data Entities** are a way to **link** a **class** with a **database table**

```java
@Entity
@Table(name = "cats")
public class Cat {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;
    //GETTERS AND SETTERS
}
```

- **Repositories** are persistence layers that operate with **Entities**

```java
@Repository
public interface CatRepository extends JpaRepository<Cat, Long> {
}
```

- **Services** contain all the **business logic**

```java
@Service
public class CatServiceImpl implements CatService {
    private final CatRepository catRepository;

    @Autowired
    public CatServiceImpl(CatRepository catRepository){
	this.catRepository = catRepository;
    }

    @Override
    public void buyCat(CatModel catModel) { //TO DO: Implement the method }
}
```

## In the next lesson you will learn:

- What the **Spring MVC** is
    * the **Inversion of Control** principle
    * what code **layers** are
    * working with **thin controllers**

[/slide]
