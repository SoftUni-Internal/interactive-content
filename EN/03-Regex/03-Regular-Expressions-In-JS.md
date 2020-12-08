# Regular Expressions In JavaScript

[slide]

# Regex in JS

In JavaScript you can construct a regular expression in two ways:

The first one is called **Regular Expression Literal** and it provides a compilation when the script is loaded. 

The regex expression is between slashes.

```js
let pattern = /[A-Za-z]+/g;
```

The second one is called **The constructor function** `RegExp` and it provides a runtime compilation. 

It is used when the pattern is from another source.

```js
let regExp = new RegExp('[A-Za-z]+', 'g');
```

## Validating string by pattern

The first method we will look at is `.test()`. It simply determines whether there is a match.

In the example below we test if we have a valid date. If we do then the result will be **true** otherwise it will be **false**.

```js live
let text = 'Today is 2015-05-11';
let regex = /\d{4}-\d{2}-\d{2}/g;
let containsValidDate = regex.test(text);
console.log(containsValidDate);
```

## Checking for matches

Use `.match()` to check for matches. It returns an array, which is easy to iterate.

In the example we have only two matches.

```js live
let text = 'Peter: 123 Mark: 456';
let regex = /([A-Z][a-z]+): (\d+)/g;
let matches = text.match(regex);
console.log(matches.length);
console.log(matches[0]);
console.log(matches[1]);
```

## Using the Exec() method

If the match succeeds, the `.exec()` method returns an array with extra properties index and input and updates the lastIndex property of the regular expression object. 

The returned array has the matched text as the first item, and then one item for each parenthetical capture group of the matched text.

If the match fails, the `.exec()` method returns **null**, and sets lastIndex to 0.

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

## Replacing with regex

You can use the `.replace(regex, stringReplacement)` method with regular expressions.

Replaces all strings that match the pattern with the provided replacement.

```js live
let text = 'Peter: 123 Mark: 456';
let replacement = '999';
let regex = /\d{3}/g;
let result = text.replace(regex, replacement);
console.log(result);
```

## MatchAll method

The method `.matchAll()` returns an iterator of all results matching a string against a regular expression, including capturing groups.

It works similar to `.exec()` the only difference is that we get all the matches at once in a form of array. 

The result is an array of arrays, that is why here we use the spread operator.

```js live
const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';
const array = [...str.matchAll(regexp)];
console.log(array[0][0]);
console.log(array[1][0]);
```

## Spliting with regex

The method `.split()` splits the text by pattern and returns an array of strings.

```js live
let text = '1   2 3      4';
let regex = /\s+/g;
let result = text.split(regex);
console.log(result);
```

[/slide]

