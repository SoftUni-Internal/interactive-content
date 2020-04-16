# Characters and Strings

[slide]
# Character Type
The char data type is used to store a **single** character. The character must be surrounded by single quotes, like `'A'` or `'c'`.

```java live
char myGrade = 'B';
System.out.println(myGrade);
```

The character also:
* Gives each symbol a corresponding integer code.
* Has a `\0` default value.
* Takes 16 bits of memory \(from **U+0000** to **U+FFFF**\).
* Holds a single Unicode character \(or part of character\).

```java live
char ch = 'a';
System.out.printf("The code of '%c' is: %d%n", ch, (int) ch);

ch = 'b';
System.out.printf("The code of '%c' is: %d%n", ch, (int) ch);

ch = 'A';
System.out.printf("The code of '%c' is: %d%n", ch, (int) ch);
```
[/slide]

[slide]
# Problem: Reversed Chars
[code-task title="Problem: Reversed Chars" taskId="java-fundamentals-Data-Types-and-Variables-06" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
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
Write a program that takes 3 lines of characters and prints them in reversed order with a space between them.

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
$
%
$
[/input]
[output]
$ % $
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


[slide]
# Solution: Reversed Chars
[code-task title="Problem: Reversed Chars" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class ReversedChars {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String result = "";
        for (int i = 0; i < 3; i++) {
            char input = sc.nextLine().charAt(0);
            result += input;
        }
        for (int i = result.length() - 1; i >= 0; i--) {
            System.out.printf("%s ", result.charAt(i));
        }
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program that takes 3 lines of characters and prints them in reversed order with a space between them.

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
$
%
$
[/input]
[output]
$ % $
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

[slide]
# Escaping Characters
Because strings must be written within quotes, Java will misunderstand this string, and generate an error:

```java
String txt = "We are the so-called "Vikings" from the north.";
```

The solution to avoid this problem, is to use the backslash escape character.

The backslash \(\\\) escape character turns special characters into string characters:
|**Escape character**|**Result**| **Description** |
|-----|------| ------|
|\\' | ' | Single quote |
|\\" | " | Double quote |
|\\\ | 	\\ | Backslash |

The sequence `\"` inserts a double quote in a string:

```java live
String txt = "We are the so-called \"Vikings\" from the north.";
System.out.println(txt);
```

The sequence `\'` inserts a single quote in a string:
```java live
String txt = "It\'s alright.";
System.out.println(txt);
```

The sequence `\\`  inserts a single backslash in a string:

```java live
String txt = "The character \\ is called backslash.";
System.out.println(txt);
```
[/slide]

[slide]
# Strings
Strings are used for storing text.

A **String** variable contains a collection of characters surrounded by double quotes and has a default value **null** (no value).

* Example
Create a variable of type **String** and assign it a value:

```Java live
String greeting = "Hello";
System.out.println(greeting);
```

## String Concatenation
The `+` operator can be used between strings to combine them. This is called concatenation:

```Java live
String firstName = "John";
String lastName = "Doe";
System.out.println(firstName + " " + lastName);
```
* Note that we have added an empty text `(" ")` to create a space between firstName and lastName on print.

## Format strings insert variable values by pattern

```Java live
String firstName = "John";
String lastName = "Smith";
String fullName = String.format("%s %s", firstName, lastName);
System.out.println(fullName);
```

## Combining the names of a person to obtain the full name

```Java live
String firstName = "John";
String lastName = "Smith";
String fullName = String.format("%s %s", firstName, lastName);
System.out.printf("Your full name is %s.", fullName);
```
[/slide]

[slide]
# Problem: Concat Names
[code-task title="Problem: Concat Names" taskId="java-fundamentals-Data-Types-and-Variables-07" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Read two names and a delimiter.

Print the names joined by the delimiter.

## Examples
|**Input**|**Output**|
|-----|------|
| John | John->Smith |
| Smith | |
| -> | |

## Examples
|**Input**|**Output**|
|-----|------|
| Jan | Jan<->White |
| White | |
| <-> | |

## Examples
|**Input**|**Output**|
|-----|------|
| Linda | Linda=>Terry |
| Terry | |
| => | |

[/task-description]
[code-io /]
[tests]
[test]
[input]
John
Smith
->
[/input]
[output]
John->Smith
[/output]
[/test]
[test]
[input]
Jan
White
<->

[/input]
[output]
Jan<->White
[/output]
[/test]
[test]
[input]
Linda
Terry
=>

[/input]
[output]
Linda=>Terry
[/output]
[/test]
[test]
[input]
a
b
{}
[/input]
[output]
a{}b
[/output]
[/test]
[test]
[input]
a
a
!
[/input]
[output]
a!a
[/output]
[/test]
[test]
[input]
x
y
**
[/input]
[output]
x**y
[/output]
[/test]
[test]
[input]
abc
def
&
[/input]
[output]
abc&def
[/output]
[/test]
[test]
[input]
abc
123
-->
[/input]
[output]
abc-->123
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Solution: Concat Names
[code-task title="Problem: Concat Names" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class ConcatNames {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String firstName = scanner.nextLine();
        String lastName = scanner.nextLine();
        String deliminter = scanner.nextLine();

        String result = firstName + deliminter + lastName;
        System.out.println(result);
    }
}
```
[/code-editor]
[task-description]
## Description
Read two names and a delimiter.

Print the names joined by the delimiter.

## Examples
|**Input**|**Output**|
|-----|------|
| John | John->Smith |
| Smith | |
| -> | |

## Examples
|**Input**|**Output**|
|-----|------|
| Jan | Jan<->White |
| White | |
| <-> | |

## Examples
|**Input**|**Output**|
|-----|------|
| Linda | Linda=>Terry |
| Terry | |
| => | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
John
Smith
->
[/input]
[output]
John->Smith
[/output]
[/test]
[test open]
[input]
Jan
White
<->

[/input]
[output]
Jan<->White
[/output]
[/test]
[test open]
[input]
Linda
Terry
=>

[/input]
[output]
Linda=>Terry
[/output]
[/test]
[test]
[input]
a
b
{}
[/input]
[output]
a{}b
[/output]
[/test]
[test]
[input]
a
a
!
[/input]
[output]
a!a
[/output]
[/test]
[test]
[input]
x
y
**
[/input]
[output]
x**y
[/output]
[/test]
[test]
[input]
abc
def
&
[/input]
[output]
abc&def
[/output]
[/test]
[test]
[input]
abc
123
-->
[/input]
[output]
abc-->123
[/output]
[/test]
[/tests]
[/code-task]
[/slide]