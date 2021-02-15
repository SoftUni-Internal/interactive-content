[slide hideTitle]
# Tipuri de date
În Java putem folosi tipurile de date pentru a defini variabilele după cum urmează:
   * **int** - un număr întreg: 1, 2, 3 ...
  * **double** – numere zecimale: -0.5, 3.14, …
  * **boolean** – valoare Boolean : true, false
  * **char** – simbol: 'a', 'b', '#', …
  * **string** - text: "Hello", "World", …

Odată ce o variabilă este definită, poate schimba valoarea sa de mai multe ori, dar nu poate schimba tipul de date mai târziu. 

Variabilele pot conține numai date de tipul lor. Mai jos putem declara variabile de diferite tipuri:
```java
int a = 5;
String text = "Some text";
char letter = 'A';
float f = 4.2;
```

Tipurile de date stabilesc intervale de valori cu caracteristici similare.

Sunt caracterizate prin:

  * **Nume** - E.g. boolean, int, String, DateTime
  * **Dimensiune** (mutilizarea memoriei) - Exemplu: 4 bytes
  * **Valoare implicită** - Exemplu: 0
[/slide]

[slide hideTitle]
# Convențiile de denumire

În programarea, o convenție de denumire este un set de ** reguli ** pentru alegerea numelui care trebuie utilizat pentru variabile.

In Java pentru convențiile de denumire a variabilelor sunt utilizate ***"camel-case"***. 

Există alte convenții de denumire care sunt folosite în diferite limbi, cum ar fi cazul pascal, cazul de șarpe.

**Camel case** combină cuvintele prin:
* Scrierea cu majuscule a tuturor cuvintelor care urmează primului cuvânt
* Eliminarea spațiului
```java
int userLoginCount;
```

**Cazul Pascal** combină cuvintele prin:
* Scrierea cu majuscule a fiecărui cuvânt împreună cu primul
* Eliminarea spațiului:
```java
int UserLoginCount;
```

**Snake-case** este o altă convenție de denumire, care separă cuvintele cu:
* Un caracter de subliniere (_)
* Fara spatii
* Litera inițială a fiecărui element de obicei cu litere mici în compus
* Prima literă mai mare sau mică
```java
int users_count;
String first_name;
```
[/slide]
