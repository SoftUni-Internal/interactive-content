[slide hideTitle]

# Sequence of If-Else Conditions

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/02-conditional-statements/EN/interactive-programming-basics-with-java-conditional-statements-25-27-series-of-conditions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Sometimes we need a sequence of conditions before we decide what actions our program will execute. 

In such cases, we can apply the `if-else if ... -else` construction.

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

[slide hideTitle]
# Example: Digits in English

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/02-conditional-statements/EN/interactive-programming-basics-with-java-conditional-statements-25-27-series-of-conditions-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Print out the word representing one of the digits from 1 to 9 (a digit is read from the console).

After receiving the digit, we can run it through a **sequence of conditions** and print out the relevant English word:
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
    System.out.println("number out of range");
}
```

The program **sequentially compares** the input number with the digits from 1 to 9, **each following comparison is being performed only in case the previous comparison was not true**. 

Eventually, if none of the `if` statements are true, the `else` **clause** is performed.
[/slide]
