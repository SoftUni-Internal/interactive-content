# Citirea și Tipărirea Listelor

[slide hideTitle]
# Citirea Listelor 
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/04.Java-Fundamentals-Lists/RO/interactive-java-fundamntals-lists-10-11-reading-lists-from-the-console-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- Citirea unei liste folosind **bucla for**:
```java 
Scanner scanner = new Scanner(System.in);

// citirea dimensiunii listei
int n = Integer.parseInt(scanner.nextLine()); 
        
// inițializarea unei liste goale de numere întregi
List<Integer> list = new ArrayList<>(); 

// crearea unei bucle for cu dimensiunea listei
for (int i = 0; i < n; i++) { 

// citirea unui element de pe consolă   
int number = Integer.parseInt(scanner.nextLine()); 

// adăugarea elementului la listă     
list.add(number); 
}
```
[/slide]

[slide hideTitle]
# Citirea de pe o Singură Linie

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/04.Java-Fundamentals-Lists/RO/interactive-java-fundamntals-lists-12-reading-values-from-a-single-line-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Puteți citi o listă ca o singură linie de pe consolă.

Imaginați-vă că avem o intrare care constă în mai multe valori întregi, separate prin spații. (10 20 30 40 50)
``` java
// input: 10 20 30 40 50
String values = scanner.nextLine();   

List<Integer> items = Arrays
        .stream(values.split(" "))     // split the string by a whitespace
        .map(Integer::parseInt)        // parse string to integer
        .collect(Collectors.toList()); // convert to a list
```
[/slide]

[slide hideTitle]
# Imprimarea Listelor

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/04.Java-Fundamentals-Lists/RO/interactive-java-fundamntals-lists-13-printitng-lists-on-the-console-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- Imprimarea unei liste cu ajutorul unei **bucle for**

```java live
List<String> months = new ArrayList<>(
    Arrays.asList("January", "February", "March"));

for (int index = 0; index < months.size(); index++) {
   System.out.print(months.get(index) + " ");
}
```

- Imprimarea unei liste cu ajutorul unei **bucle for-each**

```java live
List<String> numbers = new ArrayList<>(
    Arrays.asList("one", "two", "three", "four", "five", "six"));

for (String number : numbers) {
   System.out.print(number + " ");
}
```

- Imprimarea unei liste cu ajutorul metodei **String.join(…)**

```java live
List<String> list = new ArrayList<>(
    Arrays.asList("one", "two", "three", "four", "five", "six"));

System.out.println(String.join(" ", list));
```
[/slide]

[slide hideTitle]
# Problemă cu Soluție: Sum Adjacent Equal Numbers

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/04.Java-Fundamentals-Lists/RO/interactive-java-fundamntals-lists-14-problem-and-solution-print-adjacent-equal-numbers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Sum Adjacent Equal Numbers" taskId="java-1-fund-Lists-lab-Sum-Adjacent-Equal-Numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.text.DecimalFormat;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere

Creați un program pentru a **însuma toate numerele egale adiacente** într-o listă de numere zecimale, începând de la **stânga la dreapta**.

- După însumarea a două numere, rezultatul obținut poate fi egal cu unii dintre vecinii săi și ar trebui, de asemenea, să fie însumat (vezi exemplele de mai jos)

- Înumați întotdeauna cei doi vecini egali din stânga (dacă sunt disponibile mai multe cupluri de vecini egali)

