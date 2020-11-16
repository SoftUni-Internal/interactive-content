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

[slide hideTitle]
# Problem: Vehicles Extension
[code-task title="Problem: Vehicles Extension" taskId="a58e79c4-1d68-4cc1-8fe9-bba71ecb0bad" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Use your solution of the previous task for starting point and add more functionality. 

Add new vehicle – **Bus**. 

Now every vehicle has **tank capacity** and fuel quantity **cannot fall (set) below 0** (If fuel quantity become less than 0 **print** on the console "**Fuel must be a positive number**").

The **vehicles cannot be filled** with fuel **more than their tank capacity**. 

If you **try to put more fuel** in the tank than the **available space**, print on the console "**Cannot fit fuel in tank**" and **do not add any fuel** in vehicles tank.

Add **new command** for the bus. 

The **bus** can **drive with or without people**. 

If the bus is driving **with people**, the **air-conditioner is turned on** and its **fuel consumption** per kilometer **is increased with 1.4 liters**. 

If there are **no people in the bus** when driving the air-conditioner is **turned off** and **does not increase** the fuel consumption.
## Input
- On the first three lines you will receive information about the vehicles in format:

**Vehicle {initial fuel quantity} {liters per km} {tank capacity}**

- On fourth line - **number of commands N** that will be given on the next **N** lines
- On the next **N** lines – commands in format
    - **Drive Car {distance}**
    - **Drive Truck {distance}**
    - **Drive Bus {distance}**
    - **DriveEmpty Bus {distance}**
    - **Refuel Car {liters}**
    - **Refuel Truck {liters}**
    - **Refuel Bus {liters}**
## Output
- After each **Drive command** print whether the Car/Truck/Bus was able to travel given distance in format if it’s successful:

"**Car/Truck/Bus travelled {distance} km**"
- Or if it is not:

"**Car/Truck/Bus needs refueling**"
- If given fuel is **≤ 0** print "**Fuel must be a positive number**".
- If given fuel cannot fit in car or bus tank print "**Cannot fit fuel in tank**"
 
- Finally print the **remaining fuel** for car, truck and bus rounded **2 digits after floating point** in format:

"**Car: {liters}**

**Truck: {liters}**

**Bus: {liters}**"

## Examples
| **Input** | **Output** |
| --- | --- |
| Car 30 0.04 70 | Fuel must be a positive number |
| Truck 100 0.5 300 | Fuel must be a positive number |
| Bus 40 0.3 150 | Cannot fit fuel in tank |
| 8 | Bus travelled 10 km |
| Refuel Car -10 | Cannot fit fuel in tank |
| Refuel Truck 0 | Bus needs refueling |
| Refuel Car 10 | Cannot fit fuel in tank |
| Refuel Car 300 | Car: 40.00 |
| Drive Bus 10 | Truck: 100.00 |
| Refuel Bus 1000 | Bus: 23.00 |
| DriveEmpty Bus 100 |  |
| Refuel Truck 1000 |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Car 30 0.04 70
Truck 100 0.5 300
Bus 40 0.3 150
8
Refuel Car -10
Refuel Truck 0
Refuel Car 10
Refuel Car 300
Drive Bus 10
Refuel Bus 1000
DriveEmpty Bus 100
Refuel Truck 1000
[/input]
[output]
Fuel must be a positive number
Fuel must be a positive number
Cannot fit fuel in tank
Bus travelled 10 km
Cannot fit fuel in tank
Bus needs refueling
Cannot fit fuel in tank
Car: 40.00
Truck: 100.00
Bus: 23.00
[/output]
[/test]
[test]
[input]
Car 30 0.04 70
Truck 100 0.5 300
Bus 40 0.3 150
16
Refuel Car -10
Refuel Truck 0
Refuel Car 10
Refuel Car 300
Drive Bus 10
Refuel Bus 1000
DriveEmpty Bus 100
Refuel Truck 1000
Refuel Car 110
Refuel Truck 10
Refuel Car 10
Refuel Car -300
Drive Bus 110
Refuel Bus 1000
DriveEmpty Bus 100
Refuel Truck 1000
[/input]
[output]
Fuel must be a positive number
Fuel must be a positive number
Cannot fit fuel in tank
Bus travelled 10 km
Cannot fit fuel in tank
Bus needs refueling
Cannot fit fuel in tank
Cannot fit fuel in tank
Fuel must be a positive number
Bus needs refueling
Cannot fit fuel in tank
Bus needs refueling
Cannot fit fuel in tank
Car: 50.00
Truck: 109.50
Bus: 23.00
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Wild Farm
[code-task title="Problem: Wild Farm" taskId="9499f201-5601-481d-b5a2-225b32fdbbc5" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Your task is to create a class **hierarchy** like the picture below. 

All the classes **except** **Vegetable**, **Meat**, **Mouse**, **Tiger**, **Cat** & **Zebra** should be **abstract**.

[image assetsSrc="interfaces-and-abstraction-example(17).png" /]

Input should be read from the console. 

Every **even** line will contain information about the **Animal** in following format:

**{AnimalType} {AnimalName} {AnimalWeight} {AnimalLivingRegion} [{CatBreed} = Only if its cat]**

On the **odd** lines you will receive information about the **food** that you should give to the **Animal**. 

The line will consist of **FoodType** and **quantity** separated by a whitespace.

You should build the logic to determine if the animal is going to eat the provided food. 

The **Mouse** and **Zebra** should check if the food is a **Vegetable**. 

If it is they will eat it. Otherwise you should print a message in the format:

**{AnimalType} are not eating that type of food!**

**Cats** eat **any** kind of food, but **Tigers** accept **only Meat**. 

If **Vegetable** is provided to a **tiger** message like the one above should be printed on the console.

After you read information about the **Animal** and **Food** then invoke **makeSound()** method of the current animal and then feed it. 

At the end print the whole object and proceed reading information about the next animal/food. 

The input will continue until you receive "**End**". 

After that print the information of all received animals in format:

**{AnimalType} [{AnimalName}, {CatBreed}, {AnimalWeight}, {AnimalLivingRegion}, {FoodEaten}]**

Print all **AnimalWeight** with no trailing zeroes after the decimal separator. 

Use the **DecimalFormat** class.

## Note: 
Consider overriding **toString()** method.


## Examples
| **Input** | **Output** |
| --- | --- |
| Cat Gray 1.1 Home Persian | Meowwww |
| Vegetable 4 | Cat[Gray, Persian, 1.1, Home, 4] |
| End |  |

| **Input** | **Output** |
| --- | --- |
| Tiger Tom 167.7 Asia | ROAAR!!! |
| Vegetable 1 | Tigers are not eating that type of food! |
| End | Tiger[Tom, 167.7, Asia, 0] |
|  |  |

| **Input** | **Output** |
| --- | --- |
| Zebra Jaguar 500 Africa | Zs |
| Vegetable 150 | Zebra[Jaguar, 500, Africa, 150] |
| End |  |

| **Input** | **Output** |
| --- | --- |
| Mouse Jerry 0.5 Anywhere | SQUEEEAAAK! |
| Vegetable 0 | Mouse[Jerry, 0.5, Anywhere, 0] |
| End |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Cat Gray 1.1 Home Persian
Vegetable 4
End
[/input]
[output]
Meowwww
Cat\[Gray, Persian, 1.1, Home, 4\]
[/output]
[/test]
[test open]
[input]
Tiger Tom 167.7 Asia
Vegetable 1
End
[/input]
[output]
ROAAR!!!
Tigers are not eating that type of food!
Tiger\[Tom, 167.7, Asia, 0\]
[/output]
[/test]
[test open]
[input]
Zebra Jaguar 500 Africa
Vegetable 150
End
[/input]
[output]
Zs
Zebra\[Jaguar, 500, Africa, 150\]
[/output]
[/test]
[test open]
[input]
Mouse Jerry 0.5 Anywhere
Vegetable 0
End
[/input]
[output]
SQUEEEAAAK!
Mouse\[Jerry, 0.5, Anywhere, 0\]
[/output]
[/test]
[test]
[input]
Cat Spas 7.250 Streets Unknown
Meat 3
Cat Tutcho 2.127 US_Home British
Vegetable 10
End
[/input]
[output]
Meowwww
Meowwww
Cat\[Spas, Unknown, 7.25, Streets, 3\]
Cat\[Tutcho, British, 2.13, US_Home, 10\]
[/output]
[/test]
[test]
[input]
Cat Spas 0.750 Home Persian_Angorian
Meat 143
Mouse Mincho 4.23 Home
Meat 1
Tiger Giggs 4 Asia
Vegetable 0
End
[/input]
[output]
Meowwww
SQUEEEAAAK!
Mice are not eating that type of food!
ROAAR!!!
Tigers are not eating that type of food!
Cat\[Spas, Persian_Angorian, 0.75, Home, 143\]
Mouse\[Mincho, 4.23, Home, 0\]
Tiger\[Giggs, 4, Asia, 0\]
[/output]
[/test]
[test]
[input]
Zebra Zebrin 345.235 Zoo
Meat 55
Tiger Tigrin 913 Zoo
Vegetable 214
Mouse Mousin 0.2 Zoo
Meat 345
End
[/input]
[output]
Zs
Zebras are not eating that type of food!
ROAAR!!!
Tigers are not eating that type of food!
SQUEEEAAAK!
Mice are not eating that type of food!
Zebra\[Zebrin, 345.24, Zoo, 0\]
Tiger\[Tigrin, 913, Zoo, 0\]
Mouse\[Mousin, 0.2, Zoo, 0\]
[/output]
[/test]
[test]
[input]
Cat No_Name 0.100 Cat_Clinic Unhealty_Cat
Meat 100
Tiger No_Name 100 Cat_Clinic
Meat 1000
Cat MyCat 1.120 @Home Persian/British
Meat 17
End
[/input]
[output]
Meowwww
ROAAR!!!
Meowwww
Cat\[No_Name, Unhealty_Cat, 0.1, Cat_Clinic, 100\]
Tiger\[No_Name, 100, Cat_Clinic, 1000\]
Cat\[MyCat, Persian/British, 1.12, @Home, 17\]
[/output]
[/test]
[test]
[input]
Cat No_Name 0.100 Cat_Clinic Unhealty_Cat
Vegetable 100
Tiger No_Name 100 Cat_Clinic
Vegetable 1000
Cat MyCat 1.120 @Home Persian/British
Vegetable 17
End
[/input]
[output]
Meowwww
ROAAR!!!
Tigers are not eating that type of food!
Meowwww
Cat\[No_Name, Unhealty_Cat, 0.1, Cat_Clinic, 100\]
Tiger\[No_Name, 100, Cat_Clinic, 0\]
Cat\[MyCat, Persian/British, 1.12, @Home, 17\]
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Homework Results
[tasks-results/]

[/slide]