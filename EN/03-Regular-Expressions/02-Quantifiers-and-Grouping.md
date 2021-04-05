# Quantifiers and Grouping

[slide hideTitle]

# Quantifiers

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/04.Java-Fundamentals-Regular-Expressions/EN/04.Java-Fundamentals-Regular-Expressions-9-10-Quantifiers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Quantifiers** allow users to specify the number of occurrences to match against. 

| **Notation** | **Meaning** |
| --- | --- |
|`*`|**Zero** or **more** occurrences|
|`+`|**One** or **more** occurrences|
|`?`|Occurs **zero** or **one** time, shorter for {0,1}|
|`{}`|**Exactly** the specified number of occurrences|

- `*` - Matches the element before it zero or more times

[image assetsSrc="regex-example(13).png" /]

- `+` - Matches the element before it one or more times

[image assetsSrc="regex-example(14).png" /]

- `?` - Matches the element before it zero or one time

[image assetsSrc="regex-example(15).png" /]

- `{3}` - Matches the element before it exactly 3 times

[image assetsSrc="regex-example(16).png" /]

[/slide]

[slide hideTitle]

# Grouping Constructs

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/04.Java-Fundamentals-Regular-Expressions/EN/04.Java-Fundamentals-Regular-Expressions-11-Grouping-Expressions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We can split a regular expression into **groups** and we can use these groups to **extract information** about **part of the match**.

- `subexpression` - Captures the matched subexpression as numbered group

[image assetsSrc="regex-example(17).png" /]

In the example above, there is only one group - the green highlighted text.

- `?:subexpression` - Defines a non-capturing group

[image assetsSrc="regex-example(18).png" /]

In the example above, the green highlighted text represents a non-capturing group.

- `?<name>subexpression` - Defines a named capturing group

[image assetsSrc="regex-example(19).png" /]

In the example above, the group's names are: **day**, **month**, and **year**.

[/slide]

[slide hideTitle]
# Problem with Solution: Match All Words

Create a **regular expression** that will **extract all words from a given text**, by using the following website: [www.regex101.com](www.regex101.com)

[image assetsSrc="regex-example(25).png" /]

You can use the following text to test your regular expression:

```
_|The|great|outdoors|holds|~many|secrets
```

[/slide]

[slide hideTitle]
# Problem with Solution: Match Dates

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/04.Java-Fundamentals-Regular-Expressions/EN/04.Java-Fundamentals-Regular-Expressions-24-Problem-and-Soluttion-Match-Dates-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Create a **regular expression** that will **extract all valid dates from a given text**.

- Valid date format: `dd-MMM-yyyy`
- Examples: `12-Jun-1999`, `3-Nov-1999`

[image assetsSrc="regex-example(26).png" /]

You can use the following text to test your regular expression:

```
1-Jan-1989 is considered the official birthday of the Internet.
I was not aware that my socks have been missing since 23-Sep-2005.
```

[/slide]

[slide hideTitle]
# Problem with Solution: Email Validation

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Object-And-Classes/04.Java-Fundamentals-Regular-Expressions/EN/04.Java-Fundamentals-Regular-Expressions-13-Probelm-and-solution-email-validation-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

 Create a regular expression that performs simple **email validation**

- An email consists of: a **username**, **@**, and a **domain name**

- All **usernames** are **alphanumeric**

- The **Domain names** consist of **two strings**, separated by a **dot**

- The **Domain names** may contain only **English letters**

[image assetsSrc="regex-example(27).png" /]

You can use the following text to test your regular expression:

```
johndoe@gmail.com
my*name*is*@who.com
```

[/slide]
