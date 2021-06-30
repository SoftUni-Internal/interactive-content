[slide hideTitle]

# Query Creation

As mentioned above, one of the main functionalities of **Spring Data** repositories is the built-in query mechanism and writing JPQL and SQL by themselves.

The logic for it is built-in the naming of a given repository method.

A really interesting and effective way of building queries, in its foundations lays the **convention over configuration** design pattern.

Giving the method's name prefixed by convention like:

- **find...By**

- **read...By**

- **query...By**

- **NotContaining**

- and many more.

Points the framework what's intended and starts to build and execute a query based on it.

The respective arguments for these queries will get sanitized, this means that special characters that are recognized by **LIKE** as wildcards will get escaped and the query won't contain them. 

Further **Spring Data JPA** will do a property check and traverse nested properties.

[/slide]

[slide hideTitle]

# Query Lookup Strategies

| **Keyword**  | **Sample**  | **JPQL**  |
|---|---|---|
| And | findByLastnameAndFirstName    | … where x.last_name = ?1 and x.firstname = ?2 |
| Or  | findByLastnameOrFirstname  | … where x.lastname = ?1 or x.firstname = ?2 |
| Between  | findByStartDateBetween  | … where x.startDate between 1? and ?2  |
| LessThan  | findByAgeLessThan  | … where x.age < ?1  |
| Containing  | findByFirstnameContaining  | … where x.firstname like ?1 (parameter bound wrapped in %)  |
| In  | findByAgeIn(Collection<Age> ages)  | … where x.age in ?1  |
|  |  |  |


An example of creating such a query would be.

```java
public interface UserRepository extends Repository<User, Long> {

  List<User> findByEmailAddressAndLastname(String emailAddress, String lastname);  
  //This method will generate a query like => select u from User u where u.emailAddress = ?1 and u.lastname = ?2
}
```

There are many more query keywords, which you can find in the documentation of **Spring Data**.

Working and creating queries with method names is quite convenient but sometimes we may want to make a more complex query, that's when we can annotate the queries with the **@Query** annotation.

As interesting as query creation in **Spring Data** may sound, we will learn more about it in our next lesson for **Advanced Quering**.
[/slide]

[slide hideTitle]

# Query Methods

When your query is a simple one, you can use the derive mechanism to build your query just by following the naming conventions, while Spring-Data does the rest for us.

Querying with Spring-Data is simplified to the point where, just by following naming convetions of your **repository** classes, you can create queries.

In order to understand how **query methods** and see their limitations we shall go through their syntax and have a closer look.

```java
@Repository                                                 // 1.
public intetrface ShampooDao extends JpaRepository          // 2.
<Shampoo, Long>{                                            // 3.

    List<Student> findByTeacher(Teacher teacher);           // 4.
}
```

1. We should not forget to add the **@Repository annotation** in order to indicate that it's a repository interface so Spring-Framework can auto-detect it through class scaning.

2. We declare an interface, further extending a choosen Repository, which contains methods for the functionallity we desire.

3. The repository interfaces are **generic**, therefore we should define which **Entity** we want to work with and it's **identity colulmn / ID type**.

4. The query method, it's constructed of few parts
    1. **List<Shampoo>**, it's the return type of our query, in this case we want a collection of the entity **Shampoo**.
    2. **The name** is the thing that builds our query, it's composed of 2 parts: 
        - a pre-fix **find** - it declares what action we want to introduce to the query
        - the first separator word **By**.
        - and the third part, the criteria - **Brand**
    3. **(String brand)** is our parameter list, what we recieve as parameter will be set in the query. Spring-data automatically sanitizes and keeps us save from SQL injections.

To learn how to properly create our query methods we should have a look at all possible keywords used in them.

