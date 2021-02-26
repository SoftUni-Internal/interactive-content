# Regular Expressions in JavaScript

[slide hideTitle]
# Regular Expressions in JavaScript


[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/EN/04.JS-Fundamentals-Regular-Expressions-16-17-Regex-in-JS-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In JavaScript, we can construct a regular expression in two ways.

The first one is called a **regular expression literal** and it provides a compilation when the script is loaded. 

The regular expression is between slashes.

```js
let pattern = /[A-Za-z]+/g;
```

The second one is called the **constructor function** `RegExp` and it provides a runtime compilation. 

It is used when the pattern is from another source.

```js
let regExp = new RegExp('[A-Za-z]+', 'g');
```
[/slide]

[slide hideTitle]
# Validating String by Pattern

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/EN/04.JS-Fundamentals-Regular-Expressions-18-Validating-string-by-pattern-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The first method we will look at is `.test()`.

It simply determines whether there is a match.

In the example below, we test if we have a valid date.

If we do, the result will be **true**, otherwise it will be **false**.

```js live
let text = 'Today is 2015-05-11';
let regex = /\d{4}-\d{2}-\d{2}/g;
let containsValidDate = regex.test(text);
console.log(containsValidDate);
```
[/slide]

[slide hideTitle]
# Checking for Matches

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/EN/04.JS-Fundamentals-Regular-Expressions-19-Checking-for-matches-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Use the `.match()` method to check for matches.

It returns an array, which can be iterated easily after that.

In this example, we have only two matches.

```js live
let text = 'Peter: 123 Mark: 456';
let regex = /([A-Z][a-z]+): (\d+)/g;
let matches = text.match(regex);
console.log(matches.length);
console.log(matches[0]);
console.log(matches[1]);
```
[/slide]

[slide hideTitle]
# Using the Exec() Method

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/EN/04.JS-Fundamentals-Regular-Expressions-20-Using-the-exce()-method-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

If the match succeeds, the `.exec()` method returns an array with extra properties\: `index` and `input`. 

It updates the `lastIndex` property of the regular expression object. 

The returned array has the matched text as the first item, and then one item for each parenthetical capture group of the matched text.

If the match fails, the `.exec()` method returns `null`, and sets the `lastIndex` to 0.

It is important to use the global flag `g`.

```js live
let text = 'Peter: 123 Mark: 456';
let regex = /([A-Z][a-z]+): (\d+)/g;
let result = regex.exec(text);
while (result !== null) {
    console.log(result[0]);
    result = regex.exec(text);
}
```
[/slide]


[slide hideTitle]
# Replacing with Regex

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/EN/04.JS-Fundamentals-Regular-Expressions-21-Replacing-with-regex-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

We can use the `.replace(regex, stringReplacement)` method with regular expressions.

It replaces all strings that match the pattern with the provided replacement.

```js live
let text = 'Peter: 123 Mark: 456';
let replacement = '999';
let regex = /\d{3}/g;
let result = text.replace(regex, replacement);
console.log(result);
```
[/slide]

[slide hideTitle]
# MatchAll Method

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/EN/04.JS-Fundamentals-Regular-Expressions-22-Match-all-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The `.matchAll()` method returns an iterator of all results matching a string against a regular expression, including capturing groups.

It works similar to the `.exec()` method. 

The only difference is that we get all the matches at once in a form of an array. 

The result is an array of arrays, that is why we use the spread operator in this example.

```js live
const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';
const array = [...str.matchAll(regexp)];
console.log(array[0][0]);
console.log(array[1][0]);
```
[/slide]


[slide hideTitle]
# Spliting with Regex
[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/EN/04.JS-Fundamentals-Regular-Expressions-23-Splitting-with-regex-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The method `.split()` splits the text by a pattern and returns an array of strings.

```js live
let text = '1   2 3      4';
let regex = /\s+/g;
let result = text.split(regex);
console.log(result);
```

[/slide]

[slide hideTitle]
# Problem with Solution: Match Full Name
[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/EN/04.JS-Fundamentals-Regular-Expressions-25-Solution-match-full-name-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Match Full Name" taskId="js-fundamentals-pt2-Regular-Expressions-lab-Match-Full-Name" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function matchName(input){
  // Write your code here
}
```

[/code-editor]
[code-adapter]
```
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]

# Description

Write a "JavaScript" function to match full names from a list of names, and print them on the console.

First, write a regular expression to match a valid full name, according to these conditions:

A valid full name has the following characteristics:
- It consists of two words
- Each word starts with a capital letter
- After the first letter, it only contains lowercase letters afterwards
- Each of the two words should be at least two letters long
- The two words are separated by a single space

To help you out, we have outlined several steps:
1.	Use an online regular expression tester like: [Regex101](https://regex101.com) 
2.	Check out how to use character sets \(denoted with square brackets \- \"\[\]\"\)
3.	Specify that you want two words with a space between them \(the space character \' \', and not any whitespace symbol\)
4.	For each word, specify that it should begin with an uppercase letter, using a character set. The desired characters are in a range\: from A to Z
5.	For each word, specify that the first letter is followed only by lowercase letters, one or more \– use another character set and the correct quantifier
6.	To prevent capturing of letters across new lines, put \\**b** at the beginning and at the end of your regular expression

This will ensure that what precedes and what follows the match is a word boundary like a new line.

# Example

| **Input** | **Output** |
| --- | --- |
| matchName(['John smith, john smith, john Smith, JOhn Smith, JohN smith, John Smith']) | John Smith |
| matchName(['Chuck finley, chuck finley, tommy Lee, Chuck Finley']) | Chuck Finley |

[/task-description]
[tests]
[test]
[input]
matchName(['Ivan Ivanov\, Ivan ivanov\, ivan Ivanov\, IVan Ivanov\, Test Testov\, Ivan	Ivanov'])
[/input]
[output]
Ivan Ivanov Test Testov
[/output]
[/test]
[test]
[input]
matchName(['gosho goshov\-Xi Ban cc DD\-e e gosho goshov gosho goshov\-pesho ivanov\-PESHO IVANOV\-AA PESHO IVANOV A A aa Ivan Ivanov B B\-d d EE\-ivanivanov\-D D Ivan Ivanov'])
[/input]
[output]
Xi Ban Ivan Ivanov Ivan Ivanov
[/output]
[/test]
[test]
[input]
matchName(['c c\-PESHO IVANOV GOSHO GOSHOV\-D D\-GoshoGoshov goshogoshov\-bb d d\-CC d d A A\-IvanIvanov A A\-xiban gosho goshov\-Xi Ban xi ban\-BB\-pesho petrov XiBan\-'])
[/input]
[output]
Xi Ban
[/output]
[/test]
[test]
[input]
matchName(['GOSHO GOSHOV\-peshopetrov\-c c ivanivanov peshoivanov\-PeshoPetrov\-PeshoIvanov\-DD\-PeshoPetrov Xi Ban\-D D\-IvanIvanov\-D D\-dd\-aa pesho petrov PeshoIvanov\-XI BAN\-cc\-ivan ivanov\-'])
[/input]
[output]
Xi Ban
[/output]
[/test]
[test]
[input]
matchName(['EE\-e e pesho petrov\-PeshoPetrov aa\-gosho goshov\-peshoivanov\-B B EE\-Pesho Petrov\-Pesho Ivanov peshoivanov\-BB Gosho Goshov GOSHO GOSHOV cc XiBan b b\-ivanivanov CC'])
[/input]
[output]
Pesho Petrov Pesho Ivanov Gosho Goshov
[/output]
[/test]
[test]
[input]
matchName(['d d gosho goshov XiBan pesho ivanov\-Pesho Petrov\-xiban\-Pesho Ivanov pesho petrov\-Pesho Petrov\-IvanIvanov\-Pesho Petrov\-PESHO IVANOV\-EE EE C C\-Pesho Ivanov\-peshoivanov\-bb XiBan\-aa'])
[/input]
[output]
Pesho Petrov Pesho Ivanov Pesho Petrov Pesho Petrov Pesho Ivanov
[/output]
[/test]
[test]
[input]
matchName(['Xi Ban\-GoshoGoshov B B\-PeshoIvanov xiban B B aa C C\-goshogoshov\-IvanIvanov PeshoPetrov\-PeshoIvanov C C ivan ivanov\-Pesho Ivanov\-IVAN IVANOV C C\-PESHO IVANOV\-PESHO IVANOV ivan ivanov'])
[/input]
[output]
Xi Ban Pesho Ivanov
[/output]
[/test]
[test]
[input]
matchName(['A A\-Xi Ban b b\-C C ee XiBan\-gosho goshov GoshoGoshov AA\-IvanIvanov BB\-cc\-pesho petrov DD goshogoshov ivan ivanov IvanIvanov\-pesho ivanov a a\-gosho goshov\-'])
[/input]
[output]
Xi Ban
[/output]
[/test]
[test]
[input]
matchName(['gosho goshov\-aa\-C C-PESHO IVANOV PESHO PETROV\-A A xi ban A A aa\-peshopetrov Gosho Goshov d d\-E E DD XI BAN\-bb\-Gosho Goshov\-aa\-dd ivan ivanov\-'])
[/input]
[output]
Gosho Goshov Gosho Goshov
[/output]
[/test]
[test]
[input]
matchName(['Gosho Goshov a a C C\-GoshoGoshov EE PeshoPetrov\-a a xi ban D D bb b b\-B B\-c c EE\-IvanIvanov DD pesho ivanov B B PESHO IVANOV IVAN IVANOV\-'])
[/input]
[output]
Gosho Goshov
[/output]
[/test]
[test]
[input]
matchName(['goshogoshov peshoivanov\-c c\-XiBan\-cc\-Ivan Ivanov\-D D IVAN IVANOV xi ban BB\-xiban\-PESHO PETROV xiban Ivan Ivanov\-XI BAN\-cc\-IVAN IVANOV EE c c e e'])
[/input]
[output]
Ivan Ivanov Ivan Ivanov
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]


[slide hideTitle]
# Problem with Solution: Match Phone Number
[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/04.JS-Fundamentals-Regular-Expressions-RegExp/EN/04.JS-Fundamentals-Regular-Expressions-27-Solution-Match-phone-number-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Match Phone Number" taskId="js-fundamentals-pt2-Regular-Expressions-Match-Phone-Number" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function matchPhone(input){
  // Write your code here
}
```

[/code-editor]
[code-adapter]
```
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]

# Description

Write a regular expression to match a valid phone number from Sofia. 

After you find all valid phones, print them on the console, separated by a comma and a space **, **.

A valid number has the following characteristics:
- It starts with **+359**
- Then, it is followed by the area code **(always 2)**

After that, it is followed by the number itself:
- The number consists of 7 digits (separated in two groups of 3 and 4 digits respectively).
- The different parts are separated by either a space or a hyphen "\-"

You can use the following RegEx properties to help with the matching: 
- Use quantifiers to match a specific number of digits
- Use a capturing group to make sure the delimiter is only one of the allowed characters (space or hyphen) and not a combination of both \(e.g. \+359 2\-111 111 has mixed delimiters, it is invalid\)
   - use a group backreference to achieve this
- Add a word boundary at the end of the match to avoid partial matches (the last example on the right hand side)
- Ensure that before the **+** sign there is either a space or it is the beginning of the string

# Example

| **Input** | **Output** |
| --- | --- |
| matchPhone(["+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222"]) | \+359 2 222 2222\, \+359\-2\-222\-2222 |
| matchphone(["+359 2 445 2035, +358 2 00 4455, +359 3 525 6866']) | \+359 2 445 2035 |

[/task-description]
[tests]
[test]
[input]
matchPhone(['\+359 2 222 2222\,359\-2\-222\-2222\, \+359\/2\/222\/2222\, \+359\-2 222 2222 \+359 2\-222\-2222\, \+359\-2\-222\-222\, \+359\-2\-222\-22222 \+359\-2\-222\-2222'])
[/input]
[output]
\+359 2 222 2222\, \+359\-2\-222\-2222
[/output]
[/test]
[test]
[input]
matchPhone(['\+359\-2\-376\-7398 \+359\-2\-854\-2280 \-359 2 222 2222 \-359 2 222 2222 \+359 1 123 4567 \+359\-2\-789\-2584 \+359 2 727 9740 \+359 2 819 7146 \+359 2 558 8560 \+359\-2\-376\-7398 \+359\-2\-961\-0248 \+359\-2\-376\-7398 \+359 2 262 8203 \+359 2 22 2222 \+359\-2\-191\-9995'])
[/input]
[output]
\+359\-2\-376\-7398\, \+359\-2\-854\-2280\, \+359\-2\-789\-2584\, \+359 2 727 9740\, \+359 2 819 7146\, \+359 2 558 8560\, \+359\-2\-376\-7398\, \+359\-2\-961\-0248\, \+359\-2\-376\-7398\, \+359 2 262 8203\, \+359\-2\-191\-9995
[/output]
[/test]
[test]
[input]
matchPhone(['\+359 2 357 3351 \+359 2 22 2222 \+359 2 173 3408 \+359\-2\-789\-2584 \+359 2 193 3953 \+359\-2\-961\-0248 \+359\-2\-789\-2584 \+359 2 222 222 \+360 2 222 2222 \+359 2 727 9740 \+359\-2\-854\-2280 \+359 2 193 3953 \+359 2 357 3351 \+359 2 558 8560 \+359 2 222 222'])
[/input]
[output]
\+359 2 357 3351\, \+359 2 173 3408\, \+359\-2\-789\-2584\, \+359 2 193 3953\, \+359\-2\-961\-0248\, \+359\-2\-789\-2584\, \+359 2 727 9740\, \+359\-2\-854\-2280\, \+359 2 193 3953\, \+359 2 357 3351\, \+359 2 558 8560
[/output]
[/test]
[test]
[input]
matchPhone(['\+359\-2\-645\-6120 \+359 2 680 6053 \+359 2 262 8203 \+359 2 262 8203 \+359 2 717 0238 \+359\-2\-961\-0248 \+359 1 123 4567 \+359 2 173 3408 \+359\-2\-977\-0618 \+360 2 222 2222 \+359 2 123 1273 \+359 2 177 2605 \+359 2 177 2605 \+359 2 558 8560 \+359\-2\-789\-2584'])
[/input]
[output]
\+359\-2\-645\-6120\, \+359 2 680 6053\, \+359 2 262 8203\, \+359 2 262 8203\, \+359 2 717 0238\, \+359\-2\-961\-0248\, \+359 2 173 3408\, \+359\-2\-977\-0618\, \+359 2 123 1273\, \+359 2 177 2605\, \+359 2 177 2605\, \+359 2 558 8560\, \+359\-2\-789\-2584
[/output]
[/test]
[test]
[input]
matchPhone(['\+359\-2\-376\-7398 \+359 2 558 8560 \+360 2 222 2222 \+359 2 073 2128 \+359 2 628 8897 \+359 2 123 1273 \+359 2 819 7146 \+359\-2\-191\-9995 \+359\-2\-645\-6120 \+359 2 262 8203 \+359 2 123 1273 \+359 2 073 2128 \+359\-2\-191\-9995 \+359 2 22 2222 \+359 2 073 2128'])
[/input]
[output]
\+359\-2\-376\-7398\, \+359 2 558 8560\, \+359 2 073 2128\, \+359 2 628 8897\, \+359 2 123 1273\, \+359 2 819 7146\, \+359\-2\-191\-9995\, \+359\-2\-645\-6120\, \+359 2 262 8203\, \+359 2 123 1273\, \+359 2 073 2128\, \+359\-2\-191\-9995\, \+359 2 073 2128
[/output]
[/test]
[test]
[input]
matchPhone(['\+359 2 222 222 \+359\-2\-961\-0248 \+359 2 717 0238 \+359\-2\-789\-2584 \+359\-2\-376\-7398 \+359 2 173 3408 \+359\-2\-977\-0618 \+359 2 680 6053 \+359 2 22 2222 \+359 2 22 2222 \+359 2 680 6053 \+359\-2\-191\-9995 \+359 2 819 7146 \+359 2 262 8203 \+359\-2\-854\-2280'])
[/input]
[output]
\+359\-2\-961\-0248\, \+359 2 717 0238\, \+359\-2\-789\-2584\, \+359\-2\-376\-7398\, \+359 2 173 3408\, \+359\-2\-977\-0618\, \+359 2 680 6053\, \+359 2 680 6053\, \+359\-2\-191\-9995\, \+359 2 819 7146\, \+359 2 262 8203\, \+359\-2\-854\-2280
[/output]
[/test]
[test]
[input]
matchPhone(['\+359 2 173 3408 \+359 1 123 4567 \+359 2 22 2222 \+359 2 727 9740 \+359 2 222 222 \+359 2 262 8203 \+359 2 222 222 \+359\-2\-191\-9995 \+359 2 22 2222 \+359 1 123 4567 \+359 2 717 0238 \+359 2 193 3953 \+359 1 123 4567 \+359 2 193 3953 \+359 1 123 4567'])
[/input]
[output]
\+359 2 173 3408\, \+359 2 727 9740\, \+359 2 262 8203\, \+359\-2\-191\-9995\, \+359 2 717 0238\, \+359 2 193 3953\, \+359 2 193 3953
[/output]
[/test]
[test]
[input]
matchPhone(['\+359 2 680 6053 \+359 1 123 4567 \+359\-2\-191\-9995 \+359 2 073 2128 \+359 2 262 8203 \+359\-2\-789\-2584 \+359 2 173 3408 \+359 2 717 0238 \+359\-2\-645\-6120 \+359 2 628 8897 \+359 2 222 222 \+359 2 177 2605 \+359\-2\-191\-9995 \+359\-2\-645\-6120 \+359\-2\-191\-9995'])
[/input]
[output]
\+359 2 680 6053\, \+359\-2\-191\-9995\, \+359 2 073 2128\, \+359 2 262 8203\, \+359\-2\-789\-2584\, \+359 2 173 3408\, \+359 2 717 0238\, \+359\-2\-645\-6120\, \+359 2 628 8897\, \+359 2 177 2605\, \+359\-2\-191\-9995\, \+359\-2\-645\-6120\, \+359\-2\-191\-9995
[/output]
[/test]
[test]
[input]
matchPhone(['\+359 2 123 1273 \+359 2 222 222 \+359 2 262 8203 \+359 2 717 0238 \+359\-2\-789\-2584 \+359 2 727 9740 \+359\-2\-376\-7398 \+359 2 123 1273 \+359 2 680 6053 \+359 2 193 3953 \+359 2 262 8203 \+359\-2\-854\-2280 \+359 2 558 8560 \+359 2 558 8560 \+360 2 222 2222'])
[/input]
[output]
\+359 2 123 1273\, \+359 2 262 8203\, \+359 2 717 0238\, \+359\-2\-789\-2584\, \+359 2 727 9740\, \+359\-2\-376\-7398\, \+359 2 123 1273\, \+359 2 680 6053\, \+359 2 193 3953\, \+359 2 262 8203\, \+359\-2\-854\-2280\, \+359 2 558 8560\, \+359 2 558 8560
[/output]
[/test]
[test]
[input]
matchPhone(['\+359\-2\-376\-7398 \+359 2 727 9740 \+359 2 680 6053 \-359 2 222 2222 \+359 2 123 1273 \+359\-2\-961\-0248 \+359 2 22 2222 \+359 2 173 3408 \+359 2 558 8560 \+359 2 073 2128 \+359 2 357 3351 \+359\-2\-789\-2584 \+359 2 717 0238 \+359 2 073 2128 \+359 2 22 2222'])
[/input]
[output]
\+359\-2\-376\-7398\, \+359 2 727 9740\, \+359 2 680 6053\, \+359 2 123 1273\, \+359\-2\-961\-0248\, \+359 2 173 3408\, \+359 2 558 8560\, \+359 2 073 2128\, \+359 2 357 3351\, \+359\-2\-789\-2584\, \+359 2 717 0238\, \+359 2 073 2128
[/output]
[/test]
[test]
[input]
matchPhone(['\-359 2 222 2222 \+359 2 357 3351 \+359\-2\-191\-9995 \-359 2 222 2222 \+359 2 222 222 \+359\-2\-789\-2584 \+359\-2\-376\-7398 \+359 1 123 4567 \+360 2 222 2222 \+359 2 22 2222 \+359 2 262 8203 \+359 2 193 3953 \+359 2 177 2605 \+359 2 073 2128 \+359 2 073 2128'])
[/input]
[output]
\+359 2 357 3351\, \+359\-2\-191\-9995\, \+359\-2\-789\-2584\, \+359\-2\-376\-7398\, \+359 2 262 8203\, \+359 2 193 3953\, \+359 2 177 2605\, \+359 2 073 2128\, \+359 2 073 2128
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
