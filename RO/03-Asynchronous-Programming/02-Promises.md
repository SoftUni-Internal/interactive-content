# Promises

[slide hideTitle]

# What is a Promise?

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/04.JS-Applications-Asynchronous-Programming/EN/Asynchronous-Programming-8-9-10-What-is-a-Promise--,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Executing functions that rely on external data is a rather **slow task**.

Since the information **does not arrive immediately**, the whole function **must be blocked** until some value is present.

Synchronously getting resources from a database, for example, can **block an entire web page**.

Here is where promises come to save the day. 

Instead of waiting for the operation to finish, promises **represent it as a state**, allowing the function to **carry on with the execution**.

These states are:

- **Fulfilled** - The operation was completed with success

- **Rejected** - The operation has failed

- **Pending** - This is the state, in which a promise is initialized. It means the promise is neither resolved nor rejected

Promises are initialized with the **Promise** object.

```js
new Promise(executor);
```

Promises can also be **chained together**.

This way, the first promise **passes information about the process** to the second one, which reacts accordingly and so on.

Here is a visual representation of the chaining process:

[image assetsSrc="jsapps-async-programming-promises.png" /]

[/slide]

[slide hideTitle]

# Promise Methods

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/04.JS-Applications-Asynchronous-Programming/EN/Asynchronous-Programming-11-12-Promise-methods-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Promises offer a variety of useful methods for an easy and effective work process:

- `Promise.reject(reason)` - Returns a **Promise** object that has been rejected for a specific reason

```js live
Promise.reject('There was an error!').then(
    (successMessage) => {
        console.log(successMessage);
    },
    (errorMessage) => {
        console.log(errorMessage);
    }
);
```

- `Promise.resolve(value)` - Returns a **resolved** `Promise` object with the provided value

If the value is a promise - **returns the promise**.

```js live
Promise.resolve('Operation was successful!').then(
    (successMessage) => {
        console.log(successMessage);
    },
    (errorMessage) => {
        console.log(errorMessage);
    }
);
```

- `Promise.all(iterable)` - Takes an array of promises and returns a single **Promise**

The returned promise **resolves** to an array of values, **if all the given promises are resolved**.


Otherwise, it would **reject immediately**.

```js live
let firstPromise = new Promise((resolve, reject) => {
    resolve('Information acquired successfully!');
});
let secondPromise = Promise.resolve('No errors.');
let thirdPromise = Promise.resolve(7);

Promise.all([firstPromise, secondPromise, thirdPromise]).then((data) => {
    console.log(data);
});
```

- `Promise.allSettled(iterable)` - Takes an array of promises and returns a `Promise` object.

This can only happen after all of the given promises are **either resolved or rejected**.


```js live
let firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Error!');
    }, 1000);
});

let secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success!');
    }, 3000);
});

Promise.allSettled([firstPromise, secondPromise]).then((data) => {
    data.forEach((promise) => {
        console.log(promise);
    });
});
```

- `Promise.race(iterable)` - Takes an array of promises and after the first one is either **resolved** or **rejected**

This method returns a Promise object that resolves or rejects with its value


```js live
let firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This took a lot of time.');
    }, 5000);
});

let secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Operation finished quickly!');
    }, 1000);
});

let thirdPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This took three seconds to finish!');
    }, 3000);
});

Promise.race([firstPromise, secondPromise, thirdPromise]).then((data) => {
    console.log(data);
});
```

- `Promise.finally(function)` - Takes a callback function to be executed after the promise is settled

```js live
Promise.resolve('Operation succeeded!')
    .then((data) => {
        console.log(data);
    })
    .finally(() => {
        console.log('This is printed after the oprations has finished!');
    });
```

[/slide]

[slide hideTitle]

# Promise.then(): Example

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/04.JS-Applications-Asynchronous-Programming/EN/Asynchronous-Programming-13-Promise.then()-Example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The `then()` method makes chaining promises possible.

It is used **after a promise has been initialized** and takes **two parameters**:

- A callback function **if the promise is resolved**

- A callback function **if the promise is rejected**

Here is an example of how `then()` is used:

```js live
console.log('This will appear first');

new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('Eddie');
    }, 1000);
}).then(function(response) {
    console.log('My name is: ' + response);
});

console.log('This will appear second');
```

As seen above, the `then()` method **waits for the completion with the previous promise** and **executes with its return value as an argument**.

[/slide]

[slide hideTitle]

# Promise.catch(): Example

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/04.JS-Applications-Asynchronous-Programming/EN/Asynchronous-Programming-14-Promise.catch()-Example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The `catch()` method is used to "**catch thrown errors**" by promises. 

It is very useful to **handle possible promise rejections**.

Here is how this method is used with the code from the previous example:

```js live
console.log('This will appear first');

new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject('Error while getting name!');
        }, 1000);
    })
    .then(function(response) {
        console.log('My name is: ' + response);
    })
    .catch(function(err) {
        console.log(err);
    });

console.log('This will appear second');
```

It is good to know that another `then()` method can be placed **after** `catch()`. 

It will execute **whether the promise is rejected or not**.

[/slide]
