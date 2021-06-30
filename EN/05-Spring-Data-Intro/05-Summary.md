[slide hideTitle]

# Summary

# In this lesson you learned:

- What is **Spring-data**
    - **Spring data** is part of the **Spring Framework**.
    - **Spring data** is not a JPA provider, just an abstraction over it.

- What is the **repository pattern**.
    - What are **Spring data** repositories.

```java
public interface CrudRepository<T, ID extends Serializable>   //Crud Repository
    extends Repository<T, ID> {
    <S extends T> S save(S entity);
    T findOne(ID primaryKey);
    Iterable<T> findAll();
    Long count();
    void delete(T entity);
    boolean exists(ID primaryKey);
    }
```

- **Spring data** builds queries over conventions.

- What is **service** and a **service layer**.

```java
@Service
public class StudentServiceImpl implements StudentService {
                                                                
    @Autowired
    private StudentRepository studentRepository;

    @Override
    public void register(Student student) {
        studentRepository.save(student);
    }

    @Override
    public void expel(Student student) {
        studentRepository.delete(student);
    }
```


# In the next lesson, we will learn:

- JPQL syntax

- Inheriting Repositories

- How to properly expose information about our entities

- What is Auto-Mapper

- How to use Auto-Mapper

[/slide]