[slide]
# Operatorul Break

[vimeo-video]
[stream language="EN" videoId="487120852/ddd6c46acb" default /]
[stream language="RO" videoId="487120852/ddd6c46acb"  /]
[/video-vimeo]


Comanda `break` oprește executarea unei bucle în momentul apelării sale și continuă programul de la prima linie de după finalul buclei.

Acest lucru înseamnă că iterația curentă a buclei nu va fi finalizată și, prin urmare, restul codului din corpul buclei nu va fi executat.

Dacă folosiți bucle imbricate, enunțul acesta va opri executarea buclei celei mai interioare și va începe executarea de la următoarea linie de după bloc. 

[/slide]


[slide]


# Exemplu de funcționare a lui Break

[vimeo-video]
[stream language="EN" videoId="487120871/e1cde26cec" default /]
[stream language="RO" videoId="487120871/e1cde26cec"  /]
[/video-vimeo]


Acest exemplu oprește bucla atunci când data de intrare este reprezentată de un număr impar:
```js
while (true) {
  let number = Number(input.shift());
  
  if (number % 2 != 0) {
    break;
  }
}
```
Când vine vorba despre utilizarea intenționată a unei bucle infinite, `break` va opri bucla atunci când este îndeplinită o condiție dată.
[/slide]
