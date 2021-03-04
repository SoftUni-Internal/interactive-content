
[slide]
# Adăugare
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


[/slide]
[slide]
# Lungime
- `length()` - returnează **lungimea șirului** din tampon
```java live
StringBuilder sb = new StringBuilder("Hello Peter, how are you?");

System.out.println(sb.length()); // 25
```
- `setLength(int newLength)` - Setează **lungimea șirului**. Dacă **nouaLungime** este **mai puțin** decât **lungimea ()**, **ultimele caractere** din șir sunt **trunchiate**. 

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
[/slide]

[slide]
# Acces

- `charAt(int index)` - returnează caracterul pe indexul curent
```java live
StringBuilder sb = new StringBuilder();

sb.append("Hello Peter, how are you?");

System.out.println(sb.charAt(1)); // e
```

[/slide]

[slide]
# Înlocuire

- `replace(int startIndex, int endIndex, String str)` - înlocuiește caracterele dintr-un șir
```java live
StringBuilder sb = new StringBuilder("Hello Peter, how are you?");

sb.replace(6, 11, "George");

System.out.println(sb.toString()); // Hello George, how are you?
```

[/slide]

[slide]
# Convertiți în Șir

- `toString()` - **convertește** valoarea acestei instanțe **într-un șir**
```java live
StringBuilder sb = new StringBuilder("Hello Peter, how are you?");

String text = sb.toString();
        
System.out.println(text); // Hello Peter, how are you? 
```

[/slide]
