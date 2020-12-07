# Summary

[slide]
# Summary

We can repeat a code block using a `for` loop:
```java live
for (int i = 0; i < 10; i++) {
  System.out.println(i);
}
```

We can read a sequence of `n` numbers from the console this way:
```java live
Scanner scanner = new Scanner(System.in);
for (int i = 0; i < 10; i++) {
    int number = Integer.parseInt(scanner.nextLine());
}
```

We can use a different step in the `for` loop:
```java live
for (int i = 0; i < 10; i += 2) {
  System.out.println(i);
}
```

We can iterate over characters:
```java live
for (char ch = 'a'; ch <= 'z'; ch++) {
  System.out.print(ch + " ");
}
```
[/slide]