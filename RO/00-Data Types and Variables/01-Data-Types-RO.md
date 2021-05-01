# Tipuri de Date

[slide hideTitle]
# Cum Funcționează Calculatorul?

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/RO/interactive-java-fundamentals-data-types-and-variables-3-4-How-computers-work-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Un calculator este o **mașină electronică** care procesează informații, cu alte cuvinte, un **procesor de informații**: acesta ia informațiile brute (sau datele) de la un capăt, le stochează până când este gata să le proceseze, apoi returnează rezultatele la celălalt capăt.

Toate aceste procese au un **nume**.

Preluarea informațiilor se realizează prin "intrare" (input), stocarea informațiilor este realizată de "memorie", efectuarea calculelor asupra informației se numește "procesare", iar rezultatele returnate se numesc "ieșire" (output).

[image assetsSrc="How-Does-Computing-Work.png" /]

[/slide]

[slide hideTitle]
# Variabile
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/RO/interactive-java-fundamentals-data-types-and-variables-5-Variables-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

O variabilă este o locație în memoria calculatorului, care poate fi adresată prin numele ei.

Este unitatea de bază de stocare într-un program.

* Valoarea stocată într-o variabilă poate fi modificată în timpul executării programului

* O variabilă este doar un nume dat unei locații de memorie; toate operațiile efectuate asupra variabilei afectează locația de memorie

* În Java, toate variabilele trebuie declarate înainte de utilizare

```java
int count = 5;
// int – tipul de date
// count – numele variabilei
// 5 – valoarea variabilei
```
O variabilă este definită prin următoarele caracteristici:
* **Tipul de date**: tipul de date care poate fi stocat în această variabilă
* **Numele variabilei**: numele dat variabilei
* **Valoarea variabilei**: valoarea inițială stocată în variabilă

O variabilă poate fi declarată fără inițializare și poate fi inițalizată mai târziu:

```java
int count;
count = 5;
```

În exemplul de mai sus declarăm o variabilă de tip `int` numită `count` și atunci când avem nevoie de acea variabilă putem să îi atribuim o valoare.

După inițializare, variabila `count` primește valoarea `5`.

## Exemplu din Viața Reală

Vă puteți gândi la variabile ca la borcanele din bucătărie.

Imaginați-vă că în fiecare borcan puteți stoca doar una dintre următoarele: sare, zahăr sau cafea.

[image assetsSrc="Variables-real-life-example.png" /]

În programare, este aproape la fel.

Folosim variabile, care acționează ca niște containere pentru tipuri de date diferite, cum ar fi numere, text, simboluri și așa mai departe.

De exemplu, dacă avem o variabilă al cărei scop este să stocheze numere întregi, nu vom putea să stocăm și text în aceasta. 

[/slide]

[slide hideTitle]
# Ce Este un Tip de Date?

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/RO/interactive-java-fundamentals-data-types-and-variables-6-What-is-data-type-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Tipurile de date specifică diferitele dimensiuni și valori care pot fi stocate în variabilă.

Există **două tipuri generale de date** în Java:

**Tipuri de date primitive**

- Încorporate în limbajul de programare

- Dimensiunea și tipul valorilor variabilei sunt specificate și nu pot fi modificate

- Exemple: `boolean`, `char`, `int`, `long`, `float` și `double`

**Tipuri de date neprimitive**

- Nu sunt definite de limbajul de programare, ci de programator

- Sunt numite și "tip referință" deoarece conțin o adresă în memoria calculatorului (RAM) unde sunt stocate datele

- Unele exemple includ `șiruri`, `matrice` și `clase`
[/slide]

[slide hideTitle]
# Caracteristicile Tipurilor de Date

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/RO/interactive-java-fundamentals-data-types-and-variables-7-data-type-characteristics-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

