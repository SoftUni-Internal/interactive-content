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

[code-task title="Match Dates" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function solve(input){
  // Write your code here
}
```

[/code-editor]
[task-description]

# Description

Write a program, which matches a date in the format `dd{separator}MMM{separator}yyyy`.

Compose the Regular Expression

Every valid date has the following characteristics:

- Always starts with two digits, followed by a separator.
- After that, it has one uppercase and two lowercase letters (e.g. Jan, Mar).
- After that, it has a separator and exactly 4 digits (for the year).
- The separator could be\: a period `(".")`, a hyphen `("-")`, or a forward slash `("/")`.
- The separator needs to be the same for the whole date `(e.g. 13.03.2016 is valid, 13.03/2016 is NOT)`.

Use a group backreference to check for this.


# Example

**Input**

`['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']`

**Output**

Day\: 13\, Month\: Jul\, Year\: 1928

Day\: 10\, Month\: Nov\, Year\: 1934

Day\: 25\, Month\: Dec\, Year\: 1937

[/task-description]
[tests]
[test]
[input]
13\/Jul\/1928\, 10\-Nov\-1934\, 01\/Jan\-1951\, 25\.Dec\.1937\, 23\/09\/1973\, 1\/Feb\/2016
[/input]
[output]
Day\: 13\, Month\: Jul\, Year\: 1928
Day\: 10\, Month\: Nov\, Year\: 1934
Day\: 25\, Month\: Dec\, Year\: 1937
[/output]
[/test]
[test]
[input]
01\/Jan\-1951 29\/Feb\/2024 1\/Jan\-1951 27\-Feb\-2007 1\/Jan\-1951 1\/Mar\/2016 23\/october\/197
[/input]
[output]
Day\: 29\, Month\: Feb\, Year\: 2024
Day\: 27\, Month\: Feb\, Year\: 2007
[/output]
[/test]
[test]
[input]
24\.Apr\.2003 1\/Jan\-1951 12\/Jan\/2024 1\/Jan\-1951 22\.Jan\.2014 1\/Jan\-1951 24\-Sep\-2014 18\-Jan\-2012 23\/october\/197
[/input]
[output]
Day\: 24\, Month\: Apr\, Year\: 2003
Day\: 12\, Month\: Jan\, Year\: 2024
Day\: 22\, Month\: Jan\, Year\: 2014
Day\: 24\, Month\: Sep\, Year\: 2014
Day\: 18\, Month\: Jan\, Year\: 2012
[/output]
[/test]
[test]
[input]
1\/Jan\-1951 23\/october\/197 11\-Dec\-2010 18\.Jan\.2014
[/input]
[output]
Day\: 11\, Month\: Dec\, Year\: 2010
Day\: 18\, Month\: Jan\, Year\: 2014
[/output]
[/test]
[test]
[input]
04\-Jan\-2014 1\/Jan\-1951 23\/october\/197 23\/october\/197 23\/Nov\/2023 1\/Jan\-1951 27\-Feb\-2012 08\-Mar\-2000 1\/Jan\-1951
[/input]
[output]
Day\: 04\, Month\: Jan\, Year\: 2014
Day\: 23\, Month\: Nov\, Year\: 2023
Day\: 27\, Month\: Feb\, Year\: 2012
Day\: 08\, Month\: Mar\, Year\: 2000
[/output]
[/test]
[test]
[input]
22\.Nov\.2011 09\.May\.2013 1\/Jan\-1951 29\/Sep\/2011 24\-Jul\-2012 06\.Oct\.2013
[/input]
[output]
Day\: 22\, Month\: Nov\, Year\: 2011
Day\: 09\, Month\: May\, Year\: 2013
Day\: 29\, Month\: Sep\, Year\: 2011
Day\: 24\, Month\: Jul\, Year\: 2012
Day\: 06\, Month\: Oct\, Year\: 2013
[/output]
[/test]
[test]
[input]
02\/Apr\/2002 1\/Jan\-1951 21\-Feb\-2019
[/input]
[output]
Day\: 02\, Month\: Apr\, Year\: 2002
Day\: 21\, Month\: Feb\, Year\: 2019
[/output]
[/test]
[test]
[input]
1\/Jan\-1951 06\-Jan\-2014 1\/Jan\-1951 30\/Jun\/2004 21\.Nov\.2000 15\/Nov\/2018 11\.Mar\.2017 1\/Jan\-1951
[/input]
[output]
Day\: 06\, Month\: Jan\, Year\: 2014
Day\: 30\, Month\: Jun\, Year\: 2004
Day\: 21\, Month\: Nov\, Year\: 2000
Day\: 15\, Month\: Nov\, Year\: 2018
Day\: 11\, Month\: Mar\, Year\: 2017
[/output]
[/test]
[test]
[input]
11\/Aug\/2005 18\/Oct\/2021 1\/Jan\-1951 30\.Oct\.2004 25\/Aug\/2002 13\-Aug\-2016
[/input]
[output]
Day\: 11\, Month\: Aug\, Year\: 2005
Day\: 18\, Month\: Oct\, Year\: 2021
Day\: 30\, Month\: Oct\, Year\: 2004
Day\: 25\, Month\: Aug\, Year\: 2002
Day\: 13\, Month\: Aug\, Year\: 2016
[/output]
[/test]
[test]
[input]
1\/Jan\-1951 06\-Jun\-2021 21\/Aug\/2003 07\/May\/2008
[/input]
[output]
Day\: 06\, Month\: Jun\, Year\: 2021
Day\: 21\, Month\: Aug\, Year\: 2003
Day\: 07\, Month\: May\, Year\: 2008
[/output]
[/test]
[test]
[input]
1\/Jan\-1951 02\.Sep\.2014 13\/Aug\/2024 01\.Sep\.2001 02\.Sep\.2022 07\/Feb\/2008
[/input]
[output]
Day\: 02\, Month\: Sep\, Year\: 2014
Day\: 13\, Month\: Aug\, Year\: 2024
Day\: 01\, Month\: Sep\, Year\: 2001
Day\: 02\, Month\: Sep\, Year\: 2022
Day\: 07\, Month\: Feb\, Year\: 2008
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Solution: Match Dates
[vimeo-video]
[stream language="EN" videoId="489818853/c94449ec19" default /]
[stream language="RO" videoId="489818853/c94449ec19"  /]
[/video-vimeo]

[code-task title="Match Dates" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function solve(input){
  input = input[0];
  let pattern = /\b(?<day>[0-9]{2})([-/.])(?<month>[A-Z]{1}[a-z]{2})\2(?<year>[0-9]{4})/g;
  while ((date = pattern.exec(input))!==null) {
      let day = date.groups["day"];
      let month = date.groups["month"];
      let year = date.groups["year"];
      console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);     
  }    
}
```

[/code-editor]
[task-description]

# Description

Write a program, which matches a date in the format `dd{separator}MMM{separator}yyyy`.

Compose the Regular Expression

Every valid date has the following characteristics:

- Always starts with two digits, followed by a separator.
- After that, it has one uppercase and two lowercase letters (e.g. Jan, Mar).
- After that, it has a separator and exactly 4 digits (for the year).
- The separator could be\: a period `(".")`, a hyphen `("-")`, or a forward slash `("/")`.
- The separator needs to be the same for the whole date `(e.g. 13.03.2016 is valid, 13.03/2016 is NOT)`.

Use a group backreference to check for this.


# Example

**Input**

`['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']`

**Output**

Day\: 13\, Month\: Jul\, Year\: 1928 

Day\: 10\, Month\: Nov\, Year\: 1934

Day\: 25\, Month\: Dec\, Year\: 1937

[/task-description]
[tests]
[test]
[input]
13\/Jul\/1928\, 10\-Nov\-1934\, 01\/Jan\-1951\, 25\.Dec\.1937\, 23\/09\/1973\, 1\/Feb\/2016
[/input]
[output]
Day\: 13\, Month\: Jul\, Year\: 1928
Day\: 10\, Month\: Nov\, Year\: 1934
Day\: 25\, Month\: Dec\, Year\: 1937
[/output]
[/test]
[test]
[input]
01\/Jan\-1951 29\/Feb\/2024 1\/Jan\-1951 27\-Feb\-2007 1\/Jan\-1951 1\/Mar\/2016 23\/october\/197
[/input]
[output]
Day\: 29\, Month\: Feb\, Year\: 2024
Day\: 27\, Month\: Feb\, Year\: 2007
[/output]
[/test]
[test]
[input]
24\.Apr\.2003 1\/Jan\-1951 12\/Jan\/2024 1\/Jan\-1951 22\.Jan\.2014 1\/Jan\-1951 24\-Sep\-2014 18\-Jan\-2012 23\/october\/197
[/input]
[output]
Day\: 24\, Month\: Apr\, Year\: 2003
Day\: 12\, Month\: Jan\, Year\: 2024
Day\: 22\, Month\: Jan\, Year\: 2014
Day\: 24\, Month\: Sep\, Year\: 2014
Day\: 18\, Month\: Jan\, Year\: 2012
[/output]
[/test]
[test]
[input]
1\/Jan\-1951 23\/october\/197 11\-Dec\-2010 18\.Jan\.2014
[/input]
[output]
Day\: 11\, Month\: Dec\, Year\: 2010
Day\: 18\, Month\: Jan\, Year\: 2014
[/output]
[/test]
[test]
[input]
04\-Jan\-2014 1\/Jan\-1951 23\/october\/197 23\/october\/197 23\/Nov\/2023 1\/Jan\-1951 27\-Feb\-2012 08\-Mar\-2000 1\/Jan\-1951
[/input]
[output]
Day\: 04\, Month\: Jan\, Year\: 2014
Day\: 23\, Month\: Nov\, Year\: 2023
Day\: 27\, Month\: Feb\, Year\: 2012
Day\: 08\, Month\: Mar\, Year\: 2000
[/output]
[/test]
[test]
[input]
22\.Nov\.2011 09\.May\.2013 1\/Jan\-1951 29\/Sep\/2011 24\-Jul\-2012 06\.Oct\.2013
[/input]
[output]
Day\: 22\, Month\: Nov\, Year\: 2011
Day\: 09\, Month\: May\, Year\: 2013
Day\: 29\, Month\: Sep\, Year\: 2011
Day\: 24\, Month\: Jul\, Year\: 2012
Day\: 06\, Month\: Oct\, Year\: 2013
[/output]
[/test]
[test]
[input]
02\/Apr\/2002 1\/Jan\-1951 21\-Feb\-2019
[/input]
[output]
Day\: 02\, Month\: Apr\, Year\: 2002
Day\: 21\, Month\: Feb\, Year\: 2019
[/output]
[/test]
[test]
[input]
1\/Jan\-1951 06\-Jan\-2014 1\/Jan\-1951 30\/Jun\/2004 21\.Nov\.2000 15\/Nov\/2018 11\.Mar\.2017 1\/Jan\-1951
[/input]
[output]
Day\: 06\, Month\: Jan\, Year\: 2014
Day\: 30\, Month\: Jun\, Year\: 2004
Day\: 21\, Month\: Nov\, Year\: 2000
Day\: 15\, Month\: Nov\, Year\: 2018
Day\: 11\, Month\: Mar\, Year\: 2017
[/output]
[/test]
[test]
[input]
11\/Aug\/2005 18\/Oct\/2021 1\/Jan\-1951 30\.Oct\.2004 25\/Aug\/2002 13\-Aug\-2016
[/input]
[output]
Day\: 11\, Month\: Aug\, Year\: 2005
Day\: 18\, Month\: Oct\, Year\: 2021
Day\: 30\, Month\: Oct\, Year\: 2004
Day\: 25\, Month\: Aug\, Year\: 2002
Day\: 13\, Month\: Aug\, Year\: 2016
[/output]
[/test]
[test]
[input]
1\/Jan\-1951 06\-Jun\-2021 21\/Aug\/2003 07\/May\/2008
[/input]
[output]
Day\: 06\, Month\: Jun\, Year\: 2021
Day\: 21\, Month\: Aug\, Year\: 2003
Day\: 07\, Month\: May\, Year\: 2008
[/output]
[/test]
[test]
[input]
1\/Jan\-1951 02\.Sep\.2014 13\/Aug\/2024 01\.Sep\.2001 02\.Sep\.2022 07\/Feb\/2008
[/input]
[output]
Day\: 02\, Month\: Sep\, Year\: 2014
Day\: 13\, Month\: Aug\, Year\: 2024
Day\: 01\, Month\: Sep\, Year\: 2001
Day\: 02\, Month\: Sep\, Year\: 2022
Day\: 07\, Month\: Feb\, Year\: 2008
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]