# Revision

[slide]
# Video

[vimeo-video startTimeInSeconds="1028" endTimeInSeconds="1323"]
[stream language="EN" videoId="343678060" default /]
[stream language="RO" videoId="391452320"  /]
[/vimeo-video]

[/slide]

[slide]
# Revision

## Declaring Variables
We can declare a variable in the following way:
```java live
int number = 5;
String language = "english";
```

## Reading from or Printing to the Console

### Reading from the Console
```java
Scanner sc = new Scanner(System.in);
String name = sc.nextLine();
int age = Integer.parseInt(sc.nextLine());
double salary = Double.parseDouble(sc.nextLine());
```

### Printing to the Console
```java live
System.out.print("Name: ");
String name = scanner.nextLine();
System.out.println("Hi, " + name);
// Name: George
// Hi, George
```

## Conditional Statements
We've learned how to implement programming logic, using **conditional statements**

```java
if (grade >= 3.00) {
   System.out.println("Passed!");
} else {
   System.out.println("Failed!");
}
```

## Loops 
We've learned how to repeat a code block multiple times, using **loops**

### For loop example
```java live
for (int i = 1; i <= 10; i += 1) {
  System.out.println(i);
}
```

### While loop example
```java
while (condition) {
  loop body;
}
```

### Do-While Loop example
```java live
int n = 0;
do {
    System.out.println(n);
    n++;
} while (n < 5);
```

## Debugging
We've learned how to find bugs in our code, useing **the debugger**.
[/slide]