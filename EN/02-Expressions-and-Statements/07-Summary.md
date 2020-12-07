
[slide]
# Summary

Reading a text:
```java live
Scanner scanner = new Scanner(System.in);

String input = scanner.nextLine();
```

Reading an integer:
```java live
Scanner scanner = new Scanner(System.in);

int number = Integer.parseInt(scanner.nextLine());
```

Reading a floating-point number:
```java live
Scanner scanner = new Scanner(System.in);

double number = Double.parseDouble(scanner.nextLine());
```

Calculations with numbers and using the suitable arithmetic operators: `+`, `-`, `*`, `/`, `%`.

Printing a text by placeholders on the console:
```java live
System.out.printf("%d + %d = %d", 3, 5, 3 + 5);
```
[/slide]