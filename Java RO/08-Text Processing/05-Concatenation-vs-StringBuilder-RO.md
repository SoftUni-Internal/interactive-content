
[slide]

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