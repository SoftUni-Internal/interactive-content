# Spring Data Repositories

[slide hideTitle]

# Spring Data Repositories

The **Spring Data Repository** is a tool that delivers us an abstraction of the **repository design pattern**.

Its purpose is to significantly reduce the amount of boilerplate code required to implement data access layers.

One of the main benefits of repositories is that they are capable of generating JPQL queries automatically.

Every repository has to extend the **Repository** interface or an interface, which extends the **Repository** interface. It is generic interface, therefore we always have to point which entity we want to bind the repository to.

```java
public interface CrudRepository<T, ID extends Serializable> extends Repository<T, ID> {
  <S extends T> S save(S entity);
  T findOne(ID primaryKey);
  Iterable<T> findAll();
  Long count();
  void delete(T entity);
  boolean exists(ID primaryKey);
}

public interface PagingAndSortingRepository<T, ID extends Serializable> extends CrudRepository<T, ID> {
  Iterable<T> findAll(Sort sort);
  Page<T> findAll(Pageable pageable);
}
```

[/slide]
