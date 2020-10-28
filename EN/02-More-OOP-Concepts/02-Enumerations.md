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

[slide]

# Problem: Hotel Reservation 

Create a class PriceCalculator that calculates the total price of a holiday, 

by given **price per day**, **number of days**, **the season** and a **discount type**

**The discount type and season should be enums**

- The price multipliers will be:
  - 1x for Autumn
  - 2x for Spring, etc.

- The discount types will be:
  - None – 0%
  - SecondVisit – 10%
  - VIP – 20%

[/slide]

[slide]

# Solution: Hotel Reservation 

```java
public enum Season {
  Spring(2), Summer(4), Autumn(1), Winter(3);
  private int value;
  Season(int value) {
    this.value = value;
  }
  public int getValue() {
    return this.value;
  }
}

public enum Discount {
  None(0), SecondVisit(10), VIP(20);
  private int value;
  Discount(int value) {
    this.value = value;
  }
  public int getValue() {
    return this.value;
  }
}

public class PriceCalculator {
  public static double CalculatePrice(double pricePerDay,
		int numberOfDays, Season season, Discount discount) {
    int multiplier = season.getValue();
    double discountMultiplier = discount.getValue() / 100.0;
    double priceBeforeDiscount = numberOfDays * pricePerDay * multiplier;
    double discountedAmount = priceBeforeDiscount * discountMultiplier;
    return priceBeforeDiscount - discountedAmount;
  }
}
```

[/slide]