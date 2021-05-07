# Tipul Boolean
[slide hideTitle]

# Tipul de Date Boolean
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/RO/interactive-java-fundamentals-data-types-and-variables-34-35-boolean-type-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Tipul de date boolean este declarat prin cuvântul cheie **boolean**. Acesta are două valori posibile: **true** sau **false**.

```java live
 int firstNumber = 5;
 int secondNumber = 10;

 boolean firstBoolean = true;
 boolean secondBoolean = false;

 if (firstNumber < secondNumber) {
     System.out.println(firstBoolean);
 } else {
     System.out.println(secondBoolean);
 }    
```


[/slide]

[slide hideTitle]
# Problemă cu Soluție: Special Numbers
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/RO/java-fund-data-types-and-variables-36-problem-and-solution-special-numbers-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Special Numbers" taskId="java-fund-1-data-types-lab-special-numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
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

Un **număr** este **special** dacă **suma cifrelor sale este 5, 7 sau 11**.

Creați un program care citește un număr întreg **n**. 

Imprimați toate numerele din intervalul **1 ... n** și dacă sunt speciale sau nu - **(True / False)**, în formatul exemplificat mai jos.

## Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| 15 | 1 -> False|
|  | 2 -> False |
|  | 3 -> False |
|  | 4 -> False |
|  | 5 -> True |
|  | 6 -> False |
|  | 7 -> True |
|  | 8 -> False |
|  | 9 -> False |
|  | 10 -> False |
|  | 11 -> False |
|  | 12 -> False |
|  | 13 -> False |
|  | 14 -> True |
|  | 15 -> False |
 
[hints] 
[hints]
[hint]
Creați o **buclă for** de la **1** la **n** (inclusiv).

```java
for (int num = 1; num <= n; num++)
```
[/hint] 
[hint]
Înăuntrul acesteia, declarați o variabilă numită `sumOfDigits`, a cărei valoare este setată la **zero**.
După aceea, creați o variabilă numită `digits`, egală cu `num`.

```java
int sumOfDigits = 0;

int digits = num;
```
[/hint] 
[hint]
Incrementați suma cât timp `digits` este mai mare decât 0.

```java
while (digits > 0)   {
  sumOfDigits += digits % 10;

}
```

Folosiți operatorul modulo `%` pentru a efectua împărțirea la 10.
Această operație va prelua ultima cifră.
[/hint] 
[hint]
După aceea, împărțiți `digits` la 10 pentru a elimina ultima cifră.

```java
digits = digits / 10;
```
[/hint] 
[hint]
La final, utilizați o **instrucțiune if** pentru a verifica fiecare număr:

```java
if (sumOfDigits == 5 || …)  {
   // Print True…
} else  {
   // Print False…
}
```

Tipăriți ieșirea corespunzătoare.
[/hint] 
[/hints] 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
15
[/input]
[output]
1 -\> False
2 -\> False
3 -\> False
4 -\> False
5 -\> True
6 -\> False
7 -\> True
8 -\> False
9 -\> False
10 -\> False
11 -\> False
12 -\> False
13 -\> False
14 -\> True
15 -\> False
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
1 -\> False
[/output]
[/test]
[test]
[input]
5
[/input]
[output]
1 -\> False
2 -\> False
3 -\> False
4 -\> False
5 -\> True
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
1 -\> False
2 -\> False
3 -\> False
4 -\> False
[/output]
[/test]
[test]
[input]
40
[/input]
[output]
1 -\> False
2 -\> False
3 -\> False
4 -\> False
5 -\> True
6 -\> False
7 -\> True
8 -\> False
9 -\> False
10 -\> False
11 -\> False
12 -\> False
13 -\> False
14 -\> True
15 -\> False
16 -\> True
17 -\> False
18 -\> False
19 -\> False
20 -\> False
21 -\> False
22 -\> False
23 -\> True
24 -\> False
25 -\> True
26 -\> False
27 -\> False
28 -\> False
29 -\> True
30 -\> False
31 -\> False
32 -\> True
33 -\> False
34 -\> True
35 -\> False
36 -\> False
37 -\> False
38 -\> True
39 -\> False
40 -\> False
[/output]
[/test]
[test]
[input]
75
[/input]
[output]
1 -\> False
2 -\> False
3 -\> False
4 -\> False
5 -\> True
6 -\> False
7 -\> True
8 -\> False
9 -\> False
10 -\> False
11 -\> False
12 -\> False
13 -\> False
14 -\> True
15 -\> False
16 -\> True
17 -\> False
18 -\> False
19 -\> False
20 -\> False
21 -\> False
22 -\> False
23 -\> True
24 -\> False
25 -\> True
26 -\> False
27 -\> False
28 -\> False
29 -\> True
30 -\> False
31 -\> False
32 -\> True
33 -\> False
34 -\> True
35 -\> False
36 -\> False
37 -\> False
38 -\> True
39 -\> False
40 -\> False
41 -\> True
42 -\> False
43 -\> True
44 -\> False
45 -\> False
46 -\> False
47 -\> True
48 -\> False
49 -\> False
50 -\> True
51 -\> False
52 -\> True
53 -\> False
54 -\> False
55 -\> False
56 -\> True
57 -\> False
58 -\> False
59 -\> False
60 -\> False
61 -\> True
62 -\> False
63 -\> False
64 -\> False
65 -\> True
66 -\> False
67 -\> False
68 -\> False
69 -\> False
70 -\> True
71 -\> False
72 -\> False
73 -\> False
74 -\> True
75 -\> False
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


