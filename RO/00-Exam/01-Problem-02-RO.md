# Problema 2: Food Supply

[slide hideTitle]
# Food Supply

[code-task title="Food Supply" taskId="js-fundamentals-2-finalExam-Food-Supply" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function foodSupply(input) {
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

Pe prima linie de intrare, vi se va oferi un **șir**, care conține articolele care sunt **stocate în prezent în frigiderul dvs.**

Trebuie **să extrageți informațiile despre fiecare dintre ele** și să calculați caloriile lor totale.

Mai întâi, trebuie să **extrageți informațiile despre alimente.**

Va respecta întotdeauna regulile cu **același model**:

* Articolele vor fi separate prin "\|" sau "\#" (doar unul din cele două) în următorul format:

"\#\{**itemName**\}\#\{**expirationDate**\}\#\{**calories**\}\#"

"\|\{**itemName**\}\|\{**expirationDate**\}\|\{**calories**\}\|"

* Numele articolului poate conține numai **minuscule**, **majuscule** și **spații**

* Data de expirare va urma întotdeauna modelul: "\{**zi**\} \/ \{**lună**\} \/ \{**an**\}"

**Ziua**, **luna** și **anul** vor fi formate din două cifre.

* Caloriile vor fi un **întreg în intervalul: 0-10000**

Calculați **caloriile totale ale tuturor produselor alimentare** din șir și apoi determinați câte zile ați putea rezista cu această cantitate, **presupunând că consumați 2000 kcal pe zi.**

## Intrare

* Veți primi un singur șir

## Ieșire

- Pe prima linie de ieșire, tipăriți numărul de zile pe care ar dura această aprovizionare cu alimente înainte de a fi nevoie să mergeți la magazin pentru mai multe:

"**You have enough food for** \{**days**\} **days!**"

- După aceea, tipăriți toate articolele valide

- Rezultatul ar trebui să arate astfel:

"**Item:** \{**itemName**\}**, Best before:** \{**expirationDate**\}**, Nutrition:** \{**calories**\}"


## Exemplul Unu

| **Intrare** | **Ieșire** |
| --- | --- |
|foodSupply('\#Bread#19\/03\/21\#4000\#\|Invalid\|03\/03\.20\|\|Apples\|08\/10\/20\|200\|\|Carrots\|06\/08\/20\|500\|\|Not right\|6\.8\.20\|5\|')|You have enough food for 2 days\!|
||Item: Bread, Best before: 19\/03\/21, Nutrition: 4000|
||Item: Apples, Best before: 08\/10\/20, Nutrition: 200|
||Item: Carrots, Best before: 06\/08\/20, Nutrition: 500|

[hints]
[hint]
Avem trei meciuri în total:

"\#Bread\#19/03/21\#4000\#": bread
"\|Apples\|08/10/20\|200\|": apples
"\|Carrots\|06/08/20\|500\|": carrots
[/hint] 
[hint]
Suma caloriilor lor este de 4700.
Deoarece aveți nevoie de 2000kcal pe zi, împărțiți 4700/2000, ceea ce înseamnă că acest aliment va dura 2 zile.
[/hint] 
[hint]
Tipărim fiecare articol.
[/hint] 
[/hints]


## Exemplul Doi

| **Intrare** | **Ieșire** |
| --- | --- |
|foodSupply('\$\$\#\@\@\%\^\&\#Fish\#24\/12\/20\#8500\#\|\#Incorrect\#19\.03\.20\#450\|\$5\*\(\@\!\#Ice Cream\#03\/10\/21\#9000\#\^\#\@aswe\|Milk\|05\/09\/20\|2000\|')|You have enough food for 9 days\!|
||Item: Fish, Best before: 24\/12\/20, Nutrition: 8500|
||Item: Ice Cream, Best before: 03\/10\/21, Nutrition: 9000|
||Item: Milk, Best before: 05\/09\/20, Nutrition: 2000|
|||

[hints]
[hint]
Avem trei potriviri în total:
"\#Fish\#24/12/20\#8500\#"
"\#Ice Cream\#03/10/21\#9000\#"
"\|Milk\|05/09/20\|2000\|"
Caloriile totale sunt 8500 + 9000 + 2000 = 19500, ceea ce înseamnă că aveți alimente pentru un total de 9 zile.
[/hint] 
[/hints]

## Exemplul al Treilea

| **Intrare** | **Ieșire** |
| --- | --- |
|foodSupply('Hello\|\#Invalid food\#19/03/20\#450\|\$5\*\(\@')|You have enough food for 0 days\!|

[hints]
[hint]
Nu există potriviri, ceea ce înseamnă că nu ai mâncare.

Acest text "\#Invalid food\#19/03/20\#450" nu este o potrivire, deoarece nu are  "\#" la sfârșit.
[/hint] 
[/hints]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
foodSupply('\#Bread\#19/03/21\#4000\#\|Invalid\|03/03.20\|\|Apples\|08/10/20\|200\|\|Carrots\|06/08/20\|500\|\|Not right\|6.8.20\|5\|')
[/input]
[output]
You have enough food for 2 days\!
Item: Bread, Best before: 19\/03\/21, Nutrition\: 4000
Item: Apples, Best before: 08\/10\/20, Nutrition\: 200
Item: Carrots, Best before: 06\/08\/20, Nutrition\: 500
[/output]
[/test]
[test open]
[input]
foodSupply('\\$\\$\#\@\@\%\^\&\#Fish\#24/12/20\#8500\#\|\#Incorrect\#19.03.20\#450\|\\$5\*(@!\#Ice Cream\#03/10/21\#9000\#^\#@aswe\|Milk\|05/09/20\|2000\|')
[/input]
[output]
You have enough food for 9 days\!
Item: Fish, Best before\: 24\/12\/20, Nutrition\: 8500
Item: Ice Cream, Best before: 03\/10\/21, Nutrition\: 9000
Item: Milk, Best before: 05\/09\/20, Nutrition\: 2000
[/output]
[/test]
[test]
[input]
foodSupply('\\$\\$\#\@\@\%\^\&\#Fish\#24\/12\/20\#8500\#\|\#Incorrect\#19\.03\.20\#450\|\\$5\*\(\@\!\#Ice Cream\#03/10/21\#9000\#\^\#\@aswe\|Milk\|05/09/20\|2000\|\\$\\$\#\@\@\%\^\&\#Fish\#24/12/20\#8500\#\|\#Incorrect\#19\.03\.20\#450\|\\$5\*\(\@\!\#Ice Cream\#03\/10\/21\#9000\#\^\#\@aswe\|Milk\|05/09/20\|2000\|')
[/input]
[output]
You have enough food for 19 days\!
Item: Fish, Best before: 24\/12\/20, Nutrition\: 8500
Item: Ice Cream, Best before\: 03\/10\/21, Nutrition\: 9000
Item: Milk, Best before\: 05\/09\/20, Nutrition\: 2000
Item: Fish, Best before\: 24\/12\/20, Nutrition\: 8500
Item: Ice Cream, Best before\: 03\/10\/21, Nutrition\: 9000
Item: Milk, Best before: 05\/09\/20, Nutrition\: 2000
[/output]
[/test]
[test]
[input]
foodSupply('\\$\\$\#\@\@\%\^\&\#Fish\#24/12/20\#1000\#\|Incorrect\#19.03.20\#450\|\\$5\*(@!\#Ice Cream\#03/10/21\#1000\#^\#\@aswe\|Milk\|05/09/20\|1000\|\\$\\$\#\@\@\%\^\&\#Fish\#24/12/20\#1000\#\|\#Incorrect\#19.03.20\#450\|\\$5\*\(\@\!\#Ice Cream\#03/10/21\#1000\#\^\#Incorr\#Lettuce\#24\/06\/20\#1000\#')
[/input]
[output]
You have enough food for 3 days\!
Item: Fish, Best before\: 24\/12\/20, Nutrition\: 1000
Item: Ice Cream, Best before\: 03\/10\/21, Nutrition\: 1000
Item: Milk, Best before\: 05\/09\/20, Nutrition\: 1000
Item: Fish, Best before\: 24\/12\/20, Nutrition\: 1000
Item: Ice Cream, Best before\: 03\/10\/21, Nutrition\: 1000
Item: Lettuce, Best before\: 24\/06\/20, Nutrition\: 1000
[/output]
[/test]
[test]
[input]
foodSupply('\#Fish\#24/12/20\#1000\#\|Milk\|05/09/20\|1000\|\#Fish\#24/12/20\#1000\#\|\#Ice Cream\#03/10/21\#1000\#\#Lettuce\#24/06/20\#1000\#')
[/input]
[output]
You have enough food for 2 days\!
Item: Fish, Best before\: 24\/12\/20, Nutrition\: 1000
Item: Milk, Best before\: 05\/09\/20, Nutrition\: 1000
Item: Fish, Best before\: 24\/12\/20, Nutrition\: 1000
Item: Ice Cream, Best before\: 03/10/21, Nutrition\: 1000
Item: Lettuce, Best before\: 24\/06\/20, Nutrition\: 1000
[/output]
[/test]
[test]
[input]
foodSupply('\|Fish\#24/12/20\#1000\|\#Milk\#05/09/20\#1000\|\|Fis\|24/12/20\|1000\#\|Ice Cream\#03/10/21\#1000\#\#Lettuce\/24\/06\/20\#1000\#')
[/input]
[output]
You have enough food for 0 days\!
[/output]
[/test]
[test]
[input]
foodSupply('\|Fish\#24/12/20\|1000\|')
[/input]
[output]
You have enough food for 0 days\!
[/output]
[/test]
[test]
[input]
foodSupply('\|Fish\|24/12/20\|1000\|\|Fish\|24/12/20\|1000\|\|Fish\|24/12/20\|1000\|\|\|24/12/20\|1000\|\|Fish\|24/12/2\|1000\|\|Fish\|24/12/20\|\|')
[/input]
[output]
You have enough food for 1 days\!
Item: Fish, Best before\: 24\/12\/20, Nutrition\: 1000
Item: Fish, Best before\: 24\/12\/20, Nutrition\: 1000
Item: Fish, Best before\: 24\/12\/20, Nutrition\: 1000
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
