[slide hideTitle]
# Data Types

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/EN/interactive-programming-basics-with-java-expressions-and-statements-8-10-data-types-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In Java we can use data types to define variables with the following keywords:
  * **int** – an integer number: 1, 2, 3
  * **double** – a floating-point: -0.5, 3.14
  * **boolean** – a Boolean value: true, false
  * **char** – a symbol: 'a', 'b', '#'
  * **String** – text: "Hello", "World"

Once a variable is defined, it can change its value many times, but it cannot change its data type. 

Variables may hold only data of their type.

Here is how we can declare variables of different types:
```java
int a = 5;
String text = "Some text";
char letter = 'A';
float f = 4.2;
```

Data types hold values with similar characteristics.

Data types are characterized by:
  * **Name** - E.g. boolean, int, String, DateTime
  * **Size** (memory usage) - Example: 4 bytes
  * **Default value** - Example: 0
[/slide]

[slide hideTitle]
# Naming Conventions

In computer programming, a **naming convention** is a set of **rules** which we use when creating variable names.

The naming convention used in Java is called ***"camelCase"***.

Diffferent naming conventions are used in different languages some are: pascal case, snake case. 

**camelCase** combines words by:
* Capitalizing all words following the first one
* There can be no speces in a name
```java
int userLoginCount;
```

**PascalCase** combines words by:
* Capitalizing each word along with the first one
* No speces can be contained in the name
```java
int UserLoginCount;
```

**sake_case** is another naming convention, which separates words by:
* An underscore (_)
* A name may hold no spaces
* Each element's initial letter usually lowercased within the compound
* The first letter could be either upper or lowercase
```java
int users_count;
String first_name;
```
[/slide]
