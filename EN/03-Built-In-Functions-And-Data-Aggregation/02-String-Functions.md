[slide hideTitle]

# String Functions

We use **string** functions to manipulate string characters effectively.

An example of a **string function** is `SUBSTRING()`.

## The SUBSTRING() Function

The `SUBSTRING()` function allows us to extract parts of a string.

``` java
SUBSTRING(String, Position)
```

Here, we select our **string**, and the **position** from which we permorm the substring operation.

**For example:**

``` java
SELECT SUBSTRING('softuni.org', 2);
```

**The corresponding output is:**

```
oftuni.org
```

### Using `SUBSTRING()` With A Length Parameter

The second way of using our `SUBSTRING()` is by passing in a length:

```java
SUBSTRING(String, Position, Length) 
```

We pass in the index at which our result will **start**, to the index at which it will **finish**.

**Example**:

``` java
SELECT SUBSTRING('softuni.org', 1, 3);
```

**Output**:

```
sof
```

### Using `SUBSTRING()` With `FROM` and `FOR`

We can use the `SUBSTRING()` method with `FROM` and `FOR` too:

``` java
SUBSTRING(String FROM Position FOR Length) 
```

This way, we can choose the position from which we want to **start** taking the substring, and for what **length**.

For instance, if we substring `softuni.org` from the **second position**, for a **length** of **five**:

``` java
SELECT SUBSTRING('softuni.org' FROM 2 FOR 5);
```

The **output** will be:

```
ouftun
```

[/slide]


[slide hideTitle]

# Problem with Solution: Find Book Titles - TODO: Add Tests

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/java-mysql/04.Built-In-Functions-And-Data-Aggregation-Lab.zip) **for this task.**

Create an SQL query to find **books, which titles start with "The".** 

**Order the result by id.** 

## Example:

| Title |
| --- |
| The Mysterious Affair at Styles |
| The Big Four |
| The Murder at the Vicarage |
| The Mystery of the Blue Train |
| The Ring |
| ..... |

[/slide]

[slide hideTitle]

# The REPLACE() Function

Now, let us take a look at the `REPLACE()` function in MySQL.

The `REPLACE()` function allows us to replace all occurrences of a substring with a string.

It is crucial to remember that this method performs on a **case-sensitive** match.

``` java
REPLACE(String, Pattern, Replacement) 
```

Here, the "**String**" parameter is our field from the table.

"**Pattern**" is the string which we need to replace.

And lastly, "**Replacement**" is the new string.

**Example:**

``` java
SELECT REPLACE('aaa.softuni.org','a','w'); # In this example, "a" will be replaced with "w"
```

**Output**

```
www.softuni.org
```

Using this method, we can **replace entire words**:

``` java
SELECT REPLACE('We can replace the word blood with a different symbol or word.', 'blood', '*****')
```

First, we have our **text**.

Then, we write the **word** we need to replace.

And finally, we pass in the **replacement** symbols or characters.

## The output is:

```
We can replace the word ***** with a different symbol or word.
```

[/slide]

[slide hideTitle]

# Problem with Solution: Replace Titles - TODO: Add Tests

Create an SQL query to find books, which titles **start with the word "The" and replace the word with 3 asterisks.**

Extract data about the updated titles.

**Order the result by the id column**.

[/slide]

[slide hideTitle]

# The LTRIM() & RTRIM() Functions

The **LTRIM()** and **RTRIM()** functions remove whitespace characters from a string, passed as an argument.

We can use the function as follows:

``` java
LTRIM(String)
RTRIM(String)
```

Let us take a look at this simple example:

``` java
SELECT LTRIM(' SoftUni rocks!')
```

The `LTRIM()` function will trim the spaces at the beginning of the string, before "SoftUni rocks!", and the **output** will be:

``` 
SoftUni rocks!
```

The same principle is valid for the `RTRIM()` function, but this time it will remove the trailing spaces at the end after the text:

``` java
SELECT RTRIM('SoftUni rocks! ')
```

**Output**:

```
SoftUni rocks!
```

[/slide]

[slide hideTitle]

# The CHAR_LENGTH() & LENGTH() Functions

## `CHAR_LENGTH()`

The `CHAR_LENGTH()` function will return the length of the provided string. 

``` java
SELECT CHAR_LENGTH('Let us count the characters in this sentence.');
```

Keep in mind that this will count the **whitespaces** too.

**Output**:

```
45
```

## `LENGTH()`

The `LENGTH()` function will return the **same result** from the input above.

It is important to know that when using `LENGTH()`, a **multi-byte character** will count as **multiple characters**.

If our string **contains five two-byte characters**, our `CHAR_LENGTH()` function will return **5**, but `LENGTH()` will return **10**.

For **example**, `§` is a **two-byte** character:

``` java
SELECT LENGTH('§');      # Returns 2
SELECT CHAR_LENGTH('§'); # Returns 1
```

As we see here, the `LENGTH()` function will return a result of **2**, while `CHAR_LENGTH()` - a result of **1**.

[/slide]

[slide hideTitle]

# The LEFT() & RIGHT() Functions

The `LEFT()` and `RIGHT()` functions return characters from the **beginning** or from the **end** of a string.

**Syntax**:

``` java
LEFT(String, Count)
RIGHT(String, Count)
```

**Example**:

``` java
SELECT LEFT('Testing Left Function', 4); 
```

The above syntax returns the **first four** characters from the left side of our string.

**Output**:

```
Test
```

Similarly, the `RIGHT()` function will return the first **N** characters on the right of the provided string.

**For example**:

``` java
SELECT RIGHT('Testing Left Function', 5);
```

**The output will be:**:

```
ction
```


[/slide]

[slide hideTitle]

# The LOWER() & UPPER() Functions

The `LOWER()` function converts all characters in the provided string to **lowercase** letters.

**Example**:

``` java
SELECT LOWER('MYSQL IS AWESOME');
```

**Output**:

```
mysql is awesome
```

Similarly, use the `UPPER()` function to convert all characters to **uppercase** letters.

**For example:**

``` java
SELECT UPPER('this is an uppercase string');
```

**Output:**

```
THIS IS AN UPPERCASE STRING
```

[/slide]

[slide hideTitle]

# The REVERSE() & REPEAT() Functions

The `REVERSE()` function allows us to reverse the order of all characters in the provided string.

**Example**:

``` java
SELECT REVERSE('softuni'); 
```

The code above will reverse the characters in the "**softuni**" string.

**Output**:

```
inutfos
```

The `REPEAT()` function allows us to repeat a string a specified number of times.

**Example**:

``` java
SELECT REPEAT('softuni ', 3); 
```

This will **repeat** "softuni ", followed by the whitespace after, exactly **3 times**.

**Output**:

```
softuni softuni softuni 
```
[/slide]

[slide hideTitle]

# The LOCATE() & INSERT() Functions

The `LOCATE()` function in MySQL lets us locate a specific pattern (substring) in our string.

The function performs a **case-insensitive** search.

**Syntax**:

``` java
LOCATE(Pattern, String, [Position])
```

The `[Position]` argument is **optional**. 

If **omitted**, it defaults to 1. 

The **first** position in our string is on index 1.

**Example**:

``` java
SELECT LOCATE('st','teststring');
```

**Result**:

```
3
```

The `INSERT()` function allows us to insert substring at a specific position.

**Syntax**:

``` java
INSERT(String, Position, Length, Substring) 
```

The **Length** parameter indicates the count of characters that will be deleted from the start of the given **Position**.

**Example**:

``` java
SELECT INSERT('SoftuniTestString', 2, 4, ' insert ');
```

**Output after executing:**

```
S insert niTestString
```
[/slide]

