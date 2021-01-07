# Regular Expressions

[slide]
# What Are Regular Expressions?

[vimeo-video]
[stream language="EN" videoId="489818611/b94191c1c8" default /]
[stream language="RO" videoId="489818611/b94191c1c8"  /]
[/video-vimeo]

"Regular expressions" are patterns used to match character combinations in strings.

They offer a concise syntax to carry out complex tasks that otherwise would require lengthy code.

"JavaScript" provides the built-in "RegExp" type that allows you to work with regular expressions effectively.

To test our regular expressions we can use the following site:

[Regex101](www.regex101.com)

[/slide]

[slide]
# Regular Expression Pattern

[vimeo-video]
[stream language="EN" videoId="489818685/4416e06b0f" default /]
[stream language="RO" videoId="489818685/4416e06b0f"  /]
[/video-vimeo]

When working with regular expressions we use paterns to extract only the data we need.

Example of a patern that matches non-empty sequence of digits:

`[0-9]+`

Example of a patern that matches a capital letter, followed by small letters:

`[A-Z][a-z]*`

Example of a patern that matches a name:

`[A-Z][a-z]+ [A-Z][a-z]+` matches "John Smith".

[/slide]

[slide]
# Character Classes: Ranges


[vimeo-video]
[stream language="EN" videoId="489818738/683c3c4047" default /]
[stream language="RO" videoId="489818738/683c3c4047"  /]
[/video-vimeo]

Use square brackets:

`[nvj]+` matches any character that is either **n**, **v** or **j**.

Example:

**n**ode.**j**s **v**0.12.2

Use the **caret** sign `^` to exclude from the search as in the example below.

`[^abc]` matches any character that is not **a**, **b** or **c**.

Example:

**A**b**r**a**h**a**m** matches only "Arhm".

`[0-9]` character range: matches any digit from 0 to 9.

Example:

John is **8** years old.

[/slide]

[slide]
# Predefined Classes


[vimeo-video]
[stream language="EN" videoId="489818761/ed44d0ae3b" default /]
[stream language="RO" videoId="489818761/ed44d0ae3b"  /]
[/video-vimeo]

In regex, we also have several character classes that provide us with a shorthand notation for commonly used sets of characters.

| **Shorthand Class** | **Meaning** | **Character Class** |
| --- | --- | --- |
| \w | Matches any word character | \[a\-z\, A\-Z\, 0\-9\, \_\] |
| \W | Matches any non\-word character | \[\^w\] |
| \s | Matches any white\-space character | \[\\t\\r\\n\\f\\] |
| \S | Matches any non\-white\-space character | \[\^s\] |
| \d | Matches any decimal digit | \[0\-9\] |
| \D | Matches any non-decimal character | \[\^d\] |

If you want to read more about regular expressins: [Regular Expressions](https://www.regular-expressions.info/)

[/slide]

[slide]
# Regex101: Demo

[vimeo-video]
[stream language="EN" videoId="489818656/8342484c8d" default /]
[stream language="RO" videoId="489818656/8342484c8d"  /]
[/video-vimeo]

[/slide]