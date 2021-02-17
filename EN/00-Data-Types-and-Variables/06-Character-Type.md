# Character Type

[slide hideTitle]

# The Character Data Type

The char data type stores a **single** character. The character must be surrounded by single quotes, like `'A'` or `'c'`.

```java live
char myGrade = 'B';
System.out.println(myGrade);
```

The character data type also:

- Assigns each symbol a corresponding integer code

- Has a default value of `\0`

- Takes up 16 bits of memory \(from **U+0000** to **U+FFFF**\)

- Holds a single Unicode character \(or part of a character\)

```java live
char ch = 'a';
System.out.printf("The code of '%c' is: %d%n", ch, (int) ch);

ch = 'b';
System.out.printf("The code of '%c' is: %d%n", ch, (int) ch);

ch = 'A';
System.out.printf("The code of '%c' is: %d%n", ch, (int) ch);
```
In the example above, we convert each character to its **ASCII** representation. 

The **ASCII** is an acronym for the **American Standard Code for Information Interchange**.

It is a code for representing 128 English characters as numbers, with each letter assigned a number from 0 to 127. 

We encourage you to do some research on the ASCII table!

## Characters and Unicode

There is an integer value behind each character. 

This value corresponds to a letter in the Unicode table.

```java live
char ch = 'a';
System.out.printf("'%c' is: %d%n", ch, (int) ch);
ch = 'b';
System.out.printf("'%c' is: %d%n", ch, (int) ch);
ch = 'A';
System.out.printf("'%c' is: %d%n", ch, (int) ch);
ch = 'щ'; 
System.out.printf("'%c' is: %d%n", ch, (int) ch);
```

The Unicode table is separated into different parts and almost all living languages are represented in it.

[/slide]


[slide hideTitle]
# Problem with Solution: Reversed Chars
[code-task title="Reversed Chars" taskId="java-fund-data-types-lab-reversed-chars" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program that accepts an input of 3 lines of characters and prints them in reversed order with a space between them.

## Examples
|**Input**|**Output**|
|-----|------|
| A | C B A |
| B |  |
| C |  |

|**Input**|**Output**|
|-----|------|
| 1 | & L 1 |
| L |  |
| & |  |
 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
A
B
C

[/input]
[output]
C B A
[/output]
[/test]
[test open]
[input]
1
L
&

[/input]
[output]
& L 1
[/output]
[/test]
[test]
[input]
1
2
3
[/input]
[output]
3 2 1
[/output]
[/test]
[test]
[input]
A
A
A
[/input]
[output]
A A A
[/output]
[/test]
[test]
[input]
X
a
1
[/input]
[output]
1 a X
[/output]
[/test]
[test]
[input]
(
0
)
[/input]
[output]
) 0 (
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

[slide hideTitle]
# Escaping Characters
Every programming language, including Java, has some reserved characters that cannot be used directly. 

An example of this is the double quotes in strings that should be escaped.

```Java
String txt = "We are the so-called "Vikings" from the north.";
```

To bypass this, we append a backslash** \(\\\)**, that is used as an escape character.

The backslash \(\\\) escape character turns special characters into string characters:

**Escape characters**:

|Escape Sequence |Character| Description
|-----|--------|--------|
|\\'|**'**       |Single quote|
|\\"  |**''**      |Double quote|
|\\\  |**\\**     |Backslash|


The `\"` sequence inserts a double quote into a string:

```Java live
String txt = "We are the so-called \"Vikings\" from the north.";
System.out.println(txt);
```

The `\'` sequence inserts a single quote in a string:

```Java live
String txt = "It\'s alright.";
System.out.println(txt);
```

The `\\` sequence inserts a single backslash in a string:

```Java live
String txt = "The character \\ is called backslash.";
System.out.println(txt);
```

[/slide]

[slide hideTitle]
# Character Literals

Character literals are all the character expressions that are embedded in Java. 

```java
char symbol = 'a'; // An ordinary character
symbol = '\u006F'; // Unicode character code in a
symbol = `4F`; // hexadecimal format (letter 'o')
symbol = '\u8449'; // 葉 (Leaf in Traditional Chinese)
symbol = '\''; // Assigning the single quote character
symbol = '\\'; // Assigning the backslash character
symbol = '\n'; // Assigning new line character
symbol = '\t'; // Assigning TAB character
symbol = "a";  // Incorrect: use single quotes!
```

[/slide]
