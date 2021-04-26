# Homework 

[slide hideTitle]
# Problem: Harvesting Fields
[code-task title="Harvesting Fields" taskId="oop-advanced-java-reflection-and-annotations-Harvesting-Fields" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Description

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/java-oop-advanced/Java-OOP-Advanced-Reflection-and-Annotations-harvestingFields.zip) **for this task.**

You will receive a **RichSoilLand** class with lots of fields, which you should harvest. 

Harvesting means that you must print out information on each **field** in a given format (see the output).

## Input
You will receive a maximum of 100 lines with one of the following commands:
- **private** - print all private fields
- **protected** - print all protected fields
- **public** - print all public fields
- **all** - print ALL declared fields
- **HARVEST** - end the input

## Output
For each command, you must print the **fields** that have the **given access modifier**, as described in the input section. 

The format in which the fields should be printed is:

"\{**access modifier**\} \{**field type**\} \{**field name**\}"


# Examples

## Example 1
| **Input** | **Output** |
| --- | --- |
| protected | protected String testString |
| HARVEST | protected double aDouble |
|  | protected byte testByte |
|  | protected StringBuilder aBuffer |
|  | protected BigInteger testBigNumber |
|  | protected float testFloat |
|  | protected Object testPredicate |
|  | protected Object fatherMotherObject |
|  | protected String moarString |
|  | protected Exception inheritableException |
|  | protected Stream moarStreamz |


## Example 2
| **Input** | **Output** |
| --- | --- |
| private | private int testInt |
| public | private long testLong |
| private | private Calendar aCalendar |
| HARVEST | private char testChar |
|  | private BigInteger testBigInt |
|  | private Thread aThread |
|  | private Object aPredicate |
|  | private Object hiddenObject |
|  | private String anotherString |
|  | private Exception internalException |
|  | private Stream secretStream |
|  | public double testDouble |
|  | public String aString |
|  | public StringBuilder aBuilder |
|  | public short testShort |
|  | public byte aByte |
|  | public float aFloat |
|  | public Thread testThread |
|  | public Object anObject |
|  | public int anotherIntBitesTheDust |
|  | public Exception justException |
|  | public Stream aStream |
|  | private int testInt |
|  | private long testLong |
|  | private Calendar aCalendar |
|  | private char testChar |
|  | private BigInteger testBigInt |
|  | private Thread aThread |
|  | private Object aPredicate |
|  | private Object hiddenObject |
|  | private String anotherString |
|  | private Exception internalException |
|  | private Stream secretStream |

