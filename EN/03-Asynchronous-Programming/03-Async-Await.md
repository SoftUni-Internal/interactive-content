# Async / Await

[slide hideTitle]

# Async Functions

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/04.JS-Applications-Asynchronous-Programming/EN/Asynchronous-Programming-16-17-18-19-Async-functions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Async** functions, unlike promises and callbacks, are an **easy-to-read way of operating asynchronously**.

They look like regular functions but use the event loop to work asynchronously.

**Async** functions consist of two parts:

- `async` - Placed in **front of the function's declaration**

Specifies that the `await` keyword might be used with asynchronous operations inside the function.

- `await` - **Used only in "async functions"**

If placed before an asynchronous operation, **pauses the flow of the function until some value is returned**.

Here is an example of how `async` functions are structured:

```js live
function getValueAfterDelay() {
    let username = 'Alex';
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Username is: ' + username);
        }, 2000);
    });
}

async function printUsername() {
    console.log('Getting name...');

    let result = await getValueAfterDelay(); // throws error if promise is rejected

    console.log(result);
}

printUsername();
```

The `await` keyword is fundamentally different from `Promise.then()`.

While `await` pauses the function execution for **just one promise**, `Promise.then()` is used to chain **multiple promises together**.

Always use `await` **to get a single value** and `Promise.then()` **to run many promises in parallel**.

[/slide]

[slide hideTitle]

# "Async"/"Await" vs "Promise.then"

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/04.JS-Applications-Asynchronous-Programming/EN/Asynchronous-Programming-20-Async-Await-vs-Promise.then()-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Async functions are **much more concise** than promises.

Here is a comparison between the code blocks of the two:

```js
//Promise Example
function getDbInfo(url) {
    return fetch(url)
        .then((data) => {
            return data.json(); //converts data to JSON
        })
        .then((data) => {
            data.performMethod(); //calls a random method of the data object
        })
        .catch((err) => {
            console.log(err);
        });
}
```

```js
//Async function example
async function getDbInfo(url) {
    try {
        let data = await fetch(url);

        let dataToJSON = await data.json(); // converts data to JSON
        dataToJSON.performMethod(); //calls a random method of the data object
    } catch (err) {
        console.log(err);
    }
}
```

It is important to note that **async** functions are written **on top of promises** as a way to **ease the process of writing asynchronous code**.

Both examples above **do the same job**, the difference is just in **code readability**.

[/slide]

[slide hideTitle]

# Error Handling

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/04.JS-Applications-Asynchronous-Programming/EN/Asynchronous-Programming-21-Error-Handling-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Async functions are **best used with a try/catch block**.

```js
async function getInfo(url) {
    try {
        let response = await fetch(url);
        let text = await response.text();
    } catch (err) {
        //would catch an error for every await operation
        console.log(err);
    }
}
```

They could also be used with the `.catch()` method.

```js
async function getInfo(url) {
    const response = await fetch(url);
}

//getInfo() becomes a rejected promise
getinfo.catch((err) => {
    console.log(err);
});
```

It is **highly recommended** to add a `.catch()` method or a `catch` block even if the function performs a very simple task.

Working with code **always produces errors** and it is **better for user experience** if they are **handled instead of being shown on the screen**.
[/slide]

[slide hideTitle]

# Sequential Execution

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/04.JS-Applications-Asynchronous-Programming/EN/Asynchronous-Programming-22-Sequential-execution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The `await` keyword in `async` functions allows for the **execution of code in sequence**.

When used **before an asynchronous operation**, the rest of the function will **pause and wait for the operation's return value**.

Here is an example of sequential code execution:

```js
function multiplyByTwo(number, seconds) {
    return new Promise((resolve) => {
        console.log('Entry number: ' + number);

        setTimeout(() => {
            console.log(`${number}*2 = ` + number * 2);
            resolve(number * 2);
        }, seconds * 1000);
    });
}

async function serialFlow() {
    let result1 = await multiplyByTwo(3, 1);
    let result2 = await multiplyByTwo(4, 1);
    let result3 = await multiplyByTwo(5, 1);

    let total = result1 + result2 + result3;
    console.log('Total sum: ' + total);
}

serialFlow();
```

Sequential execution is best used when **the functions below rely on the data that is being fetched**.

This way, **going inside the given function with an undefined variable is impossible**. 
[/slide]

[slide hideTitle]

# Concurrent Execution

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/04.JS-Applications-Asynchronous-Programming/EN/Asynchronous-Programming-23-Concurrent-execution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

When the **await** keyword is omitted, operations run **concurrently** or **independently** from one another.

Here is the code from the previous example, but with **concurrent** execution:

```js
function multplyByTwo(number, seconds) {
    return new Promise((resolve) => {
        console.log('Entry number: ' + number);

        setTimeout(() => {
            console.log(`${number}*2 = ` + number * 2);
            resolve(number * 2);
        }, seconds * 1000);
    });
}

async function concurrentFlow() {
    let result1 = multplyByTwo(3, 1);
    let result2 = multplyByTwo(4, 2);
    let result3 = multplyByTwo(5, 3);

    let total = (await result1) + (await result2) + (await result3);
    console.log('Total sum: ' + total);
}

concurrentFlow();
```

It is preferred to use the `async` keyword before **asynchronous operations** if any functionality below them **relies on their return value**.

If the program flow is parallel, the functions that **depend on the asynchronous operations' values would throw errors**.

[/slide]
