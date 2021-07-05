# Services and the Service Layer

[slide hideTitle]

# The Service Layer

The **Service pattern** is an architecture pattern, which intends to take the business logic in a separate layer in the app's architecture. 

The service classes are categorized into different layers, depending on the functionality they introduce.

One such category is the **data services**, which must contain only services related to working with the data repositories connected to the database.

The main concept behind the service layer is to not expose any internal processes to the entities.

The developers should be aiming of making the services re-usable, so any other future application that may need these services can make use of them with little to non-configuration. 

```java
public interface StudentService {           //First we get the interface of our service
                                            //with various methods declared in it,
    void register(Student student);         //on which our business logic depends.

    void expel(Student student);

    void expel(long id);

    Student findStudent(long id);

    List<Student> findSampleByMajor(Major major);


@Service
public class StudentServiceImpl implements StudentService {     //Then we have a class implementing our interface.
                                                                
    @Autowired
    private StudentRepository studentRepository;                //With declared dependencies.

    @Override
    public void register(Student student) {                     //And already implements methods.
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

The repository establishes a link between the service layer and the database. It is responsible for the data that is being sent to the database from the service layer (incoming information) and the retrieved data that needs to be sent to the service layer.

The service layer processes either the incoming information and sends it to the database or processes the incoming request and retrieves the necessary information from the database. 

[/slide]

[slide hideTitle]

# Entry Point

Firstly we will need an entry point for our **Spring Application**.

The entry point is declared with the **@SpringBootApplication** annotation.
The application underneath is a console, which requires a Main class. That is how we start the Spring Boot application.

```java
@SpringBootApplication                                           
public class MainApplication {                                  
public static void main(String[] args) {                        
        SpringApplication.run(MainApplication.class,args);      
    }
}
```

We can also create a class to run custom logic when starting the project, similar to a main method. This can be done by creating a new class and implementing the CommandLineRunner interface. The class also needs to be annotated with the @Component annotation so that Spring can adding into its life cycle.

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