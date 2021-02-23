# Unit Testing

[slide hideTitle]

# What is Unit Testing?

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/01.JS-Applications-Unit-Testing/EN/interactive-js-apps-unit-testing-3-4-5-unit-testing-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Unit tests check whether certain code **functionalities work as expected.**

It also provides developers with the **necessary information**, when **errors occur in the code.**

We will write our own **test** before we start using some of the known frameworks.

In the example below, we have a simple sorting function called `sortNums()`. 

It sorts the numbers inside an array.

In our test, we declare and initialize an array containing numbers. 

Then we sort the array.

Finally, we have an if statement, where we check if the array has been sorted as expected.

Use the `JSON.stringify()` method to convert to a string and compare it with the expected output - \[-2,2,4,15\].

```js live
function sortNums(arr) {
    arr.sort((a,b) => a - b);
}

// Our test
let nums = [2, 15, -2, 4];
sortNums(nums);
if (JSON.stringify(nums) === '[-2,2,4,15]') {
    console.error('They are equal!');
}
```

## Why do we need Unit Testing?

Unit tests make it **safer** and **easier** to refactor our code by writing tests.

Using unit tests increases code reliability.

Doing unit tests is **essentially** doing quality assurance of the code. 

It shows problems and bugs before the product is sent for integration testing. 

Unit tests make the process of debugging easier.

They ensure **better code design** no matter if you are using C\#, Java, Python, JavaScript, Php or any other language. 


[/slide]

[slide hideTitle]

# Unit Test Structure

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/01.JS-Applications-Unit-Testing/EN/interactive-js-apps-unit-testing-6-7-unit-tests-structures-and-frameworks-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **AAA** "Arrange-Act-Assert" pattern is almost a standard across the industry. 

It suggests that you divide your test methods into three sections: **arrange**, **act**, and **assert**. 

Each one of them is only responsible for the part they occupy. 

In the arrange section, we only have the code required to set up a specific test. 

Here we create objects and potentially set some expectations. 

Then there is the **Act** section, which should be the invocation of the tested method. 

And in the **Assert** section, we should check whether the expectations were met. 

```js
// Arrange all necessary preconditions and inputs
let nums = [2, 15, -2, 4];
// Act on the object or method under test
sortNums(nums);
// Assert that the obtained results are what we expect
if (JSON.stringify(nums) === '[-2,2,4,15]') {
    console.error('They are equal!');
}
```

## Unit Testing Frameworks

This a list of some popular unit testing frameworks. 

**JS Unit Testing:**
- Mocha
- QUnit
- Unit.js
- Jasmine

**Assertion frameworks that perform checks:** 
- Chai
- Assert.js
- Should.js

**Mocking frameworks:** 
- Sinon
- JMock
- Mockito
- Moq

[/slide]
