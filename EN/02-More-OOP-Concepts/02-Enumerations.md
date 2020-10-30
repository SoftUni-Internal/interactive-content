[slide]

# Enumerations

**Enumeration** rsepresent a numeric value from a fixed set as a text

We can use them to pass **arguments** to **methods** without making code confusing

- For Example: 

  `enum Day {Mon, Tue, Wed, Thu, Fri, Sat, Sun}`

  `GetDailySchedule(0)` =>  `GetDailySchedule(Day.Mon)`

By default **enums** start at 0

Every next value is incremented by 1

## Customized enumetations

**We can customize enum values**

Example: Days of week

```java
enum Day { 
  Mon(1),Tue(2),Wed(3),Thu(4),Fri(5),Sat(6),Sun(7);

  private int value;

  Day(int value) {
    this.value = value;
  }
}

System.out.println(Day.Sat); // Sat
```
Example: Coffee size

```java
enum CoffeeSize { 
  Small(100), Normal(150), Double(300);
  private int size;
  CoffeeSize(int size) {
    this.size = size;
  }
  public int getValue() { return this.size; }
}

System.out.println(CoffeeSize.Small.getValue()); // 100
```
[/slide]

