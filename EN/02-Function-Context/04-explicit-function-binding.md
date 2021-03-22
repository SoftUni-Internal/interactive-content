# Explicit Function Binding

[slide hideTitle]

# Explicit Binding

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/EN/js-advanced-function-context-16-17-explicit-binding-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Binding allows us to modify the context of a function, essentially changing what the `this` keyword points to.

**Explicit binding** is what happens when we use `call()`, `apply()` or `bind()` on a function. 

This allows us to bind a function to a particular object and use it as if it was a method of that object. 

This essentially changes the context of `this`. 

In other words, we are binding the function to a context of our choice.

Let us look at an example using `call()`:

```js live
function speak(message) {
    console.log(`My name is ${this.name}. ${message}`);
}

let person = {
    name: 'John'
};

speak.call(person, 'This is my story...');
```
Normally `this` would have pointed back to the **global object** or **window** and returned `undefined` for `this.name`.

We explicitly bound the object **person** to the `speak()` function using `call()`.

It is an outside function but still behaves as though `speak()` is a method that belongs to the person object.

[/slide]

[slide hideTitle]

# Changing the Context: Call()

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/EN/js-advanced-function-context-18-19-changing-the-context-call-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

`call()` calls a function with a given value of `this` and optional arguments. 

It changes the context of the function to the given object.

```js
functionName.call(objectToBind, additionalArguments);
```

You can have 0, 1 or more arguments and when calling the object you can add them like so `function.call(object, argument1, argument2, argumentN)`;

The `call()` method does not make a copy of the function, it immediately executes it.

```js live
let praise = function(...praises) {
    console.log(`This is ${this.name}.`);

    let compliments = praises.reduce((acc, curr) => {
        let el = `-- ${curr}\n`;
        return acc + el;
    }, `He is:\n`).trim();
    return compliments;
}

let dog = {
    name: 'Rex',
}

console.log(praise.call(dog,
    'A good boy', 'My best friend'));


let cat = {
    name: 'Charlie'
}

console.log(praise.call(cat,
    'A good companion', 'A goofball'));
```

In the example above, you can see we used the same function that did not belong to either object and bound those objects to it.

Every time we used `call()` the context of `this` was different.

[/slide]

[slide hideTitle]

# Changing the Context: Apply()

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/EN/js-advanced-function-context-20-changing-the-context-apply-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

`apply()` and `call()` serve the same purpose. 

However, `call()` takes a list of arguments, while `apply()` takes an array.

To illustrate this with the previous **example**:

Using ``call()``:

```js
console.log(praise.call(dog,
    'A good boy', 'My best friend'
));
```

Using ``apply()``:

```js
console.log(praise.apply(dog,
    ['A good boy', 'My best friend']
));
```

If you have an array of arguments, you can still utilize `call()` by using the spread operator:

```js
functionName.call(thisContext, ...[yourArray]);
```

[/slide]


[slide hideTitle]

# Example of Apply()

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/EN/js-advanced-function-context-21-apply-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

```js live
const firstPerson = {
    name: 'Peter',
    prof: 'Fisherman',
    shareInfo: function() {
        console.log(`${this.name} works as a ${this.prof}`);
    }
};

const secondPerson = {
    name: 'George',
    prof: 'Manager'
};
firstPerson.shareInfo.apply(secondPerson);
// George works as a Manager
```

[/slide]

[slide hideTitle]

# Changing the Context: Bind()

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/EN/js-advanced-function-context-22-changing-the-context-bind-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

`bind()` creates a **new function** and has `this` set to whatever value we provided. 

The function is not directly executed when using `bind()`. 

It essentially allows objects to borrow methods from other objects without us having to manually make copies of that method. 

Let us imagine we have a **student** that can `study()`:

```js
let student = {
    alias: `Motivated student`,
    subject: 'Web Development',
    study: function(hours) {
        console.log(`${this.alias} studies 
      ${this.subject} ${hours} hours a day`);
    }
};
```

We also have a professor that can `teach()`:

```js
let professor = {
    alias: `Grumpy professor`,
    subject: 'Mathematics',
    teach: function(hours) {
        console.log(`${this.alias} teaches ${this.subject} ${hours} hours a day`)
    }
};
```

Now imagine the student has advanced so much that he is now able to `teach()`. 

Use `bind()` to borrow the method from the **professor** object.

```js
let teach = professor.teach.bind(student, 2);
teach();
// Motivated student teaches Web Development for 2 hours a day
```

By using `bind(student, 2)` we passed the **student** object as a first argument, changing the context of `this` from **professor** to **student** and passed **2** as a second argument.

See it in action:

```js live
let student = {
    alias: `Motivated student`,
    subject: 'Web Development',
    study: function(hours) {
        console.log(`${this.alias} studies 
      ${this.subject} ${hours} hours a day`);
    }
};

let professor = {
    alias: `Grumpy professor`,
    subject: 'Mathematics',
    teach: function(hours) {
        console.log(`${this.alias} teaches ${this.subject} ${hours} hours a day`)
    }
};

let teach = professor.teach.bind(student, 2);
teach();
```

