

[slide]
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

[slide]
# Inițializarea unui StringBuilder

- `StringBuilder()` - creează un **gol** **StringBuilder** cu **capacitatea inițială de 16**
```java live
StringBuilder sb = new StringBuilder();

System.out.println(sb.capacity()); // 16   
```

- `StringBuilder(String str)` - creează un **StringBuilder** cu **șirul specificat**
```java live
StringBuilder sb = new StringBuilder("Hello,JAVA");

System.out.println(sb);

```

- `StringBuilder(int capacity)` - creează un **gol** **StringBuilder** cu **capacitatea specificată**
```java live
StringBuilder sb = new StringBuilder(25);

System.out.println(sb.capacity()); // 25 
```
[/slide]

















