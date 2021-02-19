# Unit Testing with Mocha and Chai

[slide hideTitle]

# What are Mocha and Chai?

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/01.JS-Applications-Unit-Testing/EN/interactive-js-apps-unit-testing-8-9-10-mocha-and-chai-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Mocha** is a feature-rich JavaScript test framework running on Node.js in a browser, making asynchronous testing simple and easy to apply.

Mocha tests run sequentially, allowing for flexible and accurate reporting while mapping uncaught exceptions to the correct test cases. 

It provides common testing functions including, **it**, **describe** and the main function that runs tests.

Mocha is usually used together with **Chai**.

For more information, here is a [link](https://mochajs.org/) to the developer's web page.

```js
describe('title', function () {
    it('title', function () { ... });
});
```

**Chai** is a library of many **assertions**. 

It allows the usage of a lot of different assertions such as `assert.equal`.

Before using **Chai**, we need to import the required module using the following keyword: `require`.

This is done on the first line of code: `let assert = require("chai").assert;`

For more information, you can visit the [developer's](https://www.chaijs.com/api/) web page. 

```js
let assert = require('chai').assert;
describe('pow', function() {
    it('2 raised to power 3 is 8', function() {
        assert.equal(pow(2, 3), 8);
    });
});
```

[/slide]