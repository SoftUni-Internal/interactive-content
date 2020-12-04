[slide]

# Spring Data Services

When talking about bigger applications, the **Service pattern** always finds it's way into the conversation. 

**Service pattern** is an architecture pattern, which intends to take the business logic in a separate layer in the app's architecture. 

The service classes are categorized into different layers, depending on the functionality they introduce.

One such category is the **data services**, which must contain only services related to working with the data repositories connected to the database.

The main concept behind the service layer is to not expose any internal processes to the entities.

The developers should be aiming of making the services re-usable, so any other future application that may need these services can make use of them with little to non-configuration. 

[image assetsSrc="Spring-Data-Service.png" /]

Now let's have some code examples.

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

Now let's use the service that we just created. 

Firstly we will need an entry point for our **Spring Application**.

```java
@SpringBootApplication                                          //The entry point of our application is declared with this annotation. 
public class MainApplication {                                  //the web application underneath is just a simple console application.
public static void main(String[] args) {                        //as we know, every console application needs a static void main class.
        SpringApplication.run(MainApplication.class,args);      //That's how we start our web app.
    }
}

    @Component                                                  //The component class will let spring to know
public class ConsoleRunner implements CommandLineRunner {       // that this class will need dependency injection.    
    @Autowired
    private StudentService studentService;                      //We set the dependency for student service.

    @Autowired
    private MajorService major service;                         //Than we set the second dependency for major service.

    @Override
    public void run(String... strings) throws Exception {   
        Major major = new Major("Java DB Fundamentals");
        Student student = new Student("John",new Date(), major);
        majorService.create(major);
        studentService.register(student);                       //Than we create our records and persist the data.
    }
}
```
[/slide]