// sectionId: "Javascript::Programming-Basics::Conditional-Statements-Advanced::Nested-Conditions"

[slide hideTitle]
# Condiții Imbricate

[video src="https://videos.softuni.org/hls/javascript-basics/RO/03-Conditions-Advanced/02-conditional-statements-advanced-js-13-14-Nested-Conditional-Statements-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Destul de des, logica programului necesită utilizarea instrucțiunilor `if` sau `if-else`, care sunt cuprinse una în alta.

Aceste instrucțiuni sunt numite instrucțiuni **imbricate** `if` sau instrucțiuni  `if-else`.

După cum sugerează denumirea **"imbricat"**, acestea sunt instrucțiuni `if` sau `if-else` care sunt plasate în interiorul altor instrucțiuni `if` sau `else`.

```js
if (condition1) {
    if (condition2) {
        // body; 
    } else {
        // body;
    }
}
```

## Exemplu: Personal Titles

În funcție de vârstă (număr zecimal) și sexul (**m** / **f**) unei persoane, tipăriți un titlu:

- `Mr.`: un bărbat (sex **m**) - 16 ani sau mai mult

- `Master`: un băiat (sex **m**) - sub 16 ani

- `Ms.`: o femeie (sex **f**) - 16 ani sau mai mult

- `Miss`: o fată (sex **f**) - sub 16 ani

## Soluție: Personal Titles

Ar trebui să observăm că **ieșirea**  programului **depinde de câteva lucruri**.

**În primul rând**, trebuie să verificăm care este **sexul** specificat și apoi **să verificăm vârsta.**

Respectiv, vom folosi **câteva** blocuri `if-else`.

Aceste blocuri vor fi **imbricate**, adică din **rezultatul** primului, vom **defini** pe care dintre **celelalte** să îl executăm.

Diagrama de mai jos ilustrează procesul în detaliu:

[image assetsSrc="01.Personal-titles-01.jpg" /]

După citirea datelor de intrare de pe consolă, trebuie executată următoarea logică a programului:

```js live
let input = [14, 'm'];
let age = Number(input[0]);
let gender = input[1];

if (age < 16) {
    if (gender == 'm') {
        console.log('Master');
    } else if (gender == 'f') {
        console.log('Miss');
    }
} else {
    if (gender == 'm') {
        console.log('Mr.');
    } else if (gender == 'f') {
        console.log('Ms.');
    }
}
```

## Imbricare adâncă

Imbricarea a **mai mult de trei instrucțiuni condiționale** în interiorul altor instrucțiuni nu este considerată o bună practică.

**Aceasta trebuie sa fie evitată**, mai ales prin optimizarea structurii algoritmului codului și/sau prin utilizarea unui alt tip de instrucțiune condițională.

[/slide]

[slide hideTitle]

# Problemă cu Soluție: Marketplace

[video src="https://videos.softuni.org/hls/javascript-basics/RO/03-Conditions-Advanced/02-conditional-statements-advanced-js-15-16-Problem-and-Solution-Marketplace-solution-TRIM-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Marketplace" taskId="pb-js-conditional-statements-advanced-Marketplace" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function marketPlace(input) {
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
Creați un program care:

- Primește un **tip de produs** și o zi de pe consolă

- Imprimă **prețul**, formatat cu două zecimale după punctul zecimal, pe baza tabelului de mai jos:

 | **Product**      | **Weekday**| **Weekend**   |
| :---:       |    :----:   |   :---:     |
| Banana      | 2.50        | 2.70 |
| Apple       | 1.30        | 1.60    |
| Kiwi        | 2.20        | 3.00    |


# Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| marketPlace(['Banana', 'Weekday']) | 2.50 |
| marketPlace(['Kiwi', 'Weekend']) | 3.00 |


[/task-description]
[tests]
[test open]
[input]
marketPlace(['Banana', 'Weekday'])
[/input]
[output]
2.50
[/output]
[/test]
[test]
[input]
marketPlace(['Apple', 'Weekend'])
[/input]
[output]
1.60
[/output]
[/test]
[test opne]
[input]
marketPlace(['Kiwi', 'Weekday'])
[/input]
[output]
2.20
[/output]
[/test]
[test]
[input]
marketPlace(['Kiwi', 'Weekend'])
[/input]
[output]
3.00
[/output]
[/test]
[test]
[input]
marketPlace(['Apple', 'Weekday'])
[/input]
[output]
1.30
[/output]
[/test]
[test]
[input]
marketPlace(['Banana', 'Weekend'])
[/input]
[output]
2.70
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]


[slide hideTitle]
# Problemă cu Soluție: Biggest Number of Three

[video src="https://videos.softuni.org/hls/javascript-basics/RO/03-Conditions-Advanced/02-conditional-statements-advanced-js-17-18-Problem-and-Solution-Biggest-number-of-three-solution-TRIM-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Biggest Number of Three" taskId="pb-js-conditional-statements-advanced-Biggest-Number-of-Three" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function biggestNumberOfThree(input) {
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
Creați un program care:

  * Primește **3 numere** de pe consolă
  * Tipărește cel mai mare număr

# Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
|biggestNumberOfThree(['1', '2', '3'])| 3 |

[/task-description]
[tests]
[test open]
[input]
biggestNumberOfThree(['1', '2', '3'])
[/input]
[output]
3
[/output]
[/test]
[test open]
[input]
biggestNumberOfThree(['55', '17', '100'])
[/input]
[output]
100
[/output]
[/test]
[test]
[input]
biggestNumberOfThree(['-1', '-5', '-9'])
[/input]
[output]
-1
[/output]
[/test]
[test]
[input]
biggestNumberOfThree(['1', '5', '3'])
[/input]
[output]
5
[/output]
[/test]
[test]
[input]
biggestNumberOfThree(['1', '1000000', '3'])
[/input]
[output]
1000000
[/output]
[/test]
[test]
[input]
biggestNumberOfThree(['1000', '5000', '10000000000000000000'])
[/input]
[output]
10000000000000000000
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

