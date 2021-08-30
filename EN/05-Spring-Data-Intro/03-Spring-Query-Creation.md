# Query Creation and Query Structure

[slide hideTitle]

# Query Creation

[video src="https://videos.softuni.org/hls/Java/Java-ORM-and-Spring-Data/05.Spring-Data-Intro/05.Spring-Data-Intro-26-27-28-Spring-Data-Query-Creation-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

One of the main functionalities of **Spring Data** repositories is the built-in query builder mechanism.

Built by following the **convention over configuration** design pattern, each repository method has a self-explanatory syntax:

- **find...By**

- **read...By**

- **query...By**

The first keyword of a given method indicates its purpose.

The respective arguments for these queries will get sanitized.

This process escapes special characters recognized by the **LIKE** keyword and excludes them from the query.

Further, **Spring Data JPA** will do a property check and traverse nested properties.

[/slide]

[slide hideTitle]
# Query Methods

[video src="https://videos.softuni.org/hls/Java/Java-ORM-and-Spring-Data/05.Spring-Data-Intro/05.Spring-Data-Intro-29-30-Query-Lookup-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We can apply this mechanism when building simple queries.

We should follow the naming conventions and leave the rest to **Spring Data**.

To learn how **query methods** work and understand their limitations, let us take a closer look at their syntax.

```java
@Repository                                                  
public interface StudentRepository extends JpaRepository<Student, Long> { 

    List<Student> findByTeacher(Teacher teacher); 
}
```

1. We must remember to include the `@Repository` **annotation** - it indicates that this is a repository in the **Spring context** 

2. We declare an interface that extends another Repository, containing methods for the functionality we desire

3. The repository interfaces are **generic** 
    * we should define the **Entity** we want to work with and **the type of the identity column in the entity**

4. The query method consists of three parts:
    1. `List<Student>` - the return type of the query
    2. **The name** of the query, consisting of:
        * the `find` prefix - declares what action we want to introduce to the query
        * `By` - the separator
        * **Teacher** - the criteria
    3. `(Teacher teacher)` - the required parameter/s
    
**Spring Data** automatically sanitizes and keeps our application safe from SQL injections.

The table below contains all query method keywords:

| **Keyword** | **Sample** | **SQL equivalent** |
| --- | --- | --- |
| And | findByFirstNameAndLastName    | … where x.first_name = ?1 and x.last_name = ?2 |
| Or  | findByFirstNameOrLastName  | … where x.first_name = ?1 or x.last_name = ?2 |
| Between  | findByStartDateBetween  | … where x.start_date between ?1 and ?2  |
| LessThan  | findByAgeLessThan  | … where x.age < ?1  |
| Containing  | findByFirstNameContaining  | … where x.first_name like ?1 (parameter bound wrapped in %)  |
| In  | findByAgeIn(Collection\<Age\> ages)  | … where x.age in ?1  |
| Distinct | findDistinctByFirstNameAndLastName | select distinct …  where x.first_name = ?1 and x.last_name = ?2 |
| LessThanEqual | findByAgeLessThanEqual | … where x.age <= ?1 |
| GreaterThan | findByAgeGreaterThan | … where x.age > ?1 |
| GreaterThanEqual | findByAgeGreaterThanEqual | … where x.age >= ?1 |
| After | findByStartDateAfter | … where x.start_date > ?1 |
| Before | findByStartDateBefore | … where x.start_date < ?1 |
| IsNull, Null | findByAge(Is)Null | … where x.age is null |
| IsNotNull, NotNull | findByAge(Is)NotNull | … where x.age not null |
| Like | findByFirstNameLike | … where x.first_name like ?1 | 
| NotLike | findByFirstNameNotLike | … where x.first_name not like ?1 | 
| StartingWith | findByFirstNameStartingWith | … where x.first_name like ?1 (parameter bound with appended %) |
| EndingWith | findByFirstNameEndingWith | … where x.first_name like ?1 (parameter bound with a prepended %) | 
| Containing | findByFirstNameContaining | … where x.first_name like ?1 (parameter bound wrapped in %) |
| OrderBy | findByAgeOrderByLastNameDesc | … where x.age = ?1 order by x.last_name desc | 
| Not | findByLastNameNot | … where x.last_name <> ?1 |
| NotIn | findByAgeNotIn(Collection\<Age\> ages) | … where x.age not in ?1 |
| True | findByActiveTrue | … where x.active = true |
| False | findByActiveFalse | … where x.active = false |
| IgnoreCase | findByFirstNameIgnoreCase | … where UPPER(x.first_name) = UPPER(?1) |
|  |  |  |


While using these predefined keywords is convenient, sometimes we may want to make a more complex query. 

To create custom queries, we annotate the method with the **@Query** annotation.

In the example, we аre using а **field-type annotation**:

```java
// The Student entity
@Entity                                                                     
@Table(name = "students")                                                   
public class Student {                                                      
    @Id                                                                     
    @GeneratedValue(strategy = GenerationType.IDENTITY)                      
    private Long id;                                                        
    
    private String firstName;                                               
    private String lastName;
    private Integer age;
    private Boolean isOnline;

}

// The repository for the Student entity
public interface StudentRepository extends JpaRepository<Student, Long>  {
    Student findByFirstName(String firstName);
    Student findByFirstNameAndLastName(String firstName, String lastName);
    List<Student> findByAgeBetween(Integer ageMin, Integer ageMax);
}
```

[/slide]