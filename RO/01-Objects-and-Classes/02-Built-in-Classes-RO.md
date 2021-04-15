
[slide hideTitle]
# Clase Încorporate în Java

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/02.Java-Fundamentals-Objects-and-Classes/RO/interactive-java-fundamentals-objects-and-classes-8-9-built-in-api-classes-in-java-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Java oferă clase **gata de utilizare**, care sunt organizate în **pachete**. 

Aceste clase oferă **metode** și **câmpuri predefinite** care ajută la economisirea timpului și a efortului depus pentru crearea aplicațiilor.

Câteva dintre aceste metode sunt:

- `java.util.Scanner` 

- `java.utils.List` 

- `java.lang.Math` 

- `java.math.BigInteger`

Utilizarea metodelor **statice** necesită apelarea numelui clasei și a metodei necesare:

```java
LocalDateTime today = LocalDateTime.now();
double cosine = Math.cos(Math.PI);
```

Utilizarea metodelor **non-statice** necesită crearea unei noi instanțe a unui obiect al clasei curente:

```java
Random rnd = new Random();
int randomNumber = rnd.nextInt(10);
```
[/slide]


[slide hideTitle]
# Math

Metodele din clasa `Math` sunt **statice** și ajută la efectuarea **operațiilor numerice** și a **funcțiilor matematice** utilizate în mod obișnuit, cum ar fi:

- Rotunjire

- Compararea

- Rădăcină pătrată

- Rădăcină cubică

- Exponențială

- Logaritm

- Operații trigonometrice.

Metodele `Math` includ:

- `abs(a)` - Returnează valoarea absolută a parametrului transmis `a`


```java live
int a = Math.abs(5);
int b = Math.abs(-10);
System.out.println(a);
System.out.println(b);
```
- `ceil(a)` - Rotunjește în sus o valoare în virgulă mobilă `a` până la cea mai apropiată valoare întreagă, returnată ca `double`

```java live
double ceil = Math.ceil(8.357);
System.out.println(ceil);
```

- `floor(a)` - Rotunjește în jos o valoare în virgulă mobilă `a` până la cea mai apropiată valoare întreagă, returnată ca `double`

```java live
double floor = Math.floor(8.357);
System.out.println(floor);
```

- `max(a, b)` - Returnează valoarea cea mai mare dintre cele două valori transmise ca parametru

```java live
int max = Math.max(5, 10);
System.out.println(max);
```

- `min(a, b)` - Returnează cea mai mică valoare dintre cele două valori transmise ca parametru

```java live
int min = Math.min(5, 10);
System.out.println(min);
```

- `round(a)` - Rotunjește valoarea în virgulă mobilă la cel mai apropiat număr întreg folosind regulile normale matematice de rotunjire (fie în sus, fie în jos)

```java live
double roundedDown = Math.round(29.459);
System.out.println(roundedDown);
        
double roundedUp = Math.round(29.549);
System.out.println(roundedUp);
        
double roundedUpAgain = Math.round(29.5);
System.out.println(roundedUpAgain);
```

- `pow(a, b)` - Returnează valoarea primului parametru `a` ridicat la puterea celui de-al doilea parametru `b`

```java live
double number = Math.pow(3,2);
System.out.println(number);
```

- `sqrt(a)` - Calculează rădăcina pătrată a parametrului dat `a`

```java live
double number = Math.sqrt(9);
System.out.println(number);
```

- `toDegrees(a)` - Convertește un unghi dat în radiani în grade

```java live
double degrees = Math.toDegrees(3.141592653589793);
System.out.println(degrees);
```

- `toRadians(a)` - Convertește un unghi dat în grade în radiani

```java live
double radians = Math.toRadians(180);
System.out.println(radians);
```

- Funcții trigonometrice - Calculează valoarea unghiurilor în radiani `sin(a)` `cos(a)` `tan(a)`

[/slide]


[slide hideTitle]
# Random

Clasa `java.util.Random` este utilizată pentru a genera numere aleatoare de tip **integer**, **float**, **double**, **long**. 

Metodele de clasă `Random` sunt **non-statice**.


Codul următor este un exemplu pentru crearea unei **instanțe** `Random`:

```java
import java.util.Random;

public class Main {
    public static void main(String[] args) {
        Random random = new Random();
    }
}
```

Exemple de metode `Random`:

- `nextInt()` - Returnează următoarea valoare pseudoaleatorie `int` dintr-o secvență de numere aleatorii

```java live
Random random = new Random();

int number = random.nextInt();
System.out.println(number);
```

