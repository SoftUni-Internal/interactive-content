[slide]

# Structural Patterns

The next category of patterns are **Structural patterns**.

They are concerned with how we compose and arrange our classes and objects to form larger structures.

Structural patterns rely on the concept of interfaces and inheritance, allowing multiple objects or classes to work together.

This kind of patterns make the design by identifying a simple way to realize **relationship** between different entities.

Knowing this, let's take a look at the first Structural pattern:

# Façade Pattern

So, basically the Façade pattern is used to hide complexities of our system and provides simplified **interface** to the client. With this interface our client can access the system.

We use the Façade pattern when we have a very complex or difficult to understand architecture.

This way the dependencies on a subsystem are minimized.

[image assetsSrc="Design-Patterns(1).png" /]

Let's take a look at this code example:

``` java
//We have our computer components
class CPU {
    public void processData() {
        // logic here...
    }
}
 
class Memory {
    public void load() { 
        // logic here...
    }
}
 
class HardDrive {
    public void readdata() {
        // logic here...
     }
}
 
// Here is our "Facade"
class Computer {
    private CPU cpu;
    private Memory ram;
    private HardDrive drive;
 
    public Computer() {
        this.cpu = new CPU();
        this.ram = new Memory();
        this.drive = new HardDrive();
    }
 
    public void run() {
        cpu.processData();
        ram.load();
        drive.readdata();
    }
}

```
And here is our Main method

``` java
class Main {
    public static void main(String[] args) {
        Computer computer = new Computer();
        computer.run();
    }
}
```

This example show us how a client can **interact** with the facade (in our case computer) to **much complex system**.



[/slide]

[slide]

# Composite Pattern

The composite pattern allows us to **combine** different types of objects in **tree structures**

It gives us the possibility to treat the **same objects**.

Also our composite pattern could describe a whole herarchy of objects.

It's interesting fact, that **composite pattern** is pretty used solution for the most problems that required building a tree structure.

Composite pattern consist of 3 main objects:

- Base Component

- Leaf

- Composite 

[image assetsSrc="Design-Patterns(2).png" /]

To understand better, let's see this simple code:

First, we create a simple interface class that will provide us the functionality for showing employees info:

``` java
public interface Employee
{
    public void EmployeeInfo();
}
```

Then, let's create our class that will hold Workers data and using it as a **leaf**

``` java
public class Worker implements Employee
{
    private String name;
    private long employeeID;
    private String position;

    public Worker(long employeeID, String name, String position)
    {
        this.employeeID = employeeID;
        this.name = name;
        this.position = position;
    }

    @Override
    public void EmployeeInfo()
    {
        System.out.println(employeeID + " " +name);
    }
}
```

Then, in our real life structure, we will have **Managers**. Let's create them!

``` java
public class Manager implements Employee
{
    private String name;
    private long employeeID;
    private String position;

    public Manager(long employeeID, String name, String position)
    {
        this.employeeID = employeeID;
        this.name = name;
        this.position = position;
    }

    @Override
    public void EmployeeInfo()
    {
        System.out.println(employeeID + " " +name);
    }
}
```

Let's make a Company Director class that will work as a **composite** layer:

``` java

import java.util.ArrayList;
import java.util.List;

public class Director implements Employee
{
    private List<Employee> ListOfEmployees = new ArrayList<Employee>();

    @Override
    public void EmployeeInfo()
    {
        for(Employee employee:ListOfEmployees )
        {
            employee.EmployeeInfo();
        }
    }

    public void addEmployee(Employee employee)
    {
        ListOfEmployees.add(employee);
    }

    public void removeEmployee(Employee employee)
    {
        ListOfEmployees.remove(employee);
    }
}
```

And finally let's test our company structure:

``` java
public class Main {
    public static void main (String[] args)
    {
        Worker firstWorker = new Worker(1, "Michael Peterson", "Marketing");
        Worker secondWorker  = new Worker(2, "Bob Warley", "Marketing");
        Director engDirectory = new Director();
        engDirectory.addEmployee(firstWorker);
        engDirectory.addEmployee(secondWorker);

        Manager firstManager = new Manager(11, "George Bond", "SEO Manager");
        Manager secondManager = new Manager(12, "James Clark", "Marketing Manager");

        Director accDirectory = new Director();
        accDirectory.addEmployee(firstManager);
        accDirectory.addEmployee(secondManager);

        Director directory = new Director();
        directory.addEmployee(engDirectory);
        directory.addEmployee(accDirectory);
        directory.EmployeeInfo();
    }
}
```

Now, if we test our program the **output** will be:

```
1 Michael Peterson
2 Bob Warley
11 George Bond
12 James Clark
```
[/slide]
