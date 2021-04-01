# Enumerations

[slide hideTitle]

# Enumerations

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/02-More-OOP-Concepts/EN/02.Java-OOP-Basics-More-OOP Concepts-20-21-22-23-Enumerations -,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Enumerations** represent **numeric values** of a predetermined set as **text**.

We can use them to pass in **arguments** to **methods** without making the code more confusing.

**For example:**

`enum Day {Mon, Tue, Wed, Thu, Fri, Sat, Sun}`

`GetDailySchedule(0)` =>  `GetDailySchedule(Day.Mon)`

By default, **enums** start at 0.

Every next value is incremented by 1.

## Customized Enumerations

We can **customize** `enum` values.

**Example:** Days of the week

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

**Example:** Coffee size

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

[slide hideTitle]
# Problem with Solution: Hotel Reservation

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/02-More-OOP-Concepts/EN/02.Java-OOP-Basics-More-OOP-Concepts-24-hotel-reservation-problem-and-solution-new-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Hotel Reservation" taskId="oop-basics-java-more-oop-concepts-lab-Hotel-Reservation" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Description
Create a class "**PriceCalculator**" that calculates the total cost of a holiday, given the **price per day**, **number of days**, the **season** and a **discount type**.

The **discount type** and **season** should be represented as **enums.**

Use the class in your `main()` method to read input and **print** the **cost** of the **entire holiday** to the console.

The price per day will be multiplied depending on the season:
- **1** during Autumn
- **2** during Spring
- **3** during Winter
- **4** during Summer

The discount is applied to the total price and is one of the following:
- 20% for VIP clients - **VIP**
- 10% for clients, visiting for a second time - **SecondVisit**
- 0% if there is no discount - **None**

## Input
You will receive all the **information** about the **reservation** on a **single line** in the following format:

"\<**pricePerDay**\> \<**numberOfDays**\> \<**season**\> \<**discountType**\>", where:

- The price per day will be a valid decimal number in the range [0.01 ... 1000.00]
- The number of days will be a valid integer in the range [1 ... 1000]
- The season will be one of: **Spring, Summer, Autumn, Winter**
- The discount will be one of: **VIP, SecondVisit, None**

## Output

On a **single line**, print the **total cost** of the **holiday**, rounded to 2 **digits** after the decimal separator.


## Example


| **Input** | **Output** |
| --- | --- |
| 50.25 5 Summer VIP | 804.00 |
| 40 10 Autumn SecondVisit | 360.00 |
| 120.20 2 Winter None | 721.20 |



[/task-description]
[code-upload allowedMemory="30" /]
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
