# Teme Pentru Acasă

[slide hideTitle]
# Problemă: Gramophone
[code-task title="Gramophone" taskId="js-fundamentals-1-basic-syntax-Gramophone" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function gramophone(bandName, album, songName){
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
Creați un program care primește **3 parametri** (șiruri) ca intrare:

- Primul șir este **numele trupei**

- Al doilea șir este **numele albumului**

- Al treilea este **numele melodiei de pe album**

Trebuie să aflați de câte **ori** placa va roti melodia dată din album.

**Placa face o rotație completă la fiecare 2.5 secunde.**

Durata melodiei **în secunde** se calculează după formula dată:

(albumName.length \* bandName.length) \* song name.length \/ 2

Ca ieșire, trebuie să imprimați următorul mesaj:

"**The plate was rotated** \{**rotations**\} **times.**"

Rotațiile trebuie să fie **rotunjite în sus.**

## Exemplu
   |**Intrare** |**Ieșire**|
| --- | --- |
| gramophone('Black Sabbath', 'Paranoid', 'War Pigs') | The plate was rotated 167 times. |

[/task-description]
[tests]
[test open]
[input]
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')
[/input]
[output]
The plate was rotated 167 times.
[/output]
[/test]
[test]
[input]
gramophone('Bhjkhbath', 'Pudfgdgioid', 'Wois')
[/input]
[output]
The plate was rotated 80 times.
[/output]
[/test]
[test]
[input]
gramophone('gjhg', 'jklcrj', 'gyuguyguy')
[/input]
[output]
The plate was rotated 44 times.
[/output]
[/test]
[test]
[input]
gramophone('bhjbhjbj', 'cghcgh', 'uiou')
[/input]
[output]
The plate was rotated 39 times.
[/output]
[/test]
[test]
[input]
gramophone('Bvyuvh', 'ji', 'Wauios')
[/input]
[output]
The plate was rotated 15 times.
[/output]
[/test]
[test]
[input]
gramophone('gyuuath', 'Pgyd', 'Wabygs')
[/input]
[output]
The plate was rotated 34 times.
[/output]
[/test]
[test]
[input]
gramophone('tyuath', 'Pargyu', 'tuus')
[/input]
[output]
The plate was rotated 29 times.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Fuel Money
[code-task title="Fuel Money" taskId="js-fundamentals-1-basic-syntax-Fuel-Money" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function fuelMoney(pistance, passengers, price){
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
Creați un program care calculează cât de mulți **bani** pentru combustibil vor fi necesari pentru a conduce un autobuz dintr-un loc în altul.

Luați în considerare următoarele:

- Calculați **combustibilul** știind că **un autobuz gol** poate parcurge 100 km cu 7L de motorină

- **O persoană** în autobuzul respectiv, cu excepția șoferului, mărește consumul de combustibil cu **100 mililitri**

- **Banii** sunt calculați prin **înmulțirea** **prețului combustibilului** cu combustibilul necesar pentru călătorie

Ca **intrare** veți primi **3 parametri**:
- **Distanța** pe care trebuie să o parcurgă autobuzul
- Numărul de **pasageri** din autobuz
- **Prețul** pentru **1 litru de motorină**

Ca ieșire, trebuie să imprimați acest mesaj:
"**Needed money for that trip is** \{**neededMoney**\} **dollars.**"

## Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| fuelMoney(260, 9, 2.49) | Needed money for that trip is 47.559 dollars. |
| fuelMoney(90, 14, 2.88) | Needed money for that trip is 22.176 dollars. |

[/task-description]
[tests]
[test open]
[input]
fuelMoney(260, 9, 2.49)
[/input]
[output]
Needed money for that trip is 47.559 dollars.
[/output]
[/test]
[test open]
[input]
fuelMoney(90, 14, 2.88)
[/input]
[output]
Needed money for that trip is 22.176 dollars.
[/output]
[/test]
[test]
[input]
fuelMoney(154, 5, 3.1)
[/input]
[output]
Needed money for that trip is 34.968 dollars.
[/output]
[/test]
[test]
[input]
fuelMoney(545, 5, 54.59)
[/input]
[output]
Needed money for that trip is 2109.9035 dollars.
[/output]
[/test]
[test]
[input]
fuelMoney(32, 15, 1.0)
[/input]
[output]
Needed money for that trip is 3.74 dollars.
[/output]
[/test]
[test]
[input]
fuelMoney(1232, 13, 2.19)
[/input]
[output]
Needed money for that trip is 191.7126 dollars.
[/output]
[/test]
[test]
[input]
fuelMoney(546, 45, 4.45)
[/input]
[output]
Needed money for that trip is 190.104 dollars.
[/output]
[/test]
[test]
[input]
fuelMoney(755, 10, 3.474)
[/input]
[output]
Needed money for that trip is 187.0749 dollars.
[/output]
[/test]
[test]
[input]
fuelMoney(451, 2, 12.5)
[/input]
[output]
Needed money for that trip is 397.125 dollars.
[/output]
[/test]
[test]
[input]
fuelMoney(361, 45, 2.989)
[/input]
[output]
Needed money for that trip is 88.98253 dollars.
[/output]
[/test]
[test]
[input]
fuelMoney(1565, 12, 1.49)
[/input]
[output]
Needed money for that trip is 165.0175 dollars.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Centuries to Minutes
[code-task title="Centuries to Minutes" taskId="js-fundamentals-1-basic-syntax-Centuries-to-Minutes" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function centuriesToMinutes(number){
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
Creați un program care primește un număr reprezentând secole și îl convertește în **ani**, **zile**, **ore** și **minute**.

Imprimați ieșirea în următorul format: 
"\{**number**\} **centuries =** \{**number**\} **years =** \{**number**\} **days =** \{**number**\} **hours =** \{**number**\} **minutes**"

## Exemplu
   |**Intrare**|**Ieșire** |
| --- | --- |
| centuriesToMinutes(1) | 1 centuries = 100 years = 36524 days = 876576 hours = 52594560 minutes |
| centuriesToMinutes(5) | 5 centuries = 500 years = 182621 days = 4382904 hours = 262974240 minutes |

[/task-description]
[tests]
[test open]
[input]
centuriesToMinutes(1)
[/input]
[output]
1 centuries = 100 years = 36524 days = 876576 hours = 52594560 minutes
[/output]
[/test]
[test open]
[input]
centuriesToMinutes(5)
[/input]
[output]
5 centuries = 500 years = 182621 days = 4382904 hours = 262974240 minutes
[/output]
[/test]
[test]
[input]
centuriesToMinutes(14)
[/input]
[output]
14 centuries = 1400 years = 511339 days = 12272136 hours = 736328160 minutes
[/output]
[/test]
[test]
[input]
centuriesToMinutes(2)
[/input]
[output]
2 centuries = 200 years = 73048 days = 1753152 hours = 105189120 minutes
[/output]
[/test]
[test]
[input]
centuriesToMinutes(4)
[/input]
[output]
4 centuries = 400 years = 146096 days = 3506304 hours = 210378240 minutes
[/output]
[/test]
[test]
[input]
centuriesToMinutes(3)
[/input]
[output]
3 centuries = 300 years = 109572 days = 2629728 hours = 157783680 minutes
[/output]
[/test]
[test]
[input]
centuriesToMinutes(6)
[/input]
[output]
6 centuries = 600 years = 219145 days = 5259480 hours = 315568800 minutes
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Special Numbers
[code-task title="Special Numbers" taskId="js-fundamentals-1-basic-syntax-Special-Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function specialNumbers(number){
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
Creați un program care primește un număr **n**. 

Pentru toate numerele din intervalul **1...n**, tipăriți numărul și dacă este special sau nu.

Un număr este special atunci când **suma cifrelor sale** este **5, 7, sau 11.**

## Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
| specialNumbers(5) | 1 -> False |
||2 -> False|
||3 -> False|
||4 -> False|
||5 -> True|

[hints]
[hint]
Pentru a calcula suma cifrelor unui număr dat, puteți repeta următoarele:

- Însumați ultima cifră `num% 10` și eliminați-o `sum = sum / 10` până când `num` ajunge la `0`
[/hint] 
[hint]
Utilizați `parseInt()` în timp ce împărțiți pentru a obține numai numere întregi.
[/hint] 
[/hints] 

[/task-description]
[tests]
[test open]
[input]
specialNumbers(5)
[/input]
[output]
1 -> False
2 -> False
3 -> False
4 -> False
5 -> True
[/output]
[/test]
[test]
[input]
specialNumbers(1)
[/input]
[output]
1 -> False
[/output]
[/test]
[test]
[input]
specialNumbers(15)
[/input]
[output]
1 -> False
2 -> False
3 -> False
4 -> False
5 -> True
6 -> False
7 -> True
8 -> False
9 -> False
10 -> False
11 -> False
12 -> False
13 -> False
14 -> True
15 -> False
[/output]
[/test]
[test]
[input]
specialNumbers(4)
[/input]
[output]
1 -> False
2 -> False
3 -> False
4 -> False
[/output]
[/test]
[test]
[input]
specialNumbers(40)
[/input]
[output]
1 -> False
2 -> False
3 -> False
4 -> False
5 -> True
6 -> False
7 -> True
8 -> False
9 -> False
10 -> False
11 -> False
12 -> False
13 -> False
14 -> True
15 -> False
16 -> True
17 -> False
18 -> False
19 -> False
20 -> False
21 -> False
22 -> False
23 -> True
24 -> False
25 -> True
26 -> False
27 -> False
28 -> False
29 -> True
30 -> False
31 -> False
32 -> True
33 -> False
34 -> True
35 -> False
36 -> False
37 -> False
38 -> True
39 -> False
40 -> False
[/output]
[/test]
[test]
[input]
specialNumbers(6)
[/input]
[output]
1 -> False
2 -> False
3 -> False
4 -> False
5 -> True
6 -> False
[/output]
[/test]
[test]
[input]
specialNumbers(8)
[/input]
[output]
1 -> False
2 -> False
3 -> False
4 -> False
5 -> True
6 -> False
7 -> True
8 -> False
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Triples of Latin Letters
[code-task title="Triples of Latin Letters" taskId="js-fundamentals-1-basic-syntax-Triples-of-latin-letters" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]


```
function triplesLatinLetters(number){
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
Creați un program care primește un **număr** **n** și tipărește toate tripletele primelor **n** litere latine mici, ordonate alfabetic.

## Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| triplesLatinLetters(2) | aaa |
||aab|
||aba|
||abb|
||baa|
||bab|
||bba|
||bbb|

[hints]
[hint]
Efectuați 3 bucle imbricate de la 0 la n. 

```js
for (let num1 = 0; num1 < n; num1++) {
  for (let num2 = 0; num2 < n; num2++) {
    for (let num3 = 0; num3 < n; num3++) {
      // ...
    }
  }
}
```
[/hint] 
[hint]
Pentru fiecare număr "**num**", tipăriți litera latină corespunzătoare după cum urmează:

```js
console.log(
  String.fromCharCode(97 + num1) +
  String.fromCharCode(97 + num2) +
  String.fromCharCode(97 + num3));
```
[/hint] 
[hint]
Funcția `String.fromCharCode()` obține valoarea **în sistem zecimal** și o transformă într-un **caracter** din **tabelul ASCII.**
[/hint] 
[/hints]

[/task-description]
[tests]
[test open]
[input]
triplesLatinLetters(2)
[/input]
[output]
aaa
aab
aba
abb
baa
bab
bba
bbb
[/output]
[/test]
[test]
[input]
triplesLatinLetters(1)
[/input]
[output]
aaa
[/output]
[/test]
[test]
[input]
triplesLatinLetters(3)
[/input]
[output]
aaa
aab
aac
aba
abb
abc
aca
acb
acc
baa
bab
bac
bba
bbb
bbc
bca
bcb
bcc
caa
cab
cac
cba
cbb
cbc
cca
ccb
ccc
[/output]
[/test]
[test]
[input]
triplesLatinLetters(6)
[/input]
[output]
aaa
aab
aac
aad
aae
aaf
aba
abb
abc
abd
abe
abf
aca
acb
acc
acd
ace
acf
ada
adb
adc
add
ade
adf
aea
aeb
aec
aed
aee
aef
afa
afb
afc
afd
afe
aff
baa
bab
bac
bad
bae
baf
bba
bbb
bbc
bbd
bbe
bbf
bca
bcb
bcc
bcd
bce
bcf
bda
bdb
bdc
bdd
bde
bdf
bea
beb
bec
bed
bee
bef
bfa
bfb
bfc
bfd
bfe
bff
caa
cab
cac
cad
cae
caf
cba
cbb
cbc
cbd
cbe
cbf
cca
ccb
ccc
ccd
cce
ccf
cda
cdb
cdc
cdd
cde
cdf
cea
ceb
cec
ced
cee
cef
cfa
cfb
cfc
cfd
cfe
cff
daa
dab
dac
dad
dae
daf
dba
dbb
dbc
dbd
dbe
dbf
dca
dcb
dcc
dcd
dce
dcf
dda
ddb
ddc
ddd
dde
ddf
dea
deb
dec
ded
dee
def
dfa
dfb
dfc
dfd
dfe
dff
eaa
eab
eac
ead
eae
eaf
eba
ebb
ebc
ebd
ebe
ebf
eca
ecb
ecc
ecd
ece
ecf
eda
edb
edc
edd
ede
edf
eea
eeb
eec
eed
eee
eef
efa
efb
efc
efd
efe
eff
faa
fab
fac
fad
fae
faf
fba
fbb
fbc
fbd
fbe
fbf
fca
fcb
fcc
fcd
fce
fcf
fda
fdb
fdc
fdd
fde
fdf
fea
feb
fec
fed
fee
fef
ffa
ffb
ffc
ffd
ffe
fff
[/output]
[/test]
[test]
[input]
triplesLatinLetters(4)
[/input]
[output]
aaa
aab
aac
aad
aba
abb
abc
abd
aca
acb
acc
acd
ada
adb
adc
add
baa
bab
bac
bad
bba
bbb
bbc
bbd
bca
bcb
bcc
bcd
bda
bdb
bdc
bdd
caa
cab
cac
cad
cba
cbb
cbc
cbd
cca
ccb
ccc
ccd
cda
cdb
cdc
cdd
daa
dab
dac
dad
dba
dbb
dbc
dbd
dca
dcb
dcc
dcd
dda
ddb
ddc
ddd
[/output]
[/test]
[test]
[input]
triplesLatinLetters(0)
[/input]
[output]

[/output]
[/test]
[test]
[input]
triplesLatinLetters(5)
[/input]
[output]
aaa
aab
aac
aad
aae
aba
abb
abc
abd
abe
aca
acb
acc
acd
ace
ada
adb
adc
add
ade
aea
aeb
aec
aed
aee
baa
bab
bac
bad
bae
bba
bbb
bbc
bbd
bbe
bca
bcb
bcc
bcd
bce
bda
bdb
bdc
bdd
bde
bea
beb
bec
bed
bee
caa
cab
cac
cad
cae
cba
cbb
cbc
cbd
cbe
cca
ccb
ccc
ccd
cce
cda
cdb
cdc
cdd
cde
cea
ceb
cec
ced
cee
daa
dab
dac
dad
dae
dba
dbb
dbc
dbd
dbe
dca
dcb
dcc
dcd
dce
dda
ddb
ddc
ddd
dde
dea
deb
dec
ded
dee
eaa
eab
eac
ead
eae
eba
ebb
ebc
ebd
ebe
eca
ecb
ecc
ecd
ece
eda
edb
edc
edd
ede
eea
eeb
eec
eed
eee
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Sum Digits
[code-task title="Sum Digits" taskId="js-fundamentals-1-basic-syntax-sum-digits" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function sumDigits(input){
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

Creați un program care primește **un număr** și găsiți suma cifrelor sale.

## Exemplu
   |**Intrare**|**Ieșire**|
| --- | --- |
| sumDigits(245678) | 32 |
| sumDigits(97561) | 28 |

[/task-description]
[tests]
[test open]
[input]
sumDigits(245678)
[/input]
[output]
32
[/output]
[/test]
[test open]
[input]
sumDigits(97561)
[/input]
[output]
28
[/output]
[/test]
[test]
[input]
sumDigits(9465)
[/input]
[output]
24
[/output]
[/test]
[test]
[input]
sumDigits(1)
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
sumDigits(1566625331)
[/input]
[output]
38
[/output]
[/test]
[test]
[input]
sumDigits(00001)
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
sumDigits(15477)
[/input]
[output]
24
[/output]
[/test]
[test]
[input]
sumDigits(99999)
[/input]
[output]
45
[/output]
[/test]
[test]
[input]
sumDigits(1558974233)
[/input]
[output]
47
[/output]
[/test]
[test]
[input]
sumDigits(69844)
[/input]
[output]
31
[/output]
[/test]
[test]
[input]
sumDigits(00000)
[/input]
[output]
0
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Reversed Chars
[code-task title="Reversed Chars" taskId="js-fundamentals-1-basic-syntax-reversed-chars" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function reversChars(firstChar, secondChar, thirdChar){
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
Creați un program care primește **3 parametri** (caractere) și le imprimă în **ordine inversă** cu un spațiu între ele.

## Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| reversChars('A', 'B','C') | C B A |
| reversChars('1','L','\&') | \& L 1 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
reversChars('A', 'B','C')
[/input]
[output]
C B A
[/output]
[/test]
[test open]
[input]
reversChars('1','L','\&')
[/input]
[output]
\& L 1
[/output]
[/test]
[test]
[input]
reversChars('a','b','c')
[/input]
[output]
c b a
[/output]
[/test]
[test]
[input]
reversChars('z','z','z')
[/input]
[output]
z z z
[/output]
[/test]
[test]
[input]
reversChars('\!','\@','\#')
[/input]
[output]
\# \@ \!
[/output]
[/test]
[test]
[input]
reversChars('l','K','\#')
[/input]
[output]
\# K l
[/output]
[/test]
[test]
[input]
reversChars('\_','P','\>')
[/input]
[output]
\> P \_
[/output]
[/test]
[test]
[input]
reversChars('A','B','C')
[/input]
[output]
C B A
[/output]
[/test]
[test]
[input]
reversChars('10','D','\&')
[/input]
[output]
\& D 10
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Calculator
[code-task title="Calculator" taskId="js-fundamentals-1-basic-syntax-Calculator" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function calculator(firstNumber, operator, secondNumber){
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
Creați un program care primește **trei parametri de tip șir:**

- **Număr**

- **Operator**: \+, \-, \*, \\, \%

- **Un alt număr**

Sarcina voastră este să **efectuați un calcul** folosind **operatorul** dat și să **imprimați** rezultatul calculului, formatat la **a doua zecimală.**

## Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
| calculator(5, '+', 10) | 15.00 |
| calculator(25.5, '-', 3) | 22.50 |


[/task-description]
[tests]
[test open]
[input]
calculator(5, '\+', 10)
[/input]
[output]
15.00
[/output]
[/test]
[test open]
[input]
calculator(25.5, '\-', 3)
[/input]
[output]
22.50
[/output]
[/test]
[test]
[input]
calculator(10, '/', 2)
[/input]
[output]
5.00
[/output]
[/test]
[test]
[input]
calculator(20, '\*', 2)
[/input]
[output]
40.00
[/output]
[/test]
[test]
[input]
calculator(5, '/', 2)
[/input]
[output]
2.50
[/output]
[/test]
[test]
[input]
calculator(100, '\+', 100)
[/input]
[output]
200.00
[/output]
[/test]
[test]
[input]
calculator(5.5, '\-', 5.5)
[/input]
[output]
0.00
[/output]
[/test]
[test]
[input]
calculator(0, '\+', 11.11)
[/input]
[output]
11.11
[/output]
[/test]
[test]
[input]
calculator(10, '\*', 5.5)
[/input]
[output]
55.00
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
