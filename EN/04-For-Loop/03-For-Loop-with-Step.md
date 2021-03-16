// sectionId: "Javascript::Programming-Basics::For-Loop::For-Loop-With-Step"

[slide hideTitle]

# For-Loop with a Step

[video src="https://videos.softuni.org/hls/javascript-basics/04.For-Loop/EN/JS-basics-for-18-19-loops-with-a-step-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In this section, we will get familiar with a particular and very important part of the **for-loop**, **namely the step.**

**The step** is that **part** of the for loop construction that indicates how to increase or decrease the value of its leading variable.

It is declared last in the skeleton of the for a loop.

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

In this case, we should pay attention to the end condition to **avoid** an **infinite loop**.

```js live
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
```

[/slide]

[slide hideTitle]

# Problem With Solution: Number Ending with 7

[video src="https://videos.softuni.org/hls/javascript-basics/04.For-Loop/EN/JS-basics-for-21-solution-numbers-ending-in-7-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Number Ending with 7" taskId="pb-js-for-loop-Number-Ending-with-7" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function numbersEndingWith7(n) {
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

Create a program, which prints all the numbers, ending with 7, up to a given number **n**:

- You will receive a number **n**
- Print all the required numbers from **7 to n**

# Example

| **Input**              | **Output** |
| ---------------------- | ---------- |
| numbersEndingWith7(30) | 7          |
|                        | 17         |
|                        | 27         |


[/task-description]
[tests]
[test open]
[input]
numbersEndingWith7(30)
[/input]
[output]
7
17
27
[/output]
[/test]
[test]
[input]
numbersEndingWith7(40)
[/input]
[output]
7
17
27
37
[/output]
[/test]
[test]
[input]
numbersEndingWith7(35)
[/input]
[output]
7
17
27
[/output]
[/test]
[test]
[input]
numbersEndingWith7(80)
[/input]
[output]
7
17
27
37
47
57
67
77
[/output]
[/test]
[test]
[input]
numbersEndingWith7(130)
[/input]
[output]
7
17
27
37
47
57
67
77
87
97
107
117
127
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]

# Problem with Solution: Exam Countdown

[video src="https://videos.softuni.org/hls/javascript-basics/04.For-Loop/EN/JS-basics-for-23-solution-exam-countdown-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Exam Countdown" taskId="pb-js-for-loop-Exam-Countdown" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function examCountdown(days) {
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

Create a program, which counts down the days before an exam:

- You will receive an integer - number of **days before an exam**
- After each day, print: "\{**numberOfDaysLeft**\} days before the exam"
- At the end, print: "**The exam has come.**"

# Example

| **Input**        | **Output**             |
| ---------------- | ---------------------- |
| examCountdown(3) | 3 days before the exam |
|                  | 2 days before the exam |
|                  | 1 days before the exam |
|                  | The exam has come.     |


[/task-description]
[tests]
[test open]
[input]
examCountdown(3)
[/input]
[output]
3 days before the exam
2 days before the exam
1 days before the exam
The exam has come.
[/output]
[/test]
[test]
[input]
examCountdown(4)
[/input]
[output]
4 days before the exam
3 days before the exam
2 days before the exam
1 days before the exam
The exam has come.
[/output]
[/test]
[test]
[input]
examCountdown(5)
[/input]
[output]
5 days before the exam
4 days before the exam
3 days before the exam
2 days before the exam
1 days before the exam
The exam has come.
[/output]
[/test]
[test]
[input]
examCountdown(6)
[/input]
[output]
6 days before the exam
5 days before the exam
4 days before the exam
3 days before the exam
2 days before the exam
1 days before the exam
The exam has come.
[/output]
[/test]
[test]
[input]
examCountdown(7)
[/input]
[output]
7 days before the exam
6 days before the exam
5 days before the exam
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
