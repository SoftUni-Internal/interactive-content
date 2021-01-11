[slide]

# Summary

**Asynchronous programming**

- Key differences between **synchronous** and **asynchronous** programming.

- **Code execution order** in JavaScript.

- Escaping JavaScript's **synchronous** nature.

**Promises**

- Representing data that will be **received in the future**.

- **Chaining** promises and utilizing their methods.

```js
new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Thomas");
  }, 1000);
}).then(function (response) {
  console.log("My name is: " + response);
});
```

**"Async" functions**

- Writing clean and concise asynchronous code with `async` and `await`.

- **Sequential** and **concurrent** execution.

```js
async function fetchInfo(url) {
  try {
    let data = await fetch(url);

    let dataToJSON = await data.json();
  } catch (err) {
    console.log(err);
  }
}
```

## The topic of the next lesson is:

**Remote Databases**

- **Relational** and **non-relational** databases.

- **BaaS** (Backend-as-a-Service).

[/slide]
