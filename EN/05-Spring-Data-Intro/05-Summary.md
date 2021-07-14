[slide hideTitle]

# Summary

## In this lesson you learned:

- What **Spring Data** is
    * part of the **Spring Framework**
    * an abstraction layer over JPA

- What the **Repository pattern** is

- What **Spring Data Repositories** are

```java
public interface CrudRepository<T, ID extends Serializable> extends Repository<T, ID> {
    <S extends T> S save(S entity);
    T findOne(ID primaryKey);
    Iterable<T> findAll();
    Long count();
    void delete(T entity);
    boolean exists(ID primaryKey);
}
```

- **Spring Data** builds queries over conventions

- What the **service layer** is and how it communicates with the other components

```java
@Service
public class StudentServiceImpl implements StudentService {
                                                                
    
    private final StudentRepository studentRepository;

    private StudentServiceImpl(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @Override
    public void register(Student student) {
        studentRepository.save(student);
    }

    @Override
    public void expel(Student student) {
        studentRepository.delete(student);
    }
```


## In the next lesson you will learn:

- What **JQPL** is
- **Inheriting** Repositories
- **Exposing** information about our entities
- What an **Auto Mapper** is and how to use one

[/slide]