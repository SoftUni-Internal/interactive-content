# Strings

[slide]
# Video

[vimeo-video startTimeInSeconds="2221" endTimeInSeconds="2422"]
[stream language="EN" videoId="425081520" default /]
[stream language="RO" videoId="425084744"  /]
[/vimeo-video]

[/slide]

[slide]
# Strings
Strings are used for storing text.

A **String** variable contains a collection of characters surrounded by double quotes and has a default value **null** (no value).

- Example:
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

[slide hideTitle]
# Problem: Concat Names
[code-task title="Problem: Concat Names" taskId="java-fund-04-Data-Types-problem-16" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
| **Input** | **Output** |
| --- | --- |
| John | John->Smith |
| Smith | |
| -> | |

| **Input** | **Output** |
| --- | --- |
| Jan | Jan<->White |
| White | |
| <-> | |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
John
Smith
-\>
[/input]
[output]
John-\>Smith
[/output]
[/test]
[test open]
[input]
Jan
White
\<-\>

[/input]
[output]
Jan\<-\>White
[/output]
[/test]
[test open]
[input]
Linda
Terry
=\>

[/input]
[output]
Linda=\>Terry
[/output]
[/test]
[test]
[input]
a
b
\{\}
[/input]
[output]
a\{\}b
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
\*\*
[/input]
[output]
x\*\*y
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
--\>
[/input]
[output]
abc--\>123
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Solution: Concat Names
[code-task title="Problem: Concat Names" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
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
| **Input** | **Output** |
| --- | --- |
| John | John->Smith |
| Smith | |
| -> | |

| **Input** | **Output** |
| --- | --- |
| Jan | Jan<->White |
| White | |
| <-> | |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
John
Smith
-\>
[/input]
[output]
John-\>Smith
[/output]
[/test]
[test open]
[input]
Jan
White
\<-\>

[/input]
[output]
Jan\<-\>White
[/output]
[/test]
[test open]
[input]
Linda
Terry
=\>

[/input]
[output]
Linda=\>Terry
[/output]
[/test]
[test]
[input]
a
b
\{\}
[/input]
[output]
a\{\}b
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
\*\*
[/input]
[output]
x\*\*y
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
--\>
[/input]
[output]
abc--\>123
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
