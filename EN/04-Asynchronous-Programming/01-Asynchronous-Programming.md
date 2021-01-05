# Asynchronous Programming

[slide]

# Event Loop

[vimeo-video]
[stream language="EN" videoId="497193139/39a6d2879a" default /]
[stream language="RO" videoId="497193139/39a6d2879a"  /]
[/video-vimeo]

The event loop in JavaScript is **where all the incoming events are processed**.

It queues event handlers in the **Event queue** and executes them in the **Call stack**, producing JS code.

Here is how the whole process happens:

[image assetsSrc="JS-Applications-Asynchronous-Programming.gif" /]

[/slide]

[slide]

# Asynchronous Programming in JS

[vimeo-video]
[stream language="EN" videoId="497193187/781d77b299" default /]
[stream language="RO" videoId="497193187/781d77b299"  /]
[/video-vimeo]

As a **single-threaded** language JavaScript has just **one call stack** and **one memory heap**.

In simpler words - chunks of code are executed **one at a time**. This way each of those chunks must wait for the previous one to be finished.

Running code like this can **block an entire webpage** due to the waiting time of **one function**, which is a serious user experience problem.

There are, however, several ways to go around JavaScript's synchronous nature:

- `callbacks` - A callback is a function, which is **an argument to another function** and performs a certain operation inside of it.

```js
function calculateTax(income) {
  console.log(income * 0.2);
}

function outer(callback) {
  let income = 1000;
  callback(income);
}

outer(calculateTax); // outer is called with calculateTax as a callback
```

- `promises` - A promise is an object, **representing data that will be obtained later on**. It allows the program to keep running, without waiting for that data.

```js
let promise = new Promise(function (resolve, reject) {
  // Get data asynchronously, use resolve or reject after.
});
```

- `"Async" functions` - Fundamentally **built on promises**, but much easier to use. Allow for a **cleaner and more readable code**.

```js
async function getData(url) {
  let data = await fetch(url);
  let text = await data.text();

  console.log(text);
}
```

It is important to know that the `async` keyword **must be provided in front of the function** and the `await` keyword is put in front of asynchronous operations.

[/slide]

[slide]

# Asynchronous Programming

[vimeo-video]
[stream language="EN" videoId="497193235/5e5e63906b" default /]
[stream language="RO" videoId="497193235/5e5e63906b"  /]
[/video-vimeo]

The easiest way to understand synchronous and asynchronous programming is to imagine a company that has a store and a website.

- In the store, people have to **wait in a queue** to buy something. (synchronous programming)

- On the website, however, hundreds of people can buy items **independently of each other**. (asynchronous programming)

Here is a diagram of some code's run time to better visualize the concept:

[image assetsSrc="JS-Applications-Asynchronous-Programming-1.png" /]

# Example 1: Asynchronous Programming

Here is an example of some asynchronous behavior in JavaScript:

```js live
function printSam() {
  console.log("Sam");
}

function printGeorge() {
  console.log("George");
}

console.log("Jessica");

setTimeout(printSam, 3000);

console.log("Tyson");

setTimeout(printGeorge, 1000);
```

What happens here is that the code is executed **line by line**:

- Firstly, "Jessica" is printed.

- After that the callback function `printSam` is **scheduled to run after three seconds**.

- "Tyson" is printed since `printSam`'s three seconds **have not yet passed**.

- `printGeorge` is **scheduled to run after one second** while `printSam`'s three seconds are still yet to pass.

- One second passes and `printGeorge` is executed.

- Three seconds pass and `printSam` is executed.

If the same code were executed synchronously, the names would be in the following order:

- Jessica

- Sam

- Tyson

- George

[/slide]
