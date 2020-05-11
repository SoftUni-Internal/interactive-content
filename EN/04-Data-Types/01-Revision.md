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

## Reading from or Printing to the Console

```java live
Scanner sc = new Scanner(System.in);
String name = sc.nextLine();
int age = Integer.parseInt(sc.nextLine());
double salary = Double.parseDouble(sc.nextLine());
```

### Printing to the Console
```java live
Scanner sc = new Scanner(System.in);
System.out.print("Name: ");
String name = scanner.nextLine();
System.out.println("Hi, " + name);
```

## Conditional Statements
We use `if-else` statement to specify a block of Java code to be executed if a condition is true:

```java
if (grade >= 3.00) {
   System.out.println("Passed!");
} else {
   System.out.println("Failed!");
}
```

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
  //loop body
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
[/slide]