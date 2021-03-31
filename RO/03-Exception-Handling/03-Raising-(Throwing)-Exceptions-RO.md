# "throwing" Exceptions

[slide hideTitle]

# How to "throw" an Exception

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/RO/Java-Advanced-Exceptions-and-Error-Handling-18-throwing-exceptions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Excepțiile sunt aruncate (ridicate) de cuvântul cheie **throw**.

Acestea sunt folosite pentru a notifica codul de apel în caz de eroare sau situație neobișnuită.

**Când se aruncă o excepție:**
- Execuția programului se oprește
- Excepția se deplasează peste stivă până când se ajunge la un bloc de potrivire corespunzător pentru a-l manipula
   
Excepțiile nesoluționate afișează un mesaj de eroare.

[/slide]

[slide hideTitle]

# Utilizarea Cuvântului Cheie "throw"

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/RO/Java-Advanced-Exceptions-and-Error-Handling-20-using-throw-keyword-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- Aruncarea unei excepții cu un mesaj de eroare:

```java
throw new IllegalArgumentException("Invalid amount!");
```
- Excepțiile pot accepta mesajul și pot provoca:

```java
try {
  …
} catch (SQLException sqlEx) {
  throw new IllegalStateException("Cannot save invoice.", sqlEx);
}
```

**Notă:** dacă excepția inițială nu este trecută, cauza inițială a excepției se pierde.

[/slide]

[slide hideTitle]

# Relansarea Excepțiilor

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/RO/Java-Advanced-Exceptions-and-Error-Handling-21-re-throwing-exceptions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- Excepțiile prinse pot fi reluate din nou:

```java
try {
    Integer.parseInt(str);
} catch (NumberFormatException ex) {
    System.out.println("Parse failed!");
    throw ex; // Re-throw the caught exception
}
```

**Exemplu:**

```java
public static double sqrt(double value) {
    if (value < 0)
        throw new IllegalArgumentException(
            "Sqrt for negative numbers is undefined!");
    return Math.sqrt(value);
}
public static void main(String[] args) {
    try {
        sqrt(-1);
    } catch (IllegalArgumentException ex) {
        System.err.println("Error: " + ex.getMessage());
        ex.printStackTrace();
    }
}
```
[/slide]


[slide hideTitle]

# Problemă cu Soluție: Valid Person

Definiți o clasă simplă **Person**, care are următoarele câmpuri:

  - First name
  - Last name
  - Age

**Validați** datele din **setters**. 

**Aruncați excepțiile** adecvate în cazul în care sunt introduse date nevalide.

- **Pasul 1. Creați o clasă Person**

Clasa ar trebui să conțină următoarele câmpuri:

- First name (string) 

- Last name (string) 

- Age (int)

Toate câmpurile sunt **obligatorii**, ceea ce înseamnă că ar trebui să aveți un constructor care să le accepte pe toți trei ca **parametri**. 

De exemplu:

```java
public class Person {
    private String firstName;
    private String lastName;
    private int age;

    public Person(String firstName, String lastName, int age) {
        // TODO: add setters and validate data
    }

    //TODO: add getters and setters
}
```

- **Pasul 2. Adăugați Getters și Setters și Validați Datele**

Adăugați **getters și setters** pentru fiecare dintre câmpuri.

Efectuați validări în **setters** pentru a menține o corectă starea a obiectelor **Person**.

**Numele** și **prenumele** nu pot fi șiruri **null** sau **empty string**.

Pentru a verifica acest lucru, utilizați metoda `string.IsNullOrEmpty()`.

**Vârsta** trebuie să fie în intervalul [0 … 120].

Dacă sunt introduse date nevalide, **aruncați** excepții corespunzătoare cu **mesaje descriptive**.

De exemplu, dacă este introdus un nume gol, o excepție adecvată poate fi **IllegalArgumentException**.

Exemplu de validare a **prenumelui** (numele de familie este analog):

```java
private void setFirstName(String firstName) {
    if (firstName.isBlank()) {
        throw new IllegalArgumentException("The first name cannot be null or empty");
    }

    this.firstName = firstName;
}
```
Example for validating the **age**:

```java
private void setAge(int age) {
    if (age < 0 || age > 120) {
        throw new IllegalArgumentException("Age should be in the range [O...120]");
    }

    this.age = age;
}
```

Acum constructorul ar trebui să facă uz de setters în loc să modifice direct câmpurile private:

```java
public Person(String firstName, String lastName, int age) {
    this.setFirstName(firstName);
    this.setLastName(lastName);
    this.setAge(age);
}
```

- **Pasul 3. Testați Clasa Person**

În programul principal, testați dacă clasa dvs. se comportă corect.

Creați mai multe obiecte de tip Person - unul cu **date valabile**, unul cu un **prenume gol**, una cu **null ca nume de familie**, una cu **vârstă negativă** și una cu **age > 120**.

Verificați dacă executarea codului are ca rezultat erori, atunci când sunt furnizate date necorespunzătoare.

Testați unul câte unul cazurile nevalide comentând celelalte linii de cod nevalide (programul dvs. se va opri din executare când se întâlnește prima eroare).

```java
public static void main(String[] args) {
    Person peter = new Person(firstName: "Franco", lastName: "Aimee", age: 19);

    Person noName = new Person(firstName: " ", lastName: "Aimee", age: 19);
    Person noLastName = new Person(firstName: "Franco", lastName: null, age: 19);
    Person negativeAge new Person(firstName: "Franco", lastName: "Aimee", age: -1);
    Person validPerson = new Person(firstName: "Franco", lastName: "Aimee", age: 121);
}
```

- **Pasul 4. Adăugați blocuri try-catch**

Pentru a preveni explozia programului, înconjurați liniile nevalide în **try-catch** blocurile.

Este o practică bună să puneți blocuri diferite pentru diferitele tipuri de erori pe care anticipați că ar putea să le arunce operațiunea.

Imprimați **mesajul** al excepției în blocul de capture.

Exemplu:

```java
try {
    Person noName = new Person(firstName: " ", lastName: "Aimee", age: 19);
} catch (IllegalArgumentException ex) {
    System.out.println("Exception thrown: " + ex.getMessage());
}

// Result in console:
// Exception thrown: The first name cannot be null or empty
```

[/slide]
