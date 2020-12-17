# Installing Mocha And Chai Globally

[slide]

# Global Installation

To install frameworks and libraries globally, use the Windows "CMD" or Visual Studio Code "npm".

Open an instance of the terminal in Visual Studio Code.

Type in the following commands to instal **Mocha** and **Chai** globally:

```js
npm install -g mocha
```

```js
npm install -g chai
```

Check if Mocha is installed.

```js
mocha --version
```

**Node Path Configuration**

By default "Node.js" does not find its globally installed modules.

You need to set the "NODE_PATH" environment variable manually.

Open the Windows "CMD" console.

To set the path use this peace of code for any future sessions.

`setx NODE_PATH %AppData%\npm\node_modules`

Use this peace of code to set the path for the current session.

`set NODE_PATH=%AppData%\npm\node_modules`

You may need to restart your IDE after changing the "NODE_PATH".

To load a library first we need to **require** it like in the example below.

`const expect = require("chai").expect;`

```js
const expect = require("chai").expect;
describe("Test group #1", function () {
    it("should… when…", function () {
        expect(actual).to.be.equal(expected);
    });
    it("should… when…", function () { … });
});
describe("Test group #2", function () {
    it("should… when…", function () {
        expect(actual).to.be.equal(expected);
    });
});
```

[/slide]

[slide]
# Problem: Sum Of Numbers
[code-task title="Problem: Sum Of Numbers" taskId="8a146d85-e504-48a4-8331-5a594f4f988b" executionType="tests-execution" executionStrategy="" requiresInput]
[code-editor language=javascript]

```js
function solve(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
## Description

Write tests to check the functionality of the following code:

```js
function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}
```

Your tests will be supplied with a function named `sum()`. 

It should meet the following requirements:
- Take an array of numbers as argument.
- Return the sum of the values of all elements inside the array.

# Examples

## Examples

[/task-description]
[code-io /]
[tests]
[test]
[input]
//\<minTestCount\>3\</minTestCount\> - specifies the minimum amount of tests your code should have.
let sum = function(arr)\{\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
sum = function(arr) \{
    let sum = 0;
    for (let num of arr)
        sum += Number(num);
    return sum;
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
sum = function(arr) \{
    let sum = "0";
    for (let num of arr)
        sum += Number(num);
    return sum;
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
sum = function(arr) \{
    let sum = 0;
    for (let i = 0; i \< arr.length - 1; i++)
        sum += Number(arr\[i\]);
    return sum;
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Solution: Sum Of Numbers
[code-task title="Solution: Sum Of Numbers" taskId="8a146d85-e504-48a4-8331-5a594f4f988b" executionType="tests-execution" executionStrategy="" requiresInput]
[code-editor language=javascript]

```js
describe('sum', function() {
    it('test with string, returns NaN', function () {
        let actual = sum('abc');
        expect(actual).to.be.NaN;
    });
    it('test with array of str, returns number', function() {
        let expected = sum(['1','2']);
        expect(expected).to.equal(3, 'papameter in not array of numbers');
    });
    it('expect sum ([1,2.3] to be 6)', function() {
        let expected = 6;
        let actual = sum([1,2,3]);
        expect(actual).to.equal(expected);
    })
});
```
[/code-editor]
[task-description]
## Description

Write tests to check the functionality of the following code:

```js
function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}
```

Your tests will be supplied with a function named `sum()`. 

It should meet the following requirements:
- Take an array of numbers as argument.
- Return the sum of the values of all elements inside the array.

# Examples

## Examples

[/task-description]
[code-io /]
[tests]
[test]
[input]
//\<minTestCount\>3\</minTestCount\> - specifies the minimum amount of tests your code should have.
let sum = function(arr)\{\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
sum = function(arr) \{
    let sum = 0;
    for (let num of arr)
        sum += Number(num);
    return sum;
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
sum = function(arr) \{
    let sum = "0";
    for (let num of arr)
        sum += Number(num);
    return sum;
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
sum = function(arr) \{
    let sum = 0;
    for (let i = 0; i \< arr.length - 1; i++)
        sum += Number(arr\[i\]);
    return sum;
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]