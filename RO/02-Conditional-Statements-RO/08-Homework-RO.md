// sectionId: "Javascript::Programming-Basics::Conditional-Statements::Homework"

# Teme Pentru Acasă
[slide hideTitle]

# Problemă cu Soluție: Guess the Password

[video src="https://videos.softuni.org/hls/javascript-basics/RO/02-Conditions/problem1-Guess-the-Password-solution-TRIM-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]
 
[code-task title="Guess the Password" taskId="pb-js-Conditions-Guess-The-Password" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function guessThePassword(input) {
  // Scrieți codul dvs. aici
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
Creați un program pentru a verifica o parolă:

  * Veți primi un șir: parola **guess**
  * Imprimați "**Welcome**" dacă parola este "**s3cr3t!**"
  * Imprimați "**Wrong password!**" în oricare altă situație

# Exemplu

| **Intrare** | **Ieșire** |
| --- | --- |
| guessThePassword('s3cr3t!') | Welcome |
| guessThePassword('qwerty') | Wrong password! |

[/task-description]
[tests]
[test open]
[input]
guessThePassword('s3cr3t!')
[/input]
[output]
Welcome
[/output]
[/test]
[test open]
[input]
guessThePassword('qwerty')
[/input]
[output]
Wrong password!
[/output]
[/test]
[test]
[input]
guessThePassword('wrong')
[/input]
[output]
Wrong password!
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Boiling Water

[video src="https://videos.softuni.org/hls/javascript-basics/RO/02-Conditions/problem2-Boiling-Water-solution-TRIM-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Boiling Water" taskId="pb-js-Conditions-Boiling-Water" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function boilingWater(input) {
    // Scrieți codul dvs. aici
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
Creați un program care verifică dacă apa fierbe: 

* Veți primi un număr în virgulă mobilă: temperatura apei (în °C)

* Imprimați "**The water is boiling**" dacă numărul este \> 100

* Imprimați "**The water is not hot enough**" în oricare altă situație

  # Exemplu

| **Intrare** | **Ieșire** |
| --- | --- |
| boilingWater(104.8) | The water is boiling |
| boilingWater(29) | The water is not hot enough |

[/task-description]
[tests]
[test open]
[input]
boilingWater(104.8)
[/input]
[output]
The water is boiling
[/output]
[/test]
[test open]
[input]
boilingWater(29)
[/input]
[output]
The water is not hot enough
[/output]
[/test]
[test]
[input]
boilingWater(105)
[/input]
[output]
The water is boiling
[/output]
[/test]
[test]
[input]
boilingWater(10)
[/input]
[output]
The water is not hot enough
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Speed Info

[code-task title="Speed Info" taskId="pb-js-Conditions-Speed-Info" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function speedInfo(input) {
  // Scrieți codul dvs. aici
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
Creați un program, care determină dacă vă deplasați **rapid** sau **lent** cu o viteză dată:

* Veți primi **viteza**: un număr în virgulă mobilă
* Tipăriți "**Slow**" dacă viteza este **mai mică** sau **egală cu** 30
* Tipăriți "**Fast**" dacă viteza este **mai mare** decât 30

  # Exemplu

| **Intrare** | **Ieșire** |
| --- | --- |
| speedInfo(30) | Slow |
| speedInfo(60) | Fast |

[/task-description]
[tests]
[test open]
[input]
speedInfo(30)
[/input]
[output]
Slow
[/output]
[/test]
[test open]
[input]
speedInfo(60)
[/input]
[output]
Fast
[/output]
[/test]
[test]
[input]
speedInfo(43)
[/input]
[output]
Fast
[/output]
[/test]
[test]
[input]
speedInfo(49)
[/input]
[output]
Fast
[/output]
[/test]
[test open]
[input]
speedInfo(20)
[/input]
[output]
Slow
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]


[slide hideTitle]
# Problemă: Bonus Score
[code-task title="Bonus Score" taskId="pb-js-Conditions-Bonus-Score" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function bonusScore(input) {
  // Scrieți codul dvs. aici
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

Veți primi un număr întreg care reprezintă **numărul** inițial de puncte.

**Punctele bonus** sunt oferite, în funcție de regulile descrise mai jos. 

Creați un program care calculează:

- Punctele bonus **primite** în funcție de număr 

- Care este valoarea inițială a **numărului total de puncte** 

- Care este numărul de puncte final 

Dacă numărul este mai mic decât **100 inclusiv**, atunci punctele bonus sunt **5**.
Dacă numărul este **mai mare decât 100**, punctele bonus sunt **20 % din număr**.
Dacă numărul este **mai mare decât 1000**, punctele bonus sunt **10 % din număr**.

Punctele bonus adiționale, obținute separat de cele anterioare:

- Pentru un număr impar, adăugați 1 punct

- Pentru un număr care se termină cu 5, adăugați 2 puncte 

# Exemplu

| **Intrare** | **Ieșire** |
| --- | --- |
| bonusScore(20)| 6 |
|  |26 |

| **Intrare** | **Ieșire** |
| --- | --- |
| bonusScore(175)| 37 |
|  |212 |

| **Intrare** | **Ieșire** |
| --- | --- |
| bonusScore(2703)| 270.3 |
|  |2973.3 |

[/task-description]
[tests]
[test open]
[input]
bonusScore(20)
[/input]
[output]
6
26
[/output]
[/test]
[test open]
[input]
bonusScore(175)
[/input]
[output]
37
212
[/output]
[/test]
[test open]
[input]
bonusScore(2703)
[/input]
[output]
270.3
2973.3
[/output]
[/test]
[test]
[input]
bonusScore(140)
[/input]
[output]
29
169
[/output]
[/test]
[test]
[input]
bonusScore(175)
[/input]
[output]
37
212
[/output]
[/test]
[test]
[input]
bonusScore(35)
[/input]
[output]
7
42
[/output]
[/test]
[test]
[input]
bonusScore(17)
[/input]
[output]
5
22
[/output]
[/test]
[test]
[input]
bonusScore(0)
[/input]
[output]
6
6
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Tickets
[code-task title="Tickets" taskId="pb-js-Conditions-Tickets" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function tickets(input) {
  // Scrieți codul dvs. aici
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
Creați un program care să calculeze prețul unui bilet:

* Veți primi tipul de bilet: fie **student**, fie **regular**

* Imprimați **prețul** în formatul următor "**$**\{**price**\}":

    * prețul trebuie să fie **formatat** la 2 cifre după punctul zecimal 

* Prețul unui bilet de tip student: **1.00**

* Prețul unui bilet de tip regular: **1.60**

* Pentru un bilet nevalid, imprimați "**Invalid ticket type!**"

# Exemplu

| **Intrare** | **Ieșire** |
| --- | --- |
| tickets('student') | $1.00 |
| tickets('teacher') | Invalid ticket type! |


[/task-description]
[tests]
[test open]
[input]
tickets('student')
[/input]
[output]
$1.00
[/output]
[/test]
[test open]
[input]
tickets('teacher')
[/input]
[output]
Invalid ticket type!
[/output]
[/test]
[test]
[input]
tickets('regular')
[/input]
[output]
$1.60
[/output]
[/test]
[test]
[input]
tickets('ticket')
[/input]
[output]
Invalid ticket type!
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
