# Static Keyword in Java

[slide hideTitle]

# Static Keyword

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/02-More-OOP-Concepts/EN/02.Java-OOP-Basics-More-OOP Concepts-28-29-Static-Keyword-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We mainly use the `static` keyword for memory arrangement.

It can be applied to:
- Nested classes
- Variables
- Methods
- Blocks

Static entities **belong to the class** itself, rather than an instance of it.

```java
static int count;
static void increaseCount() {
  count++;
}
```
[/slide]

[slide hideTitle]

# Static Classes

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/02-More-OOP-Concepts/EN/02.Java-OOP-Basics-More-OOP Concepts-30-Static-class-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- A **top-level class** is a class that is **not nested**
- A **nested class** is any class whose declaration occurs **within the body** of another class or interface
- Only **nested classes** can be **static**

```java
class TopClass {
  static class NestedStaticClass {
     \\ ...
  }
}
```
[/slide]

[slide hideTitle]

# Static Variables

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/02-More-OOP-Concepts/EN/02.Java-OOP-Basics-More-OOP Concepts-31-32-33-Static-variable-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Static variables** can be used to store **shared data** between **all class instances.**

**Example:**

- When we have many employees in the same company, an Employee class could have a static field for storing the company name as it is the same for all employees

**Memory** for static variables is allocated **only once** - in the class area, at the time of class **loading** (during runtime).

**Example:** Counter incrementation

```java
class Counter {
  int count = 0;   static int staticCount = 0;
  public Counter() {
    count++;        
    staticCount++; 
  }
  public void printCounters() {
    System.out.printf("Count: %d%n", count);
    System.out.printf("Static Count: %d%n", staticCount);
  }
  
  
// Inside the Main Class

public static void main(String[] args) {
  Counter c1 = new Counter();
  c1.printCounters();                // Count: 1
  Counter c2 = new Counter();        // Static Count: 1
  c2.printCounters();                // Count: 1
  Counter c3 = new Counter();        // Static Count: 2
  c3.printCounters();                // Count: 1
  int counter = Counter.staticCount; // Static Count: 3  
}
```

[/slide]

[slide hideTitle]

# Static Methods

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/02-More-OOP-Concepts/EN/02.Java-OOP-Basics-More-OOP Concepts-34-35-Static-Method-and-Example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Static methods** belong to the **class** rather than the **object of a class**.

- Can be **invoked** without the need for creating an instance of a class
- Can **access** static data member and can **change** the value of it
- **Cannot use a non-static** data member or call a **non-static method** directly
- `this` and `super` cannot be used in static context

**Example:** Calculating the volume of a cube

```java
class Calculate {
  static int cube(int x) { return x * x * x; }
  public static void main(String args[]) {
    int result = Calculate.cube(5);
    System.out.println(result);         // 125
    System.out.println(Math.pow(2, 3)); // 8.0
  }
}
```

[/slide]

[slide hideTitle]

# Static Blocks

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/02-More-OOP-Concepts/EN/02.Java-OOP-Basics-More-OOP Concepts-36-37-Statick-block-and-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

 A **static block** represents a set of statements, which will be executed by the JVM before the execution of the main method.

- Static blocks are executed at the time of class loading
- A class can take any number of static blocks
   - they will be executed from top to bottom

**Example:**

```java
class Main {
  static int n;
  public static void main(String[] args) {
    System.out.println("From main");
    System.out.println(n);
  }
  static {
    System.out.println("From static block");
    n = 10;
  }
}

// Output:
//From static block
//From main
//10
```

Static blocks are also known as **static clauses**.

[/slide]
