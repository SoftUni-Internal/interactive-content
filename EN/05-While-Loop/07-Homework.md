// sectionId: "Javascript::Programming-Basics::While-Loop::Homework"

# Homework

[slide hideTitle]
# Problem with Solution: Sum Digits


[video src="https://videos.softuni.org/hls/javascript-basics/05.While-Loop/05.PB-JavaScript-While-Loop-27-28-Problem&Solution-Sum-Digits-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]



[code-task title="Sum Digits" taskId="pb-js-while-loop-Sum-Digits" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sumDigits(input) {
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

* Reads a number from the console
* **Sums** the **digits** of a number
* Prints the sum

# Example
  | **Input** | **Output** |
| --- | --- |
|sumDigits(5634)| 18 |

[/task-description]
[tests]
[test]
[input]
sumDigits(123456)
[/input]
[output]
21
[/output]
[/test]
[test]
[input]
sumDigits(489451)
[/input]
[output]
31
[/output]
[/test]
[test]
[input]
sumDigits(8498498)
[/input]
[output]
50
[/output]
[/test]
[test]
[input]
sumDigits(000000)
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
sumDigits(5684915)
[/input]
[output]
38
[/output]
[/test]
[test]
[input]
sumDigits(8)
[/input]
[output]
8
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem with Solution: Favorite Book

[video src="https://videos.softuni.org/hls/javascript-basics/05.While-Loop/05.PB-JavaScript-While-Loop-29-30-Problem&Solution-Favourite-Book-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Favorite Book" taskId="pb-js-while-loop-Favorite-Book" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function favoriteBook(favoditeBook, books) {
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

* Receives a favorite **book's name**
* Receives book names until it reaches the favorite book
* Prints `Invalid book: {book name}` for all invalid books
* Prints `Book found!`, when finds the book and program stops

# Example
| **Input** | **Output** |
| --- | --- |
| favoriteBook('Alice in Wonderland', ['Winnie the Pooh', 'Peter Pan', 'Alice in Wonderland']) | Invalid book: Winnie the Pooh |
||Invalid book: Peter Pan|
||Book found!|

[/task-description]
[tests]
[test]
[input]
favoriteBook('Fav Book', ['Book1', 'Book2', 'Book3', 'Fav Book'])
[/input]
[output]
Invalid book: Book1
Invalid book: Book2
Invalid book: Book3
Book found!
[/output]
[/test]
[test]
[input]
favoriteBook('B', ['Book1', 'Book2', 'B', 'Fav Book'])
[/input]
[output]
Invalid book: Book1
Invalid book: Book2
Book found!
[/output]
[/test]
[test]
[input]
favoriteBook('AB', ['Hello', 'AB', 'B', 'Book'])
[/input]
[output]
Invalid book: Hello
Book found!
[/output]
[/test]
[test]
[input]
favoriteBook('AD', ['SE', 'GFG', 'B', 'RTE', 'AD'])
[/input]
[output]
Invalid book: SE
Invalid book: GFG
Invalid book: B
Invalid book: RTE
Book found!
[/output]
[/test]
[test]
[input]
favoriteBook('AD', ['dfg', 'GFG', 'AD', 'dfg', 'dfg'])
[/input]
[output]
Invalid book: dfg
Invalid book: GFG
Book found!
[/output]
[/test]
[test]
[input]
favoriteBook('RD', ['sdf', 'gfh', 'er', 'RD', 'dfg'])
[/input]
[output]
Invalid book: sdf
Invalid book: gfh
Invalid book: er
Book found!
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Find Min and Max
[code-task title="Find Min and Max" taskId="pb-js-while-loop-Find-Min-And-Max" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function minAndMax(input) {
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

* Receives integers until **END**
* Prints the **biggest** and the **smallest** integer

# Example
  | **Input** | **Output** |
| --- | --- |
| minAndMax(['10', '20', '304', '0', '50', 'END'])| Max number: 304 |
||Min number: 0|


[/task-description]
[tests]
[test]
[input]
minAndMax(['5', '10', '66', '456', '-4', '1', '0', 'END'])
[/input]
[output]
Max number: 456
Min number: -4
[/output]
[/test]
[test]
[input]
minAndMax(['3', '15', '56', '32', '7', '9', 'END'])
[/input]
[output]
Max number: 56
Min number: 3
[/output]
[/test]
[test]
[input]
minAndMax(['-34', '-4', '-12', '-45', 'END'])
[/input]
[output]
Max number: -4
Min number: -45
[/output]
[/test]
[test]
[input]
minAndMax(['0', '1', '4', '5', 'END'])
[/input]
[output]
Max number: 5
Min number: 0
[/output]
[/test]
[test]
[input]
minAndMax(['10', '20', '304', '0', '50', '400', 'END', '1000'])
[/input]
[output]
Max number: 400
Min number: 0
[/output]
[/test]
[test]
[input]
minAndMax(['10', '20', '304', '-5', '50', 'END', '400', '1000'])
[/input]
[output]
Max number: 304
Min number: -5
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Special Number
[code-task title="Special Number" taskId="pb-js-while-loop-Special-Number" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function specialNumber(input) {
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
The special number is a number **divisible by all of its digits** without remainder. 

Create a program, which: 

* Receives a number as a string

* **Prints** `{num} is special`, if the number is special

* Otherwise, prints `{num} is not special`

# Example
| **Input** | **Output** |
| --- | --- |
| specialNumber(23)| 23 is not special |


[/task-description]
[tests]
[test]
[input]
specialNumber(55)
[/input]
[output]
55 is special
[/output]
[/test]
[test]
[input]
specialNumber(22)
[/input]
[output]
22 is special
[/output]
[/test]
[test]
[input]
specialNumber(73)
[/input]
[output]
73 is not special
[/output]
[/test]
[test]
[input]
specialNumber(41)
[/input]
[output]
41 is not special
[/output]
[/test]
[test]
[input]
specialNumber(32)
[/input]
[output]
32 is special
[/output]
[/test]
[test]
[input]
specialNumber(454232)
[/input]
[output]
4545232 is not special
[/output]
[/test]
[test]
[input]
specialNumber(88)
[/input]
[output]
88 is special
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Special Bonus
[code-task title="Special Bonus" taskId="pb-js-while-loop-Special-Bonus" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function specialBonus(n, numbers) {
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

* Reads an **integer** number from the console
* Keeps reading integers until it finds the **same one as the first one**
* When it finds it, it increases the value of the **previous** number **before it** with 100% and prints it

# Example
| **Input** | **Output** |
| --- | --- |
| specialBonus(25, ['20', '30', '25']) | 60 |


[/task-description]
[tests]
[test]
[input]
specialBonus(20, ['5', '5', '20'])
[/input]
[output]
10
[/output]
[/test]
[test]
[input]
specialBonus(20, ['20'])
[/input]
[output]
40
[/output]
[/test]
[test]
[input]
specialBonus(45, ['34', '23', '45456', '45', '23'])
[/input]
[output]
90912
[/output]
[/test]
[test]
[input]
specialBonus(20, ['5675', '5467', '45646', '20', '65756', '2567563'])
[/input]
[output]
91292
[/output]
[/test]
[test]
[input]
specialBonus(1234, ['20', '576', '5675', '25673', '5675', '1234'])
[/input]
[output]
11350
[/output]
[/test]
[test]
[input]
specialBonus(456, ['20', '45', '2353', '345', '56', '456', '23'])
[/input]
[output]
112
[/output]
[/test]
[test]
[input]
specialBonus(11, ['345', '546546756', '11', '456', '456'])
[/input]
[output]
1093093512
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Sequence 2k + 1
[code-task title="Sequence 2k + 1" taskId="pb-js-while-loop-Sequence-2k-1" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sequence(input) {
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

* Reads a number **n** from the console
* Prints a **sequence** of numbers, which are **<= n** and satisfy the following condition:
* Each number is equal to the previous one multiplied by **2** plus **1**

# Example
  | **Input** | **Output** |
| --- | --- |
| sequence(8) | 1 |
||3|
|| 7|
|| |

[/task-description]
[tests]
[test]
[input]
sequence(1)
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
sequence(7)
[/input]
[output]
1
3
7
[/output]
[/test]
[test]
[input]
sequence(100)
[/input]
[output]
1
3
7
15
31
63
[/output]
[/test]
[test]
[input]
sequence(511)
[/input]
[output]
1
3
7
15
31
63
127
255
511
[/output]
[/test]
[test]
[input]
sequence(10000)
[/input]
[output]
1
3
7
15
31
63
127
255
511
1023
2047
4095
8191
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problem: Account Balance
[code-task title="Account Balance" taskId="pb-js-while-loop-Account-Balance" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function accountBalance(input) {
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

* Receives the **amount of money** for each transaction untill `END`
* **Adds** the money to the **balance** and **prints**: `Increase: {money}`, format `money` to the **2nd digit** after the decimal point
* After `END` calculates and **prints** the total balance: `Total: {balance}`, format `balance` to the **2nd digit** after the decimal point

# Example
  | **Input** | **Output** |
| --- | --- |
| accountBalance(['5.51', '69.42', '100', 'END'])| Increase: 5.51 |
||Increase: 69.42|
||Increase: 100.00 |
|| Total: 174.93 |


[/task-description]
[tests]
[test]
[input]
accountBalance(['5.50', '60.23', '100', 'END'])
[/input]
[output]
Increase: 5.50
Increase: 60.23
Increase: 100.00
Total: ‭165.73‬
[/output]
[/test]
[test]
[input]
accountBalance(['69.42', '100', '123', '234', 'END'])
[/input]
[output]
Increase: 69.42
Increase: 100.00
Increase: 123.00
Increase: 234.00
Total: 526.42
[/output]
[/test]
[test]
[input]
accountBalance(['5675', '5675.42', '5675', 'END'])
[/input]
[output]
Increase: 5675.00
Increase: 5675.42
Increase: 5675.00
Total: 17025.42
[/output]
[/test]
[test]
[input]
accountBalance(['45641', '0', '4564', '345', 'END', '465'])
[/input]
[output]
Increase: 45641.00
Increase: 0.00
Increase: 4564.00
Increase: 345.00
Total: 50550.00
[/output]
[/test]
[test]
[input]
accountBalance(['5.51', '345345', '69.42', 'END', 'END'])
[/input]
[output]
Increase: 5.51
Increase: 345345.00
Increase: 69.42
Increase: 100.00
Total: 345519.93
[/output]
[/test]
[test]
[input]
accountBalance(['1', '1', '0.55', '0.457', 'END'])
[/input]
[output]
Increase: 1.00
Increase: 1.00
Increase: 0.55
Increase: 0.46
Total: 3.01
[/output]
[/test]
[test]
[input]
accountBalance(['345', '3.42', '543.3', 'END', '34'])
[/input]
[output]
Increase: 345.00
Increase: 3.42
Increase: 543.30
Total: 891.72
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

