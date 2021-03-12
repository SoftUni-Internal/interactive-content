# Matrice

[slide hideTitle]
# Definiție

Ști deja cum să stocaţi date individuale într-o singură variabilă. Matricele ne permit să stocăm mai multe date, din nou, într-o singură variabilă.

Matricele sunt utile pentru păstrarea unei secvențe de date și repetarea lor.

Acestea sunt încadrate între paranteze cretate, iar valorile din interiorul acesteia sunt separate printr-o virgulă.

``` java
String[] days = { "apple", "pear", "cherry" };
```

O singură matrice poate conține valori duplicate.

```Java
int[] numbers = { 1, 1, 2, 4, 5 };
```

Valorile dintr-o matrice se numesc elemente.

## Exemplu din viața reală

Imaginați-vă un tren care are vagoane și fiecare vagon - pasageri.

Acum imaginați-vă acest lucru ca o serie de numere întregi, fiecare element reprezintă un vagon și valoarea sa sunt pasagerii.

Uitați-vă la această imagine:

[image assetsSrc="array-real-live-example.jpg" /]

Există **7 vagoane (elemente)**. Fiecare are  **pasageri (o valoare)**. \{3, 4, 10, 7, 5, 0, 6\}

Matricele sunt **baza** pentru alt etipuri de date abstracte precum  **list**, **stack**, **queue**.

Veți afla despre aceste structuri în cursurile următoare.

[/slide]

[slide hideTitle]
# Cum lucră cu matricele

Matricele sunt utilizate pentru stocarea mai multor valori într-o singură variabilă, în loc pentru  declararea variabilor separate pentru fiecare valoare.

Matricele au o dimensiune fixă. Aceasta înseamnă că nu pot fi redimensionate.

Elementele sunt întotdeauna de **același tip**.

Indicile matricelor sunt numerotate de la from **0** la **lungime-1**.

**Exemplu:**
```Java live
 //Allocating
 int[] numbers = new int[5];
 System.out.println(Arrays.toString(numbers));

 for (int i = 0; i < numbers.length; i++) {
  //Assigning a value
  numbers[i] = i + 1;
 }

 System.out.println(Arrays.toString(numbers));

 //Accessing
 numbers[4] = numbers[2] + numbers[3];
 System.out.println(numbers[4]);

 // System.out.println(numbers[5]);  Error: Index 5 out of bounds for length 5 at Array.
```

Mai jos avem câteva explicații despre exemplul pe care îl puteți vedea mai sus.

**Alocăm** o matrice cu 5 numere întregi.

Apoi **inițializăm** matricele, dar toate valorile sunt 0, deoarece valoarea sa implicită este zero.

**Atribuim** o valoare elementelor matricei.

Lungimea conține numărul elementelor matricei.

In for-loop noi folosim `i < numbers.length` deoarece indexurile matricei sunt bazate pe zero, ceea ce înseamnă că primul index al unei matrice este 0, iar ultimul element este `numbers[4]`.

**Accesarea** elementelor matricei după index.

După cum am menționat mai sus, primul index al unei matrice este întotdeauna 0, iar ultimul index este `array.length - 1`.

În total, avem 5 elemente în matricea noastră, dar ultimul element este la indexul 4, deci scădem `array.length - 1 = 4` care este ultimul nostru index.

Operatorul `[]` accesează elementele după index.

Dacă încercăm să accesăm elementul de pe un index nevalid, vom obține o excepție.


[/slide]

[slide hideTitle]
# Problem with Solution: Day of Week

[code-task title="Day of Week" taskId="java-fund-1-arrays-lab-day-of-week" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Introduceți un **număr de zi** \[1…7\] și imprimați **numele zilei**\ (în limba engleză\) sau "**Invalid Day!**".

Utilizați o **matrice de șiruri**.

## Exemple
|**Input**|**Output**|
|-----|------|
| 1 | Monday |
| 2 | Tuesday |
| 7 | Sunday |
| 0 | Invalid day! |

## Sugestii
* Utilizați o matrice de șiruri care conțin numele zilei: `{Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday}`

* Imprimați elementul la indexul \(day-1\) atunci când este în intervalul \[1…7\] sau "**Invalid Day!**" in caz contrar


[/task-description]
[code-io /]
[tests]
[test open]
[input]
1
[/input]
[output]
Monday
[/output]
[/test]
[test open]
[input]
2
[/input]
[output]
Tuesday
[/output]
[/test]
[test open]
[input]
7
[/input]
[output]
Sunday
[/output]
[/test]
[test open]
[input]
0
[/input]
[output]
Invalid day!
[/output]
[/test]
[test]
[input]
3
[/input]
[output]
Wednesday
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
Thursday
[/output]
[/test]
[test]
[input]
5
[/input]
[output]
Friday
[/output]
[/test]
[test]
[input]
6
[/input]
[output]
Saturday
[/output]
[/test]
[test]
[input]
7
[/input]
[output]
Sunday
[/output]
[/test]
[test]
[input]
0
[/input]
[output]
Invalid day!
[/output]
[/test]
[test]
[input]
8
[/input]
[output]
Invalid day!
[/output]
[/test]
[test]
[input]
-150
[/input]
[output]
Invalid day!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem with Solution: Sum Even Numbers

[code-task title="Sum Even Numbers" taskId="java-fund-1-arrays-lab-sum-even-numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Citiți o matrice de pe consolă și adunați doar numerele pare/Even/.

## Exemple
|**Input**|**Output**|**Comments**|
|-----|------|------|
| 1 2 3 4 5 6 | 12|
| 3 5 7 9 | 0 |
| 2 4 6 8 10 | 30|

[/task-description]
[code-io /]
[tests]
[test open]
[input]
1 2 3 4 5 6
[/input]
[output]
12
[/output]
[/test]
[test open]
[input]
3 5 7 9
[/input]
[output]
0
[/output]
[/test]
[test open]
[input]
2 4 6 8 10
[/input]
[output]
30
[/output]
[/test]
[test]
[input]
1 1 1
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
2
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
2 4 3 1
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
12 22 32 44
[/input]
[output]
110
[/output]
[/test]
[test]
[input]
1 2 3 4 5 6 7 8 9 10
[/input]
[output]
30
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

