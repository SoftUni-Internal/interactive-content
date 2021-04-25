[slide hideTitle]
# Operații Aritmetice

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/RO/interactive-programming-basics-with-java-expressions-and-statements-23-27-arithmetic-operators-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Să examinăm **operațiile aritmetice de bază** din programare.

Putem aduna, scădea, înmulți și împărți numerele folosind operatorii `+`, `-`,`*` și `/`.

## Adunarea Numerelor

Putem **aduna** numerele folosind operatorul `+`:

```java live
int a = 5;
int b = 7;
int sum = a + b;
System.out.println(sum); // 12 
```

## Scăderea Numerelor
Putem **scădea** numerele folosind operatorul `-`:
```java live
int a = 15;
int b = 7;
System.out.println(a - b); // 8
```
## Înmulțirea Numerelor

Pentru **înmulțirea** numerelor folosim operatorul `*`:
```java live
int a = 5;
int b = 7;
System.out.println(a * b); // 35
```

## Împărțirea Numerelor
Pentru **împărțirea** numerelor folosim operatorul `/`.

Funcționează diferit cu **numere întregi** și **numere în virgulă mobilă**.

* Când împărțim două numere întregi, se aplică o **împărțire întreagă**, iar ieșirea obținută nu va conține o parte fracționară (un rest)
  * Exemplu: `11 / 3 = 3`
  
* Când împărțim două numere și cel puțin unul dintre ele este un număr real de tip **float**, se aplică o **împărțire reală**, iar rezultatul obținut este un număr de tip float
  * Exemplu: `11 / 4.0 = 2.75`
  * Când împărțirea nu se poate face cu o precizie exactă, rezultatul este rotunjit, de exemplu `11.0 / 3 = 3.66666666666667`

* Un număr întreg **împărțit la 0** cauzează o **excepție** în timpul rulării (excepție runtime)

* Un număr float **împărțit la 0** nu provoacă o excepție, iar rezultatul este **+/- infinit** sau o valoare specială **NaN**
  * Exemplu `5 / 0.0 = ∞`

Mai jos avem câteva exemple ale operatorului împărțirii:

```java live
int a = 25;
int i = a / 4;
System.out.println(i);
double f = a / 4.0;
System.out.println(f);
```

## Împărțirea Numerelor Întregi
Să examinăm câteva exemple referitoare la **împărțirea numerelor întregi** (amintiți-vă că atunci când **împărțim numere întregi** în Java rezultatul este un **întreg**):

```java live
int a = 25;
System.out.println(a / 4);
```

Împărțirea unui număr întreg la zero produce o eroare.

``` java live
int a = 5;
System.out.println(a / 0);
```

## Împărțirea Numerelor în Virgulă Mobilă

Să ne uităm la câteva exemple referitoare la **împărțirea numerelor în virgulă mobilă**.

Când împărțim numerele în virgulă mobilă, rezultatul este întotdeauna un **număr în virgulă mobilă** și împărțirea va produce mereu un rezultat.

De asemenea, funcționează corect cu valorile speciale `+∞` și `-∞`:

```java live
int a = 15;
System.out.println(a / 2.0);
System.out.println(a / 0.0);
System.out.println(-a / 0.0);
System.out.println(0.0 / 0.0);
```
Când imprimați valorile `∞` și `-∞`, rezultatul pe consolă poate fi `?`.

Acest lucru se întâmplă deoarece consola din Windows nu funcționează corect cu Unicode și funcționează defectuos când întâlnește majoritatea simbolurilor, literelor și caracterelor speciale, non-standard.

## Operatorul Modulo
Operatorul modulo `%` calculează restul după împărțirea operandului din stânga cu operandul din dreapta.

```java live
int a = 7;
int b = 2;
System.out.println(a % b);
System.out.println(3.5 % 1);
```

Este util dacă vrem să verificăm dacă un număr este **par** sau **impar**.

Dacă restul împărțit la 2 este egal cu 0, atunci numărul este par, altfel este impar.

Exemplu:

```java live
System.out.println(3 % 2);
System.out.println(4 % 2);
```
[/slide]

[slide hideTitle]
# Concatenarea Textului și a Numerelor

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/RO/interactive-programming-basics-with-java-expressions-and-statements-22-concatenating-text-and-numbers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În afară de adunarea numerelor, operatorul `+` este folosit și pentru **unirea fragmentelor de text** (concatenarea șirurilor).

În programare, unirea a două fragmente de text este numită **"concatenare"**. 

Mai jos avem un exemplu de concatenare a unui text cu un număr folosing operatorul `+`:

```java live
String firstName = "John";
String lastName = "Doe";
int age = 19;
String str = firstName + " " + lastName + " @ " + age;
System.out.println(str);  // John Doe @ 19
```

## Exemplu: Concatenarea Textului și a Numerelor

Mai jos avem un un alt **exemplu** de concatenare a textului și a numerelor:

```java live
double a = 1.5;
double b = 2.5;
String sum = "The sum is: " + a + b;
System.out.println(sum);  // The sum is: 1.52.5
```
Observați că valorile numerice `a` și `b` nu au fost însumate.

Rezultatul de mai sus este corect din punctul de vedere al logicii limbajului.

Dacă dorim să însumăm numerele, trebuie să folosim **paranteze**, pentru a schimba ordinea de execuție a operațiilor:

```java live
double a = 1.5;
double b = 2.5;
String sum = "The sum is: " + (a + b);
System.out.println(sum);  // The sum is: 4
```

[/slide]
