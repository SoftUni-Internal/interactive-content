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
# Homework Results
[tasks-results/]

[/slide]