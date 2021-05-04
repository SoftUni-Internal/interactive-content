# Citirea și Imprimarea Matricelor

[slide hideTitle]
# Citirea Matricelor
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/02.Java-Fundamentals-Arrays/RO/02-Java-Fundamentals-Arrays-8-9-10-11-Reading-An-Array-and-demos-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Unul dintre modurile în care putem citi o matrice este prin utilizarea **lungimii** sale într-o **bucla for** pentru a primi toate elementele sale și a le stoca în matrice în funcție de indicele corespunzător.

```java
//accept n - length of the array
int n = Integer.parseInt(sc.nextLine());

//create the array with length of n
int[] arr = new int[n];

for (int i = 0; i < n; i++) {
    //read array elements from the console
    arr[i] = Integer.parseInt(sc.nextLine());
}
```

## Citirea valorilor matricei de pe o singură linie

Maricele pot fi citite de pe o singură linie care conține valori separate. 

De exemplu, vrem să citim această matrice: `2 8 30 25 40 72 -2 44 56`.

```Java
String values = sc.nextLine();
String[] items = values.split(" ");
int[] arr = new int[items.length];

for (int i = 0; i < items.length; i++) {
    arr[i] = Integer.parseInt(items[i]);
}
```

Mai întâi, citim numerele de pe consolă și le separăm, folosind `" "` ca delimitator.

După aceea, inițializăm o nouă matrice cu o lungime egală cu numărul de elemente pe care le citim.

În cele din urmă, folosind o buclă for, inserăm toate valorile în matrice.

Putem citi o matrice de numere întregi folosind clasa `java.util.Arrays;`, care ne permite să creăm și să manipulăm matrice.


## Alternative

Exemplul de mai jos prezintă o metodă mai scurtă de a citi intrări și de a crea matrice cu ajutorul acestora.

```Java
String inputLine = sc.nextLine();

String[] items = inputLine
    .split(" ");

int[] arr = Arrays
    .stream(scanner.nextLine()
    .split(" "))
    .mapToInt(Integer::parseInt)
    .toArray();                  
```

Citim mai întâi intrarea ca șir folosind `scanner.nextLine()`.

Apoi, împărțim intrarea prin delimitatorul `" "` cu ajutorul metodei `split(" ")`.

Vom continua cu parsarea fiecărui șir la valori întregi prin metoda `mapToInt(Integer::parseInt)`.

În cele din urmă, convertim rezultatul într-o matrice.

[/slide]

[slide hideTitle]
# Imprimarea Matricelor
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/02.Java-Fundamentals-Arrays/RO/02-Java-Fundamentals-Arrays-12-Printing-Arrays-to-the-console-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a imprima toate elementele unei matrice, utilizăm o **bucla for**.

În timp ce imprimăm elementele, putem folosi **un spațiu** sau **o linie nouă** pentru a le separa. 

Vedeți exemplul de mai jos:

```Java live
String[] arr = { "one", "two" };

// Process all array elements
for (int i = 0; i < arr.length; i++) {
    System.out.printf("arr[%d] = %s%n", i, arr[i]);
}
```
[/slide]

[slide hideTitle]
# Problemă cu Soluție: Reverse an Array of Integers

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/02.Java-Fundamentals-Arrays/RO/02-Java-Fundamentals-Arrays-13-14-problem-and-solution-print-numbers-in-reverse-order-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Reverse an Array of Integers" taskId="java-fund-1-arrays-lab-reverse-array-of-integers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]

