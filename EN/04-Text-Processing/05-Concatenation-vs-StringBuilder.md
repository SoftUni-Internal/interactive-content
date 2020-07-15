# Concatenation vs StringBuilder

[slide]
# Video

[vimeo-video startTimeInSeconds="7355" endTimeInSeconds="7976"]
[stream language="EN" videoId="421802353" default /]
[stream language="RO" videoId="436008840"  /]
[/video-vimeo]

[/slide]

[slide]

# Concatenation vs StringBuilder

- **Concatenating** strings is a **slow** operation because each iteration creates a **new String**

Copy the following code and run it on your computer!
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
As you can see the time of program execution is about 1 minute, which is slow.

- Let's do the same operation using **StringBuilder**
```java
System.out.println(new Date());

StringBuilder text = new StringBuilder();

for (int i = 0; i < 1000000; i++){

     text.append("a");
}
System.out.println(new Date());
```
The time of program execution is about 1 second, really faster than the concatenation.

[/slide]