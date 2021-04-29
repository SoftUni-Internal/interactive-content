[slide hideTitle]
# Summary

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/01.JS-Applications-Unit-Testing/EN/interactive-js-apps-unit-testing-22-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- Unit tests check if your code works as expected

- There are a lot of frameworks and assertion libraries that assist in writing unit tests

- You can either test for expected behavior, or for the correct state of a component


- Mocha syntax
    ```js
    describe('title', function () {
        it('title', function () { ... });
    });
    ```

- Mocha test using the built-in assertions library
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

- Chai is an assertions library that adds more ways to check your code for consistency and expected behavior

```js
let assert = require('chai').expect;
describe('ComparingStrings', function() {
    it('The two strings should be equal', function() {
        expect("string1").to.equal("string2");
    });
});
```

- You can install frameworks and libraries **globally**, which makes them available for all your projects

- We looked at two types of development approaches:
    - **Code-first** - writing the code precedes any unit tests
    - **TDD (Test-Driven Development)** - tests are written first, describing the expected behavior, and then the code is based on them

## In the next lesson you will learn:

- Modules

- Types of modules

[/slide]