## Exemplu
|**Intrare**|**Ieșire** |**Comentarii**|
| --- | --- | --- |
| 3 3 6 1 | 12 1 | **3 3** 6 1 -> **6 6** 1 -> 12 1 |
| 8 2 2 4 8 16 | 16 8 16 | 8 **2 2** 4 8 16 -> 8 **4 4** 8 16 -> **8 8** 8 16 -> 16 8 16 |
| 0.1 0.1 5 -5 | 0.2 5 -5 | **0.1 0.1** 5 -5 -> 0.2 5 -5 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
3 3 6 1
[/input]
[output]
12 1
[/output]
[/test]
[test open]
[input]
8 2 2 4 8 16
[/input]
[output]
16 8 16
[/output]
[/test]
[test open]
[input]
0.1 0.1 5 -5
[/input]
[output]
0.2 5 -5
[/output]
[/test]
[test]
[input]
5 4 2 1 1 4
[/input]
[output]
5 8 4
[/output]
[/test]
[test]
[input]
0.5 0.5
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
1 1 1
[/input]
[output]
2 1
[/output]
[/test]
[test]
[input]
1 1 2
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
1 1 1 1
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
1 2 3 4 5
[/input]
[output]
1 2 3 4 5
[/output]
[/test]
[test]
[input]
5
[/input]
[output]
5
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă cu Soluție: Gauss' Trick

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/04.Java-Fundamentals-Lists/RO/interactive-java-fundamntals-lists-17-problem-and-solution-gauss-trick-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Gauss' Trick" taskId="java-fund-1-Lists-lab-Gauss'-Trick" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere

Creați un program care însumează toate numerele dintr-o listă în ordinea următoare:

- **primul** + **ultimul**, **primul + 1** + **ultimul - 1**, **primul + 2** + **ultimul - 2**, ...**primul + n**, **ultimul - n**

[image assetsSrc="lists-problem-gaus-trick(1).png" /]

## Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 1 2 3 4 5 | 6 6 3 |
| 1 2 3 4 | 5 5 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1 2 3 4 5
[/input]
[output]
6 6 3
[/output]
[/test]
[test open]
[input]
1 2 3 4
[/input]
[output]
5 5
[/output]
[/test]
[test]
[input]
1 1
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
1 2 3
[/input]
[output]
4 2
[/output]
[/test]
[test]
[input]
10 20 30 40
[/input]
[output]
50 50
[/output]
[/test]
[test]
[input]
10 20 30 40 50
[/input]
[output]
60 60 30
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă cu Soluție: Merging Lists
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/04.Java-Fundamentals-Lists/RO/interactive-java-fundamntals-lists-19-problem-merging-and-solution-lists-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


[code-task title="Merging Lists" taskId="java-fund-1-Lists-lab-Merging-Lists" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Veți primi **două liste** care conțin **numere**.

Creați o listă care **conține** numerele **din** ambele liste.

**Primul element** trebuie să fie din **prima listă**, **al doilea** din **a doua listă** și așa mai departe.

Dacă **lungimea** celor două liste **nu este egală**, **adăugați** elementele rămase **la sfârșitul listei**.

## Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 3 5 2 43 12 3 54 10 23 | 3 76 5 5 2 34 43 2 12 4 3 12 54 10 23 |
| 76 5 34 2 4 12 |  |

|**Intrare**|**Ieșire**|
| --- | --- |
| 76 5 34 2 4 12 | 76 3 5 5 34 2 2 43 4 12 12 3 54 10 23 |
| 3 5 2 43 12 3 54 10 23 |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
3 5 2 43 12 3 54 10 23
76 5 34 2 4 12
[/input]
[output]
3 76 5 5 2 34 43 2 12 4 3 12 54 10 23
[/output]
[/test]
[test open]
[input]
76 5 34 2 4 12
3 5 2 43 12 3 54 10 23
[/input]
[output]
76 3 5 5 34 2 2 43 4 12 12 3 54 10 23
[/output]
[/test]
[test]
[input]
1 2 3
4 5 6
[/input]
[output]
1 4 2 5 3 6
[/output]
[/test]
[test]
[input]
1 2 3
4 5
[/input]
[output]
1 4 2 5 3
[/output]
[/test]
[test]
[input]
1 2
3 4 5
[/input]
[output]
1 3 2 4 5
[/output]
[/test]
[test]
[input]
1 1 1
2 2 2
[/input]
[output]
1 2 1 2 1 2
[/output]
[/test]
[test]
[input]
1 2 3 4 5
6
[/input]
[output]
1 6 2 3 4 5
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

