# Spring Data Repositories

[slide hideTitle]

# Spring Data Repositories

[video src="https://videos.softuni.org/hls/Java/Java-ORM-and-Spring-Data/05.Spring-Data-Intro/05.Spring-Data-Intro-23-24-25-Spring-Data-Repositories-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **Spring Data Repository** is a tool that provides us with an abstraction of the **repository design pattern**.

It aims to significantly reduce the amount of boilerplate code required to implement data access layers.

One of the main benefits of repositories is their capability of generating queries automatically.

Every repository extends the **Repository** interface. 

It is a generic interface, meaning we must designate the entity to bind to the repository:

```java
public interface CrudRepository<T, ID extends Serializable> extends Repository<T, ID> {
    <S extends T> S save(S entity);
    T findOne(ID primaryKey);
    Iterable<T> findAll();
    Long count();
    void delete(T entity);
    boolean exists(ID primaryKey);
}

public interface PagingAndSortingRepository<T, ID extends Serializable> 
    extends CrudRepository<T, ID> {
    Iterable<T> findAll(Sort sort);
    Page<T> findAll(Pageable pageable);
}
```

[/slide]
