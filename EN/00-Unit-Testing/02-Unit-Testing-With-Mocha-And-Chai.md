# Unit Testing With Mocha And Chai

[slide]

# What is Mocha and Chai?

[vimeo-video]
[stream language="EN" videoId="497187597/ab33a32f17" default /]
[stream language="RO" videoId="497187597/ab33a32f17"  /]
[/video-vimeo]

**Mocha** is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. 

Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.

It provides common testing functions including `it`, `describe` and the main function that runs tests.

Mocha is usually used together with **Chai**.

For more information here is a link to the developer's web page: https://mochajs.org/

```js
describe("title", function () {
    it("title", function () { ... });
});
```

**Chai** is a library with many **assertions**.

It allows the usage of a lot of different assertions such as `assert.equal`.

Before using **Chai** we need to import the required module using the keyword `require`.

This is done in the first line of code: `let assert = require("chai").assert;`

For more information here is a link to the developer's web page: https://www.chaijs.com/api/

```js
let assert = require("chai").assert;
describe("pow", function() {
    it("2 raised to power 3 is 8", function() {
        assert.equal(pow(2, 3), 8);
    });
});
```

[/slide]