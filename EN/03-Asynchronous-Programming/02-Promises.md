# Promises

[slide hideTitle]

# What is a Promise?

[vimeo-video]
[stream language="EN" videoId="497193252/5a46d55624" default /]
[stream language="RO" videoId="497193252/5a46d55624"  /]
[/video-vimeo]

Executing functions that rely on value from foreign sources is a **tedious and slow task**.

Since the information **does not arrive immediately**, the whole function **must be blocked** until some value is present.

Synchronously getting resources from a database, for example, can **block an entire web page**.

Here is where promises come to save the day. Instead of waiting for the operation to finish, promises **represent it as a state**, allowing the function to **carries on with the execution**.

These states are:

- `Fulfilled`: The operation was completed with success.

- `Rejected`: The operation has failed.

- `Pending`: This is the state, in which a promise is initialized. It means the promise is neither resolved nor rejected.

Promises are initialized with the `Promise` object;

```js
new Promise(executor);
```

Promises can also be **chained together**.

This way the first promise **passes information about the process** to the second one, which reacts accordingly and so on...

Here is a visual representation of the chaining process:

[image assetsSrc="JS-Applications-Asynchronous-Programming-2.png" /]

[/slide]

[slide]

# Promise Methods

[vimeo-video]
[stream language="EN" videoId="497193280/a49d93bcb6" default /]
[stream language="RO" videoId="497193280/a49d93bcb6"  /]
[/video-vimeo]

Promises offer a variety of useful methods for an easy and effective work process:

- `Promise.reject(reason)` - Returns a `Promise` object, that has been **rejected for a specific reason**.

```js live
Promise.reject("There was an error!").then(
  (successMessage) => {
    console.log(successMessage);
  },
  (errorMessage) => {
    console.log(errorMessage);
  }
);
```

- `Promise.resolve(value)`: Returns a **resolved** `Promise` object with the provided value.

If the value is a promise - **returns the promise**.

```js live
Promise.resolve("Operation was successful!").then(
  (successMessage) => {
    console.log(successMessage);
  },
  (errorMessage) => {
    console.log(errorMessage);
  }
);
```

- `Promise.all(iterable)`: Takes an array of promises and returns a single `Promise`, which **resolves** to an array of values, **if all the given promises are resolved**. 

Otherwise, it would **reject immediately**.

```js live
let firstPromise = new Promise((resolve, reject) => {
  resolve("Information acquired successfully!");
});
let secondPromise = Promise.resolve("No errors.");
let thirdPromise = Promise.resolve(7);

Promise.all([firstPromise, secondPromise, thirdPromise]).then((data) => {
  console.log(data);
});
```

- `Promise.allSettled(iterable)`: Takes an array of promises and returns a `Promise` object only after all of the given promises are **either resolved or rejected**.

```js live
let firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error!");
  }, 1000);
});

let secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
  }, 3000);
});

Promise.allSettled([firstPromise, secondPromise]).then((data) => {
  data.forEach((promise) => {
    console.log(promise);
  });
});
```

- `Promise.race(iterable)`: Takes an array of promises and after the first one is **either resolved or rejected**, returns a `Promise` object that resolves or rejects with its value.

```js live
let firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This took a lot of time.");
  }, 5000);
});

let secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Operation finished quickly!");
  }, 1000);
});

let thirdPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This took three seconds to finish!");
  }, 3000);
});

Promise.race([firstPromise, secondPromise, thirdPromise]).then((data) => {
  console.log(data);
});
```

- `Promise.finally(function)`: Takes a callback function to be executed **after the promise is settled**.

```js live
Promise.resolve("Operation succeeded!")
  .then((data) => {
    console.log(data);
  })
  .finally(() => {
    console.log("This is printed after the oprations has finished!");
  });
```

[/slide]

[slide]

# Example 1: Promise.then()

[vimeo-video]
[stream language="EN" videoId="497192784/74c03a37f9" default /]
[stream language="RO" videoId="497192784/74c03a37f9"  /]
[/video-vimeo]

The `.then()` method makes chaining promises possible.

It is used **after a promise has been initialized** and takes **two parameters** :

- Callback function **if the promise is resolved**.

- Callback function **if the promise is rejected**.

Here is an example of how `.then()` is used:

```js live
console.log("This will appear first");

new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Eddie");
  }, 1000);
}).then(function (response) {
  console.log("My name is: " + response);
});

console.log("This will appear second");
```

As seen above, the `.then()` method **waits for the completion with the previous promise** and **runs with its return value**.

[/slide]

[slide]

# Example 2: Promise.catch()

[vimeo-video]
[stream language="EN" videoId="497192805/b85fc82d6e" default /]
[stream language="RO" videoId="497192805/b85fc82d6e"  /]
[/video-vimeo]

The `.catch()` method is used to **"catch thrown errors" by promises**. 

It is very useful to **handle possible promise rejections**.

Here is how this method is used with the code from the previous example:

```js live
console.log("This will appear first");

new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject("Error while getting name!");
  }, 1000);
})
  .then(function (response) {
    console.log("My name is: " + response);
  })
  .catch(function (err) {
    console.log(err);
  });

console.log("This will appear second");
```

It is good to know that another `.then()` method can be placed **after** `.catch()`. 

It will execute **whether the promise is rejected or not**.

[/slide]
