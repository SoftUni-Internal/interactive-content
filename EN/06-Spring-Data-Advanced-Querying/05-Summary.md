[slide]
# Summary

# In this lesson we learnt:

- That **Spring Data** translates method names to **SQL Queries**.

- We can use JPQL to write custom queries.
    - JPQL syntax on entity classes.

```java
@Repository
public intetrface ShampooDao extends JpaRepository.
<Shampoo, Long>{                            
        List<Shampoo> findByBrand(String brand);
}
```

- Repositories can be inherited to reduce code duplication.

```java
interface StudentRepository extends JpaRepository<Student, Integer> {}{
Student findByFirstName(String firstName);                                   //.where firstName == firstName(param).
Student findByFirstNameAndLastName(String firstName, String lastName);       //.where firstName == firstame(param) AND lastName == lastName(param)
List<Student> findByAgeBetween(Integer ageMin, Integer ageMax);              //.where age between ageMin(param) AND ageMax(param).
}
```

- What's the purpose of the **JavaConfig.java** file.

# In the next lesson, we will learn:

- How to properly expose information about our entities.

- What is Auto-Mapper.

- How to use Auto-Mapper.
[/slide]