## Example 3
| **Input** | **Output** |
| --- | --- |
| all | private int testInt |
| HARVEST | public double testDouble |
|  | protected String testString |
|  | private long testLong |
|  | protected double aDouble |
|  | public String aString |
|  | private Calendar aCalendar |
|  | public StringBuilder aBuilder |
|  | private char testChar |
|  | public short testShort |
|  | protected byte testByte |
|  | public byte aByte |
|  | protected StringBuilder aBuffer |
|  | private BigInteger testBigInt |
|  | protected BigInteger testBigNumber |
|  | protected float testFloat |
|  | public float aFloat |
|  | private Thread aThread |
|  | public Thread testThread |
|  | private Object aPredicate |
|  | protected Object testPredicate |
|  | public Object anObject |
|  | private Object hiddenObject |
|  | protected Object fatherMotherObject |
|  | private String anotherString |
|  | protected String moarString |
|  | public int anotherIntBitesTheDust |
|  | private Exception internalException |
|  | protected Exception inheritableException |
|  | public Exception justException |
|  | public Stream aStream |
|  | protected Stream moarStreamz |
|  | private Stream secretStream |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
protected
HARVEST
[/input]
[output]
protected String testString
protected double aDouble
protected byte testByte
protected StringBuilder aBuffer
protected BigInteger testBigNumber
protected float testFloat
protected Object testPredicate
protected Object fatherMotherObject
protected String moarString
protected Exception inheritableException
protected Stream moarStreamz
[/output]
[/test]
[test open]
[input]
private
public
private
HARVEST
[/input]
[output]
private int testInt
private long testLong
private Calendar aCalendar
private char testChar
private BigInteger testBigInt
private Thread aThread
private Object aPredicate
private Object hiddenObject
private String anotherString
private Exception internalException
private Stream secretStream
public double testDouble
public String aString
public StringBuilder aBuilder
public short testShort
public byte aByte
public float aFloat
public Thread testThread
public Object anObject
public int anotherIntBitesTheDust
public Exception justException
public Stream aStream
private int testInt
private long testLong
private Calendar aCalendar
private char testChar
private BigInteger testBigInt
private Thread aThread
private Object aPredicate
private Object hiddenObject
private String anotherString
private Exception internalException
private Stream secretStream
[/output]
[/test]
[test open]
[input]
all
HARVEST
[/input]
[output]
private int testInt
public double testDouble
protected String testString
private long testLong
protected double aDouble
public String aString
private Calendar aCalendar
public StringBuilder aBuilder
private char testChar
public short testShort
protected byte testByte
public byte aByte
protected StringBuilder aBuffer
private BigInteger testBigInt
protected BigInteger testBigNumber
protected float testFloat
public float aFloat
private Thread aThread
public Thread testThread
private Object aPredicate
protected Object testPredicate
public Object anObject
private Object hiddenObject
protected Object fatherMotherObject
private String anotherString
protected String moarString
public int anotherIntBitesTheDust
private Exception internalException
protected Exception inheritableException
public Exception justException
public Stream aStream
protected Stream moarStreamz
private Stream secretStream
[/output]
[/test]
[test]
[input]
private
HARVEST
[/input]
[output]
private int testInt
private long testLong
private Calendar aCalendar
private char testChar
private BigInteger testBigInt
private Thread aThread
private Object aPredicate
private Object hiddenObject
private String anotherString
private Exception internalException
private Stream secretStream
[/output]
[/test]
[test]
[input]
public
HARVEST
[/input]
[output]
public double testDouble
public String aString
public StringBuilder aBuilder
public short testShort
public byte aByte
public float aFloat
public Thread testThread
public Object anObject
public int anotherIntBitesTheDust
public Exception justException
public Stream aStream
[/output]
[/test]
[test]
[input]
private
protected
all
HARVEST
[/input]
[output]
private int testInt
private long testLong
private Calendar aCalendar
private char testChar
private BigInteger testBigInt
private Thread aThread
private Object aPredicate
private Object hiddenObject
private String anotherString
private Exception internalException
private Stream secretStream
protected String testString
protected double aDouble
protected byte testByte
protected StringBuilder aBuffer
protected BigInteger testBigNumber
protected float testFloat
protected Object testPredicate
protected Object fatherMotherObject
protected String moarString
protected Exception inheritableException
protected Stream moarStreamz
private int testInt
public double testDouble
protected String testString
private long testLong
protected double aDouble
public String aString
private Calendar aCalendar
public StringBuilder aBuilder
private char testChar
public short testShort
protected byte testByte
public byte aByte
protected StringBuilder aBuffer
private BigInteger testBigInt
protected BigInteger testBigNumber
protected float testFloat
public float aFloat
private Thread aThread
public Thread testThread
private Object aPredicate
protected Object testPredicate
public Object anObject
private Object hiddenObject
protected Object fatherMotherObject
private String anotherString
protected String moarString
public int anotherIntBitesTheDust
private Exception internalException
protected Exception inheritableException
public Exception justException
public Stream aStream
protected Stream moarStreamz
private Stream secretStream
[/output]
[/test]
[test]
[input]
protected
public
private
HARVEST
[/input]
[output]
protected String testString
protected double aDouble
protected byte testByte
protected StringBuilder aBuffer
protected BigInteger testBigNumber
protected float testFloat
protected Object testPredicate
protected Object fatherMotherObject
protected String moarString
protected Exception inheritableException
protected Stream moarStreamz
public double testDouble
public String aString
public StringBuilder aBuilder
public short testShort
public byte aByte
public float aFloat
public Thread testThread
public Object anObject
public int anotherIntBitesTheDust
public Exception justException
public Stream aStream
private int testInt
private long testLong
private Calendar aCalendar
private char testChar
private BigInteger testBigInt
private Thread aThread
private Object aPredicate
private Object hiddenObject
private String anotherString
private Exception internalException
private Stream secretStream
[/output]
[/test]
[test]
[input]
public
private
protected
all
HARVEST
[/input]
[output]
public double testDouble
public String aString
public StringBuilder aBuilder
public short testShort
public byte aByte
public float aFloat
public Thread testThread
public Object anObject
public int anotherIntBitesTheDust
public Exception justException
public Stream aStream
private int testInt
private long testLong
private Calendar aCalendar
private char testChar
private BigInteger testBigInt
private Thread aThread
private Object aPredicate
private Object hiddenObject
private String anotherString
private Exception internalException
private Stream secretStream
protected String testString
protected double aDouble
protected byte testByte
protected StringBuilder aBuffer
protected BigInteger testBigNumber
protected float testFloat
protected Object testPredicate
protected Object fatherMotherObject
protected String moarString
protected Exception inheritableException
protected Stream moarStreamz
private int testInt
public double testDouble
protected String testString
private long testLong
protected double aDouble
public String aString
private Calendar aCalendar
public StringBuilder aBuilder
private char testChar
public short testShort
protected byte testByte
public byte aByte
protected StringBuilder aBuffer
private BigInteger testBigInt
protected BigInteger testBigNumber
protected float testFloat
public float aFloat
private Thread aThread
public Thread testThread
private Object aPredicate
protected Object testPredicate
public Object anObject
private Object hiddenObject
protected Object fatherMotherObject
private String anotherString
protected String moarString
public int anotherIntBitesTheDust
private Exception internalException
protected Exception inheritableException
public Exception justException
public Stream aStream
protected Stream moarStreamz
private Stream secretStream
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Black Box Integer
[code-task title="Black Box Integer" taskId="oop-advanced-java-reflection-and-annotations-Black-Box-Integer" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Description

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/java-oop-advanced/Java-OOP-Advanced-Reflection-and-Annotations-blackBoxInteger.zip) **for this task.**

