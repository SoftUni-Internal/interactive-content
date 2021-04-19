# Homework

[slide hideTitle]
# Problem: Vehicles
[code-task title="Vehicles" taskId="oop-advanced-java-polymorphism-Vehicles" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput] 

[task-description]
# Description
Create a program that holds the classes to represent two vehicle types (**Car** and **Truck**). It should simulate **driving** and **refueling** the vehicles.

The **Car** and **Truck** should both have: **fuel quantity**, **fuel consumption in liters per kilometer** and can be **driven a given distance** and **refueled with a given number of liters of gas**. 

During the **summer** both vehicles are air conditioned so their **fuel consumption** per kilometer gets **increased by 0.9** liters for the **car** and with **1.6** liters **for the truck**. 

Also the **truck** has a hole in its tank and when it gets **refueled** it retains only **95%** of the total **re-filled amount**. 

The **car** has no such problems and can be **refilled without loosing any of the gas**. 

If the vehicle **cannot** travel the specified distance, its fuel level remains unchanged.

## Input
- On the **first line** - information about the car in format "**Car** \{**fuel quantity**\} \{**liters per km**\}"
- On the **second line** – info about the truck in format "**Truck** \{**fuel quantity**\} \{**liters per km**\}"
- On the **third line** - **number of commands N** that will be given on the next **N** lines
- On the next **N** lines – commands in format:
    - "**Drive Car** \{**distance**\}"
    - "**Drive Truck** \{**distance**\}"
    - "**Refuel Car** \{**liters**\}"
    - "**Refuel Truck** \{**liters**\}"
## Output
After each **Drive** command, print whether the car or the truck was able to travel the given distance in this format:

**Print the distance formatted to two digits after the decimal separator except trailing zeros**. 

Use the **DecimalFormat** class: "**The car/truck travelled** \{**distance**\} **km**"

If there isnt enough fuel: "**The car/truck needs refueling**"

Finally, print the **remaining fuel** for both the car and the truck rounded **to the second decimal place** in the format:

"**Car:** \{**liters**\}

**Truck:** \{**liters**\}"

# Examples

## Example 1
| **Input** | **Output** |
| --- | --- |
| Car 15 0.3 | The car travelled 9 km |
| Truck 100 0.9 | The car needs refueling |
| 4 | The truck travelled 10 km |
| Drive Car 9 | Car: 54.20 |
| Drive Car 30 | Truck: 75.00 |
| Refuel Car 50 |  |
| Drive Truck 10 |  |

## Example 2
| **Input** | **Output** |
| --- | --- |
| Car 30.4 0.4 | The car needs refueling |
| Truck 99.34 0.9 | The car travelled 13.5 km |
| 5 | The truck needs refueling |
| Drive Car 500 | Car: 113.05 |
| Drive Car 13.5 | Truck: 109.13 |
| Refuel Truck 10.300 |  |
| Drive Truck 56.2 |  |
| Refuel Car 100.2 |  |

