# Manipulating Strings

[slide hideTitle]
# Concatenating

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/03.Java-Fundamentals-Text-Processing/EN/interactive-java-fundamentals-text-processing-7-8-manipulate-strings-concatenating-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

There are **two** ways to concatenate a `String`:

- Using the `+` or the `+=` operators

```java live
String text = "Hello" + ", " + "SoftUni";

text += "!";

System.out.println(text); // "Hello, SoftUni!"
```

- Using the `concat()` method

```java live
String greet = "Hello, ";

String name = "SoftUni!";

String result = greet.concat(name);

System.out.println(result); // "Hello, SoftUni!"
```

[/slide]

[slide hideTitle]

# Joining Strings

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/03.Java-Fundamentals-Text-Processing/EN/interactive-java-fundamentals-text-processing-9-joining-strings-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The Java `String.join(delimiter, elementsToJoin)` method is one of the many ways to concatenate Strings. 

The method requires a delimiter to separate the strings by but if you want to concatenate without separating the elements in any way, you can use **""** as a delimiter.

Here are two examples of `String.join()` used in different situations.

Joining several strings together, separated by a comma.

```java live
String sentence = String.join(",", "testing", "one", "two");

System.out.println(sentence);

```

Concatenating all the elements in an array by specifying a delimiter (separator). The delimiter in this example is a space **" "**:

```java live
String[] arr = {"This", "is", "a", "String", "array!"};

System.out.println(String.join(" ", arr));
```

You can use `String.join()` with any Iterable collection such as List, Array, Set, Queue, Stack.


[/slide]


[slide hideTitle]
# Problem with Solution: Repeat strings

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/03.Java-Fundamentals-Text-Processing/EN/interactive-java-fundamentals-text-processing-10-problem-and-solution-repeat-strings-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Repeat strings" taskId="Java-Fundamentals-2-String-Processing-lab-Repeat-Strings" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program that reads an **array of strings**.

Each string should be repeated **n** times, where **n** is the **length of the string**.

Print out the result.

## Examples
| **Input** | **Output** |
| --- | --- |
| hi abc add | hihiabcabcabcaddaddadd |
| work | workworkworkwork |
| ball | ballballballball |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
hi abc add
[/input]
[output]
hihiabcabcabcaddaddadd
[/output]
[/test]
[test open]
[input]
work
[/input]
[output]
workworkworkwork
[/output]
[/test]
[test open]
[input]
ball
[/input]
[output]
ballballballball
[/output]
[/test]
[test]
[input]
spot exempt
[/input]
[output]
spotspotspotspotexemptexemptexemptexemptexemptexempt
[/output]
[/test]
[test]
[input]
church lamp pier
[/input]
[output]
churchchurchchurchchurchchurchchurchlamplamplamplamppierpierpierpier
[/output]
[/test]
[test]
[input]
peace glide
[/input]
[output]
peacepeacepeacepeacepeaceglideglideglideglideglide
[/output]
[/test]
[test]
[input]
headquarters baseball
[/input]
[output]
headquartersheadquartersheadquartersheadquartersheadquartersheadquartersheadquartersheadquartersheadquartersheadquartersheadquartersheadquartersbaseballbaseballbaseballbaseballbaseballbaseballbaseballbaseball
[/output]
[/test]
[test]
[input]
linear
[/input]
[output]
linearlinearlinearlinearlinearlinear
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Substring

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/03.Java-Fundamentals-Text-Processing/EN/interactive-java-fundamentals-text-processing-13-substring-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

As the name suggests, `substring` extracts only a **part** of a given `String`.

`substring(int startIndex)` - returns a **new String** containing the substring of the given string, starting from the specified **startIndex** (**inclusive**) to the end of the string

```java live
String text = "My name is John";

String extractWord = text.substring(11);

System.out.println(extractWord); // John
```

`substring(int startIndex, int endIndex)` - returns a **new String** containing the substring of the given string, starting from the specified **startIndex** (inclusive) to the **endIndex** (exclusive)

```java live
String fullName = "John Doe";

String firstName = fullName.substring(0, 4);

System.out.println(firstName); // John
```

