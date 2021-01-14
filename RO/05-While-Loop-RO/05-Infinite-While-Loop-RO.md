[slide]
# Bucla infinită While

[vimeo-video]
[stream language="EN" videoId="487120926/1516b4fb70" default /]
[stream language="RO" videoId="487120926/1516b4fb70"  /]
[/video-vimeo]


Folosim denumirea de buclă infinită pentru o buclă care repetă la nesfârșit condiția din corpul său.

În cazul buclelor `while` și `do-while`, capătul este o expresie condițională care returnează întotdeauna variabila `true`. 

```js
while (true) {
  // Commands
}
```

[/slide]

[slide]

# Exemplu: Bucla infinită While (Bug)

[vimeo-video]
[stream language="EN" videoId="487120943/858eb0fc69" default /]
[stream language="RO" videoId="487120943/858eb0fc69"  /]
[/video-vimeo]


```js
let command = "Add";
while (command !== "End") {
  console.log("Executing: " + command);
}
```

În exemplul de mai sus, condiția este mereu adevărată (`true`), pentru că nu se schimbă niciodată.

# Exemplu: Bucla finită (Depanarea bug-ului)
```js
let command = "Add";
while (command != "End") {
  console.log("Executing: " + command);

  command = input.shift();
}
```

În acest caz, valoarea variabilei `command` s-a modificat cu fiecare iterație, iar apariția **buclei infinite** a fost evitată. 
[/slide]
