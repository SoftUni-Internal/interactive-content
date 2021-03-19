

[slide hideTitle]
# StringBuilder: Cum funcționează?

La fel ca Șirul, `StringBuilder` este o **secvență de caractere**.

Principala diferență dintre ele este că `StringBuilder` este **modificabil (poate fi modificat).**

Spre deosebire de șiruri, fiecare `StringBuilder` păstrează un spațiu tampon, alocat în avans.
```java
// creates an empty StringBuilder 
// by default, the initial capacity of empty StringBuilder is 16
StringBuilder sb = new StringBuilder();
        
// appends a string into StringBuilder
sb.append("Hello,JAVA");
        
// length() - the length of the string
System.out.println(sb.length());   // 10

// capacity() - the capacity of the StringBuilder
System.out.println(sb.capacity()); // 16   
```

`Capacitatea()` este întotdeauna **mai mare sau egală cu** `length()` șirului și se extinde automat ori de câte ori este necesar pentru a adăuga mai mult text sau simboluri.

[image assetsSrc="StringBuilder-example(1).png" /]

[/slide]

[slide hideTitle]
# Inițializarea unui StringBuilder

There are several ways to initialize a `StringBuilder`:

- `StringBuilder()` - creează un **gol** **StringBuilder** cu **capacitatea inițială de 16**

```java live
StringBuilder sb = new StringBuilder();

System.out.println(sb.capacity()); // 16   
```

- `StringBuilder(String str)` - creează un **StringBuilder** cu **șirul specificat**

```java live
StringBuilder sb = new StringBuilder("Hello, JAVA");

System.out.println(sb);

```

- `StringBuilder(int capacity)` - creează un **gol** **StringBuilder** cu **capacitatea specificată**

```java live
StringBuilder sb = new StringBuilder(25);

System.out.println(sb.capacity()); // 25 
```
[/slide]


[slide hideTitle]

# Concatenare vs StringBuilder

- **Concatenarea șirurilor** este o operațiune **lentă, deoarece fiecare iterație creează un șir** nou

Copiați următorul cod și rulați-l pe computer!

```java
// Start time of program execution
System.out.println(new Date());

String text = "";
        
for (int i = 0; i < 1000000; i++){

    text += "a";
}
// End time 
System.out.println(new Date());
```

După cum puteți vedea, timpul de execuție al programului este de aproximativ 1 minut, ceea ce este lent.

- Să facem aceeași operație folosind **StringBuilder**

```java
System.out.println(new Date());

StringBuilder text = new StringBuilder();

for (int i = 0; i < 1000000; i++){

     text.append("a");
}
System.out.println(new Date());
```

Timpul de execuție al programului este de aproximativ 1 secundă, într-adevăr mai rapid decât concatenarea.

[/slide]


[slide hideTitle]
# Adăugare

Here are some of **StringBuilder**'s methods and what they do:

- `append()` - **adaugă** o valoare șir **la sfârșitul** secvenței curente de caractere

```java live
StringBuilder sb = new StringBuilder();

sb.append("Hello, ");
sb.append("John! ");
sb.append("I sent you an email.");

System.out.println(sb.toString());
```

- `insert(int index, String str)` - **inserează** un șir la **caracter** specificat **poziție**

```java live
StringBuilder sb = new StringBuilder("Hello Peter, how are you?");

sb.insert(11, " Smith");

System.out.println(sb.toString());
```

- `length()` - returnează **lungimea șirului** din tampon

```java live
StringBuilder sb = new StringBuilder("Hello Peter, how are you?");

System.out.println(sb.length()); // 25
```

- `setLength(int newLength)` - Setează **lungimea șirului**

Dacă **nouaLungime** este **mai puțin** decât **lungimea()**, **ultimele caractere** din șir sunt **trunchiate**

```java live
StringBuilder sb = new StringBuilder("Hello Peter, how are you?");

sb.setLength(12);

System.out.println(sb.toString()); // Hello Peter,
```

Dacă **nouaLungime** este **mai mare** decât **length()**, **se adaugă** caractere nule la sfârșitul șirului.

```java live
StringBuilder sb = new StringBuilder("Hello Peter, how are you?");

sb.setLength(28);

System.out.println(sb.toString()); // Hello Peter, how are you?

System.out.println(sb.length()); // 28
```

- `charAt(int index)` - returnează caracterul pe indexul curent

```java live
StringBuilder sb = new StringBuilder();

sb.append("Hello Peter, how are you?");

System.out.println(sb.charAt(1)); // e
```

- `replace(int startIndex, int endIndex, String str)` - înlocuiește caracterele dintr-un șir

```java live
StringBuilder sb = new StringBuilder("Hello Peter, how are you?");

sb.replace(6, 11, "George");

System.out.println(sb.toString()); // Hello George, how are you?
```

- `toString()` - **convertește** valoarea acestei instanțe **într-un șir**

```java live
StringBuilder sb = new StringBuilder("Hello Peter, how are you?");

String text = sb.toString();
        
System.out.println(text); // Hello Peter, how are you? 
```

[/slide]