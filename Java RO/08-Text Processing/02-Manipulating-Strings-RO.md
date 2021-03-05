# Manipulating Strings
[slide hideTitle]
# Concatenare

- Folosirea  `+` sau `+ =` operatori
```java live
String text = "Hello" + ", " + "SoftUni";

text += "!";

System.out.println(text); // "Hello, SoftUni!"
```
- Folosind metoda `concat ()`
```java live
String greet = "Hello, ";

String name = "SoftUni!";

String result = greet.concat(name);

System.out.println(result); // "Hello, SoftUni!"
```

[/slide]

[slide hideTitle]

# Joining Strings


[/slide]

[slide hideTitle]
# Problem with Solution: Repeat strings

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
## Descriere
Scrieți un program care citește o **matrice de șiruri**.

Fiecare șir se repetă **n** ori, unde **n** este **lungimea a șirului**.

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

# Şiruri de caractere

As the name suggests, `substring` extracts only a **part** of a `String`.

- `substring (int startIndex)` - returnează **Şir nou** care conține șiruri de caractere din cele date

  șir din specificat **startIndex** (**inclusiv**)

```java live
String text = "My name is John";

String extractWord = text.substring(11);

System.out.println(extractWord); // John
```

- `substring(int startIndex, int endIndex)` - returnează **nou șir** conținând șirul de

  șirul dat de specificatul **începeIndex** (inclusiv) la **sfârşiIndex** (exclusiv)

```java live
String fullName = "John Doe";

String firstName = fullName.substring(0, 4);

System.out.println(firstName); // John
```


[/slide]

[slide hideTitle]

# În Căutarea
It is possible to search for the first or last occurences of a pattern in a string:

- `indexOf()` - se returnează **primul index de potrivire**, dacă nu există **nu se potrivește** se returnează **- 1** 

```java live 
String fruits = "banana, apple, kiwi, banana, apple";

System.out.println(fruits.indexOf("banana"));    // 0

System.out.println(fruits.indexOf("orange"));    // -1

```

- `lastIndexOf()` - găsește ultima apariție

```java live
String fruits = "banana, apple, kiwi, banana, apple";

System.out.println(fruits.lastIndexOf("banana")); // 21

System.out.println(fruits.lastIndexOf("orange")); // -1

```
[/slide]

[slide hideTitle]
# Problem with Solution: Substring

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
## Descriere
Pe **prima linie** veți primi un **șir**.

Pe **a doua linie** veți primi un **al doilea șir**.

Scrieți un program care **elimină toate aparițiile** din **primul șir** din **al doilea** până când nu există nicio potrivire.

La sfârșit **tipăriți șirul rămas**

## Example
| **Input** | **Output** |
| --- | --- |
| ice | kgb |
| kicegiciceeb |  |

# Sugestii
- **Citiți intrarea**
- Găsiți **primul index** unde apare cheia.
    - utilizați metoda încorporată `indexOf()`
- **Eliminați potrivirea**
    - utilizați metoda încorporată `replace(String oldValue, String newValue)`
- **Repetați-l** până când textul **nu mai conține cheia**


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

# Împărțirea

 A `String` could be split by **one** or **multiple** criteria, using the `split()` method.

- `split()` - împarte un șir de un model dat

```java live
String text
 = "I had coffee, pancakes, berries and a banana for breakfast.";
String[] words = text.split(", ");

System.out.println(words[0]);
System.out.println(words[1]);
System.out.println(words[2]);
```

- `split()` - împarte prin mai multe separatoare

```java live

String text = "Hello, I am John.";

// splits text by comma, whitespace or dot
String[] words = text.split("[, .]+");

System.out.println(String.join(", ",words));
```

[/slide]

[slide hideTitle]

# Înlocuire

Java also makes it possible to make **replacements** in a String.

- `replace(match, replacement)` - **înlocuiește toate aparițiile** și returnează un **șir nou** (șirurile sunt imuabile)

```java live
String text = "I have three bananas, three oranges, three apples.";

String replacedText = text.replace("three", "five");

System.out.println(replacedText);
```

[/slide]


[slide hideTitle]
# Problem with Solution: Text Filter

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
## Descriere
Scrieți un program care acceptă un **text** și un **șir de cuvinte interzise**.

**Toate cuvintele incluse** în **lista de interdicții** trebuie **înlocuite** cu **asteriscuri** \"__\*__\", egală cu **lungimea cuvântului.**

Intrările din lista de interdicții vor fi separate printr-o **virgulă** și **spațiu** ", ".

## Examples
| **Input** | **Output** |
| --- | --- |
| Linux, Windows | It is not \*\*\*\*\*, it is GNU/\*\*\*\*\*. \*\*\*\*\* is merely the kernel, while GNU adds the functionality. Therefore we owe it to them by calling the OS GNU/\*\*\*\*\*! Sincerely, a \*\*\*\*\*\*\* client |
| It is not Linux, it is GNU/Linux. Linux is merely the kernel, while GNU adds the functionality. Therefore we owe it to them by calling the OS GNU/Linux! Sincerely, a Windows client |  |


# Sugestii

- **Citiți intrarea**.
- **Înlocuiți toate cuvintele de interdicție** din text **cu** **asterisc** \(__\*__\)
   - utilizați **metoda încorporată** `replace(banWord, replacement)`


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

