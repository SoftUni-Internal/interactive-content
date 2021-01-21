[slide hideTitle]
# Bucla While infinită
Aceasta este o buclă infinită al cărei corp se repetă la nesfârșit.
In buclele `while` și `do-while` verificarea finală este o expresie condițională care returnează întotdeauna `true`. 

```java
while (true) {
  // Commands
}
```

# Exemplu: Bucla While infinită (Bug)
```java
String command = "Add";
while (command != "End") {
  System.out.println("Executing: " + command);
}
```

In exemplul de mai sus, condiția este întotdeauna `true` din motiv că nu se schimbă niciodată. 

# Exemplu: Buclă finită (Bug Fixed)
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