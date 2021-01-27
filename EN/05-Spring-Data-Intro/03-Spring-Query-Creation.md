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

# Query lookup strategies.

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