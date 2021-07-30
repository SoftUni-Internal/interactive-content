[slide hideTitle]

# Table Per Class: Joined

To avoid the disadvantages of the **TABLE_PER_CLASS** strategy, we are using **JOINED** strategy.

This strategy **maps** child and parent class entities in a **separate** database table.

The table is defined for each class in the inheritance hierarchy storing the class only **local attributes.**

Each table must store the object's **primary key.**

**Vehicle class:**

``` java
@Entity
@Table(name = "vehicles") // Table name
@Inheritance(strategy = InheritanceType.JOINED) // Strategy Type
public abstract class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE) // A table generator is used for each table
    private int id;

    @Basic
    private String type;

    protected Vehicle() {}
    protected Vehicle(String type) {
        this.type = type;
    }
}
```

**TransportationVehicle class:**

``` java
@MappedSuperclass // MappedSuperclass Annotation
public abstract class TransportationVehicle extends Vehicle {
    private int loadCapacity;
    public TransportationVehicle(){ }
    public TransportationVehicle(String type,int loadCapacity) {
        super(type);
        this.loadCapacity = loadCapacity;

    }
    
    // Getters and setters  
}
```

**PassengerVehicle class:**

```java
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

**Truck class:**

``` java
@Entity
public class Truck extends TransportationVehicle {
    private final static String type = "TRUCK";
    private int noOfContainers;
    public Truck(String type, int noOfContainers,int loadCapacity) {
        super(type,loadCapacity);
        this.noOfContainers = noOfContainers;
    }
    // Getters and setters    
}
```

**Car class:**

``` java
@Entity
public class Car extends PassengerVehicle {
    private final static String type = "CAR";

    public Car(){ }

    public Car(String type, int noOfpassengers){
        super(type, noOfpassengers);
    }
    // Getters and setters
}
```

Let us see the result after persist:

[image assetsSrc="Hibernate-Code-First.png" /]

- **Advantages:**

  * no repeating columns in the database tables

  * no **NULL** values

  * reduced changes in the schema on superclass changes

  * foreign keys involved

- **Disadvantages:**

  * since the amount of joins in queries grows after each new class in the hierarchy, it can harm the performance of reading entities

[/slide]