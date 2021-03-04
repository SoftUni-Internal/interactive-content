# Tipuri de date

[slide hideTitle]
# Cum funcționează calculatorul?

Un computer este o e **mașină electronică** care procesează informații, cu alte cuvinte, un procesor de informații: preia informații brute (sau date) la un capăt, le stochează până când este gata să lucreze pe ea, o mestecă și o sfâșie pentru un pic, apoi scuipă rezultatele la celălalt capăt.

Toate aceste procese au un **nume**.

Preluarea informațiilor se numește intrare, stocarea informațiilor este mai bine cunoscută sub numele de memorie (sau stocare), informațiile de mestecat sunt cunoscute și sub numele de procesare, iar scuiparea rezultatelor se numește ieșire.

[image assetsSrc="How-Does-Computing-Work.png" /]

[/slide]

[slide hideTitle]
# Variabile

O variabilă este un nume dat unei locații de memorie. 

Este unitatea de bază de stocare într-un program.

* Valoarea stocată într-o variabilă poate fi modificată în timpul executării programului

* O variabilă este doar un nume dat unei locații de memorie, toate operațiunile efectuate asupra variabilei efectează locația de memorie

* În Java, toate variabilele trebuie create înainte de utilizare

```java
int count = 5;
// int – data type
// count – variable name
// 5 – variable value
```

* **Tipul de date**: Tipul de date care pot fi stocate în această variabilă
* **Nume variabilă**: nume dat variabilei
* **Valoare variabilă**: este valoarea inițială stocată în variabilă

O variabilă poate fi declarată, fără inițializare:

```java
int count;
count = 5;
```

În exemplul de mai sus declarăm o variabilă `int`, numită `count` și atunci când avem nevoie de acea variabilă putem atribui o valoare.

Aici am dat acea valoare variabilă de `5`.

## Exemplu din Viața Reală

Vă puteți gândi la variabile ca la borcane de bucătărie.

Putea să stocați cafeaua în borcanul cu zahăr, dar acestea vor fi diferite.

Imaginați-vă că în fiecare borcan puteți stoca doar una dintre următoarele: sare, zahăr sau cafea.

[image assetsSrc = "Variables-real-life-example.png" /]

În programare, este aproape la fel.

Folosim variabilele care acționează ca borcane pentru date diferite, cum ar fi numere, text, simboluri și așa mai departe.

Și în variabilă, stocăm numere, nu putem stoca text.

[/slide]

[slide hideTitle]
# Ce este un tip de date?

Tipurile de date specifică diferitele dimensiuni și valori care pot fi stocate în variabilă.

Există **două tipuri de tipuri de date** în Java:

**Tipuri de date primitive**
- Încorporat într-un limbaj de programare
- Dimensiunea și tipul valorilor variabilei sunt specificate și nu pot fi modificate
- Unele exemple includ boolean, char, int, long, float și double

**Tipuri de date neprimitive**
- Nu este definit de limbajul de programare, ci de programator
- Variabile de referință apelate deoarece dețin adresa în memoria computerului (RAM) unde sunt stocate datele
- Unele exemple includ șiruri, matrice și clase
[/slide]

[slide hideTitle]
# Data Type Characteristics

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

* **Valoare**: fiecare valoare de păstrare a variabilelor
[/slide]

[slide hideTitle]
# Variabile de denumire

În programarea computerului, o convenție de denumire este un set de **reguli** pentru alegerea numelui care trebuie utilizat pentru variabile.

Convențiile de denumire fac programele mai ușor de înțeles, făcându-le mai ușor de citit.

În Java, se folosește convenția pentru numirea variabilelor ***"camel-case"***.

**Cazul Camel** este practica scrierii frazelor:

- fiecare cuvânt sau abreviere din mijlocul frazei începe cu o literă mare

- fara spatii

- punctuație

```Java
String firstName = John; //correct
String lastName = Smith; //correct
int personAge = 41;      //correct

String Firstname = John;  //wrong
String last_name = Smith; //wrong
int PersonAge = 41;       //wrong
int foo = 2;              //wrong
```
Numele variabilei ar trebui să explice scopul acesteia.

Înainte de a denumi o variabilă, întrebați-vă: **Ce conține această variabilă?**
[/slide]

[slide hideTitle]
# Domeniul de Aplicare și Durata de Viață a Variabilei

**Domeniul de aplicare** al unei variabile se referă la ce zone sau secțiuni ale unui program poate fi accesată variabila și **durata de viață** a unei variabile se referă la cât timp variabila rămâne în viață în memorie.

Convenția generală pentru domeniul de aplicare al unei variabile este că, este accesibilă numai în blocul în care este creată.

Un bloc **începe** cu o acoladă stângă `{` și **se termină** cu o acoladă dreaptă `}`.

## Example
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
# Interval variabil

Variabila **span** este cât timp înainte de a fi apelată o variabilă.

Este o bună practică să creați o variabilă cât mai târziu (de exemplu, o durată mai scurtă).

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
# Keeping Variable Span Short

Ca regulă generală bună, încercați să mențineți intervalul variabil mai scurt.

Un interval mai scurt simplifică codul și îi îmbunătățește **lizibilitatea** și **mentenabilitatea**.

Putem reduce intervalul variabil **outer** după cum urmează:


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