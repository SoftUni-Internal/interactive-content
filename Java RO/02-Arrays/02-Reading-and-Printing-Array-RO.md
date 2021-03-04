# Citirea și imprimarea matricei

[slide]
# Citirea matricelor de pe consolă

[vimeo-video startTimeInSeconds="2422" endTimeInSeconds="3075"]
[stream language="EN" videoId="421771481" default /]
[stream language="RO" videoId="427418768"  /]
[/vimeo-video]


Nu există nicio posibilitate directă de a prelua matrice în Java folosind Scanner sau orice alt instrument, dar este destul de ușor să obțineți același lucru folosind metode standard **Scanner** și adresând câteva întrebări utilizatorului.

De exemplu, dacă doriți să utilizați o **matrice de șir** ca intrare, aveți nevoie de **lungimea** matricei și apoi puteți utiliza o buclă(loop) pentru a recupera mai multe elemente și a le stoca într-o matrice.

```Java
int n = Integer.parseInt(sc.nextLine()); //Receive the array length
int[] arr = new int[n];                  //create an array with the given length
                
for (int i = 0; i < n; i++) {
  arr[i] = Integer.parseInt(sc.nextLine()); //read array elements
}
```

# Citirea valorilor matricei dintr-o singură linie

Maricele pot fi citite dintr-o singură linie de valori separate. De exemplu, dacă vrem să citim această matrice: `2 8 30 25 40 72 -2 44 56`:

```Java
String values = sc.nextLine();
String[] items = values.split(" ");
int[] arr = new int[items.length];

for (int i = 0; i < items.length; i++){
  arr[i] = Integer.parseInt(items[i]);
}
```
# Mai scurt: Citirea matricei dintr-o singură linie

Pitem citi matrice din numere întregi folosind `java.util.Arrays;`,xare este o `clasă` în Java care ne permite să creăm și să manipulăm matrice.

Vom afla despre **clasele** mai târziu în acest curs, dar dacă sunteți curioși, nu ezitați să cautați mai multe informații prin Google.

```Java
String inputLine = sc.nextLine();

String[] items = inputLine      //create a string array
  .split(" ");

int[] arr = Arrays
  .stream(scanner.nextLine()    //read the input from the console as string
  .split(" "))                  //split the input by space
  .mapToInt(Integer::parseInt)  //convert the string input to int
  .toArray();                   //convert to array
```
[/slide]

[slide]
# Video

[vimeo-video startTimeInSeconds="3996" endTimeInSeconds="5491"]
[stream language="EN" videoId="421771481" default /]
[stream language="RO" videoId="427418768"  /]
[/vimeo-video]

[/slide]

[slide]
# Imprimarea matricei folosind for-loop

Pentru a imprima toate elementele a unei este utlizat instrumentul `for` loop.

În timp ce imprimăm fiecare element, putem folosi un spațiu alb sau o linie nouă, pentru a le împărți.

Avem mai jos un exemplu:

```Java live
String[] arr = {"one", "two"};

// Process all array elements
for (int i = 0; i < arr.length; i++) {
   System.out.printf("arr[%d] = %s%n", i, arr[i]);
}
```

# Imprimarea matricei folosind  String.join()

Utilizați `String.join(x, y)`, unde x este  **separatorul** și **y este matricea** pe care dorim să o imprimăm. `String.join(…)` funcționează numai cu `String`:

```Java live
String[] strings = { "one", "two" };
System.out.println(String.join(" ", strings));
```

Dacă încercăm să tipărim int, vom primi o eroare:

```Java live
int[] arr = { 1, 2, 3 };
System.out.println(String.join(" ", arr));
```
[/slide]

