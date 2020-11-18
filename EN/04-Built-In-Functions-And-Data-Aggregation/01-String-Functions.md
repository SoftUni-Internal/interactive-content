
[slide]

# String Functions

Let's examine the **String Functions** in MySQL.

We use String Functions to manipulate our character string effectively.

Take a look at this simple example of String Function:

## SUBSTRING()

The `SUBSTRING()` function allows us to extract part of a string.

We can use it this way:

``` java
SUBSTRING(String, Position) // Here we select our String and position from which we will take the substring
```

**Example:**

``` java
SELECT SUBSTRING('softuni.org',2);
```

**Output will be:**

```
oftuni.org
```

Second way of using our `SUBSTRING()` is:

``` java
SUBSTRING(String, Position, Length) // We take the index from where our result will start to index from where it will finish
```

**Example**:

``` java
SELECT SUBSTRING('softuni.org',1,3);
```

**Output will be:**

```
sof
```


We can use the `SUBSTRING()` method this way too:

``` java
SUBSTRING(String FROM Position FOR Length) // This way, we can choose from which position we want to 
                                           //  start taking the substring and for what lenght.
```

**Example:**

``` java
SELECT SUBSTRING('softuni.org' FROM 2 FOR 5);
```

**Output will be:**

```
ouftun
```

Now, let's try to solve a simple problem knowing this:



[/slide]

[slide hideTitle]

# Problem: Find Book Titles

We will need the resources from the link at the beginning of our lesson.

# Description

Write a SQL query to find **books which titles start with "The".** 

**Order the result by id.** 

Submit your query statements as Prepare DB & run queries. 

## Example:

| Title |
| --- |
| The Mysterious Affair at Styles |
| The Big Four |
| The Murder at the Vicarage |
| The Mystery of the Blue Train |
| The Ring |



[/slide]

[slide hideTitle]

# Solution: Find Book Titles

We will need the resources from the link at the beginning of our lesson.

# Description

Write a SQL query to find **books which titles start with "The".** 

**Order the result by id.** 

Submit your query statements as Prepare DB & run queries. 

## Example:

| Title |
| --- |
| The Mysterious Affair at Styles |
| The Big Four |
| The Murder at the Vicarage |
| The Mystery of the Blue Train |
| The Ring |


[/slide]

[slide]

# REPLACE Function

Now, let's take a look at the `REPLACE()` Function in MySQL:

`REPLACE()` Function allows us to replace all occurrences of a substring with a string.

It's important to know that this method performs a **case-sensitive** match.

The **Syntax** here we can use is:

``` java
REPLACE(String, Pattern, Replacement) // Where String is our field from the table.
                                      // Pattern is the String which we need to replace
                                      // Replacement is our replacement pattern                               
```

Take a look at this simple code:

``` java
SELECT REPLACE('aaa.softuni.org','a','w'); // This example will replace all "a" with "w"
```

**Output after executing will be:**

```
www.softuni.org
```

Using this method we can **replace whole words**:

``` java
SELECT REPLACE('We can replace the word blood with different symbol or words', 'blood', '*****') 
// Where we first have our text, second we write the word we need to replace, and the last we write the replacement symbol or character.
```

**Output will be:**

```
We can replace the word ***** with different symbol or words
```


[/slide]

[slide hideTitle]

# Problem: Replace Titles

We will need the resources from the link at the beginning of our lesson.

# Description

Write a SQL query to find books which titles **start with "The" and replace the substring with 3 asterisks.**

Retrieve data about the updated titles. **Order the result by id**. Submit your query statements as **Prepare DB & run queries**. 


## Example:

| Title |
| --- |
| *** Mysterious Affair at Styles |
| *** Big Four |
| *** Murder at the Vicarage |
| *** Mystery of the Blue Train |
| *** Ring |
| *** Alchemist |
| *** Fifth Mountain |
| *** Zahir |
| *** Dead Zone |
| *** Hobbit |
| *** Adventures of Tom Bombadil |




[/slide]

[slide hideTitle]

# Solution: Replace Titles

We will need the resources from the link at the beginning of our lesson.

# Description

Write a SQL query to find books which titles **start with "The" and replace the substring with 3 asterisks.**

Retrieve data about the updated titles. **Order the result by id**. Submit your query statements as **Prepare DB & run queries**. 


## Example:

| Title |
| --- |
| *** Mysterious Affair at Styles |
| *** Big Four |
| *** Murder at the Vicarage |
| *** Mystery of the Blue Train |
| *** Ring |
| *** Alchemist |
| *** Fifth Mountain |
| *** Zahir |
| *** Dead Zone |
| *** Hobbit |
| *** Adventures of Tom Bombadil |


[/slide]

[slide]

# LTRIM & RTRIM Functions

**LTRIM** and **RTRIM** functions removes the space characters of a string passed as argument.

We can use the function like this:

``` java
LTRIM(String)
RTRIM(String)
```

Let's take a look at this simple example:

``` java
SELECT LTRIM('    Softuni rocks!')
```

The Left Trim will trim the spaces left from "Softuni rocks!" and the **output** will be:

``` 
Softuni rocks!
```

The same principle is valid for the `RTRIM()`, but this time it will remove the trailing spaces right after the text.

``` java
SELECT RTRIM('Softuni rocks!'     )
```

Output:

```
Softuni rocks!
```

[/slide]

[slide]

# CHAR_LENGTH & LENGTH Functions

`CHAR_LENGTH()` will return the length of our string. 

We will understand this better with the following examples:

``` java
SELECT CHAR_LENGTH('Let us count the characters in this sentence');
// This will count the whitespaces too
```

**Output:**

```
44
```

The `LENGTH()` will return the **same result** from the input above:

So, what is the difference between them?

It's important to know that a **multi-byte character will counts as a single character**.

If our string c**ontains five two-bite characters**, our `CHAR_LENGTH()` function will return **5**, but our `LENGTH()` will return **10**.

We will picture this better with a very simple example:

``` java
SELECT LENGTH('§'); vs SELECT CHAR_LENGTH('§');
```

| **LENGTH('§')** | **CHAR_LENGTH('§')** | 
| --- | --- |
| 2 | 1 |

As we see here, the `LENGTH()` function will return the result of **2** and the `CHAR_LENGTH()` will return **1**.

[/slide]

[slide]

# LEFT & RIGHT Functions

`LEFT()` and `RIGHT()` Functions get characters from **beginning** or **end** of a string.

Let see the Syntax first:

``` java
LEFT(String, Count)
RIGHT(String, Count)
```

**Examples:**

``` java
SELECT LEFT('Testing Left Function', 5); // This syntax will return the first five characters from the left in our string.
```

**Output:**

```
Testi
```

Similarly, our `RIGHT()` function will return the first five characters from the right in our String:

``` java
SELECT RIGHT('Testing Left Function', 5);
```

**Output:**

```
ction
```


[/slide]