[slide]
# While or For Loop?

`while` and `for` loops both **repeat** a block of **code**.

But there are different situations when writing code that require either the first loop, or the other.

When you know **exactly how many times** you want to loop through a block of code, use the `for` loop.
```js live
for (let i = 0; i <= 5; i++) {
    console.log(i);
}
```

It is usually appropriate for loops in which the initialization and increment are single statements and logically related. 

It is more compact than `while` and it keeps the loop control statements together in one place.

But, there could be many **complex** problems where the number of iterations depends in these **situations** and can't be predicated beforehand. 

That means we don't know in advance **how many times** to repeat a loop.

In those situation it is better to use `while` loop.
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

[slide]
# Problem: Odd Number
[code-task title="Odd Number" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function oddNumber(numbers) {
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Reads numbers from the console until it gets an **odd number**
* Prints the **odd** number

# Example
  | **Input** | **Output** |
| --- | --- |
|2| 3 |
|4||
|8| |
|3| |

[/task-description]
[tests]
[test]
[input]
2
4
8
5
[/input]
[output]
5
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Solution: Odd Number
[code-task title="Odd Number" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function oddNumber(numbers) {
  let num = Number(numbers.shift());
  while (num % 2 === 0) {
    num = Number(numbers.shift());
  }
  console.log(num);
}
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Reads numbers from the console until it gets an **odd number**
* Prints the **odd** number
# Example
  | **Input** | **Output** |
| --- | --- |
|2| 3 |
|4||
|8| |
|3| |
[/task-description]
[tests]
[test]
[input]
2
4
8
5
[/input]
[output]
5
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Number Manipulator 
[code-task title="Number Manipulator" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function numberProcessor(input) {
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Reads a number from the console
* Reads the following commands:
* **Add** - Аdds 1 to the number
* **Subtract** - Subtracts 1 from the number
* **END** -  Prints the number and stops the program

# Example
  | **Input** | **Output** |
| --- | --- |
|5| 6 |
|Add||
|END| |
|3| |

[/task-description]
[tests]
[test]
[input]
4
Add
END
[/input]
[output]
5
[/output]
[/test]
[test]
[input]
4
Subtract
END
[/input]
[output]
3
[/output]
[/test]
[test]
[input]
4
Add
Add
Subtract
END
[/input]
[output]
5
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Solution: Number Manipulator
[code-task title="Number Manipulator" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function numberProcessor(input) {
  let num = Number(input.shift());
  let command = input.shift();
  
  while (command !== "END") {
    switch (command) {
      case "Add": 
        num++; 
        break;
      case "Subtract": 
        num--; 
        break;
    }

    command = input.shift();
  }
  console.log(num);
}
```
[/code-editor]
[task-description]
# Description
Write a program, which:

* Reads a number from the console
* Reads the following commands:
* **Add** - Аdds 1 to the number
* **Subtract** - Subtracts 1 from the number
* **END** -  Prints the number and stops the program

# Example
  | **Input** | **Output** |
| --- | --- |
|5| 6 |
|Add||
|END| |
|3| |
[/task-description]
[tests]
[test]
[input]
4
Add
END
[/input]
[output]
5
[/output]
[/test]
[test]
[input]
4
Subtract
END
[/input]
[output]
3
[/output]
[/test]
[test]
[input]
4
Add
Add
Subtract
END
[/input]
[output]
5
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
