# Data types

[slide]
# Video

[vimeo-video startTimeInSeconds="54" endTimeInSeconds="543"]
[stream language="EN" videoId="425081520" default /]
[stream language="RO" videoId="425084744"  /]
[/vimeo-video]

[/slide]

[slide]
# How Does Computing Work?
A computer is an e **electronic machine** that processes information, in other words, an information processor: it takes in raw information (or data) at one end, stores it until it's ready to work on it, chews and crunches it for a bit, then spits out the results at the other end.

All these processes have a **name**. 

Taking in information is called input, storing information is better known as memory (or storage), chewing information is also known as processing, and spitting out results is called output.

[image assetsSrc="How-Does-Computing-Work.png" /]

# Variables

A variable is a name given to a memory location. It is the basic unit of storage in a program.

* The value stored in a variable can be changed during program execution.

* A variable is only a name given to a memory location, all the operations done on the variable effects that memory location.

* In Java, all the variables must be created before use.

```java
int count = 5;
// int – data type
// count – variable name
// 5 – variable value
```

* **Data type**: Type of data that can be stored in this variable.
* **Variable name**: Name given to the variable.
* **Variable value**: It is the initial value stored in the variable.

A variable can be declared, without initialization:

```java
int count;
count = 5;
```

In the example above we declare an `int` variable, named `count` and when we need that variable we can assign a value.
Here we gave that variable value of `5`.

[/slide]

[slide]
# What Is a Data Type?

Data types specify the different sizes and values that can be stored in the variable. 

There are **two types of data types** in Java:

**Primitive data types**
-	Built-into a programming language
-	The size and type of the variable values are specified, and they cannot be modified
- Some examples include boolean, char, int, long, float, and double.


**Non-primitive data types**
-	Not defined by the programming language but by the programmer
-	Called reference variables since they hold the address in the computer memory (RAM) where the data is stored
-	Some examples include String, Arrays and Classes


```java
int myNum = 5;               // Integer (whole number)
float myFloatNum = 5.99f;    // Floating point number
char myLetter = 'D';         // Character
boolean myBool = true;       // Boolean
String myText = "Hello";     // String
```
As you see in the example above, **data types** have:

* **Name**: Java keyword.

* **Size**: how much memory is used.

* **Value**: every variable hold value.

# Naming Variables
In computer programming, a naming convention is a set of **rules** for choosing the name to be used for variables.

Naming conventions make programs more understandable by making them easier to read. 

In Java, the convention for naming variables is used ***"camel-case"***.

**Camel case** is the practice of writing phrases:

- each word or abbreviation in the middle of the phrase begins with a capital letter

- no spaces

- punctuation.

```Java
String firstName = John; //correct
String lastName = Smith; //correct
int personAge = 41;      //correct

String Firstname = John;  //wrong
String last_name = Smith; //wrong
int PersonAge = 41;       //wrong
int foo = 2;              //wrong
```
The variable's name should explain its purpose.

Before naming a variable, ask yourself: **What does this variable contain?**
[/slide]

[slide]
# Variable Scope and Lifetime

**Scope** of a variable refers to in which areas or sections of a program can the variable be accessed and **lifetime** of a variable refers to how long the variable stays alive in memory.

General convention for a variable's scope is, it is accessible only within the block in which it is created.

A block **begins** with a left curly brace `{` and **ends** with a right curly brace `}`.

## Example
```java
public static void main(String[] args) {
  String outer = "I'm inside the Main()";

  //Begining of inner block
  for (int i = 0; i < 10; i++) {
      String inner = "I'm inside the loop";
      System.out.println(inner); //print the result
  }
  //End of inner block

  System.out.println(outer);

  // System.out.println(inner); Error
```

[/slide]

[slide]
# Variable Span

Variable **span** is how long before a variable is called.

It's good practice to create a variable as **late as possible** (e.g. shorter span).

- Example
```java
static void main(String[] args) {
  String outer = "I'm inside the main()";

  //beginning of "outer" variable span
  for (int i = 0; i < 10; i++) {
    String inner = "I'm inside the loop";
    System.out.println(inner);
  }
   //end of "outer" variable span

  System.out.println(outer);
  //System.out.println(inner); Error
}
```
As a good rule of thumb, try to keep the variable span shorter.

Shorter span simplifies the code and improves its **readability** and **maintainability**.

We can reduce the `outer` variable span as follows:


```java
static void main(String[] args) {
  
  for (int i = 0; i < 10; i++) {
    String inner = "I'm inside the loop";
    System.out.println(inner);
  }

  //beginning of "outer" variable span
  String outer = "I'm inside the main()";
  System.out.println(outer);
  //end of "outer" variable span

  //System.out.println(inner); Error
}
```
[/slide]