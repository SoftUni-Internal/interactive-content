[slide hideTitle]
# Data Types

[video src="https://videos.softuni.org/hls/Java/Java-Programming-Basics/01-expressions-and-statements/EN/interactive-programming-basics-with-java-expressions-and-statements-8-10-data-types-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In Java we can use data types to define variables as follows:
  * **int** – an integer number: 1, 2, 3…
  * **double** – a floating-point: -0.5, 3.14, …
  * **boolean** – a Boolean value: true, false
  * **char** – a symbol: 'a', 'b', '#', …
  * **String** – text: "Hello", "World", …

Once a variable is defined, it can change its value many times, but it cannot change its data type later. 

Variables may hold only data of their type. Here is how we can declare variables of different types:
```java
int a = 5;
String text = "Some text";
char letter = 'A';
float f = 4.2;
```

Data types set ranges of values with similar characteristics.

The are characterized by:
  * **Name** - E.g. boolean, int, String, DateTime
  * **Size** (memory usage) - Example: 4 bytes
  * **Default value** - Example: 0
[/slide]

[slide hideTitle]
# Naming Conventions

In computer programming, a naming convention is a set of **rules** for choosing the name to be used for variables.

In Java the convention for naming variables are used ***"camel-case"***. 

There are other naming conventions which are used in different languages such as pascal case, snake case. 

**Camel case** combines words by:
* Capitalizing all words following the first word
* Removing the space:
```java
int userLoginCount;
```

**Pascal case** combines words by:
* Capitalizing each word along with the first one
* Removing the space
```java
int UserLoginCount;
```

**Sake-case** is another naming convention, which separates words with:
* One underscore character (_)
* No spaces
* Each element's initial letter usually lowercased within the compound
* The first letter either upper or lowercase
```java
int users_count;
string first_name;
```
[/slide]