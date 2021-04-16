# Structural Patterns

[slide hideTitle]

# Purposes

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/09-Design-Pattern/EN/Java-OOP-Advanced-Design-Patterns-22-23-structural-patterns-purposes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Structural patterns are concerned with how classes and objects are composed to form larger structures.

They rely on the concept of interfaces and inheritance, allowing multiple objects or classes to work together.

This patterns help the code design by identifying a simple way to effectuate the **relationship** between different entities.

[/slide]

[slide hideTitle]

# The Facade Pattern

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/09-Design-Pattern/EN/Java-OOP-Advanced-Design-Patterns-24-25-27-facade-pattern-demo-new-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **facade pattern** is used to hide the complexities of our system by providing a simplified **interface** to the client. 

Using this interface, our client can access the system.

We use the facade pattern when we have complex or difficult-to-understand architecture.

This way, the dependencies on a subsystem are minimized.

If we are using an outer library, a poorly designed one, or a "too complex tо grasp" one and we use only a few of its methods, we can follow this pattern to provide a simple interface for it.

[image assetsSrc="Design-Patterns(1).png" /]

Code example:

``` java
// We have our computer components
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
 
// Here is our facade
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

And here is our Main method:
``` java
class Main {
    public static void main(String[] args) {
        Computer computer = new Computer();
        computer.run();
    }
}
```

This example shows us how a client **interacts** with the facade (in our case - **Computer**).

[/slide]

[slide hideTitle]

# The Composite Pattern

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/09-Design-Pattern/EN/Java-OOP-Advanced-Design-Patterns-28-29-32-composite-pattern-demo-new-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The composite pattern allows us to **combine** different types of objects in **tree structures**

А composite pattern could describe a whole hierarchy of objects.

The **composite pattern** is an often used solution for most problems that require building a tree structure.

It consists of 3 main objects:

- **Base Component**

- **Leaf**

- **Composite**

[image assetsSrc="Design-Patterns(2).png" /]

To understand that better, let us see a simple code.

Here is a simple interface class that provides the functionality to show employee info:

``` java
public interface Employee {
    public void EmployeeInfo();
}
```

Let us create a class that will hold a **worker**'s data and use it as a **leaf**:

``` java
public class Worker implements Employee {
    private String name;
    private long employeeID;
    private String position;

    public Worker(long employeeID, String name, String position) {
        this.employeeID = employeeID;
        this.name = name;
        this.position = position;
    }

    @Override
    public void EmployeeInfo() {
        System.out.println(employeeID + " " + name);
    }
}
```

After that we will have **Managers**:

``` java
public class Manager implements Employee {
    private String name;
    private long employeeID;
    private String position;

    public Manager(long employeeID, String name, String position) {
        this.employeeID = employeeID;
        this.name = name;
        this.position = position;
    }

    @Override
    public void EmployeeInfo() {
        System.out.println(employeeID + " " + name);
    }
}
```

Let us make a Company **Director** class that will work as a **composite** layer:

``` java

import java.util.ArrayList;
import java.util.List;

public class Director implements Employee {
    private List<Employee> ListOfEmployees = new ArrayList<Employee>();

    @Override
    public void EmployeeInfo() {
        for(Employee employee:ListOfEmployees) {
            employee.EmployeeInfo();
        }
    }

    public void addEmployee(Employee employee) {
        ListOfEmployees.add(employee);
    }

    public void removeEmployee(Employee employee) {
        ListOfEmployees.remove(employee);
    }
}
```

And finally, let us test this structure:

``` java
public class Main {
    public static void main (String[] args) {
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

The **output** of this code will be:

```
1 Michael Peterson
2 Bob Warley
11 George Bond
12 James Clark
```
[/slide]
