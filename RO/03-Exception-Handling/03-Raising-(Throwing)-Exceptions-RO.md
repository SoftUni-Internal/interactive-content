# "Aruncarea" Excepțiilor

[slide hideTitle]

# Cum se "Aruncă" o Excepție

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/RO/Java-Advanced-Exceptions-and-Error-Handling-18-22-throwing-exceptions-and-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Excepțiile sunt aruncate cu ajutorul cuvântului-cheie **throw**.

Acestea sunt folosite pentru a notifica persoana responsabilă pentru cod în cazul în care apare o eroare sau o situație neprevăzută.

**Când o excepție este "aruncată":**
- Execuția programului se oprește
- Excepția se deplasează peste stivă până când ajunge la un bloc **catch** potrivit pentru a o trata
   
Excepțiile nesoluționate afișează un mesaj de eroare, iar execuția programului se oprește.

[/slide]

[slide hideTitle]

# Utilizarea Cuvântului Cheie "throw"

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/RO/Java-Advanced-Exceptions-and-Error-Handling-20-using-throw-keyword-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- Aruncarea unei excepții cu un mesaj de eroare:

```java
throw new IllegalArgumentException("Invalid amount!");
```
- Excepțiile pot să conțină un mesaj și o cauză:

```java
try {
  …
} catch (SQLException sqlEx) {
  throw new IllegalStateException("Cannot save invoice.", sqlEx);
}
```

[/slide]

[slide hideTitle]

# Re-Aruncarea Excepțiilor

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/RO/Java-Advanced-Exceptions-and-Error-Handling-21-re-throwing-exceptions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- Excepțiile găsite pot fi aruncate din nou:

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

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/RO/interactive-java-advanced-exceptions-and-error-handling-problem-valid-person-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Definiți o clasă simplă **Person** care are următoarele câmpuri:

  - first name
  - last name
  - age

**Validați** datele din **setters**. 

**Aruncați excepțiile** adecvate în cazul în care datele introduse nu sunt valide.

- **Pasul 1. Creați o Clasă Person**

Clasa trebuie să conțină următoarele câmpuri:

- first name (String) 

- last name (String) 

- age (int)

Toate câmpurile sunt **obligatorii**, ceea ce înseamnă că ar trebui să aveți un constructor care să le accepte pe toate trei ca **parametri**. 

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

Efectuați validări în **setters** pentru a menține starea obiectelor **Person**.

**Numele** și **prenumele** nu pot fi șiruri **null** sau **goale**.

Pentru a verifica acest lucru, utilizați metoda `string.IsNullOrEmpty()`.

**Vârsta** trebuie să fie în intervalul \[0 … 120\].

Dacă datele introduse nu sunt valide, **aruncați** excepțiile corespunzătoare, cu **mesaje sugestive**.

De exemplu, dacă **numele** este un **șir gol**, o excepție adecvată poate fi **IllegalArgumentException**.

Exemplu de validare a **prenumelui**:

```java
private void setFirstName(String firstName) {
    if (firstName.isBlank()) {
        throw new IllegalArgumentException("The first name cannot be null or empty");
    }

    this.firstName = firstName;
}
```
Exemplu de validare a **vârstei**:

```java
private void setAge(int age) {
    if (age < 0 || age > 120) {
        throw new IllegalArgumentException("Age should be in the range [O...120]");
    }

    this.age = age;
}
```

Acum constructorul ar trebui să folosească setters în loc să modifice direct câmpurile private:

```java
public Person(String firstName, String lastName, int age) {
    this.setFirstName(firstName);
    this.setLastName(lastName);
    this.setAge(age);
}
```

- **Pasul 3. Testați Clasa Person**

În clasa **Main**, testați dacă clasa voastră se comportă corect.

Creați mai multe obiecte de tip **Person** - unul cu **date valabile**, unul cu un **șir gol pentru prenume**, unul cu **un șir null pentru numele de familie**, unul cu **vârstă negativă** și unul cu **vârsta > 120**.

Verificați dacă executarea codului are ca rezultat erori atunci când sunt furnizate date necorespunzătoare.

Testați unul câte unul cazurile nevalide și comentați celelalte linii de cod nevalide.

Notă: Execuția programului se va opri la întâlnirea primei erori.

```java
public static void main(String[] args) {
    Person peter = new Person(firstName: "Franco", lastName: "Aimee", age: 19);

    Person noName = new Person(firstName: " ", lastName: "Aimee", age: 19);
    Person noLastName = new Person(firstName: "Franco", lastName: null, age: 19);
    Person negativeAge new Person(firstName: "Franco", lastName: "Aimee", age: -1);
    Person validPerson = new Person(firstName: "Franco", lastName: "Aimee", age: 121);
}
```

- **Pasul 4. Adăugați Blocuri Try-Catch**

Pentru a preveni oprirea programului, încadrați liniile nevalide în blocuri **try-catch**.

Este o practică bună să puneți blocuri **try-catch** diferite pentru diferitele tipuri de erori pe care le anticipați.

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
