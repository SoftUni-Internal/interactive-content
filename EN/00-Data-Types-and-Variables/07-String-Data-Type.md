# String Type
[slide hideTitle]
# The String Data Type

Strings are used for storing text.

A **String** variable contains a collection of characters surrounded by double quotes and has a default value of **null** (no value).


Creating a variable of type **String** and assigning a value to it:

```Java live
String greeting = "Hello";
System.out.println(greeting);
```

## String Formatting

```Java live
String secret = "loves metal music";
String name = "Tom";
String secretRevealed = String.format("%s has a secret, he %s.", name, secret);
System.out.println(secretRevealed);
```

You can use `String.format` to insert the values of string variables into another string.

## Example: Saying Hello

Here is how we can combine the first and last names of a person to print their full name.

```Java live
String firstName = "John";
String lastName = "Smith";
String fullName = String.format("%s %s", firstName, lastName);
System.out.printf("Your full name is %s.", fullName);
```
## String Concatenation

The `+` operator can be used to combine two strings together. This is called concatenation:

```Java live
String firstName = "John";
String lastName = "Doe";
System.out.println(firstName + " " + lastName);
```

Note that we have added an empty text `(" ")` to create a space between firstName and lastName on print.

[/slide]

[slide hideTitle]
# Problem with Solution: Concat Names
[code-task title="Concat Names" taskId="java-fund-data-types-lab-concat-names" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
