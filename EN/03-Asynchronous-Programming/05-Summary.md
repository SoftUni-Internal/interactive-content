[slide hideTitle]
# Summary

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/04.JS-Applications-Asynchronous-Programming/EN/Asynchronous-Programming-25-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- **Asynchronous programming**

    * the key differences between **synchronous** and **asynchronous** programming

    * **code execution order** in JavaScript

    * escaping JavaScript's **synchronous** nature
```js
async function getData(url) {
    let data = await fetch(url);
    let text = await data.text();

    console.log(text);
}
```

- **Promises**

  * representing data that will be **received in the future**

  * **chaining** promises and utilizing their methods

```js
new Promise(executor);
```

- **"Async" functions**

   * writing clean and concise asynchronous code with `async` and `await`

   * **sequential** and **concurrent** execution

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

- **Relational** and **non-relational** databases

- **BaaS** (Backend-as-a-Service)

[/slide]
