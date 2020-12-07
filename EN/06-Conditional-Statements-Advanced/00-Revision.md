# Revision


[slide]
# Revision
Let's revise what we learned in the last lesson:
- Numbers can be **compared** by the `==`, `<`, `>`, `<=`, `>=` and `!=` operators:
```java live
System.out.println(5 <= 10);  // true
```

- Simple **if-conditions** check a condition and execute a code block if it is **true**:
```java live
int a = 10;
if (a > 5) {
    System.out.println("The number `a` is bigger than 5");
}
```

- The **if-else construction** executes one of two blocks depending on whether a condition is **true** or **false**:
```java live
int a = 10;
if (a > 5) {
    System.out.println("The number `a` is bigger than 5");
} else {
    System.out.println("The number `a` is smaller or equal than 5");
}
```

- If-else constructions can be chained as **if-else-if-else sequences**:
```java live
int a = 10;
if (a > 100) {
    System.out.println("The number `a` is bigger than 100");
} else if (a > 20) {
    System.out.println("The number `a` is bigger than 20");
} else {
    System.out.println("The number `a` is smaller or equal than 20");
}
```
[/slide]