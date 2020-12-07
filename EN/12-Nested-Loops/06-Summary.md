# Summary


[slide]
# Summary

We can nest `for` loops in one another:
```java live
int n = 5;
for (int i = 1; i <= n; i += 3) {
    for (int j = 1; j <= n; j += 3) {
        for (int k = 1; k <= n; k += 3) {
            System.out.printf("%d%d%d%n", i, j, k);
        }
    }
}
```

We can nest `while` loops in one another:
```java live
int i = 0;
int n = 5;
while (i < n) {
  System.out.printf("Value of i: %d%n", i);
  int j = 1;
  i++;

  while (j < n) {
    System.out.printf("  Value of j: %d%n", j);
    j++;
  }
}
```
[/slide]