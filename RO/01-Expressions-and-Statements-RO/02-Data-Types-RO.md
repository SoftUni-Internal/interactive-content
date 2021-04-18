[slide hideTitle]
# Tipuri de Date

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/RO/interactive-programming-basics-with-java-expressions-and-statements-8-10-data-types-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În Java putem folosi tipurile de date pentru a defini variabilele după cum urmează:

  * **int** - un număr întreg: 1, 2, 3 
  * **double** – numere zecimale: -0.5, 3.14
  * **boolean** – valoare booleană : true, false
  * **char** – simbol: 'a', 'b', '#'
  * **String** - text: "Hello", "World"

Odată ce o variabilă este definită, își poate schimba valoarea de mai multe ori, dar nu își poate schimba tipul de date.

Variabilele pot conține numai date de tipul lor. 

Mai jos putem declara variabile de diferite tipuri:
```java
int a = 5;
String text = "Some text";
char letter = 'A';
float f = 4.2;
```

Tipurile de date conțin valori cu caracteristici similare.

Sunt caracterizate prin:

  * **Nume** - E.g. boolean, int, String, DateTime
  * **Dimensiune** (utilizarea memoriei) - Exemplu: 4 bytes
  * **Valoare implicită** - Exemplu: 0
[/slide]

[slide hideTitle]
# Convențiile de Denumire

În programare, o **convenție de denumire** este un set de **reguli** pentru alegerea numelui care trebuie utilizat pentru variabile.

Convenția de denumire utilizată în Java se numește **"camelCase"**. 

Există alte convenții de denumire care sunt folosite în diferite limbaje. Câteva dintre acestea sunt: PascalCase, snake_case.

**camelCase** combină cuvintele prin:
* Scrierea cu majuscule a tuturor cuvintelor care urmează primului cuvânt
* Eliminarea spațiilor dintre cuvinte
```java
int userLoginCount;
```

**PascalCase** combină cuvintele prin:
* Scrierea cu majuscule a fiecărui cuvânt împreună cu primul
* Eliminarea spațiilor dintre cuvinte
```java
int UserLoginCount;
```

**snake_case** este o altă convenție de denumire, cu următoarele caracteristici:
* Separarea cuvintelor prin underscore (_)
* Lipsa spațiilor între cuvinte
* De obicei prima literă a fiecărui cuvânt este o literă mică

```java
int users_count;
String first_name;
```
[/slide]
