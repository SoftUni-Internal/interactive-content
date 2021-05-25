# Model Obiect Navigator 

[slide hideTitle]

# BOM

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/01.JS-Advanced-DOM/RO/JS-Advanced-DOM-40-41-browser-object-model-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Modelul de obiect navigator** acționează ca o conexiune la fel ca și **Modelul de obiect document**.

Conecteazâ JavaScript la **navigator** la fel cum DOM şi conectează la **documentul HTML**.

**BOM** permite accesarea şi manipularea elementelor navigatorului prin **reprezentarea lor ca obiecte**.

[image assetsSrc="Js-advanced-DOM-1.png" /]

Următoarele comenzi arată câteva dintre obiectele navigatorului:

```js
console.dir(window);
console.dir(navigator);
console.dir(screen);
console.dir(location);
console.dir(history);
console.dir(document);
```

**Fereastra** este obiectul global din browser.

Toate variabilele globale sunt **proprietățile** sale și toate funcțiile globale sunt **metodele** sale.

```js
var name = 'Steven';
//name is now stored as a property of the window object

function printYear() {
  console.log(2020);
}
//PrintYear is now a method of the window object

name === window.name;
//returns true

window.printYear();
//invokes the function through the window object
```

[/slide]

[slide hideTitle]

# Exercitii cu BOM

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/01.JS-Advanced-DOM/RO/JS-Advanced-DOM-42-playing-with-bom-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Iatâ câteva proprietățile interesante și educative ale BOM:

```js
console.log(navigator.deviceMemory); //displays the RAM memory of the current machine

document.location = 'https://softuni.org'; //redirects to given location

history.back(); //goes back one time

console.log(location.host); //displays the current host

location.reload(); //reloads page
```

[/slide]
