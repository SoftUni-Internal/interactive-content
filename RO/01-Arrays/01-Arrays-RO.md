# Matrice

[slide hideTitle]
# Definiție
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/02.Java-Fundamentals-Arrays/RO/02-Java-Fundamentals-Arrays-3-4-What-are-arrays-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Matricele** ne permit să stocăm mai multe date într-o singură variabilă.

Matricele sunt utile pentru păstrarea unei secvențe de date și repetarea acesteia.

Puteți inițializa o **matrice** și să setați valorile înăuntrul ei prin încadrarea acestora între acolade, separând valorile prin virgule. 

``` java
String[] days = { "apple", "pear", "cherry" };
```

O singură matrice poate conține valori duplicate.

```Java
int[] numbers = { 1, 1, 2, 4, 5 };
```

Valorile dintr-o matrice se numesc **elemente**.

## Exemplu din viața reală

Imaginați-vă un tren care are vagoane și fiecare vagon - pasageri.

Acum imaginați-vă acest lucru ca o serie de numere întregi, fiecare element reprezintă un vagon și valoarea sa sunt pasagerii.

Uitați-vă la această imagine:

[image assetsSrc="array-real-live-example.jpg" /]

Există **7 vagoane (elemente)**. Fiecare are  **pasageri (o valoare)**. \{3, 4, 10, 7, 5, 0, 6\}

Matricele sunt **baza** pentru alte tipuri de date abstracte precum  **list**, **stack**, **queue**.


[/slide]

[slide hideTitle]
# Cum să Lucrați cu Matricele
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/02.Java-Fundamentals-Arrays/RO/02-Java-Fundamentals-Arrays-5-working-with-arrays-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Matricele sunt utilizate pentru stocarea mai multor valori într-o singură variabilă, în loc de declararea variabilelor separate pentru fiecare valoare.

Matricele au o dimensiune fixă. 

Aceasta înseamnă că nu pot fi redimensionate.

Elementele sunt întotdeauna de **același tip**.

Indecșii matricelor sunt numerotați de la **0** la **length - 1**.

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

Apoi **inițializăm** matricele, dar toate valorile sunt 0, deoarece valoarea implicită a  **int** este zero.

**Atribuim** o valoare elementelor matricei.

Lungimea conține numărul elementelor matricei.

În bucla for folosim `i < numbers.length`, deoarece indecșii matricei sunt bazate pe zero, ceea ce înseamnă că primul index al unei matrice este 0, iar ultimul element este `numbers[4]`.

**Accesarea** elementelor matricei după index.

După cum am menționat mai sus, primul index al unei matrice este întotdeauna 0, iar ultimul index este `array.length - 1`.

În total, avem 5 elemente în matricea noastră, dar ultimul element este la indexul 4, deci scădem `array.length - 1 = 4` care este ultimul nostru index.

Operatorul `[]` accesează elementele după index.

Dacă încercăm să accesăm elementul de pe un index nevalid, vom obține o excepție.


[/slide]

[slide hideTitle]
# Problemă cu Soluție: Day of Week
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/02.Java-Fundamentals-Arrays/RO/02-Java-Fundamentals-Arrays-6-7-problem-and-solution-day-of-week-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


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

## Sfaturi
* Utilizați o matrice de șiruri care conține numele zilelor: `{Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday}`

* Imprimați elementul la indexul \(day-1\), atunci când este în intervalul \[1…7\] sau "**Invalid Day!**" in caz contrar


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
# Problemă cu Soluție: Sum Even Numbers

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/02.Java-Fundamentals-Arrays/RO/02-Java-Fundamentals-Arrays-problem-and-solution-sum-even-numbers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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
Citiți o matrice de pe consolă și adunați doar numerele pare.

## Exemple
|**Intrare**|**Ieșire**|**Comentarii**|
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

