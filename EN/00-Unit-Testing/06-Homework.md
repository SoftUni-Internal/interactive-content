# Homework

[slide hideTitle]
# Problem: Even or Odd
[code-task title="Even Or Odd" taskId="js-applications-Unit-Testing-Even-Or-Odd" executionType="tests-execution" executionStrategy="javascript-code-against-unit-tests-with-mocha" requiresInput]

[code-editor language=javascript]
```
describe('Even or odd', () => {
   // Write your code here
})
```
[/code-editor]
[task-description]

# Description

Create **unit tests** for a function `isOddOrEven()`, that checks whether the **length** of a passed in string is **even** or **odd**.

If the passed parameter is **NOT** a string, it returns **undefined**.

If the parameter in a string, it returns either "**even**" or "**odd**" based on the length of the string.

You are provided with an implementation of the `isOddOrEven()` function.

```js
function isOddOrEven(input) {
  if (typeof (input) !== 'string') {
    return undefined;
  }
  if (input.length % 2 === 0) {
    return 'even';
  }
  return 'odd';
}
```

# Hints
We can see there are three outcomes for the function:
- Returning `undefined`
- Returning `even`
- Returning `odd`

Write one or two tests passing in parameters that are **NOT** of type string to the function, expecting it to return undefined. 

```js
describe('Is Odd Or Even', function () {
  it('should return undefined with a number as parameter',
    function () {
      expect(isOddOrEven(13)).to.equal(undefined,
        'Function did not return the correct result!')
    });

  it('should return undefined with an object as parameter',
    function () {
      expect(isOddOrEven({
        name: 'George'
      })).to.equal(undefined,
        'Function did not return the correct result!')
    });
})
```

After we check the validation, it is time to check whether the function works correctly with valid arguments. 

Write a test for each of the cases. 

In the first test, we pass a string with an **even** length and a second one where we pass a string with an **odd** length.

```js
describe('Is Odd Or Even', function () {

  it('should return even', function () {
    expect(isOddOrEven('aaaa')).to.equal('even',
      'Function did not return the correct result!')
  });

  it('should return odd', function () {
    expect(isOddOrEven('aaa')).to.equal('odd',
      'Function did not return the correct result!')
  });
})
```

Finally, make a test passing multiple strings in a row to ensure the function works correctly.