| Keyword | Sample | JPQL snippet |
| --- | --- | --- |
| Distinct | findDistinctByLastnameAndFirstname | select distinct …  where x.lastname = ?1 and x.firstname = ?2 |
| And | findByLastnameAndFirstname | … where x.lastname = ?1 and x.firstname = ?2 |
| Or | findByLastnameOrFirstname | … where x.lastname = ?1 or x.firstname = ?2 |
| Is, Equals | findByFirstname,findByFirstnameIs,findByFirstnameEquals | … where x.firstname = ?1 |
| Between | findByStartDateBetween | … where x.startDate between ?1 and ?2 |
| LessThan | findByAgeLessThan | … where x.age < ?1 |
| LessThanEqual | findByAgeLessThanEqual | … where x.age <= ?1 |
| GreaterThan | findByAgeGreaterThan | … where x.age > ?1 |
| GreaterThanEqual | findByAgeGreaterThanEqual | … where x.age >= ?1 |
| After | findByStartDateAfter | … where x.startDate > ?1 |
| Before | findByStartDateBefore | … where x.startDate < ?1 |
| IsNull, Null | findByAge(Is)Null | … where x.age is null |
| IsNotNull, NotNull | findByAge(Is)NotNull | … where x.age not null |
| Like | findByFirstnameLike | … where x.firstname like ?1 | 
| NotLike | findByFirstnameNotLike | … where x.firstname not like ?1 | 
| StartingWith | findByFirstnameStartingWith | … where x.firstname like ?1 (parameter bound with appended %) |
| EndingWith | findByFirstnameEndingWith | … where x.firstname like ?1 (parameter bound with prepended %) | 
| Containing | findByFirstnameContaining | … where x.firstname like ?1 (parameter bound wrapped in %) |
| OrderBy | findByAgeOrderByLastnameDesc | … where x.age = ?1 order by x.lastname des | 
| Not | findByLastnameNot | … where x.lastname <> ?1 |
| In | findByAgeIn(Collection\<Age\> ages) | … where x.age in ?1 |
| NotIn | findByAgeNotIn(Collection\<Age\> ages) | … where x.age not in ?1 |
| True | findByActiveTrue() | … where x.active = true |
| False | findByActiveFalse() | … where x.active = false |
| IgnoreCase | findByFirstnameIgnoreCase | … where UPPER(x.firstname) = UPPER(?1) |
|  |  |  |

```java
// Link to the documentation: https://docs.spring.io/spring-data/jpa/docs/current/reference/html/#jpa.query-methods.query-creation
```

Let's have one more example.

```java
@Table(name = "students")                                                   //We connect our class to the entity table in the DB.
@Entity                                                                     //Declare it as entity.
class Student {                                                             //Create our class student.
    @Id                                                                     //Set annotations for it's Id
    @GeneratedValue                                                         //Generated value annotation takes the responsibillity for the id.
    private Integer id;                                                     //Our id type.
    
    private String firstName;                                               //and our columns/properties.
    private String lastName;
    private Integer age;
    private Boolean isOnline;

    // standard getters and setters
}

interface StudentRepository extends JpaRepository<Student, Integer> {}{

Student findByFirstName(String firstName);                                   //.where firstName == firstName(param).

Student findByFirstNameAndLastName(String firstName, String lastName);       //.where firstName == firstame(param) AND lastName == lastName(param)

List<Student> findByAgeBetween(Integer ageMin, Integer ageMax);              //.where age between ageMin(param) AND ageMax(param).
}
```

[/slide]

[slide hideTitle]

# Problem with Solution: Select Shampoos by Size

## Problem Description

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/Java-ORM-And-Spring-Data/06-Spring-Advanced-Quering-Resources.zip) **for this task.**

You are given a simpler implementation of the Shampoo Company.

Now it's time to start writing some query methods to retrieve data.

Before you start, insert the data from the "shampoo-company-insert.sql" file!

Create a method that selects all shampoos with a given size, ordered by shampoo id.

Example:

| **Input**  | **Output** |
|---|---|
| **MEDIUM**  | Nature Moments Mediterranean Olive Oil & Aloe Vera MEDIUM 6.50lv.  |
|   | Volume & Fullness Lavender MEDIUM 5.50lv.  |
|   | Rose Shine & Hydration MEDIUM 6.50lv.  |
|   | Color Protection & Radiance MEDIUM 6.75lv.  |
|   | Heavenly Long Long-Hair MEDIUM 7.50lv.  |
|   | Sea Buckthorn Vital MEDIUM 6.50lv.  |
|   | Fresh it Up! MEDIUM 7.65lv.  |
|   | Nectar Nutrition MEDIUM 6.85lv.  |

## Solution

```java
@Repository
public interface ShampooRepository extends JpaRepository<Shampoo, Long> {
    List<Shampoo> getAllBySizeOrderById(Size sizeValue);
}
```

[/slide]