This is known as function borrowing in JavaScript. 

[/slide]

[slide hideTitle]

# Example of Bind()

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/EN/js-advanced-function-context-23-bind-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

```js live
const x = 42;
const getX = function() {
    return this.x;
}
const module = {
    x,
    getX
};
const unboundGetX = module.getX;
console.log(unboundGetX()); // undefined
const boundGetX = unboundGetX.bind(module);
console.log(boundGetX()); // 42
```

[/slide]

[slide hideTitle]

# Problem with Solution: Area and Volume Calculator

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/EN/js-advanced-function-context-26-solution-area-and-volume-calculator-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Area and Volume Calculator" taskId="js-advanced-function-context-Area-and-Volume-Calculator" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]

```
function solve(area, vol, input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Write a function which **calculates** the **area** and the **volume** of a figure, which is **defined** by its **coordinates** 
(**x**, **y**, **z**). 

The functions **area** and **vol** are **passed as parameters** to your function:

```js
function area() {
  return this.x * this.y;
};
```

```js
function vol() {
  return this.x * this.y * this.z;
};
```

## Input
You will receive 3 parameters - the functions area and vol and a string, which contains the figures' coordinates. 

**For more information check the examples.**


## Output
The output should be **returned** as an **array of objects**. 

Each object has **two properties**: the figure's **area** and **volume**.

```js
[
  { area: ${area1}, volume: ${volume1} },
  { area: ${area2}, volume: ${volume2} },
  ...
]

```

# Example
## Example 1

## Input

```js
area, vol, '[ 
{"x":"1","y":"2","z":"10"}, 
{"x":"7","y":"7","z":"10"}, 
{"x":"5","y":"2","z":"10"} 
]'
```

## Output

```js
[
  { area: 2, volume: 20 }, 
  { area: 49, volume: 490 },
  { area: 10, volume: 100 }
]
```

## Example 2
## Input

```js
area, vol, '[ 
{"x":"10","y":"-22","z":"10"}, 
{"x":"47","y":"7","z":"-5"}, 
{"x":"55","y":"8","z":"0"}, 
{"x":"100","y":"100","z":"100"}, 
{"x":"55","y":"80","z":"250"} 
]' 
```

## Output

```js
[
  { area: 220, volume: 2200 },
  { area: 329, volume: 1645 },
  { area: 440, volume: 0 },
  { area: 10000, volume: 1000000 },
  { area: 4400, volume: 1100000 }
]
```

## Submission

Submit only the `solve()` function.

[/task-description]
[code-io /]
[tests]
[test]
[input]
function area() \{
    return this.x \* this.y\*156;
\};
function vol() \{
    return this.x \* this.y \* this.z;
\};
let actual = result(area, vol,'\[\{"x":"1","y":"2","z":"10"\},\{"x":"7","y":"7","z":"10"\},\{"x":"5","y":"2","z":"10"\}\]');
let expected = \[
  \{ area: 312, volume: 20 \},
  \{ area: 7644, volume: 490 \},
  \{ area: 1560, volume: 100 \}
\];
assert.deepEqual(actual,expected,"The returned value is not correct")
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
function area() \{
    return this.x \* this.y\*3;
\};
function vol() \{
    return this.x \* this.y \* this.z/16;
\};
let actual = result(area, vol,'\[\{"x":"1","y":"2","z":"10"\},\{"x":"7","y":"7","z":"10"\},\{"x":"5","y":"2","z":"10"\}\]');
let expected = \[
  \{ area: 6, volume: 1.25 \},
  \{ area: 147, volume: 30.625 \},
  \{ area: 30, volume: 6.25 \}
\]
assert.deepEqual(actual,expected,"The returned value is not correct")
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
function area() \{
    return this.x \* this.y;
\};
function vol() \{
    return this.x \* this.y \* this.z;
\};
let actual = result(area, vol,'\[\{"x":"1","y":"2","z":"10"\},\{"x":"7","y":"7","z":"10"\},\{"x":"5","y":"2","z":"10"\}\]');
let expected = \[
  \{ area: 2, volume: 20 \},
  \{ area: 49, volume: 490 \},
  \{ area: 10, volume: 100 \}
\];
assert.deepEqual(actual,expected,"The returned value is not correct")
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
function area() \{
    return this.x \* this.y;
\};
function vol() \{
    return this.x \* this.y \* this.z;
\};
let actual = result(area, vol,'\[\{"x":"10","y":"-22","z":"10"\},\{"x":"47","y":"7","z":"-5"\},\{"x":"55","y":"8","z":"0"\},\{"x":"100","y":"100","z":"100"\},\{"x":"55","y":"80","z":"250"\}\]');
let expected = \[
  \{ area: 220, volume: 2200 \},
  \{ area: 329, volume: 1645 \},
  \{ area: 440, volume: 0 \},
  \{ area: 10000, volume: 1000000 \},
  \{ area: 4400, volume: 1100000 \}
\];
assert.deepEqual(actual,expected,"The returned value is not correct")
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
