# Homework

[slide hideTitle]
# Problem: Vehicles
[code-task title="Vehicles" taskId="oop-advanced-java-polymorphism-Vehicles" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput] 

[task-description]
# Description
Write a program that models two vehicles (**Car** and **Truck**) and will be able to simulate **driving** and **refueling** them in the summer. 

**Car** and **Truck** both have **fuel quantity**, **fuel consumption in liters per kilometer** and can be **driven given distance** and **refueled with given liters**. 

But in the **summer** both vehicles use an air conditioner and their **fuel consumption** per kilometer is **increased by 0.9** liters for the **car** and with **1.6** liters **for the truck**. 

Also the **truck** has a tiny hole in his tank and when it gets **refueled** it gets only **95%** of given **fuel**. 

The **car** has no problems when refueling and adds **all given fuel to its tank**. 

If the vehicle **cannot** travel the given distance, its fuel does not change.

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
After each **Drive command** print whether the Car/Truck was able to travel the given distance in this format if it is successful. 

**Print the distance with two digits after the decimal separator except trailing zeros**. 

Use the **DecimalFormat** class: "**Car/Truck travelled** \{**distance**\} **km**"

Or if it is not: "**Car/Truck needs refueling**"

Finally, print the **remaining fuel** for both car and truck rounded **2 digits after the decimal separator** in the format:

"**Car:** \{**liters**\}

**Truck:** \{**liters**\}"

## Example One
| **Input** | **Output** |
| --- | --- |
| Car 15 0.3 | Car travelled 9 km |
| Truck 100 0.9 | Car needs refueling |
| 4 | Truck travelled 10 km |
| Drive Car 9 | Car: 54.20 |
| Drive Car 30 | Truck: 75.00 |
| Refuel Car 50 |  |
| Drive Truck 10 |  |