```
import java.util.*;
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
Citiți **n** numere și imprimați-le în ordine inversă, separate printr-un singur spațiu.

## Exemplu
|**Intrare**|**Ieșire**|
|-----|------|
| 3 | 30 20 10 |
| 10 | |
| 20 | |
| 30 | |

|**Intrare**|**Ieșire**|
|-----|------|
| 3 | 10 20 30 |
| 30 | |
| 20 | |
| 10 | |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
10
20
30
[/input]
[output]
30 20 10
[/output]
[/test]
[test open]
[input]
4
-1
20
99
5
[/input]
[output]
5 99 20 -1
[/output]
[/test]
[test]
[input]
1
1
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
2
100
200
[/input]
[output]
200 100
[/output]
[/test]
[test]
[input]
3
-5
20
100
[/input]
[output]
100 20 -5
[/output]
[/test]
[test]
[input]
9
3467
2347
-33
0
24
23
-3
4
3
[/input]
[output]
3 4 -3 23 24 0 -33 2347 3467
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Imprimarea Matricelor cu Ajutorul Metodei String.join()

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/02.Java-Fundamentals-Arrays/RO/02-Java-Fundamentals-Arrays-15-printing-arrays-with-for-string.join-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Putem utiliza `String.join(x, y)` pentru a imprima o matrice. **X** reprezintă **separatorul** și **y** este matricea pe care dorim să o imprimăm. 

`String.join(…)` funcționează numai cu șiruri:

```Java live
String[] strings = { "one", "two" };
System.out.println(String.join(" ", strings));
```

Dacă încercăm să tipărim o matrice de tipul **int**, vom obține o eroare:

```Java live
int[] arr = { 1, 2, 3 };
System.out.println(String.join(" ", arr));
```
[/slide]

[slide hideTitle]
# Problemă cu Soluție: Reverse an Array of Strings

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/02.Java-Fundamentals-Arrays/RO/02-Java-Fundamentals-Arrays-16-17-problem-and-solution-reverse-an-array-of-strings-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


[code-task title="Reverse an Array of Strings" taskId="java-fund-1-arrays-lab-reverse-an-array-of-strings" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
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
Creați un program care citește o **matrice de șiruri**, o inversează și **imprimă** elementele sale.

Intrarea constă dintr-o secvență de **șiruri** separate printr-un spațiu.

Imprimați ieșirea pe o singură linie \(elementele trebuie separate printr-un spațiu\).

## Exemplu
|**Intrare**|**Ieșire**|
|-----|------|
| a b c d e | e d c b a |
|-1 hi ho w | w ho hi -1 |

[hints] 
[hint] 
Citiți matricea de șiruri, **schimbați** **primul** element \(corespunzător indicelui **0**\) cu **ultimul** element \(corespunzător indicelui **n-1**\).
[/hint] 
[hint] 
Apoi, **schimbați** **al doilea** element \(corespunzător indicelui **1**\) cu **penultimul** element \(corespunzător indicelui **n-2**\).
[/hint] 
[hint] 
Continuați în același mod până când ajungeți la **mijlocul** matricei.
[/hint] 
[/hints]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
a b c d e
[/input]
[output]
e d c b a
[/output]
[/test]
[test open]
[input]
-1 hi ho w
[/input]
[output]
w ho hi -1
[/output]
[/test]
[test]
[input]
hello
[/input]
[output]
hello
[/output]
[/test]
[test]
[input]
a b
[/input]
[output]
b a
[/output]
[/test]
[test]
[input]
aa bb cc
[/input]
[output]
cc bb aa
[/output]
[/test]
[test]
[input]
a10 b20 c30 d40 e50 f60
[/input]
[output]
f60 e50 d40 c30 b20 a10
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă cu Soluție: Equal Arrays

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/02.Java-Fundamentals-Arrays/RO/02-Java-Fundamentals-Arrays-problem-and-solution-equal-arrays-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Equal Arrays" taskId="java-fund-1-Arrays-lab-Equal-Arrays" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
}
```
[/code-editor]
[task-description]
## Descriere
Citiți două matrice și determinați dacă acestea sunt sau nu identice.

Matricele sunt **identice** dacă **toate elementele lor sunt egale**.

Dacă matricele sunt identice, găsiți **suma elementelor primei matrice** și imprimați pe consolă următorul mesaj: 

"**Arrays are identical. Sum:** \{**sum**\}"

În caz contrar, găsiți primul indice la care matricele diferă și imprimați pe consolă următorul mesaj:

"**Arrays are not identical. Found difference at** \{**index**\} **index.**"

## Exemple
|**Intrare**|**Ieșire**|
|-----|------|
| 10 20 30 | Arrays are identical. Sum: 60|
| 10 20 30 | |

|**Intrare**|**Ieșire**|
|-----|------|
| 1 2 3 4 5 | Arrays are not identical. Found difference at 2 index.|
| 1 2 4 3 5 | |



[/task-description]
[code-io /]
[tests]
[test open]
[input]
10 20 30
10 20 30
[/input]
[output]
Arrays are identical. Sum: 60
[/output]
[/test]
[test open]
[input]
1 2 3 4 5
1 2 4 3 5
[/input]
[output]
Arrays are not identical. Found difference at 2 index.
[/output]
[/test]
[test]
[input]
1
10
[/input]
[output]
Arrays are not identical. Found difference at 0 index.
[/output]
[/test]
[test]
[input]
1 2 3
1 2 3
[/input]
[output]
Arrays are identical. Sum: 6
[/output]
[/test]
[test]
[input]
1 2 3
1 2 4
[/input]
[output]
Arrays are not identical. Found difference at 2 index.
[/output]
[/test]
[test]
[input]
100
100
[/input]
[output]
Arrays are identical. Sum: 100
[/output]
[/test]
[test]
[input]
100 200 300 400
400 300 200 100
[/input]
[output]
Arrays are not identical. Found difference at 0 index.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

