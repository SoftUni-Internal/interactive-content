[slide hideTitle]

# Spring Data Repositories

The **spring repository** is a powerful tool in **Spring data's** arsenal, delivering us abstraction of the **repository design pattern**.

Its purpose is to significantly reduce the amount of boilerplate code required to implement data access layers.

One of the main benefits of repositories is that by following conventions repositories are capable of generating JPQL and SQL automatically.

Every repository in **Spring Data** has to extend the Repository interface, which is a generic interface, therefore you always have to point which entity you want to use the repository for.

Many repository interfaces are extending the original one.

For example, the **CrudRepository** extends the **Repository** interface by giving you more advanced Crud operations.

The repositories are highly customizable.

[/slide]

[slide hideTitle]

# Built-in CRUD Operations

Let's have a look: 

```java                                                 
public interface CrudRepository<T, ID extends Serializable>   //Crud Repository
    extends Repository<T, ID> {
    <S extends T> S save(S entity);
    T findOne(ID primaryKey);
    Iterable<T> findAll();
    Long count();
    void delete(T entity);
    boolean exists(ID primaryKey);
    // … more functionality omitted.

public interface PagingAndSortingRepository<T, ID extends Serializable>  //Paging repository
  extends CrudRepository<T, ID> {

  Iterable<T> findAll(Sort sort);

  Page<T> findAll(Pageable pageable);
}
}
```

You can search for many other already implemented repository interfaces on the internet, depending on your needs.
[/slide]