# Data Types

[slide hideTitle]

# How does a Computer Work ?

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/EN/interactive-java-fundamentals-data-types-and-variables-3-4-How-computers-work-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A computer is an **electronic machine** that processes information. It takes the raw information (data) and stores it until it is ready to process. When processed it returns a results on the other end.

The **processing stages** are defined as follows: 

* **input** - taking in information
* **memory** - storing information
* **processing** - performing computations on information
* **output** - returning result

[image assetsSrc="How-Does-Computing-Work.png" /]

[/slide]

[slide hideTitle]
# Variables

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/EN/interactive-java-fundamentals-data-types-and-variables-5-Variables-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A variable is a location in the computer's memory, which can be addressed by its name. 

It is the basic storage unit in a program.

* The value stored inside a variable can be changed during the program's execution.

* A variable is only the name given to a memory location. Every operation done on the variable affects the memory location.

* In Java all variables must be declared before usage.

```java
int count = 5;
// int – data type
// count – variable name
// 5 – variable value
```

A variable is defined by its:

* **Data type**: the type of data that can be stored in this variable
* **Variable name**: the name given to the variable
* **Variable value**: the initial value stored in the variable

A variable can be declared without initialization and then initialized at a later time:

```java
int count;
count = 5;
```

In the example above we declare an `int` variable named `count`. When needed that variable can have a value assigned to it.

The `count` variable holds the value of `5` after getting initialized.

## Real Life Example
You can think of variables as kitchen jars. 

Imagine that in each jar you can only store one of the following: salt, sugar or coffee. 

[image assetsSrc="Variables-real-life-example.png" /]

In programming, 

we use variables that act as containers for different data types - numbers, text, symbols and so on. 

For example, if we have a variable meant to hold integers we will not be able to store text in it.

[/slide]

[slide hideTitle]
# What is a Data Type?

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/EN/interactive-java-fundamentals-data-types-and-variables-6-What-is-data-type-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Data types specify the different sizes and values that can be stored in variables. 

There are **two general data types** in Java:

**Primitive data types**

-	Built-in the programming language

-	The size and type of the variable values are strongly specified and they cannot be modified

- Examples: `boolean`, `char`, `int`, `long`, `float` and `double`


**Non-primitive data types**

-	Not defined by the programming language but by the programmer

-	They are also called "reference types" since they hold an address in the computer memory (RAM) where data is stored

-	Some examples are `Strings`, `Arrays` and `Classes`

[/slide]

[slide hideTitle]
# Data Type Characteristics

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/EN/interactive-java-fundamentals-data-types-and-variables-7-data-type-characteristics-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

```java
int myNum = 5;               // Integer (whole number)
float myFloatNum = 5.99f;    // Floating point number
char myLetter = 'D';         // Character
boolean myBool = true;       // Boolean
String myText = "Hello";     // String
```
**Data types** have the following characterstics:

* **Name**: a Java keyword

* **Size**: how much memory is used

* **Value**: every variable holds a value

Non-primitive data types hold references to the location of a value in memory.

[/slide]

[slide hideTitle]

# Naming Variables

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/EN/interactive-java-fundamentals-data-types-and-variables-8-naming-our-variables-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In programming, a naming convention is a set of **rules** to be observed when choosing a name for variables and other code elements.

Naming conventions make programs more understandable and easier to read. 

The naming convention used in Java is called "**camelCase**".

"**camelCase**" follows these rules:

- The first letter is always lower case

- Each word or abreviation following the first begins with a capital letter

- A camelCase name contains no spaces or punctuation

```Java
String firstName = John; //correct
String lastName = Smith; //correct
int personAge = 41;      //correct

String Firstname = John;  //incorrect
String last_name = Smith; //incorrect
int PersonAge = 41;       //incorrect
int foo = 2;              //incorrect
```
The name should explain the variable's purpose.

When naming a variable it should answer the question: **What does this variable contain?**
[/slide]

[slide hideTitle]
# Variable Scope and Lifetime

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/EN/interactive-java-fundamentals-data-types-and-variables-9-variable-scope-and-lifetime-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **scope** of a variable is defined by the areas or sections of a program in which the variable can be accessed.

The **lifetime** of a variable refers to how long the variable is kept in memory.

Generally, the scope of a variable is limited to the code block in which it is created.

A block **begins** with an opening curly bracket `{` and **ends** with a closing curly bracket `}`.

## Example
```java
public static void main(String[] args) {
  String outer = "I'm inside the Main()";

  //Beginning of inner block
  for (int i = 0; i < 10; i++) {
      String inner = "I'm inside the loop";
      System.out.println(inner); //print the result
  }
  //End of inner block

  System.out.println(outer);

  // System.out.println(inner); Error
```

[/slide]

[slide hideTitle]
# Variable Span

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/EN/interactive-java-fundamentals-data-types-and-variables-10-variable-span-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Variable **span** is a term representing how long before a variable is called after it is declared.

It is good practice to create variables with **shorter span**, i.e. create them right before they will be needed.

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
[/slide]

[slide hideTitle]
# Keeping Variable Span Short

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/01.Java-Fundamentals-Data-types-and-variables/EN/interactive-java-fundamentals-data-types-and-variables-11-keep-variable-span-short-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

As a rule of thumb, try to keep the variable span as short as possible.

A shorter variable span simplifies computer code and improves its **readability** and **maintainability**.

We can reduce the **outer** variable's span using the previous example:

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