You want to help a buddy of yours who is still in the OOP Basics course.

He has made a class with all private members. 

Your tasks are to **instantiate** an object from his class (all with a start value of 0) and then **invoke** the different methods it has. 

Your should **not** change anything in the class itself. 

The class itself is called **BlackBoxInt**. 

It is a wrapper for the **int** primitive. 

The methods it has are:

```java
private void add (int addend) {
    this.innerValue += addend;
}

private void subtract(int subtrahend) {
    this.innerValue -= subtrahend;
}

private void multiply(int multiplier) {
    this.innerValue *= multiplier;
}

private void divide (int divider) {
    this.innerValue /= divider;
}

private void leftShift(int shifter) {
    this.innerValue <= shifter;
}

private void rightShift (int shifter) {
    this.innerValue >>= shifter;
}
```
## Input
The input will consist of lines in the form:

"\{**command name**\}_\{**value**\}"

Example: **add_115**

The input will always be applicale and in the described format, so there is no need to check it explicitly. 

You stop receiving input when you encounter the command: "**END**".
## Output
Each command (except the **END** one) should print the current value of **innerValue** of the **BlackBoxInt** object you instantiated. 

The goal is not to override the **toString** method in the class.

You shoudl get each value from the **private** field.

# Example
| **Input** | **Output** |
| --- | --- |
| add_999999 | 999999 |
| subtract_19 | 999980 |
| divide_4 | 249995 |
| multiply_2 | 499990 |
| rightShift_1 | 249995 |
| leftShift_3 | 1999960 |
| END |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
add_999999
subtract_19
divide_4
multiply_2
rightShift_1
leftShift_3
END
[/input]
[output]
999999
999980
249995
499990
249995
1999960
[/output]
[/test]
[test]
[input]
add_200
divide_5
leftShift_4
END
[/input]
[output]
200
40
640
[/output]
[/test]
[test]
[input]
multiply_1000
subtract_5
rightShift_3
END
[/input]
[output]
0
-5
-1
[/output]
[/test]
[test]
[input]
subtract_3000
add_556677
add_889915
rightShift_3
leftShift_3
END
[/input]
[output]
-3000
553677
1443592
180449
1443592
[/output]
[/test]
[test]
[input]
add_336688
multiply_55
multiply_2
divide_6
subtract_536489
rightShift_15
END
[/input]
[output]
336688
18517840
37035680
6172613
5636124
172
[/output]
[/test]
[test]
[input]
add_15
add_15
add_15
add_15
add_15
add_15
add_15
add_15
add_15
add_15
subtract_15
subtract_15
subtract_15
subtract_15
subtract_15
subtract_15
subtract_15
subtract_15
subtract_15
subtract_15
multiply_2
multiply_2
multiply_2
multiply_2
END
[/input]
[output]
15
30
45
60
75
90
105
120
135
150
135
120
105
90
75
60
45
30
15
0
0
0
0
0
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: BarracksWars - A New Factory
[code-task title="BarracksWars - A New Factory" taskId="oop-advanced-java-reflection-and-annotations-BarracksWars-A-New-Factory" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Description

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/java-oop-advanced/Java-OOP-Advanced-Reflection-and-Annotations-barracksWars.zip) **for this task.**

