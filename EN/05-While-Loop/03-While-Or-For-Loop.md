// sectionId: "Javascript::Programming-Basics::While-Loop::While-Or-For-Loop"

[slide hideTitle]
# While or For Loop?

[video src="https://videos.softuni.org/hls/javascript-basics/05.While-Loop/05.PB-JavaScript-While-Loop-15-16-While-or-for-loop-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


"**While**" and "**for**" loops both **repeat** a block of **code**.

But there are different situations when writing code that require either using the **for-loop** or the **while-loop**.

When you know **exactly how many times** you want to loop through a block of code, use the **for-loop**.
```js live
for (let i = 0; i <= 5; i++) {
    console.log(i);
}
```

It is usually appropriate **for-loops** in which the initialization and increment are single statements and logically related. 

It is more compact than "**while**" and it keeps the loop control statements together in one place.

But, there could be many **complex** problems where the number of iterations depends on these **situations** and can not be predicted. 

That means we don't know in advance **how many times** to repeat a loop.

In those situation it is better to use **while-loop**.
```js
let command = input.shift();
let number = Number(input.shift());
while (command != "End") {
    switch (command) {
        case "Add":
            number += 1;
            break;
        case "Subtract":
            number -= 1;
            break;
    }

    command = input.shift();
}

console.log(number);
```
[/slide]

[slide hideTitle]
# Problem with Solution: Odd Number

[video src="https://videos.softuni.org/hls/javascript-basics/05.While-Loop/05.PB-JavaScript-While-Loop-18-Solution-Odd-Number-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


[code-task title="Odd Number" taskId="pb-js-while-loop-Odd-Number" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function oddNumber(numbers) {
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
Create a program, which prints the **first** odd number in a given sequence:

* You will receive the numbers from the console
* Print the first **odd** number you encounter

# Example
  | **Input** | **Output** |
| --- | --- |
| oddNumber(['2', '4', '8', '3']) | 3 |
| oddNumber(['7', '32', '6', '12'])| 7 |

[/task-description]
[tests]
[test]
[input]
oddNumber(['2', '4', '8', '5'])
[/input]
[output]
5
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

