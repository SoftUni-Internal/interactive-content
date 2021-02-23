# Quantifiers and Grouping

[slide hideTitle]

# Quantifiers

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/04.Java-Fundamentals-Regular-Expressions/EN/04.Java-Fundamentals-Regular-Expressions-9-10-Quantifiers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Quantifiers** specify **how many** instances of a **character**, **group**, or **character class** must be **present** in the input for a match to be found.

| **Notation** | **Meaning** |
| --- | --- |
|`*`|**Zero** or **more** occurrences|
|`+`|**One** or **more** occurrences|
|`?`|**Previous** element zero or one occurrences|
|`{}`|**Exactly** the specified number of occurrences|

- `*` - Matches the previous element zero or more times

[image assetsSrc="regex-example(13).png" /]

- `+` - Matches the previous element one or more times

[image assetsSrc="regex-example(14).png" /]

- `?` - Matches the previous element zero or one time

[image assetsSrc="regex-example(15).png" /]

- `{3}` - Matches the previous element exactly 3 times

[image assetsSrc="regex-example(16).png" /]

[/slide]

[slide hideTitle]

# Grouping Constructs

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/04.Java-Fundamentals-Regular-Expressions/EN/04.Java-Fundamentals-Regular-Expressions-11-Grouping-Expressions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We can split regex into **groups** and we can use these groups to **extract information** about **part of the match**.

- `subexpression` - Captures the matched subexpression as numbered group

[image assetsSrc="regex-example(17).png" /]

In the example above there is only one group - the green highlighted text.

- `?:subexpression` - Defines a non-capturing group

[image assetsSrc="regex-example(18).png" /]

The green highlighted text is a non-capture group.

- `?<name>subexpression` - Defines a named capturing group

[image assetsSrc="regex-example(19).png" /]

In the example above **day**, **month**, **year** are the group's names.

[/slide]

[slide hideTitle]
# Problem with Solution: Match All Words

Write a **regular expression** at [www.regex101.com](www.regex101.com) which **extracts all word** char sequences **from a given text**.

[image assetsSrc="regex-example(25).png" /]

[/slide]

[slide hideTitle]
# Problem with Solution: Match Dates

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/04.Java-Fundamentals-Regular-Expressions/EN/04.Java-Fundamentals-Regular-Expressions-24-Problem-and-Soluttion-Match-Dates-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Write a **regular expression** that **extracts dates from text**.

- Valid date format: `dd-MMM-yyyy`
- Examples: `12-Jun-1999`, `3-Nov-1999`

[image assetsSrc="regex-example(26).png" /]

[/slide]

[slide hideTitle]
# Problem with Solution: Email Validation

Write a regular expression that performs simple **email validation**
- An email consists of: **username**, **@**, **domain name**
- **Usernames** are **alphanumeric**
- **Domain names** consist of **two strings**, separated by a **period**
- **Domain names** may contain only **English letters**

[image assetsSrc="regex-example(27).png" /]

[/slide]
