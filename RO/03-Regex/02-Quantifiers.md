# Quantifiers

[slide]
# Quantifiers
[vimeo-video]
[stream language="EN" videoId="489818790/4ce49729f2" default /]
[stream language="RO" videoId="489818790/4ce49729f2"  /]
[/video-vimeo]

Quantifiers indicate numbers of characters or expressions to match.

For the examples below we will need a **string** a **pattern** and the `.match()` method.

The pattern looks like this: `/regularExpression/g`

The g modifier is used to perform a global match (find all matches rather than stopping after the first match).

Sometimes we will need the global flag, sometimes we will not.

Let's have a look at the examples:

`*` matches the preceding element zero or more times.

Example: `Hellooo World! Hello Again!`

`lo*` will match "l", "looo", "l", "l", "lo".

```js live
    var str = "Hellooo World! Hello Again!";
    var pattern = /lo*/g;
    var result = str.match(pattern);
    console.log(result);
```

`+` matches the preceding element one or more times.

Example: `Hellooo World! Hello Again!`

`o+` will match "ooo", "o", "o".

```js live
    var str = "Hellooo World! Hello Again!";
    var pattern = /o+/g;
    var result = str.match(pattern);
    console.log(result);
```

`?` matches the preceding element zero or one time.

Example: `1, 100 or 1000`

`10?` matches "1", "10" and "10" as a result.

```js live
    var str = "1, 100 or 1000";
    var pattern = /10?/g;
    var result = str.match(pattern);
    console.log(result);
```

`{4}` matches the preceding element exactly 4 times.

Example: `1000, 10000 or 100000`

`\d{4}` matches "1000", "1000", "1000" as a result.

```js live
    var str = "1000, 10000 or 100000";
    var pattern = /\d{4}/g;
    var result = str.match(pattern);
    console.log(result);
```
[/slide]
[slide]
# Grouping Constructs

[vimeo-video]
[stream language="EN" videoId="489818792/d2321e70c6" default /]
[stream language="RO" videoId="489818792/d2321e70c6"  /]
[/video-vimeo]

A part of a pattern can be enclosed in parentheses (...). 

This is called a "capturing group".

That has two effects:

- It allows to get a part of the match as a separate item in the result array.
- If we put a quantifier after the parentheses, it applies to the parentheses as a whole.

In the following example, we will search for the expression "go".

```js live
    const str = "Here we go now";
    var pattern = /(go)/g;
    var result = str.match(pattern);
    console.log(result);
```

We can also use quantifiers after the parentheses!

```js live
    const str = "Here we gogo now";
    var pattern = /(go)+/g;
    var result = str.match(pattern);
    console.log(result);
```

Use this expression for **named capturing group** `(?<name>subexpression)`.

The `.exec()` method tests for a match in a string.

This method returns the matched text if it finds a match, otherwise it returns null.

```js live
    const str = "My telephone number is 0884608975";
    var pattern = /(?<number>\d+)/g;
    var match = pattern.exec(str);
    console.log(match.groups.number);
```

If there are multiple matches, we can iterate over them.

```js live
    const str = "My telephone number is 0884608975 and yours is 0887468956";
    var pattern = /(?<number>\d+)/g;
    var match = pattern.exec(str);
    while (match != null) {
    console.log(match.groups.number);
    match = pattern.exec(str);
    }
```

Use this expression for **non-capturing groups** `(?:subexpression)`.

We can use `(?:subexpression)` not to capture groups and drop them from the result.

When we are dealing with complex regular expressions, this can be very helpful.

The pipe symbol `|` in the example means logical "or".

```js live
    const regex = /(?:Jane|John|Alison)\s(.*?)\s(?:Smith|Smuth)/;
    const result = regex.exec('Jane Isabell Smith');
    console.log(result[0]);
    console.log(result[1]);
```
[/slide]
[slide]
# Backreferences


[vimeo-video]
[stream language="EN" videoId="489818270/3eedc1f66f" default /]
[stream language="RO" videoId="489818270/3eedc1f66f"  /]
[/video-vimeo]

A group can be referenced in the pattern, using \N, where N is the group number.

To make clear why that is helpful, let's consider a task, which is to extract a sentence, surrounded by #.

The first group in the pattern is `(\#)` and it wil match the first `#`. 

After that, we match capital letters, small letters and spaces with `[A-Z,a-z\s]+`

To match the second `#`, which is after the word "there" use \1, where the number 1 is the number of the group.


```js live
    const str = `The day #he said I will be there# he made a promise`;
    const pattern = /(\#)[A-Za-z\s]+\1/;
    const result = str.match(pattern);
    console.log(result[0]);
```

[/slide]

[slide]
# Problem: Match Dates

[vimeo-video]
[stream language="EN" videoId="489818844/8c5a03bb11" default /]
[stream language="RO" videoId="489818844/8c5a03bb11"  /]
[/video-vimeo]

Write a regular expression that extracts dates from a text
Valid date format: `dd-MMM-yyyy`
Examples: `12-Jun-1999, 3-Nov-1999`

Example: 

I am born on `30-Dec-1994`.
My father is born on the `30-Dec-1994`.
**01-July-2000** is not a valid date.

- Valid dates format: `30-Dec-1994` and `30-Dec-1994`

- Invalid date format: **01-July-2000**

[/slide]

[slide]
# Solution: Match Dates
[vimeo-video]
[stream language="EN" videoId="489818853/c94449ec19" default /]
[stream language="RO" videoId="489818853/c94449ec19"  /]
[/video-vimeo]

[/slide]

[slide]
# Problem: Email Validation

[vimeo-video]
[stream language="EN" videoId="489818897/c7b03af810" default /]
[stream language="RO" videoId="489818897/c7b03af810"  /]
[/video-vimeo]

Write a regular expression that performs simple **email validation.**

An email consists of: username `@` domain name.

- **Usernames** are **alphanumeric**

- **Domain name** consist of **two strings**, separated by a period \(`.`\)

- **Domain name** may contain only **English letters**

- Valid email: `valid123@email.com`

- Invalid email: `invalid*name@emai1.com`

[/slide]

[slide]
# Solution: Email Validation

[vimeo-video]
[stream language="EN" videoId="489818221/f14aeb2a1e" default /]
[stream language="RO" videoId="489818221/f14aeb2a1e"  /]
[/video-vimeo]

[/slide]