[slide hideTitle]
# Problem: Print Numbers in Reverse Order
[code-task title="Problem: Print Numbers in Reverse Order" taskId="java-fund-Arrays-Print-Numbers-in-Reverse-Order" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Citiți numere n și imprimați-le în ordine inversă, separate printr-un singur spațiu.

## Exemple
|**Input**|**Output**|
|-----|------|
| 3 | 30 20 10 |
| 10 | |
| 20 | |
| 30 | |

|**Input**|**Output**|
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
# Solution: Print Numbers in Reverse Order
[code-task title="Problem: Print Numbers in Reverse Order" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write your solution here
}
```
[/code-editor]
[task-description]
## Descriere
Citiți numere n și imprimați-le în ordine inversă, separate printr-un singur spațiu.

## Exemple
|**Input**|**Output**|
|-----|------|
| 3 | 30 20 10 |
| 10 | |
| 20 | |
| 30 | |

|**Input**|**Output**|
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

# Problem: Reverse an Array of Strings
[code-task title="Problem: Reverse an Array of Strings" taskId="java-fund-Arrays-Reverse-an-Array-of-Strings" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
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
Scrieți un program pentru a citi o **matrice de șiruri**, inversați-le și **imprimați** elementele sale.

Intrarea constă dintr-o secvență de șiruri separate de spațiu.

Imprimați ieșirea pe o singură linie \(separate prin spațiu\).

## Exemplu
|**Input**|**Output**|
|-----|------|
| a b c d e | e d c b a |
|-1 hi ho w | w ho hi -1 |


## Sugestii

* Citiți matricea de șiruri.

* **Schimbați**  **primul** element \(at index 0\) cu **ultimul** element \(at index n-1\).

* **Schimbați**  **al doilea** element \(at index 1\) cu **înainte de ultimul** element\(at index n-2\).

* Continuați în același mod până când ajungeți la mijlocul matricei.

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
# Solution: Reverse an Array of Strings
[code-task title="Problem: Reverse an Array of Strings" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Scrieți soluția aici
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program pentru a citi o **matrice de șiruri**, inversați-le și **imprimați** elementele sale.

Intrarea constă dintr-o secvență de șiruri separate de spațiu.

Imprimați ieșirea pe o singură linie \(separate prin spațiu\).

## Exemplu
|**Input**|**Output**|
|-----|------|
| a b c d e | e d c b a |
|-1 hi ho w | w ho hi -1 |


## Sugestii

* Citiți matricea de șiruri.

* **Schimbați**  **primul** element \(at index 0\) cu **ultimul** element \(at index n-1\).

* **Schimbați**  **al doilea** element \(at index 1\) cu **înainte de ultimul** element\(at index n-2\).

* Continuați în același mod până când ajungeți la mijlocul matricei.

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
# Problem: Equal Arrays
[code-task title="Problem: Equal Arrays" taskId="java-fund-Arrays-Equal-Arrays" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul aici
}
```
[/code-editor]
[task-description]
## Descriere
Citiți două matrice și imprimați pe consolă, in funcție  dacă sunt identice sau nu.

Matricele sunt**identice** dacă **elementele lor sunt egale**.

Dacă matricile sunt identice, găsiți **suma primei** și imprimați pe consolă următorul mesaj: 
`"Arrays are identical. Sum: {sum}"`.

în caz contrar, găsiți primul index în care matricile diferă și imprimați pe consolă următorul mesaj::  
`"Arrays are not identical. Found difference at {index} index."`.

## Exemple
|**Input**|**Output**|
|-----|------|------|
| 10 20 30 | Arrays are identical. Sum: 60|
| 10 20 30 | |

|**Input**|**Output**|
|-----|------|------|
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

[slide hideTitle]
# Solution: Equal Arrays
[code-task title="Problem: Equal Arrays" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Arrays;
import java.util.Scanner;

public class LabEqualArrays {
    public static void main(String[] args) {
        // Scrieți soluția aici
}
```
[/code-editor]
[task-description]
## Descriere
Citiți două matrice și imprimați pe consolă, in funcție  dacă sunt identice sau nu.

Matricele sunt**identice** dacă **elementele lor sunt egale**.

Dacă matricile sunt identice, găsiți **suma primei** și imprimați pe consolă următorul mesaj: 
`"Arrays are identical. Sum: {sum}"`.

în caz contrar, găsiți primul index în care matricile diferă și imprimați pe consolă următorul mesaj::  
`"Arrays are not identical. Found difference at {index} index."`.


## Exemple
|**Input**|**Output**|
|-----|------|------|
| 10 20 30 | Arrays are identical. Sum: 60|
| 10 20 30 | |

|**Input**|**Output**|
|-----|------|------|
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
