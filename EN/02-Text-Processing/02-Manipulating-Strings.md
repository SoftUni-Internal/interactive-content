# Manipulating Strings

[slide hideTitle]
# Concatenating

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/03.JS-Fundamentals-Text-Processing/EN/interactive-js-fundamentals-text-processing-7-8-concatinating-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Concatenation** in JavaScript is done with the operators: `+` and `+=` or by the `concat()` method.

**Concat** can also be used to **merge** two arrays.

What is specific to it, is that **it does not change the original string** or array, instead it returns a new one. 

Here is an example of how the `+` and `+=` operators work:

```js live
let sentence = 'Hello' + ', ';
let word = 'John';

sentence += word;

console.log(sentence);
```

Let us see how `concat()` works: 

```js live
let greet = 'Hello, ';
let name = 'John';

let concatenated = greet.concat(name);

console.log(concatenated);
```

In the end, we see that both methods will return an **identical string**.

That is because `+` and `+=` and the `concat()` method do the same but in different ways.

[/slide]

[slide hideTitle]
# Searching for Substrings

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/03.JS-Fundamentals-Text-Processing/EN/interactive-js-fundamentals-text-processing-9-searching-for-substrings-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

To **find** a substring, we can use `indexOf()` or `lastIndexOf()`. 

These two methods are **case sensitive**, which means that if we search for a word including a **capital letter and the string contains its lower-case version**, they will not match the word at all, and will return `-1`. 

Both of them can **take up to two parameters:** 

- The first one is the word that it searches for
- The second one is the starting index

Here is an example of using `indexOf()`:

```js live
let str = 'I love JS a lot';

console.log(str.indexOf('JS'));
```

Here `indexOf` returns **7** because this is the first index that `JS` appears. 

Now let us try with `js`, instead of `JS`:

```js live
let str = 'I love JS a lot';

console.log(str.indexOf('js'));
```

Now it returns `-1` because `indexOf` is case sensitive and does not detect **"js"** as **"JS"** 

Let us check `lastIndexOf()`. 

It is almost the same as **indexOf**, but with the difference that **lastIndexOf** searches for the last appearance.

And let us see how it works:

```js live
let str = 'JS developer';

console.log(str.lastIndexOf('e'));
console.log(str.lastIndexOf('a'));
```

The first `console.log` returns **10**, because this is the index where **e** last appears. 

And the second returns `-1` because it will not find anything.

[/slide]

[slide hideTitle]
# Extracting Substrings

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/03.JS-Fundamentals-Text-Processing/EN/interactive-js-fundamentals-text-processing-10-extracting-substrings-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

To **extract** a substring, we can use `substring()`. 

This method accepts two parameters:

- The first one is the **start** index
- The second one is the **end** index

And it will return the part from the **start index** till the **end index**. 

But if we do not provide a **second parameter**, it will return the part between the **start index** and the **end of the string**. 

**Substring** will not modify the original string, it will return a new one. 

This means that we need to assign it to a variable for it to work.

Here are some examples:

```js live
let str = 'Intro to programming';

let subStrOne = str.substring(5, 8)
let subStrTwo = str.substring(5)

console.log(subStrOne);
console.log(subStrTwo);
```
Here **subStrOne** will return **"to"** because this is the part that is in the range of the start and end index.

But **subStrTwo** returns everything from **"to"** to the end.

That is because we did not give it the second parameter, which is the **end** index.

[/slide]

[slide hideTitle]
# String Operations

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/03.JS-Fundamentals-Text-Processing/EN/interactive-js-fundamentals-text-processing-11-string-operations-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

If we want to change a part of a string directly, we will use `replace()`. 

Like `substring()`, `replace()` **will not modify** the original string, instead it will **return a new one**. 

This means that we need to assign it to a variable.

**Replace** is a method that requires two parameters:

-  `pattern`
-  `replacement`

For the **pattern** part we can use a **regular expression** or a **string**. 

And for the **replacement** we can use a `function()` or a **string**.

After it matches the pattern, it will change only its first appearance. 

Here is an example:

```js live
let str = 'I love JS. JS is my favorite language';
let replacedStr = str.replace('JS', 'JavaScript');

console.log(replacedStr);
```

[/slide]

[slide hideTitle]
# Problem with Solution: Substring

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/03.JS-Fundamentals-Text-Processing/EN/interactive-js-fundamentals-text-processing-12-solution-substring-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Substring" taskId="js-fundamentals-pt2-text-processing-lab-Substring" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function substring(str, firstNumber, secondNumber){
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
Write a function that receives **a string and two numbers.**

