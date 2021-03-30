# Cuvânt cheie static în Java

[slide hideTitle]

# Cuvânt Cheie Static

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/02-More-OOP-Concepts/RO/02.Java-OOP-Basics-More-OOP-Concepts-28-29-Static-Keyword-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Folosim cuvânt cheie "**static**", în principal pentru gestionarea memoriei

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

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/02-More-OOP-Concepts/RO/02.Java-OOP-Basics-More-OOP-Concepts-30-Static-class-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/02-More-OOP-Concepts/RO/02.Java-OOP-Basics-More-OOP-Concepts-31-32-33-Static-variable-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/02-More-OOP-Concepts/RO/02.Java-OOP-Basics-More-OOP-Concepts-34-35-Static-Method-and-Example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Metoda statică aparține mai degrabă clasei decât obiectului unei clase**

- Poate fi **invocat** fără a fi nevoie să creați o instanță a unei clase
- Poate **accesa** membrul din date statice și poate **schimba** valoarea acestuia
- **Nu se poate utiliza** un membru de date nestatic **sau nu se poate apela** direct metoda nestatică
- "**this**" și "**super**" nu pot fi utilizate în context static

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

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/02-More-OOP-Concepts/RO/02.Java-OOP-Basics-More-OOP-Concepts-36-37-Statick-block-and-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Un **static block** reprezintă un set de instrucțiuni care vor fi executate de către JVM înainte de execuția metodei main.

- Blocurile statice sunt executate în momentul încărcării clasei
- O clasă poate să aibă orice număr de blocuri statice  
   - acestea vor fi executate de sus în jos 

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
Blocurile statice sunt cunoscute drept **static clauses**.
[/slide]