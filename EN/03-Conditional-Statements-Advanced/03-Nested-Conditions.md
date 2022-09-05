// sectionId: "Javascript::Programming-Basics::Conditional-Statements-Advanced::Nested-Conditions"

[slide hideTitle]
# Nested Conditions

[video src="https://videos.softuni.org/hls/javascript-basics/03.Conditions-Advanced/02-conditional-statements-advanced-js-13-14-Nested-Conditional-Statements-New-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pretty often the program logic requires the use of `if` or `if-else` statements, which are contained one inside another.  
They are called **nested** `if` or `if-else` statements. 

As implied by the title **"nested"**, these are `if` or `if-else` statements that are placed inside other `if` or `else` statements.

```js
if (condition1) {
    if (condition2) {
        // body; 
    } else {
        // body;
    }
}
```

## Example: Personal Titles
Depending on the age (decimal number) and the gender (**m** / **f**) of a person, print a title: 
- `Mr.`: a man (gender **m**) - 16 or more years old
- `Master`: a boy (gender **m**) - under 16 years
- `Ms.`: a woman (gender **f**) - 16 or more years old
- `Miss`: a girl (gender **f**) -  under 16 years

## Solution: Person Titles
We should note that the **output** of the program **depends on a few things**. 

**First**, we have to check what is the specified **gender** and **then** to check the **age.** 

Respectively, we are going to use **a few** `if-else` blocks. 

These blocks will be **nested**, meaning from **the result** of the first, we are going to **define** which one of the **others** to execute.

The diagram below illustrates the process in detail:

[image assetsSrc="01.Personal-titles-01.jpg" /]

After reading the input data from the console, the following program logic should be executed:

```js live
let input = [14, 'm'];
let age = Number(input[0]);
let gender = input[1];

if (age < 16) {
    if (gender == 'm') {
        console.log('Master');
    } else if (gender == 'f') {
        console.log('Miss');
    }
} else {
    if (gender == 'm') {
        console.log('Mr.');
    } else if (gender == 'f') {
        console.log('Ms.');
    }
}
```

## Deep nesting
Nesting of **more than three conditional statements** inside each other is not considered a good practice.

It **has to be avoided**, mostly through optimization of the structure/the algorithm of the code and/or by using another type of conditional statement.
[/slide]

[slide hideTitle]
# Problem with Solution: Marketplace

[video src="https://videos.softuni.org/hls/javascript-basics/03.Conditions-Advanced/02-conditional-statements-advanced-js-15-16-Problem-and- Solution-Marketplace-solution-TRIM-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


[code-task title="Marketplace" taskId="pb-js-conditional-statements-advanced-Marketplace" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function marketPlace(input) {
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
Create a program, which: 

- Receives a **product type** and a **day type** from the console. 

- Prints the **price**, formatted to 2nd digit, based on the price table below: 

  | Product      | Weekday | Weekend   |
| :---:       |    :----:   |   :---:     |
| Banana      | 2.50       | 2.70 |
| Apple   | 1.30        | 1.60    |
| Kiwi   | 2.20        | 3.00    |


# Example
| **Input** | **Output** |
| --- | --- |
| marketPlace(['Banana', 'Weekday']) | 2.50 |
| marketPlace(['Kiwi', 'Weekend']) | 3.00 |


[/task-description]
[tests]
[test open]
[input]
marketPlace(['Banana', 'Weekday'])
[/input]
[output]
2.50
[/output]
[/test]
[test]
[input]
marketPlace(['Apple', 'Weekend'])
[/input]
[output]
1.60
[/output]
[/test]
[test opne]
[input]
marketPlace(['Kiwi', 'Weekday'])
[/input]
[output]
2.20
[/output]
[/test]
[test]
[input]
marketPlace(['Kiwi', 'Weekend'])
[/input]
[output]
3.00
[/output]
[/test]
[test]
[input]
marketPlace(['Apple', 'Weekday'])
[/input]
[output]
1.30
[/output]
[/test]
[test]
[input]
marketPlace(['Banana', 'Weekend'])
[/input]
[output]
2.70
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]


[slide hideTitle]
# Problem with Solution: Biggest Number of Three

[video src="https://videos.softuni.org/hls/javascript-basics/03.Conditions-Advanced/02-conditional-statements-advanced-js-17-18-Problem-and-Solution-Biggest-number-of-three-solution-TRIM-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Biggest Number of Three" taskId="pb-js-conditional-statements-advanced-Biggest-Number-of-Three" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function biggestNumberOfThree(input) {
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
Create a program, which:

  * Receives **3 numbers** from the console
  * Prints the **greatest** number

# Example
| **Input** | **Output** |
| --- | --- |
| biggestNumberOfThree(['1', '2', '3']) | 3 |
| biggestNumberOfThree(['55', '17', '100']) | 100 |

[/task-description]
[tests]
[test open]
[input]
biggestNumberOfThree(['1', '2', '3'])
[/input]
[output]
3
[/output]
[/test]
[test open]
[input]
biggestNumberOfThree(['55', '17', '100'])
[/input]
[output]
100
[/output]
[/test]
[test]
[input]
biggestNumberOfThree(['-1', '-5', '-9'])
[/input]
[output]
-1
[/output]
[/test]
[test]
[input]
biggestNumberOfThree(['1', '5', '3'])
[/input]
[output]
5
[/output]
[/test]
[test]
[input]
biggestNumberOfThree(['1', '1000000', '3'])
[/input]
[output]
1000000
[/output]
[/test]
[test]
[input]
biggestNumberOfThree(['1000', '5000', '10000000000000000000'])
[/input]
[output]
10000000000000000000
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

