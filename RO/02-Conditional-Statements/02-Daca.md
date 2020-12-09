# Condiții simple dacă
[slide]
# Exemplu de viață reală: Udarea plantelor 
[vimeo-video]
[stream language="EN"videoId="486878426/4bc3595d1b" default /]
[stream language="RO"videoId="486878426/4bc3595d1b" /]
[/video-vimeo]

[image assetsSrc="02-coditional-statement-1.png" /]

În fiecare zi ne confruntăm cu decizii de luat, pe care le luăm pe baza unor condiții care depind sau nu de noi.
Să ne imaginăm următoarea situație zilnică:
Aveți câteva plante în grădină care au nevoie de apa.
În funcție de vremea de afară, ai putea decide să le uzi sau nu.
**Dacă** plouă:
* O să ocolim udarea plantelor din grădină.
**Altfel**:
* Va trebui să le ud
Această situație specială are doar două opțiuni din care să alegeți, dar în viața reală, precum și în programare, ați putea avea mai multe.
Iată câteva pseudocoduri, astfel încât să puteți înțelege conceptul afirmațiilor condiționale atunci când vine vorba de scrierea codului:
```
dacă umiditatea este mai mare de 90%
   Nu udați plantele
 altceva
   Uda plantele
```
[/slide]
[slide]
# Condiții simple dacă
[vimeo-video]
[stream language="EN"videoId="486878937/52b2a917a9" default /]
[stream language="RO"videoId="486878937/52b2a917a9" /]
[/video-vimeo]
Una dintre cele mai importante afirmații din fiecare limbaj de programare este declarația `if`.
În programare **verificăm adesea condiții particulare** și efectuăm diferite acțiuni în funcție de rezultatul verificării.
[image assetsSrc="02-usecase-if-statement.png" /]
Acest lucru se face prin condiția `if`, care are următoarea structură:
```js
if (condition) {
  // condition body;
}
```
# Exemplu: vreme
Aici, dacă starea vremii ploioase se evaluează la **adevărat**, atunci corpul declarației este executat.
```js
function example(input) {                               
  if (input == "rainy") {                                         
    console.log("Take an umbrella!");                  
  }
}
```
[/slide]
[slide]
# Problemă: Vreme înghețată
[vimeo-video]
[stream language="EN"videoId="486878462/5c6107ff66" default /]
[stream language="RO"videoId="486878462/5c6107ff66" /]
[/video-vimeo]
[code-task title="Freezing weather" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```js
function freezingWeather(input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți un program pentru a verifica vremea înghețată:
   *Citiți o temperatură în Celsius (a floating-point number)
   *Tipăriți „Vreme înghețată!“, Dacă temperatura este **egală** sau **mai mică de 0**
# Exemplu
| **Input** | **Output** |
| --- | --- |
| -2 | Freezing weather! |
| 4 | (no output) |
[/task-description]
[tests]
[test]
[input]
-2
[/input]
[output]
Freezing weather!
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
[/output]
[/test]
[test]
[input]
-5
[/input]
[output]
Freezing weather!
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Soluție: Vreme înghețată
[code-task title="Freezing weather" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```js
function freezingWeather(input) {
  let temperature = Number(input.shift());
  if (temperature <= 0) {
    console.log("Freezing weather!");
  }
}
```
[/code-editor]
[task-description]
#Descriere
Scrieți un program pentru a verifica vremea înghețată:
*Citiți o temperatură în Celsius (un număr cu virgulă mobilă)
   *Tipăriți „Vreme înghețată!“,Dacă temperatura este **egală** sau **mai mică de 0**
# Exemplu
| **Input** | **Output** |
| --- | --- |
| -2 | Freezing weather! |
| 4 | (no output) |

[/task-description]
[tests]
[test]
[input]
-2
[/input]
[output]
Freezing weather!
[/output]
[/test]
[test]
[input]
4
[/input]
[output]
[/output]
[/test]
[test]
[input]
-5
[/input]
[output]
Freezing weather!
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]



