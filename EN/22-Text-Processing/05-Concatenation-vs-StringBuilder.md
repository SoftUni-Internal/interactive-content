# Concatenation vs StringBuilder

[slide]

# Concatenation vs StringBuilder

- **Concatenating** strings is a **slow** operation because each iteration creates a **new String**

```java live

// Start time of program execution
System.out.println(new Date());

String text = "";
        
for (int i = 0; i < 1000000; i++){

    text += "a";
}
// End time 
System.out.println(new Date());
```
As we can see the time of program execution is about 1 minute, which is slow.

- Let's do the same operation using **StringBuilder**
```java live
System.out.println(new Date());

StringBuilder text = new StringBuilder();

for (int i = 0; i < 1000000; i++){

     text.append("a");
}
System.out.println(new Date());
```
The time of program execution is about 1 second, really faster than the concatenation.

[/slide]