# Homework

[slide hideTitle]
# Problem: Vehicles
[code-task title="Problem: Vehicles" taskId="ff7e27e3-515a-4008-994f-6338dce65287" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that models 2 vehicles (**Car** and **Truck**) and will be able to simulate **driving** and **refueling** them in the summer. 

**Car** and **truck** both have **fuel quantity**, **fuel consumption in liters per km** and can be **driven given distance** and **refueled with given liters**. 

But in the **summer** both vehicles use air conditioner and their **fuel consumption** per km is **increased by 0.9** liters for the **car** and with **1.6** liters **for the truck**. 

Also the **truck** has a tiny hole in his tank and when it gets **refueled** it gets only **95%** of given **fuel**. 

The **car** has no problems when refueling and adds **all given fuel to its tank**. 

If vehicle **cannot** travel given distance its fuel does not change.
## Input
- On the **first line** - information about the car in format "**Car {fuel quantity} {liters per km}**"
- On the **second line** – info about the truck in format "**Truck {fuel quantity} {liters per km}**"
- On third line - **number of commands N** that will be given on the next **N** lines
- On the next **N** lines – commands in format:
    - **Drive Car {distance}**
    - **Drive Truck {distance}**
    - **Refuel Car {liters}**
    - **Refuel Truck {liters}**
## Output
After each **Drive command** print whether the Car/Truck was able to travel given distance in format if it’s successful. 

**Print the distance with two digits after the decimal separator except trailing zeros**. 

Use the **DecimalFormat** class: "**Car/Truck travelled {distance} km**"

Or if it is not: "**Car/Truck needs refueling**"

Finally print the **remaining fuel** for both car and truck rounded **2 digits after floating point** in format:

"**Car: {liters}**

**Truck: {liters}**"


## Examples
| **Input** | **Output** |
| --- | --- |
| Car 15 0.3 | Car travelled 9 km |
| Truck 100 0.9 | Car needs refueling |
| 4 | Truck travelled 10 km |
| Drive Car 9 | Car: 54.20 |
| Drive Car 30 | Truck: 75.00 |
| Refuel Car 50 |  |
| Drive Truck 10 |  |

| **Input** | **Output** |
| --- | --- |
| Car 30.4 0.4 | Car needs refueling |
| Truck 99.34 0.9 | Car travelled 13.5 km |
| 5 | Truck needs refueling |
| Drive Car 500 | Car: 113.05 |
| Drive Car 13.5 | Truck: 109.13 |
| Refuel Truck 10.300 |  |
| Drive Truck 56.2 |  |
| Refuel Car 100.2 |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Car 15 0.3
Truck 100 0.9
4
Drive Car 9
Drive Car 30
Refuel Car 50
Drive Truck 10
[/input]
[output]
Car travelled 9 km
Car needs refueling
Truck travelled 10 km
Car: 54.20
Truck: 75.00
[/output]
[/test]
[test open]
[input]
Car 30.4 0.4
Truck 99.34 0.9
5
Drive Car 500
Drive Car 13.5
Refuel Truck 10.300
Drive Truck 56.2
Refuel Car 100.2
[/input]
[output]
Car needs refueling
Car travelled 13.5 km
Truck needs refueling
Car: 113.05
Truck: 109.13
[/output]
[/test]
[test]
[input]
Car 10000 0.3
Truck 100 0.9
10
Drive Car 1
Drive Car 1.2
Drive Car 1.244
Drive Car 123.329
Drive Car 300.321
Drive Car 101.324
Drive Car 0.002
Drive Car 4000.943
Drive Car 0
Drive Car 0.0
[/input]
[output]
Car travelled 1 km
Car travelled 1.2 km
Car travelled 1.24 km
Car travelled 123.33 km
Car travelled 300.32 km
Car travelled 101.32 km
Car travelled 0 km
Car travelled 4000.94 km
Car travelled 0 km
Car travelled 0 km
Car: 4564.76
Truck: 100.00
[/output]
[/test]
[test]
[input]
Car 15 1.1
Truck 100 0.9
4
Drive Car 100
Drive Car 15.0
Drive Car 100.2343
Drive Car 200
[/input]
[output]
Car needs refueling
Car needs refueling
Car needs refueling
Car needs refueling
Car: 15.00
Truck: 100.00
[/output]
[/test]
[test]
[input]
Car 15 0.3
Truck 100 0.9
5
Refuel Car 10
Refuel Car 100.1
Refuel Car 10.3432
Refuel Car 99.9939
Refuel Car 18
[/input]
[output]
Car: 253.44
Truck: 100.00
[/output]
[/test]
[test]
[input]
Car 100 0.34
Truck 100090 0.9
8
Drive Truck 1
Drive Truck 2.4
Drive Truck 3.765432
Drive Truck 1239
Drive Truck 999.32
Drive Truck 0
Drive Truck 99.33
Drive Truck 0.0
[/input]
[output]
Truck travelled 1 km
Truck travelled 2.4 km
Truck travelled 3.77 km
Truck travelled 1239 km
Truck travelled 999.32 km
Truck travelled 0 km
Truck travelled 99.33 km
Truck travelled 0 km
Car: 100.00
Truck: 94227.96
[/output]
[/test]
[test]
[input]
Car 15 0.3
Truck 10.29 0.9
4
Drive Truck 500
Drive Truck 200.5
Drive Truck 300.31345
Drive Truck 100.10
[/input]
[output]
Truck needs refueling
Truck needs refueling
Truck needs refueling
Truck needs refueling
Car: 15.00
Truck: 10.29
[/output]
[/test]
[test]
[input]
Car 15 0.3
Truck 100 0.9
6
Refuel Truck 1
Refuel Truck 1.0
Refuel Truck 1.23432
Refuel Truck 234332.32138
Refuel Truck 94234.324
Refuel Truck 3213.434
[/input]
[output]
Car: 15.00
Truck: 315294.15
[/output]
[/test]
[test]
[input]
Car 15 0.03
Truck 100 0.9
10
Drive Car 14
Drive Car 15
Refuel Car 100
Drive Car 500
Drive Car 99.1
Drive Car 1000.32
Drive Car 5.01
Refuel Car 1.99
Refuel Truck 0.01
Drive Car 1
[/input]
[output]
Car travelled 14 km
Car needs refueling
Car needs refueling
Car travelled 99.1 km
Car needs refueling
Car travelled 5.01 km
Car travelled 1 km
Car: 6.22
Truck: 100.01
[/output]
[/test]
[test]
[input]
Car 15 0.3
Truck 100 0.09
10
Drive Truck 100
Refuel Truck 100
Drive Truck 5000
Drive Truck 60000.325
Refuel Truck 50
Drive Truck 40.2
Drive Truck 48.234
Refuel Truck 10.965
Drive Truck 1.009
Drive Truck 1000000
[/input]
[output]
Truck needs refueling
Truck needs refueling
Truck needs refueling
Truck travelled 40.2 km
Truck travelled 48.23 km
Truck travelled 1.01 km
Truck needs refueling
Car: 15.00
Truck: 101.76
[/output]
[/test]
[test]
[input]
Car 15.1 0.3
Truck 100.2 0.9
21
Drive Car 100
Drive Truck 1000
Drive Car 1
Drive Car 2.23
Drive Car 10000
Drive Truck 1000.32
Refuel Car 1000
Refuel Car 10.29
Refuel Truck 100
Refuel Truck 8.9
Drive Car 100
Drive Car 15.2
Drive Truck 109.9
Drive Truck 10.99
Refuel Car 12.12
Refuel Car 12.12
Drive Car 0
Drive Car 0.000
Drive Truck 0
Drive Truck 0.00
Drive Car 700.2
[/input]
[output]
Car needs refueling
Truck needs refueling
Car travelled 1 km
Car travelled 2.23 km
Car needs refueling
Truck needs refueling
Car travelled 100 km
Car travelled 15.2 km
Truck needs refueling
Truck travelled 10.99 km
Car travelled 0 km
Car travelled 0 km
Truck travelled 0 km
Truck travelled 0 km
Car travelled 700.2 km
Car: 67.27
Truck: 176.18
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide]
# Homework Results
[tasks-results/]

[/slide]