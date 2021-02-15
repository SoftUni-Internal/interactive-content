# Instrucțiunea Switch-case

[slide hideTitle]
# Instrucțiunea de comutare a clauzelor
Instrucțiunea de comutare a clauzelor funcționează ca o secvență de blocuri **if-else**.

Ori de câte ori munca programului nostru depinde de valoarea unei variabile, în loc să facem condiții consecutive cu blocuri `if-else`, putem **folosi** instrucțiunea condițională `switch`.

Aceasta  este utilizată pentru **alegerea între o listă de posibilități**.

Instrucțiunea compară o valoare dată cu constante definite și, în funcție de rezultat, ia o măsură.

- Punem **variabila** pe care vrem să o **comparăm**, în **parantezele după operatorul** `switch` și acesta se numește **"selector"**
-  **Tipul trebuie să fie comparabil** (numere, șiruri)
- **Consecutiv**, programul începe **să compare** fiecare **valoare** care este **găsită** după **etichetele** `case`
- În caz de potrivire, executarea codului din locul respectiv începe și continuă până când ajunge la operatorul `break`

În unele limbaje de programare (cum ar fi C și C ++) `break` ar putea fi sarit, pentru a executa un cod din altă construcție 'caz' până când ajunge la un alt operator.

În Java, însă, prezența `break` este **obligatoriu** pentru **fiecare** `caz` care conține o logică de program.

Când **nu sunt găsite** potriviri, se execută construcția 'implicită', **if** astfel **există**.

```java
switch (selector) {
  case value1:
    statements;
    break;
  case value2:
    statements;
    break;
}
```

# Cazul implicit
Cazul implicit specifică secțiunea `switch` de executat **dacă expresia de potrivire nu se potrivește cu nici o altă etichetă de caz**.

Dacă un caz implicit nu este prezent și expresia de potrivire nu se potrivește cu nici o altă etichetă de caz, fluxul de program **cade** prin instrucțiunea de comutare.

Cazul implicit poate apărea în orice ordine în instrucțiunea de comutare, dar indiferent de ordinea acesteia în codul sursă este întotdeauna evaluată **ultima**, după ce au fost evaluate toate etichetele de caz.

```java
switch (selector) {
  case value1:
    statements;
    break;
  case value2:
    statements;
    break;
  default:
    statements;
    break;
}
```
[/slide]

[slide hideTitle]
# Exemplu: "Yes" or "No"
Să scriem un program care tipărește **"Yes" or "No"** (în limba engleză) în funcție de **numărul dat** (Y, N) sau **"Invalid response"** dacă este dată o intrare nevalidă.

```java
Scanner scanner = new Scanner(System.in);
String choice = scanner.nextLine();
switch (choice) {
  case "Y":
    System.out.println("Yes");
    break;
  case "N":
    System.out.println("No");
    break;
  default:
    System.out.println("Invalid response");
    break;
}
```
[/slide]

[slide hideTitle]
# Etichete multiple
În **Java** avem posibilitatea de a utiliza etichete **multiple** `case` în construcția 'switch-case', atunci când trebuie să execute **același cod**.

În acest fel, când **programul nostru** găsește o **potrivire**, acesta va executa **următorul** cod, deoarece **după** eticheta respectivă `case` **nu există cod** de executat și un operator `break`. 

```java
switch (selector) {
    case value1:
    case value2:
    case value3:
        construction;
        break;
    case value4:
    case value5:
        construction;
        break;
    default:
        construction;
        break;
}
```
# Exemplu: Tipul de animal
Scrieți un program care tipărește tipul animalului în funcție de numele acestuia:
-  Dog -> **mammal**
-  Crocodile, tortoise, snake -> **reptile**
-  Others -> **unknown**

Putem rezolva sarcina cu condiții de `switch-case` cu mai multe etichete în felul următor:
```java
Scanner scanner = new Scanner(System.in);
String animal = scanner.nextLine();
switch (animal) {
    case "dog":
    case "cat":
      System.out.println("mammal");
      break;
    case "crocodile":
    case "tortoise":
    case "snake":
      System.out.println("reptile");
      break;
    default:
      System.out.println("unknown");
      break;
}
```
[/slide]