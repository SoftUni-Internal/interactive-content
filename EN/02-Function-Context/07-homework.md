# Homework

[slide hideTitle]

# Problem: Company

[code-task title="Company" taskId="js-advanced-function-context-company" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]

```
class Company {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description  

Write a **company** class, which supports the described functionality below.

## `constructor()`


Should have a property `departments`- an empty array

"**AddEmployee**(\{**username**\}, \{**Salary**\}, \{**Position**\}, \{**Department**\})":

This function should add a new employee to the department with the given name.

- If one of the passed parameters is an empty string **""**, **undefined** or **null**, this function should throw an error with the following message:

"**Invalid input!**"

- If salary is **less than 0**, this function should throw an error with the following message:

"**Invalid input!**"

- If the new employee is **hired successfully**, you should **add** him into the **departments array** and return the following message:

"**New employee is hired. Name:** \{**name**\}. **Position:** \{**position**\}"

## `bestDepartment()`

This **function** should **print the department with the highest average salary and its employees**, sorted by their salary by descending and by name in the following format:


"**Best department is:** \{**best department's name**\}
**Average salary:** \{**best department's average salary**\}
\{**employee1**\} \{**salary**\} \{**position**\}
\{**employee2**\} \{**salary**\} \{**position**\}
\{**employee3**\} \{**salary**\} \{**position**\}
..."


## Submission
Submit only your **Company class**.

# Examples

## Input

```js
let c = new Company();
c.addEmployee("Steven", 2000, "engineer",
              "Construction");
c.addEmployee("Peter", 1500, "electrical engineer", 
              "Construction");
c.addEmployee("Sam", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", 
              "Construction");
c.addEmployee("Steven", 1200, "digital marketing manager",
              "Marketing");
c.addEmployee("Peter", 1000, "graphical designer", 
              "Marketing");
c.addEmployee("George", 1350, "HR", "Human resources");

console.log(c.bestDepartment());
```

## Output

```
Best Department is: Construction
Average salary: 1500.00
Stan 2000 architect
Steven 2000 engineer
Peter 1500 electrical engineer
Sam 500 dyer
```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
let Company = result;
let c = new Company();

let actual1 = c.addEmployee("Steven", 2000, "engineer", "Human resources");
let expected1 = "New employee is hired. Name: Steven. Position: engineer";
assert.equal(actual1,expected1);

c.addEmployee("Peter", 1500, "electrical engineer", "Construction");
c.addEmployee("Sam", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Steven", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Peter", 1000, "graphical designer", "Marketing");
c.addEmployee("George", 1350, "HR", "Human resources");

let act = c.bestDepartment();
let exp = "Best Department is: Human resources\nAverage salary: 1675.00\nSteven 2000 engineer\nGeorge 1350 HR";
assert.equal(act,exp);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Company = result;
let c = new Company();

assert.instanceOf(c,Company,"not instance");

c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

let actual = c.bestDepartment();
let expected = "Best Department is: Construction\nAverage salary: 1500.00\nStan 2000 architect\nStanimir 2000 engineer\nPesho 1500 electrical engineer\nSlavi 500 dyer";

assert.equal(actual,expected,"not equal");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Company = result;
let c = new Company();

let fn = ()=\>\{c.addEmployee("Stanimir", -2000, "engineer", "Construction");\};
assert.throw(fn,"Invalid input!");
let fn1 = ()=\>\{c.addEmployee("", 2000, "engineer", "Construction");\};
assert.throw(fn1,"Invalid input!");
let fn2 = ()=\>\{c.addEmployee("A", "", "engineer", "Construction");\};
assert.throw(fn2,"Invalid input!");
let fn3 = ()=\>\{c.addEmployee("A", 2, "", "Construction");\};
assert.throw(fn3,"Invalid input!");
let fn4 = ()=\>\{c.addEmployee("A", 2, "e", "");\};
assert.throw(fn4,"Invalid input!");
let fn5 = ()=\>\{c.addEmployee("A", 2, null, "Construction");\};
assert.throw(fn5,"Invalid input!")
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Company = result;
let c = new Company();

let actual1 = () =\> c.addEmployee("Stanimir", -2000, "engineer", "Human resources");
assert.throw(actual1,"Invalid input!");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Company = result;
let c = new Company();

let actual1 = c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
let expected1 = "New employee is hired. Name: Stanimir. Position: engineer";
assert.equal(actual1,expected1);

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

let act = c.bestDepartment();
let exp = "Best Department is: Human resources\nAverage salary: 1675.00\nStanimir 2000 engineer\nGosho 1350 HR";
assert.equal(act,exp);
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Fibonacci

[code-task title="Fibonacci" taskId="js-advanced-function-context-fibonacci" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]
```

