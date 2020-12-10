# Regular Expressions

[slide]

# What Are Regular Expressions?

Regular expressions are a way to describe patterns in string data.

They offer a concise syntax to carry out complex tasks that otherwise would require lengthy code.

JavaScript provides the built-in **RegExp** type that allows you to work with regular expressions effectively.

To be able to test your regular expressions use the following site:

www.regex101.com

When working with regular expressions we use paterns, and we use them to extract only the data we need.

Example of a patern which matches non-empty sequence of digits:

- `[0-9]+`

Example of a patern which matches a capital letter followed by small letters:

- `[A-Z][a-z]*`

Example of a patern which matches a name:

- `[A-Z][a-z]+ [A-Z][a-z]+` matches "John Smith".

## Character Classes: Ranges

Use square brackets:

- `[nvj]+` matches any character that is either **n**, **v** or **j**.

Example:

- **n**ode.**j**s **v**0.12.2

Use the **caret** sign `^` to exclude from the search as in the example below.

- `[^abc]` matches any character that is not **a**, **b** or **c**.

Example:

- **A**b**r**a**h**a**m** matches only "Arhm".

- `[0-9]` character range: matches any digit from 0 to 9.

Example:

- John is **8** years old.

## Predefined Classes

In regex, you also have a number of predefined character classes that provide you with a shorthand notation for commonly used sets of characters.

| **Shorthand Class** | **Meaning** | **Character Class** |
| --- | --- | --- |
| \w | Matches any word character | \[a\-z\, A\-Z\, 0\-9\, \_\] |
| \W | Matches any non\-word character | \[\^w\] |
| \s | Matches any white\-space character | \[\\t\\r\\n\\f\\] |
| \S | Matches any non\-white\-space character | \[\^s\] |
| \d | Matches any decimal digit | \[0\-9\] |
| \D | Matches any non-decimal character | \[\^d\] |

If you want to read more about regular expressins: https://www.regular-expressions.info/

[/slide]