- `nextInt(n)` - Returnează următoarea valoare pseudoaleatorie `int` în intervalul de la 0 (inclusiv) până la valoarea specificată (exclusiv)

```java live
Random random = new Random();
int numOne = random.nextInt(10);
int numTwo = random.nextInt(10);
System.out.println(numOne);
System.out.println(numTwo);
```

- `nextDouble()` - Returnează următoarea valoare pseudoaleatorie `double` în intervalul de la 0.0 la 1.0

```java live 
Random random = new Random();
double numOne = random.nextDouble();
double numTwo = random.nextDouble();
System.out.println(numOne);
System.out.println(numTwo);
```

- `nextBoolean()` - Returnează următoarea valoare pseudoaleatorie `boolean`, care poate fi `true` sau `false`

```java live
Random random = new Random();
boolean isValid = random.nextBoolean();
System.out.println(isValid);
```

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Randomize Words

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/02.Java-Fundamentals-Objects-and-Classes/RO/interactive-java-fundamentals-objects-and-classes-10-problem-and-solution-randomize-words-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## Descriere
Vă este dat un **șir**, care conține cuvinte, separate printr-un spațiu.

**Ordonați-le la întâmplare** și tipăriți **fiecare cuvânt pe o linie separată**.

## Sugestii

- Separați șirul introdus (printr-un spațiu) și creați o matrice de cuvinte
- Creați un generator de numere aleatorii - un obiect `rnd` de tip `Random`
- Într-o `buclă-for` schimbați fiecare număr de pe pozițiile 0, 1, ..., words.Length-1 cu un număr de pe o poziție aleatoare

Pentru a genera un număr aleator în interval utilizați `rnd.nextInt(words.length)`

- Tipăriți fiecare cuvânt din matrice pe o linie nouă

## Exemple

| **Intrare** | **Ieșire** | **Comentarii** |
| --- | --- | --- |
| Welcome to SoftUni and have fun learning programming | learning | The order of the words in the output will be different after each program execution. |
| | Welcome | |
| | SoftUni | |
| | and | |
| | fun | |
| | programming | |
| | have | |
| | to | |




[/slide]



[slide hideTitle]
# BigInteger

Clasa `java.math.BigInteger` furnizează **operațiuni analoge** tuturor **operațiunilor întregi primitive ale Java** și pentru **toate metodele relevante** din clasa `java.lang.Math;`.

Clasa `BigInteger` ajută la gestionarea **numerelor întregi foarte mari**. 

Metodele clasei BigInteger sunt **non-statice**.

Un `BigInteger` se declară astfel:

- `BigInteger num = BigInteger.valueOf(1234567890);` 
   - aici numărul `1234567890` este o variabilă `long` (64 de biți)
- `BigInteger num = new BigInteger("12345688901234567890");`
   - aici numărul `12345688901234567890` este prea mare, nu se poate încadra în 64 de biți, motiv pentru care parametrul este un **șir numeric**

**Câmpurile** `BigInteger` sunt:

- `BigInteger.ONE`: Constanta unu

- `BigInteger.ZERO`: Constanta zero

- `BigInteger.TEN`: Constanta zece

**Metodele** `BigInteger` sunt:

- `abs()` - Returnează valoarea absolută a BigInteger-ului curent

```java live
BigInteger number = BigInteger.valueOf(-123);
number = number.abs();
System.out.println(number);
```
- `add(value)`: Atribuie o **valoare nouă** BigInteger-ului curent și efectuează **adunare** (valoare curentă + valoare)

```java live
BigInteger number = BigInteger.valueOf(123);
number = number.add(BigInteger.TEN);
System.out.println(number);
```
- `subtract(value)`: Atribuie o **valoare nouă** BigInteger-ului curent și efectuează **scădere** (valoare curentă - valoare)

```java live
BigInteger number = BigInteger.valueOf(123);
number = number.subtract(BigInteger.TEN);
System.out.println(number);
```
- `multiply(value)`: Atribuie o **valoare nouă** BigInteger-ului curent și efectuează **multiplicare** (valoare curentă * valoare)

```java live
BigInteger number = BigInteger.valueOf(123);
number = number.multiply(BigInteger.TEN);
System.out.println(number);
```
- `divide(value)`: Atribuie o **valoare nouă** BigInteger-ului actual și efectuează **împărțire** (valoare curentă / valoare)

```java live
BigInteger number = BigInteger.valueOf(123);
number = number.divide(BigInteger.TEN);
System.out.println(number);
```
- `pow(value)`: Atribuie o **valoare nouă** BigInteger-ului curent și efectuează **ridicarea la putere** (valoarea curentă ^ valoare)

