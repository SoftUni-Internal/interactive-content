# Quantifiers and Grouping

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

- **subexpression** - captures the matched subexpression as numbered group
[image assetsSrc="regex-example(17).png" /]
In the example above there is only one group - the marked text in green.

[/slide]