[slide hideTitle]
# Condiții simple if

Una dintre cele mai importante declarații din fiecare limbaj de programare este declarația `if`. 

În programare deseori  **verificăm  condiții particulare** și efectuăm diferite acțiuni în funcție de rezultatul verificării.
[image assetsSrc="02-usecase-if-statement.png" /]
Acest lucru se execută prin condiția `if`, care are următoarea structură:
```java
if (condition) {
  // condition body;
}
```

# Exemplu: vreme
Aici, dacă starea vremii ploioase la evaluează in `true`, atunci corpul declarației este executat.
```java
Scanner scanner = new Scanner(System.in);
String weather = scanner.nextLine();

if (weather.equals("rainy")) {
    System.out.println("Take an umbrella!");
}
```
[/slide]

[slide hideTitle]
# Problem with Solution: Freezing Weather
[code-task title="Freezing Weather" taskId="pb-java-Conditional-Statements-Freezing-Weather" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```java
import java.util.Scanner;

public class Program {
   public static void main(String[] args) {
      // Scrieți codul aici
    }
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți un program pentru a verifica vremea rece:

  * Citește o temperatură în Celsius (un număr real reprezentat în virgulă mobilă cu simplă precizie (float))
  * Tipăriți `Freezing weather!`, dacă temperatura este **egală** sau **mai mică de 0**
  # Exemplu

| **Input** | **Output** | 
| ---- | ---- |
| -2 | Freezing weather!|
| 4 | (no output)

[/task-description]
[tests]
[test]
[input]
-2
[/input]
[output]
Freezing weather!
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
[/output]
[/test]
[test]
[input]
-5
[/input]
[output]
Freezing weather!
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

