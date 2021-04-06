# Tipuri de Valori și Referințe

[slide hideTitle]

# Tipuri de Valori
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-38-Value-types-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Variabila de tipul **valoare** \(date primitive\) conține o instanță a tipului care conține direct valoarea lor. 

Tipurile primitive de date sau tipurile de valoare conțin valoarea unei variabile direct în propria locație de memorie.

Cu tipurile de valori, fiecare variabilă are **o copie proprie a datelor**, și nu este posibil ca operațiile pe o variabilă să **le afecteze și pe celelalte**.

Când valoarea unei primitive **îi este atribuită altei variabile** de același tip, se crează o copie.

Când o primitivă este trecută unei metode, doar **o copie a tipului primitiv** este creată. 

Metoda apelată **nu are acces** la valoarea originala a tipului primitiv, deci **nu o poate schimba**. 

Metoda apelată poate **schimba valoarea copiată**.

Tipurile de date primitive sunt: **byte**, **short**, **int**, **long**, **float**, **double**, **boolean** și **char**

```Java
int i = 42; //require 4 bytes of memory
char ch = 'A'; //require 2 bytes of memory
boolean result = true; //require 1 byte of memory
```
[/slide]

[slide hideTitle]
# Tipurile de Referință

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-39-reference-types-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Tipul de referință** al variabilei ține o referință \(indicator / adresă de memorie\) a valorii în sine.

Atunci când un tip de referință îi este **atribuit unui alt** tip de referință, ambele vor indica același obiect.

Atunci când un obiect este ***trecut într-o metodă**, metoda apelată poate **schimba valoarea** obiectului trecut, dar nu și **adresa** obiectului.

* Tipurile de date de referință sunt: `String`, `int[]`, `char[]`, `String[]`.

```Java
String str = "Hello";
byte[] bytes = { 1, 2, 3 };
```
[/slide]

[slide hideTitle]
# Tipuri de Valoare vs. Tipuri de Referință

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-36-Memory-Stack-And-heap-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[image assetsSrc="Value-vs-Reference-Types(1).gif" /]

Acum vom demonstra vizual modul în care sunt stocate tipurile de valori, în comparație cu tipurile de referință.

Mai întâi vom inițializa câteva variabile primitive de tip valoare, urmate de unele care sunt de tipul  de referință:

```java
//primitives
int num = 42;
char letter = 'A';
boolean isRunning = true;

//reference type
String str = "Hello";
byte[] bytes ={ 1, 2, 3 };
```

[image assetsSrc="java-fund-methods-02.png" /]

[/slide]

[slide hideTitle]

# Exemplu: Tipuri de valoare

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-39-value-type-modification-demo-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

```java
public static void main(String[] args) {
    int num = 5;
    incrementNumber(num, 15);
    System.out.println(num);
}

public static void incrementNumber(int num, int incrementValue) {
    num += incrementValue;
}
```

Avem o metodă **incrementNumber** care ia un număr și îl incrementează cu un alt număr - **incrementValue**.

Chiar dacă am efectuat unele operații cu variabila **num**, valoarea acesteia nu se va schimba când **num** este tipărit pe consolă.

Acest lucru se datorează faptului că **int** este un tip primitiv și când este trecută, o copie a valorii sale a fost transmisă metodei.

[/slide]

[slide hideTitle]

# Exemplu: Tipuri de referință

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-39-increment-with-a-method-demo-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

```java
public static void main(String[] args) {
    int[] nums = {
        5
    };
    increment(nums, 15);
    System.out.println(nums[0]);
}

public static void increment(int[] numbersArray, int incrementValue) {
    numbersArray[0] += incrementValue;
}

```

Matricele stochează referințe la locațiile de memorie. Când trecem matricea la metoda **increment**, aceasta  manipulează valorile stocate la aceeași referință de memorie.

Când am trecut **nums** ca valoare pentru parametrul **numbersArray** al metodei, ceea ce s-a întâmplat este că parametrul numbersArray a primit referința la locația de memorie a matricei originale.

Orice operație care ar schimba un element din matricea din interiorul metodei va schimba, de asemenea, matricea originală, deoarece lucrăm cu aceeași referință.
[/slide]

[slide hideTitle]
# Problemă cu Soluție: Math Operations

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-problem-and-solution-math-operations-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Math Operations" taskId="java-fund-1-Methods-lab-Math-Operations" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Creați  o metodă care primește **2 numere** și un **operator**, calculează rezultatul și-l returnează.

Veți primi **3 linii pentru datele de intrare**.

Prima va fii pentru primul **număr**, a doua pentru **operator** și ultima pentru **al doilea număr**.

Operatorii posibili sunt: `/` `*` `+` `-`

## Exemplu
|**Intrare**|**Ieșire** |
| --- | --- | 
| 5 | 25 |
| \* ||
| 5 ||

|**Intrare**|**Ieșire** |
| --- | --- | 
| 4 | 12 |
| \+ ||
| 8 ||

[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
\*
5
[/input]
[output]
25
[/output]
[/test]
[test open]
[input]
4
+
8
[/input]
[output]
12
[/output]
[/test]
[test]
[input]
4
/
2
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
3
\-
1
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
5
+
2
[/input]
[output]
7
[/output]
[/test]
[test]
[input]
2
\*
3
[/input]
[output]
6
[/output]
[/test]
[test]
[input]
5
+
5
[/input]
[output]
10
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