You are given a small console-based project called "Barracks". 

The project has two functionalities:
- Аdding new units to its repository
- Пrinting a report with statistics about the units currently in the repository

First, let us go over the original task before this project was created.

## Input
The input consists of multiple commands, each on a separate line. 

The possible commands are:
- **add** \{**Archer/Swordsman/Pikeman/**\{**…**\}\} - adds a unit to the repository
- **report** - prints a lexicological ordered statistic about the units in the repository
- **fight** - ends the input intake

## Output
Each command except **fight** should produce output.
- **add** should print: 

    "\{**Archer/Swordsman/Pikeman/**\{**…**\}\} **added!**"

- **report** should print all the information in the repository in the format: 

    "\{**UnitType**\} -\> \{**UnitQuantity**\}", sorted by UnitType

## Constraints
- The input will consist of no more than **1000** lines
- The **report** command will never be given before a valid **add** command is provided

## Your Task
You have to **study the code of the project and figure out how it works.**

There are parts of it that are not implemented (marked with "TODO"). 

You must implement the functionality of the **createUnit** method in the **UnitFactoryImpl** class so that it records a unit based on the unit type received as a parameter. 

Implement it in such a way that whenever you add a new unit, it can be created without the need to change anything in the **UnitFactoryImpl** class (hint - use reflection). 

You can use the approach known as: **Simple Factory**.

Add two new unit classes (there will be tests that require them) - **Horseman** with 50 health and 10 attack and **Gunner** with 20 health and 20 attack.

If you do everything correctly, you should add code only to the **factories** and **units** packages.


# Examples

## Example 1
| **Input** | **Output** |
| --- | --- |
| add Swordsman | Swordsman added! |
| add Archer | Archer added! |
| add Pikeman | Pikeman added! |
| report | Archer -> 1 |
| add Pikeman | Pikeman -> 1 |
| add Pikeman | Swordsman -> 1 |
| report | Pikeman added! |
| fight | Pikeman added! |
|  | Archer -> 1 |
|  | Pikeman -> 3 |
|  | Swordsman -> 1 |
|  |  |


## Example 2
| **Input** | **Output** |
| --- | --- |
| add Pikeman | Pikeman added! |
| add Pikeman | Pikeman added! |
| add Gunner | Gunner added! |
| add Horseman | Horseman added! |
| add Archer | Archer added! |
| add Gunner | Gunner added! |
| add Gunner | Gunner added! |
| add Horseman | Horseman added! |
| report | Archer -> 1 |
| fight | Gunner -> 3 |
|  | Horseman -> 2 |
|  | Pikeman -> 2 |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
add Swordsman
add Archer
add Pikeman
report
add Pikeman
add Pikeman
report
fight
[/input]
[output]
Swordsman added!
Archer added!
Pikeman added!
Archer -\> 1
Pikeman -\> 1
Swordsman -\> 1
Pikeman added!
Pikeman added!
Archer -\> 1
Pikeman -\> 3
Swordsman -\> 1
[/output]
[/test]
[test open]
[input]
add Pikeman
add Pikeman
add Gunner
add Horseman
add Archer
add Gunner
add Gunner
add Horseman
report
fight
[/input]
[output]
Pikeman added!
Pikeman added!
Gunner added!
Horseman added!
Archer added!
Gunner added!
Gunner added!
Horseman added!
Archer -\> 1
Gunner -\> 3
Horseman -\> 2
Pikeman -\> 2
[/output]
[/test]
[test]
[input]
add Horseman
report
add Horseman
report
add Pikeman
report
add Archer
add Archer
add Archer
report
fight
[/input]
[output]
Horseman added!
Horseman -\> 1
Horseman added!
Horseman -\> 2
Pikeman added!
Horseman -\> 2
Pikeman -\> 1
Archer added!
Archer added!
Archer added!
Archer -\> 3
Horseman -\> 2
Pikeman -\> 1
[/output]
[/test]
[test]
[input]
add Gunner
report
add Pikeman
add Gunner
add Pikeman
report
add Gunner
add Pikeman
add Gunner
add Pikeman
report
add Horseman
add Horseman
add Horseman
add Horseman
report
fight
[/input]
[output]
Gunner added!
Gunner -\> 1
Pikeman added!
Gunner added!
Pikeman added!
Gunner -\> 2
Pikeman -\> 2
Gunner added!
Pikeman added!
Gunner added!
Pikeman added!
Gunner -\> 4
Pikeman -\> 4
Horseman added!
Horseman added!
Horseman added!
Horseman added!
Gunner -\> 4
Horseman -\> 4
Pikeman -\> 4
[/output]
[/test]
[test]
[input]
add Archer
add Gunner
add Horseman
add Pikeman
add Swordsman
add Archer
add Gunner
add Horseman
add Pikeman
add Swordsman
add Archer
add Gunner
add Horseman
add Pikeman
add Swordsman
add Archer
add Gunner
add Horseman
add Pikeman
add Swordsman
add Archer
add Gunner
add Horseman
add Pikeman
add Swordsman
report
fight
[/input]
[output]
Archer added!
Gunner added!
Horseman added!
Pikeman added!
Swordsman added!
Archer added!
Gunner added!
Horseman added!
Pikeman added!
Swordsman added!
Archer added!
Gunner added!
Horseman added!
Pikeman added!
Swordsman added!
Archer added!
Gunner added!
Horseman added!
Pikeman added!
Swordsman added!
Archer added!
Gunner added!
Horseman added!
Pikeman added!
Swordsman added!
Archer -\> 5
Gunner -\> 5
Horseman -\> 5
Pikeman -\> 5
Swordsman -\> 5
[/output]
[/test]
[test]
[input]
add Swordsman
add Gunner
add Swordsman
report
add Swordsman
add Gunner
add Gunner
add Swordsman
add Swordsman
report
add Gunner
add Swordsman
add Swordsman
add Horseman
report
fight
[/input]
[output]
Swordsman added!
Gunner added!
Swordsman added!
Gunner -\> 1
Swordsman -\> 2
Swordsman added!
Gunner added!
Gunner added!
Swordsman added!
Swordsman added!
Gunner -\> 3
Swordsman -\> 5
Gunner added!
Swordsman added!
Swordsman added!
Horseman added!
Gunner -\> 4
Horseman -\> 1
Swordsman -\> 7
[/output]
[/test]
[test]
[input]
add Gunner
add Swordsman
add Horseman
report
add Archer
add Archer
add Archer
report
add Gunner
add Swordsman
add Horseman
report
add Archer
add Archer
add Archer
report
add Horseman
add Horseman
add Horseman
add Horseman
add Horseman
add Horseman
add Horseman
add Horseman
report
fight
[/input]
[output]
Gunner added!
Swordsman added!
Horseman added!
Gunner -\> 1
Horseman -\> 1
Swordsman -\> 1
Archer added!
Archer added!
Archer added!
Archer -\> 3
Gunner -\> 1
Horseman -\> 1
Swordsman -\> 1
Gunner added!
Swordsman added!
Horseman added!
Archer -\> 3
Gunner -\> 2
Horseman -\> 2
Swordsman -\> 2
Archer added!
Archer added!
Archer added!
Archer -\> 6
Gunner -\> 2
Horseman -\> 2
Swordsman -\> 2
Horseman added!
Horseman added!
Horseman added!
Horseman added!
Horseman added!
Horseman added!
Horseman added!
Horseman added!
Archer -\> 6
Gunner -\> 2
Horseman -\> 10
Swordsman -\> 2
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: BarracksWars - The Commands Strike Back
[code-task title="BarracksWars - The Commands Strike Back" taskId="oop-advanced-java-reflection-and-annotations-BarracksWars-The-Commands-Strike-Back" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Description
As you might have noticed, the commands in the project from **Problem 3** are implemented in a switch case with method calls in the **Engine** class. 

Although this approach works, it is flawed because you have to add a new case for each command. 

In some projects, you might not have access to the engine, and this would not work. 

If this project got outsourced the outsourcing firm might not have access to the Engine. 

Make it so whenever they want to add a new command they will not have to change anything in the **Engine**.

To do so, employ the [Command Pattern](https://www.baeldung.com/java-command-pattern).

Here is how the base (abstract) command should look like:

```java
public abstract class Command implements Executable {
    private String[] data;
    private Repository repository;
    private UnitFactory unitFactory;

    protected Command (String[] data,
                       Repository repository,
                       UnitFactory unitFactory) {
        this.data = data;
        this.repository repository;
        this.unitFactory = unitFactory;
    }

    protected Repository getRepository () {
        return repository;
    }

    protected UnitFactory getunitFactory () {
        return unitFactory;
    }

    protected String[] getData() {
        return data;
    }
}
```
Notice how all commands that extend this one will have both a **Repository** and a **UnitFactory**, although not all of them need these. 

We can allow this, because for reflection to work, we need all constructors to accept the same parameters. 

We will see how to go around this issue in **Problem 5.**

Once you have implemented the pattern, add a new command. 

It should have the following syntax:
- **retire** \{**UnitType**\} - All it does is **remove** a unit of the provided type from the repository
    - if there are no such units currently in the repository, print: "**No such units in repository.**"
    - if there is such a unit, print: "\{**UnitType**\} **retired!**"

To implement this command, you will also have to implement a corresponding method in the **UnitRepository.**

If you do everything correctly for this problem, you should write/refactor code only in the **core** and **data** packages.

# Example
| **Input** | **Output** |
| --- | --- |
| retire Archer | No such units in repository. |
| add Pikeman | Pikeman added! |
| add Pikeman | Pikeman added! |
| add Gunner | Gunner added! |
| add Horseman | Horseman added! |
| add Archer | Archer added! |
| add Gunner | Gunner added! |
| add Gunner | Gunner added! |
| add Horseman | Horseman added! |
| report | Archer -> 1 |
| retire Gunner | Gunner -> 3 |
| retire Archer | Horseman -> 2 |
| report | Pikeman -> 2 |
| retire Swordsman | Gunner retired! |
| retire Archer | Archer retired! |
| fight | Archer -> 0 |
|  | Gunner -> 2 |
|  | Horseman -> 2 |
|  | Pikeman -> 2 |
|  | No such units in repository. |
|  | No such units in repository. |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
retire Archer
add Pikeman
add Pikeman
add Gunner
add Horseman
add Archer
add Gunner
add Gunner
add Horseman
report
retire Gunner
retire Archer
report
retire Swordsman
retire Archer
fight
[/input]
[output]
No such units in repository.
Pikeman added!
Pikeman added!
Gunner added!
Horseman added!
Archer added!
Gunner added!
Gunner added!
Horseman added!
Archer -\> 1
Gunner -\> 3
Horseman -\> 2
Pikeman -\> 2
Gunner retired!
Archer retired!
Archer -\> 0
Gunner -\> 2
Horseman -\> 2
Pikeman -\> 2
No such units in repository.
No such units in repository.
[/output]
[/test]
[test]
[input]
retire Archer
retire Swordsman
retire Horseman
add Gunner
add Archer
retire Archer
retire Gunner
report
fight
[/input]
[output]
No such units in repository.
No such units in repository.
No such units in repository.
Gunner added!
Archer added!
Archer retired!
Gunner retired!
Archer -\> 0
Gunner -\> 0
[/output]
[/test]
[test]
[input]
add Pikeman
add Gunner
add Horseman
report
add Gunner
add Pikeman
retire Pikeman
retire Gunner
report
fight
[/input]
[output]
Pikeman added!
Gunner added!
Horseman added!
Gunner -\> 1
Horseman -\> 1
Pikeman -\> 1
Gunner added!
Pikeman added!
Pikeman retired!
Gunner retired!
Gunner -\> 1
Horseman -\> 1
Pikeman -\> 1
[/output]
[/test]
[test]
[input]
add Horseman
add Horseman
add Horseman
add Horseman
report
retire Gunner
retire Pikeman
retire Horseman
report
add Horseman
add Archer
add Horseman
add Archer
add Horseman
add Archer
report
retire Archer
fight
[/input]
[output]
Horseman added!
Horseman added!
Horseman added!
Horseman added!
Horseman -\> 4
No such units in repository.
No such units in repository.
Horseman retired!
Horseman -\> 3
Horseman added!
Archer added!
Horseman added!
Archer added!
Horseman added!
Archer added!
Archer -\> 3
Horseman -\> 6
Archer retired!
[/output]
[/test]
[test]
[input]
add Swordsman
add Swordsman
retire Swordsman
retire Archer
add Archer
retire Archer
report
add Horseman
add Horseman
add Horseman
retire Swordsman
retire Horseman
add Swordsman
retire Swordsman
report
fight
[/input]
[output]
Swordsman added!
Swordsman added!
Swordsman retired!
No such units in repository.
Archer added!
Archer retired!
Archer -\> 0
Swordsman -\> 1
Horseman added!
Horseman added!
Horseman added!
Swordsman retired!
Horseman retired!
Swordsman added!
Swordsman retired!
Archer -\> 0
Horseman -\> 2
Swordsman -\> 0
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: BarracksWars - Return of the Dependencies
[code-task title="BarracksWars - Return of the Dependencies" taskId="oop-advanced-java-reflection-and-annotations-BarracksWars-Return-of-the-Dependencies" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Description
In the final part of this epic problem trilogy, we will resolve the issue where all Commands receive all utility classes as parameters in their constructors. 

We can accomplish this by using an approach called **dependency injection container**. 

This approach is used in many frameworks, like **Spring** - for instance.

We will do a little twist on that approach. 

Remove all fields from the abstract command except the **data**. 

Instead, put any fields each command needs in the concrete class. 

Create an annotation called **Inject** and make it usable only on fields. 

Put the annotation over the fields we need to set through reflection. 

Once you have prepared this, add the necessary reflection code in the **Command Interpreter** (which you should have refactored out from the engine in **Problem 4**).

Use the tests from Problem 4 to test your solution.

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
retire Archer
add Pikeman
add Pikeman
add Gunner
add Horseman
add Archer
add Gunner
add Gunner
add Horseman
report
retire Gunner
retire Archer
report
retire Swordsman
retire Archer
fight
[/input]
[output]
No such units in repository.
Pikeman added!
Pikeman added!
Gunner added!
Horseman added!
Archer added!
Gunner added!
Gunner added!
Horseman added!
Archer -\> 1
Gunner -\> 3
Horseman -\> 2
Pikeman -\> 2
Gunner retired!
Archer retired!
Archer -\> 0
Gunner -\> 2
Horseman -\> 2
Pikeman -\> 2
No such units in repository.
No such units in repository.
[/output]
[/test]
[test]
[input]
retire Archer
retire Swordsman
retire Horseman
add Gunner
add Archer
retire Archer
retire Gunner
report
fight
[/input]
[output]
No such units in repository.
No such units in repository.
No such units in repository.
Gunner added!
Archer added!
Archer retired!
Gunner retired!
Archer -\> 0
Gunner -\> 0
[/output]
[/test]
[test]
[input]
add Pikeman
add Gunner
add Horseman
report
add Gunner
add Pikeman
retire Pikeman
retire Gunner
report
fight
[/input]
[output]
Pikeman added!
Gunner added!
Horseman added!
Gunner -\> 1
Horseman -\> 1
Pikeman -\> 1
Gunner added!
Pikeman added!
Pikeman retired!
Gunner retired!
Gunner -\> 1
Horseman -\> 1
Pikeman -\> 1
[/output]
[/test]
[test]
[input]
add Horseman
add Horseman
add Horseman
add Horseman
report
retire Gunner
retire Pikeman
retire Horseman
report
add Horseman
add Archer
add Horseman
add Archer
add Horseman
add Archer
report
retire Archer
fight
[/input]
[output]
Horseman added!
Horseman added!
Horseman added!
Horseman added!
Horseman -\> 4
No such units in repository.
No such units in repository.
Horseman retired!
Horseman -\> 3
Horseman added!
Archer added!
Horseman added!
Archer added!
Horseman added!
Archer added!
Archer -\> 3
Horseman -\> 6
Archer retired!
[/output]
[/test]
[test]
[input]
add Swordsman
add Swordsman
retire Swordsman
retire Archer
add Archer
retire Archer
report
add Horseman
add Horseman
add Horseman
retire Swordsman
retire Horseman
add Swordsman
retire Swordsman
report
fight
[/input]
[output]
Swordsman added!
Swordsman added!
Swordsman retired!
No such units in repository.
Archer added!
Archer retired!
Archer -\> 0
Swordsman -\> 1
Horseman added!
Horseman added!
Horseman added!
Swordsman retired!
Horseman retired!
Swordsman added!
Swordsman retired!
Archer -\> 0
Horseman -\> 2
Swordsman -\> 0
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
