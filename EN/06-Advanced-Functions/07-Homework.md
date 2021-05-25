# Homework

[slide hideTitle]
# Problem: Add
[code-task title="Add" taskId="js-advanced-advanced-functions-homework-add" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]
```
function add(number) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Create a program that keeps a number **inside its context** and **returns** a new function that **adds** a **given** number to the previous one.

## Input

Check the **examples below** to see how your code will be executed.

## Output

Your function should **return** the final result.

## Example 1

| **Input** | **Output** |
| --- | --- |
| `let add5 = solution(5);` | 7 |
| `console.log(add5(2));` | 8 |
| `console.log(add5(3));` |  |

## Example 2
| **Input** | **Output** |
| --- | --- |
| `let add7 = solution(7);` | 9 |
| `console.log(add7(2));` | 10 |
| `console.log(add7(3));` | |


[/task-description]
[code-io /]
[tests]
[test]
[input]
// Acquire console
let add0=result(0);

assert.equal(add0(2), 2, 'Printed wrong value.');
assert.equal(add0(3), 3, 'Printed wrong value.');

let add20000=result(20000);

assert.equal(add20000(2), 20002, 'Printed wrong value.');
assert.equal(add20000(3), 20003, 'Printed wrong value.');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Acquire console
let add5=result(5);

assert.equal(add5(2), 7, 'Printed wrong value.');
assert.equal(add5(3), 8, 'Printed wrong value.');

let add9=result(9);

assert.equal(add9(2), 11, 'Printed wrong value.');
assert.equal(add9(3), 12, 'Printed wrong value.');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Acquire console
let addNegative1=result(-1);

assert.equal(addNegative1(2), 1, 'Printed wrong value.');
assert.equal(addNegative1(3), 2, 'Printed wrong value.');

let addNegative2=result(-2);

assert.equal(addNegative2(2), 0, 'Printed wrong value.');
assert.equal(addNegative2(-3), -5, 'Printed wrong value.');
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Currency Format
[code-task title="Currency Format" taskId="js-advanced-advanced-functions-homework-Currency-Format" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]
```
function currencyFormatter(separator, symb, symbolFirst, value) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Write a **higher-order** function that fixes some of the parameters of another function. 

Your program will receive a function that **takes 4 parameters** and **returns a formatted string** \(a monetary value with a currency symbol\).

Your task is to return another function that only **takes one parameter** and **returns** the **same formatted string**.

You will receive the following **function**:

```js
function currencyFormatter(separator, symbol,
        symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}
```

Set the following parameters to fixed values:

- `separator: ","`

- `symbol: "$"`

- `symbolFirst: true`

The final parameter **value** is the one that the returned function will receive.

## Input

You will receive a **function** parameter.

## Output

You need to **return a function** that takes one parameter - **value**.

# Example

## Input

```js
let dollarFormatter = result(currencyFormatter);
console.log(dollarFormatter(5345));   
console.log(dollarFormatter(3.1429)); 
console.log(dollarFormatter(2.709));  
```

## Output

```
$ 5345,00
$ 3,14
$ 2,71
```

[/task-description]
[code-io /]
[tests]
[test]
[input]
let called = false;

function currencyFormatter(separator, symbol, symbolFirst, value) {
    called = true;
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

let dollarFormatter = result(',', '$', true, currencyFormatter);
expect(typeof dollarFormatter).to.equal('function', "Your solution did not return a function");
expect(dollarFormatter.length).to.equal(1, "The returned function must take exactly one parameter");

let output = dollarFormatter(5345);
expect(called).to.be.equal(true, "Your solution must use the passed in function!\n");
expect(typeof output).to.not.equal('undefined', "The curried function must return a value");
expect(typeof output).to.equal('string', "The curried function must return a formatted string");
expect(output.length).to.be.greaterThan(0, "The curried function returned an empty string");
expect(dollarFormatter(5345)).to.equal('$ 5345,00', "Wrong formatting");
expect(dollarFormatter(3.1429)).to.equal('$ 3,14', "Wrong formatting");
expect(dollarFormatter(2.709)).to.equal('$ 2,71', "Wrong formatting");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect(typeof result).to.equal('function', "Your solution must be a function");
expect(result.length).to.equal(4, "Your function must receive four parameters");

function interceptor(separator, symbol, symbolFirst, value) {
    return [separator, symbol, symbolFirst, value];
}
let intercepted = result(',', '$', true, interceptor);
expect(typeof intercepted).to.equal('function', "Your solution did not return a function");
expect(intercepted.length).to.equal(1, "The returned function must take exactly one parameter");

let [separator, symbol, symbolFirst, value] = intercepted(1);
expect(separator).to.equal(',', "Incorrect separator passed to original function");
expect(symbol).to.equal('$', "Incorrect symbol passed to original function");
expect(symbolFirst).to.equal(true, "Incorrect symbolFirst passed to original function");
expect(value).to.equal(1, "Incorrect value passed to original function");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]




[slide hideTitle]
# Problem: Filter Employees
[code-task title="Filter Employees" taskId="js-advanced-advanced-functions-homework-Filter-Employees" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]


