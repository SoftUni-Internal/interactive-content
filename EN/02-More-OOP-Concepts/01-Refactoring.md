[slide]

# Refactoring

**Refactoring represent restructures the code without changing the behaviour**
- **Improves** code readability
- **Reduces** complexity

Example:

Before refactoring:

```java
class ProblemSolver { public static void doMagic() { … } }
```

After refactoring:

```java
class CommandParser { 
	public static <T> Function<T, T> parseCommand() { … } }
class DataModifier { public static <T> T execute() { … } }
class OutputFormatter { public static void print() { … } }
```
## Refactoring Techniques

- **Breaking code** into reusable units
- **Extracting parts of methods** and **classes** into **new** ones

`depositOrWithdraw()` => `deposit()`
                         `withdraw()`

- **Improving names** of variables, methods, classes, etc.

`String str;` => `String name`;

- **Moving methods** or **fields** to more appropriate classes

`Car.open();` => `Door.open`;

[/slide]

