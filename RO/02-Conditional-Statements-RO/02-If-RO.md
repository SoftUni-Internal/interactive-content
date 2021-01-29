# Condiții simple if
[slide hideTitle]
# Exemplu din viață reală: Udarea plantelor 

[vimeo-video]
[stream language="EN" videoId="486878426/4bc3595d1b" default /]
[stream language="RO" videoId="486878426/4bc3595d1b"  /]
[/video-vimeo]

[image assetsSrc="02-coditional-statement-1.png" /]

În fiecare zi ne confruntăm cu decizii de luat, pe care le luăm pe baza unor condiții care depind sau nu de noi.

Să ne imaginăm următoarea situație zilnică:

Aveți câteva plante în grădină care au nevoie de apa.

În funcție de vremea de afară, ați putea decide să le udați sau nu.

**Dacă** plouă:

  * Nu vom uda plantele din grădină.

**Altfel**:

  * Va trebui să le udăm

Această situație concretă are doar două opțiuni din care să alegeți, dar în viața reală, precum și în programare, ați putea avea mai multe.

Iată un pseudocod cu ajutorul căruia puteți înțelege conceptul instrucțiilor condiționale, atunci când vine vorba de scrierea codului:

```
dacă umiditatea este mai mare de 90%
   Nu udați plantele
 altceva
   Uați plantele
```

[/slide]

[slide hideTitle]

# Condiții simple if

[vimeo-video]
[stream language="EN" videoId="486878937/52b2a917a9" default /]
[stream language="RO" videoId="486878937/52b2a917a9"  /]
[/video-vimeo]

Una dintre cele mai importante declarații din fiecare limbaj de programare este declarația `if`.

În programare **verificăm adesea condiții particulare** și efectuăm diferite acțiuni în funcție de rezultatul verificării.

[image assetsSrc="02-usecase-if-statement.png" /]

Acest lucru se face prin condiția `if`, care are următoarea structură:

```js
if (condition) {
  // condition body;
}
```
# Exemplu: vreme

Aici, dacă condiția vremii ploioase se evaluează la **adevărat**, atunci corpul instrucțiunii este executat.
```js
function example(input) {                               
  if (input == "rainy") {                                         
    console.log("Take an umbrella!");                  
  }
}
```
[/slide]
[slide hideTitle]

# Problemă: Freezing Weather

[vimeo-video]
[stream language="EN" videoId="486878462/5c6107ff66" default /]
[stream language="RO" videoId="486878462/5c6107ff66"  /]
[/video-vimeo]

[code-task title="Freezing weather" taskId="pb-js-conditional-statements-lab-Freezing Weather" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
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
   *Tipăriți `Freezing weather!`, Dacă temperatura este **egală cu** sau **mai mică decât 0**

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

[slide hideTitle]
# Soluție: Freezing Weather
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
# Descriere
Scrieți un program pentru a verifica vremea înghețată:

  *Citiți o temperatură în Celsius (un număr cu virgulă mobilă)
  *Tipăriți `Freezing weather!`, Dacă temperatura este **egală cu** sau **mai mică decât 0**
  
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



