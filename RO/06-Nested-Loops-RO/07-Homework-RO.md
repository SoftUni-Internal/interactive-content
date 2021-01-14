# Temă pentru acasă

[slide]
# Problem: Building

[vimeo-video]
[stream language="EN" videoId="488090883/a7c270a8f6" default /]
[stream language="RO" videoId="488090883/a7c270a8f6"  /]
[/video-vimeo]

# Solution

[vimeo-video]
[stream language="EN" videoId="488090919/8b4c1a9e61" default /]
[stream language="RO" videoId="488090919/8b4c1a9e61"  /]
[/video-vimeo]

[code-task title="Building" taskId="pb-js-nested-loops-Building" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function building(input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți un program care: 

Imprimă informațiile despre o construcție: 
* Construcția poate să aibă: **apartments (odd numbered floors)**, **offices (even numbered floors)** și **(on the last floor) Large Apartments** 
* Apartamentele sunt indexate cu: `A{buildingNum}{apartmentNum}`
* Birouri: `O{floorNum}{officeNum}`
* Apartamente mari: `L{buildingNum}{apartmentNum}`
* Numerele încep de la 0

# Exemplu
| **Input** | **Output** |
| --- | --- |
|6| L60 L61 L62 L63|
|4| A50 A51 A52 A53|
||O40 O41 O42 O43 |
||A30 A31 A32 A33 |
||O20 O21 O22 O23 |
|| A10 A11 A12 A13|

[/task-description]
[tests]
[test]
[input]
1
7
[/input]
[output]
L10 L11 L12 L13 L14 L15 L16
[/output]
[/test]
[test]
[input]
0
0
[/input]
[output]

[/output]
[/test]
[test]
[input]
2
5
[/input]
[output]
L20 L21 L22 L23 L24
A10 A11 A12 A13 A14
[/output]
[/test]
[test]
[input]
10
10
[/input]
[output]
L100 L101 L102 L103 L104 L105 L106 L107 L108 L109
A90 A91 A92 A93 A94 A95 A96 A97 A98 A99
O80 O81 O82 O83 O84 O85 O86 O87 O88 O89
A70 A71 A72 A73 A74 A75 A76 A77 A78 A79
O60 O61 O62 O63 O64 O65 O66 O67 O68 O69
A50 A51 A52 A53 A54 A55 A56 A57 A58 A59
O40 O41 O42 O43 O44 O45 O46 O47 O48 O49
A30 A31 A32 A33 A34 A35 A36 A37 A38 A39
O20 O21 O22 O23 O24 O25 O26 O27 O28 O29
A10 A11 A12 A13 A14 A15 A16 A17 A18 A19
[/output]
[/test]
[test]
[input]
5
5
[/input]
[output]
L50 L51 L52 L53 L54
O40 O41 O42 O43 O44
A30 A31 A32 A33 A34
O20 O21 O22 O23 O24
A10 A11 A12 A13 A14
[/output]
[/test]
[test]
[input]
1
1
[/input]
[output]
L10
[/output]
[/test]
[test]
[input]
6
7
[/input]
[output]
L60 L61 L62 L63 L64 L65 L66
A50 A51 A52 A53 A54 A55 A56
O40 O41 O42 O43 O44 O45 O46
A30 A31 A32 A33 A34 A35 A36
O20 O21 O22 O23 O24 O25 O26
A10 A11 A12 A13 A14 A15 A16
[/output]
[/test]
[test]
[input]
8
2
[/input]
[output]
L80 L81
A70 A71
O60 O61
A50 A51
O40 O41
A30 A31
O20 O21
A10 A11
[/output]
[/test]
[test]
[input]
9
0
[/input]
[output]

[/output]
[/test]
[test]
[input]
7
3
[/input]
[output]
L70 L71 L72
O60 O61 O62
A50 A51 A52
O40 O41 O42
A30 A31 A32
O20 O21 O22
A10 A11 A12
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Problem: Passwords

[vimeo-video]
[stream language="EN" videoId="488091064/8c0b8dc12c" default /]
[stream language="RO" videoId="488091064/8c0b8dc12c"  /]
[/video-vimeo]

# Solution

[vimeo-video]
[stream language="EN" videoId="488091095/c49f5f03e5" default /]
[stream language="RO" videoId="488091095/c49f5f03e5"  /]
[/video-vimeo]

[code-task title="Passwords" taskId="pb-js-nested-loops-Passwords" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function passwords(input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți un program care:
* Citește un număr întreg - **n**
* Generează parole specifice, care îndeplinesc următoarele condiții:
* **Prima** este un număr **par** care nu trebuie să fie mai mare decât **n**
* **Cea a două**  este un număr **impar** și nu trebuie să fie mai mare decât **n**
* **Ultima** parte  este un **produs** al primelor două

# Exemplu
| **Input** | **Output** |
| --- | --- |
|6| 212 236 2510 414 4312 4520 616 6318 6530 |

[/task-description]
[tests]
[test]
[input]
8
[/input]
[output]
212 236 2510 2714 414 4312 4520 4728 616 6318 6530 6742 818 8324 8540 8756
[/output]
[/test]
[test]
[input]
9
[/input]
[output]
212 236 2510 2714 2918 414 4312 4520 4728 4936 616 6318 6530 6742 6954 818 8324 8540 8756 8972
[/output]
[/test]
[test]
[input]
10
[/input]
[output]
212 236 2510 2714 2918 414 4312 4520 4728 4936 616 6318 6530 6742 6954 818 8324 8540 8756 8972 10110 10330 10550 10770 10990
[/output]
[/test]
[test]
[input]
3
[/input]
[output]
212 236
[/output]
[/test]
[test]
[input]
2
[/input]
[output]
212
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Problem: Magic Number
[code-task title="Magic Number" taskId="pb-js-nested-loops-magic-number" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function magicNumber(input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți un program care:
* Citește un **număr - n**, de pe consolă
* Identifică toate **numerele cu 3 cifre** pentru care este valabil ca produsul inmulțirii cifrelor care formează numărul să fie egal cu `n` 

# Exemplu
| **Input** | **Output** |
| --- | --- |
|3| 113 |
|| 131 |
|| 311 |
 
[/task-description]
[tests]
[test]
[input]
4
[/input]
[output]
114
122
141
212
221
411
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Problem: Travelling
[code-task title="Travelling" taskId="pb-js-nested-loops-travelling" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function travelling(input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți un program care:

* Citește o **destinație** și un **buget necesar** pentru o vizită 
* Continuă să adauge numere-sume de bani, până când este **suficient** pentru a face călătoria
* Dacă primește comanda `End` programul se termină

# Exemplu
| **Input** | **Output** |
| --- | --- |
|Philippines| Going to Philippines! |
|1000| |
|550| |
|450| |
|End| |


[/task-description]
[tests]
[test]
[input]
Maldives
2500
1000
340
50
50
50
50
700
700
End
[/input]
[output]
Going to Maldives!
[/output]
[/test]
[test]
[input]
Bulgaria
500
200
100
300
Austria
700
200
200
200
200
End
[/input]
[output]
Going to Bulgaria!
Going to Austria!
[/output]
[/test]
[test]
[input]
Africa
3000
1000
5000
America
2000
2500
China
4000
2000
1800
1800
End
[/input]
[output]
Going to Africa!
Going to America!
Going to China!
[/output]
[/test]
[test]
[input]
Estonia
1000
300
200
200
300
Peru
3000
2000
1000
Uganda
1000
1000
UAE
5000
3000
4000
Germany
2000
2000
Portugal
2050
3000
Portugal
2050
3000
Portugal
2050
3000
Portugal
2050
3000
Portugal
2050
3000
End
[/input]
[output]
Going to Estonia!
Going to Peru!
Going to Uganda!
Going to UAE!
Going to Germany!
Going to Portugal!
Going to Portugal!
Going to Portugal!
Going to Portugal!
Going to Portugal!
[/output]
[/test]
[test]
[input]
End
[/input]
[output]

[/output]
[/test]
[test]
[input]
France
3000
50
50
50
50
50
50
50
50
50
50
50
250
100
106
280
400
400
50
400
600
End
[/input]
[output]
Going to France!
[/output]
[/test]
[test]
[input]
Russia
15000
4500
300
300
3000
2000
4500
5000
Japan
1500.600
67.60
26.4052345
250.78
450.78945
578.76
98.60
260.84
End
[/input]
[output]
Going to Russia!
Going to Japan!
[/output]
[/test]
[test]
[input]
South Africa
2000
1000
1000
Egypt
300
150
100
20
20
20
End
[/input]
[output]
Going to South Africa!
Going to Egypt!
[/output]
[/test]
[test]
[input]
Zambia
3700.250
450.300
450.20414
600.43
640.23
824.50
1200.46
End
[/input]
[output]
Going to Zambia!
[/output]
[/test]
[test]
[input]
Albania
350.23414
45.24
23.124
123.144
145.23556
45.2345
End
[/input]
[output]
Going to Albania!
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Problem: Prime Numbers
[code-task title="Prime Numbers" taskId="pb-js-nested-prime-numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function primeNumbers(input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți un program care:

* Citește **două numere** de pe  consolă
* Imprimă numurul **prim** din acest **interval**

# Exemplu
| **Input** | **Output** |
| --- | --- |
|1| 1 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 |
|50|  |
||  |
 
[/task-description]
[tests]
[test]
[input]
1
4
[/input]
[output]
1 2 3
[/output]
[/test]
[test]
[input]
600
900
[/input]
[output]
601 607 613 617 619 631 641 643 647 653 659 661 673 677 683 691 701 709 719 727 733 739 743 751 757 761 769 773 787 797 809 811 821 823 827 829 839 853 857 859 863 877 881 883 887
[/output]
[/test]
[test]
[input]
55
70
[/input]
[output]
59 61 67
[/output]
[/test]
[test]
[input]
11
13
[/input]
[output]
11 13
[/output]
[/test]
[test]
[input]
88
100
[/input]
[output]
89 97
[/output]
[/test]
[test]
[input]
23
27
[/input]
[output]
23
[/output]
[/test]
[test]
[input]
1
9
[/input]
[output]
1 2 3 5 7
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Problem: Unique PIN Codes
[code-task title="Unique PIN Codes" taskId="pb-js-nested-loops-unique-pin-codes" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function uniquePinCodes(input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți un program care:

* Citește **3 cifre** - n1, n2 și n3
* Generează **Coduri PIN unice cu 3 cifre** care îndeplinesc următoarele **condiții**:
* **Prima** cifră  nu trebuie să fie mai mare decât n1
* **A doua** cifră nu trebuie să fie mai mare decât n2
* **A treia** cifră  nu trebuie să fie mai mare decât n3
* Prima cifra și cea a treia cifră trebuie să fie impare
* Cea a doua cifră trebuie să fie **primul număr** din interval \[2…7\]

# Exemplu
| **Input** | **Output** |
| --- | --- |
|3| 222 |
|5| 224 |
|5| 232 |
|| 234 |
|| 252 |
|| 254 |

[/task-description]
[tests]
[test]
[input]
8
2
8
[/input]
[output]
222
224
226
228
422
424
426
428
622
624
626
628
822
824
826
828
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Problem: Letter Combinations
[code-task title="Letter Combinations" taskId="pb-js-nested-loops-letter-combinations" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function letterCombinations(input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți un program care:

* Imprimă **combinații de litere** și **numere** ale combinațiilor generate 

* Veți primi o **serie de litere** pe prima și a doua linie

* Pe a treia linie, va primi o **literă**, pe care trebuie să o **ignoreze** - să nu imprimă combinații din care aceasta să facă parte

# Exemplu
| **Input** | **Output** |
| --- | --- |
|a| aaa aac aca acc caa cac cca ccc 8 |
|c|  |
|b|  |


[/task-description]
[tests]
[test]
[input]
a
c
b
[/input]
[output]
aaa aac aca acc caa cac cca ccc 8
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Problem: Happy Numbers
[code-task title="Happy Numbers" taskId="pb-js-nested-loops-Happy-numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function happyNumbers(input) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Decriere
Scrieți un program care:

Generează toate **numerele cu 4 cifre** cu cifre mai mici decât n și le imprimă, dacă: 

* Atunci când impărțim numărul în două perechi și adăugăm prima cifră celei de-a doua din fiecare pereche, rezultatul este egal cu `n` 

* Atunci când adunăm primele două cifre, rezultatul este divizibil la n, fără rest

# Exemplu
| **Input** | **Output** |
| --- | --- |
|3| 1212 1221 2112 2121 |
||  |
||  |

[/task-description]
[tests]
[test]
[input]
3
[/input]
[output]
1212 1221 2112 2121
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide]
# Rezultatele Temei 
[tasks-results/]

[/slide]