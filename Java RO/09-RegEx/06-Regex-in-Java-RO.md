# Regex in Java



[slide]
# Clasele Regex Built-in
Pentru expresii regulate avansate sunt utilizate clasele `java.util.regex.Pattern` și `java.util.regex.Matcher`.

```java live no-template
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Main {
    public static void main(String[] args) {

        Pattern pattern = Pattern.compile("[a-z]+");

        String text = "the quick brown fox jumps over the lazy dog";

        Matcher matcher = pattern.matcher(text);

        // check all occurrences
        while (matcher.find()) {
            System.out.println(matcher.group());
        }
    }
}
```
Să explicăm ce înseamnă codul de mai sus:
În primul rând, creăm  un **obiect de tip șablon** care **definește expresia regulată**.
Acest obiect de tip șablon vă permite să **creați un obiect de potrivire pentru un șir dat**.
Acest obiect de potrivire vă permite apoi să executați **operații regex pe un șir**.

[/slide]

[slide]
# Metode de potrivire
- `find()` - scanează secvența de intrare căutând următoarea subsecvență care se potrivește cu șablonul

```java live no-template
import java.util.regex.Pattern;
import java.util.regex.Matcher;

public class Main {
    public static void main(String[] args) {
        Pattern pattern = Pattern.compile("[a-z]+");

        String text = "the quick brown fox jumps over the lazy dog";

        Matcher matcher = pattern.matcher(text);

        // check all occurrences
        while (matcher.find()) {
            System.out.println(matcher.group());
        }
    }
} 
```

- `replaceAll()` - înlocuiește toate subsecvențele potrivite din intrare cu valoarea șirului dat și returnează rezultatul.

```java live no-template
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Main {
    public static void main(String[] args) {

        Pattern pattern = Pattern.compile("[A-Za-z]+");
        Matcher matcher = pattern.matcher("Hello Java");

        String result = matcher.replaceAll("hi");

        System.out.println(result);   // hi hi
    }
}
```
- `replaceFirst()` - înlocuiește primele subsecvențe potrivite din intrare cu valoarea șirului dat și returnează rezultatul.
```java live no-template
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Main {

    public static void main(String[] args) {

        Pattern pattern = Pattern.compile("[A-Za-z]+");
        Matcher matcher = pattern.matcher("Hello Java");

        String result = matcher.replaceFirst("hi"); // hi Java

        System.out.println(result);
    }
}
```

- `split(String pattern)` - împartă textul după șablonul, returnează `String[]`

```java live
String text = "1   2 3      4";
String pattern = "\\s+"; // one or more whitespaces

String[] tokens = text.split(pattern);

System.out.println(String.join(", ",tokens));
```
[/slide]