[/task-description]
[code-upload allowedMemory="30" /]
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
The car travelled 9 km
The car needs refueling
The truck travelled 10 km
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
The car needs refueling
The car travelled 13.5 km
The truck needs refueling
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
The car travelled 1 km
The car travelled 1.2 km
The car travelled 1.24 km
The car travelled 123.33 km
The car travelled 300.32 km
The car travelled 101.32 km
The car travelled 0 km
The car travelled 4000.94 km
The car travelled 0 km
The car travelled 0 km
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
The car needs refueling
The car needs refueling
The car needs refueling
The car needs refueling
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
The truck travelled 1 km
The truck travelled 2.4 km
The truck travelled 3.77 km
The truck travelled 1239 km
The truck travelled 999.32 km
The truck travelled 0 km
The truck travelled 99.33 km
The truck travelled 0 km
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
The truck needs refueling
The truck needs refueling
The truck needs refueling
The truck needs refueling
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
The car travelled 14 km
The car needs refueling
The car needs refueling
The car travelled 99.1 km
The car needs refueling
The car travelled 5.01 km
The car travelled 1 km
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
The truck needs refueling
The truck needs refueling
The truck needs refueling
The truck travelled 40.2 km
The truck travelled 48.23 km
The truck travelled 1.01 km
The truck needs refueling
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
The car needs refueling
The truck needs refueling
The car travelled 1 km
The car travelled 2.23 km
The car needs refueling
The truck needs refueling
The car travelled 100 km
The car travelled 15.2 km
The truck needs refueling
The truck travelled 10.99 km
The car travelled 0 km
The car travelled 0 km
The truck travelled 0 km
The truck travelled 0 km
The car travelled 700.2 km
Car: 67.27
Truck: 176.18
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Vehicles Extension
[code-task title="Vehicles Extension" taskId="oop-advanced-java-polymorphism-Vehicles-Extension" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Description
Use your solution to the previous task as a starting point and add the necessary functionality. 

Add a new vehicle class – **Bus**. 

Every vehicle has **tank capacity** and fuel quantity **cannot fall below 0** (If the fuel reserve becomes less than 0, **print** "**The fuel amount must be a positive number**" to the console).

A vehicle's tank capacity cannot be exceeded. 

If we **try to put more fuel** in the tank than the **available space**, print out "**The fuel amount exceeds this vehicle's capacity**" and **do not add any fuel** in the vehicle's tank.

Add a **new function** in the bus class:

The **bus** can **drive with or without people**. 

If the bus **has passengers on it** - its **air-conditioner is turned on** and its **fuel consumption** per kilometer **is increased by 1.4 liters**. 

If there are **no people on the bus** when driving the air-conditioner is **turned off** and its fuel consumption is unaltered.

## Input
- On the **first three lines** you will receive information about the vehicles in this format:

"**Vehicle** \{**initial fuel quantity**\} \{**liters per km**\} \{**tank capacity**\}"

- On fourth line - **number of commands N** that will be given on the next **N** lines
- On the next **N** lines – commands in format:
    - **Drive Car** \{**distance**\}
    - **Drive Truck** \{**distance**\}
    - **Drive Bus** \{**distance**\}
    - **DriveEmpty Bus** \{**distance**\}
    - **Refuel Car** \{**liters**\}
    - **Refuel Truck** \{**liters**\}
    - **Refuel Bus** \{**liters**\}

## Output
- After each **Drive command**, print whether the Car/Truck/Bus was able to travel the given distance in the following format:
- If successful:

"**The car/truck/bus travelled** \{**distance**\} **km**"

- If not:

"**The car/truck/bus needs refueling**"

- If an attempt to specify a fuel number **less than or equal to 0** is made, print out "**The fuel amount must be a positive number**"
- If the refill amount exceeds a vehicle's fuel capacity, print "**The fuel amount exceeds this vehicle's capacity**"
 
- Finally, print the **remaining fuel** for the car, the truck, and the bus rounded to **the second decimal place** as follows:

"**Car:** \{**liters**\}

**Truck:** \{**liters**\}

**Bus:** \{**liters**\}"

# Example
| **Input** | **Output** |
| --- | --- |
| Car 30 0.04 70 | The fuel amount must be a positive number |
| Truck 100 0.5 300 | The fuel amount must be a positive number |
| Bus 40 0.3 150 | The fuel amount exceeds this vehicle's capacity |
| 8 | The bus travelled 10 km |
| Refuel Car -10 | The fuel amount exceeds this vehicle's capacity |
| Refuel Truck 0 | The bus needs refueling |
| Refuel Car 10 | The fuel amount exceeds this vehicle's capacity |
| Refuel Car 300 | Car: 40.00 |
| Drive Bus 10 | Truck: 100.00 |
| Refuel Bus 1000 | Bus: 23.00 |
| DriveEmpty Bus 100 |  |
| Refuel Truck 1000 |  |

[/task-description]
[code-upload allowedMemory="30" /]
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
The fuel amount must be a positive number
The fuel amount must be a positive number
The fuel amount exceeds this vehicle's capacity
The bus travelled 10 km
The fuel amount exceeds this vehicle's capacity
The bus needs refueling
The fuel amount exceeds this vehicle's capacity
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
The fuel amount must be a positive number
The fuel amount must be a positive number
The fuel amount exceeds this vehicle's capacity
The bus travelled 10 km
The fuel amount exceeds this vehicle's capacity
The bus needs refueling
The fuel amount exceeds this vehicle's capacity
The fuel amount exceeds this vehicle's capacity
The fuel amount must be a positive number
The bus needs refueling
The fuel amount exceeds this vehicle's capacity
The bus needs refueling
The fuel amount exceeds this vehicle's capacity
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
[code-task title="Wild Farm" taskId="oop-advanced-java-polymorphism-Wild-Farm" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Description
Create code to represent the diagram. 

All the classes should be **abstract**, **except** for **Vegetable**, **Meat**, **Mouse**, **Tiger**, **Cat**, and **Zebra**.

[image assetsSrc="interfaces-and-abstraction-example(17).png" /]

Additional input will be be received from the console. 

Every **even** line will contain information about an **Animal** in the following format:

\{**AnimalType**\} \{**AnimalName**\} \{**AnimalWeight**\} \{**AnimalLivingRegion**\} \[\{**CatBreed**\} = Only if it is a cat\]

On **odd** lines you will receive information about the **food** that you should give to the **Animal**. 

The line will consist of the **FoodType** and **quantity**, separated by whitespaces.

You should build the logic to determine if the animal is going to eat the provided food. 

The **Mouse** and **Zebra** classes should check if the provided food is a **Vegetable**. 

If it **is**, they will **eat** it. 

**Otherwise**, you should **print** a **message** in the format:

**The type of food cannot be consumed by** \{**AnimalType**\}

**Cats** eat **any** kind of food, but **Tigers** eat **only Meat**. 

If a **Vegetable** is offered to a **tiger**, the same message secified previously should be produced.

After you read information about an **Animal** and its **Food**, invoke the **makeSound()** method of the current animal and **feed** it. 

Finally print all information on the entire object and proceed reading information about the next animal/food. 

The input will continue until you receive the following command: "**End**". 

After that, **print** all received information on **all animals** in the format:

\{**AnimalType**\} \[\{**AnimalName**\}, \{**CatBreed**\}, \{**AnimalWeight**\}, \{**AnimalLivingRegion**\}, \{**FoodEaten**\}\]

**AnimalWeight** should be printed out with no trailing zeroes after the decimal separator. 

Use the **DecimalFormat** class.

## Note: 
Consider overriding the default **toString()** method.

# Examples
## Example 1
| **Input** | **Output** |
| --- | --- |
| Cat Gray 1.1 Home Persian | Meowwww |
| Vegetable 4 | Cat[Gray, Persian, 1.1, Home, 4] |
| End |  |

## Example 2
| **Input** | **Output** |
| --- | --- |
| Tiger Tom 167.7 Asia | ROAAR!!! |
| Vegetable 1 | The type of food cannot be consumed by Tigers |
| End | Tiger[Tom, 167.7, Asia, 0] |

## Example 3
| **Input** | **Output** |
| --- | --- |
| Zebra Jaguar 500 Africa | Zs |
| Vegetable 150 | Zebra[Jaguar, 500, Africa, 150] |
| End |  |

## Example 4
| **Input** | **Output** |
| --- | --- |
| Mouse Jerry 0.5 Anywhere | SQUEEEAAAK! |
| Vegetable 0 | Mouse[Jerry, 0.5, Anywhere, 0] |
| End |  |

[/task-description]
[code-upload allowedMemory="30" /]
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
The type of food cannot be consumed by Tigers
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
The type of food cannot be consumed by Mice
ROAAR!!!
The type of food cannot be consumed by Tigers
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
The type of food cannot be consumed by Zebras
ROAAR!!!
The type of food cannot be consumed by Tigers
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
The type of food cannot be consumed by Tigers
Meowwww
Cat\[No_Name, Unhealty_Cat, 0.1, Cat_Clinic, 100\]
Tiger\[No_Name, 100, Cat_Clinic, 0\]
Cat\[MyCat, Persian/British, 1.12, @Home, 17\]
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Word
[code-task title="Word" taskId="oop-advanced-java-polymorphism-Word" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Description

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/java-oop-advanced/Java-OOP-Advanced-Polymorphism-Word.zip) **for this task.**

You are given the skeleton of a word-processing program (like MS Word, OpenOffice Writer, etc.). 

The program reads a line of text from the console, then starts accepting and applying text-editing commands. 

Each command changes the text.

When the command **exit** is entered, the program prints out the last form of the text. 

**All** commands are in the **form**:

"\{**commandName**\} \{**startIndex**\} \{**endIndex**\}"

Where:

- **commandName** is a string describing which command should be used 
- **startIndex** is an integer that describes from which index the command should be applied
- **endIndex** is an integer that describes to which index (exclusive) the command should be applied
    - i.e. the command is applied on indices starting from **startIndex** and ending at **endIndex - 1** inclusively

The skeleton you are provided with contains the following files:
- **Main.java** – contains the `main(String[] args)` method, reads input, and prints output to the console
- **TextTransform.java** – contains a base class for any text-transformation added to the program
- **Command.java** – contains a class that represents commands
- **CommandInterface.java** – defines an interface class that handles commands represented as strings (coming from the console, read from `main(String[] args)`) 
- **CommandImpl.java** – class which holds the implementation of the **CommandInterface**

Create an **Initialization.java** file that holds the functionality to create instances of the CommandImpl class

The files you are given support all the necessary logic to implement the following command:

**uppercase** – transforms any alphabetical character in the text in the range \[**startIndex**, **endIndex**\) to its uppercase variant.

**For example:**
If the current text is **dom3. text** 
and we are given the command: **uppercase 1 7**
the text will change to **dOM3. Text**

**Note**: if **startIndex == endIndex**, the command has no effect.

Your task is to implement the following commands:
- **cut** – cuts (removes) characters from the text in range \[**startIndex**, **endIndex**\) and saves the last piece that was removed 

**For example:**
If the current text is **dom3. text**
and we execute the command **cut 1 7** 
the text will change to **dext**

**Note**: if **startIndex == endIndex**, the command has no effect on the text, but "**clears**" the last remembered cut

- **paste** – replaces the characters in the text in range \[**startIndex**, **endIndex**\) with the characters which were removed by the last cut

**For example:**
If we have the text **dom3. Text** 
and the commands **cut 1 7** (text changes to **dext**) **paste 3 4** 
the text will change to **dexom3. t** (we paste the last cut piece– "**om3. t**" – over the specified indexes)

**Note**: if **startIndex == endIndex**, **paste** will insert the text at position **startIndex**, meaning that any text at **startIndex** will be pushed to the right by the inserted text. 

**For example:**
If the last command was **paste 0 0** (not **paste 3 4**), 
the text would be **om3. Tdext**
 
## Input
The program defined in `Main.java` reads the following input:

A line of text, followed by a sequence of lines containing commands of the format 

"\{**commandName**\} \{**startIndex**\} \{**endIndex**\}"

ending with the command **exit**.

## Output
The program defined in `Main.java` prodices the following output:

**The modified line of text.**

## Restrictions
The input text will be no more than **30** characters long and there will be no more than **10** commands in the input.

Every command will answer to:

**0 <= startIndex <= endIndex < currentTextLength**
(the input will always be applicable)

There will always be at least 1 **cut** command before any **paste** command. 

Consecutive **paste** commands (without **cut** between them) will paste the same text.

The total running time of your program should be no more than **0.1s**.

The total memory used should not exceed **16MB**.

# Examples
## Example 1
| **Input** | **Output** |
| --- | --- |
| dom3. text | dexom3. t |
| cut 1 7 |  |
| paste 3 4 |  |
| exit |  |

## Example 2
| **Input** | **Output** |
| --- | --- |
| abc d e | dabc E |
| cut 0 4 |  |
| uppercase 1 3 |  |
| paste 1 2 |  |
| exit |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
dom3. text
cut 1 7
paste 3 4
exit
[/input]
[output]
dexom3. t
[/output]
[/test]
[test open]
[input]
abc d e
cut 0 4
uppercase 1 3
paste 1 2
exit
[/input]
[output]
dabc E
[/output]
[/test]
[test]
[input]
abc d e
cut 0 4
uppercase 0 1
exit
[/input]
[output]
D e
[/output]
[/test]
[test]
[input]
test using cut only
cut 0 2
cut 3 4
cut 14 16
cut 0 3
cut 4 8
exit
[/input]
[output]
sing on
[/output]
[/test]
[test]
[input]
cut and paste testing
cut 3 6
paste 0 3
cut 6 15
paste 0 1
cut 5 6
paste 0 0
cut 6 9
exit
[/input]
[output]
taste and ping
[/output]
[/test]
[test]
[input]
edge cases paste and cut
cut 0 0
paste 0 0
paste 5 10
cut 16 19
paste 5 5
paste 0 0
exit
[/input]
[output]
cutedge cut paste and
[/output]
[/test]
[test]
[input]
mixed testing all commands
cut 0 6
uppercase 8 11
uppercase 4 6
cut 12 13
paste 8 8
cut 8 12
paste 8 8
uppercase 8 9
paste 13 20
cut 13 14
cut 4 7
paste 9 9
exit
[/input]
[output]
test CALLINg ALL
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Calculator
[code-task title="Calculator" taskId="oop-advanced-java-polymorphism-Calculator" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Description

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/java-oop-advanced/Java-OOP-Advanced-Polymorphism-Calculator.zip) **for this task.**

This is the code skeleton of a calculator program (like the **Calculator** app in Windows, or the calculator on your smartphone, etc.).

The program accepts numbers and operation commands from the console and executes them with the numbers.

The numbers are positive integers, while the operations can be single symbols (e.g. the asterisk symbol '*' means multiplication), or strings of characters (e.g. the operation "**end**" stops the program and prints out the result).

Operations are executed immediately after they receive all ncessary operands. 

**For example**, the expression **3 * 4 / 2** will accept **3**, then the multiplication sign and afterward, will await a number to multiply – when it receives **4** it will calculate that **3 * 4 = 12**, then the division sign is entered and it will wait for a number to divide the result by – when it receives **2**, it will divide **12** by **2**.

Any number input overwrites the current result of the calculator.

For example, if the expression **3 1 * 4 16 / 2** is received, we would first receive **3**, overwrite it with **1**, multiply this by **4** and get **4** as a result, then we overwrite this with **16** and divide that by **2** – the final result will be **8**.

The skeleton you are provided with contains the following files:
- **Main.java**– contains the `main(String[] args)` method, reads input, and prints output to the console
- **Operation.java** – contains a base class for any operation done by the calculator
- **MultiplicationOperation.java** – defines a class that inherits the base **Operation** class and implements the multiplication operation (*)
- **CalculationEngine.java** – defines the calculator’s central logic of handling number and operations input
- **InputInterpreter.java** – defines a class that can interpret a string into either a number or an operation and invoke the engine accordingly

The files you are given support all the logic necessary to implement the **multiplication** operation, as well as console input and output (note that input items do not need to be on the same line – you can have **one operation** or number per line and the code will still work) there is missing logic to instantiate an **InputInterpreter**, which should be defined in the missing **Extensions.java** file.

Your task is to study the provided code and add the following operations:
- **/** – **division**, divides the current value of the calculator by the next number the calculator receives and pushes the result to the calculator (i.e. same as multiplication, but divides)
- **ms** – saves the current result of the calculator to "**memory**". The result of this operation is the current result of the calculator. For example, the expression **3 * 4 ms * 5** and the expression **3 * 4 * 5** are equivalent in their result
- **mr** – **memory recall**, removes the last item from memory, and sends it to the calculator
    - note that this operation can be used in combination with other operations, for example, the expression **3 ms * 4 ms * 5 * mr * mr** will save **3** to memory, perform a calculation producing **12** as a result, save that to memory, calculate the next expression: **60** is received, multiply that by **12** (stored in memory), **720** is received as a product and stored, then multiply that by **3**, the final result will be: **2160**
    - it can also be used without operations – **3 ms 4 mr** is the same as **3 4 3**

## Input
The program defined in **Main.java** reads the following input:

Strings, representing numbers or operations, separated by spaces (or new lines, or any "blank" space), ending with the string "**end**".

## Output
The program defined in **Main.java** produces the following output:

The calculated result of all the numbers and operations from the input.

## Restrictions
The numbers in the input will always be positive integers and no operation will result in a number larger than 1 billion.

There will always be at least 1 **ms** operation before any **mr** operation. 

There will be no more **mr** operations than the preceding ms operations. 

There will be no ms operation following an operation expecting a value (e.g. **3 * ms 4** is not a valid input, but **3 ms * 4** is). There will never be an invalid series of operations (e.g. **3 / / 4**, or **3 * * 4**, etc.)

The first **40%** of the tests will NOT contain **ms** or **mr** operations.

The total running time of your program should be no more than **0.1s**. 

The total memory used should not exceed **16MB**.

# Examples
## Example 1
| **Input** | **Output** |
| --- | --- |
| 1 * 2 * 3 ms * 4 * mr / 2 end | 72 |

## Example 2
| **Input** | **Output** |
| --- | --- |
| 12 / 3 ms / 2 ms * 5 mr * mr end | 8 |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
1 \* 2 \* 3 ms \* 4 \* mr / 2 end
[/input]
[output]
72
[/output]
[/test]
[test open]
[input]
12 / 3 ms / 2 ms \* 5 mr \* mr end
[/input]
[output]
8
[/output]
[/test]
[test]
[input]
105 / 5 / 3 end
[/input]
[output]
7
[/output]
[/test]
[test]
[input]
10 \* 20 / 20 \* 170 \* 30 \* 40 \* 50 \* 2 / 80 / 170 end
[/input]
[output]
15000
[/output]
[/test]
[test]
[input]
10 ms \* 20 / 20 ms ms \* 170 \* 30 ms \* 40 \* 50 \* 3 ms ms / 80 / 170 end
[/input]
[output]
22500
[/output]
[/test]
[test]
[input]
15 ms \* 4 17 \* 5 \* mr end
[/input]
[output]
1275
[/output]
[/test]
[test]
[input]
15 ms ms ms \* 4 mr \* mr / 5 ms / 5 \* 42 \* mr ms / 2 / 5 / 3 \* mr / mr end
[/input]
[output]
642978
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
