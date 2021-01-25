[slide hideTitle]
# Summary

# In this lesson you learnt:

**Asynchronous programming**

- Key differences between **synchronous** and **asynchronous** programming.

- **Code execution order** in JavaScript.

- Escaping JavaScript's **synchronous** nature.
```js
async function getData(url) {
  let data = await fetch(url);
  let text = await data.text();

  console.log(text);
}
```
**Promises**

- Representing data that will be **received in the future**.

- **Chaining** promises and utilizing their methods.

```js
new Promise(executor);
```

**"Async" functions**

- Writing clean and concise asynchronous code with `async` and `await`.

- **Sequential** and **concurrent** execution.
```js
async function getDbInfo(url) {
  try {
    let data = await fetch(url);

    let dataToJSON = await data.json();
    dataToJSON.performMethod();
  } catch (err) {
    console.log(err);
  }
}
```
## In the next lesson you will learn:

- **Remote Databases**

- **Relational** and **non-relational** databases.

- **BaaS** (Backend-as-a-Service).

[/slide]