## Example Two
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
[code-task title="Vehicles Extension" taskId="oop-advanced-java-polymorphism-Vehicles-Extension" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Description
Use your solution of the previous task as a starting point and add more functionality. 

Add a new vehicle – **Bus**. 

Now every vehicle has **tank capacity** and fuel quantity **cannot fall (set) below 0** (If fuel quantity becomes less than 0, **print** to the console "**Fuel must be a positive number**").

The **vehicles cannot be filled** with fuel **more than their tank capacity**. 

If you **try to put more fuel** in the tank than the **available space**, print on the console "**Cannot fit fuel in tank**" and **do not add any fuel** in the vehicle's tank.

Add a **new command** for the bus. 

The **bus** can **drive with or without people**. 

If the bus is driving **with people**, the **air-conditioner is turned on** and its **fuel consumption** per kilometer **is increased by 1.4 liters**. 

If there are **no people in the bus** when driving the air-conditioner is **turned off** and **does not increase** the fuel consumption.
## Input
- On the **first three lines** you will receive information about the vehicles in this format:

"**Vehicle** \{**initial fuel quantity**\} \{**liters per km**\} \{**tank capacity**\}"

- On fourth line - **number of commands N** that will be given on the next **N** lines
- On the next **N** lines – commands in format
    - **Drive Car** \{**distance**\}
    - **Drive Truck** \{**distance**\}
    - **Drive Bus** \{**distance**\}
    - **DriveEmpty Bus** \{**distance**\}
    - **Refuel Car** \{**liters**\}
    - **Refuel Truck** \{**liters**\}
    - **Refuel Bus** \{**liters**\}
## Output
- After each **Drive command** print whether the Car/Truck/Bus was able to travel the given distance in the following format if it is successful:

"**Car/Truck/Bus travelled** \{**distance**\} **km**"

- Or if it is not:

"**Car/Truck/Bus needs refueling**"

- If given fuel is **smaller than or equal to 0** print "**Fuel must be a positive number**"
- If given fuel cannot fit in car or bus tank print "**Cannot fit fuel in tank**"
 
- Finally, print the **remaining fuel** for car, truck, and bus rounded to **2 digits after the decimal separator** as follows:

"**Car:** \{**liters**\}

**Truck:** \{**liters**\}

**Bus:** \{**liters**\}"

# Example
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
[code-task title="Wild Farm" taskId="oop-advanced-java-polymorphism-Wild-Farm" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Description
Your task is to create a class **hierarchy** like the picture below. 

All the classes should be **abstract**, **except** for:

- **Vegetable**
- **Meat**
- **Mouse**
- **Tiger**
- **Cat**
- **Zebra** 

[image assetsSrc="interfaces-and-abstraction-example(17).png" /]

Input should be read from the console. 

Every **even** line will contain information about the **Animal** in the following format:

\{**AnimalType**\} \{**AnimalName**\} \{**AnimalWeight**\} \{**AnimalLivingRegion**\} \[\{**CatBreed**\} = Only if it is a cat\]

On the **odd** lines you will receive information about the **food** that you should give to the **Animal**. 

The line will consist of **FoodType** and **quantity**, separated by whitespace.

You should build the logic to determine if the animal is going to eat the provided food. 

The **Mouse** and **Zebra** should check if the food is a **Vegetable**. 

If it **is**, they will **eat** it. 

**Otherwise**, you should **print** a **message** in the format:

\{**AnimalType**\} are not eating that type of food!**

**Cats** eat **any** kind of food, but **Tigers** accept **only Meat**. 

If **Vegetable** is provided to a **tiger**, a message like the one above should be printed on the console.

After you read information about the **Animal** and **Food**, invoke the **makeSound()** method of the current animal and **feed** it. 

At the end print the whole object and proceed reading information about the next animal/food. 

The input will continue until you receive "**End**". 

After that, **print** the information of **all received animals** in the format:

\{**AnimalType**\} \[\{**AnimalName**\}, \{**CatBreed**\}, \{**AnimalWeight**\}, \{**AnimalLivingRegion**\}, \{**FoodEaten**\}\]

Print all **AnimalWeight** with no trailing zeroes after the decimal separator. 

Use the **DecimalFormat** class.

## Note: 
Consider overriding the default **toString()** method.

## Example One
| **Input** | **Output** |
| --- | --- |
| Cat Gray 1.1 Home Persian | Meowwww |
| Vegetable 4 | Cat[Gray, Persian, 1.1, Home, 4] |
| End |  |

## Example Two
| **Input** | **Output** |
| --- | --- |
| Tiger Tom 167.7 Asia | ROAAR!!! |
| Vegetable 1 | Tigers are not eating that type of food! |
| End | Tiger[Tom, 167.7, Asia, 0] |

## Example Three
| **Input** | **Output** |
| --- | --- |
| Zebra Jaguar 500 Africa | Zs |
| Vegetable 150 | Zebra[Jaguar, 500, Africa, 150] |
| End |  |

## Example Four
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

[slide hideTitle]
# Problem: Word
[code-task title="Word" taskId="oop-advanced-java-polymorphism-Word" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Description

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/java-oop-advanced/Java-OOP-Advanced-Polymorphism-Word.zip) **for this task.**

You are given the skeleton of a word-processing program (like MS Word, OpenOffice Writer, etc.). 

The program reads a line of text from the console, then starts reading commands for editing (text-transform) and executing them on the text. 

Each command changes the text, the following command works on the changed text. 

When the command **exit** is entered, the program prints out the modified text and exits. 

**All** commands are in the **form**:

"\{**commandName**\} \{**startIndex**\} \{**endIndex**\}"

In these commands:

- **commandName** is a string describing which command should be used 
- **startIndex** is an integer that describes from which index in the text the command should be applied
- **endIndex** is an integer that describes to which index (exclusive) the command should be applied
    - i.e. the command is applied on indices starting from **startIndex** and ending in **endIndex - 1** inclusively

The skeleton you are provided with contains the following files:
- **Main.java** – contains the `main(String[] args)` method, reads input, and prints output on the console
- **TextTransform.java** – contains a base class for any text-transform added to the program
- **Command.java** – contains a class that represents commands
- **CommandInterface.java** – defines an interface class that handles commands represented as strings (coming from the console, read from `main(String[] args)`) 
- **CommandImpl.java** – class which holds the implementation of the **CommandInterface**

The code uses an **Initialization.java** file, which is missing but should define a way to generate a **CommandInterface**.

The files you are given support all the necessary logic to implement the following command:

**uppercase** – transforms any alphabetical character in the text in the range \[**startIndex**, **endIndex**\) to its uppercase variant.

**For example:**
If the current text is **dom3. text** 
and we are given the command **uppercase 1 7**
the current text will change to **dOM3. Text**

**Note**: if **startIndex == endIndex**, the command has no effect.

Your task is to add the following commands:
- **cut** – cuts (removes) characters in the text in the range \[**startIndex**, **endIndex**\), and remembers the last thing that was removed 

**For example:**
If the current text is **dom3. text**
and we execute the command **cut 1 7** 
the current text will change to **dext**

**Note**: if **startIndex == endIndex**, the command has no effect on the text, but “**clears**” the last remembered cut

- **paste** – replaces the characters in the text in the range \[**startIndex**, **endIndex**\) with the characters which were removed by the last cut

**For example:**
If we have the text **dom3. Text** 
and the commands **cut 1 7** (text changed to **dext**) **paste 3 4** 
the current text will change to **dexom3. t** (we paste the last cut – "**om3. t**" – over the **'t'** at the end of the text)

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
The program defined in `Main.java` writes the following output:

**The modified line of text.**

## Restrictions
The input text will be no more than **30** characters long and there will be no more than **10** commands in the input (this task is not about algorithm optimization).

For **currentTextLength** equal to the current number of characters in the text, for any command:

**0 <= startIndex <= endIndex < currentTextLength**
(in other words, the input will always be valid)

There will always be at least 1 **cut** command before any **paste** command. 

Consecutive **paste** commands (without **cut** between them) will paste the same text (just like in any text editor – you can cut something and paste it several times). 

The total running time of your program should be no more than **0.1s**.

The total memory allowed for use by your program is **16MB**.


## Example One
| **Input** | **Output** |
| --- | --- |
| dom3. text | dexom3. t |
| cut 1 7 |  |
| paste 3 4 |  |
| exit |  |

## Example Two
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

You are given the skeleton of a calculator program (like the **Calculator** app in Windows, or the calculator on your smartphone, etc.).

The program reads numbers and operations from the console and executes those operations on the numbers.

The numbers are positive integers, while the operations can be single symbols (e.g. the star symbol '*' means multiplication), or strings of characters (e.g. the operation "**end**" stops the program and prints out the result).

Operations are executed immediately after they receive all their needed operands. 

**For example**, the expression **3 * 4 / 2** will first store **3**, then see the multiplication and wait for a number to multiply – when it receives **4** it will calculate **3 * 4 = 12**, then see the division and wait for a number to divide by – when it receives **2**, it will divide **12** by **2**.

Any number input overwrites the current result of the calculator, just like in normal calculators. 

For example, if the expression **3 1 * 4 16 / 2** is input, we would first have **3**, overwrite it with **1**, multiply by **4** and get **4**, but then we overwrite with **16** and divide that by **2** – the result will be **8**.

The skeleton you are provided with contains the following files:
- **Main.java**– contains the `main(String[] args)` method, reads input, and prints output on the console
- **Operation.java** – contains a base class for any operation done by the calculator
- **MultiplicationOperation.java** – defines a class that inherits the base **Operation** class and implements the multiplication operation (*)
- **CalculationEngine.java** – defines the calculator’s central logic of handling number and operations input
- **InputInterpreter.java** – defines a class that can interpret a string into either a number or an operation and invoke the engine accordingly

The files you are given support all the logic necessary to implement the **multiplication** operation, as well as console input and output (note that input items do not need to be on the same line – you can write **one operation** or number per line and the code will still work) but are missing the logic to instantiate an **InputInterpreter**, which should be defined in the missing **Extensions.java** file.

Your task is to study the provided code and add the following operations:
- **/** – **division**, divides the current result of the calculator by the next number the calculator receives and pushes the result to the calculator (i.e. same as multiplication, but divides)
- **ms** – saves the current result of the calculator to "**memory**". The result of this operation is the current result of the calculator. For example, the expression **3 * 4 ms * 5** and the expression **3 * 4 * 5** are equivalent in their result
- **mr** – **memory recall**, removes the last item from memory, and sends it to the calculator
    - note that this operation can be used in combination with other operations, for example, the expression **3 ms * 4 ms * 5 * mr * mr** will save **3** to memory, calculate to **12**, save to memory, calculate **60**, multiply that by **12** from memory, resulting in **720**, then multiply that by **3** from memory, resulting in **2160**
    - it can also be used without operations –  **3 ms 4 mr** is the same as **3 4 3**

## Input
The program defined in **Main.java** reads the following input:

Strings, representing numbers or operations, separated by spaces (or new lines, or any "blank" space), ending with the string "**end**".

## Output
The program defined in **Main.java** writes the following output:

The calculated result of all the numbers and operations from the input.

## Restrictions
The numbers in the input will always be positive integers and no operation will result in a number larger than 1 billion.

There will always be at least 1 **ms** operation before any **mr** operation. 

There will be no more **mr** operations than the preceding ms operations. 

There will be no ms operation following an operation expecting a value (e.g. **3 * ms 4** is not a valid input, but **3 ms * 4** is). There will never be an invalid series of operations (e.g. **3 / / 4**, or **3 * * 4**, etc.)

The first **40%** of the tests will NOT contain **ms** or **mr** operations.

The total running time of your program should be no more than **0.1s**. 

The total memory allowed for use by your program is **16MB**.

## Example One
| **Input** | **Output** |
| --- | --- |
| 1 * 2 * 3 ms * 4 * mr / 2 end | 72 |

## Example Two
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
