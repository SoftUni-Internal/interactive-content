# Quantifiers

[slide hideTitle]
# Quantifiers
[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/EN/04.JS-Fundamentals-Regular-Expressions-9-10-Quantifiers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Quantifiers** indicate the number of characters or expressions to match.

For the examples below, we will need a **string**, a **pattern**, and the `.match()` method.

The pattern looks like this: `/regularExpression/g`

The `g` modifier is used to perform a global match (find all matches rather than stopping after the first match).

The global flag is useful when we want to get all m

Let us have a look at the examples:

`*` matches the preceding element zero or more times.

**Example:** `Hellooo World! Hello Again!`

`lo*` will match "l", "looo", "l", "l", and "lo".

```js live
let str = 'Hellooo World! Hello Again!';
let pattern = /lo*/g;
let result = str.match(pattern);
console.log(result);
```

`+` matches the preceding element one or more times.

**Example:** `Hellooo World! Hello Again!`

`o+` will match "ooo", "o", and "o".

```js live
let str = 'Hellooo World! Hello Again!';
let pattern = /o+/g;
let result = str.match(pattern);
console.log(result);
```

`?` matches the preceding element zero or one time.

**Example:** `1, 100 or 1000`

`10?` matches "1", "10" and "10" as a result.

```js live
let str = "1, 100 or 1000";
let pattern = /10?/g;
let result = str.match(pattern);
console.log(result);
```

`{4}` matches the preceding element exactly 4 times.

**Example:** `1000, 10000 or 100000`

`\d{4}` matches "1000", "1000", and "1000" as a result.

```js live
let str = "1000, 10000 or 100000";
let pattern = /\d{4}/g;
let result = str.match(pattern);
console.log(result);
```
[/slide]

[slide hideTitle]
# Grouping Constructs

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/EN/04.JS-Fundamentals-Regular-Expressions-11-Grouping-Expressions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A part of a pattern can be enclosed in parentheses (...). 

That is called a **capturing group**.

This has two effects:

- It allows getting a part of the match as a separate item in the result array
- If we put a quantifier after the parentheses, it applies to the parentheses as a whole

In the following example, we will search for the expression "go".

```js live
let str = "Here we go now";
let pattern = /(go)/g;
let result = str.match(pattern);
console.log(result);
```

We can also use quantifiers after the parentheses.

```js live
let str = "Here we gogo now";
let pattern = /(go)+/g;
let result = str.match(pattern);
console.log(result);
```

Use this expression for a **named capturing group**: `(?<name>subexpression)`.

The `.exec()` method tests for a match in a string.

This method returns the matched text if it finds a match, otherwise, it returns null.

```js live
let str = "My telephone number is 0884608975";
let pattern = /(?<number>\d+)/g;
let match = pattern.exec(str);
console.log(match.groups.number);
```

If there are multiple matches, we can iterate over them.

```js live
let str = "My telephone number is 0884608975 and yours is 0887468956";
let pattern = /(?<number>\d+)/g;
let match = pattern.exec(str);
while (match != null) {
console.log(match.groups.number);
match = pattern.exec(str);
}
```

Use this expression for **non-capturing groups**: `(?:subexpression)`.

We can use `(?:subexpression)` to not capture groups and drop them from the result.

When we are dealing with complex regular expressions, this can be very helpful.

The pipe symbol `|` in the example means logical "or".

```js live
let regex = /(?:Jane|John|Alison)\s(.*?)\s(?:Smith|Smuth)/;
let result = regex.exec('Jane Isabell Smith');
console.log(result[0]);
console.log(result[1]);
```
[/slide]


[slide hideTitle]
# Backreferences

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/EN/04.JS-Fundamentals-Regular-Expressions-14-15-Backreferences-Match-Previous-Groups-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

A group can be referenced in the pattern, using `\N`, where N is the group number.

To make it clear why that is helpful, let us consider a task, such as extracting a sentence, surrounded by `#`.

The first group in the pattern is `(\#)` and it will match the first `#`. 

After that, we match capital letters, small letters, and spaces with `[A-Z,a-z\s]+`.

To match the second `#` which is after the word "there", use `\1`, where **1** is the number of the group.


```js live
let str = `The day #he said I will be there# he made a promise`;
let pattern = /(\#)[A-Za-z\s]+\1/;
let result = str.match(pattern);
console.log(result[0]);
```

[/slide]

[slide hideTitle]
# Problem with Solution: Match Dates

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/EN/04.JS-Fundamentals-Regular-Expressions-12S-Solution-Match-Dates-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Write a regular expression that extracts dates from a text.

Valid date format: "**dd-MMM-yyyy**".

**Examples:** **12-Jun-1999**, **3-Nov-1999**

I am born on **30-Dec-1994**.

My father is born on the **30-Dec-1994**.

**01-July-2000** is not a valid date.

- Valid dates format: **30-Dec-1994** and **30-Dec-1994**

- Invalid date format: **01-July-2000**

## Input

- The input will come as a string of multiple dates

## Output

- Print each **valid** date in the format **Day: DD, Month: MMM, Year: YYYY**

## Example One

| **Input** | **Output** |
| --- | --- |
| matchDates('13/Jul/1928, 10-Nov-1934 , 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016') | Day\: 13\, Month\: Jul\, Year\: 1928 |
| | Day\: 10\, Month\: Nov\, Year\: 1934 |
| | Day\: 25\, Month\: Dec\, Year\: 1937 |

## Example Two
| **Input** | **Output** |
| --- | --- |
| matchDates('27/Mar/2000, 22-March-20050') | Day\: 27\, Month\: Mar\, Year\: 2000 |

[/slide]

[slide hideTitle]
# Problem with Solution: Email Validation

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/EN/04.JS-Fundamentals-Regular-Expressions-13-Solution-email-validation-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]



Write a regular expression that performs simple **email validation.**

An email consists of: username **@** domain name.

- **Usernames** are **alphanumeric**

- **Domain name** consist of **two strings**, separated by a period \("."\)

- **Domain name** may contain only **English letters**

- **Valid email:** **valid123@email.com**

- **Invalid email:** **invalid*name@emai1.com**

## Input

- The input will come as a single string

## Output

- If the string is a **valid email**, print "**Valid**"

- If the string is **invalid**, print "**Invalid**"

## Examples

| **Input** | **Output** |
| --- | --- |
| emailValidator('valid@email.com') | Valid |
| emailValidator('invalid@emai1.com') | Invalid |

[/slide]
