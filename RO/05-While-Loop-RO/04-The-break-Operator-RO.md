// sectionId: "Javascript::Programming-Basics::While-Loop::The-Break-Operator"

[slide hideTitle]
# Operatorul Break

[video src="https://videos.softuni.org/hls/javascript-basics/RO/05-While-Loop/05.PB-JavaScript-While-Loop-21-22-The-break-operator-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Comanda `break` oprește executarea unei bucle în momentul apelării sale și continuă programul de la prima linie de după finalul buclei.

Acest lucru înseamnă că iterația curentă a buclei nu va fi finalizată și, prin urmare, restul codului din corpul buclei nu va fi executat.

Dacă folosiți bucle imbricate, această instrucțiune va opri executarea buclei celei mai interioare și va începe executarea de la următoarea linie de după bloc. 

[/slide]


[slide hideTitle]


# Exemplu de Funcționare a Operatorului Break

[video src="https://videos.softuni.org/hls/javascript-basics/RO/05-While-Loop/05.PB-JavaScript-While-Loop-23-Example-with-break-operator-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Acest exemplu oprește bucla atunci când data de intrare este reprezentată de un număr impar:
```js
while (true) {
  let number = Number(input.shift());
  
  if (number % 2 != 0) {
    break;
  }
}
```
Când vine vorba despre utilizarea intenționată a unei bucle infinite, operatorul `break` va opri bucla atunci când este îndeplinită o condiție dată.
[/slide]
