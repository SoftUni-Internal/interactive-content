# Quantifiers and Grouping

[slide]
# Video

[vimeo-video startTimeInSeconds="4627" endTimeInSeconds="7353"]
[stream language="EN" videoId="421806246" default /]
[stream language="RO" videoId="435070128"  /]
[/video-vimeo]

[/slide]

[slide]
# Quantifiers 
**Quantifiers** specify **how many** instances of a **character**, **group**, or **character class** must be **present** in the input for a match to be found.

| **Notation** | **Meaning** |
| --- | --- |
|`*`|**Zero** or **more** occurrences|
|`+`|**One** or **more** occurrences|
|`?`|**Previous** element zero or one occurrences|
|`{}`|**Exactly** the specified number of occurrences|

- `*` - matches the previous element zero or more times
[image assetsSrc="regex-example(13).png" /]
- `+` - matches the previous element one or more times
[image assetsSrc="regex-example(14).png" /]
- `?` - matches the previous element zero or one time
[image assetsSrc="regex-example(15).png" /]
- `{3}` - matches the previous element exactly 3 times
[image assetsSrc="regex-example(16).png" /]

[/slide]

[slide]

# Grouping

We can split regex into **groups** and we can use these groups to **extract information** about **part of the match**.

- `subexpression` - captures the matched subexpression as numbered group
[image assetsSrc="regex-example(17).png" /]
In the example above there is only one group - the green highlighted text.

- `?:subexpression` - defines a non-capturing group
[image assetsSrc="regex-example(18).png" /]
The green highlighted text is a non-capture group.

- `?<name>subexpression` - defines a named capturing group
[image assetsSrc="regex-example(19).png" /]
In the example above **day**, **month**, **year** are the group's names.

[/slide]

[slide]
# Problem: Match All Words

Write a **regular expression** at [www.regex101.com](www.regex101.com) which **extracts all word** char sequences **from a given text**.

[image assetsSrc="regex-example(25).png" /]

[/slide]
[slide]
# Solution: Match All Words
Use an online regex tester like [https://regex101.com/](https://regex101.com/)
[image assetsSrc="regex-solution(1).png" /] 


- `[A-Za-z_]+` - matches any characters between `a-z` or `A-Z` or `_` one or more times. 

[/slide]
[slide]
# Problem: Match Dates

Write a **regular expression** that **extracts dates from text**.

- Valid date format: `dd-MMM-yyyy`
- Examples: `12-Jun-1999`, `3-Nov-1999`

[image assetsSrc="regex-example(26).png" /]

[/slide]
[slide]
# Solution: Match Dates
Use an online regex tester like [https://regex101.com/](https://regex101.com/)
[image assetsSrc="regex-solution(2).png" /] 
- `\d?`- matches a digit(0-9) zero or one times
- `\d` - matches one digit(0-9)
- `-` - matches the character literally 
- `[A-Za-z]{3}` - matches capital or small letters exactly 3 times
- `-` - matches the character literally
- `\d{4}` - matches exactly 4 digits(0-9)

[/slide]

[slide]
# Problem: Email Validation

Write a regular expression that performs simple **email validation**
- An email consists of: **username**, **@**, **domain name**
- **Usernames** are **alphanumeric**
- **Domain names** consist of **two strings**, separated by a **period**
- **Domain names** may contain only **English letters**

[image assetsSrc="regex-example(27).png" /]

[/slide]
[slide]
# Solution: Email Validation
Use an online regex tester like [https://regex101.com/](https://regex101.com/)
[image assetsSrc="regex-solution(3).png" /] 
- `^` - asserts position at start of a line
- `\w+` - matches any word character (equal to `[a-zA-Z0-9_]`) one or more times
- `@` - matches the character `@` literally
- `[A-Za-z]+` - matches any characters between `a-z` or `A-Z` one or more times 
- `\.` - matches the character `.` literally
- `[A-Za-z]+` - matches any characters between `a-z` or `A-Z` one or more times
- `$` - asserts position at the end of a line

[/slide]