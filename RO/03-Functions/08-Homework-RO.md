# Teme Pentru Acasă

[slide hideTitle]
# Problemă: Repeat String
[code-task title="Repeat String" taskId="js-fundamentals-1-Functions-Repeat-String" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function repeatString(str, n){
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

Scrieți o funcție care primește **un șir** și un număr de repetare - "**n**". 

Funcția ar trebui să returneze un șir nou (cel vechi repetat de "**n**" ori).

## Exemple
|**Intrare**|**Ieșire** |
| --- | --- |
| repeatString('abc', 3) | abcabcabc |
| repeatString('String', 2) | StringString |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
repeatString('abc', 3)
[/input]
[output]
abcabcabc
[/output]
[/test]
[test open]
[input]
repeatString('String', 2)
[/input]
[output]
StringString
[/output]
[/test]
[test]
[input]
repeatString('ani', 2)
[/input]
[output]
aniani
[/output]
[/test]
[test]
[input]
repeatString('ananas', 3)
[/input]
[output]
ananasananasananas
[/output]
[/test]
[test]
[input]
repeatString('tanya', 2)
[/input]
[output]
tanyatanya
[/output]
[/test]
[test]
[input]
repeatString('yavor', 3)
[/input]
[output]
yavoryavoryavor
[/output]
[/test]
[test]
[input]
repeatString('ivan', 2)
[/input]
[output]
ivanivan
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Smallest of Three Numbers
[code-task title="Smallest of Three Numbers" taskId="js-fundamentals-1-Functions-Smallest-of-Three-Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function smallestNumbers(firstNumber, secondNumber, thirdNumber){
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

Scrieți o funcție care primește trei numere întregi pentru a imprima numărul cel mai mic.

Folosiți un nume adecvat pentru funcție.

## Exemple
|**Intrare**|**Ieșire** |
| --- | --- |
| smallestNumbers(2, 5, 3) | 2 |
| smallestNumbers(600, 342, 123) | 123 |
| smallestNumbers(25, 21, 4) | 4 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
smallestNumbers(2, 5, 3)
[/input]
[output]
2
[/output]
[/test]
[test open]
[input]
smallestNumbers(600, 342, 123)
[/input]
[output]
123
[/output]
[/test]
[test open]
[input]
smallestNumbers(25, 21, 4)
[/input]
[output]
4
[/output]
[/test]
[test]
[input]
smallestNumbers(25, 25, 25)
[/input]
[output]
25
[/output]
[/test]
[test]
[input]
smallestNumbers(664213164, 1808459534, 2103069969)
[/input]
[output]
664213164
[/output]
[/test]
[test]
[input]
smallestNumbers(800572446, 391984821, 1988075527)
[/input]
[output]
391984821
[/output]
[/test]
[test]
[input]
smallestNumbers(958036414, 1303722451, 81436290)
[/input]
[output]
81436290
[/output]
[/test]
[test]
[input]
smallestNumbers(1504225756, 2078100171, 1952236125)
[/input]
[output]
1504225756
[/output]
[/test]
[test]
[input]
smallestNumbers(1340748496, 2047564071, 892651240)
[/input]
[output]
892651240
[/output]
[/test]
[test]
[input]
smallestNumbers(1325565386, 175816470, 1646690050)
[/input]
[output]
175816470
[/output]
[/test]
[test]
[input]
smallestNumbers(1897368806, 101858759, 89570573)
[/input]
[output]
89570573
[/output]
[/test]
[test]
[input]
smallestNumbers(851370685, 108554923, 110531645)
[/input]
[output]
108554923
[/output]
[/test]
[test]
[input]
smallestNumbers(1315489464, 15286437, 2013240737)
[/input]
[output]
15286437
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Add and Subtract
[code-task title="Add and Subtract" taskId="js-fundamentals-1-Functions-Add-and-Substract" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function addSubtract(firstNumber, secondNumber, thirdNumber){
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

Veți primi **trei numere întregi.**

Scrieți o funcție `sum()` pentru a obține suma primelor două numere întregi și funcția `subtract()` care scade al treilea număr întreg din rezultat.

## Exemple
|**Intrare**|**Ieșire** |
| --- | --- |
| addSubtract(23, 6, 10) | 19 |
| addSubtract(1, 17, 30) | \-12 |
| addSubtract(42, 58, 100) | 0 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
addSubtract(23, 6, 10)
[/input]
[output]
19
[/output]
[/test]
[test open]
[input]
addSubtract(1, 17, 30)
[/input]
[output]
-12
[/output]
[/test]
[test open]
[input]
addSubtract(42, 58, 100)
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
addSubtract(775, 8058, 6727)
[/input]
[output]
2106
[/output]
[/test]
[test]
[input]
addSubtract(5238, 851, 8783)
[/input]
[output]
-2694
[/output]
[/test]
[test]
[input]
addSubtract(3311, 8557, 872)
[/input]
[output]
10996
[/output]
[/test]
[test]
[input]
addSubtract(1318, 2018, 5695)
[/input]
[output]
-2359
[/output]
[/test]
[test]
[input]
addSubtract(1615, 4900, 8565)
[/input]
[output]
-2050
[/output]
[/test]
[test]
[input]
addSubtract(777, 9465, 7034)
[/input]
[output]
3208
[/output]
[/test]
[test]
[input]
addSubtract(2667, 4817, 1801)
[/input]
[output]
5683
[/output]
[/test]
[test]
[input]
addSubtract(2037, 50, 7681)
[/input]
[output]
-5594
[/output]
[/test]
[test]
[input]
addSubtract(120, 8802, 9102)
[/input]
[output]
-180
[/output]
[/test]
[test]
[input]
addSubtract(6598, 6102, 4528)
[/input]
[output]
8172
[/output]
[/test]
[test]
[input]
addSubtract(789, 3598, 4387)
[/input]
[output]
0
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Characters in Range
[code-task title="Characters in Range" taskId="js-fundamentals-1-Functions-Characters-in-Range" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function charactersInRange(firstChar, secondChar){
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

Scrieți o funcție care **primește două caractere** și imprimă pe o singură linie toate caracterele dintre ele conform codului **ASCII**.

Rețineți că **al doilea cod de caractere ar putea fi înaintea primului din tabelul ASCII.**

## Exemple
|**Intrare**|**Ieșire** |
| --- | --- |
| charactersInRange('a', 'd') | b c |
| charactersInRange('#', ':') | \$ \% \& \' \( \) \* \+ \, \- \. \/ 0 1 2 3 4 5 6 7 8 9 |
| charactersInRange('C', '#') | \$ \% \& \' \( \) \* \+ \, \- \. \/ 0 1 2 3 4 5 6 7 8 9 \: \; \< \= \> \? \@ A B |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
charactersInRange('a', 'd')
[/input]
[output]
b c
[/output]
[/test]
[test open]
[input]
charactersInRange('#', ':')
[/input]
[output]
\$ \% \& \' \( \) \* \+ \, \- \. \/ 0 1 2 3 4 5 6 7 8 9
[/output]
[/test]
[test open]
[input]
charactersInRange('C', '#')
[/input]
[output]
\$ \% \& \' \( \) \* \+ \, \- \. \/ 0 1 2 3 4 5 6 7 8 9 \: \; \< \= \> \? \@ A B
[/output]
[/test]
[test]
[input]
charactersInRange('t', 'E')
[/input]
[output]
F G H I J K L M N O P Q R S T U V W X Y Z \[ \ \] ^ _ \` a b c d e f g h i j k l m n o p q r s
[/output]
[/test]
[test]
[input]
charactersInRange('!', '\}')
[/input]
[output]
\" \# \$ \% \& \' \( \) \* \+ \, \- \. \/ 0 1 2 3 4 5 6 7 8 9 \: \; \< \= \> \? \@ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z \[ \\ \] \^ \_ \` a b c d e f g h i j k l m n o p q r s t u v w x y z \{ \|
[/output]
[/test]
[test]
[input]
charactersInRange('\|', '\\$')
[/input]
[output]
% & ' ( ) \* + , - . / 0 1 2 3 4 5 6 7 8 9 : ; \< = \> ? @ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z \[ \ \] ^ _ \` a b c d e f g h i j k l m n o p q r s t u v w x y z \{
[/output]
[/test]
[test]
[input]
charactersInRange(':', '\#')
[/input]
[output]
\$ \% \& \' \( \) \* \+ \, \- \. \/ 0 1 2 3 4 5 6 7 8 9
[/output]
[/test]
[test]
[input]
charactersInRange('m', '9')
[/input]
[output]
: ; \< = \> ? @ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z \[ \ \] ^ _ \` a b c d e f g h i j k l
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Odd and Even Sum
[code-task title="Odd and Even Sum" taskId="js-fundamentals-1-Functions-Odd-and-Even-sum" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function oddEvenSum(input){
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

Veți primi un **singur număr**.

Scrieți o funcție care returnează **suma** din **toate cifrele pare** și **toate cifrele impare** din acel număr.

## Exemplus
|**Intrare**|**Ieșire** |
| --- | --- |
| oddEvenSum(1000435) |  Odd sum = 9, Even sum = 4 |
| oddEvenSum(3495892137259234) | Odd sum = 54, Even sum = 22 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
oddEvenSum(1000435)
[/input]
[output]
Odd sum = 9, Even sum = 4
[/output]
[/test]
[test open]
[input]
oddEvenSum(3495892137259234)
[/input]
[output]
Odd sum = 54, Even sum = 22
[/output]
[/test]
[test]
[input]
oddEvenSum(527249158)
[/input]
[output]
Odd sum = 27, Even sum = 16
[/output]
[/test]
[test]
[input]
oddEvenSum(100000001)
[/input]
[output]
Odd sum = 2, Even sum = 0
[/output]
[/test]
[test]
[input]
oddEvenSum(12345)
[/input]
[output]
Odd sum = 9, Even sum = 6
[/output]
[/test]
[test]
[input]
oddEvenSum(1117)
[/input]
[output]
Odd sum = 10, Even sum = 0
[/output]
[/test]
[test]
[input]
oddEvenSum(570529212230)
[/input]
[output]
Odd sum = 30, Even sum = 8
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Palindrome Integers
[code-task title="Palindrome Integers" taskId="js-fundamentals-1-Functions-Palindrom-Integers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function palindrome(input){
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

Un palindrom este un număr care citit  **de la stânga la dreapta sau de la dreapta la stânga rămâne neschimbat**, cum ar fi 323 sau 1001.

Scrieți o funcție care primește o **matrice de numere  întregi pozitive** și verificați dacă fiecare număr întreg este un palindrom sau nu.

## Exemplul Unu
|**Intrare**|**Ieșire** |
| --- | --- |
| palindrome([123, 323, 421, 121]) |  false |
||true|
||false|
||true|

## Exemplul Doi
|**Intrare**|**Ieșire** |
| --- | --- |
| palindrome([32, 2, 232, 1010]) |  false |
||true|
||true|
||false|

[/task-description]
[code-io /]
[tests]
[test open]
[input]
palindrome([123, 323, 421, 121])
[/input]
[output]
false
true
false
true
[/output]
[/test]
[test open]
[input]
palindrome([32, 2, 232, 1010])
[/input]
[output]
false
true
true
false
[/output]
[/test]
[test]
[input]
palindrome([121, 159, 259])
[/input]
[output]
true
false
false
[/output]
[/test]
[test]
[input]
palindrome([121, 528, 891, 622, 271, 602, 117, 489])
[/input]
[output]
true
false
false
false
false
false
false
false
[/output]
[/test]
[test]
[input]
palindrome([70, 555, 523, 902, 554, 209, 918, 37, 808])
[/input]
[output]
false
true
false
false
false
false
false
false
true
[/output]
[/test]
[test]
[input]
palindrome([567, 656, 920, 184, 580, 128, 638, 276, 137])
[/input]
[output]
false
true
false
false
false
false
false
false
false
[/output]
[/test]
[test]
[input]
palindrome([123321, 121, 356653, 157, 1001, 666, 159951])
[/input]
[output]
true
true
true
false
true
true
true
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Password Validator
[code-task title="Password Validator" taskId="js-fundamentals-1-Functions-Password-Validator" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function passwordValidator(input){
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

Scrieți o funcție care verifică dacă o parolă dată este validă. 
Validările parolelor sunt:

- Lungimea trebuie să fie de 6 - 10 caractere (inclusiv)
- Ar trebui să fie formată doar din litere și cifre
- Ar trebui să aibă cel puțin 2 cifre

Dacă o parolă este validă, tipăriți "**Password is valid**".

Dacă este **NU** este validă, pentru fiecare regulă neîmplinită tipăriți un mesaj:

- "**Password must be between 6 and 10 characters**"

- "**Password must consist only of letters and digits**"

- "**Password must have at least 2 digits**"

## Exemplul Unu
|**Intrare**|**Ieșire**|
| --- | --- |
| passwordValidator('logIn') | Password must be between 6 and 10 characters |
|| Password must have at least 2 digits |

## Exemplul  Di
|**Intrare**|**Ieșire**|
| --- | --- |
| passwordValidator('MyPass123') | Password is valid |

## Exemplul Trei
|**Intrare**|**Ieșire**|
| --- | --- |
| passwordValidator('Pa$s$s') | Password must consist only of letters and digits |
|| Password must have at least 2 digits|

[/task-description]
[code-io /]
[tests]
[test open]
[input]
passwordValidator('logIn')
[/input]
[output]
Password must be between 6 and 10 characters
Password must have at least 2 digits
[/output]
[/test]
[test open]
[input]
passwordValidator('MyPass123')
[/input]
[output]
Password is valid
[/output]
[/test]
[test open]
[input]
passwordValidator('Pa$s$s')
[/input]
[output]
Password must consist only of letters and digits
Password must have at least 2 digits
[/output]
[/test]
[test]
[input]
passwordValidator('Acer')
[/input]
[output]
Password must be between 6 and 10 characters
Password must have at least 2 digits
[/output]
[/test]
[test]
[input]
passwordValidator('Picture')
[/input]
[output]
Password must have at least 2 digits
[/output]
[/test]
[test]
[input]
passwordValidator('pesho123\#')
[/input]
[output]
Password must consist only of letters and digits
[/output]
[/test]
[test]
[input]
passwordValidator('gas%2')
[/input]
[output]
Password must be between 6 and 10 characters
Password must consist only of letters and digits
Password must have at least 2 digits
[/output]
[/test]
[test]
[input]
passwordValidator('\\$\\$\\$\\$\\$\\$\\$')
[/input]
[output]
Password must consist only of letters and digits
Password must have at least 2 digits
[/output]
[/test]
[test]
[input]
passwordValidator('Pesho189')
[/input]
[output]
Password is valid
[/output]
[/test]
[test]
[input]
passwordValidator('SoftUni40')
[/input]
[output]
Password is valid
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: NxN Matrix
[code-task title="NxN Matrix" taskId="js-fundamentals-1-Functions-NxN-Matrix" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function matrix(input){
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

Scrieți o funcție care primește un singur număr întreg **n** și imprimă matricea **nxn** cu acel număr.

## Exemplul Unu
|**Intrare**|**Ieșire** |
| --- | --- |
| matrix(3) | 3 3 3|
|| 3 3 3 |
|| 3 3 3 |

## Exemplul Doi
|**Intrare**|**Ieșire** |
| --- | --- |
| matrix(2) | 2 2 |
|| 2 2 |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
matrix(3)
[/input]
[output]
3 3 3
3 3 3
3 3 3
[/output]
[/test]
[test open]
[input]
matrix(2)
[/input]
[output]
2 2
2 2
[/output]
[/test]
[test]
[input]
matrix(7)
[/input]
[output]
7 7 7 7 7 7 7
7 7 7 7 7 7 7
7 7 7 7 7 7 7
7 7 7 7 7 7 7
7 7 7 7 7 7 7
7 7 7 7 7 7 7
7 7 7 7 7 7 7
[/output]
[/test]
[test]
[input]
matrix(10)
[/input]
[output]
10 10 10 10 10 10 10 10 10 10
10 10 10 10 10 10 10 10 10 10
10 10 10 10 10 10 10 10 10 10
10 10 10 10 10 10 10 10 10 10
10 10 10 10 10 10 10 10 10 10
10 10 10 10 10 10 10 10 10 10
10 10 10 10 10 10 10 10 10 10
10 10 10 10 10 10 10 10 10 10
10 10 10 10 10 10 10 10 10 10
10 10 10 10 10 10 10 10 10 10
[/output]
[/test]
[test]
[input]
matrix(5)
[/input]
[output]
5 5 5 5 5
5 5 5 5 5
5 5 5 5 5
5 5 5 5 5
5 5 5 5 5
[/output]
[/test]
[test]
[input]
matrix(18)
[/input]
[output]
18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18 18
[/output]
[/test]
[test]
[input]
matrix(20)
[/input]
[output]
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20
[/output]
[/test]
[test]
[input]
matrix(13)
[/input]
[output]
13 13 13 13 13 13 13 13 13 13 13 13 13
13 13 13 13 13 13 13 13 13 13 13 13 13
13 13 13 13 13 13 13 13 13 13 13 13 13
13 13 13 13 13 13 13 13 13 13 13 13 13
13 13 13 13 13 13 13 13 13 13 13 13 13
13 13 13 13 13 13 13 13 13 13 13 13 13
13 13 13 13 13 13 13 13 13 13 13 13 13
13 13 13 13 13 13 13 13 13 13 13 13 13
13 13 13 13 13 13 13 13 13 13 13 13 13
13 13 13 13 13 13 13 13 13 13 13 13 13
13 13 13 13 13 13 13 13 13 13 13 13 13
13 13 13 13 13 13 13 13 13 13 13 13 13
13 13 13 13 13 13 13 13 13 13 13 13 13
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Perfect Number 
[code-task title="Perfect Number" taskId="js-fundamentals-1-Functions-Perfect-Number" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function perfectNumber(input){
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

Scrieți o funcție care primește un număr și stabilește dacă acest număr este **perfect** sau **nu**.

Un număr perfect este un număr întreg **pozitiv** care este egal cu **suma divizorilor pozitivi proprii**.

Aceasta este suma divizorilor sale pozitivi, excluzând numărul în sine (cunoscut și ca **suma alicotă**).

## Exemple
| **Intrare** | **Ieșire** | **Comentarii** |
| :---:       |    :----:   |   :---:     |
| perfectNumber(6) |We have a perfect number!| 1 + 2 + 3|
| perfectNumber(28) | We have a perfect number!|1 + 2 + 4 + 7 + 14|
| perfectNumber(1236498) |It's not so perfect.||

[hints]
[hint]
În mod echivalent, un număr perfect este un număr care este **o jumătate din suma** tuturor divizorilor săi pozitivi `(incluzând numărul respectiv) => 6` este un număr perfect, deoarece este suma lui `1 + 2 + 3` (toate fiind împărțite fără rest).
[/hint] 
[hint]
Citiți despre [perfect](https://en.wikipedia.org/wiki/Perfect_number) number.
[/hint] 
[hint]
Puteți crea o buclă for de la **0** la **num / 2**:

```js
tempNum = 0;

for (let i = 0; i <= num / 2; i++) {
  if (num % i === 0) {
    tempNum += i;
  }
}
```
[/hint] 
[hint]
Apoi, creați un bloc **if-else** și imprimați rezultatul corect: 

```js
if (tempNum === num && tempNum !== 0) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
```
[/hint] 
[/hints] 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
perfectNumber(6)
[/input]
[output]
We have a perfect number!
[/output]
[/test]
[test open]
[input]
perfectNumber(28)
[/input]
[output]
We have a perfect number!
[/output]
[/test]
[test open]
[input]
perfectNumber(1236498)
[/input]
[output]
It's not so perfect.
[/output]
[/test]
[test]
[input]
perfectNumber(7)
[/input]
[output]
It's not so perfect.
[/output]
[/test]
[test]
[input]
perfectNumber(496)
[/input]
[output]
We have a perfect number!
[/output]
[/test]
[test]
[input]
perfectNumber(29)
[/input]
[output]
It's not so perfect.
[/output]
[/test]
[test]
[input]
perfectNumber(8128)
[/input]
[output]
We have a perfect number!
[/output]
[/test]
[test]
[input]
perfectNumber(133)
[/input]
[output]
It's not so perfect.
[/output]
[/test]
[test]
[input]
perfectNumber(33550336)
[/input]
[output]
We have a perfect number!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