```
function filterEmployees(data, criteria) {
    // Write your solution here
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

Create a program that **filters** the **employees** of your company. 

You should **print the result** in a specific **format**. 

You will receive **2** parameters \("**data**", "**criteria**"\). 

You should **parse** the input, find all **employees** that **fulfill** the criteria and **print these employees**.

## Input

You will receive a **string** with all the employees, and the **criteria** by which you should sort them.

If the criteria is "**all**", print all the employees in the given format.

## Output

The output should be the **printed** to the console.

For more information, check the examples.

# Examples

## Example 1

|**Input**|**Output**|
|---|---|
|filterEmployees('\[\{"id": "1","first_name": "Ardine","last_name": "Bassam","email": "abassam0@cnn.com","gender": "Female"\}, \{"id": "2","first_name": "Kizzee","last_name": "Jost","email": "kjost1@forbes.com","gender": "Female"\}, \{"id": "3","first_name": "Evanne","last_name": "Maldin","email": "emaldin2@hostgator.com","gender": "Male"\}\]', 'gender-Female')|0\. Ardine Bassam - abassam0@cnn.com|
||1\. Kizzee Jost - kjost1@forbes.com|

## Example 2

|**Input**|**Output**|
|---|---|
|filterEmployees('\[\{"id": "1","first_name": "Kaylee","last_name": "Johnson","email": "k0@cnn.com","gender": "Female"\}, \{"id": "2","first_name": "Kizzee","last_name": "Johnson","email": "kjost1@forbes.com","gender": "Female"\}, \{"id": "3","first_name": "Evanne","last_name": "Maldin","email": "emaldin2@hostgator.com","gender": "Male"\}, \{"id": "4","first_name": "Evanne","last_name": "Johnson","email": "ev2@hostgator.com","gender": "Male"\}\]', 'last_name-Johnson')|0\. Kaylee Johnson - k0@cnn.com|
||1\. Kizzee Johnson - kjost1@forbes.com|
||2\. Evanne Johnson - ev2@hostgator.com|

[/task-description]
[code-io /]
[tests]
[test open]
[input]
filterEmployees('\[\{"id": "1","first_name": "Ardine","last_name": "Bassam","email": "abassam0@cnn.com","gender": "Female"\}, \{"id": "2","first_name": "Kizzee","last_name": "Jost","email": "kjost1@forbes.com","gender": "Female"\},\{"id": "3","first_name": "Evanne","last_name": "Maldin","email": "emaldin2@hostgator.com","gender": "Male"\}\]', 'gender-Female')
[/input]
[output]
0\. Ardine Bassam \- abassam0\@cnn\.com
1\. Kizzee Jost \- kjost1\@forbes\.com
[/output]
[/test]
[test open]
[input]
filterEmployees('\[\{"id": "1","first_name": "Kaylee","last_name": "Johnson","email": "k0@cnn.com","gender": "Female"\}, \{"id": "2","first_name": "Kizzee","last_name": "Johnson","email": "kjost1@forbes.com","gender": "Female"\}, \{"id": "3","first_name": "Evanne","last_name": "Maldin","email": "emaldin2@hostgator.com","gender": "Male"\},\{"id": "4","first_name": "Evanne","last_name": "Johnson","email": "ev2@hostgator.com","gender": "Male"\}\]', 'last_name-Johnson')
[/input]
[output]
0\. Kaylee Johnson \- k0\@cnn.com
1\. Kizzee Johnson \- kjost1\@forbes\.com
2\. Evanne Johnson \- ev2\@hostgator\.com
[/output]
[/test]
[test]
[input]
filterEmployees('\[\{"id": "1","first_name": "Kaylee","last_name": "Johnson","email": "k0@cnn.com","gender": "Female"\}, \{"id": "2","first_name": "Kizzee","last_name": "Johnson","email": "kjost1@forbes.com","gender": "Female"\}, \{"id": "3","first_name": "Evanne","last_name": "Maldin","email": "emaldin2@hostgator.com","gender": "Male"\}, \{"id": "4","first_name": "Evanne","last_name": "Johnson","email": "ev2@hostgator.com","gender": "Male"\}\]', 'all')
[/input]
[output]
0\. Kaylee Johnson - k0@cnn.com
1\. Kizzee Johnson - kjost1@forbes.com
2\. Evanne Maldin - emaldin2@hostgator.com
3\. Evanne Johnson - ev2@hostgator.com
[/output]
[/test]
[test]
[input]
filterEmployees('\[\{"id": "1","first_name": "Kaylee","last_name": "Johnson","email": "k0@cnn.com","gender": "Female"\}, \{"id": "2","first_name": "Kizzee","last_name": "Johnson","email": "kjost1@forbes.com","gender": "Female"\}, \{"id": "3","first_name": "Evanne","last_name": "Maldin","email": "emaldin2@hostgator.com","gender": "Male"\}, \{"id": "4","first_name": "Evanne","last_name": "Johnson","email": "ev2@hostgator.com","gender": "Male"\}\]', 'gender-Male')
[/input]
[output]
0\. Evanne Maldin - emaldin2@hostgator.com
1\. Evanne Johnson - ev2@hostgator.com
[/output]
[/test]
[test]
[input]
filterEmployees('\[\{"id": "1","first_name": "Kaylee","last_name": "Johnson","email": "k0@cnn.com","gender": "Female"\}, \{"id": "2","first_name": "Kizzee","last_name": "Johnson","email": "null","gender": "Female"\}, \{"id": "3","first_name": "Evanne","last_name": "Maldin","email": "null","gender": "Male"\}, \{"id": "4","first_name": "Evanne","last_name": "Johnson","email": "ev2@hostgator.com","gender": "Male"\}\]', 'email-null')
[/input]
[output]
0\. Kizzee Johnson - null
1\. Evanne Maldin - null
[/output]
[/test]
[test]
[input]
filterEmployees('\[\{"id": "1","first_name": "Kaylee","last_name": "Johnson","email": "k0@cnn.com","gender": "Female"\}, \{"id": "2","first_name": "Kizzee","last_name": "Johnson","email": "null","gender": "Female"\}, \{"id": "3","first_name": "Evanne","last_name": "Maldin","email": "null","gender": "Male"\}, \{"id": "4","first_name": "Evanne","last_name": "Johnson","email": "ev2@hostgator.com","gender": "Male"\}\]', 'gender-Female')
[/input]
[output]
0\. Kaylee Johnson - k0@cnn.com
1\. Kizzee Johnson - null
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Sort Array
[code-task title="Sort Array" taskId="js-advanced-advanced-functions-homework-Sort-Array" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]

```
function sortArray(data, type) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Write a function that **sorts an array** with **numeric** values in **ascending** or **descending** order, depending on the **argument** that is passed to it. 

