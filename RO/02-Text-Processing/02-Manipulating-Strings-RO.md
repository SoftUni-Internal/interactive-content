# Manipularea Șirurilor

[slide hideTitle]
# Concatenare

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/03.Java-Fundamentals-Text-Processing/RO/interactive-java-fundamentals-text-processing-7-8-manipulate-strings-concatenating-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Există **două** moduri de a concatena un `șir`:

- Folosind operatorii `+` sau `+ =`

```java live
String text = "Hello" + ", " + "SoftUni";

text += "!";

System.out.println(text); // "Hello, SoftUni!"
```
- Folosind metoda `concat()`

```java live
String greet = "Hello, ";

String name = "SoftUni!";

String result = greet.concat(name);

System.out.println(result); // "Hello, SoftUni!"
```

[/slide]

[slide hideTitle]

# Unirea Șirurilor

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/03.Java-Fundamentals-Text-Processing/RO/interactive-java-fundamentals-text-processing-9-joining-strings-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Metoda Java `String.join(delimiter, elementsToJoin)` este un utilă pentru concatenarea șirurilor, mai ales atunci când aveți mai multe elemente care trebuie separate printr-un delimitator precum un spațiu, o virgulă sau orice alt caracter.

Metoda necesită un delimitator pentru a separa șirurile, dar dacă doriți să le concatenați fără a separa elementele în vreun fel, puteți folosi **""** ca delimitator.

Aici sunt două exemple care ilustrează utilizarea `String.join()` în diferite situații.

Unirea câtorva șiruri, separate print-o virgulă:

```java live
String sentence = String.join(",", "testing", "one", "two");

System.out.println(sentence);

```

Concatenarea tuturor elementelor dintr-o matrice prin specificarea unui delimitator (separator). Delimitatorul în acest exemplu este un spațiu **" "**:

```java live
String[] arr = {"This", "is", "a", "String", "array!"};

System.out.println(String.join(" ", arr));
```

Puteți utiliza `String.join()` cu orice colecție Iterable, precum List, Array, Set, Queue, Stack.


[/slide]

[slide hideTitle]
# Problemă cu Soluție: Repeat strings

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/03.Java-Fundamentals-Text-Processing/RO/interactive-java-fundamentals-text-processing-10-problem-and-solution-repeat-strings-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Repeat strings" taskId="Java-Fundamentals-2-String-Processing-lab-Repeat-Strings" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program care citește o **matrice de șiruri**.

Fiecare șir se repetă **n** ori, unde **n** este **lungimea șirului**.

Imprimați rezultatul.

## Exemplu
|**Intrare**|**Ieșire** |
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

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/03.Java-Fundamentals-Text-Processing/RO/interactive-java-fundamentals-text-processing-13-substring-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

După cum sugerează numele, `substring` extrage doar o **parte** dintr-un `String` dat.

`substring(int startIndex)` - returnează un **șir nou** care conține subșirul din șirul dat, de la **startIndex** specificat (**inclusiv**) până la sfârșitul șirului

```java live
String text = "My name is John";

String extractWord = text.substring(11);

System.out.println(extractWord); // John
```

`substring(int startIndex, int endIndex)` - returnează un **șir nou** începând de la **startIndex** specificat (inclusiv) până la **endIndex** (exclusiv)

```java live
String fullName = "John Doe";

String firstName = fullName.substring(0, 4);

System.out.println(firstName); // John
```


[/slide]

[slide hideTitle]

# Căutarea

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/03.Java-Fundamentals-Text-Processing/RO/interactive-java-fundamentals-text-processing-14-15-searching-1-2-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Este posibilă căutarea primelor sau ultimelor apariții ale unor tipare într-un șir:

`indexOf()` - returnează poziția primei apariții a caracterelor specificate, iar dacă nu există **o potrivire** se returnează **-1** 

```java live 
String fruits = "banana, apple, kiwi, banana, apple";

System.out.println(fruits.indexOf("banana"));    // 0

System.out.println(fruits.indexOf("orange"));    // -1

```

