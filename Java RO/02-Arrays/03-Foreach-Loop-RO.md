[slide]
#  Bucla For-each/For-each loop/

[vimeo-video startTimeInSeconds="6409" endTimeInSeconds="8192"]
[stream language="EN" videoId="421771481" default /]
[stream language="RO" videoId="427418768"  /]
[/vimeo-video]

`For-each` este o alta tehnica de traversara a matricei ca şi buclele  `for`, `while`, `do-while` introduse în Java.

- Începe cu cuvântul cheie `for` ca o buclă normală `for`.

- În loc să declarați și să inițializați o variabilă de contor cu bucla, declarați o variabilă care este de același tip ca şi tipul de bază al matricei, urmată de două puncte, care este apoi urmată de numele matricei.

- În corpul buclei, nu puteți accesa indexul curent, dar puteți utiliza variabila de buclă pe care ați creat-o, mai degrabă decât să utilizați un element matrice indexat.

- Este de obicei folosit pentru a itera peste o matrice.

```Java
for (var item : collection) {
    // Process the value here
}
```
Putem **imprima** o matrice cu `for-each`:

```Java live
int[] numbers = { 1, 2, 3, 4, 5 };
for (int number : numbers) {
   System.out.println(number + " ");
}
```

[/slide]

[slide hideTitle]
# Problem: Even and Odd Subtraction
[code-task title="Problem: Even and Odd Subtraction" taskId="java-fund-07-Arrays-Even-and-Odd-Subtraction" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program care calculează diferența dintre suma numerelor even și odd intr-o matrice.

## Exemple
|**Input**|**Output**|**Comments**|
|-----|------|------|
| 1 2 3 4 5 6 | 3|2 + 4 + 6 = 12 |
| | |1 + 3 + 5 = 9|
| | |12 – 9 = 3|

|**Input**|**Output**|
|-----|------|------|
| 3 5 7 9 | -24|


[/task-description]
[code-io /]
[tests]
[test open]
[input]
1 2 3 4 5 6
[/input]
[output]
3
[/output]
[/test]
[test open]
[input]
3 5 7 9
[/input]
[output]
-24
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
1 2 23 4
[/input]
[output]
-18
[/output]
[/test]
[test]
[input]
1 2 1
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
2 4 5 1 3 6 10
[/input]
[output]
13
[/output]
[/test]
[test]
[input]
2 4 6 8 10 101
[/input]
[output]
-71
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
-1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Solution: Even and Odd Subtraction
[code-task title="Problem: Even and Odd Subtraction" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Arrays;
import java.util.Scanner;

public class EvenAndOddSubtraction {

    public static void main(String[] args) {
        // Scrieți soluția aici
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program care calculează diferența dintre suma numerelor even și odd intr-o matrice.

## Exemple
|**Input**|**Output**|**Comments**|
|-----|------|------|
| 1 2 3 4 5 6 | 3|2 + 4 + 6 = 12 |
| | |1 + 3 + 5 = 9|
| | |12 – 9 = 3|

|**Input**|**Output**|
|-----|------|------|
| 3 5 7 9 | -24|


[/task-description]
[code-io /]
[tests]
[test open]
[input]
1 2 3 4 5 6
[/input]
[output]
3
[/output]
[/test]
[test open]
[input]
3 5 7 9
[/input]
[output]
-24
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
1 2 23 4
[/input]
[output]
-18
[/output]
[/test]
[test]
[input]
1 2 1
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
2 4 5 1 3 6 10
[/input]
[output]
13
[/output]
[/test]
[test]
[input]
2 4 6 8 10 101
[/input]
[output]
-71
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
-1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Condense Array to Number
[code-task title="Problem: Condense Array to Number" taskId="java-fund-Arrays-Condense-Array-to-Number" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Scrieți un program pentru a citi o **matrice de numere întregi** și condensați-le prin **adunarea** cuplurilor adiacente de elemente până când se obține un **număr întreg unic**

De exemplu, dacă avem 3 elemente \{2, 10, 3\}, adunăm primele două și ultimele două elemente și obținem \{2+10, 10+3\} = \{12, 13\}, după care adunăm toate elementele adiacente și obținem \{12+13\} = \{25\}.

## Exemple
|**Input**|**Output**| **Comments** |
|-----|------|------|
| 2 10 3| 25|2 10 3 -> 2+10 10+3 -> 12 13 -> 12 + 13 -> 25 |
| 5 0 4 1 2 | 35|5 0 4 1 2 -> 5+0 0+4 4+1 1+2 -> 5 4 5 3 -> 5+4 4+5 5+3 -> 9 9 8 -> 9+9 9+8 -> 18 17 -> 18+17 -> 35|
| 1 | 1 | 1 is already condensed to number |


### Sugestii

În timp ce avem mai multe elemente în matricea `nums []`, repetați următoarele:

*	Alocați o nouă matrice `condensed[]` de dimensiune `nums.length`.
*	Sum the numbers from `nums[]` to `condensed[]`:

	`condensed[i]` = `nums[i]` + `nums[i+1]`
*	`nums[] = condensed[]`

[/task-description]
[code-io /]
[tests]
[test open]
[input]
2 10 3
[/input]
[output]
25
[/output]
[/test]
[test open]
[input]
5 0 4 1 2
[/input]
[output]
35
[/output]
[/test]
[test open]
[input]
1
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
3 4 0 3 4 0 0 0 0 1 2
[/input]
[output]
1255
[/output]
[/test]
[test]
[input]
0 0 0
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
-5 -10 -15 -5
[/input]
[output]
-85
[/output]
[/test]
[test]
[input]
-1 2 -3 4 -5 6 -7 8 -9
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
-1 -1 -1 -1 -1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 -1
[/input]
[output]
514214
[/output]
[/test]
[test]
[input]
10
[/input]
[output]
10
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Solution: Condense Array to Number
[code-task title="Problem: Condense Array to Number" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Arrays;
import java.util.Scanner;

public class P7_Condense_Array_to_Number {
    public static void main(String[] args) {
        // Scrieți soluția aici
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți un program pentru a citi o **matrice de numere întregi** și condensați-le prin **adunarea** cuplurilor adiacente de elemente până când se obține un **număr întreg unic**

De exemplu, dacă avem 3 elemente \{2, 10, 3\}, adunăm primele două și ultimele două elemente și obținem \{2+10, 10+3\} = \{12, 13\}, după care adunăm toate elementele adiacente și obținem \{12+13\} = \{25\}.

## Exemple
|**Input**|**Output**| **Comments** |
|-----|------|------|
| 2 10 3| 25|2 10 3 -> 2+10 10+3 -> 12 13 -> 12 + 13 -> 25 |
| 5 0 4 1 2 | 35|5 0 4 1 2 -> 5+0 0+4 4+1 1+2 -> 5 4 5 3 -> 5+4 4+5 5+3 -> 9 9 8 -> 9+9 9+8 -> 18 17 -> 18+17 -> 35|
| 1 | 1 | 1 is already condensed to number |

### Sugestii

În timp ce avem mai multe elemente în matricea `nums []`, repetați următoarele:

*	Alocați o nouă matrice `condensed[]` de dimensiune `nums.length`.
*	Sum the numbers from `nums[]` to `condensed[]`:

	`condensed[i]` = `nums[i]` + `nums[i+1]`
*	`nums[] = condensed[]`


[/task-description]
[code-io /]
[tests]
[test open]
[input]
2 10 3
[/input]
[output]
25
[/output]
[/test]
[test open]
[input]
5 0 4 1 2
[/input]
[output]
35
[/output]
[/test]
[test open]
[input]
1
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
3 4 0 3 4 0 0 0 0 1 2
[/input]
[output]
1255
[/output]
[/test]
[test]
[input]
0 0 0
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
-5 -10 -15 -5
[/input]
[output]
-85
[/output]
[/test]
[test]
[input]
-1 2 -3 4 -5 6 -7 8 -9
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
-1 -1 -1 -1 -1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 -1
[/input]
[output]
514214
[/output]
[/test]
[test]
[input]
10
[/input]
[output]
10
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
