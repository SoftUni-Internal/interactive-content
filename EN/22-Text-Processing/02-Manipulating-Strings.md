# Manipulating Strings

[slide]
# Concatenating

- Using `+` or `+=` operators
```java 
String text = "Hello" + ", " + "SoftUni!";  // "Hello, SoftUni!"
```
- Using `concat()` method
```java live
String greet = "Hello, ";

String name = "SoftUni!";

String result = greet.concat(name);

System.out.println(result); // "Hello, SoftUni!"
```

[/slide]

[slide]

# Substring

- `substring(int startIndex)` - returns **new String** containing the substring of the given string from specified **startIndex** (**inclusive**)

```java live
String text = "My name is John";

String extractWord = text.substring(11);

System.out.println(extractWord); // John
```

- `substring(int startIndex, int endIndex)` - returns **new String** containing the substring of the given string from specified **startIndex** (inclusive) to **endIndex** (exclusive)

```java live
String fullName = "John Doe";

String firstName = fullName.substring(0, 4);

System.out.println(firstName); // John
```


[/slide]

[slide]

# Searching

- `indexOf()` - returns the **first match index**, if there is **no match** returns **-1**
```java live 
String fruits = "banana, apple, kiwi, banana, apple";

System.out.println(fruits.indexOf("banana"));    // 0

System.out.println(fruits.indexOf("orange"));    // -1

```
- `lastIndexOf()` - finds the last occurrence
```java live
String fruits = "banana, apple, kiwi, banana, apple";

System.out.println(fruits.lastIndexOf("banana")); // 21

System.out.println(fruits.lastIndexOf("orange")); // -1

```
[/slide]

[slide]

# Splitting
 
- `split()` - split a string by a given pattern
```java live

String text = "Hello, john@softuni.bg, you have been using john@softuni.bg in your registration";
        
String[] words = text.split(", ");

System.out.println(String.join(", ",words));
```

- `split()` - split by multiple separators
```java live

String text = "Hello, I am John.";

// splits text by comma, whitespace or dot
String[] words = text.split("[, .]+");

System.out.println(String.join(", ",words));
```

[/slide]

[slide]

# Replacing

- `replace(match, replacement)` - **replaces all occurrences** and return a **new String** (Strings are immutable)

```java live

String text = "Hello, john@softuni.com," +
           " you have been using john@softuni.com in your registration.";

String replacedText = text
            .replace("john@softuni.com", "peter@softuni.com");

System.out.println(replacedText);

```

[/slide]

[slide]
# Problem: Repeat strings
[code-task title="Repeat strings" taskId="390307eb-d652-44d9-b31e-aee43b3982a8" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that reads an **array of strings**.

Each string is repeated **n** times, where **n** is the **length of the string**.

## Examples
| **Input** | **Output** |
| --- | --- |
| hi abc add | hihiabcabcabcaddaddadd |
|  |  |

| **Input** | **Output** |
| --- | --- |
| work | workworkworkwork |
|  |  |

| **Input** | **Output** |
| --- | --- |
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

[slide]
# Solution: Repeat strings
[code-task title="Repeat strings" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String[] words = sc.nextLine().split(" ");

        String result = "";

        for (String word : words) {
            int repeatTimes = word.length();

            for (int i = 0; i < repeatTimes; i++){

                result += word;
            }
        }
        System.out.println(result);
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program that reads an **array of strings**.

Each string is repeated **n** times, where **n** is the **length of the string**.

## Examples
| **Input** | **Output** |
| --- | --- |
| hi abc add | hihiabcabcabcaddaddadd |
|  |  |

| **Input** | **Output** |
| --- | --- |
| work | workworkworkwork |
|  |  |

| **Input** | **Output** |
| --- | --- |
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

[slide]
# Problem: Substring
[code-task title="Substring" taskId="7f1f33a4-aa1e-4df3-b15a-bd36b7e25b3d" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
On the **first line** you will receive a **string**.

On the **second line** you will receive a **second string**.

Write a program that **removes all of the occurrences** of **the first string** in **the second** until there is no match.

At the end **print the remaining string**.

## Examples
| **Input** | **Output** |
| --- | --- |
| ice | kgb |
| kicegiciceeb |  |

# Hints
- **Read the input.**
- Find the **first index** where the key appears.
	- Use the built-in method `indexOf()` 
- **Remove the match**.
	- Use the built-in method `replace(String oldValue, String newValue)`
- **Repeat** it until the text **doesn't contain the key anymore**.

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

[slide]
# Solution: Substring
[code-task title="Substring" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String key = sc.nextLine();
        String text = sc.nextLine();

        int index = text.indexOf(key);

        while (index != -1) {
            
            text = text.replace(key, "");

            index = text.indexOf(key);
        }
        System.out.println(text);
    }
}
```
[/code-editor]
[task-description]
## Description
On the **first line** you will receive a **string**.

On the **second line** you will receive a **second string**.

Write a program that **removes all of the occurrences** of **the first string** in **the second** until there is no match.

At the end **print the remaining string**.

## Examples
| **Input** | **Output** |
| --- | --- |
| ice | kgb |
| kicegiciceeb |  |

# Hints
- **Read the input.**
- Find the **first index** where the key appears.
	- Use the built-in method `indexOf()` 
- **Remove the match**.
	- Use the built-in method `replace(String oldValue, String newValue)`
- **Repeat** it until the text **doesn't contain the key anymore**.

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


[slide]

# Problem: Text Filter

[/slide]

[slide]

# Solution: Text Filter

[/slide]