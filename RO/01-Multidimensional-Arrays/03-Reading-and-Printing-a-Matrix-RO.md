# Citirea și Tipărirea unei Matrice Multidimensionale

[slide hideTitle]

# Citirea și Tipărirea unei Matrice Multidimensionale

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/03-Multidimentional-Arrays/RO/interactive-java-advanced-multidimensional-arrays-11-Reading-A-Matrix-Example-And-Demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

```java
// Enter the length 
int rows = Integer.parseInt(scanner.nextLine());
int cols = Integer.parseInt(scanner.nextLine());

// Initializing a new matrix
int[][] matrix = new int[rows][cols];

// For-loop through the rows of the matrix
for (int row = 0; row < rows; row++) {

    // Read a new line with elements separated by space    
    String[] inputTokens = scanner.nextLine().split(" ");

    // For-loop through the columns
    for (int column = 0; column < cols; column++) {

    // Getting an element of the current row and column and assigning a value  
    matrix[row][column] = Integer.parseInt(inputTokens[column]);
    }
}
```

- Întâi, citim lungimea rândurilor și a coloanelor matricei
- Apoi, inițializăm o matrice de numere întregi cu numărul dat de rânduri și coloane 
- Creăm o **buclă-for** pentru a parcurge rândul unei matrice unidimensionale
- Apoi, citim elementele care vor face parte din matricea noastra bidimensională
- Avem nevoie de o buclă interioară care va parcurge coloana unei matrice unidimensionale particulare
- La sfârșit, setăm valoarea propiu-zisă a matricei noastre

Aceasta este una dintre metodele standard de a tipări o matrice bidimensională:

```java live
int[][] matrix = {{1, 2, 3, 4},
                  {5, 6, 7, 8}};

// Printing the matrix
for (int row = 0; row < matrix.length; row++) {
    for (int col = 0; col < matrix[row].length; col++) {
        int element = matrix[row][col];
        System.out.print(element + " ");
    }
    System.out.println();
}
```

Accesăm elementele matricei unul câte unul și le tipărim, separate printr-un spațiu.

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Compare Matrices

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/03-Multidimentional-Arrays/RO/interactive-java-advanced-multidimensional-arrays-12-Problem-And-Solution-Compare-Matrices-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Compare Matrices" taskId="java-advanced-lab-multidimensional-arrays-Compare-Matrices" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Creați un program care citește două matrice "2D" de numere întregi de la consolă și le compară element cu element.

Pentru o mai bună reutilizare a codului, puteți realiza compararea într-o metodă care returnează **true** dacă sunt egale și **false** în caz contrar.

Fiecare definiție a unei matrice va conține o linie cu un număr întreg pozitiv `R` - numărul de rânduri ale matricei și `C` - numărul de coloane. În continuare vor urma `R` linii care conțin `C` numere, separate prin spații - **fiecare linie va avea un număr egal de elemente**.

Matricele vor avea cel mult **10** rânduri și **10** coloane.  

Tipăriți "**equal**" dacă matricele sunt echivalente, respectiv "**not equal**" dacă acestea sunt diferite.

## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 2 3 | equal |
| 1 2 3 |  |
| 2 1 3 |  |
| 2 3 |  |
| 1 2 3 |  |
| 2 1 3 |  |

