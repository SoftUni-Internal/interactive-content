# Installing Mocha and Chai Globally

[slide hideTitle]

# Global Installation

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/01.JS-Applications-Unit-Testing/EN/interactive-js-apps-unit-testing-11-12-13-14-global-installation-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

To install frameworks and libraries globally, use the Windows "CMD" (Command Prompt) or "npm" (Node Package Manager) in Visual Studio Code.

Open an instance of the terminal in Visual Studio Code.

Type in the following commands to install **Mocha** and **Chai** globally:

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

# Node Path Configuration

By default, **Node.js** does not find its globally installed modules.

You need to set the "NODE_PATH" environment variable manually.

Open the Windows "CMD" console.

To set the path use this piece of code for future sessions:

`setx NODE_PATH %AppData%\npm\node_modules`

Use this piece of code to set the path for the current session:

`set NODE_PATH=%AppData%\npm\node_modules`

You may need to restart your IDE after changing the "NODE_PATH".

To load a library, first we need to **require** it, like in the example below.

`const expect = require("chai").expect;`

```js
const expect = require('chai').expect;
describe('Test group #1', function () {
    it('should… when…', function () {
        expect(actual).to.be.equal(expected);
    });
    it('should… when…', function () { … });
});
describe('Test group #2', function () {
    it('should… when…', function () {
        expect(actual).to.be.equal(expected);
    });
});
```

[/slide]

[slide hideTitle]
# Problem with Solution: Sum of Numbers

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/01.JS-Applications-Unit-Testing/EN/interactive-js-apps-unit-testing-15-solution-sum-of-numbers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Sum of Numbers" taskId="js-applications-Unit-Testing-lab-Sum-Of-Numbers" executionType="tests-execution" executionStrategy="javascript-code-against-unit-tests-with-mocha" requiresInput]

[code-editor language=javascript]

```
describe('Sum of numbers', () => {
  // Write your code here
});
```
[/code-editor]
[task-description]
# Description
You are required to submit only the unit tests for the object/function you are testing.  

Write tests to check the functionality of the following code:

```js
function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}
```

In your tests, use a function called `sum()`. 

It should meet the following requirements:
- Take an **array** of **numbers** as an argument
- **Return** the **sum** of the values of **all elements** inside the array

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