```js
describe('Is Odd Or Even', function () {

  it('should return correct values with multiple checks',
    function () {
      expect(isOddOrEven('cat')).to.equal('odd',
        'Function did not return the correct result!')

      expect(isOddOrEven('pet')).to.equal('odd',
        'Function did not return the correct result!')

      expect(isOddOrEven('bird')).to.equal('even',
        'Function did not return the correct result!')
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

[slide hideTitle]
# Problem: Char Lookup
[code-task title="Char Lookup" taskId="js-applications-Unit-Testing-Char-Lookup" executionType="tests-execution" executionStrategy="javascript-code-against-unit-tests-with-mocha" requiresInput]

[code-editor language=javascript]
```
describe('Char lookup', () => {
  // Write your code here
})
```
[/code-editor]
[task-description]
# Description

Write **unit tests** for a function that retrieves a character at a given **index** from a **string**.

You have a function called `lookupChar()` that has the following functionality:

- `lookupChar(string, index)` - accepts a **string** and an **integer**, which is the index of the character we are looking for

- If the **first parameter** is **NOT** a string or the **second parameter** is `NOT a number` - it should return **undefined**

- If **both parameters** are of the correct type, but the value of the index is incorrect, meaning bigger than or equal to the string length, or a negative number - it should return `Incorrect index` 

- If both parameters have correct types and values, returns the character at the specified index in the string

Here is the implementation of the `lookupChar()` function.

```js
function lookupChar(string, index) {
  if (typeof (string) !== 'string' ||
    !Number.isInteger(index)) {
    return undefined;
  }
  if (string.length <= index || index < 0) {
    return 'Incorrect index';
  }
  return string.charAt(index);
}
```

# Hints

A good first step in testing a method is usually to determine all exit conditions. 

Reading through the specification or taking a look at the implementation, we can determine three main exit conditions:
- Returning `undefined`
- Returning an `empty string`
- Returning the `character at the specified index`

Now that we have our exit conditions, we start checking in what situations we can reach them.

If any of the parameters are of an **incorrect type**,  we return  **undefined**.

```js
describe('Character Look Up', function () {
  it('should return undefined with first parameter as a number',
    function () {
      expect(lookupChar(13, 0)).to.equal(undefined,
        'Function did not return the correct result!')
    });

  it('should return undefined with second parameter as a string',
    function () {
      expect(lookupChar('Peter', 'George')).to.equal(undefined,
        'Function did not return the correct result!')
    });
})
```

If we take a closer look at the implementation, we see that the check uses `Number.isInteger()` instead of `typeof(index === number)` to check the index. 

While **typeof** would protect us from getting an **index** that is a **non-number**, it will not protect us from receiving a **floating-point number**. 

The condition says that the index needs to be an **integer**, since floating-point numbers will not be valid indexes.

```js
describe('Character Look Up', function () {
  it('should return undefined with second parameter as a floating point number',
    function () {
      expect(lookupChar('Peter', 3.12)).to.equal(undefined,
        'Function did not return the correct result!')
    });
})
```

Moving on to the next exit condition - returning an empty string.

This is the case when we pass in an index that is a negative number or an index that is outside of the bounds of the string. 

```js
describe('Character Look Up', function () {
  it('should return incorrect index with second parameter as incorrect value',
    function () {
      expect(lookupChar('George', 13)).to.equal('Incorrect index',
        'Function did not return the correct result!')
    });

  it('should return incorrect index with second parameter as negative value',
    function () {
      expect(lookupChar('Peter', -1)).to.equal('Incorrect index',
        'Function did not return the correct result!')
    });

  it('should return incorrect index with second parameter equal to the first parameter length',
    function () {
      expect(lookupChar('Peter', 5)).to.equal('Incorrect index',
        'Function did not return the correct result!')
    });
})
```

For the last exit condition, which will be to return a correct result, a simple check for the returned value will be enough.

```js
describe('Character Look Up', function () {
  it('should return correct value with correct parameters',
    function () {
      expect(lookupChar('Peter', 3)).to.equal('e',
        'Function did not return the correct result!')
    });
  it('should return correct value with correct parameters',
    function () {
      expect(lookupChar('Peter', 0)).to.equal('P',
        'Function did not return the correct result!')
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

[slide hideTitle]
# Problem: Math Enforcer
[code-task title="Math Enforcer" taskId="js-applications-Unit-Testing-Math-Enforcer" executionType="tests-execution" executionStrategy="javascript-code-against-unit-tests-with-mocha" requiresInput]
[code-editor language=javascript]

```
describe('Math enforcer', function () {
   // Write your code here
})
```
[/code-editor]
[task-description]
# Description

Test an object called **mathEnforcer**, which will have the following functionality:

- `addFive(num)`: A function that accepts a **single** parameter
    - if the parameter is **NOT** a **number**, the function should return **undefined**
    - if the parameter is a **number**, **adds 5** to it, returns the result

- `subtractTen(num)`: A function that accepts a **single** parameter
    - if the parameter is **NOT** a **number**, the function should return **undefined**
    - if the parameter is a **number**, **subtracts 10** from it and returns the result

- `sum(num1, num2)`: A function that accepts **two** parameters
    - if any of the 2 parameters is NOT a number, the function should return undefined
    - if **both** parameters are **numbers**, the function should return their **sum**

Here is the implementation of the **mathEnforcer** object:

```js
let mathEnforcer = {
    addFive: function(num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function(num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function(num1, num2) {
        if (typeof(num1) !== 'number' || 
            typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};
```

The methods should function correctly for positive, negative, and floating-point numbers. 

When using floating-point numbers, the result should be considered correct if it is within 0.01 of the correct value.

When testing a more complex object, write a **nested describe** for each function shown in the example below. 

```js
describe('Math Enforcer', function() {
    describe('Add Five', function() {
        it('should return undefined passing parameter as a string', 
          function() {
            // To Do
        });
    })

    describe('Add Five', function() {
        it('should return 5 if parameter equals 0', function() {
            // To Do
        });
    })
})
```

Your tests will be supplied with a variable called "mathEnforcer" which contains the mentioned logic above. 

All test cases you write should reference this variable.

# Hints

- Test how the program behaves when passing in negative values

- Test the program with floating-point numbers using Chai’s `closeTo()` method to compare floating-point numbers

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

[slide hideTitle]
# Problem: String Builder
[code-task title="String Builder" taskId="js-applications-Unit-Testing-String-Builder" executionType="tests-execution" executionStrategy="javascript-code-against-unit-tests-with-mocha" requiresInput]
[code-editor language=javascript]
```
describe('String Builder', function(){
   // Write your code here
});

```
[/code-editor]
[task-description]
# Description

Use the following JavaScript class.

```js
class StringBuilder {
    constructor(string) {
        if (string !== undefined) {
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        } else {
            this._stringArray = [];
        }
    }

    append(string) {
        StringBuilder._vrfyParam(string);
        for (let i = 0; i < string.length; i++) {
            this._stringArray.push(string[i]);
        }
    }

    prepend(string) {
        StringBuilder._vrfyParam(string);
        for (let i = string.length - 1; i >= 0; i--) {
            this._stringArray.unshift(string[i]);
        }
    }

    insertAt(string, startIndex) {
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    }

    remove(startIndex, length) {
        this._stringArray.splice(startIndex, length);
    }

    static _vrfyParam(param) {
        if (typeof param !== 'string') throw new TypeError('Argument must be string');
    }

    toString() {
        return this._stringArray.join('');
    }
}
```

The above code defines a class that holds characters (strings with length 1) in an array. 

An instance of the class should support the following operations:

- Can be instantiated with a passed-in string argument or without anything

- The `append(string)` function: converts the passed-in string argument to an array and adds it to the end of the storage

- The `prepend(string)` function: converts the passed-in string argument to an array and adds it to the beginning of the storage

- `insertAt(string, index)`: converts the passed-in string to an array and adds it at the given index (there is no need to check if the index is in range)

- `remove(startIndex, length)`: removes elements from the storage, starting at the given index (inclusive, length number of characters (there is no need to check if the index is in range)

- Function `toString()`: returns a string with all elements joined by an empty string

- All passed-in arguments should be strings

If any of the parameters is not a string, throws a type error with the following message: `Argument must be a string`.

# Example

**Input**
```js
let str = new StringBuilder('hello');
str.append(', there');
str.prepend('User, ');
str.insertAt('woop',5 );
console.log(str.toString());
str.remove(6, 3);
console.log(str.toString());
```

**Output**

User, Woop hello, there

User,w Hello, there

[/task-description]
[code-io /]
[tests]
[test open]
[input]
//\<minTestCount\>7\</minTestCount\> - specifies the minimum amount of tests your code should have.
var StringBuilder = function () \{\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test open]
[input]
StringBuilder = class StringBuilder \{
    constructor(string) \{
        if (string !== undefined) \{
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        \} else \{
            this._stringArray = \[\];
        \}
    \}

    append(string) \{
        StringBuilder._vrfyParam(string);
        for(let i = 0; i \< string.length; i++) \{
            this._stringArray.push(string\[i\]);
        \}
    \}

    prepend(string) \{
        StringBuilder._vrfyParam(string);
        for(let i = string.length - 1; i \>= 0; i--) \{
            this._stringArray.unshift(string\[i\]);
        \}
    \}

    insertAt(string, startIndex) \{
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    \}

    remove(startIndex, length) \{
        this._stringArray.splice(startIndex, length);
    \}

    static _vrfyParam(param) \{
        if (typeof param !== 'string') throw new TypeError('Argument must be string');
    \}

    toString() \{
        return this._stringArray.join('');
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>Data not initialized empty\</testInfo\>
StringBuilder = class StringBuilder \{
    constructor(string) \{
        this._stringArray = \[''\];
    \}

    append(string) \{
        StringBuilder._vrfyParam(string);
        for (let i = 0; i \< string.length; i++) \{
            this._stringArray.push(string\[i\]);
        \}
    \}

    prepend(string) \{
        StringBuilder._vrfyParam(string);
        for (let i = string.length - 1; i \>= 0; i--) \{
            this._stringArray.unshift(string\[i\]);
        \}
    \}

    insertAt(string, startIndex) \{
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    \}

    remove(startIndex, length) \{
        this._stringArray.splice(startIndex, length);
    \}

    static _vrfyParam(param) \{
        if (typeof param !== 'string') throw new TypeError('Argument must be string');
    \}

    toString() \{
        return this._stringArray.join('');
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>Data always initializes empty\</testInfo\>
StringBuilder = class StringBuilder \{
    constructor(string) \{
        this._stringArray = \[\];
    \}

    append(string) \{
        StringBuilder._vrfyParam(string);
        for (let i = 0; i \< string.length; i++) \{
            this._stringArray.push(string\[i\]);
        \}
    \}

    prepend(string) \{
        StringBuilder._vrfyParam(string);
        for (let i = string.length - 1; i \>= 0; i--) \{
            this._stringArray.unshift(string\[i\]);
        \}
    \}

    insertAt(string, startIndex) \{
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    \}

    remove(startIndex, length) \{
        this._stringArray.splice(startIndex, length);
    \}

    static _vrfyParam(param) \{
        if (typeof param !== 'string') throw new TypeError('Argument must be string');
    \}

    toString() \{
        return this._stringArray.join('');
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>Append missing\</testInfo\>
StringBuilder = class StringBuilder \{
    constructor(string) \{
        if (string !== undefined) \{
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        \} else \{
            this._stringArray = \[\];
        \}
    \}

    prepend(string) \{
        StringBuilder._vrfyParam(string);
        for(let i = string.length - 1; i \>= 0; i--) \{
            this._stringArray.unshift(string\[i\]);
        \}
    \}

    insertAt(string, startIndex) \{
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    \}

    remove(startIndex, length) \{
        this._stringArray.splice(startIndex, length);
    \}

    static _vrfyParam(param) \{
        if (typeof param !== 'string') throw new TypeError('Argument must be string');
    \}

    toString() \{
        return this._stringArray.join('');
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>Prepend not implemented\</testInfo\>
StringBuilder = class StringBuilder \{
    constructor(string) \{
        if (string !== undefined) \{
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        \} else \{
            this._stringArray = \[\];
        \}
    \}

    append(string) \{
        StringBuilder._vrfyParam(string);
        for(let i = 0; i \< string.length; i++) \{
            this._stringArray.push(string\[i\]);
        \}
    \}

    prepend(string) \{
    \}

    insertAt(string, startIndex) \{
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    \}

    remove(startIndex, length) \{
        this._stringArray.splice(startIndex, length);
    \}

    static _vrfyParam(param) \{
        if (typeof param !== 'string') throw new TypeError('Argument must be string');
    \}

    toString() \{
        return this._stringArray.join('');
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>Insert does not spread array\</testInfo\>
StringBuilder = class StringBuilder \{
    constructor(string) \{
        if (string !== undefined) \{
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        \} else \{
            this._stringArray = \[\];
        \}
    \}

    append(string) \{
        StringBuilder._vrfyParam(string);
        for(let i = 0; i \< string.length; i++) \{
            this._stringArray.push(string\[i\]);
        \}
    \}

    prepend(string) \{
        StringBuilder._vrfyParam(string);
        for(let i = string.length - 1; i \>= 0; i--) \{
            this._stringArray.unshift(string\[i\]);
        \}
    \}

    insertAt(string, startIndex) \{
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, string);
    \}

    remove(startIndex, length) \{
        this._stringArray.splice(startIndex, length);
    \}

    static _vrfyParam(param) \{
        if (typeof param !== 'string') throw new TypeError('Argument must be string');
    \}

    toString() \{
        return this._stringArray.join('');
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>Remove has parameter swapped\</testInfo\>
StringBuilder = class StringBuilder \{
    constructor(string) \{
        if (string !== undefined) \{
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        \} else \{
            this._stringArray = \[\];
        \}
    \}

    append(string) \{
        StringBuilder._vrfyParam(string);
        for(let i = 0; i \< string.length; i++) \{
            this._stringArray.push(string\[i\]);
        \}
    \}

    prepend(string) \{
        StringBuilder._vrfyParam(string);
        for(let i = string.length - 1; i \>= 0; i--) \{
            this._stringArray.unshift(string\[i\]);
        \}
    \}

    insertAt(string, startIndex) \{
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    \}

    remove(startIndex, length) \{
        this._stringArray.splice(length, startIndex);
    \}

    static _vrfyParam(param) \{
        if (typeof param !== 'string') throw new TypeError('Argument must be string');
    \}

    toString() \{
        return this._stringArray.join('');
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>toString missing join parameter\</testInfo\>
StringBuilder = class StringBuilder \{
    constructor(string) \{
        if (string !== undefined) \{
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        \} else \{
            this._stringArray = \[\];
        \}
    \}

    append(string) \{
        StringBuilder._vrfyParam(string);
        for(let i = 0; i \< string.length; i++) \{
            this._stringArray.push(string\[i\]);
        \}
    \}

    prepend(string) \{
        StringBuilder._vrfyParam(string);
        for(let i = string.length - 1; i \>= 0; i--) \{
            this._stringArray.unshift(string\[i\]);
        \}
    \}

    insertAt(string, startIndex) \{
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    \}

    remove(startIndex, length) \{
        this._stringArray.splice(startIndex, length);
    \}

    static _vrfyParam(param) \{
        if (typeof param !== 'string') throw new TypeError('Argument must be string');
    \}

    toString() \{
        return this._stringArray.join();
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>Constructor does not verify parameter\</testInfo\>
StringBuilder = class StringBuilder \{
    constructor(string) \{
        if (string !== undefined) \{
            this._stringArray = Array.from(string);
        \} else \{
            this._stringArray = \[\];
        \}
    \}

    append(string) \{
        StringBuilder._vrfyParam(string);
        for(let i = 0; i \< string.length; i++) \{
            this._stringArray.push(string\[i\]);
        \}
    \}

    prepend(string) \{
        StringBuilder._vrfyParam(string);
        for(let i = string.length - 1; i \>= 0; i--) \{
            this._stringArray.unshift(string\[i\]);
        \}
    \}

    insertAt(string, startIndex) \{
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    \}

    remove(startIndex, length) \{
        this._stringArray.splice(startIndex, length);
    \}

    static _vrfyParam(param) \{
        if (typeof param !== 'string') throw new TypeError('Argument must be string');
    \}

    toString() \{
        return this._stringArray.join();
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>append, prepend, insertAt do not verify parameter\</testInfo\>
StringBuilder = class StringBuilder \{
    constructor(string) \{
        if (string !== undefined) \{
            if (typeof string !== 'string') throw new TypeError('Argument must be string');
            this._stringArray = Array.from(string);
        \} else \{
            this._stringArray = \[\];
        \}
    \}

    append(string) \{
        for(let i = 0; i \< string.length; i++) \{
            this._stringArray.push(string\[i\]);
        \}
    \}

    prepend(string) \{
        for(let i = string.length - 1; i \>= 0; i--) \{
            this._stringArray.unshift(string\[i\]);
        \}
    \}

    insertAt(string, startIndex) \{
        this._stringArray.splice(startIndex, 0, ...string);
    \}

    remove(startIndex, length) \{
        this._stringArray.splice(startIndex, length);
    \}

    toString() \{
        return this._stringArray.join('');
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>Functions attached to instance\</testInfo\>
StringBuilder = class StringBuilder \{
    constructor(string) \{
        this._vrfyParam = function(param) \{
            if (typeof param !== 'string') throw new TypeError('Argument must be string');
        \};

        if (string !== undefined) \{
            this._vrfyParam(string);
            this._stringArray = Array.from(string);
        \} else \{
            this._stringArray = \[\];
        \}

        this.append = function(string) \{
            this._vrfyParam(string);
            for(let i = 0; i \< string.length; i++) \{
                this._stringArray.push(string\[i\]);
            \}
        \};

        this.prepend = function(string) \{
            this._vrfyParam(string);
            for(let i = string.length - 1; i \>= 0; i--) \{
                this._stringArray.unshift(string\[i\]);
            \}
        \};

        this.insertAt = function(string, startIndex) \{
            this._vrfyParam(string);
            this._stringArray.splice(startIndex, 0, ...string);
        \};

        this.remove = function(startIndex, length) \{
            this._stringArray.splice(startIndex, length);
        \};

        this.toString = function() \{
            return this._stringArray.join('');
        \};
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

[slide hideTitle]
# Problem: Payment Package
[code-task title="Payment Package" taskId="js-applications-Unit-Testing-Payment-Package" executionType="tests-execution" executionStrategy="javascript-code-against-unit-tests-with-mocha" requiresInput]
[code-editor language=javascript]
```
describe('Payment package', function(){
   // Write your code here
});
```
[/code-editor]
[task-description]
## Description

Use the following JavaScript class.

```js
class PaymentPackage {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.VAT = 20; // Default value    
        this.active = true; // Default value
    }

    get name() {
        return this._name;
    }

    set name(newValue) {
        if (typeof newValue !== 'string') {
            throw new Error('Name must be a non-empty string');
        }
        if (newValue.length === 0) {
            throw new Error('Name must be a non-empty string');
        }
        this._name = newValue;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('Value must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('Value must be a non-negative number');
        }
        this._value = newValue;
    }

    get VAT() {
        return this._VAT;
    }

    set VAT(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('VAT must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('VAT must be a non-negative number');
        }
        this._VAT = newValue;
    }

    get active() {
        return this._active;
    }

    set active(newValue) {
        if (typeof newValue !== 'boolean') {
            throw new Error('Active status must be a boolean');
        }
        this._active = newValue;
    }

    toString() {
        const output = [
            `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${this.value}`,
            `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
        ];
        return output.join('\n');
    }
}
```
## Functionality
The above code defines a class that contains information about a payment package. 

An instance of the class should support the following operations:
- Can be instantiated with two parameters: a string name and a number value
- Accessor **name**: gets and sets the value of "name"
- Accessor **value**: gets and sets the value of "value"
- Accessor **VAT**: gets and sets the value of "VAT"
- Accessor **active**: gets and sets the value of "active"
- Function `toString()`: returns a string containing an overview of the instance

If the package is not active, append the label `(inactive)` to the printed name.

When creating an instance or changing any of the property values, the parameters are validated. 

They must follow these rules:

- **name**: a non-empty string

- **value**: a non-negative number

- **VAT**: a non-negative number

- **active**: a Boolean

If any of the requirements are not met, the operation must throw an error.

# Example

**Input**

```js
// Should throw an error
try {
    const hrPack = new PaymentPackage('HR Services');
} catch (err) {
    console.log('Error: ' + err.message);
}
const packages = [
    new PaymentPackage('HR Services', 1500),
    new PaymentPackage('Consultation', 800),
    new PaymentPackage('Partnership Fee', 7000),
];
console.log(packages.join('\n'));

const wrongPack = new PaymentPackage('Transfer Fee', 100);
// Should throw an error
try {
    wrongPack.active = null;
} catch (err) {
    console.log('Error: ' + err.message);
}
```

**Output**

Error: Value must be a non-negative number
Package: HR Services
\- Value (excl. VAT): 1500
\- Value (VAT 20%): 1800
Package: Consultation
\- Value (excl. VAT): 800
\- Value (VAT 20%): 960
Package: Partnership Fee
\- Value (excl. VAT): 7000
\- Value (VAT 20%): 8400
Error: Active status must be a boolean

## Your Task

Using **Mocha** and **Chai** write JavaScript tests that test the full functionality of the **PaymentPackage** class.

Ensure the instances of the **PaymentPackage** class have all the required functionality and validation. 

## Submission

Submit your tests inside a `describe()` statement.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
//\<minTestCount\>5\</minTestCount\> - specifies the minimum amount of tests your code should have.
var PaymentPackage = function () \{\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test open]
[input]
PaymentPackage = class PaymentPackage \{
    constructor(name, value) \{
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value        
        this.active = true; // Default value
    \}

    get name() \{
        return this._name;
    \}

    set name(newValue) \{
        if (typeof newValue !== 'string') \{
            throw new Error('Name must be a non-empty string');
        \}
        if (newValue.length === 0) \{
            throw new Error('Name must be a non-empty string');            
        \}
        this._name = newValue;
    \}

    get value() \{
        return this._value;
    \}

    set value(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('Value must be a non-negative number');
        \}
        if (newValue \< 0) \{
            throw new Error('Value must be a non-negative number');            
        \}
        this._value = newValue;
    \}
    
    get VAT() \{
        return this._VAT;
    \}

    set VAT(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('VAT must be a non-negative number');
        \}
        if (newValue \< 0) \{
            throw new Error('VAT must be a non-negative number');            
        \}
        this._VAT = newValue;
    \}

    get active() \{
        return this._active;
    \}

    set active(newValue) \{
        if (typeof newValue !== 'boolean') \{
            throw new Error('Active status must be a boolean');
        \}
        this._active = newValue;
    \}

    toString() \{
        const output = \[
            `Package: \\$\{this.name\}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): \\$\{this.value\}`,
            `- Value (VAT \\$\{this.VAT\}%): \\$\{this.value * (1 + this.VAT / 100)\}`
        \];
        return output.join('\n');
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>Missing name getter/setter\</testInfo\>
PaymentPackage = class PaymentPackage \{
    constructor(name, value) \{
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value        
        this.active = true; // Default value
    \}

    get value() \{
        return this._value;
    \}

    set value(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('Value must be a non-negative number');
        \}
        if (newValue \< 0) \{
            throw new Error('Value must be a non-negative number');            
        \}
        this._value = newValue;
    \}
    
    get VAT() \{
        return this._VAT;
    \}

    set VAT(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('VAT must be a non-negative number');
        \}
        if (newValue \< 0) \{
            throw new Error('VAT must be a non-negative number');            
        \}
        this._VAT = newValue;
    \}

    get active() \{
        return this._active;
    \}

    set active(newValue) \{
        if (typeof newValue !== 'boolean') \{
            throw new Error('Active status must be a boolean');
        \}
        this._active = newValue;
    \}

    toString() \{
        const output = \[
            `Package: \\$\{this.name\}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): \\$\{this.value\}`,
            `- Value (VAT \\$\{this.VAT\}%): \\$\{this.value * (1 + this.VAT / 100)\}`
        \];
        return output.join('\n');
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>Missing value getter/setter\</testInfo\>
PaymentPackage = class PaymentPackage \{
    constructor(name, value) \{
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value        
        this.active = true; // Default value
    \}

    get name() \{
        return this._name;
    \}

    set name(newValue) \{
        if (typeof newValue !== 'string') \{
            throw new Error('Name must be a non-empty string');
        \}
        if (newValue.length === 0) \{
            throw new Error('Name must be a non-empty string');            
        \}
        this._name = newValue;
    \}
    
    get VAT() \{
        return this._VAT;
    \}

    set VAT(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('VAT must be a non-negative number');
        \}
        if (newValue \< 0) \{
            throw new Error('VAT must be a non-negative number');            
        \}
        this._VAT = newValue;
    \}

    get active() \{
        return this._active;
    \}

    set active(newValue) \{
        if (typeof newValue !== 'boolean') \{
            throw new Error('Active status must be a boolean');
        \}
        this._active = newValue;
    \}

    toString() \{
        const output = \[
            `Package: \\$\{this.name\}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): \\$\{this.value\}`,
            `- Value (VAT \\$\{this.VAT\}%): \\$\{this.value * (1 + this.VAT / 100)\}`
        \];
        return output.join('\n');
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>Missing VAT getter/setter\</testInfo\>
PaymentPackage = class PaymentPackage \{
    constructor(name, value) \{
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value        
        this.active = true; // Default value
    \}

    get name() \{
        return this._name;
    \}

    set name(newValue) \{
        if (typeof newValue !== 'string') \{
            throw new Error('Name must be a non-empty string');
        \}
        if (newValue.length === 0) \{
            throw new Error('Name must be a non-empty string');            
        \}
        this._name = newValue;
    \}

    get value() \{
        return this._value;
    \}

    set value(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('Value must be a non-negative number');
        \}
        if (newValue \< 0) \{
            throw new Error('Value must be a non-negative number');            
        \}
        this._value = newValue;
    \}

    get active() \{
        return this._active;
    \}

    set active(newValue) \{
        if (typeof newValue !== 'boolean') \{
            throw new Error('Active status must be a boolean');
        \}
        this._active = newValue;
    \}

    toString() \{
        const output = \[
            `Package: \\$\{this.name\}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): \\$\{this.value\}`,
            `- Value (VAT \\$\{this.VAT\}%): \\$\{this.value * (1 + this.VAT / 100)\}`
        \];
        return output.join('\n');
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>Missing active getter/setter\</testInfo\>
PaymentPackage = class PaymentPackage \{
    constructor(name, value) \{
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value        
        this.active = true; // Default value
    \}

    get name() \{
        return this._name;
    \}

    set name(newValue) \{
        if (typeof newValue !== 'string') \{
            throw new Error('Name must be a non-empty string');
        \}
        if (newValue.length === 0) \{
            throw new Error('Name must be a non-empty string');            
        \}
        this._name = newValue;
    \}

    get value() \{
        return this._value;
    \}

    set value(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('Value must be a non-negative number');
        \}
        if (newValue \< 0) \{
            throw new Error('Value must be a non-negative number');            
        \}
        this._value = newValue;
    \}
    
    get VAT() \{
        return this._VAT;
    \}

    set VAT(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('VAT must be a non-negative number');
        \}
        if (newValue \< 0) \{
            throw new Error('VAT must be a non-negative number');            
        \}
        this._VAT = newValue;
    \}

    toString() \{
        const output = \[
            `Package: \\$\{this.name\}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): \\$\{this.value\}`,
            `- Value (VAT \\$\{this.VAT\}%): \\$\{this.value * (1 + this.VAT / 100)\}`
        \];
        return output.join('\n');
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>VAT not set in constructor\</testInfo\>
PaymentPackage = class PaymentPackage \{
    constructor(name, value) \{
        this.name = name;
        this.value = value;     
        this.active = true; // Default value
    \}

    get name() \{
        return this._name;
    \}

    set name(newValue) \{
        if (typeof newValue !== 'string') \{
            throw new Error('Name must be a non-empty string');
        \}
        if (newValue.length === 0) \{
            throw new Error('Name must be a non-empty string');            
        \}
        this._name = newValue;
    \}

    get value() \{
        return this._value;
    \}

    set value(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('Value must be a non-negative number');
        \}
        if (newValue \< 0) \{
            throw new Error('Value must be a non-negative number');            
        \}
        this._value = newValue;
    \}
    
    get VAT() \{
        return this._VAT;
    \}

    set VAT(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('VAT must be a non-negative number');
        \}
        if (newValue \< 0) \{
            throw new Error('VAT must be a non-negative number');            
        \}
        this._VAT = newValue;
    \}

    get active() \{
        return this._active;
    \}

    set active(newValue) \{
        if (typeof newValue !== 'boolean') \{
            throw new Error('Active status must be a boolean');
        \}
        this._active = newValue;
    \}

    toString() \{
        const output = \[
            `Package: \\$\{this.name\}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): \\$\{this.value\}`,
            `- Value (VAT \\$\{this.VAT\}%): \\$\{this.value * (1 + this.VAT / 100)\}`
        \];
        return output.join('\n');
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>Active not set in constructor\</testInfo\>
PaymentPackage = class PaymentPackage \{
    constructor(name, value) \{
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value
    \}

    get name() \{
        return this._name;
    \}

    set name(newValue) \{
        if (typeof newValue !== 'string') \{
            throw new Error('Name must be a non-empty string');
        \}
        if (newValue.length === 0) \{
            throw new Error('Name must be a non-empty string');            
        \}
        this._name = newValue;
    \}

    get value() \{
        return this._value;
    \}

    set value(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('Value must be a non-negative number');
        \}
        if (newValue \< 0) \{
            throw new Error('Value must be a non-negative number');            
        \}
        this._value = newValue;
    \}
    
    get VAT() \{
        return this._VAT;
    \}

    set VAT(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('VAT must be a non-negative number');
        \}
        if (newValue \< 0) \{
            throw new Error('VAT must be a non-negative number');            
        \}
        this._VAT = newValue;
    \}

    get active() \{
        return this._active;
    \}

    set active(newValue) \{
        if (typeof newValue !== 'boolean') \{
            throw new Error('Active status must be a boolean');
        \}
        this._active = newValue;
    \}

    toString() \{
        const output = \[
            `Package: \\$\{this.name\}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): \\$\{this.value\}`,
            `- Value (VAT \\$\{this.VAT\}%): \\$\{this.value * (1 + this.VAT / 100)\}`
        \];
        return output.join('\n');
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>Incorrect value validation\</testInfo\>
PaymentPackage = class PaymentPackage \{
    constructor(name, value) \{
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value        
        this.active = true; // Default value
    \}

    get name() \{
        return this._name;
    \}

    set name(newValue) \{
        if (typeof newValue !== 'string') \{
            throw new Error('Name must be a non-empty string');
        \}
        if (newValue.length === 0) \{
            throw new Error('Name must be a non-empty string');            
        \}
        this._name = newValue;
    \}

    get value() \{
        return this._value;
    \}

    set value(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('Value must be a non-negative number');
        \}
        if (newValue \<= 0) \{
            throw new Error('Value must be a non-negative number');            
        \}
        this._value = newValue;
    \}
    
    get VAT() \{
        return this._VAT;
    \}

    set VAT(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('VAT must be a non-negative number');
        \}
        if (newValue \< 0) \{
            throw new Error('VAT must be a non-negative number');            
        \}
        this._VAT = newValue;
    \}

    get active() \{
        return this._active;
    \}

    set active(newValue) \{
        if (typeof newValue !== 'boolean') \{
            throw new Error('Active status must be a boolean');
        \}
        this._active = newValue;
    \}

    toString() \{
        const output = \[
            `Package: \\$\{this.name\}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): \\$\{this.value\}`,
            `- Value (VAT \\$\{this.VAT\}%): \\$\{this.value * (1 + this.VAT / 100)\}`
        \];
        return output.join('\n');
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>Incorrect VAT validation\</testInfo\>
PaymentPackage = class PaymentPackage \{
    constructor(name, value) \{
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value        
        this.active = true; // Default value
    \}

    get name() \{
        return this._name;
    \}

    set name(newValue) \{
        if (typeof newValue !== 'string') \{
            throw new Error('Name must be a non-empty string');
        \}
        if (newValue.length === 0) \{
            throw new Error('Name must be a non-empty string');            
        \}
        this._name = newValue;
    \}

    get value() \{
        return this._value;
    \}

    set value(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('Value must be a non-negative number');
        \}
        if (newValue \< 0) \{
            throw new Error('Value must be a non-negative number');            
        \}
        this._value = newValue;
    \}
    
    get VAT() \{
        return this._VAT;
    \}

    set VAT(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('VAT must be a non-negative number');
        \}
        if (newValue \> 0) \{
            throw new Error('VAT must be a non-negative number');            
        \}
        this._VAT = newValue;
    \}

    get active() \{
        return this._active;
    \}

    set active(newValue) \{
        if (typeof newValue !== 'boolean') \{
            throw new Error('Active status must be a boolean');
        \}
        this._active = newValue;
    \}

    toString() \{
        const output = \[
            `Package: \\$\{this.name\}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): \\$\{this.value\}`,
            `- Value (VAT \\$\{this.VAT\}%): \\$\{this.value * (1 + this.VAT / 100)\}`
        \];
        return output.join('\n');
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>Output does not convert VAT to percentage\</testInfo\>
PaymentPackage = class PaymentPackage \{
    constructor(name, value) \{
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value        
        this.active = true; // Default value
    \}

    get name() \{
        return this._name;
    \}

    set name(newValue) \{
        if (typeof newValue !== 'string') \{
            throw new Error('Name must be a non-empty string');
        \}
        if (newValue.length === 0) \{
            throw new Error('Name must be a non-empty string');            
        \}
        this._name = newValue;
    \}

    get value() \{
        return this._value;
    \}

    set value(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('Value must be a non-negative number');
        \}
        if (newValue \< 0) \{
            throw new Error('Value must be a non-negative number');            
        \}
        this._value = newValue;
    \}
    
    get VAT() \{
        return this._VAT;
    \}

    set VAT(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('VAT must be a non-negative number');
        \}
        if (newValue \< 0) \{
            throw new Error('VAT must be a non-negative number');            
        \}
        this._VAT = newValue;
    \}

    get active() \{
        return this._active;
    \}

    set active(newValue) \{
        if (typeof newValue !== 'boolean') \{
            throw new Error('Active status must be a boolean');
        \}
        this._active = newValue;
    \}

    toString() \{
        const output = \[
            `Package: \\$\{this.name\}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): \\$\{this.value\}`,
            `- Value (VAT \\$\{this.VAT\}%): \\$\{this.value * (1 + this.VAT)\}`
        \];
        return output.join('\n');
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>Missing inactive label in output\</testInfo\>
PaymentPackage = class PaymentPackage \{
    constructor(name, value) \{
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value        
        this.active = true; // Default value
    \}

    get name() \{
        return this._name;
    \}

    set name(newValue) \{
        if (typeof newValue !== 'string') \{
            throw new Error('Name must be a non-empty string');
        \}
        if (newValue.length === 0) \{
            throw new Error('Name must be a non-empty string');            
        \}
        this._name = newValue;
    \}

    get value() \{
        return this._value;
    \}

    set value(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('Value must be a non-negative number');
        \}
        if (newValue \< 0) \{
            throw new Error('Value must be a non-negative number');            
        \}
        this._value = newValue;
    \}
    
    get VAT() \{
        return this._VAT;
    \}

    set VAT(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('VAT must be a non-negative number');
        \}
        if (newValue \< 0) \{
            throw new Error('VAT must be a non-negative number');            
        \}
        this._VAT = newValue;
    \}

    get active() \{
        return this._active;
    \}

    set active(newValue) \{
        if (typeof newValue !== 'boolean') \{
            throw new Error('Active status must be a boolean');
        \}
        this._active = newValue;
    \}

    toString() \{
        const output = \[
            `Package: \\$\{this.name\}`,
            `- Value (excl. VAT): \\$\{this.value\}`,
            `- Value (VAT \\$\{this.VAT\}%): \\$\{this.value * (1 + this.VAT / 100)\}`
        \];
        return output.join('\n');
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