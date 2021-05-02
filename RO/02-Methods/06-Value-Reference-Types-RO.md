# Tipuri Valoare și Tipuri Referință

[slide hideTitle]

# Tipuri Valoare
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-38-Value-types-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

O variabilă de tip **valoare** \(date primitive\) conține o instanță a tipului și conține direct o valoare. 

Tipurile primitive de date sau tipurile valoare conțin valoarea unei variabile în propria locație de memorie.

Cu tipurile valoare, fiecare variabilă are **o copie proprie a datelor**, și nu este posibil ca operațiile asupra unei variabile să **le afecteze și pe celelalte**.

Când valoare a unui tip primitiv **îi este atribuită altei variabile** de același tip, se creează o **copie a tipului primitiv**.

Când un tip primitiv este transmis unei metode, este tranmisă doar **o copie a tipului primitiv**. 

Metoda apelată **nu are acces** la valoarea originală a tipului primitiv, deci **nu o poate schimba**. 

Metoda apelată poate **schimba doar valoarea copiată**.

Tipurile de date primitive sunt: **byte**, **short**, **int**, **long**, **float**, **double**, **boolean** și **char**

```Java
int i = 42; //require 4 bytes of memory
char ch = 'A'; //require 2 bytes of memory
boolean result = true; //require 1 byte of memory
```
[/slide]

[slide hideTitle]
# Tipurile Referință

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-39-reference-types-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

O variabilă de **tip referință** deține o **referință** \(indicator / adresă de memorie\) a valorii.

Atunci când un tip referință îi este **atribuit unui alt** tip referință, ambele **vor indica același obiect**.

Atunci când un obiect este **transmis unei metode**, metoda apelată poate **schimba valoarea** obiectului transmis, dar nu și **adresa** obiectului.

* Tipurile referință de date sunt: `String`, `int[]`, `char[]`, `String[]`.

```Java
String str = "Hello";
byte[] bytes = { 1, 2, 3 };
```
[/slide]

[slide hideTitle]
# Tipuri Valoare vs. Tipuri Referință

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/03.Java-Fundamentals-Methods/RO/interactive-java-fundamentals-methods-36-Memory-Stack-And-heap-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[image assetsSrc="Value-vs-Reference-Types(1).gif" /]

Acum vom demonstra vizual modul în care sunt stocate tipurile valoare, în comparație cu tipurile referință.

Mai întâi vom inițializa câteva variabile primitive de tip valoare, urmate de unele care sunt de tip referință:

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

# Exemplu: Tipuri Valoare

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

Chiar dacă am efectuat câteva operații cu variabila **num**, valoarea acesteia nu se va schimba când **num** este tipărit pe consolă.

Acest lucru se datorează faptului că **int** este un tip primitiv și când este transmis, o copie a valorii sale a fost transmisă metodei.

[/slide]

[slide hideTitle]

# Exemplu: Tipuri Referință

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

Matricele stochează referințe către locații de memorie. Când transmite matricea metodei **increment**, aceasta manipulează valorile stocate în aceeași referință de memorie.

Când am transmis matricea **nums** metodei, paramterul **numbersArray** a primit referința pentru locația de memorie a matricei **nums**.

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
Creați o metodă care primește **2 numere** și un **operator**, calculează rezultatul și îl returnează.

Veți primi **3 linii cu date de intrare**.

Prima va reprezenta **primul număr**, a doua **operatorul** și ultima va reprezenta **al doilea număr**.

Operatorii posibili sunt: `/` `*` `+` `-`.

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

