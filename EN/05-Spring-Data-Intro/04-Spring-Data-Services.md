# Services and the Service Layer

[slide hideTitle]

# The Service Layer

The **Service pattern** is an architecture pattern that holds the business logic in a separate layer within the application's architecture. 

Service classes are categorized into different layers, depending on the functionality they introduce.

One such category is **data services**, which contains only the services responsible for manipulating the data repositories connected to the database.

The primary purpose of the service layer is to hide internal processes from the entities.

Developers should focus on making these services reusable, making the application easier to extend.

```java
public interface StudentService {           // First, we get the interface of our service
                                            // with various methods declared in it,
    void register(Student student);         // on which our business logic depends.

    void expel(Student student);

    void expel(long id);

    Student findStudent(long id);

    List<Student> findSampleByMajor(Major major);


@Service
public class StudentServiceImpl implements StudentService {     // Then we have a class implementing our interface
                                                                
    @Autowired
    private StudentRepository studentRepository;                // With declared dependencies

    @Override
    public void register(Student student) {                     // And already implements methods
        studentRepository.save(student);
    }

    @Override
    public void expel(Student student) {
        studentRepository.delete(student);
    }
}
```

[/slide]

[slide hideTitle]
# Spring Data Architecture

[image assetsSrc="Spring-Data-Service.png" /]

A model has a repository layer and a service layer.

The repository establishes a link between the service layer and the database. 

It is responsible for the data sent to the database from the service layer (incoming information) and the retrieved data sent back to the service layer.

The service layer processes either the incoming information and sends it to the database or processes the incoming request and retrieves the necessary information from the database. 

[/slide]

[slide hideTitle]

# Entry Point

Firstly we will need an entry point for our **Spring Application**.

We declare the entry point with the **@SpringBootApplication** annotation.

The application underneath is a console that requires the `Main` class. 

That is how we start the Spring Boot application.

```java
@SpringBootApplication                                           
public class MainApplication {                                  
public static void main(String[] args) {                        
        SpringApplication.run(MainApplication.class,args);      
    }
}
```

We can also create a class to run custom logic when starting the project, similar to the `main` method. 

We can accomplish this by creating a new class and implementing the `CommandLineRunner` interface. 

The class also needs to be annotated with the `@Component` annotation so that Spring can add it to its life cycle.

```java
@Component
public class ConsoleRunner implements CommandLineRunner {
    
    private final StudentService studentService;
    private final CourseService courseService;

    public ConsoleRunner(StudentService studentService, CourseService courseService) {
        this.studentService = studentService;
        this.courseService = courseService;
    }
    
    @Override
    public void run(String... strings) throws Exception {   
        Course course = new Course("ORM And Spring Data");
        Student student = new Student("John", new LocalDate(), course);
        courseService.create(course);
        studentService.register(student);
    }
}
```
[/slide]