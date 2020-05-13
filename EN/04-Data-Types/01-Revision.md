# Revision

[slide]
# Video

[/slide]

[slide]
# Revision

## Declaring Variables
We can declare a variable in the following way:
```java
int number = 5;
String language = "english";
```

### Reading from the Console
```java live
Scanner sc = new Scanner(System.in);
String name = sc.nextLine();                       
int age = Integer.parseInt(sc.nextLine());
System.out.println("My name is " + name +" and I am " + age + " years old");
```

### Printing to the Console
```java live
Scanner sc = new Scanner(System.in);
String name = sc.nextLine();
System.out.println("Hi, " + name);
```

## Conditional Statements
We use `if-else` statement to specify when a block of Java code to be executed, that way we can **check particular conditions** and perform various actions depending on the result of the check.

```java live
Scanner sc = new Scanner(System.in);
double grade = Double.parseDouble(sc.nextLine());
if (grade >= 3.00) {
 System.out.println("Passed!");
} else {
 System.out.println("Failed!");
}
```
In the example above if we receive a grade bigger or equal to 3 we receive `Passed!`, otherwise we receive `Failed!`.

## Loops 
If we want to repeat a block code multiple times we can use **loops**. 

### For loop example
```java live
for (int i = 1; i <= 10; i += 1) {
  System.out.println(i);
}
```

### While loop example
```java
while (condition) {
   // loop body
}
```

### Do-While Loop example
```java
int n = 0;
do {
    // loop body;
} while (condition);
```

## Debugging
**Debugging** is the process of "**attaching**" to the program execution, which allows us to **track step by step the process**.
[image assetsSrc="debugger-picture.png" /]
[/slide]