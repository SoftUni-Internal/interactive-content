# Sequence of If-Else Conditions

[slide]
# Video

[vimeo-video startTimeInSeconds="3554" endTimeInSeconds="4003"]
[stream language="EN" videoId="341539841/456a08950e" default /]
[stream language="RO" videoId="387657941/b7f1ede8f0"  /]
[/vimeo-video]

[/slide]

[slide]
# Sequence of If-Else Conditions
Sometimes we need to do a sequence of conditions before we decide what actions our program will execute. 

In such cases, we can apply the construction `if-else if ... -else` **in series**.

For this purpose, we use the following format:
```java
if (condition) {
  // condition body;
} else if (second condition) {
  // condition body;
} else if (third condition) {
  // condition body;
}
…
else {
  // else construction body;
}
```
[/slide]

[slide]
# Example: Digits in English
Print the digits in the range of 1 to 9 (digits are read from the console) in English. 

We can read the digit and then, through a **sequence of conditions** we print the relevant English word:
```java live
int num = 5;

if (num == 1) {
    System.out.println("one");
} else if (num == 2) {
    System.out.println("two");
} else if (num == 3) {
    System.out.println("three");
} else if (num == 4) {
    System.out.println("four");
} else if (num == 5) {
    System.out.println("five");
} else if (num == 6) {
    System.out.println("six");
} else if (num == 7) {
    System.out.println("seven");
} else if (num == 8) {
    System.out.println("eight");
} else if (num == 9) {
    System.out.println("nine");
} else {
    System.out.println("number too big");
}
```

The program logic from the above example **sequentially compares** the input number from the console with the digits from 1 to 9, when **each following comparison is being performed only in case the previous comparison is not true**. 

Eventually, if none of the `if` statements are true, the last `else` **clause** is performed.
[/slide]