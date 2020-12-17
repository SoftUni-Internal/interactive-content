# Homework

[slide]
# Problem: Even Or Odd
[code-task title="Problem: Even Or Odd" taskId="js-applications-Unit-Testing-Even-Or-Odd" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```js

```
[/code-editor]
[task-description]

## Description

You need to write **unit tests** for a function `isOddOrEven()`, that checks whether the **length** of a passed in string is **even** or **odd**.

If the passed parameter is **NOT** a string return **undefined**. If the parameter is a string return either "even" or "odd" based on the length of the string.

You are provided with an implementation of the `isOddOrEven()` function.

```js
function isOddOrEven(input) {
    if (typeof(input) !== 'string') {
        return undefined;
    }
    if (input.length % 2 === 0) {
        return "even";
    }
    return "odd";
}
```

Hints
We can clearly see there are three outcomes for the function:
- Returning **undefined**.
- Returning "even".
- Returning "odd".

Write one or two tests passing parameters that are **NOT** of type string to the function expecting it to return undefined.

```js
describe("Is Odd Or Even", function(){
    it("should return undefined with a number as parameter", function(){
        expect(isOddOrEven(13)).to.equal(undefined, "Function did not return the correct result!")
    });
    it("should return undefined with an object as parameter", function(){
        expect(isOddOrEven({name: "George"})).to.equal(undefined, "Function did not return the correct result!")
    });
})
```

After we have checked the validation it is time to check whether the function works correctly with valid arguments. 

Write a test for each of the cases, one where we pass a string with even length and another where we pass a string with an odd length.

```js
describe("Is Odd Or Even", function(){
    it("should return even", function(){
        expect(isOddOrEven("aaaa")).to.equal("even", "Function did not return the correct result!")
    });
    it("should return odd", function(){
        expect(isOddOrEven("aaa")).to.equal("odd", "Function did not return the correct result!")
    });
})
```

Finally make an extra test passing multiple strings in a row to ensure the function works correctly.

```js
describe("Is Odd Or Even", function(){
    it("should return correct values with multiple checks", function(){
        expect(isOddOrEven("cat")).to.equal("odd", "Function did not return the correct result!")
        expect(isOddOrEven("pet")).to.equal("odd", "Function did not return the correct result!")
        expect(isOddOrEven("bird")).to.equal("even", "Function did not return the correct result!")
    });
})
```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
//\<minTestCount\>3\</minTestCount\> - specifies the minimum amount of tests your code should have.
let isOddOrEven = function(string)\{\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test open]
[input]
isOddOrEven = function (string) \{
    if (typeof(string) !== 'string') \{
        return undefined;
    \}
    if (string.length % 2 === 0) \{
        return "even";
    \}

    return "odd";
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
isOddOrEven = function (string) \{
    if (string.length % 2 === 0) \{
        return "even";
    \}

    return "odd";
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
isOddOrEven = function (string) \{
    if (typeof(string) !== 'string') \{
        return undefined;
    \}

    return "even";
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
isOddOrEven = function (string) \{
    if (typeof(string) !== 'string') \{
        return undefined;
    \}

    return "odd";
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
isOddOrEven = function (string) \{
    if (typeof(string) !== 'string') \{
        return undefined;
    \}
    if (string.length % 2 === 1) \{
        return "even";
    \}

    return "odd";
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

