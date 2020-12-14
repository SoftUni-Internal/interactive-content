# Manipulating Strings

[slide]
# Concatenating

[vimeo-video]
[stream language="EN" videoId="489817452/a5c7ddac9c" default /]
[stream language="RO" videoId="489817452/a5c7ddac9c"  /]
[/video-vimeo]

The **concatenation** in JS is done by the **operators**: `+` and `+=` or by the method `concat()`.

**Concat** can also be used to **merge** two arrays. What is specific about it is that it **does not change** the **original string or array**, but returns a new one.

Here is an example of how the operators `+` and `+=` works:

```js live
let sentence = 'Hello' + ', ';
let world = 'John';

sentence += world

console log(sentence)
```

Now let's see how the `concat()` works.

```js live
let greet = 'Hello, ';
let name = 'John';

let concatenated = greet.concat(name);

console.log(concatenated);
```

In the end, we see that both ways will return an **identical string**. That's because `+` and `+=` and the `concat()` method do the same thing but in different ways. 

[/slide]

[slide]
# Searching for Substrings

[vimeo-video]
[stream language="EN" videoId="489817455/1fa425821a" default /]
[stream language="RO" videoId="489817455/1fa425821a"  /]
[/video-vimeo]

To **find** a substring, we can use `indexOf()` or `lastIndexOf()`. These two methods are **case sensitive**, so this means that if we search for a word with a capital letter but type it with a lowercase letter, and if they don't find it at all, they will return `-1`.

Both of them can have up to two parameters:

-  The first one is the word that it searches.
-  The second one is the starting index.

Here is an example of using `indexOf()`

```js live
let str = 'I love JS a lot';

console.log(str.indexOf('JS'));
```

Here `indexOf` returns **7** because this is first index that `JS` appears. 

Now let's try with `js` not `JS`:

```js live
let str = 'I love JS a lot';

console.log(str.indexOf('js')
```
Now it returns `-1` because **indexOf** is case sensitive and does not detect **js** as **JS** 

Let's check `lastIndexOf()`. It is almost the same as **indexOf**, but with the difference that **lastIndexOf** searches for the last appearance. And Let's see how it works:

```js live
let str = 'JS developer';

console.log(str.lastIndexOf('e'));
console.log(str.lastIndexOf('a'));
```

The first `console.log` returns **10**, because this is the index where **e** last appears. And the second returns `-1` because it will not find anything.

[/slide]

[slide]
# Extracting Substrings

[vimeo-video]
[stream language="EN" videoId="489817495/403a2d42fe" default /]
[stream language="RO" videoId="489817495/403a2d42fe"  /]
[/video-vimeo]

To **extract** a substring, we can use `substring()`. This method has two parameters:

-  The first one is the start index.
-  The second one is the end index.

And it will return the part from the **start index** till the **end index**. But if we don't give the **second parameter**, it will return the part between the **start index** and the **end**. **Substring** will not modify the original string, it will return a new one. This means that we need to assign it to a variable to work.

Here are some examples:

```js live
let str = 'Intro to programming';

let subStrOne = str.substring(5, 8)
let subStrTwo = str.substring(5)

console.log(subStrOne);
console.log(subStrTwo);
```
Here **subStrOne** will return **to** because this is the part that is in the range of the start and end index. But **subStrTwo** returns everything from **to** to the end. That is because we did not give it the second parameter, which is the **end** index.


[/slide]

[slide]
# String Operations

[vimeo-video]
[stream language="EN" videoId="489817576/c647cb8ef4" default /]
[stream language="RO" videoId="489817576/c647cb8ef4"  /]
[/video-vimeo]

If we want to change a part of a string directly, we will use `replace()`. Also like `substring()`, `replace()` **will not modify** the original string, it will **return a new one**. That means that we need to assign it to a variable.

**Replace** is a method that needs two parameters:

-  pattern
-  replacement

For the **pattern** part we can use **RegExp** or **string**. And for the **replacement** we can use `function()` or a **string**.

After it matched the pattern, it will change only the first appearance.

Here is an example:

```js live
let str = 'I love JS. JS is my favorite language';
let replacedStr = str.replace('JS', 'JavaScript');

console.log(replacedStr);
```

[/slide]

[slide]
# Problem: Substring

