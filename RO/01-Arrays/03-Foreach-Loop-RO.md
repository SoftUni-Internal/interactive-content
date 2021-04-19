# Bucla "for-each" 
[slide hideTitle]
# Definiție
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/02.Java-Fundamentals-Arrays/RO/02-Java-Fundamentals-Arrays-18-19-For-each-loop-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

`For-each` este o alta tehnica de traversare a matricei ca şi buclele `for`, `while`, `do-while` introduse în Java.

Începe cu cuvântul cheie `for` ca o buclă normală `for`.

În loc să declarați și să inițializați o variabilă de contor cu bucla, declarați o variabilă care este de același tip ca şi tipul de bază al matricei, urmată de două puncte, care este apoi urmată de numele matricei.

În corpul buclei, nu puteți accesa indexul curent, dar puteți utiliza variabila de buclă pe care ați creat-o, mai degrabă decât să utilizați un element matrice indexat.

Este de obicei folosit pentru a itera peste o matrice.

```Java
for (var item : collection) {
    // Process the value here
}
```
[/slide]

[slide hideTitle]
# Imprimarea Unei Matrice cu Bucla Foreach
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/02.Java-Fundamentals-Arrays/RO/02-Java-Fundamentals-Arrays-20-For-each-loop-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Putem **imprima** o matrice cu **for-each**:

```Java live
int[] numbers = { 1, 2, 3, 4, 5 };

for (int number: numbers) {
    System.out.println(number + " ");
}
```

Un lucru de remarcat aici este că nu ați putea manipula elementele unei matrice, în timp ce iterați cu **for-each**. 


[/slide]

[slide hideTitle]
# Problemă cu Soluție: Even and Odd Subtraction

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/02.Java-Fundamentals-Arrays/RO/02-Java-Fundamentals-Arrays-21-22-problem-and-solution-even-and-odd-subtraction-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Even and Odd Subtraction" taskId="java-fund-1-arrays-lab-even-and-odd-subtraction" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Creați un program care calculează diferența dintre **suma numerelor pare** și **suma numerelor impare** dintr-o matrice.

## Exemple
|**Intrare**|**Ieșire**|**Comentarii**|
|-----|------|------|
| 1 2 3 4 5 6 | 3|2 + 4 + 6 = 12 |
| | |1 + 3 + 5 = 9|
| | |12 – 9 = 3|

|**Intrare**|**Ieșire**|
|-----|------|
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
# Problemă cu Soluție: Condense Array to Number

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/02.Java-Fundamentals-Arrays/RO/02-Java-Fundamentals-Arrays-problem-and-solution-condense-array-to-number-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Condense Array to Number" taskId="java-fund-1-arrays-lab-condense-array-to-number" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Creați un program care citește o **matrice de numere întregi** și le condensează prin **adunarea** cuplurilor adiacente de elemente până când se obține un **singur număr întreg**

De exemplu, să spunem că avem **3** elemente - \{2, 10, 3\}

Adunăm primele două și ultimele două elemente și obținem \{2+10, 10+3\} = \{12, 13\}, după ce adunăm toate elementele adiacente.

Acest lucru are ca rezultat \{12+13\} = \{25\}.

## Exemple
|**Intrare**|**Ieșire**| **Comentarii** |
|-----|------|------|
| 2 10 3| 25|2 10 3 -> 2+10 10+3 -> 12 13 -> 12 + 13 -> 25 |
| 5 0 4 1 2 | 35|5 0 4 1 2 -> 5+0 0+4 4+1 1+2 -> 5 4 5 3 -> 5+4 4+5 5+3 -> 9 9 8 -> 9+9 9+8 -> 18 17 -> 18+17 -> 35|
| 1 | 1 | 1 is already condensed to number |


[hints] 
[hint] 
În timp ce avem mai multe elemente în matricea `nums []`, repetați următoarele:

* Alocați o nouă matrice `condensed[]` de dimensiune `nums.length`
* Adunați numerele de la  `nums[]` la `condensed[]`:
    - `condensed[i]` = `nums[i]` + `nums[i+1]`
    - `nums[] = condensed[]`
[/hint] 
[/hints]

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

