# Unit Testing

[slide hideTitle]

# What is Unit Testing?

[vimeo-video]
[stream language="EN" videoId="497187486/91a42d34b4" default /]
[stream language="RO" videoId="497187486/91a42d34b4"  /]
[/video-vimeo]

A unit test is a piece of code that checks whether a certain **functionality works as expected.**

It also provides the developers with the **necessary information**, where **errors occur in the code.**

We will write our own **test** before we start using some of the known frameworks.

In the example below, we have a simple sorting function called`sortNums()`. 

It sorts the numbers inside an array.

In our test, we declare and initialize an array with some numbers.

Then we sort the array.

Finally, we write an if statement, where we check if the array has been sorted as expected.

Use the `JSON.stringify()` method to convert to a string and compare it with the expected output - `[-2,2,4,15]`.

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

# Why do we need Unit Testing?

Unit tests make it **safer** and **easier** to refactor the code by writing tests.

This, make sure **refactoring** occurs without problems and disruption.

Doing unit tests is **essentially** doing quality assurance of the code. 

It shows problems and bugs before the product has an integration test.

Unit tests make the process of debugging easier.

They force **better code and design** whether you are using C\#, Java, Python, JavaScript, or Php. 

It means you have a well-defined code with high cohesion.

[/slide]

[slide hideTitle]

# Unit Test Structure

[vimeo-video]
[stream language="EN" videoId="497187562/291e2862b3" default /]
[stream language="RO" videoId="497187562/291e2862b3"  /]
[/video-vimeo]

The **AAA** "Arrange-Act-Assert" pattern is almost a standard across the industry. 

It suggests that you divide your test method into three sections: **arrange**, **act**, and **assert**.

Each one of them is only responsible for the part in which they are named after.

In the arrange section, we only have the code required to set up a specific test. 

Here we create objects and potentially set some expectations.

Then there is the **Act**, which should be the invocation of the method tested. 

And on **Assert**, we would check whether the expectations were met.

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

# Unit Testing Frameworks

This a list of some of the unit testing frameworks.

JS Unit Testing:
- Mocha
- QUnit
- Unit.js
- Jasmine

Assertion frameworks that perform checks.
- Chai
- Assert.js
- Should.js

Mocking frameworks.
- Sinon
- JMock
- Mockito
- Moq

[/slide]