[/slide]

[slide hideTitle]

# Searching

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/03.Java-Fundamentals-Text-Processing/EN/interactive-java-fundamentals-text-processing-14-15-searching-1-2-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

It is possible to search for the first or the last occurrence of a pattern in a string:

`indexOf()` - returns **the position of the first occurrence** of the specified character(s), or **-1** if the character(s) does not occur

```java live 
String fruits = "banana, apple, kiwi, banana, apple";

System.out.println(fruits.indexOf("banana"));    // 0

System.out.println(fruits.indexOf("orange"));    // -1
```

`lastIndexOf()` - returns **the position of the last occurrence** of the specified character(s), or **-1** if the character(s) does not occur

```java live
String fruits = "banana, apple, kiwi, banana, apple";

System.out.println(fruits.lastIndexOf("banana")); // 21

System.out.println(fruits.lastIndexOf("orange")); // -1
```

[/slide]

[slide hideTitle]
# Problem with Solution: Substring

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/03.Java-Fundamentals-Text-Processing/EN/interactive-java-fundamentals-text-processing-16-problem-and-solution-substring-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Substring" taskId="Java-Fundamentals-2-String-Processing-lab-Substring" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
On the **first line**, you will receive a **string**.

On the **second line**, you will receive another **string**.

Create a program that **removes all of the occurrences** of the first string in the second one, until there are no more matches.

Print out the remaining string.

## Examples
| **Input** | **Output** |
| --- | --- |
| ice | kgb |
| kicegiciceeb |  |

[hints]
[hint]
Read the input.

Find the **first index** where the key (the first string) appears. 
Use the built-in method `indexOf()`
[/hint] 
[hint]
**Remove the matching substring.**
Use the built-in method `replace(String oldValue, String newValue)`
[/hint] 
[hint]
**Repeat** that operation until the text **does not contain the specified key anymore**.
[/hint] 
[/hints] 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
ice
kicegiciceeb
[/input]
[output]
kgb
[/output]
[/test]
[test]
[input]
e
fixture
[/input]
[output]
fixtur
[/output]
[/test]
[test]
[input]
f
coffin
[/input]
[output]
coin
[/output]
[/test]
[test]
[input]
in
coffiinncoffin
[/input]
[output]
coffcoff
[/output]
[/test]
[test]
[input]
ice
pricekicegiciceeb
[/input]
[output]
prkgb
[/output]
[/test]
[test]
[input]
reg
rrregegegstration
[/input]
[output]
stration
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Splitting

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/03.Java-Fundamentals-Text-Processing/EN/interactive-java-fundamentals-text-processing-18-splitting-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A `String` could be split by **one** or by **multiple** criteria, using the `split()` method.
 
- Splitting a string by a given **regular expression**

```java live
String text
 = "I had coffee, pancakes, berries and a banana for breakfast.";
String[] words = text.split(", ");

System.out.println(words[0]);
System.out.println(words[1]);
System.out.println(words[2]);
```

- Splitting a string by **multiple delimiters**

```java live

String text = "Hello, I am John.";

// splits text by comma, whitespace or dot
String[] words = text.split("[, .]+");

System.out.println(String.join(", ",words));
```

[/slide]

[slide hideTitle]

# Replacing

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/03.Java-Fundamentals-Text-Processing/EN/interactive-java-fundamentals-text-processing-19-replacing-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In Java, it is possible to make **replacements** in a String.

- `replace(match, replacement)` - **Replaces all occurrences** of the given character(s) and returns a **new String**

```java live
String text = "I have three bananas, three oranges, three apples.";

String replacedText = text.replace("three", "five");

System.out.println(replacedText);
```

[/slide]

[slide hideTitle]
# Problem with Solution: Text Filter

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/03.Java-Fundamentals-Text-Processing/EN/interactive-java-fundamentals-text-processing-20-problem-and-solution-text-filter-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Text Filter" taskId="Java-Fundamentals-2-String-Processing-lab-Text-Filter" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program that receives a **text** and a **string of banned words**.

