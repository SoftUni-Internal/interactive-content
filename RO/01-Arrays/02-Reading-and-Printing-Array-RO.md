# Citirea și imprimarea matricei

[slide hideTitle]
# Citirea matricelor


Nu există nicio posibilitate directă de a prelua matrice în Java folosind Scanner sau orice alt instrument, dar este destul de ușor să obțineți același lucru folosind metode standard **Scanner** și adresând câteva întrebări utilizatorului.

De exemplu, dacă doriți să utilizați o **matrice de șir** ca intrare, aveți nevoie de **lungimea** matricei și apoi puteți utiliza o buclă (loop) pentru a recupera mai multe elemente și a le stoca într-o matrice.

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

## Citirea valorilor matricei dintr-o singură linie

Maricele pot fi citite dintr-o singură linie de valori separate. De exemplu, dacă vrem să citim această matrice: `2 8 30 25 40 72 -2 44 56`:

```Java
String values = sc.nextLine();
String[] items = values.split(" ");
int[] arr = new int[items.length];

for (int i = 0; i < items.length; i++){
  arr[i] = Integer.parseInt(items[i]);
}
```
First, we read the numbers from the console and split them by the empty spaces between them.

Then we initialize a new array with a length equal to the number of elements we read. 

Finally, using a for loop we insert all the values into the array.

We can read an array of integers using `java.util.Arrays;` which is a `class` in Java that allows you to create and manipulate arrays.

We are going to learn about **classes** later in this course, but if you are curious feel free to google it.

## A Shorter Way to Read Arrays

Here is a much shorter way to read an input and create an array from it.

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

We are first reading the input from the console as a string using `scanner.nextLine()`. 

Then we split the input by space using `split(" ")`.

We continue by parsing each string to integer values with `mapToInt(Integer::parseInt)`.

Finally, we convert the result to an array.
[/slide]

[slide hideTitle]
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
[/slide]

[slide hideTitle]
# Problem with Solution: Reverse an Array of Integers
[code-task title="Reverse an Array of Integers" taskId="java-fund-1-arrays-lab-reverse-array-of-integers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
# Imprimarea Matricei folosind String.join()

Utilizați `String.join(x, y)`, unde x este  **separatorul** și **y este matricea** pe care dorim să o imprimăm. 

`String.join(…)` funcționează numai cu `String`:

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
# Problem with Solution: Reverse an Array of Strings

[code-task title="Reverse an Array of Strings" taskId="java-fund-1-arrays-lab-reverse-an-array-of-strings" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

* Citiți matricea de șiruri

* **Schimbați**  **primul** element \(at index 0\) cu **ultimul** element \(at index n-1\)

* **Schimbați**  **al doilea** element \(at index 1\) cu **înainte de ultimul** element\(at index n-2\)

* Continuați în același mod până când ajungeți la mijlocul matricei

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
# Problem with Solution: Equal Arrays

[code-task title="Equal Arrays" taskId="java-fund-1-Arrays-lab-Equal-Arrays" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
"**Arrays are identical. Sum:** \{**sum**\}"

în caz contrar, găsiți primul index în care matricile diferă și imprimați pe consolă următorul mesaj:

"**Arrays are not identical. Found difference at** \{index\} **index.**"

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

