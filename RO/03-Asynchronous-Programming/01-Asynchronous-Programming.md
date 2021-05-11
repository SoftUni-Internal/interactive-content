# Asynchronous Programming

[slide hideTitle]

# Event Loop

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/04.JS-Applications-Asynchronous-Programming/EN/Asynchronous-Programming-3-4-Asynchronous-Programming-and-the-Event-loop-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The event loop in JavaScript is **where all the incoming events are processed**.

It queues event handlers in the **Event queue** and executes them in the **Call stack**, producing JS code.

The event loop monitors the **Call stack** and the **Callback queue**.

The event loop takes the **first event** from the queue and pushes it into the Call stack (if it is empty).

[image assetsSrc="jsapps-async-programming-event-loop.png" /]


[/slide]

[slide hideTitle]

# Asynchronous Programming in JavaScript

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/04.JS-Applications-Asynchronous-Programming/EN/Asynchronous-Programming-5-6-Asynchronous-Programming-in-JavaScript-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

As a **single-threaded** language, JavaScript has just **one call stack** and **one memory heap**.

In other words - chunks of code are executed **one at a time**. 

This way, each of those chunks must wait for the previous one to be finished.

Running code like this can **block an entire webpage** due to the waiting time of **one function**, which is a serious user experience problem.

There are several ways to go around JavaScript's synchronous nature:

- `callback` - A callback is a function, which is passed as **an argument to another function** and performs a certain operation inside of it

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

Callbacks are used when one function needs to wait for another function to complete before executing.

- `promise` - A promise is an object, **representing data that will be obtained later on**. It allows the program to keep running, without waiting for that data

```js
let promise = new Promise(function(resolve, reject) {
    // Get data asynchronously, use resolve or reject after.
});
```

- `async function` - Fundamentally **built on promises**, but much easier to use. Allows for a **cleaner and more readable code**

```js
async function getData(url) {
    let data = await fetch(url);
    let text = await data.text();

    console.log(text);
}
```

It is important to know that the `async` keyword **must be placed in front of the function** and the `await` keyword is put in front of asynchronous operations.

[/slide]

[slide hideTitle]

# Example: Asynchronous Programming

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/04.JS-Applications-Asynchronous-Programming/EN/Asynchronous-Programming-7-Asynchronous-Programming-Example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The easiest way to understand synchronous and asynchronous programming is to imagine a company that has a physical store and a website.

- In the physical store, people have to **wait in queue** to buy something: synchronous programming

- On the website, however, hundreds of people can buy items **independently of each other**: asynchronous programming

Here is a diagram of some code's run time to better visualize the concept:

[image assetsSrc="JS-Applications-Asynchronous-Programming-1.png" /]


Here is an example of some asynchronous behavior in JavaScript:

```js live
function printSam() {
    console.log('Sam');
}

function printGeorge() {
    console.log('George');
}

console.log('Jessica');

setTimeout(printSam, 3000);

console.log('Tyson');

setTimeout(printGeorge, 1000);
```

What happens here is that the code is executed **line by line**:

- Firstly, "Jessica" is printed

- After that, the callback function `printSam` is  **scheduled to run after three seconds** 

- "Tyson" is printed since `printSam`'s three seconds **have not yet passed**

- `printGeorge` is **scheduled to run after one second** while `printSam`'s three seconds are still yet to pass

- One second passes and `printGeorge` is executed

- Three seconds pass and `printSam` is executed

If the same code was executed synchronously, the names would be in the following order:

- "Jessica"

- "Sam"

- "Tyson"

- "George"

[/slide]