| **Intrare** | **Ieșire** |
| --- | --- |
| 2 3 | not equal |
| 1 2 3 |  |
| 4 5 6 |  |
| 2 2 |  |
| 1 3 |  |
| 4 5 |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
2 3
1 2 3
2 1 3
2 3
1 2 3
2 1 3
[/input]
[output]
equal
[/output]
[/test]
[test open]
[input]
2 3
1 2 3
4 5 6
2 2
1 3
4 5
[/input]
[output]
not equal
[/output]
[/test]
[test]
[input]
1 3
1 2 3
1 3
1 2 3
[/input]
[output]
equal
[/output]
[/test]
[test]
[input]
4 1
1
11
21
31
4 1
1
11
21
31
[/input]
[output]
equal
[/output]
[/test]
[test]
[input]
2 3
1 2 3
4 5 6
2 2
1 2
3 4
[/input]
[output]
not equal
[/output]
[/test]
[test]
[input]
3 1
1
2
3
4 1
1
2
3
5
[/input]
[output]
not equal
[/output]
[/test]
[test]
[input]
10 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
10 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
[/input]
[output]
equal
[/output]
[/test]
[test]
[input]
10 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
10 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 4
[/input]
[output]
not equal
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă cu Soluție: Positions Of

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/03-Multidimentional-Arrays/RO/interactive-java-advanced-multidimensional-arrays-16-Problem-And-Solution-Position-Of-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Positions of" taskId="java-advanced-lab-multidimensional-arrays-Positions-Of" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Creați un program care citește o **matrice de numere întregi de la consolă**, apoi un număr și tipărește toate pozițiile pe care apare acel număr în matrice.

Definirea matricei pe consolă va conține o linie cu două **numere întregi pozitive** `R` și `C` - numărul de rânduri și coloane din matrice. Apoi, vor urma `R` linii, fiecare conținând `C` numere (**separate prin spații**), reprezentând fiecare linie a matricei.

Numărul ale cărui poziții va trebui să le găsiți va fi introdus pe o singură linie după matrice.

Trebuie să tipăriți fiecare poziție pe o singură linie. Prima dată tipăriți linia, apoi coloana pe care apare numărul.

Dacă numărul nu apare în matrice, tipăriți `not found`.

## Exemple
| **Intrare** | **Ieșire** |
| --- | --- |
| 2 3 | 0 1 |
| 1 2 3 | 1 1 |
| 4 2 2 | 1 2 |
| 2 |  |

| **Intrare** | **Ieșire** |
| --- | --- |
| 2 3 | not found |
| 1 -2 -3 |  |
| 4 -5 6 |  |
| 5 |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
2 3
1 2 3
4 2 2
2
[/input]
[output]
0 1
1 1
1 2
[/output]
[/test]
[test open]
[input]
2 3
1 -2 -3
4 -5 6
5
[/input]
[output]
not found
[/output]
[/test]
[test]
[input]
2 3
1 2 3
4 5 6
3
[/input]
[output]
0 2
[/output]
[/test]
[test]
[input]
2 2
1 2
3 4
13
[/input]
[output]
not found
[/output]
[/test]
[test]
[input]
5 3
1 1 1
1 1 1
1 1 1
1 1 1
1 1 1
1
[/input]
[output]
0 0
0 1
0 2
1 0
1 1
1 2
2 0
2 1
2 2
3 0
3 1
3 2
4 0
4 1
4 2
[/output]
[/test]
[test]
[input]
4 4
1 2 3 4
1 2 3 4
1 2 3 4
1 2 3 4
4
[/input]
[output]
0 3
1 3
2 3
3 3
[/output]
[/test]
[test]
[input]
4 4
1 1 1 1
1 2 2 1
1 2 2 1
1 1 1 1
2
[/input]
[output]
1 1
1 2
2 1
2 2
[/output]
[/test]
[test]
[input]
10 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
13
[/input]
[output]
not found
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă cu Soluție: Sum of All Elements of a Matrix

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/03-Multidimentional-Arrays/RO/interactive-java-advanced-multidimensional-arrays-18-Problem-And-Solution-Sum-Of-All-Elements-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Sum of All Elements of Matrix" taskId="java-advanced-lab-multidimensional-arrays-Sum-of-All-Elements-of-Matrix" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Creați un program care **citește o matrice de la consolă și tipărește**:
  - Numărul de rânduri
  - Numărul de coloane
  - Suma tuturor elementelor matricei

Pe **prima linie** veți primi **dimensiunile** matricei, rânduri și coloane, **separate printr-o virgulă și un spațiu: ", "**.

Pe **următoarele linii** veți primi elementele pentru fiecare rând, **separate printr-o virgulă și un spațiu**.
 
## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 3, 6 | 3 |
| 7, 1, 3, 3, 2, 1 | 6 |
| 1, 3, 9, 8, 5, 6 | 76 |
| 4, 6, 7, 9, 1, 0 |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
3, 6
7, 1, 3, 3, 2, 1
1, 3, 9, 8, 5, 6
4, 6, 7, 9, 1, 0
[/input]
[output]
3
6
76
[/output]
[/test]
[test open]
[input]
2, 4
10, 11, 12, 13
14, 15, 16, 17
[/input]
[output]
2
4
108
[/output]
[/test]
[test]
[input]
5, 4
0, 1, 2, 3
4, 5, 6, 7
8, 9, 10, 11
12, 13, 14, 15
16, 17, 18, 19
[/input]
[output]
5
4
190
[/output]
[/test]
[test]
[input]
5, 4
0, -1, 2, 3
4, 5, -6, 7
8, 9, 10, 11
12, -13, 14, 15
16, 17, 18, -19
[/input]
[output]
5
4
112
[/output]
[/test]
[test]
[input]
1, 4
0, -1, 2, 3
[/input]
[output]
1
4
4
[/output]
[/test]
[test]
[input]
5, 1
0
4
8
12
16
[/input]
[output]
5
1
40
[/output]
[/test]
[test]
[input]
5, 4
0, -100, 2, 3
4, 5, -6000, 7
8, 9, 10, 11
12, -13, 14, 15
16, 1700, 18, -19
[/input]
[output]
5
4
-4298
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă cu Soluție: Maximum Sum of 2X2 Submatrix

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/03-Multidimentional-Arrays/RO/interactive-java-advanced-multidimensional-arrays-20-Problem-And-Solution-Maximum-Sum-Of-2x2-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Maximum Sum of 2X2 Submatrix" taskId="java-advanced-lab-multidimensional-arrays-Maximum-Sum-of-2X2-Submatrix" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Scrieți codul dvs. aici
    }
}
```
[/code-editor]
[task-description]
## Descriere
Creați un program care **citește o matrice de la consolă**.

Găsiți cea mai mare sumă a unei **submatrice 2x2**.

**Tipăriți submatricea și suma acesteia.**

Pe **prima linie** veți primi **dimensiunile** matricei, `rows` și `columns`, **separate printr-o virgulă și un spațiu: ", "**.

Pe **următoarele linii** veți primi elementele fiecărui rând, **separate printr-o virgulă și un spațiu: ", "**.


## Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| 3, 6 | 9 8 |
| 7, 1, 3, 3, 2, 1 | 7 9 |
| 1, 3, 9, 8, 5, 6 | 33 |
| 4, 6, 7, 9, 1, 0 |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
3, 6
7, 1, 3, 3, 2, 1
1, 3, 9, 8, 5, 6
4, 6, 7, 9, 1, 0
[/input]
[output]
9 8
7 9
33
[/output]
[/test]
[test open]
[input]
2, 4
10, 11, 12, 13
14, 15, 16, 17
[/input]
[output]
12 13
16 17
58
[/output]
[/test]
[test]
[input]
5, 4
0, 1, 2, 3
4, -5, 6, 7
8, 9, 10, -11
12, -13, 14, 15
16, 17, 18, -19
[/input]
[output]
-13 14
17 18
36
[/output]
[/test]
[test]
[input]
2, 2
0, -1
4, 5
[/input]
[output]
0 -1
4 5
8
[/output]
[/test]
[test]
[input]
4, 5
20, 18, 22, 20, 16
18, 20, 18, 21, 20
16, 18, 16, 20, 24
25, 24, 22, 24, 25
[/input]
[output]
20 24
24 25
93
[/output]
[/test]
[test]
[input]
3, 3
0, 0, 0
0, 1, 0
0, 0, 0
[/input]
[output]
0 0
0 1
1
[/output]
[/test]
[test]
[input]
5, 4
0, -100, 2, 3
4, 5, -6000, 7
8, 9, 10, 11
12, -13, 14, 15
16, 1700, 18, -19
[/input]
[output]
-13 14
1700 18
1719
[/output]
[/test]
[/tests]
[/code-task]
[/slide]