function fibonacci() {
   // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a function that returns the next Fibonacci number, starting from 0, 1. 

Use a **closure** to keep the current number.

## Input
There will be no input.

## Output
The output must be a Fibonacci number and must be **returned** from the function.

# Examples

**Sample execution:**

```js
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
let fibResult = result();

expect(fibResult()).to.equal(1,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(1,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(2,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(3,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(5,'Incorrect Fibonacci number received!');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let fibResult = result();

expect(fibResult()).to.equal(1,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(1,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(2,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(3,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(5,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(8,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(13,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(21,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(34,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(55,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(89,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(144,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(233,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(377,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(610,'Incorrect Fibonacci number received!');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let fibResult = result();

expect(fibResult()).to.equal(1,'Incorrect Fibonacci number received!');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let fibResult = result();

expect(fibResult()).to.equal(1,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(1,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(2,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(3,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(5,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(8,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(13,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(21,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(34,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(55,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(89,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(144,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(233,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(377,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(610,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(987,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(1597,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(2584,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(4181,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(6765,'Incorrect Fibonacci number received!');
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: HEX

[code-task title="HEX" taskId="js-advanced-function-context-hex" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]


```
class Hex {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a Hex class, which supports the described functionality below.

## Functionality

Constructor(`{value}`):

Should have **1** property:
- **value** - number

**Functions**:
- `ValueOf()`:
This function should return the value property of the Hex class.

- `ToString()`:
This function will show its hexidecimal value starting with `0x`.

- `Plus({number})`:
This function should add a number or a Hex object and return a new Hex object.

- `Minus({number})`:
This function should subtract a number or a Hex object and return a new Hex object.

- `Parse({string})`:
Create a parse class method that can parse Hexidecimal numbers and convert them to standard decimal numbers.

## Submission
Submit only your **Hex class**.

# Example
This is an example how the code is **intended to be used**.

## Input

```js
let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
```

## Output

```
0xFF
0xF
true
```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
let Hex = result;
let FF = new Hex(255);
let actual = FF.toString();
let expected = "0xFF";
assert.equal(actual,expected);
assert.equal(FF.valueOf() + 1 , 256);
let a = new Hex(10);
let b = new Hex(5);
let act = a.plus(b).toString();
let exp = "0xF";
assert.equal(act,exp);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Hex = result;
let FF = new Hex(255);
assert.instanceOf(FF,Hex);
assert.equal(FF.valueOf(),255);

let act = FF.toString();
let exp = "0xFF";
assert.equal(act,exp);

assert.isTrue(FF.valueOf() -1  == 254);
let a = new Hex(10);
let b = new Hex(5);
let c = new Hex(155);
let act2 = a.plus(c).toString();
let exp2 = "0xA5";
assert.equal(act2,exp2);
let act3 = a.minus(b).toString();
let exp3 = "0x5";
assert.equal(act3,exp3);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Hex = result;
let h = new Hex(380);
assert.equal(h.valueOf(),380);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Hex = result;
let h = new Hex(380);
assert.equal(h.toString(),"0x17C");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Hex = result;
let h = new Hex(380);
let y = new Hex(18);
let actual = h.plus(y).toString();
let expected = "0x18E";
assert.equal(actual,expected);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Hex = result;
let h = new Hex(380);
let y = new Hex(18);
let actual = h.minus(y);
let expected = new Hex(362);
assert.deepEqual(actual,expected);
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Table

[code-task title="Table" taskId="js-advanced-function-context-table" executionType="tests-execution" executionStrategy="javascript-js-dom-unit-tests" requiresInput] [code-editor language=javascript]

```
function table(){
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Use the provided [resources](https://videos.softuni.org/resources/javascript/javascript-advanced/04-JS-Advanced-Function-Context-Homework-Resources.zip) file to complete this problem. 

**Note: You must complete this task without changing anything in the given HTML file (index.html).**

[image assetsSrc="function-context-07.png" /]

Write the missing JavaScript code to make the **Table** application work as expected.

When you **click** on an item from the table, you should change its **background color** to `#413f5e`. 

```js
<table class="minimalistBlack">
   <thead>_</thead>
   <tbody>
      <tr>
         <td>Eve</td>
         <td>New York</td>
      </tr>
      <tr>
         <td>Nick</td>
         <td>London</td>
      </tr>
      <tr>
         <td>Donald</td>
         <td>Boston</td>
      </tr>
      <tr>
         <td>Ted</td>
         <td>San Diego</td>
      </tr>
   </tbody>
</table>

```

[image assetsSrc="function-context-09.png" /]

If the item you have clicked **already** has a **style** property, you should **remove** it. 

[image assetsSrc="function-context-10.png" /]

If one of the elements is **clicked** and you click **another**, the first element's style property should be **removed** and you should **change** the **background color** of the **newly clicked** item.

[image assetsSrc="function-context-11.png" /]

**Note: You should not change the head of the table, even if it is clicked.**

[/task-description]
[code-io /]
[tests]
[test open]
[input]
document.body.innerHTML = `
\<table class="minimalistBlack"\>
        \<thead\>
            \<tr\>
                \<th\>Name\</th\>
                \<th\>Town\</th\>
            \</tr\>
        \</thead\>
        \<tbody\>
            \<tr\>
                \<td\>Eve\</td\>
                \<td\>New York\</td\>
            \</tr\>
            \<tr\>
                \<td\>Nick\</td\>
                \<td\>London\</td\>
            \</tr\>
            \<tr\>
                \<td\>Donald\</td\>
                \<td\>Boston\</td\>
            \</tr\>
            \<tr\>
                \<td\>Ted\</td\>
                \<td\>San Diego\</td\>
            \</tr\>
        \</tbody\>
    
    \</table\>
`;

result();

let color = "rgb(65, 63, 94)";
let tds = document.querySelectorAll('td');
tds\[3\].click();
assert.equal(tds\[3\].parentNode.style.backgroundColor,color,"1");
tds\[3\].click();
assert.equal(tds\[3\].parentElement.style.backgroundColor,"","2");
tds\[6\].click();
assert.equal(tds\[6\].parentElement.style.backgroundColor,color,"3");
tds\[2\].click();
assert.equal(tds\[2\].parentElement.style.backgroundColor,color,"4");
assert.equal(tds\[6\].parentElement.style.backgroundColor,"","5");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
\<table class="minimalistBlack"\>
        \<thead\>
            \<tr\>
                \<th\>Name\</th\>
                \<th\>Town\</th\>
            \</tr\>
        \</thead\>
        \<tbody\>
            \<tr\>
                \<td\>Eve\</td\>
                \<td\>Sofia\</td\>
            \</tr\>
            \<tr\>
                \<td\>Nick\</td\>
                \<td\>Varna\</td\>
            \</tr\>
            \<tr\>
                \<td\>Didi\</td\>
                \<td\>Ruse\</td\>
            \</tr\>
            \<tr\>
                \<td\>Tedy\</td\>
                \<td\>Varna\</td\>
            \</tr\>
        \</tbody\>
    
    \</table\>
`;

result();

let color = "rgb(65, 63, 94)";
let tds = document.querySelectorAll('td');
tds\[3\].click();
assert.equal(tds\[3\].parentNode.style.backgroundColor,color,"1");
tds\[3\].click();
assert.equal(tds\[3\].parentElement.style.backgroundColor,"","2");
tds\[6\].click();
assert.equal(tds\[6\].parentElement.style.backgroundColor,color,"3");
tds\[2\].click();
assert.equal(tds\[2\].parentElement.style.backgroundColor,color,"4");
assert.equal(tds\[6\].parentElement.style.backgroundColor,"","5");

let ths = document.querySelectorAll('th');
ths\[0\].click();
assert.equal(tds\[6\].parentElement.style.backgroundColor,"","6");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
\<table class="minimalistBlack"\>
        \<thead\>
            \<tr\>
                \<th\>Name\</th\>
                \<th\>Town\</th\>
            \</tr\>
        \</thead\>
        \<tbody\>
            \<tr\>
                \<td\>Eve\</td\>
                \<td\>Sofia\</td\>
            \</tr\>
            \<tr\>
                \<td\>Nick\</td\>
                \<td\>Varna\</td\>
            \</tr\>
            \<tr\>
                \<td\>Didi\</td\>
                \<td\>Ruse\</td\>
            \</tr\>
            \<tr\>
                \<td\>Tedy\</td\>
                \<td\>Varna\</td\>
            \</tr\>
        \</tbody\>
    
    \</table\>
`;

result();

let color = "rgb(65, 63, 94)";
let tds = document.querySelectorAll('td');
tds\[3\].click();
assert.equal(tds\[3\].parentNode.style.backgroundColor,color,"1");
tds\[3\].click();
assert.equal(tds\[3\].parentElement.style.backgroundColor,"","2");


let ths = document.querySelectorAll('th');
ths\[0\].click();
assert.equal(tds\[6\].parentElement.style.backgroundColor,"","6");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
\<table class="minimalistBlack"\>
        \<thead\>
            \<tr\>
                \<th\>Name\</th\>
                \<th\>Town\</th\>
            \</tr\>
        \</thead\>
        \<tbody\>
            \<tr\>
                \<td\>Eve\</td\>
                \<td\>Sofia\</td\>
            \</tr\>
            \<tr\>
                \<td\>Nick\</td\>
                \<td\>Varna\</td\>
            \</tr\>
            \<tr\>
                \<td\>Didi\</td\>
                \<td\>Ruse\</td\>
            \</tr\>
            \<tr\>
                \<td\>Tedy\</td\>
                \<td\>Varna\</td\>
            \</tr\>
        \</tbody\>
    
    \</table\>
`;

result();

let color = "rgb(65, 63, 94)";
let tds = document.querySelectorAll('td');
tds\[0\].click();
tds\[1\].click();
assert.equal(tds\[0\].parentElement.style.backgroundColor,"","1");

let ths = document.querySelectorAll('th');
ths\[0\].click();
assert.equal(tds\[6\].parentElement.style.backgroundColor,"","2");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
\<table class="minimalistBlack"\>
        \<thead\>
            \<tr\>
                \<th\>Name\</th\>
                \<th\>Town\</th\>
            \</tr\>
        \</thead\>
        \<tbody\>
            \<tr\>
                \<td\>Eve\</td\>
                \<td\>Sofia\</td\>
            \</tr\>
            \<tr\>
                \<td\>Nick\</td\>
                \<td\>Varna\</td\>
            \</tr\>
            \<tr\>
                \<td\>Didi\</td\>
                \<td\>Ruse\</td\>
            \</tr\>
            \<tr\>
                \<td\>Tedy\</td\>
                \<td\>Varna\</td\>
            \</tr\>
        \</tbody\>
    
    \</table\>
`;

result();

let color = "rgb(65, 63, 94)";
let tds = document.querySelectorAll('td');
tds\[0\].click();
tds\[1\].click();
assert.equal(tds\[0\].parentElement.style.backgroundColor,"","1");

tds\[2\].click();
assert.equal(tds\[3\].parentElement.style.backgroundColor,color,"2");

let ths = document.querySelectorAll('th');
ths\[0\].click();
assert.equal(tds\[6\].parentElement.style.backgroundColor,"","2");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Next Article

[code-task title="Next Article" taskId="js-advanced-function-context-next-article" executionType="tests-execution" executionStrategy="javascript-js-dom-unit-tests" requiresInput] [code-editor language=javascript]

```
function getArticleGenerator(articles) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description
Write a function that sequentially **displays articles** on a web page when the user **clicks** a button. 

You will receive an **array of strings** that will initialize the program. 

You need to return a function that keeps the initial array in its closure and every time it is called, it takes the first element from the array and displays it on the web page, inside a `div` with ID "**content**". 

If there are no more elements left, your function should do nothing.

## HTML and JavaScript Code
You are given the following **HTML** code:

```js
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <title>Next Article</title>
      <style>
        div{width:600px; text-align: center; 
        font-size: 1.5em} article{border: 2px 
        solid blue; padding: 2em; margin: 1em}
      </style>
      <script 
      src="https://code.jquery.com/jquery-3.1.1.min.js" 
      integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" 
      crossorigin="anonymous"></script>
      <script src="next-article.js"></script>
   </head>
   <body>
      <div id="content"></div>
      <div><button onclick="showNext()">Show Next Article</button></div>
      <script>
         let articles = [
           `Cats are the most popular pet in the 
            United States: There are 88 million 
            pet cats and 74 million dogs.`,
           `A group of cats is called a clowder.`,
           `Cats have over 20 muscles that control 
            their ears.`,
           `A cat has been mayor of Talkeetna, Alaska,
            for 15 years. His name is Stubbs.`,
           `The world's largest cat measured 48.5
            inches long.`
         ];
         let showNext = getArticleGenerator(articles);
      </script>
   </body>
</html>
```

It comes together with the following **JavaScript** code:

`next-article.js`

```js
function getArticleGenerator(articles) {
    // TODO
}
```

Your function will be called automatically, there is **no need** to attach any event listeners.

## Input
You will receive an **array** of strings.

## Output
Return a **function** that displays the array elements on the web page.

# Examples

## Example 1
[image assetsSrc="function-context-12.png" /]

## Example 2
[image assetsSrc="function-context-13.png" /]

## Example 3
[image assetsSrc="function-context-14.png" /]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
document.body.innerHTML = `
<div id="content"></div>
<button>Show Next Article</button>
`;

expect(typeof result).to.equal('function', "Your solution must be a function");
expect(result.length).to.equal(1, "Your function must receive a single parameter - an array of strings");

let articles =[
    "Cats are the most popular pet in the United States: There are 88 million pet cats and 74 million dogs.",
    "A group of cats is called a clowder.",
    "Cats have over 20 muscles that control their ears.",
    "A cat has been mayor of Talkeetna, Alaska, for 15 years. His name is Stubbs.",
    "The world's largest cat measured 48.5 inches long."
];
let showNext = result(articles);
expect(typeof showNext).to.equal('function', "Your solution did not return a function");
expect(showNext.length).to.equal(0, "The returned function should be parameterless");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
<div id="content"></div>
<button>Show Next Article</button>
`;

let articles =[
    "Cats are the most popular pet in the United States: There are 88 million pet cats and 74 million dogs.",
    "A group of cats is called a clowder.",
    "Cats have over 20 muscles that control their ears.",
    "A cat has been mayor of Talkeetna, Alaska, for 15 years. His name is Stubbs.",
    "The world's largest cat measured 48.5 inches long."
];
let showNext = result(Object.assign([], articles));
let contentHolder = $('#content');
expect(contentHolder.text()).to.equal('', "Do not modify the content before the button is clicked");
showNext();
expect(contentHolder.text()).to.contains(articles[0], "First article is missing after click");
showNext();
expect(contentHolder.text()).to.contains(articles[0], "First article is missing after click");
expect(contentHolder.text()).to.contains(articles[1], "Second article is missing after click");
showNext();
showNext();
showNext();
showNext();
expect(contentHolder.find('article').length).to.equal(5, "Empty article added, your function should od nothing when the elements in the array run out\n");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
<div id="content"></div>
<button>Show Next Article</button>
`;

expect(typeof result).to.equal('function', "Your solution must be a function");
expect(result.length).to.equal(1, "Your function must receive a single parameter - an array of strings");

let articles =[
    "Cats are the most popular pet in the United States: There are 88 million pet cats and 74 million dogs.",
    "A group of cats is called a clowder.",
    "Cats have over 20 muscles that control their ears.",
    "A cat has been mayor of Talkeetna, Alaska, for 15 years. His name is Stubbs.",
    "The world's largest cat measured 48.5 inches long.",
    "Add text to be different."
];
let showNext = result(articles);
expect(typeof showNext).to.equal('function', "Your solution did not return a function");
expect(showNext.length).to.equal(0, "The returned function should be parameterless");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
