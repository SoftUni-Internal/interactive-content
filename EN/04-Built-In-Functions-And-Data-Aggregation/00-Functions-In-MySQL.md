[slide]

# Functions in MySQL

*U can download the resources needed for this lesson from here: [Mega.nz](https://mega.nz/file/mUghgSyJ#LvZ-9YTr0Xd9d_9SBuM-4ugbU_eWZdAtixcFb854nAU)*

Today, we will talk about `Functions` in MySQL.

With MySQL we can do much more than simply store or retrieve data information.

Knowing this, we can **manipulate** the data we have.

We can say, that MySQL functions are small pieces of code. Using them we perform some **operations** and return the result from them.

Let's review the **built-in functions** provided in MySQL:

- String functions

- Aggregate Functions

- Date Functions

- Math Functions

Besides this, we have more **built-in functions**, but for the purposes of this lesson, let's take a look at the functions above:



[/slide]

[slide]

# String Functions

Let's examine the **String Functions** in MySQL.

We use String Functions to manipulate our character string effectively.

Take a look at this simple example of String Function:

## SUBSTRING()

The `SUBSTRING()` function allows us to extract part of a string.

We can use it this way:

``` java
SUBSTRING(String, Position) // here we select our String and position from which we will take the substring
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
SUBSTRING(String, Position, Length) // we take the index from where our result will start to index from where it will finish
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
SUBSTRING(String FROM Position FOR Length) // This way, we can choose from which position we want to start taking the substring and for what lenght.
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

[/slide]