`lastIndexOf()` - returnează poziția ultimei apariții a caracterelor specificate, iar dacă nu există **o potrivire** se returnează **-1** 

```java live
String fruits = "banana, apple, kiwi, banana, apple";

System.out.println(fruits.lastIndexOf("banana")); // 21

System.out.println(fruits.lastIndexOf("orange")); // -1

```
[/slide]

[slide hideTitle]
# Problemă cu Soluție: Substring

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/03.Java-Fundamentals-Text-Processing/RO/interactive-java-fundamentals-text-processing-16-problem-and-solution-substring-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Substring" taskId="Java-Fundamentals-2-String-Processing-lab-Substring" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Pe **prima linie** veți primi un **șir**.

Pe **a doua linie** veți primi un **al doilea șir**.

Scrieți un program care **elimină toate aparițiile** **primului șir** din **al doilea** până când nu există nicio potrivire.

La sfârșit **tipăriți șirul rămas**.

## Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| ice | kgb |
| kicegiciceeb |  |

[hints]
[hint]
Citiți intrarea.

Găsiți **primul indice** unde apare cuvântul cheie. 
Utilizați metoda încorporată `indexOf()`.
[/hint] 
[hint]
**Eliminați potrivirea.**
Utilizați metoda încorporată `replace(String oldValue, String newValue)`.
[/hint] 
[hint]
**Repetați** operațiile până când textul **nu mai conține cuvântul cheie**.
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

# Împărțire

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/03.Java-Fundamentals-Text-Processing/RO/interactive-java-fundamentals-text-processing-18-splitting-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

 Un `String` poate fi împărțit în funcție de **unul** sau **mai multe** criterii, folosind metoda `split()`.

- **Împărțirea** unui șir în funcție de un **model** dat

```java live
String text
 = "I had coffee, pancakes, berries and a banana for breakfast.";
String[] words = text.split(", ");

System.out.println(words[0]);
System.out.println(words[1]);
System.out.println(words[2]);
```

- Împărțirea prin **separatoare multiple**

```java live

String text = "Hello, I am John.";

// splits text by comma, whitespace or dot
String[] words = text.split("[, .]+");

System.out.println(String.join(", ",words));
```

[/slide]

[slide hideTitle]

# Înlocuire

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/03.Java-Fundamentals-Text-Processing/RO/interactive-java-fundamentals-text-processing-19-replacing-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Java face posibilă **înlocuirea** într-un șir. 

- `replace(match, replacement)` - **Înlocuiește toate aparițiile** și returnează un **șir nou**

```java live
String text = "I have three bananas, three oranges, three apples.";

String replacedText = text.replace("three", "five");

System.out.println(replacedText);
```

[/slide]


[slide hideTitle]
# Problemă cu Soluție: Text Filter

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/03.Java-Fundamentals-Text-Processing/RO/interactive-java-fundamentals-text-processing-20-problem-and-solution-text-filter-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Text Filter" taskId="Java-Fundamentals-2-String-Processing-lab-Text-Filter" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program care acceptă un **text** și un **șir de cuvinte interzise**.

**Toate cuvintele incluse** în **lista de interdicții** trebuie **înlocuite** cu **asteriscuri** \"__\*__\", în număr egal cu **lungimea cuvântului.**

Intrările din lista de interdicții vor fi separate printr-o **virgulă** și **spațiu** ", ".

## Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| Linux, Windows | It is not \*\*\*\*\*, it is GNU/\*\*\*\*\*. \*\*\*\*\* is merely the kernel, while GNU adds the functionality. Therefore we owe it to them by calling the OS GNU/\*\*\*\*\*! Sincerely, a \*\*\*\*\*\*\* client |
| It is not Linux, it is GNU/Linux. Linux is merely the kernel, while GNU adds the functionality. Therefore we owe it to them by calling the OS GNU/Linux! Sincerely, a Windows client |  |


[hints]
[hint]
Citiți intrarea.

**Înlocuiți toate cuvintele interzise** din text **cu asterisc**. 
Utilizați **metoda încorporată** `replace(banWord, replacement)`.
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