[slide]
# Problem: Match Full Name
[code-task title="Match Full Name" taskId="Java-Fundamentals-Part-Two-Regex-Match-Full-Nmaes" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program Java pentru a se potrivi cu **numele complete** dintr-o listă de nume și **imprimați-le** pe consolă.

## Exemple
| **Input** | **Output** |
| --- | --- |
| John Smith, John smith, john Smith, JOhn Smith, Alice White, John	Smith | John Smith Alice White |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
John Smith, John smith, john Smith, JOhn Smith, Alice White, John	Smith
[/input]
[output]
John Smith Alice White
[/output]
[/test]
[test]
[input]
gosho goshov-Xi Ban cc DD-e e gosho goshov gosho goshov-pesho ivanov-PESHO IVANOV-AA PESHO IVANOV A A aa Ivan Ivanov B B-d d EE-ivanivanov-D D Ivan Ivanov
[/input]
[output]
Xi Ban Ivan Ivanov Ivan Ivanov
[/output]
[/test]
[test]
[input]
c c-PESHO IVANOV GOSHO GOSHOV-D D-GoshoGoshov goshogoshov-bb d d-CC d d A A-IvanIvanov A A-xiban gosho goshov-Xi Ban xi ban-BB-pesho petrov XiBan-
[/input]
[output]
Xi Ban
[/output]
[/test]
[test]
[input]
GOSHO GOSHOV-peshopetrov-c c ivanivanov peshoivanov-PeshoPetrov-PeshoIvanov-DD-PeshoPetrov Xi Ban-D D-IvanIvanov-D D-dd-aa pesho petrov PeshoIvanov-XI BAN-cc-ivan ivanov-
[/input]
[output]
Xi Ban
[/output]
[/test]
[test]
[input]
EE-e e pesho petrov-PeshoPetrov aa-gosho goshov-peshoivanov-B B EE-Pesho Petrov-Pesho Ivanov peshoivanov-BB Gosho Goshov GOSHO GOSHOV cc XiBan b b-ivanivanov CC
[/input]
[output]
Pesho Petrov Pesho Ivanov Gosho Goshov
[/output]
[/test]
[test]
[input]
d d gosho goshov XiBan pesho ivanov-Pesho Petrov-xiban-Pesho Ivanov pesho petrov-Pesho Petrov-IvanIvanov-Pesho Petrov-PESHO IVANOV-EE EE C C-Pesho Ivanov-peshoivanov-bb XiBan-aa
[/input]
[output]
Pesho Petrov Pesho Ivanov Pesho Petrov Pesho Petrov Pesho Ivanov
[/output]
[/test]
[test]
[input]
Xi Ban-GoshoGoshov B B-PeshoIvanov xiban B B aa C C-goshogoshov-IvanIvanov PeshoPetrov-PeshoIvanov C C ivan ivanov-Pesho Ivanov-IVAN IVANOV C C-PESHO IVANOV-PESHO IVANOV ivan ivanov
[/input]
[output]
Xi Ban Pesho Ivanov
[/output]
[/test]
[test]
[input]
A A-Xi Ban b b-C C ee XiBan-gosho goshov GoshoGoshov AA-IvanIvanov BB-cc-pesho petrov DD goshogoshov ivan ivanov IvanIvanov-pesho ivanov a a-gosho goshov-
[/input]
[output]
Xi Ban
[/output]
[/test]
[test]
[input]
gosho goshov-aa-C C-PESHO IVANOV PESHO PETROV-A A xi ban A A aa-peshopetrov Gosho Goshov d d-E E DD XI BAN-bb-Gosho Goshov-aa-dd ivan ivanov-
[/input]
[output]
Gosho Goshov Gosho Goshov
[/output]
[/test]
[test]
[input]
Gosho Goshov a a C C-GoshoGoshov EE PeshoPetrov-a a xi ban D D bb b b-B B-c c EE-IvanIvanov DD pesho ivanov B B PESHO IVANOV IVAN IVANOV-
[/input]
[output]
Gosho Goshov
[/output]
[/test]
[test]
[input]
goshogoshov peshoivanov-c c-XiBan-cc-Ivan Ivanov-D D IVAN IVANOV xi ban BB-xiban-PESHO PETROV xiban Ivan Ivanov-XI BAN-cc-IVAN IVANOV EE c c e e
[/input]
[output]
Ivan Ivanov Ivan Ivanov
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Solution: Match Full Name
[code-task title="Match Full Name" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your solution here
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program Java pentru a se potrivi cu **numele complete** dintr-o listă de nume și **imprimați-le** pe consolă.


# Sugestii
În primul rând, scrieți o expresie regulată care se va potrivi cu un nume complet valid, în conformitate cu aceste condiții:
- Un nume complet valid are următoarele caracteristici:
	- Este format din **două cuvinte**.
	- Fiecare cuvânt **începe** cu o ** iteră mare**.
	- După prima literă, sunt **formate numai litere mici după aceea**.
	- **Fiecare** din cele **două cuvinte** trebuie să aibă **cel puțin două litere**
	- Cele **două cuvinte** sunt **separate** de un **spațiu unic**.
    
Pentru a vă ajuta, am subliniat câteva pași:
1.	Folosiți un tester de regex online, cum ar fi [https://regex101.com/](https://regex101.com/) 
2.	Verificați cum să utilizați **seturi de caractere** (notate cu paranteze pătrate - "**[]**")
3.	Specificați că doriți **două cuvinte** cu un spațiu între ele (**caracterul de spațiu** \' \', și **nu** orice simbol al spațiului alb)
4.	Pentru fiecare cuvânt, specificați că ar trebui să înceapă cu o literă mare folosind un **set de caractere**. Caracterele dorite se află într-un interval **de la ‘A’ la ‘Z’**.
5.	Pentru fiecare cuvânt, specificați că ceea ce urmează dupa prima litera sunt doar **litere mici**, una sau mai multe - folosiți un alt set de caractere și **cuantificatorul** corect.
6.	Pentru a preveni capturarea literelor pe linii noi, puneți **"\b"** la începutul și la sfârșitul regexului. Acest lucru va asigura că ceea ce precede și ceea ce urmează potrivirii este o limită de cuvânt (ca o linie nouă).



## Exemple
| **Input** | **Output** |
| --- | --- |
| John Smith, John smith, john Smith, JOhn Smith, Alice White, John	Smith | John Smith Alice White |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
John Smith, John smith, john Smith, JOhn Smith, Alice White, John	Smith
[/input]
[output]
John Smith Alice White
[/output]
[/test]
[test]
[input]
gosho goshov-Xi Ban cc DD-e e gosho goshov gosho goshov-pesho ivanov-PESHO IVANOV-AA PESHO IVANOV A A aa Ivan Ivanov B B-d d EE-ivanivanov-D D Ivan Ivanov
[/input]
[output]
Xi Ban Ivan Ivanov Ivan Ivanov
[/output]
[/test]
[test]
[input]
c c-PESHO IVANOV GOSHO GOSHOV-D D-GoshoGoshov goshogoshov-bb d d-CC d d A A-IvanIvanov A A-xiban gosho goshov-Xi Ban xi ban-BB-pesho petrov XiBan-
[/input]
[output]
Xi Ban
[/output]
[/test]
[test]
[input]
GOSHO GOSHOV-peshopetrov-c c ivanivanov peshoivanov-PeshoPetrov-PeshoIvanov-DD-PeshoPetrov Xi Ban-D D-IvanIvanov-D D-dd-aa pesho petrov PeshoIvanov-XI BAN-cc-ivan ivanov-
[/input]
[output]
Xi Ban
[/output]
[/test]
[test]
[input]
EE-e e pesho petrov-PeshoPetrov aa-gosho goshov-peshoivanov-B B EE-Pesho Petrov-Pesho Ivanov peshoivanov-BB Gosho Goshov GOSHO GOSHOV cc XiBan b b-ivanivanov CC
[/input]
[output]
Pesho Petrov Pesho Ivanov Gosho Goshov
[/output]
[/test]
[test]
[input]
d d gosho goshov XiBan pesho ivanov-Pesho Petrov-xiban-Pesho Ivanov pesho petrov-Pesho Petrov-IvanIvanov-Pesho Petrov-PESHO IVANOV-EE EE C C-Pesho Ivanov-peshoivanov-bb XiBan-aa
[/input]
[output]
Pesho Petrov Pesho Ivanov Pesho Petrov Pesho Petrov Pesho Ivanov
[/output]
[/test]
[test]
[input]
Xi Ban-GoshoGoshov B B-PeshoIvanov xiban B B aa C C-goshogoshov-IvanIvanov PeshoPetrov-PeshoIvanov C C ivan ivanov-Pesho Ivanov-IVAN IVANOV C C-PESHO IVANOV-PESHO IVANOV ivan ivanov
[/input]
[output]
Xi Ban Pesho Ivanov
[/output]
[/test]
[test]
[input]
A A-Xi Ban b b-C C ee XiBan-gosho goshov GoshoGoshov AA-IvanIvanov BB-cc-pesho petrov DD goshogoshov ivan ivanov IvanIvanov-pesho ivanov a a-gosho goshov-
[/input]
[output]
Xi Ban
[/output]
[/test]
[test]
[input]
gosho goshov-aa-C C-PESHO IVANOV PESHO PETROV-A A xi ban A A aa-peshopetrov Gosho Goshov d d-E E DD XI BAN-bb-Gosho Goshov-aa-dd ivan ivanov-
[/input]
[output]
Gosho Goshov Gosho Goshov
[/output]
[/test]
[test]
[input]
Gosho Goshov a a C C-GoshoGoshov EE PeshoPetrov-a a xi ban D D bb b b-B B-c c EE-IvanIvanov DD pesho ivanov B B PESHO IVANOV IVAN IVANOV-
[/input]
[output]
Gosho Goshov
[/output]
[/test]
[test]
[input]
goshogoshov peshoivanov-c c-XiBan-cc-Ivan Ivanov-D D IVAN IVANOV xi ban BB-xiban-PESHO PETROV xiban Ivan Ivanov-XI BAN-cc-IVAN IVANOV EE c c e e
[/input]
[output]
Ivan Ivanov Ivan Ivanov
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Problem: Match Numbers
[code-task title="Match Numbers" taskId="Java-Fundamentals-Part-Two-Regex-Match-Numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți o expresie regulată pentru a se potrivi cu toate numerele dintr-un șir dat.

După ce găsiți toate numerele, imprimați-le pe consolă, separate prin spațiu " ".

## Exemple
| **Input** | **Output** |
| --- | --- |
| 1 -1 1s 123 s-s -123 \_55_ _f 123.456 -123.456 s-1.1 s2 -1- zs-2 s-3.5 | 1 -1 123 -123 123.456 -123.456 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1 -1 1s 123 s-s -123 \_55_ _f 123.456 -123.456 s-1.1 s2 -1- zs-2 s-3.5
[/input]
[output]
1 -1 123 -123 123.456 -123.456
[/output]
[/test]
[test]
[input]
123Y Peter44 456 982 -873829 -_89
[/input]
[output]
456 982 -873829
[/output]
[/test]
[test]
[input]
123    89382- -09-09 - 8-8jid08  -92813 j8 -
[/input]
[output]
123 -92813
[/output]
[/test]
[test]
[input]
51542 41+1 4+10059 %0870_((\* 8098 jeoifjd9908
[/input]
[output]
51542 8098
[/output]
[/test]
[test]
[input]
891273hndjn 0912039 jjjjjj-12830 0-9=9 =---9 83127 328
[/input]
[output]
0912039 83127 328
[/output]
[/test]
[test]
[input]
13728 jd8j10 8498  j9 6698 -09 0
[/input]
[output]
13728 8498 6698 -09 0
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Solution: Match Numbers
[code-task title="Match Numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.*;

public class Main {
    public static void main(String[] args) {
      // Scrieți soluția aici
```
[/code-editor]
[task-description]
## Descriere
Scrieți o expresie regulată pentru a se potrivi cu toate numerele dintr-un șir dat.

După ce găsiți toate numerele, imprimați-le pe consolă, separate prin spațiu " ".

## Exemple
| **Input** | **Output** |
| --- | --- |
| 1 -1 1s 123 s-s -123 \_55_ _f 123.456 -123.456 s-1.1 s2 -1- zs-2 s-3.5 | 1 -1 123 -123 123.456 -123.456 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1 -1 1s 123 s-s -123 \_55_ _f 123.456 -123.456 s-1.1 s2 -1- zs-2 s-3.5
[/input]
[output]
1 -1 123 -123 123.456 -123.456
[/output]
[/test]
[test]
[input]
123Y Peter44 456 982 -873829 -_89
[/input]
[output]
456 982 -873829
[/output]
[/test]
[test]
[input]
123    89382- -09-09 - 8-8jid08  -92813 j8 -
[/input]
[output]
123 -92813
[/output]
[/test]
[test]
[input]
51542 41+1 4+10059 %0870_((\* 8098 jeoifjd9908
[/input]
[output]
51542 8098
[/output]
[/test]
[test]
[input]
891273hndjn 0912039 jjjjjj-12830 0-9=9 =---9 83127 328
[/input]
[output]
0912039 83127 328
[/output]
[/test]
[test]
[input]
13728 jd8j10 8498  j9 6698 -09 0
[/input]
[output]
13728 8498 6698 -09 0
[/output]
[/test]
[/tests]
[/code-task]
[/slide]