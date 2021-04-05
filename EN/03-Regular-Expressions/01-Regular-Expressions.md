# Regular Expressions

[slide hideTitle]
# What Regular Expressions Are

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/04.Java-Fundamentals-Regular-Expressions/EN/04.Java-Fundamentals-Regular-Expressions-3-4-What-are-regular-expressions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Regex** stands for **regular expression**.

We use **regular expressions** to define **search patterns** for **strings**.
 
The search pattern can be anything: a **simple character**, a **fixed string**, or a complex expression containing special characters describing the pattern.

Patterns can be defined by using a special syntax:

- `[0-9]+` - Matches a non-empty sequence of digits

- `[A-Z][a-z]*` - Matches a capital letter and zero or more small letters

 
You can **practice** creating custom regular expressions at:

- [https://regexr.com](regexr.com)

- [https://regex101.com](regex101.com)

[/slide]

[slide hideTitle]

# Regular Expression Patterns - Example

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/04.Java-Fundamentals-Regular-Expressions/EN/04.Java-Fundamentals-Regular-Expressions-6-Regular-expressions-pattern-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]

[slide hideTitle]

# Character Classes: Ranges

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/04.Java-Fundamentals-Regular-Expressions/EN/04.Java-Fundamentals-Regular-Expressions-7-Character-classes-ranges-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In the **context of regular expressions**, a character class is a **set of characters enclosed within square brackets**. 

It specifies the potential **characters** that will **successfully match** a **single character** from a given **input string**.

- **Simple Class** - A set of characters side-by-side within square brackets:

[image assetsSrc="regex-example(2).png" /]

In the example above, the class `[abc]` matches any character that is either `a`, `b`, or `c`.

- **Negation** - The `^` metacharacter at the beginning of the character class matches all characters except the listed ones
  - `[^abc]` - matches any character that is **different from** `a`, `b`, or `c`

[image assetsSrc="regex-example(3).png" /]

- **Ranges** - Insert a `-` between the first and last character to set a range
  - `[0-9]` - character **range** that matches any digit from **0** to **9**

[image assetsSrc="regex-example(4).png" /]
[/slide]

[slide hideTitle]

# Predefined Classes

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/04.Java-Fundamentals-Regular-Expressions/EN/04.Java-Fundamentals-Regular-Expressions-8-Predefined-classes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

| **Notation** | **Meaning (Returns a match where…)** |
| --- | --- |
|`\w`|matches any **word** characters from `a` to `Z`, digits from `0-9`, and the underscore `_` character|
|`\W`|matches any **non-word** character (the opposite of `\w`|
|`\s`|matches any **white-space** character|
|`\S`|matches any **non-white-space**  character (the opposite of `\s`)|
|`\d`|matches any **digit** \[0-9\]|
|`\D`|matches any **non-digit** (the opposite of `\d`)|



- `\w` - Matches any word character \[a-z, A-Z, 0-9, _\]

[image assetsSrc="regex-example(5).png" /]

- `\W` - Matches any **non-word** character (the opposite of `\w`)

[image assetsSrc="regex-example(6).png" /]

- `\s` - Matches any **white-space** character

[image assetsSrc="regex-example(7).png" /]

- `\S` - Matches any **non-white-space**  character (the opposite of `\s`)

[image assetsSrc="regex-example(8).png" /]

- `\d` - Matches any **digit** \[0-9\]

[image assetsSrc="regex-example(9).png" /]

- `\D` - Matches any **non-digit** character

[image assetsSrc="regex-example(10).png" /]


[/slide]

[slide hideTitle]

# Metacharacters

## Character Escapes

- `\` -  Escapes special characters to suppress their special meaning

[image assetsSrc="regex-example(11).png" /]

## Anchors

- `^` - Finds regex that must match at the beginning of the line.

- `$` - Finds regex that must match at the end of the line.

[image assetsSrc="regex-example(12).png" /]

The example above matches the **entire string** that has a length between **6** and **12** characters.

[/slide]

