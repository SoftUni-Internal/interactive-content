# Static Keyword in Java

[slide]

# Static Keyword

We use **Static** Keyword, for memory management mainly.

Can apply with:
- Nested class
- Variables
- Methods
- Blocks

**Belongs to the class than an instance of the class.**

```java
static int count;
static void increaseCount() {
  count++;
}
```

## Static class

- A top level class is a class that is not a nested class
- A nested class is any class whose declaration occurs within the body of another class or interface
- Only nested classes can be static

```java
class TopClass {
  static class NestedStaticClass {

  }
}
```
[/slide]

[slide]

# Static Variable

**Static Variable** Can be used to refer to the common variable of all objects

Example:

- The company name of employees
- College name of students
  - Name of the college is common for all students

**Allocate memory only once in class area at the time of class loading**

Example: Counter incrementation

```java
class Counter {
  int count = 0;   static int staticCount = 0;
  public Counter() {
    count++;        // incrementing value
    staticCount++;  // incrementing value
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
Count: 1
Static Count: 1
Count: 1
Static Count: 2
Count: 1
Static Count: 3

[/slide]

[slide]

# Static Method

**Static Method belongs to the class rather than the object of a class.**

- Can be **invoked** without the need for creating an instance of a class
- Can **access** static data member and can **change** the value of it
- Can **not use non-static** data member or call **non-static method** directly
- **this** and **super** cannot be used in static context

Example: Calculate volume of a cube

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

[slide]

# Static Block

**Static block represent a set of statements, which will be executed by the JVM before execution of main method**

- Executing static block is at the time of class loading
- A class can take any number of static block but all blocks will be executed from top to bottom

Example: Static Block

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

[/slide]