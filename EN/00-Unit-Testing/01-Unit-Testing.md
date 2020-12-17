# Unit Testing

[slide]

# What is Unite Testing?

A unit test is a piece of code that checks whether a certain functionality works as expected.

It also provides the developers with the necessery information as to why and where errors occur in the code.

Let us see an example where we will write our own test before we start using some of the known frameworks.

In the example below we have a simple sorting function `sortNums()`. It sorts the numbers inside an array.

In our test we declare and initialize an array with some numbers. Then we sort the array.

Finally we write an if statement where we check if the array has been sorted as we expected.

Use the `JSON.stringify()` method to convert to a string and compare it with the expected output, which is `[-2,2,4,15]`.

```js live
function sortNums(arr) {
    arr.sort((a,b) => a - b);
}

// Our test
let nums = [2, 15, -2, 4];
sortNums(nums);
if (JSON.stringify(nums) === "[-2,2,4,15]") {
    console.error("They are equal!");
}
```

**Why do we need Unit Testing?**

- Unit tests make it safer and easier to refactor the code by putting tests into place that make sure refactoring occurs without problems and disruption.
- Doing unit tests is essentially doing quality assurance of the code. It shows problems and bugs before the product has an integration test.
- Unit tests make the process of debugging easier.
- Unite tests force better code and design whether you are using C\#, Java, Python, JavaScript, or Php. It means you have a well-defined code with high cohesion.

**Unit Test Structure**

The **AAA** "Arrange-Act-Assert" pattern is almost a standard across the industry. 

It suggests that you should divide your test method into three sections: **arrange**, **act** and **assert**.

Each one of them is only responsible for the part in which they are named after.

In the arrange section we only have code required to setup a specific test. 

Here objects would be created and potentially expectations would be set.

Then there is the **Act**, which should be the invocation of the method being tested. 

And on **Assert** you would simply check whether the expectations were met.

```js
// Arrange all necessary preconditions and inputs
let nums = [2, 15, -2, 4];
// Act on the object or method under test
sortNums(nums);
// Assert that the obtained results are what we expect
if (JSON.stringify(nums) === "[-2,2,4,15]") {
    console.error("They are equal!");
}
```

**Unit Testing Frameworks**

This a list of some of the unit testing frameworks.

JS Unit Testing:
- Mocha
- QUnit
- Unit.js
- Jasmine

Assertion frameworks that perform checks
- Chai
- Assert.js
- Should.js

Mocking frameworks
- Sinon
- JMock
- Mockito
- Moq

[/slide]