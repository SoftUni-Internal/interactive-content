[slide hideTitle]

# Table Per Class Strategy Overview

[video src="https://videos.softuni.org/hls/Java/Java-ORM-and-Spring-Data/04.Hibernate-Code-First/04-Hibernate-Code-First-6-7-8-9-10-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In the Table per class strategy, the subclasses and the superclass are mapped to different individual tables.

The annotation `@Inheritance` is used on the main entity class with strategy = `InheritanceType.TABLE_PER_CLASS`.

It allows inheritance to be used in the object model when it doesn't exist in the data model.

We do not need to use the `@DiscriminatorValue` and `@DiscriminatorColumn` annotations in this strategy.

Let's take a look at the following example:

- **Vehicle abstract class:**

``` java
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS) // Strategy Type
public abstract class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE) // A table generation is used for each table
    private int id;
    @Basic
    private String type;
    protected Vehicle() {}
    protected Vehicle(String type) {
        this.type = type;
    }
}
```

- **Bike class:**

``` java
@Entity
@Table(name = "bikes") // table name
public class Bike extends Vehicle {
    private final static String type = "BIKE";
    public Bike(){
        super(type);
    }
}
```

- **Car class:**

``` java
@Entity
@Table(name = "cars") // table name
public class Car extends Vehicle {
    private final static String type = "CAR";
    public Car(){
        super(type);
    }
}
```

- **Main class:**

``` java
/// ...
Vehicle bike = new Bike();
Vehicle car = new Car();

em.persist(bike);
em.persist(car);
```


As a result, we have two tables - "bikes" and "cars" with **id** and **type** columns.


- **Advantages:**

  * Since we have an individual table per entity, we can define specific constraints at the database layer

  * No **NULL** values

  * Good **performance** when querying single entities

- **Disadvantages:**

  * Since, we have to use **UNION** statements to gather our data, we cannot use polymorphic queries efficiently

  * The same information is storing in different tables

  * Changes in superclass affect changes in all subclass tables

  * No **foreign keys** involved

[/slide]

