# Homework 

[slide hideTitle]
# Problem: Harvesting Fields
[code-task title="Problem: Harvesting Fields" taskId="805c81f4-d482-4afb-94fa-c9e47c18ff24" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You are given a **RichSoilLand** class with lots of fields. 

Download skeleton [here](https://mega.nz/file/WZpyWaIb#Ynu0xByYsMp9COr7EwkKo4Xp04-X9Y7VNBY4WH3CSYs).

Like the good farmer you are, you must harvest them. 

Harvesting means that you must print each **field** in a certain format (see output).

## Input
You will receive a maximum of 100 lines with one of the following commands:
- **private** - print all private fields
- **protected** - print all protected fields
- **public** - print all public fields
- **all** - print ALL declared fields
- **HARVEST** - end the input

## Output
For each command you must print the **fields** that have the **given access modifier** as described in the input section. 

The format in which the fields should be printed is:

"**{access modifier} {field type} {field name}**"


## Examples
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
|  |  |

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
|  |  |

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
[code-io /]
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

[slide]
# Problem: Black Box Integer
[code-task title="Problem: Black Box Integer" taskId="d57619b4-cea9-4301-90ed-6830ddc952d5" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Download resources [here](https://mega.nz/file/2BgwhSIY#4UZLrzaBZTZIidTq2J5ejPPVd4rKdMwcfKYdB_Hd38s).

You are helping a buddy of yours who is still in the OOP Basics course.

He is rather slow and made a class with all private members. 

Your tasks are to **instantiate** an object from his class (always with start value 0) and then **invoke** the different methods it has. 

Your restriction is to **not** change anything in the class itself (consider it a black box). 

You can look at his class but don't touch anything! 

The class itself is called **BlackBoxInt**. It is a wrapper for the **int** primitive. 

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

**"{command name}_{value}"**

Example: **add_115**

Input will always be valid and in the format described, so there is no need to check it explicitly. 

You stop receiving input when you encounter the command "**END**".
## Output
Each command (except the **END** one) should print the current value of **innerValue** of the **BlackBoxInt** object you instantiated. 

**Don't cheat** by overriding **toString** in the class - you must get the value from the **private** field.

## Examples
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
[code-io /]
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

[slide]
# Homework Results
[tasks-results/]

[/slide]