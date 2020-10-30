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
[code-task title="Problem: Hotel Reservation" taskId="a9b9ef80-20cc-4bbd-88dc-8198ce84b988" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Create a class `PriceCalculator` that calculates the total price of a holiday, given the **price per day**, **number of days**, the **season** and a **discount type**. The **discount type** and **season** should be **enums.**

Use the class in your `main()` method to read input and **print** on the console the **price** of the **whole holiday**.

The price per day will be multiplied depending on the season by:
- 1 during Autumn
- 2 during Spring
- 3 during Winter
- 4 during Summer

The discount is applied to the total price and is one of the following:
- 20% for VIP clients - VIP
- 10% for clients, visiting for a second time - SecondVisit
- 0% if there is no discount - None

## Input
On a **single line** you will receive all the **information** about the **reservation** in the format:

“`<pricePerDay>` `<numberOfDays>` `<season>` `<discountType>`”, where:

- The price per day will be a valid decimal in the range `[0.01…1000.00]`
- The number of days will be a valid integer in range `[1…1000]`
- The season will be one of: **Spring, Summer, Autumn, Winter**
- The discount will be one of: **VIP, SecondVisit, None**

## Output
On a **single line**, print the **total price** of the **holiday**, rounded to 2** digits** after the decimal separator.


## Examples
| **Input** | **Output** |
| --- | --- |
| 50.25 5 Summer VIP | 804.00 |
|  |  |

| **Input** | **Output** |
| --- | --- |
| 40 10 Autumn SecondVisit | 360.00 |
|  |  |

| **Input** | **Output** |
| --- | --- |
| 120.20 2 Winter None | 721.20 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
50.25 5 Summer VIP
[/input]
[output]
804.00
[/output]
[/test]
[test open]
[input]
40 10 Autumn SecondVisit
[/input]
[output]
360.00
[/output]
[/test]
[test open]
[input]
120.20 2 Winter None
[/input]
[output]
721.20
[/output]
[/test]
[test]
[input]
120.20 2 Winter None
[/input]
[output]
721.20
[/output]
[/test]
[test]
[input]
0.01 1000 Summer VIP
[/input]
[output]
32.00
[/output]
[/test]
[test]
[input]
1000 1000 Summer None
[/input]
[output]
4000000.00
[/output]
[/test]
[test]
[input]
1000 50 Winter SecondVisit
[/input]
[output]
135000.00
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]

# Solution: Hotel Reservation 

Create enumarations for **Seasons** and **Discounts**. Implement property with getter and setter:

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
```
```java
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
```
Then create class **PriceCalculator** and implement method `CalculatePrice()`:

```java
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
Afterwards go in `main()` and implement new **PriceCalculator**.

Call `CalculatePrice()` with input data.

[/slide]