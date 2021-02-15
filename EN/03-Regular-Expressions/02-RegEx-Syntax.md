[slide hideTitle]

# Character Classes

In the **context of regular expressions**, a character class is a **set of characters enclosed within square brackets**. 

It specifies the **characters** that will **successfully match** a **single character** from a given **input string**.

- **Simple Class** - A set of characters side-by-side within square brackets:

[image assetsSrc="regex-example(2).png" /]

In the example above, the class `[abc]` matches any character that is either **a**, **b**, or **c**.

- **Negation** - The `^` metacharacter at the beginning of the character class matches all characters except the listed
  - `[^abc]` - matches any character that is **not** **a**,**b** or **c**

[image assetsSrc="regex-example(3).png" /]

- **Ranges** - Insert a `-` between the first and last character to set the range
  - `[0-9]` - character **range** matches any digit from 0 to 9

[image assetsSrc="regex-example(4).png" /]
[/slide]

[slide hideTitle]

# Predefined Classes

| **Notation** | **Meaning (Returns a match where…)** |
| --- | --- |
|`\w`|matches any **word** characters from `a` to `Z`, digits from `0-9`, and the underscore `_` character|
|`\W`|matches any **non-word** character (the opposite of \w)|
|`\s`|matches any **white-space** character|
|`\S`|matches any **non-white-space**  character (opposite of \s)|
|`\d`|matches any **decimal digit** (0-9)|
|`\D`|matches any **non-decimal character** (the opposite of \d)|



- `\w` - Matches any word character \[a-z, A-Z, 0-9, _\]

[image assetsSrc="regex-example(5).png" /]

- `\W` - Matches any **non-word** character (the opposite of \w)

[image assetsSrc="regex-example(6).png" /]

- `\s` - Matches any **white-space** character

[image assetsSrc="regex-example(7).png" /]

- `\S` - Matches any **non-white-space**  character (opposite of \s)

[image assetsSrc="regex-example(8).png" /]

- `\d` - Matches any **decimal digit** \[0-9\]

[image assetsSrc="regex-example(9).png" /]

- `\D` - Matches any **non-decimal** character

[image assetsSrc="regex-example(10).png" /]


[/slide]

[slide hideTitle]

# Metacharacters

## Character Escapes

- `\` -  Escapes special characters to suppress their special meaning

[image assetsSrc="regex-example(11).png" /]

## Anchors

- `^` - the match must start at the beginning of the string or line

- `$` - the match must occur at the end of the string or before next line

[image assetsSrc="regex-example(12).png" /]

The example above matches the **entire string** with a length between **6** and **12** characters.

[/slide]