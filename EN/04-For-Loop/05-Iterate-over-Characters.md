// sectionId: "Javascript::Programming-Basics::For-Loop::Iterate-Over-Character"

[slide hideTitle]

# Iterating over Characters

[video src="https://videos.softuni.org/hls/javascript-basics/04.For-Loop/EN/JS-basics-for-24-27-iterating-over-characters-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

It is good to know that **for loops** do not only work with numbers.

We can also use **for loops** to iterate over **characters**.

Here is an example of how a loop can pass sequentially through **letters** in the English alphabet:

```js live
function latinLetters(startChar, endChar) {
  let startValue = startChar.charCodeAt(0);
  let endValue = endChar.charCodeAt(0);
  let result = "";
  for (let i = startValue; i <= endValue; i++) {
    result += String.fromCharCode(i) + " ";
  }
  console.log(result);
}
```

# ASCII Table

**ASCII** stands for American Standard Code for Information Interchange.

Computers can only understand numbers, so an **ASCII** code is the numerical representation of a character such as `a` or `@` or an action of some sort.

This is an example part of the table:

| **Dec** | **Hex** | **Char** | **Dec** | **Hex** | **Char** |
| :-----: | :-----: | :------: | :-----: | :-----: | :------: |
|   64    |   40    |    \@    |   96    |   60    |    \`    |
|   65    |   41    |    A     |   97    |   61    |    a     |
|   66    |   42    |    B     |   98    |   62    |    b     |
|   67    |   43    |    C     |   99    |   63    |    c     |
|   68    |   44    |    D     |   100   |   64    |    d     |
|   69    |   45    |    E     |   101   |   65    |    e     |
|   70    |   46    |    F     |   102   |   66    |    f     |
|   71    |   47    |    G     |   103   |   67    |    g     |
|   72    |   48    |    H     |   104   |   68    |    h     |
|   73    |   49    |    I     |   105   |   69    |    i     |
|   74    |   4A    |    J     |   106   |   6A    |    j     |

And here you can check the whole [ASCII Table](http://www.asciitable.com)

The columns that you would most probably use for the purposes of this course are the **decimal** and **character** ones.

For example, the decimal value of the character **'a'** is **97** and the one corresponding to `@` is `64`.

# Character Conversions

Convert an ASCII / Unicode number into a character:

```js live
let letter = String.fromCharCode(65);
console.log(letter);
```

Convert a character to its ASCII / Unicode code:

```js live
let letter = "A";
let asciiValue = letter.charCodeAt(0);
console.log(asciiValue);
```

[/slide]

[slide hideTitle]

# Problem with Solution: Latin Letters

[video src="https://videos.softuni.org/hls/javascript-basics/04.For-Loop/EN/JS-basics-for-29-solution-latin-letters-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Latin Letters" taskId="pb-js-for-loop-Latin-Letters" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function latinLetters(startChar, endChar) {
    // Write your code here...
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

Create a program, which prints all letters in a given range:

- You receive 2 letters: the **beginning** and the **end** of the range
- Print all letters in the given range inclusive

# Example

| **Input**              | **Output** |
| ---------------------- | ---------- |
| latinLetters('a', 'c') | a b c      |
| latinLetters('e', 'h') | e f g h    |

[/task-description]
[tests]
[test]
[input]
latinLetters('d', 'u')
[/input]
[output]
d e f g h i j k l m n o p q r s t u
[/output]
[/test]
[test]
[input]
latinLetters('a', 'd')
[/input]
[output]
a b c d
[/output]
[/test]
[test]
[input]
latinLetters('b', 'p')
[/input]
[output]
b c d e f g h i j k l m n o p
[/output]
[/test]
[test]
[input]
latinLetters('p', 't')
[/input]
[output]
p q r s t
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
