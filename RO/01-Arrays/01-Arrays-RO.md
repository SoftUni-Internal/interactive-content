# Matrice

[slide hideTitle]
# Definiție
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/02.Java-Fundamentals-Arrays/RO/02-Java-Fundamentals-Arrays-3-4-What-are-arrays-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Matricele** ne permit să stocăm mai multe date într-o singură variabilă.

Matricele sunt utile pentru păstrarea unei secvențe de date și pentru parcurgerea acesteia.

Puteți inițializa o **matrice** și valorile din cadrul acesteia prin încadrarea valorilor între acolade și separarea acestora prin virgulă. 

``` java
String[] days = { "apple", "pear", "cherry" };
```

O matrice poate conține valori duplicate.

```Java
int[] numbers = { 1, 1, 2, 4, 5 };
```

Valorile unei matrice se numesc **elemente**.

## Exemplu din Viața Reală

Imaginați-vă un tren care are vagoane, iar fiecare vagon are pasageri.

Acum imaginați-vă acest lucru ca fiind o matrice de numere întregi. Fiecare element reprezintă un vagon și valoarea sa reprezintă numărul de pasageri.

Matricele pot fi vizualizate sub următoarea formă:

[image assetsSrc="array-real-live-example.jpg" /]

Acest tren are **7 vagoane (elemente)**. Fiecare vagon are **pasageri (o valoare)**. \{3, 4, 10, 7, 5, 0, 6\}

Matricele stau la **baza** altor tipuri de date abstracte precum: **List**, **Stack**, **Queue**.


[/slide]

[slide hideTitle]
# Cum să Lucrați cu Matrice
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/02.Java-Fundamentals-Arrays/RO/02-Java-Fundamentals-Arrays-5-working-with-arrays-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Matricele sunt utilizate pentru stocarea mai multor valori într-o singură variabilă, în locul declarării unor variabile separate pentru fiecare valoare.

Matricele au o dimensiune fixă. Acest lucru înseamnă că nu pot fi redimensionate.

Elementele sunt întotdeauna reprezentate de **același tip de date**.

Indicii matricelor sunt numerotați de la **0** la **length - 1**.

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

Mai jos avem câteva explicații legate de exemplul de mai sus.

**Alocăm** o matrice de 5 numere întregi.

După aceea, **inițializăm** matricea, iar toate valorile sale sunt setate la 0, deoarece valoarea implicită a unei valori **int** este zero.

**Atribuim** o valoare elementelor matricei.

Lungimea reprezintă numărul de elementele din matrice.

În bucla for folosim expresia `i < numbers.length` deoarece primul indice al matricei are valoarea 0, iar ultimul element este `numbers[4]`.

După aceea, vom **accesa** elementele matricei cu ajutorul indicilor.

După cum am menționat mai sus, primul indice al unei matrice este întotdeauna 0, iar ultimul indice este `array.length - 1`.

În total avem 5 elemente în matricea noastră, dar ultimul element corespunde indicelui 4, deci efectuăm operația `array.length - 1 = 4`.

Operatorul `[]` accesează elementele cu ajutorul indicelui acestora.

Dacă încercăm să accesăm un element care corespunde unui indice nevalid, vom obține o excepție.


[/slide]

[slide hideTitle]
# Problemă cu Soluție: Day of Week
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/02.Java-Fundamentals-Arrays/RO/02-Java-Fundamentals-Arrays-6-7-problem-and-solution-day-of-week-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


[code-task title="Day of Week" taskId="java-fund-1-arrays-lab-day-of-week" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Introduceți un **număr din intervalul** \[1…7\] și imprimați **numele zilei corespunzătoare** \(în limba engleză\) sau "**Invalid Day!**".

Utilizați o **matrice de șiruri**.

## Exemple
|**Intrare**|**Ieșire**|
|-----|------|
| 1 | Monday |
| 2 | Tuesday |
| 7 | Sunday |
| 0 | Invalid day! |

[hints] 
[hint] 
Utilizați o matrice de șiruri care conține numele zilelor:
`{Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday}`
[/hint] 
[hint] 
Imprimați elementul corespunzător indicelui dat (nu uitați să scădeți 1) atunci când acesta se află în intervalul \[1…7\] sau "**Invalid Day!**" în caz contrar.
[/hint] 
[/hints]

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

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/02.Java-Fundamentals-Arrays/RO/02-Java-Fundamentals-Arrays-problem-and-solution-sum-even-numbers-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Sum Even Numbers" taskId="java-fund-1-arrays-lab-sum-even-numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Citiți o matrice de pe consolă și însumați doar numerele pare.

## Exemple
|**Intrare**|**Ieșire**|
|---|---|
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