**All words included in the ban list** should be replaced with **asterisk symbols** \"__\*__\". 

The count of the asterisk symbols should be equal to the **length of the word**.

The entries in the ban list will be separated by a **comma** and **space** ", ".

## Examples
| **Input** | **Output** |
| --- | --- |
| Linux, Windows | It is not \*\*\*\*\*, it is GNU/\*\*\*\*\*. \*\*\*\*\* is merely the kernel, while GNU adds the functionality. Therefore we owe it to them by calling the OS GNU/\*\*\*\*\*! Sincerely, a \*\*\*\*\*\*\* client |
| It is not Linux, it is GNU/Linux. Linux is merely the kernel, while GNU adds the functionality. Therefore we owe it to them by calling the OS GNU/Linux! Sincerely, a Windows client |  |


[hints]
[hint]
Read the input.

**Replace all banned words** in the text with **asterisk symbols**. 
Use the built-in method: `replace(banWord, replacement)`
[/hint]  
[/hints] 


[/task-description]
[code-io /]
[tests]
[test open]
[input]
Linux, Windows
It is not Linux, it is GNU/Linux. Linux is merely the kernel, while GNU adds the functionality. Therefore we owe it to them by calling the OS GNU/Linux! Sincerely, a Windows client
[/input]
[output]
It is not \*\*\*\*\*, it is GNU/\*\*\*\*\*. \*\*\*\*\* is merely the kernel, while GNU adds the functionality. Therefore we owe it to them by calling the OS GNU/\*\*\*\*\*! Sincerely, a \*\*\*\*\*\*\* client
[/output]
[/test]
[test]
[input]
framework, structure, something
In general, a framework is a real or conceptual structure intended to serve as a support or guide for the building of something that expands the structure into something useful.
[/input]
[output]
In general, a \*\*\*\*\*\*\*\*\* is a real or conceptual \*\*\*\*\*\*\*\*\* intended to serve as a support or guide for the building of \*\*\*\*\*\*\*\*\* that expands the \*\*\*\*\*\*\*\*\* into \*\*\*\*\*\*\*\*\* useful.
[/output]
[/test]
[test]
[input]
computer, programming, set
In computer programming, an application programming interface (API) is a set of subroutine definitions, communication protocols, and tools for building software.
[/input]
[output]
In \*\*\*\*\*\*\*\* \*\*\*\*\*\*\*\*\*\*\*, an application \*\*\*\*\*\*\*\*\*\*\* interface (API) is a \*\*\* of subroutine definitions, communication protocols, and tools for building software.
[/output]
[/test]
[test]
[input]
view, engine
View engine gives the ability to render the HTML from your view to the browser. There are many view engines supported by ASP.NET MVC but the most widely used view engines are. Web form / ASPX view engine. Razor view engine.
[/input]
[output]
View \*\*\*\*\*\* gives the ability to render the HTML from your \*\*\*\* to the browser. There are many \*\*\*\* \*\*\*\*\*\*s supported by ASP.NET MVC but the most widely used \*\*\*\* \*\*\*\*\*\*s are. Web form / ASPX \*\*\*\* \*\*\*\*\*\*. Razor \*\*\*\* \*\*\*\*\*\*.
[/output]
[/test]
[test]
[input]
Controller, interface
Model View Controller (MVC) is a software architecture pattern, commonly used to implement user interfaces.
[/input]
[output]
Model View \*\*\*\*\*\*\*\*\*\* (MVC) is a software architecture pattern, commonly used to implement user \*\*\*\*\*\*\*\*\*s.
[/output]
[/test]
[test]
[input]
object, programming
object-relational mapping (ORM, O/RM, and O/R mapping tool) in computer science is a programming technique for converting data between incompatible type systems using object-oriented programming languages.
[/input]
[output]
\*\*\*\*\*\*-relational mapping (ORM, O/RM, and O/R mapping tool) in computer science is a \*\*\*\*\*\*\*\*\*\*\* technique for converting data between incompatible type systems using \*\*\*\*\*\*-oriented \*\*\*\*\*\*\*\*\*\*\* languages.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