```java live
BigInteger number = BigInteger.valueOf(123);
number = number.pow(2);
System.out.println(number);
```
- `intValue()`: Convertește într-un `int`

- `doubleValue()`: Convertește într-un `double`

- `toString()`: Returnează reprezentarea de tip șir

[/slide]


[slide hideTitle]
# Problemă cu Soluție: Sum Big Numbers

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/02.Java-Fundamentals-Objects-and-Classes/RO/interactive-java-fundamentals-objects-and-classes-problem-and-solution-sum-big-numbers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Sum Big Numbers" taskId="java-fund-2-Objects-and-Classes-lab-Sum-Big-Numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.math.BigInteger;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Descriere
Veți primi două numere **(0 până la 10 ^ 50)**. Imprimați suma acestora.

## Exemple

|**Intrare**|**Ieșire**|
| --- | --- |
| 923847238931983192462832102 | 934573817465075391826664309019448 |
| 934572893617836459843471846187346 | |

|**Intrare**|**Ieșire**|
| --- | --- |
| 4 | 104 | 
| 100 | | 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
4
100
[/input]
[output]
104
[/output]
[/test]
[test open]
[input]
923847238931983192462832102
934572893617836459843471846187346
[/input]
[output]
934573817465075391826664309019448
[/output]
[/test]
[test]
[input]
1234567890
1234567890
[/input]
[output]
2469135780
[/output]
[/test]
[test]
[input]
129830419415091450143
3478410041470111511474904
[/input]
[output]
3478539871889526602925047
[/output]
[/test]
[test]
[input]
999999999999999999999999999999999999999
9999999999999999999999999999999999
[/input]
[output]
1000009999999999999999999999999999999998
[/output]
[/test]
[test]
[input]
00001
0000002
[/input]
[output]
3
[/output]
[/test]
[test]
[input]
982374328974238974913824792347
3127642874284682374
[/input]
[output]
982374328977366617788109474721
[/output]
[/test]
[test]
[input]
9999
1
[/input]
[output]
10000
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă cu Soluție: Big Factorial

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/02.Java-Fundamentals-Objects-and-Classes/RO/interactive-java-fundamentals-objects-and-classes-12-problem-and-solution-big-factorial-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Big Factorial" taskId="java-fund-2-Objects-and-Classes-lab-Big-Factorial" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.math.BigInteger;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Descriere
Veți primi numărul N în intervalul  \[0 - 1000\].

Calculați **Factorialul lui N** și tipăriți rezultatul.

## Exemple

|**Intrare**|**Ieșire**|
| --- | --- |
| 5 | 120 |
| 50 | 30414093201713378043612608166064768844377641568960512000000000000 |



[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
[/input]
[output]
120
[/output]
[/test]
[test open]
[input]
50
[/input]
[output]
30414093201713378043612608166064768844377641568960512000000000000
[/output]
[/test]
[test]
[input]
10
[/input]
[output]
3628800
[/output]
[/test]
[test]
[input]
12
[/input]
[output]
479001600
[/output]
[/test]
[test]
[input]
88
[/input]
[output]
185482642257398439114796845645546284380220968949399346684421580986889562184028199319100141244804501828416633516851200000000000000000000
[/output]
[/test]
[test]
[input]
101
[/input]
[output]
9425947759838359420851623124482936749562312794702543768327889353416977599316221476503087861591808346911623490003549599583369706302603264000000000000000000000000
[/output]
[/test]
[test]
[input]
250
[/input]
[output]
3232856260909107732320814552024368470994843717673780666747942427112823747555111209488817915371028199450928507353189432926730931712808990822791030279071281921676527240189264733218041186261006832925365133678939089569935713530175040513178760077247933065402339006164825552248819436572586057399222641254832982204849137721776650641276858807153128978777672951913990844377478702589172973255150283241787320658188482062478582659808848825548800000000000000000000000000000000000000000000000000000000000000
[/output]
[/test]
[test]
[input]
333
[/input]
[output]
10334465434588059156093965538297516550622260041682062823432902469783188597914276568552700194849877929894375950252570477080418352732597658745665925604704669227133726477243854317836635130694123893711638533001980496229875665476598568821806170303765540489814402234159901540440432134155844542962445153646330595588291605924429211352279943471372817279938720974895260387784578239150931816946786416232516666251965421919651838044618050991294403546958930745419743836966520198735201123255884089263272829846640538826979843642885775791641575109178753509580001660392092396798648924375401024147883702298145910046889402880394195369984000000000000000000000000000000000000000000000000000000000000000000000000000000000
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

