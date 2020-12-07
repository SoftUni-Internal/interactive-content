[slide]
# For Loop with A step

[vimeo-video]
[stream language="EN" videoId="487119404/67365f350f" default /]
[stream language="RO" videoId="487119404/67365f350f"  /]
[/video-vimeo]

In this section we will get more detail on a particular and very important part of the `for` loop, **namely the step.** 

**The step** is that **part** of the for loop construction that indicates how to increase or decrease the value of its leading variable. 

It is declared last in the skeleton of the for loop. 

Very often, it has a size of 1, in this case, instead of writing `i += 1` or `i -= 1`, we can use the `i++` or `i--` operators.

```js live
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

If we want our step to be **different than 1**, when **increasing**, we use the `i +=` + step size operator.

 With step of 2, the loop would look like this:

```js live
for (let i = 0; i < 10; i += 2) {
  console.log(i);
}
```

We might want to have a **decreasing step** - `i -=` + step size. 

In this case we should pay attention to the end condition to **avoid** an **infinite loop**.

```js live
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
```

[/slide]


[slide]
# Problem: Number Ending with 7

[vimeo-video]
[stream language="EN" videoId="487119426/15f9ad851f" default /]
[stream language="RO" videoId="487119426/15f9ad851f"  /]
[/video-vimeo]


[code-task title="Number Ending with 7" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function numbersEndingWith7 (input) {
   // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Reads a number **n**
* Prints all numbers from **7 to n**, **ending with 7**

# Example
| **Input** | **Output** |
| --- | --- |
|30| 7 |
||17 |
||27 |

[/task-description]
[tests]
[test]
[input]
40
[/input]
[output]
7
17
27
37
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Solution: Number Ending with 7

[vimeo-video]
[stream language="EN" videoId="487119464/39daf17177" default /]
[stream language="RO" videoId="487119464/39daf17177"  /]
[/video-vimeo]

[code-task title="Number Ending with 7" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function numbersEndingWith7 (input) {
   let n = Number(input.shift());

   for (let i = 7; i <= n; i += 10) {
      console.log(i);
   }
}
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Reads a number **n**
* Prints all numbers from **7 to n**, **ending with 7**

# Example
|**Input** | **Output** |
| --- | --- |
|30| 7 |
||17 |
||27 |

[/task-description]
[tests]
[test]
[input]
40
[/input]
[output]
7
17
27
37
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Exam Countdown

[vimeo-video]
[stream language="EN" videoId="487119503/367fcdcc3d" default /]
[stream language="RO" videoId="487119503/367fcdcc3d"  /]
[/video-vimeo]

[code-task title="Exam Countdown" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function examCountdown (days) {
   // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Reads an integer - count of **days before an exam**
* After each day passes, it prints: `{numberOfDaysLeft} days before the exam`
* At the end prints: `The exam has come.`

# Example
| **Input** | **Output** |
| --- | --- |
|3| 3 days before the exam |
||2 days before the exam |
||1 days before the exam |
||The exam has come. |

[/task-description]
[tests]
[test]
[input]
4
[/input]
[output]
4 days before the exam
3 days before the exam
2 days before the exam
1 days before the exam
The exam has come.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Solution: Exam Countdown

[vimeo-video]
[stream language="EN" videoId="487119549/e38e542417" default /]
[stream language="RO" videoId="487119549/e38e542417"  /]
[/video-vimeo]

[code-task title="Exam Countdown" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function examCountdown (input) {
   let days = Number(input.shift());

   for (let i = days; i >= 1; i -= 1) {
      console.log(`${i} days before the exam`);
   }
   
   console.log("The exam has come.");
}
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Reads an integer - count of **days before an exam**
* After each day passes, it prints: `{numberOfDaysLeft} days before the exam`
* At the end prints: `The exam has come.`

# Example
| **Input** | **Output** |
| --- | --- |
|3| 3 days before the exam |
||2 days before the exam |
||1 days before the exam |
||The exam has come. |

[/task-description]
[tests]
[test]
[input]
4
[/input]
[output]
4 days before the exam
3 days before the exam
2 days before the exam
1 days before the exam
The exam has come.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
