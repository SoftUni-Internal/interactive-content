# Query Creation and Query Structure

[slide hideTitle]

# Query Creation

One of the main functionalities of **Spring Data** repositories is the built-in query builder mechanism.

The logic for it is built in the naming of a given repository method.

In its foundations lays the **convention over configuration** design pattern.

Giving the method's name prefixed by convention like:

- **find...By**

- **read...By**

- **query...By**

It points the framework to what is intended and starts to build and execute a query based on it.

The respective arguments for these queries will get sanitized, this means that special characters are recognized by the **LIKE** keyword will get escaped and the query won't contain them.

Further **Spring Data JPA** will do a property check and traverse nested properties.

[/slide]

[slide hideTitle]
# Query Methods

When creating simple queries, we can use the derive mechanism to build the query by following the naming conventions, while **Spring Data** does the rest for us.

In order to understand how **query methods** and see their limitations we shall go through their syntax and have a closer look.

```java
@Repository                                                  
public interface StudentRepository extends JpaRepository<Student, Long> {                                            

    List<Student> findByTeacher(Teacher teacher);            
}
```

1. We should not forget to add the **@Repository annotation** in order to indicate that it is a repository in the **Spring context** so that the **application** can auto detect it.

2. We declare an interface, further extending a chosen Repository, which contain methods for the functionality we desire.

3. The repository interfaces are **generic**, therefore we should define which **Entity** we want to work with
and its **the type of the identity column in the entity**.

4. The query method is constructed of a couple of parts
    1. **List<Student>** - the return type of the query
    2. **The name** - the name of the query. Spring gives us  
        - the **find** prefix - declares what action we want to introduce to the query
        - **By** - the separator
        - **Teacher** - the criteria
    3. **(Teacher teacher)** the required parameter/s
    
    **Spring Data** automatically sanitizes and keeps the application safe from SQL injections.

To learn how to properly create our query methods we should take a look at all possible keywords used in them.

| Keyword | Sample | SQL equivalent |
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


Creating and working with queries using method names is convenient but sometimes we may want to make a more complex query. To create custom queries, we annotate the method with the **@Query** annotation.

In the example we're using "field-type annotation".

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

[slide hideTitle]

# Problem with Solution: Select Shampoos by Size

## Problem Description

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/Java-ORM-And-Spring-Data/06-Spring-Advanced-Quering-Resources.zip) **for this task.**

You are given an implementation of the Shampoo Company.

Now it is time to start writing some query methods to retrieve the needed data.

Before you start, insert the data from the "shampoo-company-insert.sql" file!

Create a method that selects all shampoos with a given size, ordered by the shampoo id.

Example:

| **Input**  | **Output** |
|---|---|
| **MEDIUM**  | Nature Moments Mediterranean Olive Oil & Aloe Vera MEDIUM 6.50 euro.  |
|   | Volume & Fullness Lavender MEDIUM 5.50 euro.  |
|   | Rose Shine & Hydration MEDIUM 6.50 euro.  |
|   | Color Protection & Radiance MEDIUM 6.75 euro.  |
|   | Heavenly Long Long-Hair MEDIUM 7.50 euro.  |
|   | Sea Buckthorn Vital MEDIUM 6.50 euro.  |
|   | Fresh it Up! MEDIUM 7.65 euro.  |
|   | Nectar Nutrition MEDIUM 6.85 euro.  |

## Solution

```java
@Repository
public interface ShampooRepository extends JpaRepository<Shampoo, Long> {
    List<Shampoo> findAllBySizeOrderById(String sizeValue);
}
```

[/slide]