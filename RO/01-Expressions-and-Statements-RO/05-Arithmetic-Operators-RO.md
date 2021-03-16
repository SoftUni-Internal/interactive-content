[slide hideTitle]
# Operații Aritmetice

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/RO/interactive-programming-basics-with-java-expressions-and-statements-23-27-arithmetic-operators-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Să examinăm **operațiile aritmetice de bază** din programare.

Putem aduna, scădea, înmulți și împărți numerele folosind operatorii `+`, `-`,` * `și` / `.

## Adunarea numerelor

Putem **aduna** suma numerelor folosind operatorul `+`:

```java live
int a = 5;
int b = 7;
int sum = a + b;
System.out.println(sum); // 12 
```

## Scăderea numerelor
Putem **scădea** numerele folosind operatorul `-`:
```java live
int a = 15;
int b = 7;
System.out.println(a - b); // 8
```
## Înmulțirea numerelor

Pentru **Înmulțirea** numerelor folosim operatorul `*`:
```java live
int a = 5;
int b = 7;
System.out.println(a * b); // 35
```

## Împărțirea numerelor
**Pentru Împărțirea** numerelor folosim operatorul `/`.

Funcționează diferit cu **numere întregi** și **numere cu virgulă mobilă**.

* Când împărțim două numere întregi, se aplică o **împărțire întreagă**, iar rezultatul obținut este fără partea sa fracționată
  * example: `11 / 3 = 3`
  
* Când împărțim două numere și cel puțin unul dintre ele este un număr float, se aplică o **diviziune mobilă**, iar rezultatul obținut este un număr float, la fel ca în matematică

  * example: `11 / 4.0 = 2.75`
  * când nu se poate face cu o precizie exactă, rezultatul este rotunjit, de exemplu `11.0 / 3 = 3.66666666666667`

* Numărul întreg **împărțit la 0** cauzează o **excepție** în timpul rulării (excepție de runtime)

* Fumărul float **împărțit la 0** nu provoacă o excepție, iar rezultatul este **+ / - infinity** sau o valoare specială **NaN**

  * example `5 / 0.0 = ∞`

Mai jos avem câteva exemple cu operatorul împărțirii:

```java live
int a = 25;
int i = a / 4;
System.out.println(i);
double f = a / 4.0;
System.out.println(f);
```

## Împărțirea numerelor întregi
Să examinăm câteva exemple pentru **împărțirea numărului întreg** (amintiți-vă că atunci când **împărțim numere întregi** în Java rezultatul este un **întreg**):

```java live
int a = 25;
System.out.println(a / 4);
```

Împărțirea unui număr întreg la zero ne duce la o eroare.

``` java live
int a = 5;
System.out.println(a / 0);
```

## Împărțirea numerelor cu virgulă mobilă

Să ne uităm la câteva exemple pentru **împărțirea în virgulă flotantă**.

Când împărțim numerele în virgulă flotantă, rezultatul este întotdeauna un **număr float** și împărțirea nu eșuează niciodată.

De asemenea, funcționează corect cu valorile speciale `+∞` și `-∞`:

```java live
int a = 15;
System.out.println(a / 2.0);
System.out.println(a / 0.0);
System.out.println(-a / 0.0);
System.out.println(0.0 / 0.0);
```
Când imprimați valorile `∞` și `-∞`, rezultatul pe consola poate fi `?`.

Acest lucru se întâmplă deoarece consola din Windows nu funcționează corect cu Unicode și distruge majoritatea simbolurilor, literelor și caracterelor speciale care nu sunt standard..

## Operatorul modulo
Operatorul modulo `%` calculează restul după împărțirea operandului său din stânga cu operandul din dreapta.

```java live
int a = 7;
int b = 2;
System.out.println(a % b);
System.out.println(3.5 % 1);
```

Este util dacă vrem să verificăm dacă un număr este **even** sau **odd**.

Dacă restul împărțit la 2 este egal cu 0, atunci numărul este even, altfel este odd.

Uitați la următorul exemplu: 

```java live
System.out.println(3 % 2);
System.out.println(4 % 2);
```
[/slide]

[slide hideTitle]
# Concatenarea Textului și a Numerelor

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/RO/interactive-programming-basics-with-java-expressions-and-statements-22-concatenating-text-and-numbers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

în afară de adunarea numerelor, operatorul `+` este folosit și pentru **unirea bucăților de text** (concatenarea a două șiruri una după alta).

În programare, funcție care unește două bucăți de text este numită **"concatenare"**. 

Mai jos vem un exemplu de concatenare a textului un număr de către operatorul `+`:

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

Ați observat **ceva ciudat** ? 

Poate v-ați așteptat ca numerele `a` și `b` să fiu însumate?

De fapt, concatenarea funcționează de la dreapta la stânga, iar rezultatul de mai sus este absolut corect.

Dacă dorim să însumăm numerele, trebuie să folosim **paranteze**, pentru a schimba ordinea de execuție a operațiilor:

```java live
double a = 1.5;
double b = 2.5;
String sum = "The sum is: " + (a + b);
System.out.println(sum);  // The sum is: 4
```

[/slide]