You will receive a **numeric array** and a **string** as arguments to the first function in your code. 

- If the second argument is "**asc**", the array should be sorted in **ascending order** \(smallest values first\)

- If it is "**desc**", the array should be sorted in **descending order** \(largest first\)

## Input

You will receive a **numeric array** and a **string** as input parameters. 

## Output

The output should be the **sorted array**.

# Examples

|**Input**|**Output**|
|---|---|
|[14, 7, 17, 6, 8], 'asc'|[6, 7, 8, 14, 17]|
|[14, 7, 17, 6, 8], 'asc'|[6, 7, 8, 14, 17]|

[/task-description]
[code-io /]
[tests]
[test open]
[input]
var inputArray = \[3, 1, 2, 10\];
var sortingMethod = 'asc';
var sortedArray = result(inputArray, sortingMethod);

var expectedArray = \[1, 2, 3, 10\];

expect(sortedArray).to.be.instanceOf(Array, "Return value is not an array.");
expect(sortedArray.length).to.equal(expectedArray.length, "Array didn't match expectations.");
for (var i = 0; i \< sortedArray.length; i++) \{
    expect(sortedArray\[i\]).to.equal(expectedArray\[i\], "Array isn't sorted.");
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var inputArray = \[3, 1, 2, 10, 4, 8, 5, 7, 9, 20, 6\];
var sortingMethod = 'asc';
var sortedArray = result(inputArray, sortingMethod);

var expectedArray = \[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20\];

expect(sortedArray).to.be.instanceOf(Array, "Return value is not an array.");
expect(sortedArray.length).to.equal(expectedArray.length, "Array didn't match expectations.");
for (var i = 0; i \< sortedArray.length; i++) \{
    expect(sortedArray\[i\]).to.equal(expectedArray\[i\], "Array isn't sorted.");
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var inputArray = \[3, 1, 2, 10, 4, 8, 5, 7, 9, 20, 6\];
var sortingMethod = 'desc';
var sortedArray = result(inputArray, sortingMethod);

var expectedArray = \[20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1\];

expect(sortedArray).to.be.instanceOf(Array, "Return value is not an array.");
expect(sortedArray.length).to.equal(expectedArray.length, "Array didn't match expectations.");
for (var i = 0; i \< sortedArray.length; i++) \{
    expect(sortedArray\[i\]).to.equal(expectedArray\[i\], "Array isn't sorted.");
\}
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]



[slide hideTitle]
# Problem: Argument Info
[code-task title="Argument Info" taskId="js-advanced-advanced-functions-homework-Argument-Info" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]

```
function argumentInfo() {
    // Write your code here
}
```
[/code-editor]
[task-description]

# Description

Write a function that displays **information** about the **arguments** which are passed to it (**type** and **value**) and a **summary** about the number of each type in the following format: 

"\{**argument type**\}: \{**argument value**\}"

Print **each** argument description on a **new line**. 

At the end, print a **summary** with counts for each type in **descending order**, each on a new line in the following format:

"\{**type**\} = \{**count**\}"

If two types have the **same count**, use **order of appearance**. 

Do **NOT** print anything for types that do not appear in the list of arguments.

## Input

You will receive a series of arguments **passed** to your function.

## Output

**Print to the console** the **type** and **value** of each argument passed into your function.

# Example

## Input

```js
'cat', 42, function () { console.log('Hello world!'); }
```

## Output

``` js
string: cat
number: 42
function: function () { console.log('Hello world!'); }
string = 1
number = 1
function = 1
```


[/task-description]
[code-io /]
[tests]
[test open]
[input]
// Mock the console
var oldConsole = console.log;
var output = \[\];
console.log = function (input) \{
    output.push(input);
\};
result('cat', 42, function () \{ console.log('Hello world!'); \});

console.log = oldConsole;

var expectedOutput = \[
    'string: cat',
    'number: 42',
    "function: function () \{ console.log('Hello world!'); \}",
    'string = 1',
    'number = 1',
    'function = 1'
\];

expect(output.length).to.equal(expectedOutput.length, "Incorrect number of arguments parsed.");
for (var i = 0; i \< output.length; i++) \{
    var current = output\[i\];
    expect(current).to.contains(expectedOutput\[i\], "Incorrect arguments in output.");
\}
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
// Mock the console
var oldConsole = console.log;
var output = \[\];
console.log = function (input) \{
    output.push(input);
\};
result(\{ name: 'bob'\}, 3.333, 9.999);

console.log = oldConsole;

var expectedOutput = \[
    'object:',
    'number: 3.333',
    'number: 9.999',
    'number = 2',
    'object = 1'
\];

expect(output.length).to.equal(expectedOutput.length, "Incorrect number of arguments parsed.");
for (var i = 0; i \< output.length; i++) \{
    var current = output\[i\];
    expect(current).to.contains(expectedOutput\[i\], "Incorrect number of arguments parsed.");
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Mock the console
var oldConsole = console.log;
var output = \[\];
console.log = function (input) \{
    output.push(input);
\};
result(42);

console.log = oldConsole;

var expectedOutput = \[
    'number: 42',
    'number = 1',
\];

expect(output.length).to.equal(expectedOutput.length, "Incorrect number of arguments parsed.");
for (var i = 0; i \< output.length; i++) \{
    var current = output\[i\];
    expect(current).to.contains(expectedOutput\[i\], "Incorrect number of arguments parsed.");
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Mock the console
var oldConsole = console.log;
var output = \[\];
console.log = function (input) \{
    output.push(input);
\};
result(42, 'cat', \[\], undefined);

console.log = oldConsole;

var expectedOutput = \[
    'number: 42',
    'string: cat',
    'object:',
    'undefined: undefined',
    'number = 1',
    'string = 1',
    'object = 1',
    'undefined = 1'
\];

expect(output.length).to.equal(expectedOutput.length, "Incorrect number of arguments parsed.");
for (var i = 0; i \< output.length; i++) \{
    var current = output\[i\];
    expect(current).to.contains(expectedOutput\[i\], "Incorrect number of arguments parsed.");
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Mock the console
var oldConsole = console.log;
var output = \[\];
console.log = function (input) \{
    output.push(input);
\};
result(42, 15, 'cat');

console.log = oldConsole;

var expectedOutput = \[
    'number: 42',
    'number: 15',
    'string: cat',
    'number = 2',
    'string = 1'
\];

expect(output.length).to.equal(expectedOutput.length, "Incorrect number of arguments parsed.");
for (var i = 0; i \< output.length; i++) \{
    var current = output\[i\];
    expect(current).to.contains(expectedOutput\[i\], "Incorrect number of arguments parsed.");
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Mock the console
var oldConsole = console.log;
var output = \[\];
console.log = function (input) \{
    output.push(input);
\};
result(42, 'cat', 15, 'kitten', 'tomcat');

console.log = oldConsole;

var expectedOutput = \[
    'number: 42',
    'string: cat',
    'number: 15',
    'string: kitten',
    'string: tomcat',
    'string = 3',
    'number = 2'
\];

expect(output.length).to.equal(expectedOutput.length, "Incorrect number of arguments parsed.");
for (var i = 0; i \< output.length; i++) \{
    var current = output\[i\];
    expect(current).to.contains(expectedOutput\[i\], "Incorrect number of arguments parsed.");
\}
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Personal BMI
[code-task title="Personal BMI" taskId="js-advanced-advanced-functions-homework-Personal-BMI" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]

```
function personalBmi(name, age, weight, heightCm) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description

A wellness clinic has contacted you with an offer - they want you to create a program that creates **patient charts** and performs some preliminary evaluation of their condition. 

The data comes in the form of **several arguments**, describing a person - their **name**, **age**, **weight** in kilograms and **height** in centimeters. 

Your program must compose this information into an **object** and **return** it for further processing.

The patient chart object must contain the following properties:

- **name**
  
- **personalInfo** which is an object holding the patient's age, weight, and height as properties
  
- **BMI** \- body mass index

You can find information about how to calculate it [here](https://en.wikipedia.org/wiki/Body_mass_index);
  
- **status**

The status is one of the following:

- **Underweight**, for BMI less than 18.5
  
- **Normal**, for BMI less than 25
  
- **Overweight**, for BMI less than 30
  
- **Obese**, for BMI 30 or more
  
Once the BMI and status are calculated, you can make a recommendation. 

If the patient is obese, add an additional property called recommendation and set it to "**admission required**".


## Input

Your function needs to take four arguments - **name**, **age**, **weight** and **height**.

## Output

Your function needs to **return** an **object with the properties** described earlier. 

All numeric values should be **rounded** to the nearest whole number. 

All fields should be named **exactly as described** \(their order is not important\).

Look at the sample output for more information.

## Example 1

## Input

`'Peter', 29, 75, 182`

## Output

```js
{
    name: 'Peter',
    personalInfo: {
        age: 29,
        weight: 75,
        height: 182
    }
    BMI: 23,
    status: 'normal'
}
```
## Example 2

## Input

`'Adrian', 9, 57, 137`

## Output

```js
{
    name: 'Adrian',
    personalInfo: {
        age: 9,
        weight: 57,
        height: 137
    },
    BMI: 30,
    status: 'obese',
    recommendation: 'admission required'
}
```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
var chart = result('Peter', 29, 75, 182);

expect(chart.name).to.equal('Peter');
expect(chart.personalInfo.age).to.equal(29);
expect(chart.personalInfo.weight).to.equal(75);
expect(chart.personalInfo.height).to.equal(182);
expect(chart.BMI).to.equal(23);
expect(chart.status).to.equal('normal');
expect(chart.recommendation).to.be.undefined;
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
var chart = result('Adrian', 9, 57, 137);

expect(chart.name).to.equal('Adrian');
expect(chart.personalInfo.age).to.equal(9);
expect(chart.personalInfo.weight).to.equal(57);
expect(chart.personalInfo.height).to.equal(137);
expect(chart.BMI).to.equal(30);
expect(chart.status).to.equal('obese');
expect(chart.recommendation).to.equal('admission required');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var chart = result('Ivan', 20, 55, 200);

expect(chart.name).to.equal('Ivan');
expect(chart.personalInfo.age).to.equal(20);
expect(chart.personalInfo.weight).to.equal(55);
expect(chart.personalInfo.height).to.equal(200);
expect(chart.BMI).to.equal(14);
expect(chart.status).to.equal('underweight');
expect(chart.recommendation).to.be.undefined;
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var chart = result('Dragan', 20, 80, 185);

expect(chart.name).to.equal('Dragan');
expect(chart.personalInfo.age).to.equal(20);
expect(chart.personalInfo.weight).to.equal(80);
expect(chart.personalInfo.height).to.equal(185);
expect(chart.BMI).to.equal(23);
expect(chart.status).to.equal('normal');
expect(chart.recommendation).to.be.undefined;
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var chart = result('Petkan', 20, 80, 178);

expect(chart.name).to.equal('Petkan');
expect(chart.personalInfo.age).to.equal(20);
expect(chart.personalInfo.weight).to.equal(80);
expect(chart.personalInfo.height).to.equal(178);
expect(chart.BMI).to.equal(25);
expect(chart.status).to.equal('overweight');
expect(chart.recommendation).to.be.undefined;
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var chart = result('Kotooshu', 33, 152, 203);

expect(chart.name).to.equal('Kotooshu');
expect(chart.personalInfo.age).to.equal(33);
expect(chart.personalInfo.weight).to.equal(152);
expect(chart.personalInfo.height).to.equal(203);
expect(chart.BMI).to.equal(37);
expect(chart.status).to.equal('obese');
expect(chart.recommendation).to.equal('admission required');
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]



[slide hideTitle]
# Problem: Vector Math

[code-task title="Vector Math" taskId="js-advanced-advanced-functions-homework-Vector-Math" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]

```
function vectorMath() {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Write several functions for performing **calculations** with **vectors** in 2D space.

[image assetsSrc="advanced-functions-07.png" /] 

Collect them all in a **single object** \(namespace\), so they do not pollute the global scope. 

Implement the following functions:


- `add(vec1, vec2)`
    - addition of two vectors
  
[image assetsSrc="advanced-functions-08.png" /] 


- `multiply(vec1, scalar)`
    - scalar multiplication 

[image assetsSrc="advanced-functions-09.png" /] 


- `length(vec1)`
    - vector length
  
[image assetsSrc="advanced-functions-10.png" /] 


- `dot(vec1, vec2)` 
    - dot product of two vectors

[image assetsSrc="advanced-functions-11.png" /] 


- `cross(vec1, vec2)`
    - cross product of two vectors

[image assetsSrc="advanced-functions-12.png" /] 

The math-savvy may notice that the given cross product formula results in a scalar, instead of a vector - we are only measuring the length of the resulting vector since cross product is not possible in 2D, it will exist purely in the z-dimension. 

If you do not know what this all means, ignore this paragraph, it is irrelevant to the solution.

## Input

Each separate function in your namespace will be tested with individual values. 

It must expect **one or two arguments**, as described above, and **return** a value.

Vectors will be 2D arrays in the format \[x, y\].

## Output

Your function needs to **return** an **object with the properties** described earlier. 

All numeric values should be **rounded** to the nearest whole number. 

All fields should be named **exactly as described** \(their order is not important\).

Look at the sample output for more information.

# Example

|**Input**|**Output**|**Explanation**|
|---|---|---|
|solution.add([1, 1], [1, 0])|[2, 1]|[1 + 1, 1 + 0] = [2, 1]|
|solution.multiply([3.5, -2], 2)|[7, -4]|[3.5 \* 2, (-2) * 2] = [7, -4]|
|solution.length([3, -4])|5|sqrt(3 \* 3 + (-4) \* (-4)) = 5|
|solution.dot([1, 0], [0, -1])|0|1 \* 0 + 0 \* (-1) = 0|
|solution.cross([3, 7], [1, 0])|-7|3 \* 0 - 7 \* 1 = -7|

[/task-description]
[code-io /]
[tests]
[test open]
[input]
var answer = result.add(\[1, 1\], \[1, 0\]);
var expected = \[2, 1\];
var errorMessage = "Incorrect addition.";

compareVectors(expected, answer);

function compareVectors(vec1, vec2) \{
    expect(vec1\[0\]).to.equal(vec2\[0\], errorMessage);
    expect(vec1\[1\]).to.equal(vec2\[1\], errorMessage);
\}
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
var answer = result.multiply(\[3.5, -2\], 2);
var expected = \[7, -4\];
var errorMessage = "Incorrect multiplication.";

compareVectors(expected, answer);

function compareVectors(vec1, vec2) \{
    expect(vec1\[0\]).to.equal(vec2\[0\], errorMessage);
    expect(vec1\[1\]).to.equal(vec2\[1\], errorMessage);
\}
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
var answer = result.length(\[3, -4\]);
expect(answer).to.equal(5, "Incorrect length");
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
var answer = result.dot(\[1, 0\], \[0, -1\]);
expect(answer).to.equal(0);
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
var answer = result.cross(\[3, 7\], \[1, 0\]);
expect(answer).to.equal(-7);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var answer = result.add(\[5.43, -1\], \[1, 31\]);
var expected = \[6.43, 30\];
var errorMessage = "Incorrect addition.";

compareVectors(expected, answer);

function compareVectors(vec1, vec2) \{
    expect(vec1\[0\]).to.equal(vec2\[0\], errorMessage);
    expect(vec1\[1\]).to.equal(vec2\[1\], errorMessage);
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var answer = result.multiply(\[3.5, -2\], -1);
var expected = \[-3.5, 2\];
var errorMessage = "Incorrect multiplication.";

compareVectors(expected, answer);

function compareVectors(vec1, vec2) \{
    expect(vec1\[0\]).to.equal(vec2\[0\], errorMessage);
    expect(vec1\[1\]).to.equal(vec2\[1\], errorMessage);
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var answer = result.length(\[1, 1\]);
expect(answer).to.equal(Math.sqrt(2), "Incorrect length");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var answer = result.dot(\[2, 3\], \[2, -1\]);
expect(answer).to.equal(1);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var answer = result.cross(\[1, 1\], \[-1, 1\]);
expect(answer).to.equal(2);
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Breakfast Robot
[code-task title="Breakfast Robot" taskId="js-advanced-advanced-functions-homework-Breakfast-Robot" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]

```
function breakfastRobot() {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description

*It is finally the future!*
*Robots take care of everything and man has been freed from the mundane tasks of everyday life.*
*There is still work to be done though since those robots need to be programmed first. We may have robot chefs, but we do not yet have robot software developers.*

Your task is to write the management software for a breakfast chef robot. 

It needs to **take orders**, keep track of available **ingredients**, and output an **error**, if something is wrong. 

The cooking instructions have already been installed, so your module needs to **plug into** the system and only take care of **orders** and **ingredients**. 

Since this is the future and food is printed with nano-particle beams, all ingredients are microelements - **protein**, **carbohydrates**, **fat** and **flavours**. 

The library of recipes includes the following meals:

- **Apple** 
    -  made with **1 carb** and **2 flavour**

- **Lemonade** 
    - made with **10 carb** and **20 flavour**

- **Burger**
    - made with **5 carb**, **7 fat** and **3 flavour**

- **Eggs**
    - made with **5 protein**, **1 fat** and **1 flavour**

- **Turkey**
    - made with **10 protein**, **10 carb**, **10 fat** and **10 flavour**

The robot receives instructions either to **restock** the supply, **cook** a meal, or **report** statistics.

The input consists of one of the following commands:

- `restock <microelement> <quantity>` - increases the stored quantity of the given microelement

- `prepare <recipe> <quantity>` - uses the available ingredients to prepare the given meal

- `report` - returns information about the stored microelements, in the order described below, including zero elements


The robot is equipped with quantum field storage, so it can hold an **unlimited quantity** of ingredients, but there is no guarantee there will be enough available to prepare a recipe, in which case an **error message** should be returned. 

Their availability is checked in the **order** in which they **appear** in the recipe, so the error should reflect the first requirement that was not met.

## Submission

Submit a **closure** that returns the management function. 

The management function takes one parameter.

## Input

Instructions are passed as a string argument to your management function. 

It will be called several times per session, so the internal state must be preserved throughout the entire session.

## Output

The **return** value of each operation is one of the following strings:

- `Success` - when restocking or completing cooking without errors

- `Error: not enough <ingredient> in stock` - when the robot could not muster enough microelements

- `protein={qty} carbohydrate={qty} fat={qty} flavour={qty}` - when a report is requested, in a single string

Look at the sample output for more information.

## Constraints

- Recipes and ingredients in commands will always have valid names.

# Examples

**Sample execution:**
```js
let manager = solution();
manager('restock flavour 50');  
// Success

manager('prepare lemonade 4');  
// Error: not enough carbohydrate in stock
```

## Example 1

|**Input**|**Output**|
|---|---|
|'restock carbohydrate 10'|Success|
|'restock flavour 10'|Success|
|'prepare apple 1'|Success|
|'restock fat 10'|Success|
|'prepare burger 1'|Success|
|'report'|protein=0 carbohydrate=4 fat=3 flavour=5|

## Example 2
|**Input**|**Output**|
|---|---|
|'prepare turkey 1'|Error: not enough protein in stock|
|'restock protein 10'|Success|
|'prepare turkey 1'|Error: not enough carbohydrate in stock|
|'restock carbohydrate 10'|Success|
|'prepare turkey 1'|Error: not enough fat in stock|
|'restock fat 10'|Success|
|'prepare turkey 1'|Error: not enough flavour in stock|
|'restock flavour 10'|Success|
|'prepare turkey 1'|Success|
|'report'|protein=0 carbohydrate=0 fat=0 flavour=0|

[/task-description]
[code-io /]
[tests]
[test open]
[input]
result = result();

let expectationPairs = [
    ['restock flavour 50', 'Success'],
    ['prepare lemonade 4', 'Error: not enough carbohydrate in stock']
];

for (let i = 0; i < expectationPairs.length; i++) {
    let expectation = expectationPairs[i];
    expect(result(expectation[0])).to.equal(expectation[1], \`Order ${expectation[0]} should have resulted in ${expectation[1]}\`);
}
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
result = result();

var expectationPairs = \[
    \['restock carbohydrate 10', 'Success'\],
    \['restock flavour 10', 'Success'\],
    \['prepare apple 1', 'Success'\],
    \['restock fat 10', 'Success'\],
    \['prepare burger 1', 'Success'\],
    \['report', 'protein=0 carbohydrate=4 fat=3 flavour=5'\]
\];

for (let i = 0; i \< expectationPairs.length; i++) \{
    let expectation = expectationPairs\[i\];
    expect(result(expectation\[0\])).to.equal(expectation\[1\], \`Order \\$\{expectation\[0\]\} should have resulted in \\$\{expectation\[1\]\}\`);
\}
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
result = result();

var expectationPairs = \[
    \['prepare turkey 1', 'Error: not enough protein in stock'\],
    \['restock protein 10', 'Success'\],
    \['prepare turkey 1', 'Error: not enough carbohydrate in stock'\],
    \['restock carbohydrate 10', 'Success'\],
    \['prepare turkey 1', 'Error: not enough fat in stock'\],
    \['restock fat 10', 'Success'\],
    \['prepare turkey 1', 'Error: not enough flavour in stock'\],
    \['restock flavour 10', 'Success'\],
    \['prepare turkey 1', 'Success'\],
    \['report', 'protein=0 carbohydrate=0 fat=0 flavour=0'\]
\];

for (let i = 0; i \< expectationPairs.length; i++) \{
    let expectation = expectationPairs\[i\];
    expect(result(expectation\[0\])).to.equal(expectation\[1\], \`Order \\$\{expectation\[0\]\} should have resulted in \\$\{expectation\[1\]\}\`);
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
result = result();

var expectationPairs = \[
    \['restock protein 100', 'Success'\],
    \['restock carbohydrate 100', 'Success'\],
    \['restock fat 100', 'Success'\],
    \['restock flavour 100', 'Success'\],
\];

for (let i = 0; i \< expectationPairs.length; i++) \{
    let expectation = expectationPairs\[i\];
    expect(result(expectation\[0\])).to.equal(expectation\[1\], \`Order \\$\{expectation\[0\]\} should have resulted in \\$\{expectation\[1\]\}\`);
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
result = result();

var expectationPairs = \[
    \['restock protein 100', 'Success'\],
    \['restock carbohydrate 100', 'Success'\],
    \['restock fat 100', 'Success'\],
    \['restock flavour 100', 'Success'\],
    \['report', 'protein=100 carbohydrate=100 fat=100 flavour=100'\]
\];

for (let i = 0; i \< expectationPairs.length; i++) \{
    let expectation = expectationPairs\[i\];
    expect(result(expectation\[0\])).to.equal(expectation\[1\], \`Order \\$\{expectation\[0\]\} should have resulted in \\$\{expectation\[1\]\}\`);
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
result = result();

var expectationPairs = \[
    \['prepare lemonade 4', 'Error: not enough carbohydrate in stock'\]
\];

for (let i = 0; i \< expectationPairs.length; i++) \{
    let expectation = expectationPairs\[i\];
    expect(result(expectation\[0\])).to.equal(expectation\[1\], \`Order \\$\{expectation\[0\]\} should have resulted in \\$\{expectation\[1\]\}\`);
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
result = result();

var expectationPairs = \[
    \['restock protein 100', 'Success'\],
    \['restock carbohydrate 100', 'Success'\],
    \['restock fat 100', 'Success'\],
    \['restock flavour 100', 'Success'\],
    \['report', 'protein=100 carbohydrate=100 fat=100 flavour=100'\],
    \['prepare apple 2', 'Success'\],
    \['report', 'protein=100 carbohydrate=98 fat=100 flavour=96'\],
    \['prepare apple 1', 'Success'\],
    \['report', 'protein=100 carbohydrate=97 fat=100 flavour=94'\]
\];

for (let i = 0; i \< expectationPairs.length; i++) \{
    let expectation = expectationPairs\[i\];
    expect(result(expectation\[0\])).to.equal(expectation\[1\], \`Order \\$\{expectation\[0\]\} should have resulted in \\$\{expectation\[1\]\}\`);
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
result = result();

var expectationPairs = \[
    \['restock protein 100', 'Success'\],
    \['restock carbohydrate 100', 'Success'\],
    \['restock fat 100', 'Success'\],
    \['restock flavour 100', 'Success'\],
    \['report', 'protein=100 carbohydrate=100 fat=100 flavour=100'\],
    \['prepare lemonade 2', 'Success'\],
    \['report', 'protein=100 carbohydrate=80 fat=100 flavour=60'\],
    \['prepare lemonade 1', 'Success'\],
    \['report', 'protein=100 carbohydrate=70 fat=100 flavour=40'\]
\];

for (let i = 0; i \< expectationPairs.length; i++) \{
    let expectation = expectationPairs\[i\];
    expect(result(expectation\[0\])).to.equal(expectation\[1\], \`Order \\$\{expectation\[0\]\} should have resulted in \\$\{expectation\[1\]\}\`);
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
result = result();

var expectationPairs = \[
    \['restock protein 100', 'Success'\],
    \['restock carbohydrate 100', 'Success'\],
    \['restock fat 100', 'Success'\],
    \['restock flavour 100', 'Success'\],
    \['report', 'protein=100 carbohydrate=100 fat=100 flavour=100'\],
    \['prepare burger 2', 'Success'\],
    \['report', 'protein=100 carbohydrate=90 fat=86 flavour=94'\],
    \['prepare burger 1', 'Success'\],
    \['report', 'protein=100 carbohydrate=85 fat=79 flavour=91'\]
\];

for (let i = 0; i \< expectationPairs.length; i++) \{
    let expectation = expectationPairs\[i\];
    expect(result(expectation\[0\])).to.equal(expectation\[1\], \`Order \\$\{expectation\[0\]\} should have resulted in \\$\{expectation\[1\]\}\`);
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
result = result();

var expectationPairs = \[
    \['restock protein 100', 'Success'\],
    \['restock carbohydrate 100', 'Success'\],
    \['restock fat 100', 'Success'\],
    \['restock flavour 100', 'Success'\],
    \['report', 'protein=100 carbohydrate=100 fat=100 flavour=100'\],
    \['prepare eggs 2', 'Success'\],
    \['report', 'protein=90 carbohydrate=100 fat=98 flavour=98'\],
    \['prepare eggs 1', 'Success'\],
    \['report', 'protein=85 carbohydrate=100 fat=97 flavour=97'\]
\];

for (let i = 0; i \< expectationPairs.length; i++) \{
    let expectation = expectationPairs\[i\];
    expect(result(expectation\[0\])).to.equal(expectation\[1\], \`Order \\$\{expectation\[0\]\} should have resulted in \\$\{expectation\[1\]\}\`);
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
result = result();

var expectationPairs = \[
    \['restock protein 100', 'Success'\],
    \['restock carbohydrate 100', 'Success'\],
    \['restock fat 100', 'Success'\],
    \['restock flavour 100', 'Success'\],
    \['report', 'protein=100 carbohydrate=100 fat=100 flavour=100'\],
    \['prepare turkey 2', 'Success'\],
    \['report', 'protein=80 carbohydrate=80 fat=80 flavour=80'\],
    \['prepare turkey 1', 'Success'\],
    \['report', 'protein=70 carbohydrate=70 fat=70 flavour=70'\]
\];

for (let i = 0; i \< expectationPairs.length; i++) \{
    let expectation = expectationPairs\[i\];
    expect(result(expectation\[0\])).to.equal(expectation\[1\], \`Order \\$\{expectation\[0\]\} should have resulted in \\$\{expectation\[1\]\}\`);
\}
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
