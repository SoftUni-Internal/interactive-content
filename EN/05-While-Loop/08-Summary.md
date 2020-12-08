# Summary


[slide]
# Summary

The while loops is repeated while a condition is `true`:
```java live
int num = 1;
while (num <= n) {
   System.out.println(num++);
}
```

If we have to interrupt the loop execution, we do it with the operator `break`:

```java live
int n = 4096;
while (true) {
   if (n < 1024) {
      break; 
   }

   System.out.println("The number is greater than 1024");
}

System.out.printf("The number is %d", n);
```
[/slide]