```java
int myNum = 5;               // Integer (whole number)
float myFloatNum = 5.99f;    // Floating point number
char myLetter = 'D';         // Character
boolean myBool = true;       // Boolean
String myText = "Hello";     // String
```
După cum vedeți în exemplul de mai sus, **tipurile de date** au:

* **Nume**: cuvânt cheie Java

* **Dimensiune**: câtă memorie este utilizată

* **Valoare**: fiecare variabilă este caracterizată printr-o valoare 
[/slide]

[slide hideTitle]
# Numirea Variabilelor
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/RO/interactive-java-fundamentals-data-types-and-variables-8-naming-our-variables-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În programare, o convenție de denumire este un set de **reguli** utile pentru alegerea numelui variabilelor.

Convențiile de denumire fac programele mai ușor de înțeles și mai ușor de citit.

În Java se utilizează convenția "**camelCase**".

"**camelCase**" este caracterizată prin următoarele reguli:

- Fiecare cuvânt sau abreviere (excluzând primul element) începe cu o majusculă

- Numele nu conține spații

- Numele nu conține punctuație

```Java
String firstName = John; //correct
String lastName = Smith; //correct
int personAge = 41;      //correct

String Firstname = John;  //wrong
String last_name = Smith; //wrong
int PersonAge = 41;       //wrong
int foo = 2;              //wrong
```
Numele variabilei trebuie să explice scopul acesteia.

Înainte de a denumi o variabilă, întrebați-vă: **Ce conține această variabilă?**
[/slide]

[slide hideTitle]
# Domeniul de Aplicare și Durata de Viață a Variabilei
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/RO/interactive-java-fundamentals-data-types-and-variables-9-variable-scope-and-lifetime-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


**Domeniul de aplicare** al unei variabile se referă la zonele sau secțiunile unui program în care variabila poate fi accesată.

**Durata de viață** a unei variabile se referă la perioada de timp în care variabila este păstrată în memorie.

 Ca regulă generală, domeniul de aplicare este limitat la blocul de cod în care variabila este creată.

Un bloc de cod **începe** cu o acoladă stângă `{` și **se termină** cu o acoladă dreaptă `}`.

## Exemplu
```java
public static void main(String[] args) {
  String outer = "I'm inside the Main()";

  //Begining of inner block
  for (int i = 0; i < 10; i++) {
      String inner = "I'm inside the loop";
      System.out.println(inner); //print the result
  }
  //End of inner block

  System.out.println(outer);

  // System.out.println(inner); Error
```

[/slide]

[slide hideTitle]
# Intervalul Variabilei

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/RO/interactive-java-fundamentals-data-types-and-variables-10-variable-span-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Intervalul** variabilei reprezintă durata de timp dintre declararea variabilei și apelarea acesteia.

Este o bună practică să creați variabila cât mai târziu (interval mai scurt).

```java
static void main(String[] args) {
    String outer = "I'm inside the main()";

    //beginning of "outer" variable span
    for (int i = 0; i < 10; i++) {
        String inner = "I'm inside the loop";
        System.out.println(inner);
    }
    //end of "outer" variable span

    System.out.println(outer);
    //System.out.println(inner); Error
}
```
[/slide]

[slide hideTitle]
# Menținerea unui Interval Scurt
[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/RO/interactive-java-fundamentals-data-types-and-variables-11-keep-variable-span-short-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Ca regulă generală, încercați să mențineți intervalul variabilei cât mai scurt.

Un interval mai scurt simplifică codul și îi îmbunătățește **lizibilitatea** și **mentenabilitatea**.

Putem reduce intervalul variabilei **outer** după cum urmează:


```java
static void main(String[] args) {

    for (int i = 0; i < 10; i++) {
        String inner = "I'm inside the loop";
        System.out.println(inner);
    }

    //beginning of "outer" variable span
    String outer = "I'm inside the main()";
    System.out.println(outer);
    //end of "outer" variable span

    //System.out.println(inner); Error
}
```
[/slide]
