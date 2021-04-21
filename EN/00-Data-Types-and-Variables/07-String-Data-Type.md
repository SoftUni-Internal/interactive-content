# String

[slide hideTitle]

# The String Data Type

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/EN/interactive-java-fundamentals-data-types-and-variables-45-48-string-data-type-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Strings are used to store text.

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

Here is how we can combine the first and last names of a person and print out their full name.

```Java live
String firstName = "John";
String lastName = "Smith";
String fullName = String.format("%s %s", firstName, lastName);
System.out.printf("Your full name is %s.", fullName);
```
## String Concatenation

The `+` operator can be used to combine two strings. This is called concatenation:

```Java live
String firstName = "John";
String lastName = "Doe";
System.out.println(firstName + " " + lastName);
```

Note that we have added an empty space `(" ")` between the **firstName** and **lastName** when printing.

[/slide]

[slide hideTitle]
# Problem with Solution: Concat Names

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/EN/interactive-java-fundamentals-data-types-and-variables-49-problem-and-solution-concat-names-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Concat Names" taskId="java-fund-1-data-types-lab-concat-names" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Print the names joined by the delimiter to the console.

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
[test]
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
