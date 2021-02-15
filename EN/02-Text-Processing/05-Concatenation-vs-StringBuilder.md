[slide hideTitle]

# Concatenation vs StringBuilder

- **Concatenating** strings is a **slow** operation because each iteration creates a **new String**

Copy the following code and run it locally:

```java
// Start time of program execution
System.out.println(new Date());

String text = "";
        
for (int i = 0; i < 1000000; i++){

    text += "a";
}
// End time 
System.out.println(new Date());
```

It is clear that the time of program execution is about 1 minute, which is slow.

The same operation can be performed with `StringBuilder`:

```java
System.out.println(new Date());

StringBuilder text = new StringBuilder();

for (int i = 0; i < 1000000; i++){

     text.append("a");
}
System.out.println(new Date());
```

The time of program execution is about 1 second, a lot faster than the concatenation.

[/slide]