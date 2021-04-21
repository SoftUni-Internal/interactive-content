# Unit Testing with Mocha and Chai

[slide hideTitle]

# What are Mocha and Chai?

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/01.JS-Applications-Unit-Testing/EN/interactive-js-apps-unit-testing-8-9-10-mocha-and-chai-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Mocha** is a feature-rich JavaScript test framework that runs on Node.js or in the browser, making asynchronous testing simple and easy to do.

Mocha tests run sequentially, allowing for flexible and accurate reporting while mapping uncaught exceptions to the correct test cases. 

Mocha provides common testing functions including, **it**, **describe** and the main function that runs tests.

Mocha is usually used together with **Chai**.


This is the syntax of a Mocha unit test:

```js
describe('title', function () {
    it('title', function () { ... });
});
```

Mocha utilizes several hooks to run tests:

describe(): used for grouping the contents of the test, can;
it(): It's the test case;
before(): It's a hook to run before the first it() or describe();
beforeEach(): It’s a hook to run before each it() or describe();
after(): It’s a hook to run after it() or describe();
afterEach(): It’s a hook to run after each it() or describe();


| **Name**  | **Description** |
| --- | --- |
| describe() | Used for grouping the contents of the unit test, you can nest describe() hooks. |
| it() | Contains a single test case. |
| before() | Runs once before each the first it() hook in a given describe() |
| beforeEach() | Runs each time before each it() hook |
| after() | Runs after the first it() hook |
| afterEach() | Runs after each it() hook |


Let us see an example with the built-in assertions library, and two tests grouped together

```js
var assert = require('assert');

// Creating a test group called "MathOperations"
describe('MathOperations', function() {
    // First test describing what we are testing
    it('Multiplying 2*2 should equal 4', function(){
      assert.equal(4, 2*2);
    });
    // Second test
    it('(0+2)*2 should be equal to 4', function(){
      assert.equal(4, (0+2)*2);
    });
});
```



Here is a [link](https://www.mochajs.org/) to the Mocha.Js documentation. 


**Chai** is a an **assertions** library that can be paired with any JavaScript testing framework.

It allows the usage of a lot of different assertions such as `assert.equal`, `asset.typeOf`, `assert.lengthOf`.

Before using **Chai**, we need to import the required module using the following keyword: `require`.

This is done on the first line of code: `let assert = require("chai").assert;`


```js
let assert = require('chai').assert;
describe('pow', function() {
    it('2 raised to power 3 is 8', function() {
        assert.equal(pow(2, 3), 8);
    });
});
```

Here are some assertions that are available in the Chai library:

| **Assertion**  | **Description** |
| --- | --- |
| assert.equal(actual, expected) | Compare using `==` (e.g. 2 would be considered equal to "2") |
| assert.strictEqual(actual, expected) | Compare using `===` (e.g. 2 is not equal to "2" as they are of different types) |
| assert.deepEqual(actual, expected) | Asserts that the `actual` is deeply equal to `expected`. Used for objects, when you want to compare every value of every property|
| assert.typeOf(value, name) | Checks if the given value of of the specified type.|
| assert.isTrue(value) | Checks if the given value is `true`, you can also use isNull(), isNotNull, isUndefined(), isDefined(), isFunction(), isObject(), isArray(), isString(), isNumber(), isBoolean() |


You can and usually should attach a message to any assertion you are doing. 

You can add an additional message parameter to any of the assertions like this: `assert.typeOf(null, 'null', 'This is of type null')`.


Here is a [link](https://www.chaijs.com/api/assert) to the Chai.JS documentation.


[/slide]
