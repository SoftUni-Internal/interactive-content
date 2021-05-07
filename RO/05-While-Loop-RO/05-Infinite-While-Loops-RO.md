[slide hideTitle]
# Bucla While Infinită

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/05-while-loops/RO/Java-While-Loops-21-22-23-24-25-Infinite-While-Loop-and-Example-with-Break-operator-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

O buclă `infinită` este o secvență de instrucțiuni care se repetă la nesfârșit atunci când o condiție de întrerupere nu a fost setată sau nu este atinsă.

Acest lucru se întâmplă atunci când condiția **buclei while** returnează întotdeauna `true`. 

```java
while (true) {
  // Commands
}
```

## Exemplu: Infinite While-Loop (Bug)
```java
String command = "Add";
while (command != "End") {
  System.out.println("Executing: " + command);
}
```

În exemplul de mai sus, condiția este întotdeauna `true` deoarece valoarea variabilei `command` nu este schimbată.

## Exemplu: Finite Loop (Bug Fixed)
```java
Scanner scanner = new Scanner(System.in);
String command = "Add";
while (command != "End") {
  System.out.println("Executing: " + command);

  command = scanner.nextLine();
}
```

Aici, valoarea variabilei `command` se schimbă la fiecare iterație și astfel, **bucla infinită** este evitată.
[/slide]
