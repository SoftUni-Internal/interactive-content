# Regular Expressions

[slide hideTitle]
# What Are Regular Expressions?

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/EN/04.JS-Fundamentals-Regular-Expressions-3-4-What-are-regular-expressions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Regular expressions** are patterns used to match character combinations in strings.

They offer a concise syntax to carry out complex tasks that otherwise would require lengthy code.

JavaScript provides the built-in `RegExp` type that allows you to work with regular expressions effectively.

To test our regular expressions, we can use [Regex101](www.regex101.com).

[/slide]

[slide hideTitle]
# Regular Expression Pattern

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/EN/04.JS-Fundamentals-Regular-Expressions-6-Regular-expressions-pattern-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

When working with regular expressions, we use patterns to extract only the data we need:

- Example of a pattern that matches a non-empty sequence of digits

`[0-9]+`

- Example of a pattern that matches a capital letter, followed by small letters

`[A-Z][a-z]*`

- Example of a pattern that matches a name

`[A-Z][a-z]+ [A-Z][a-z]+` - matches "John Smith".

[/slide]

[slide hideTitle]
# Character Classes: Ranges

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/EN/04.JS-Fundamentals-Regular-Expressions-7-Character-classes-ranges-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Use square bracket notation to match specific characters:

- `[nvj]+` - matches any character that is either **n**, **v** or **j**.

**Example:** 

"**n**ode.**j**s **v**0.12.2" matches "njv"

- Use the **caret** sign `^` to exclude from the search as in the example below:

`[^abc]` - matches any character that is not **a**, **b** or **c**-

**Example:**

"**A**b**r**a**h**a**m**" matches only "Arhm".

- `[0-9]` - character range: matches any digit from 0 to 9

**Example:**

John is **8** years old.

[/slide]

[slide hideTitle]
# Predefined Classes

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/EN/04.JS-Fundamentals-Regular-Expressions-8-Predefined-classes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In regular expressions, we also have several character classes that provide us with a shorthand notation for commonly used sets of characters.

| **Shorthand Class** | **Meaning** | **Character Class** |
| --- | --- | --- |
| \w | Matches any word character | \[a\-z\, A\-Z\, 0\-9\, \_\] |
| \W | Matches any non\-word character | \[\^w\] |
| \s | Matches any white\-space character | \[\\t\\r\\n\\f\\] |
| \S | Matches any non\-white\-space character | \[\^s\] |
| \d | Matches any decimal digit | \[0\-9\] |
| \D | Matches any non-decimal character | \[\^d\] |

You can read more about regular expressions [here](https://www.regular-expressions.info/).

[/slide]

[slide hideTitle]
# Regex101: Demo

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/EN/04.JS-Fundamentals-Regular-Expressions-5-Regex101-Demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]
