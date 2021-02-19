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
let str = "Hellooo World! Hello Again!";
let pattern = /lo*/g;
let result = str.match(pattern);
console.log(result);
```

`+` matches the preceding element one or more times.

**Example:** `Hellooo World! Hello Again!`

`o+` will match "ooo", "o", and "o".

```js live
let str = "Hellooo World! Hello Again!";
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

After that, we match capital letters, small letters, and spaces with `[A-Z,a-z\s]+`

To match the second `#` which is after the word "there", use `\1`, where the number 1 is the number of the group.


```js live
let str = `The day #he said I will be there# he made a promise`;
let pattern = /(\#)[A-Za-z\s]+\1/;
let result = str.match(pattern);
console.log(result[0]);
```

[/slide]

[slide hideTitle]
# Problem with Solution: Match Dates

[vimeo-video]
[stream language="EN" videoId="489818844/8c5a03bb11" default /]
[stream language="RO" videoId="489818844/8c5a03bb11"  /]
[/video-vimeo]

[code-task title="Match Dates" taskId="js-fundamentals-pt2-regular-expressions-lab-Match-Dates" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function matchDates(input){
   // Write your code here 
}
```
[/code-editor]
[task-description]
# Description

Write a regular expression that extracts dates from a text.

Valid date format: `dd-MMM-yyyy`.

**Examples:** `12-Jun-1999, 3-Nov-1999`

I am born on `30-Dec-1994`.

My father is born on the `30-Dec-1994`.

**01-July-2000** is not a valid date.

- Valid dates format: `30-Dec-1994` and `30-Dec-1994`

- Invalid date format: **01-July-2000**

## Input

- The input will come as a string of multiple dates

## Output

- Print each **valid** date in the format `Day: DD, Month: MMM, Year: YYYY`

# Example

| **Input** | **Output** |
| --- | --- |
| `'13/Jul/1928, 10-Nov-1934 , 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016'` | Day\: 13\, Month\: Jul\, Year\: 1928 |
| | Day\: 10\, Month\: Nov\, Year\: 1934 |
| | Day\: 25\, Month\: Dec\, Year\: 1937 |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016
[/input]
[output]
Day: 13, Month: Jul, Year: 1928
Day: 10, Month: Nov, Year: 1934
Day: 25, Month: Dec, Year: 1937
[/output]
[/test]
[test]
[input]
01/Jan-1951 29/Feb/2024 1/Jan-1951 27-Feb-2007 1/Jan-1951 1/Mar/2016 23/october/197
[/input]
[output]
Day: 29, Month: Feb, Year: 2024
Day: 27, Month: Feb, Year: 2007
[/output]
[/test]
[test]
[input]
24.Apr.2003 1/Jan-1951 12/Jan/2024 1/Jan-1951 22.Jan.2014 1/Jan-1951 24-Sep-2014 18-Jan-2012 23/october/197
[/input]
[output]
Day: 24, Month: Apr, Year: 2003
Day: 12, Month: Jan, Year: 2024
Day: 22, Month: Jan, Year: 2014
Day: 24, Month: Sep, Year: 2014
Day: 18, Month: Jan, Year: 2012
[/output]
[/test]
[test]
[input]
1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014
[/input]
[output]
Day: 11, Month: Dec, Year: 2010
Day: 18, Month: Jan, Year: 2014
[/output]
[/test]
[test]
[input]
04-Jan-2014 1/Jan-1951 23/october/197 23/october/197 23/Nov/2023 1/Jan-1951 27-Feb-2012 08-Mar-2000 1/Jan-1951
[/input]
[output]
Day: 04, Month: Jan, Year: 2014
Day: 23, Month: Nov, Year: 2023
Day: 27, Month: Feb, Year: 2012
Day: 08, Month: Mar, Year: 2000
[/output]
[/test]
[test]
[input]
22.Nov.2011 09.May.2013 1/Jan-1951 29/Sep/2011 24-Jul-2012 06.Oct.2013
[/input]
[output]
Day: 22, Month: Nov, Year: 2011
Day: 09, Month: May, Year: 2013
Day: 29, Month: Sep, Year: 2011
Day: 24, Month: Jul, Year: 2012
Day: 06, Month: Oct, Year: 2013
[/output]
[/test]
[test]
[input]
02/Apr/2002 1/Jan-1951 21-Feb-2019
[/input]
[output]
Day: 02, Month: Apr, Year: 2002
Day: 21, Month: Feb, Year: 2019
[/output]
[/test]
[test]
[input]
1/Jan-1951 06-Jan-2014 1/Jan-1951 30/Jun/2004 21.Nov.2000 15/Nov/2018 11.Mar.2017 1/Jan-1951
[/input]
[output]
Day: 06, Month: Jan, Year: 2014
Day: 30, Month: Jun, Year: 2004
Day: 21, Month: Nov, Year: 2000
Day: 15, Month: Nov, Year: 2018
Day: 11, Month: Mar, Year: 2017
[/output]
[/test]
[test]
[input]
11/Aug/2005 18/Oct/2021 1/Jan-1951 30.Oct.2004 25/Aug/2002 13-Aug-2016
[/input]
[output]
Day: 11, Month: Aug, Year: 2005
Day: 18, Month: Oct, Year: 2021
Day: 30, Month: Oct, Year: 2004
Day: 25, Month: Aug, Year: 2002
Day: 13, Month: Aug, Year: 2016
[/output]
[/test]
[test]
[input]
1/Jan-1951 06-Jun-2021 21/Aug/2003 07/May/2008
[/input]
[output]
Day: 06, Month: Jun, Year: 2021
Day: 21, Month: Aug, Year: 2003
Day: 07, Month: May, Year: 2008
[/output]
[/test]
[test]
[input]
1/Jan-1951 02.Sep.2014 13/Aug/2024 01.Sep.2001 02.Sep.2022 07/Feb/2008
[/input]
[output]
Day: 02, Month: Sep, Year: 2014
Day: 13, Month: Aug, Year: 2024
Day: 01, Month: Sep, Year: 2001
Day: 02, Month: Sep, Year: 2022
Day: 07, Month: Feb, Year: 2008
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem with Solution: Email Validation

[vimeo-video]
[stream language="EN" videoId="489818897/c7b03af810" default /]
[stream language="RO" videoId="489818897/c7b03af810"  /]
[/video-vimeo]


[code-task title="Email Validation" taskId="js-fundamentals-pt2-regular-expressions-lab-Email-Validation" executionType="tests-execution" executionStrategy="javascript-tests" requiresInput]
[code-editor language=javascript]
```
function emailValidator(input){
   // Write your code here 
}
```
[/code-editor]
[task-description]
# Description

Write a regular expression that performs simple **email validation.**

An email consists of: username `@` domain name.

- **Usernames** are **alphanumeric**

- **Domain name** consist of **two strings**, separated by a period \(`.`\)

- **Domain name** may contain only **English letters**

- Valid email: `valid123@email.com`

- Invalid email: `invalid*name@emai1.com`

## Input

- The input will come as a single string

## Output

- If the string is a valid email, print 'Valid'

- If the string is invalid, print 'Invalid'

# Example

| **Input** | **Output** |
| --- | --- |
| `'valid@email.bg'` | Valid |

| **Input** | **Output** |
| --- | --- |
| `'invalid@emai1.bg'` | Valid |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
valid@email.bg
[/input]
[output]
Valid
[/output]
[/test]
[test open]
[input]
invalid@emai1.bg
[/input]
[output]
Invalid
[/output]
[/test]
[test]
[input]
SomethingValid23@thisisaveeeeeerrryyylong.emailbythewaybutitsvalid
[/input]
[output]
Valid
[/output]
[/test]
[test]
[input]
1@1.a
[/input]
[output]
Invalid
[/output]
[/test]
[test]
[input]
tHePrEvIoUsEmAiLwAsInVaLiDbUtThIsOnEiSvAlId@valid.com
[/input]
[output]
Valid
[/output]
[/test]
[test]
[input]
i_thinkThatsEnough@asd.com
[/input]
[output]
Invalid
[/output]
[/test]
[test]
[input]
test005@out.txt
[/input]
[output]
Valid
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
