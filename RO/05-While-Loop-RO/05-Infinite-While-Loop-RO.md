// sectionId: "Javascript::Programming-Basics::While-Loop::Infinite-While-Loop"

[slide hideTitle]
# Bucla Infinită While

[video src="https://videos.softuni.org/hls/javascript-basics/RO/05-While-Loop/05.PB-JavaScript-While-Loop-24-25-Infinite-While-Loop-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Folosim denumirea de buclă infinită pentru o buclă care repetă la nesfârșit condiția din corpul său.

În cazul buclelor "**while**" și "**do-while**", capătul este o expresie condițională care returnează întotdeauna variabila `true`. 

```js
while (true) {
  // Commands
}
```

[/slide]

[slide hideTitle]

# Exemplu: Bucla Infinită While (Eroare)

[video src="https://videos.softuni.org/hls/javascript-basics/RO/05-While-Loop/05.PB-JavaScript-While-Loop-25-Example-infinite-while-loop-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


```js
let command = 'Add';
while (command !== 'End') {
  console.log('Executing: ' + command);
}
```

În exemplul de mai sus, condiția este mereu adevărată (`true`), pentru că nu se schimbă niciodată.

## Exemplu: Bucla Finită (Depanarea Erorii)
```js
let command = 'Add';
while (command != 'End') {
  console.log('Executing: ' + command);

  command = input.shift();
}
```

În acest caz, valoarea variabilei "command" este modificată la fiecare iterație, iar apariția **buclei infinite** a fost evitată. 
[/slide]