The numbers will be a **starting index** and **count of elements** to substring. 

Print the result.

## Example
  | **Input** | **Output** |
| --- | --- |
| substring('ASentence', 1, 8) | Sentence |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
substring('ASentence', 1, 8)
[/input]
[output]
Sentence
[/output]
[/test]
[test]
[input]
substring('gashajGAHJGAasghaj', 4, 8)
[/input]
[output]
ajGAHJGA
[/output]
[/test]
[test]
[input]
substring('gasjGAHJAasghaj', 0, 10)
[/input]
[output]
gasjGAHJAa
[/output]
[/test]
[test]
[input]
substring('gasjGA48HJAasghaj', 5, 1)
[/input]
[output]
A
[/output]
[/test]
[test]
[input]
substring('gasjGA48HJAahaj', 5, 5)
[/input]
[output]
A48HJ
[/output]
[/test]
[test]
[input]
substring('jjjasjA48HJAko88/(())haj', 10, 10)
[/input]
[output]
JAko88/(()
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Splitting a String

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/03.JS-Fundamentals-Text-Processing/EN/interactive-js-fundamentals-text-processing-14-splitting-and-finding-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

When we want to separate words in a string, we use the `split()` method.

It divides a **string** into an ordered list using a pattern \(separator\), which is the first parameter and returns an **array**.

We have the option to add a second parameter, which is the **limit**. 

It sets the **limit** of **indexes** in the final **array**.

Here an example of using `split()`:

-  The separator will be a **space**

```js live
let str = 'I love JS';
let divided = str.split(' ');

console.log(divided);
```

## Finding in a String

To find a specific part of a string, we use the `includes()` method. 

This method takes two parameters:

- The string we are searching for
- Position at which to start searching, which is optional

It takes the **string** and searches for it in the main one.

It is similar to `indexOf()`, but if it finds the substring, this method returns `true`, and `false` if it does not. 

`includes()` is case sensitive.

**For example:**

```js live
let text = 'I love JS';

console.log(text.includes('JS'));
console.log(text.includes('js'));
```
[/slide]

[slide hideTitle]
# Repeating in a String

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/03.JS-Fundamentals-Text-Processing/EN/interactive-js-fundamentals-text-processing-15-repeating-strings-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

When we want to **repeat** a **string** in JS, we use `repeat()`. 

That allows us to make a certain number of **copies** of that **string**.

It receives two parameters:

- `string`
- `count`

After it is called on a specific **string**, **repeat** will take the **string** that we gave and it will **multiply** it by the **number** that we pass to it. 

After that, it will **return** a **concatenated string** of all the copies.

Here is an example of how **repeat** works:

```js live
let str = '*';

console.log(str.repeat(5));
```

[/slide]

[slide hideTitle]
# Problem with Solution: Censored Words

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/03.JS-Fundamentals-Text-Processing/EN/interactive-js-fundamentals-text-processing-16-solution-censored-words-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Censored Words" taskId="js-fundamentals-pt2-text-processing-Censored-Words" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function censoredWords(sentence, word){
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
Write a function that receives a **sentence** as a first parameter and a **single word** as a second.

Find all occurrences of that word in the sentence and **replace them** with the corresponding count of "\*".

# Example
  | **Input** | **Output** |
| --- | --- |
| censoredWords('A small sentence with some words', 'small') | A \*\*\*\*\* sentence with some words |



[/task-description]
[code-io /]
[tests]
[test open]
[input]
censoredWords('A small sentence with some words', 'small')
[/input]
[output]
A \*\*\*\*\* sentence with some words
[/output]
[/test]
[test]
[input]
censoredWords('soallsentencewithsomewords', 'so')
[/input]
[output]
\*\*allsentencewith\*\*mewords
[/output]
[/test]
[test]
[input]
censoredWords('pesho gosho stamat pesho', 'pesho')
[/input]
[output]
\*\*\*\*\* gosho stamat \*\*\*\*\*
[/output]
[/test]
[test]
[input]
censoredWords('aa bb aa ca pesho gosho stamat pesho', 'a')
[/input]
[output]
\*\* bb \*\* c\* pesho gosho st\*m\*t pesho
[/output]
[/test]
[test]
[input]
censoredWords('repeat word repeat repeat word word repeat', 'repeat word')
[/input]
[output]
\*\*\*\*\*\*\*\*\*\*\* repeat \*\*\*\*\*\*\*\*\*\*\* word repeat
[/output]
[/test]
[test]
[input]
censoredWords('aaa heyyy a heyyy abv hey abc', 'heyyy')
[/input]
[output]
aaa \*\*\*\*\* a \*\*\*\*\* abv hey abc
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Trimming Strings

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/03.JS-Fundamentals-Text-Processing/EN/interactive-js-fundamentals-text-processing-18-trimming-strings-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

To **remove whitespaces** we use the `trim()` method. 

**Trim** will remove all of the **whitespaces** in a string from both ends.

So that is why we have `trimStart()` and `trimEnd()`. 

If we want to remove the whitespaces only at the **beginning** or the **end**, we can use one of these.

All of these three methods do not affect the value of the original string.

So we will have to assign them to a variable.

Here is an example of using `trim()`:

```js live
let str = '         Some text here              ';

console.log(str.trim());
```

Now let us see how `trimStart()` works with the same string:

```js live
let str = '         Some text here              ';

console.log(str.trimStart());
```

And last but not least - `trimEnd()`:

```js live
let str = '         Some text here              ';

console.log(str.trimEnd());
```

[/slide]

[slide hideTitle]
# Starts With or Ends With

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/03.JS-Fundamentals-Text-Processing/EN/interactive-js-fundamentals-text-processing-19-starts-with-end-with-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

With `startsWith()`, we can check if a string starts with a specific word, that we will pass to the method as a parameter.

**EndsWith** is almost the same. 

The difference between them is that `endsWith()` checks if that string ends with a certain word.

If they find the substring, they will return true, and false if they do not.

**StartsWith** can receive two parameters: 

- The **word** that it searches for in the string
- And **position** from which index to start 
  - this parameter is optional

**EndsWith** also can receive two parameters, but the second one is **length** and it is optional.

If the **second parameter is given**, it will be used as the search' starting index.

Here are some examples of how they work:

```js live
let sentence = 'My name is John';

console.log(sentence.startsWith('My'));
console.log(sentence.startsWith('My', 3));
```

Let us see how `endsWith()` works:

```js live
let sentence = 'My name is John';

console.log(sentence.endsWith('John'));
console.log(sentence.endsWith('John', 10));
```

In both examples, the first **console.log**, will return `true`, but the second one will return `false` because the substring will not be in the searching part. 

[/slide]

[slide hideTitle]
# Padding at the Start and End

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/03.JS-Fundamentals-Text-Processing/EN/interactive-js-fundamentals-text-processing-20-padding-at-the-start-and-end-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

If we want to **add** a string **a certain number of times** at **the beginning** or the **end** of another string, we can use the `padStart()` or `padEnd()` methods.

They will **concatenate the substring**, which is one of the two parameters that we pass to them until they reach the length, which they receive as a parameter as well.

We also need to assign them to a variable because **they will not modify the original string.**

First let us see how `padStart()` works:

```js live
let sentence = 'Hey';
let padded = sentence.padStart(15, 'Hi!');

console.log(padded);
```

And here is and example of `padEnd()`

```js live
let sentence = 'Hello';
let padded = sentence.padEnd(8, 'o');

console.log(padded);
```

[/slide]

[slide hideTitle]
# Problem with Solution: Count String Occurrences

[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/03.JS-Fundamentals-Text-Processing/EN/interactive-js-fundamentals-text-processing-21-solution-count-string-occurences-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Count String Occurrences" taskId="js-fundamentals-pt2-text-processing-Count-String-Occurrences" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function countStringOccurrences(text, str){
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
Write a function that receives a **piece of text** and a **string that you need to search for** in it.

Print all the occurrences of that word in the string.

## Example
  | **Input** | **Output** |
| --- | --- |
| countStringOccurrences('This is a word and it also is a sentence', 'is') | 2 |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
countStringOccurrences('This is a word and it also is a sentence','is')
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
countStringOccurrences('az ti toi tq to nie vie te az az az', 'az')
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
countStringOccurrences('az toi ti toi tq to nie vie te az az az', 'toi')
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
countStringOccurrences('az toi ti toi tq to nie vie az az az', 'te')
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
countStringOccurrences('az toi ti toi tq to nie vie az az az', 'tq')
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
countStringOccurrences('az tq tq tq tq', 'tq')
[/input]
[output]
4
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
[/slide]
