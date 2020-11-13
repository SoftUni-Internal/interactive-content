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



[/slide]