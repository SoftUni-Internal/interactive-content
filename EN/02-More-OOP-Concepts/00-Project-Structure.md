# Project-Structures

[slide]

# Methods

- We use **methods** to split code into functional blocks
    - Improves code **readability**
    - Allows for easier **debugging**

For Example:

From this nested loops:
```java
for (char move : moves){
  for (int r = 0; r < room.length; r++)
    for (int c = 0; c < room[r].length; c++)
      if (room[row][col] == 'b')
        …
}
```
To this readable splited in methods code:
```java
for (char move : moves) {
    moveEnemies();
    killerCheck();
    movePlayer(move);
 }
```
**Methods let us easily reuse code**
- We change the method once to affect all calls

Example:

```java
BankAccount bankAcc = new BankAccount();
bankAcc.setId(1);
bankAcc.deposit(20);
System.out.printf("Account %d, balance %d",
		bankAcc.getId(),bankAcc.getBalance());
bankAcc.withdraw(10);
…
System.out.println(bankAcc.toString());
//Override .toString() to set a global printing format

```
[/slide]

[slide]

# Problem: Rhombus of Stars

Draw on the console a rhombus of stars with size **n**

[image assetsSrc="more-oop-concepts-example(1).png" /]

[/slide]

[slide]

# Solution: Rhombus of Stars

```java
int size = Integer.parseInt(sc.nextLine());
for (int starCount = 1; starCount <= size; starCount++) {
  printRow(size, starCount); // Reusing code
}
for (int starCount = size - 1; starCount >= 1; starCount--) {
  printRow(size, starCount);
}

static void printRow(int figureSize, int starCount) {
  for (int i = 0; i < figureSize - starCount; i++)
    System.out.print(" ");
  for (int col = 1; col < starCount; col++) {
    System.out.print("* ");
  }
  System.out.println("*");
}
```
[/slide]

[slide]

# Splitting Code into Classes

**Just like methods, classes should not know or do too much**

Example:

```java
GodMode master = new GodMode();
int[] numbers = master.parseAny(input);
...
int[] numbers2 = master.copyAny(numbers);
master.printToConsole(master.getDate());
master.printToConsole(numbers);
```
**We can also break our code up logically into classes**
- Hiding implementation
- Allow us to change output destination
- Helps us to avoid repeating code

Example: Same block of code before and after using classes

Before

```java
List<Integer> input = Arrays.stream(
	sc.nextLine().split(" "))
	  .map(Integer::parseInt)
	  .collect(Collectors.toList()); 
...
String result = input.stream()
		      .map(String::valueOf)
		      .collect(Collectors.joining(", "));
System.out.println(result);
```
After

```java
ArrayParser parser = new ArrayParser();
OuputWriter printer = new OuputWriter();
int[] numbers = parser.integersParse(args);
int[] coordinates = parser.integerParse(args1);
printer.printToConsole(numbers);
```
[/slide]

[slide]

# Problem: Point in Rectangle

Create a Point class holding the horizontal and vertical coordinates

Create a **Rectangle class**
- Holds 2 **points**
    - **Bottom left** and **top right**

Add **Contains** method 
- Takes a **Point** as an argument
- **Returns** it if it’s inside the current object of the **Rectangle class**

[/slide]


[slide]



[/slide]