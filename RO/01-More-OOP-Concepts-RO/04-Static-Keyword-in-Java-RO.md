# Cuvânt cheie static în Java

[slide hideTitle]

# Cuvânt Cheie Static

Folosim cuvânt cheie **static**, în principal pentru gestionarea memoriei

Se poate aplica la:
- Clasa imbricată
- Variabile
- Metode
- Blocuri

**Aparține clasei, decât la o instanța a clasei**.

```java
static int count;
static void increaseCount() {
  count++;
}
```
[/slide]

[slide hideTitle]
# Clasa statică

- O clasă de nivel superior este o clasă care nu este o clasă imbricată
- O clasă imbricată este orice clasă a cărei declarație are loc în corpul altei clase sau interfețe
- Numai clasele imbricate pot fi statice

```java
class TopClass {
  static class NestedStaticClass {

  }
}
```
[/slide]

[slide hideTitle]

# Variabilă Statică

**Variabila statică** poate fi utilizată pentru a se referi la variabila comună a tuturor obiectelor

Exemplu:

- Numele companiei angajaților
- Numele colegiului studenților
- Numele colegiului este comun pentru toți studenții

**Alocați memoria o singură dată în zona clasei în momentul încărcării clasei**

Exemplu: Incrementarea Counter 

```java
class Counter {
  int count = 0;   static int staticCount = 0;
  public Counter() {
    count++;        // incrementing value
    staticCount++;  // incrementing value
  }
  public void printCounters() {
    System.out.printf("Count: %d%n", count);
    System.out.printf("Static Count: %d%n", staticCount);
  }

  // Inside the Main Class
public static void main(String[] args) {
  Counter c1 = new Counter();
  c1.printCounters();                // Count: 1
  Counter c2 = new Counter();        // Static Count: 1
  c2.printCounters();                // Count: 1
  Counter c3 = new Counter();        // Static Count: 2
  c3.printCounters();                // Count: 1
  int counter = Counter.staticCount; // Static Count: 3  
}
```

[/slide]

[slide hideTitle]

# Metoda Statică

**Metoda statică aparține mai degrabă clasei decât obiectului unei clase**

- Poate fi **invocat** fără a fi nevoie să creați o instanță a unei clase
- Poate **accesa** membrul din date statice și poate **schimba** valoarea acestuia
- **Nu se poate utiliza** un membru de date nestatic **sau nu se poate apela** direct metoda nestatică
- `this` și `super` nu pot fi utilizate în context static

**Exemplu**: Calculați volumul unui cub


```java
class Calculate {
  static int cube(int x) { return x * x * x; }
  public static void main(String args[]) {
    int result = Calculate.cube(5);
    System.out.println(result);         // 125
    System.out.println(Math.pow(2, 3)); // 8.0
  }
}
```

[/slide]

[slide hideTitle]

# Bloc Static

 A **static block** represents a set of statements, which will be executed by the JVM before the execution of the main method.

- Static blocks are executed at the time of class loading
- A class can take any number of static blocks
   - they will be executed from top to bottom

```java
class Main {
  static int n;
  public static void main(String[] args) {
    System.out.println("From main");
    System.out.println(n);
  }
  static {
    System.out.println("From static block");
    n = 10;
  }
}
// Output:
//From static block
//From main
//10
```
Static blocks are also known as **static clauses**.
[/slide]