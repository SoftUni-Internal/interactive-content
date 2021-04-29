# Unit Testing

[slide hideTitle]

# What is Unit Testing?

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/01.JS-Applications-Unit-Testing/EN/interactive-js-apps-unit-testing-3-4-5-unit-testing-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


There are different types of testing such as Unit Testing, Integration Testing, Acceptance Testing, End-to-End Testing, and more.

Developers test their code by writing unit tests. 

They are called unit tests because they are used for testing parts of the applications (units) by instantiating a small portion of the application and verifying its behavior independently from other parts. 

Unit tests check whether certain code **functionalities work as expected.**

It also provides developers with the **necessary information** when **errors occur in the code.**

We will write our own **test** before we start using some of the known frameworks.


```js live
function sortNums(arr) {
    arr.sort((a, b) => a - b);
}

// Our test
let nums = [2, 15, -2, 4];
sortNums(nums);
if (JSON.stringify(nums) === '[-2,2,4,15]') {
    console.error('They are equal!');
}
```

In the example above, we have a simple sorting function called `sortNums()`. 

It sorts the numbers inside an array.

In our test, we declare and initialize an array that contains numbers. 

Then we sort the array.

Finally, we have an **if** statement, where we check if the array has been sorted as expected.

We use the `JSON.stringify()` method to convert the array to a string and compare it with the expected output - \[-2,2,4,15\].


## Why do we need Unit Testing?

Writing unit tests will force you to refactor code that is not well-structured and help you improve your code.

This is because poorly structured code will be difficult or impossible to test.

Using unit tests increases code reliability.

Doing unit tests is **essentially** doing quality assurance of the code. 

It shows problems and bugs before the product is sent for integration testing. 

Unit tests make the process of debugging easier.

They ensure **better code design** regardless of the programming language you are using.

The best thing about writing unit tests is that it makes developers write their code with testability in mind.

When the code is testable, that typically makes it easier to read, loosely coupled, and reusable.

[/slide]

[slide hideTitle]

# Unit Test Structure

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/01.JS-Applications-Unit-Testing/EN/interactive-js-apps-unit-testing-6-7-unit-tests-structures-and-frameworks-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Arrange/Act/Assert (AAA)** is a pattern for arranging and formatting code in Unit Test methods.

Each unit test is divided into three sections: **arrange**, **act**, and **assert**. 

The **arrange** section contains the code necessary for setting up the test. 

Here we create objects and potentially set some expected behaviors or state values. 

The next section is the **Act** section, where we invoke the method that is being tested.

In the **Assert** section, we check for the expected behavior or state.

If the expectations set in the **assert** part of the unit test are not met, the test fails, otherwise, the test passes successfully.

Let us see it in practice:

```js
// Arrange all necessary preconditions and inputs
let nums = [2, 15, -2, 4];
// Act on the object or the method under test
sortNums(nums);
// Assert that the obtained results are what we expect
if (JSON.stringify(nums) === '[-2,2,4,15]') {
    console.error('They are equal!');
}
```

There are two main categories of unit tests:
- **state-based** - testing if the resulting state of the system is correct
- **interaction-based** - testing if certain methods are correctly invoked

## Unit Testing Frameworks

This a list of some popular unit testing frameworks. 

**JS Unit Testing:**


| **Framework**  | **Description** |
| --- | --- |
| Mocha  | A feature-rich JavaScript test framework running on Node.js and in the browser for asynchronous testing |
| QUnit  | A powerful, easy-to-use JavaScript unit test suite. Tests can be run anywhere |
| Unit.js  | An assertion library for Javascript, running on Node.js and the browser. It works with any test runner and unit testing framework |
| Jasmine  | A behavior-driven development framework that works out of the box with no dependencies needed for it to work |


**Assertion libraries used in combination with unit testing frameworks:** 

| **Name**  | **Description** |
| --- | --- |
| Chai | An assertion library for node and the browser that can be paired with any JavaScript testing framework |
| Assert.js | A run-time type assertion library for JavaScript |
| Should.js | Compatible with any unit testing framework. It keeps your test code clean, easy to understand, and your error messages helpful. |


**Mocking frameworks:** 

Mocking is used when the code you are testing has external dependencies that are needed for it to run. 

This is where mocking frameworks come into play.

Some of the most popular ones are:

- Sinon
- JMock
- Mockito
- Moq

[/slide]
