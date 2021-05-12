[slide hideTitle]
# Rezumat

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/04.JS-Applications-Asynchronous-Programming/RO/Asynchronous-Programming-25-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție ați învățat:

- **Programarea asincronă**

    * diferențele cheie dintre programarea **sincronă** și **asincronă**

    * **ordinea executării codului** în JavaScript

    * programarea asincronă face posibilă funcționarea simultană a funcțiilor fără blocarea întregii aplicații
    
```js
async function getData(url) {
    let data = await fetch(url);
    let text = await data.text();

    console.log(text);
}
```

- **Promisiuni**

  * reprezintă date care vor fi **primite în viitor**

  * **înlănțuirea** promisiunilor și utilizarea metodelor lor

```js
new Promise(executor);
```

- **Funcții "Async"**

   * scrierea unui cod asincron curat și concis cu  `async` și  `await`

   * Execuția **secvențială** și **concurentă**

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

## În lecția următoare veți învăța:

- **Baze de date Remote**

- Baze de date **relaționale** și **non-relaționale**

- **BaaS** (Backend-as-a-Service)

[/slide]
