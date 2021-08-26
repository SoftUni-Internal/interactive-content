[slide hideTitle]

# Table Per Class: Single Table

[video src="https://videos.softuni.org/hls/Java/Java-ORM-and-Spring-Data/04.Hibernate-Code-First/04-Hibernate-Code-First-18-table-per-class-single-table-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The single table inheritance is the default JPA strategy.

The single table strategy is the simplest and usually best-performing strategy. 

All of the properties from the inheritance hierarchy are mapped and all data goes to **one table**.

It is used to store all of the instances of the **entire inheritance hierarchy.**

`@Inheritance(strategy=InheritanceType.SINGLE_TABLE)` annotation is used with parent class. 

A discriminator column is used to determine to which class the particular row belongs.

Let us see the following example:

**Vehicle class:**

``` java
@Entity
@Table(name = "vehicles")
@Inheritance(strategy=InheritanceType.SINGLE_TABLE) // Inheritance type
@DiscriminatorColumn(name = "type")
public abstract class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE) // A table generator is used for each table
    private int id;
    @Basic
    @Column(insertable = false,updatable = false)
    private String type;
    protected Vehicle() {}
    protected Vehicle(String type) {
        this.type = type;
    } 
}
```

**Transportation Vehicle class:**

``` java
@MappedSuperclass
public abstract class TransportationVehicle extends Vehicle {
    private int loadCapacity;
     public TransportationVehicle() { }
     public TransportationVehicle(String type, int loadCapacity) {
        super(type);
        this.loadCapacity = loadCapacity;
    }
    // Getters and setters  
}
```

**PassengerVehicle class:**

``` java
@MappedSuperclass
public abstract class PassengerVehicle extends Vehicle {
    private int noOfpassengers;

    public PassengerVehicle() { }

    public PassengerVehicle(String type, int noOfpassengers) {
    super(type);
    this.noOfpassengers = noOfpassengers;
    }
    
    // Getters and setters
}
```

**Car class:**

``` java
@Entity
@DiscriminatorValue(value = "car") 
public class Car extends PassengerVehicle {
    private final static String type = "CAR";
    public Car() { }
    public Car(){
        super(type);
    }
}
```

**Truck class:**

``` java
@Entity
@DiscriminatorValue(value = "truck")
public class Truck extends TransportationVehicle {
    private final static String type = "TRUCK";
    private int noOfContainers;

    // Constructors
    // Getters and setters    
}
```

**Results after persist:**

[image assetsSrc="Hibernate-Code-First(1).png" /]

[/slide]