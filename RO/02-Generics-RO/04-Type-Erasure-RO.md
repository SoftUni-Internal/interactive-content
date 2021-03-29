# Ștergerea Tipului
[slide hideTitle]

# Ștergerea Tipului

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/03-Generics/RO/interactive-java-advanced-generics-16-17-Type-Erasure-and-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Un alt termen important în genericele Java este **ștergerea tipului**.

Pentru a implementa un comportament generic, compilatorul Java aplică ștergerea tipului.

Ștergerea tipului este un proces în care compilatorul înlocuiește un parametru generic cu o metodă reală de clasă sau punte.

În ștergerea tipului, compilatorul se asigură că nu sunt create clase suplimentare și că nu există nici o cheltuială de execuție.

Cum funcționează ștergerea tipului:

- Înlocuiți parametrii de tip în tip generic cu limitele lor dacă se utilizează parametrii de tip **delimitați**

- Înlocuiți parametrii de tip în tip generic cu obiect dacă se utilizează parametri de tip **nelimitați**

- Introduceți piese turnate pentru a păstra siguranța tipului

- Generați metode punte pentru a menține polimorfismul în tipuri generice extinse

Să vedem următorul exemplu:

```java live 
List<String> strings = new ArrayList<>();

// True
System.out.println(strings instanceof List);

// Compile Time Error
System.out.println(strings instanceof List<String>);
```
La compilare, compilatorul șterge toate sintaxele parantezelor unghiulare și, din acest motiv, Eroarea Timpului de Compilare apare într-o încercare de a verifica dacă **șirurile** sunt un exemplu de `List<Strings>`.

Compilatorul adaugă tipuri de distribuții pentru noi (prezentate în octet-cod).

[/slide]
