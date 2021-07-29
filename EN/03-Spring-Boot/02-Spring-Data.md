# Spring Data

[slide hideTitle]

# Overall Architecture

**Spring Data** is a project that creates a **model** to **access data** with **Spring**.

This **model** is **independent** of the **data storage**.

It works with **Relational** and **Non-Relational** databases.

The **Spring Data** project splits into many **smaller projects**, each about a **specific database**.

The following image illustrates the **architecture** of **Spring Data**:

[image assetsSrc="Java-Spring-Boot-9.png" /]

[/slide]

[slide hideTitle]

# Entities

An **Entity** is a **persistence domain object**.

The `@Entity` **annotation** means that a **class** corresponds to a **database table**.

Every **object**, coming from this **clas**, is an item of the **database table**.

```java
@Entity
@Table(name = "employees")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;
    // Getter and Setter functions
}
```

[/slide]

[slide hideTitle]

# Repositories

Spring Data **Repositories** provide a **simplified data access layer** while keeping all the **functionality** intact.

The `@Repository` **annotation** marks an **interface** that servers as a **contact** for **data access**.

The following example shows how to create a **Repository**:

```java
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
```

[/slide]

[slide hideTitle]

# Services

The **Service Layer** is where all the **business logic** is written.

It acts as a **connection** point between the **Controllers** and the **Repositories**.

```java
@Service
public class EmployeeServiceImpl implements EmployeeService {
    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeServiceImpl(EmployeeRepository employeeRepository){
	this.employeeRepository = employeeRepository;
    }

    @Override
    public void fireEmployee(EmployeeModel employeeModel) { 
        // TODO: Implement the method 
    }
}
```

This example shows how to create a **Service class**.

It **implements** an **interface** and holds the **business logic**.

[/slide]