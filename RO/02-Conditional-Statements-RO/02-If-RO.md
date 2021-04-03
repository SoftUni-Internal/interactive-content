// sectionId: "Javascript::Programming-Basics::Conditional-Statements::If"

# Condiții Simple "if"
[slide hideTitle]
# Exemplu din Viață Reală: Watering Plants 

[video src="https://videos.softuni.org/hls/javascript-basics/RO/02-Conditions/02-conditional-statements-js-8-9-Real-Life-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


În fiecare zi ne confruntăm cu decizii de luat, pe care le luăm pe baza unor condiții care depind sau nu de noi.

Să ne imaginăm următoarea situație zilnică:

Aveți câteva plante în grădină care au nevoie de apă.

În funcție de vremea de afară, ați putea decide să le udați sau nu.

**Dacă** plouă:

* Nu vom uda plantele din grădină

**Altfel**:

* Va trebui să le udăm

Această situație concretă are doar două opțiuni din care să alegeți, dar în viața reală, precum și în programare, ați putea avea mai multe.

Aici aveți un pseudocod cu ajutorul căruia puteți înțelege conceptul instrucțiunilor condiționale, atunci când vine vorba de scrierea codului:

```
dacă umiditatea este mai mare de 90%
   Nu udați plantele
altfel
   Udați plantele
```

[/slide]

[slide hideTitle]

# Condiții Simple "if"

[video src="https://videos.softuni.org/hls/javascript-basics/RO/02-Conditions/02-conditional-statements-js-13-14-Simple-Conditions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Una dintre cele mai importante instrucțiuni din fiecare limbaj de programare este instrucțiunea `if`.

În programare **verificăm adesea condiții particulare** și efectuăm diferite acțiuni în funcție de rezultatul verificării.

[image assetsSrc="02-usecase-if-statement.png" /]

Acest lucru se face prin condiția `if`, care are următoarea structură:

```js
if (condition) {
  // corpul condiției;
}
```
## Exemplu: Weather

Aici, dacă condiția vremii ploioase se evaluează la **adevărat**, atunci corpul instrucțiunii este executat.
```js
function example(input) {                               
  if (input == 'rainy') {                                         
    console.log('Take an umbrella!');                  
  }
}
```
[/slide]
[slide hideTitle]

# Problemă cu Soluție: Freezing Weather

[code-task title="Freezing weather" taskId="pb-js-conditional-statements-Freezing-Weather" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function freezingWeather(input) {
  // Write your code here
}
```
[/code-editor]
[code-adapter]
```
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]

# Descriere
Creați un program pentru a verifica dacă vremea e friguroasă:

* Citiți o temperatură în grade Celsius (număr în virgulă mobilă)
* Tipăriți "**Freezing weather!**", dacă temperatura este **egală cu** sau **mai mică decât 0**

# Exemplu

| **Intrare** | **Ieșire** |
| --- | --- |
| freezingWeather(-2) | Freezing weather! |
| freezingWeather(4) | (no output) |

[/task-description]
[tests]
[test open]
[input]
freezingWeather(-2)
[/input]
[output]
Freezing weather!
[/output]
[/test]
[test open]
[input]
freezingWeather(4)
[/input]
[output]
[/output]
[/test]
[test]
[input]
freezingWeather(-5)
[/input]
[output]
Freezing weather!
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