[vimeo-video]
[stream language="EN" videoId="489817604/03cd593d45" default /]
[stream language="RO" videoId="489817604/03cd593d45"  /]
[/video-vimeo]

[code-task title="Problem: Substring" taskId="text-processing-lab-2" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function substring(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
## Description
Write a function that receives **a string and two numbers.**

The numbers will be a starting index and count of elements to substring. 

Print the result.

# Example
  | **Input** | **Output** |
| --- | --- |
|`['ASentance', '1', '8']`| Sentance |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
ASentance
1
8
[/input]
[output]
Sentance
[/output]
[/test]
[test]
[input]
gashajGAHJGAasghaj
4
8
[/input]
[output]
ajGAHJGA
[/output]
[/test]
[test]
[input]
gasjGAHJAasghaj
0
10
[/input]
[output]
gasjGAHJAa
[/output]
[/test]
[test]
[input]
gasjGA48HJAasghaj
5
1
[/input]
[output]
A
[/output]
[/test]
[test]
[input]
gasjGA48HJAahaj
5
5
[/input]
[output]
A48HJ
[/output]
[/test]
[test]
[input]
jjjasjA48HJAko88/(())haj
10
10
[/input]
[output]
JAko88/(()
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Solution: Substring

[vimeo-video]
[stream language="EN" videoId="489816947/090fda2f05" default /]
[stream language="RO" videoId="489816947/090fda2f05"  /]
[/video-vimeo]

[code-task title="Solution: Substring" taskId="text-processing-lab-2-solution" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(index) {
    let word = index[0];
    let index1 = index[1];
    let index2 = index[2];

    let sub = word.substring(index1, index1 + index2)
    console.log(sub)
}
```
[/code-editor]
[task-description]
## Description
Write a function that receives **a string and two numbers.**

The numbers will be a starting index and count of elements to substring. 

Print the result.

# Example
  | **Input** | **Output** |
| --- | --- |
|`['ASentance', '1', '8']`| Sentance |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
ASentance
1
8
[/input]
[output]
Sentance
[/output]
[/test]
[test]
[input]
gashajGAHJGAasghaj
4
8
[/input]
[output]
ajGAHJGA
[/output]
[/test]
[test]
[input]
gasjGAHJAasghaj
0
10
[/input]
[output]
gasjGAHJAa
[/output]
[/test]
[test]
[input]
gasjGA48HJAasghaj
5
1
[/input]
[output]
A
[/output]
[/test]
[test]
[input]
gasjGA48HJAahaj
5
5
[/input]
[output]
A48HJ
[/output]
[/test]
[test]
[input]
jjjasjA48HJAko88/(())haj
10
10
[/input]
[output]
JAko88/(()
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Splitting a String

[vimeo-video]
[stream language="EN" videoId="489816954/24e31211e5" default /]
[stream language="RO" videoId="489816954/24e31211e5"  /]
[/video-vimeo]

When we want to separate words in a string, we use the `split()` method.

It divides a **string** into an ordered list from a **pattern**, which is the first parameter and returns an **array**. We have the option to add a second parameter, which is the **limit**. It sets the **limit** of **indexes** in the final **array**.

Here an example on using `split()`

-  the separator will be **space**

```js live
let str = 'I love JS';
let divided = str.split(' ');

console.log(divided);
```

# Finding in a String

For finding a specific part of a string, we use the method `includes()`.

This method has two parameters:

-  Searching string.
-  Position at which to start searching. This one is optional.

It takes the **string** and searches for it in the main one. It is similar to `indexOf()` but not exactly, after it finds it, this method returns `true` or `false` if not.

**Includes** is also case sensitive.

For example:

```js live
let text = 'I love JS';

console.log(text.includes('JS'));
console.log(text.includes('js'));
```
[/slide]

[slide]
# Repeating in a String

[vimeo-video]
[stream language="EN" videoId="489817061/4454e2aa76" default /]
[stream language="RO" videoId="489817061/4454e2aa76"  /]
[/video-vimeo]

When we want to **repeat** a **string** in JS, we use `repeat()`. That allows us to make a certain number of **copies** of that **string**.

It receives two parameters:

-  String
-  Count

After it is called on a specific **string**, **repeat** will take the **string** that we gave and it will **multiply** it by the **number** that we also pass to it. After that, it will **return** a **concatenated string** of all the copies.

Here is an example on how **repeat** works:

```js live
let str = '*';

console.log(str.repeat(5));
```

[/slide]

[slide]
# Problem: Censored Words

[vimeo-video]
[stream language="EN" videoId="489817109/c566f94bb4" default /]
[stream language="RO" videoId="489817109/c566f94bb4"  /]
[/video-vimeo]

[code-task title="Censored Words" taskId="text-processing-lab-3" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function censoredWords(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
## Description
Write a function that receives a text as a first parameter  and a single word as a second.

Find all occurrences of that word in the text and **replace them** with the corresponding count of `*`.

# Example
  | **Input** | **Output** |
| --- | --- |
|`['A small sentence with some words', 'small']`| A \*\*\*\*\* sentence with some words |



[/task-description]
[code-io /]
[tests]
[test open]
[input]
A small sentence with some words
small
[/input]
[output]
A \*\*\*\*\* sentence with some words
[/output]
[/test]
[test]
[input]
soallsentencewithsomewords
so
[/input]
[output]
\*\*allsentencewith\*\*mewords
[/output]
[/test]
[test]
[input]
pesho gosho stamat pesho
pesho
[/input]
[output]
\*\*\*\*\* gosho stamat \*\*\*\*\*
[/output]
[/test]
[test]
[input]
aa bb aa ca pesho gosho stamat pesho
a
[/input]
[output]
\*\* bb \*\* c\* pesho gosho st\*m\*t pesho
[/output]
[/test]
[test]
[input]
repeat word repeat repeat word word repeat
repeat word
[/input]
[output]
\*\*\*\*\*\*\*\*\*\*\* repeat \*\*\*\*\*\*\*\*\*\*\* word repeat
[/output]
[/test]
[test]
[input]
aaa heyyy a heyyy abv hey abc
heyyy
[/input]
[output]
aaa \*\*\*\*\* a \*\*\*\*\* abv hey abc
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Solution: Censored Words

[vimeo-video]
[stream language="EN" videoId="489817292/f7357145f2" default /]
[stream language="RO" videoId="489817292/f7357145f2"  /]
[/video-vimeo]

[code-task title="Censored Words" taskId="text-processing-lab-3-solution" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function censoredWords(input){

    let text = input[0];
    let word = input[1];

    while (text.indexOf(word) > -1) {
        text = text.replace(word, '*'.repeat(word.length));
    }
    console.log(text);
}
```
[/code-editor]
[task-description]
## Description
Write a function that receives a text as a first parameter  and a single word as a second.

Find all occurrences of that word in the text and **replace them** with the corresponding count of `*`.

# Example
  | **Input** | **Output** |
| --- | --- |
|`['A small sentence with some words', 'small']`| A \*\*\*\*\* sentence with some words |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
A small sentence with some words
small
[/input]
[output]
A \*\*\*\*\* sentence with some words
[/output]
[/test]
[test]
[input]
soallsentencewithsomewords
so
[/input]
[output]
\*\*allsentencewith\*\*mewords
[/output]
[/test]
[test]
[input]
pesho gosho stamat pesho
pesho
[/input]
[output]
\*\*\*\*\* gosho stamat \*\*\*\*\*
[/output]
[/test]
[test]
[input]
aa bb aa ca pesho gosho stamat pesho
a
[/input]
[output]
\*\* bb \*\* c\* pesho gosho st\*m\*t pesho
[/output]
[/test]
[test]
[input]
repeat word repeat repeat word word repeat
repeat word
[/input]
[output]
\*\*\*\*\*\*\*\*\*\*\* repeat \*\*\*\*\*\*\*\*\*\*\* word repeat
[/output]
[/test]
[test]
[input]
aaa heyyy a heyyy abv hey abc
heyyy
[/input]
[output]
aaa \*\*\*\*\* a \*\*\*\*\* abv hey abc
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide]
# Trimming Strings

[vimeo-video]
[stream language="EN" videoId="489817107/ed4fac30e5" default /]
[stream language="RO" videoId="489817107/ed4fac30e5"  /]
[/video-vimeo]

For removing **whitespaces** we use the `trim()` method.

**Trim** will remove all of the **whitespaces** in a string, from both ends.

So that's why we have `trimStart()` and `trimEnd()`. If we want to remove the whitespaces only at the **beginning** or the **end**, we can use one of these.

All of these three methods do not affect the value of the original string. So we will have to assign them to a variable.

Here is and example of using `trim()`:

```js live
let str = '         Some text here              ';

console.log(str.trim());
```

Now let's see how `trimStart()` works with the same string:

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

[slide]
# Starts With or Ends With

[vimeo-video]
[stream language="EN" videoId="489817165/3eb9153a87" default /]
[stream language="RO" videoId="489817165/3eb9153a87"  /]
[/video-vimeo]

With `startsWith()`, we can check if a **string** starts with a **specific word**. That we will pass to the method as a parameter. **EndsWith** it's almost the same. The difference between both is that `endsWith()` checks if that string ends with a **certain word**.

If they found the substring, they will return `true` or `false` if not.

**StartsWith** can receive two parameters:

-  The word that it searches for in the string.
-  And **position** from which index to start. This parameter is optional.

**EndsWith** also can receive two parameters. But the second one is **length** and it's optional again. If given, it will tell from which index to search.

Here are example on how they work:

```js live
let sentence = 'My name is John';

console.log(sentence.startsWith('My'));
console.log(sentence.startsWith('My', 3));
```

Let's see and how `endsWith()` works:

```js live
let sentence = 'My name is John';

console.log(sentence.endsWith('John'));
console.log(sentence.endsWith('John', 10));
```

On the first **console.log**s, they will return **true**, but on the second ones, they will return **false** because the substring won't be in the searching part.

[/slide]

[slide]
# Padding at the Start and End

[vimeo-video]
[stream language="EN" videoId="489817167/90a1d0997d" default /]
[stream language="RO" videoId="489817167/90a1d0997d"  /]
[/video-vimeo]

If we want to **add** a string **a certain number of times** at **the beginning** or the **end** of another string, we can use the `padStart()` or `padEnd()` methods.

They will concatenate the substring, which is one of the two parameters that we pass to them until they reach the length, which is the other parameter that we gave them.

We also need to assign them to a variable because they won't modify the original string.

First let's see how `padStart()` works:

```js live
let sentence = 'My name is John';
let padded = sentence.padStart(2, 'Hi!');

console.log(padded);
```

And here is and example of `endsWith()`

```js live
let sentence = 'My name is John';
let padded = sentence.endStart(3, '.');

console.log(padded);
```

[/slide]

[slide]
# Problem: Count String Occurrences

[vimeo-video]
[stream language="EN" videoId="489817230/bda8e696ff" default /]
[stream language="RO" videoId="489817230/bda8e696ff"  /]
[/video-vimeo]

[code-task title="Count String Occurrences" taskId="text-processing-lab-4" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function countStringOccurrences(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
## Description
Write a function that receives a text and a string that you need to search. 

Print all the occurrences of that word in the string.

# Example
  | **Input** | **Output** |
| --- | --- |
|`['This is a word and it also is a sentence','is']`| 2 |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
This is a word and it also is a sentence
is
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
az ti toi tq to nie vie te az az az
az
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
az toi ti toi tq to nie vie te az az az
toi
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
az toi ti toi tq to nie vie az az az
te
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
az toi ti toi tq to nie vie az az az
tq
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
az tq tq tq tq
tq
[/input]
[output]
4
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
[/slide]

[slide]
# Solution: Count String Occurrences

[vimeo-video]
[stream language="EN" videoId="489817236/3a7e106620" default /]
[stream language="RO" videoId="489817236/3a7e106620"  /]
[/video-vimeo]

[code-task title="Count String Occurrences" taskId="text-processing-lab-4-solution" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function countStringOccurrences(input){

    let sentence = input[0];
    let word = input[1];
    let cWord = '*'.repeat(word.length)
    
    while(sentence.includes(word)){
        sentence = sentence.replace(word, cWord)
    }
    console.log(sentence)
}
```
[/code-editor]
[task-description]
## Description
Write a function that receives a text and a string that you need to search. 

Print all the occurrences of that word in the string.

# Example
  | **Input** | **Output** |
| --- | --- |
|`['This is a word and it also is a sentence','is']`| 2 |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
This is a word and it also is a sentence
is
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
az ti toi tq to nie vie te az az az
az
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
az toi ti toi tq to nie vie te az az az
toi
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
az toi ti toi tq to nie vie az az az
te
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
az toi ti toi tq to nie vie az az az
tq
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
az tq tq tq tq
tq
[/input]
[output]
4
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
[/slide]