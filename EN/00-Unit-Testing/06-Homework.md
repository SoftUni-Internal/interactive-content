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

[slide]
# Problem: Char Lookup
[code-task title="Problem: Char Lookup" taskId="js-applications-Unit-Testing-Char-Lookup" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```js

```
[/code-editor]
[task-description]
## Description

Write **unit tests** for a function that retrieves a character at a given **index** from a passed in **string**.

You are given a function named `lookupChar()`, which has the following functionality:
- lookupChar(string, index) - accepts a **string** and an **integer**, which is the index of the character we are looking for.
- If the **first parameter** is **NOT** a string or the **second parameter** is **NOT a number** - return **undefined**.
- If **both parameters** are of the correct type but the value of the index is incorrect (bigger than or equal to the string length or a negative number) - return "**Incorrect index**". 
- If both parameters have correct types and values, return the character at the specified index in the string.

You are provided with an implementation of the `lookupChar()` function.

```js
function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }
    return string.charAt(index);
}
```

Hints

А good first step in testing a method is usually to determine all exit conditions. 

Reading through the specification or taking a look at the implementation we can easily determine 3 main exit conditions:
- Returning **undefined**.
- Returning an **empty string**.
- Returning the **character at the specified index**.

Now that we have our exit conditions we should start checking in what situations we can reach them.

If any of the parameters are of **incorrect type**, **undefined** should be returned. 

```js
describe("Character Look Up", function(){
    it("should return undefined with first parameter as a number", function(){
        expect(lookupChar(13, 0)).to.equal(undefined, "Function did not return the correct result!")
    });
    it("should return undefined with second parameter as a string", function(){
        expect(lookupChar("Peter", "George")).to.equal(undefined, "Function did not return the correct result!")
    });
})
```

If we take a closer look at the implementation, we see that the check uses `Number.isInteger()` instead of `typeof(index === number)` to check the index. 

While **typeof** would protect us from getting passed an **index** that is a **non-number**, it will not protect us from being passed a **floating-point number**. 

The specification says that the index needs to be an **integer**, since floating point numbers will not be valid indexes.

```js
describe("Character Look Up", function(){
    it("should return undefined with second parameter as a floating point number", function(){
        expect(lookupChar("Peter", 3.12)).to.equal(undefined, "Function did not return the correct result!")
    });
})
```

Moving on to the next exit condition - returning an empty string.

if we get passed an index that is a negative number or an index which is outside of the bounds of the string.

```js
describe("Character Look Up", function(){
    it("should return incorrect index with second parameter as incorrect value", function(){
        expect(lookupChar("George", 13)).to.equal("Incorrect index", "Function did not return the correct result!")
    });
    it("should return incorrect index with second parameter as negative value", function(){
        expect(lookupChar("Peter", -1)).to.equal("Incorrect index", "Function did not return the correct result!")
    });
    it("should return incorrect index with second parameter equal to the first parameter length", function(){
        expect(lookupChar("Peter", 5)).to.equal("Incorrect index", "Function did not return the correct result!")
    });
})
```

For the last exit condition, which will be to return a correct result, a simple check for the returned value will be enough.

```js
describe("Character Look Up", function(){
    it("should return correct value with correct parameters", function(){
        expect(lookupChar("Peter", 3)).to.equal("e", "Function did not return the correct result!")
    });
    it("should return correct value with correct parameters", function(){
        expect(lookupChar("Peter", 0)).to.equal("P", "Function did not return the correct result!")
    });
})
```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
//\<minTestCount\>3\</minTestCount\> - specifies the minimum amount of tests your code should have.
let lookupChar = function(string, index)\{\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test open]
[input]
lookupChar = function(string, index) \{
    if (typeof(string) !== 'string' \|\| !Number.isInteger(index)) \{
        return undefined;
    \}
    if (string.length \<= index \|\| index \< 0) \{
        return "Incorrect index";
    \}

    return string.charAt(index);
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
lookupChar = function(string, index) \{
    if (typeof(string) !== 'string' \|\| typeof (index) !== 'number') \{
        return undefined;
    \}
    if (string.length \<= index \|\| index \< 0) \{
        return "Incorrect index";
    \}

    return string.charAt(index);
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
lookupChar = function(string, index) \{
    if (typeof(string) !== 'string') \{
        return undefined;
    \}
    if (string.length \<= index \|\| index \< 0) \{
        return "Incorrect index";
    \}

    return string.charAt(index);
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
lookupChar = function(string, index) \{
    if (typeof(string) !== 'string' \|\| !Number.isInteger(index)) \{
        return undefined;
    \}
    if (string.length \<= index) \{
        return "Incorrect index";
    \}
    return string.charAt(index);
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
lookupChar = function(string, index) \{
    if (typeof(string) !== 'string' \|\| !Number.isInteger(index)) \{
        return undefined;
    \}
    if (index \< 0) \{
        return "Incorrect index";
    \}

    return string.charAt(index);
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
lookupChar = function(string, index) \{
    if (typeof(string) !== 'string' \|\| !Number.isInteger(index)) \{
        return undefined;
    \}
    if (string.length \<= index \|\| index \< 0) \{
        return "Incorrect index";
    \}

    return string.charAt(0);
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
lookupChar = function(string, index) \{
    if (!Number.isInteger(index)) \{
        return undefined;
    \}
    if (string.length \<= index \|\| index \< 0) \{
        return "Incorrect index";
    \}

    return string.charAt(index);
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Problem: Math Enforcer
[code-task title="Problem: Math Enforcer" taskId="js-applications-Unit-Testing-Math-Enforcer" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```js

```
[/code-editor]
[task-description]
## Description

Your task is to test an object named **mathEnforcer**, which will have the following functionality.
- addFive(num) - A function that accepts a **single** parameter.
    - If the parameter is **NOT** a **number**, the funtion should return **undefined**.
    - If the parameter is a **number**, **add 5** to it, and return the result.
- subtractTen(num) - A function that accepts a **single** parameter.
    - If the parameter is **NOT** a **number**, the function should return **undefined**.
    - If the parameter is a **number**, **subtract 10** from it, and return the result.
- sum(num1, num2) - A function that accepts **two** parameters.
    - If any of the 2 parameters is NOT a number, the function should return undefined.
    - If **both** parameters are **numbers**, the function should return their **sum**.

You are provided with an implementation of the **mathEnforcer** object.

```js
let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};
```

The methods should function correctly for positive, negative and floating-point numbers. 

In case of floating-point numbers the result should be considered correct if it is within 0.01 of the correct value.

When testing a more complex object write a **nested describe** for each function as it is shown in the example below.

```js
describe("Math Enforcer", function(){
    describe("Add Five", function(){
        it("should return undefined passing parameter as a string", function(){
            // To Do
        });
    })

    describe("Add Five", function(){
        it("should return 5 if parameter equals 0", function(){
            // To Do
        });
    })
})
```

Your tests will be supplied with a variable named "mathEnforcer" which contains the mentioned logic above. 

All test cases you write should reference this variable.

Hints
- Test how the program behaves when passing in negative values.
- Test the program with floating-point numbers using Chai’s `closeTo()` method to compare floating-point numbers.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
//\<minTestCount\>2\</minTestCount\> - specifies the minimum amount of tests your code should have.
let mathEnforcer = \{\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test open]
[input]
mathEnforcer = \{
    addFive: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num + 5;
    \},
    subtractTen: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num - 10;
    \},
    sum: function (num1, num2) \{
        if (typeof(num1) !== 'number' \|\| typeof(num2) !== 'number') \{
            return undefined;
        \}
        return num1 + num2;
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
mathEnforcer = \{
    addFive: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num + 4;
    \}, subtractTen: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num - 10;
    \}, sum: function (num1, num2) \{
        if (typeof(num1) !== 'number' \|\| typeof(num2) !== 'number') \{
            return undefined;
        \}
        return num1 + num2;
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
mathEnforcer = \{
    addFive: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num + 5;
    \}, subtractTen: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num - 5;
    \}, sum: function (num1, num2) \{
        if (typeof(num1) !== 'number' \|\| typeof(num2) !== 'number') \{
            return undefined;
        \}
        return num1 + num2;
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
mathEnforcer = \{
    addFive: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num + 5;
    \}, subtractTen: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num - 10;
    \}, sum: function (num1, num2) \{
        if (typeof(num1) !== 'number' \|\| typeof(num2) !== 'number') \{
            return undefined;
        \}
        return num1 - num2;
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
mathEnforcer = \{
    addFive: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return Math.abs(num) + 5;
    \}, subtractTen: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num - 10;
    \}, sum: function (num1, num2) \{
        if (typeof(num1) !== 'number' \|\| typeof(num2) !== 'number') \{
            return undefined;
        \}
        return num1 + num2;
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
mathEnforcer = \{
    addFive: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num + 5;
    \}, subtractTen: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return Math.abs(num) - 10;
    \}, sum: function (num1, num2) \{
        if (typeof(num1) !== 'number' \|\| typeof(num2) !== 'number') \{
            return undefined;
        \}
        return num1 + num2;
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
mathEnforcer = \{
    addFive: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num + 5;
    \}, subtractTen: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num - 10;
    \}, sum: function (num1, num2) \{
        if (typeof(num1) !== 'number' \|\| typeof(num2) !== 'number') \{
            return undefined;
        \}
        return Math.abs(num1 - num2);
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
mathEnforcer = \{
    addFive: function (num) \{
        return num + 5;
    \},
    subtractTen: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num - 10;
    \},
    sum: function (num1, num2) \{
        if (typeof(num1) !== 'number' \|\| typeof(num2) !== 'number') \{
            return undefined;
        \}
        return num1 + num2;
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
mathEnforcer = \{
    addFive: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num + 5;
    \},
    subtractTen: function (num) \{
        return num - 10;
    \},
    sum: function (num1, num2) \{
        if (typeof(num1) !== 'number' \|\| typeof(num2) !== 'number') \{
            return undefined;
        \}
        return num1 + num2;
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
mathEnforcer = \{
    addFive: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num + 5;
    \},
    subtractTen: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num - 10;
    \},
    sum: function (num1, num2) \{
        if (typeof(num2) !== 'number') \{
            return undefined;
        \}
        return num1 + num2;
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
mathEnforcer = \{
    addFive: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num + 5;
    \},
    subtractTen: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num - 10;
    \},
    sum: function (num1, num2) \{
        if (typeof(num1) !== 'number') \{
            return undefined;
        \}
        return num1 + num2;
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
mathEnforcer = \{
    addFive: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return parseInt(num) + 5;
    \},
    subtractTen: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num - 10;
    \},
    sum: function (num1, num2) \{
        if (typeof(num1) !== 'number' \|\| typeof(num2) !== 'number') \{
            return undefined;
        \}
        return num1 + num2;
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
mathEnforcer = \{
    addFive: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num + 5;
    \},
    subtractTen: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return parseInt(num) - 10;
    \},
    sum: function (num1, num2) \{
        if (typeof(num1) !== 'number' \|\| typeof(num2) !== 'number') \{
            return undefined;
        \}
        return num1 + num2;
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
mathEnforcer = \{
    addFive: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num + 5;
    \},
    subtractTen: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num - 10;
    \},
    sum: function (num1, num2) \{
        if (typeof(num1) !== 'number' \|\| typeof(num2) !== 'number') \{
            return undefined;
        \}
        return parseInt(num1) + num2;
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
mathEnforcer = \{
    addFive: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num + 5;
    \},
    subtractTen: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num - 10;
    \},
    sum: function (num1, num2) \{
        if (typeof(num1) !== 'number' \|\| typeof(num2) !== 'number') \{
            return undefined;
        \}
        return num1 + parseInt(num2);
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]