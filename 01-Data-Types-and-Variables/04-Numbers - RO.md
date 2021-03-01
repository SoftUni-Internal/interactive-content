[slide]

# Ce este un Număr?

[vimeo-video]
[stream language="EN" videoId="489371556/90a6f7534f" default /]
[stream language="RO" videoId="489371556/90a6f7534f"  /]
[/video-vimeo]

Numerele în JavaScript nu au tipuri separate pentru **numerele întregi** și pentru **numerele zecimale.**

Avem un singur tip care se numește **numere.**

Cel mai mare număr care poate fi stocat este `2^54 +-1`

Avem, de asemenea, valori speciale, precum:

- `+Infinit` și `-Infinit` pe care le obținem când împărțim numerele la 0

``` js live
console.log(5 / 0);
console.log(-5 / 0);
```

Vom obține infinit pentru a nu obține ca rezultat **eroare de timp de compilare.**

- `NaN` (sau așa numitul non-număr):  Putem obține NaN când încercăm să parsăm un șir care nu poate fi parsat sau când vrem să împărțim la 0:

``` js live
let nanVar = Number('not a number');
console.log(nanVar);
```

Problema operațiilor cu `NaN` este atunci când o folosim din **perspectivă strict matematică**, pentru că vom obține mereu acest rezultat. 

Dacă avem o **logică în programul nostru care dă ca rezultat** `NaN`, și apoi avem orice altă **operație matematică**, rezultatul va fi mereu `NaN`. 

Acest lucru poate să dea logica programului nostru peste cap.

``` js live
let nanVar = Number('not a number');
console.log(5 + nanVar);
```

# Parsarea Numerelor

Parsarea numerelor poate fi făcută în câteva moduri:

- folosind `parseInt`: preluăm doar partea întreagă a unui număr, fără a-l rotunji:

``` js live
let myVar = parseInt('3.14');
console.log(myVar);
```

- folosind `parseFloat`: preluăm numărul așa cum este el, împreună cu zecimalele sale

``` js live
let myVar = parseFloat('3.14');
console.log(myVar);
```

- folosind `Number`: parsăm un șir ca număr

``` js live
let myVar = Number('10');
console.log(myVar + 10);
```
[/slide]

[slide]




# Problemă: Număr întreg sau număr cu zecimală

[vimeo-video]
[stream language="EN" videoId="489371609/3a04a5e772" default /]
[stream language="RO" videoId="489371609/3a04a5e772"  /]
[/video-vimeo]

[code-task title="Integer or Float" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function integerOrFloat(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Descrierea problemei
Veți primi **trei numere**. 

Sarcina voastră este să aflați **suma** acestora și s-o tipăriți pe consolă, folosind adunarea 

`{number} - Integer or Float`


# Exemplu
  | **Date de intrare** | **Rezultat** |
| --- | --- |
|`['9', '100', '1.1']`| 110.1 - Float |
|`['100', '200', '303']`|603 - Integer|

[/task-description]
[tests]
[test]
[input]
9
14156
1231.41
[/input]
[output]
15396.41 - Float
[/output]
[/test]
[test]
[input]
456
120
145.41
[/input]
[output]
721.41 - Float
[/output]
[/test]
[test]
[input]
912
54610
451.11
[/input]
[output]
55973.11 - Float
[/output]
[/test]
[test]
[input]
56
2120
3203
[/input]
[output]
5379 - Integer
[/output]
[/test]
[test]
[input]
170
2098
483
[/input]
[output]
2751 - Integer
[/output]
[/test]
[test]
[input]
10990
78
483
[/input]
[output]
11551 - Integer
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]



# Soluția problemei: Număr întreg sau cu zecimală

[vimeo-video]
[stream language="EN" videoId="489371615/50cc2d6699" default /]
[stream language="RO" videoId="489371615/50cc2d6699"  /]
[/video-vimeo]

[code-task title="Integer or Float" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function integerOrFloat(input){
 let firstNumber = Number(input[0]);
 let secondNumber = Number(input[1]);
 let thirdNumber = Number(input[2]);

 let sum = firstNumber + secondNumber + thirdNumber;
    if (sum % 1 === 0) {
        console.log(`${sum} - Integer`);
    }
    else{
        console.log(`${sum} - Float`);
    }
}
```
[/code-editor]
[task-description]
# Descrierea problemei
Veți primi **trei numere**. 

Sarcina voastră este să găsiți **suma** acestora și să o tipăriți pe consolă folosind adunarea 

`{number} - Integer or Float`


# Exemplu
  | **Date de intrare** | **Rezultat** |
| --- | --- |
|`['9', '100', '1.1']`| 110.1 - Float |
|`['100', '200', '303']`|603 - Integer|

[/task-description]
[tests]
[test]
[input]
9
14156
1231.41
[/input]
[output]
15396.41 - Float
[/output]
[/test]
[test]
[input]
456
120
145.41
[/input]
[output]
721.41 - Float
[/output]
[/test]
[test]
[input]
912
54610
451.11
[/input]
[output]
55973.11 - Float
[/output]
[/test]
[test]
[input]
56
2120
3203
[/input]
[output]
5379 - Integer
[/output]
[/test]
[test]
[input]
170
2098
483
[/input]
[output]
2751 - Integer
[/output]
[/test]
[test]
[input]
10990
78
483
[/input]
[output]
11551 - Integer
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]