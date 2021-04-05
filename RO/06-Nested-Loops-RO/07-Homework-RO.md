// sectionId: "Javascript::Programming-Basics::Nested-Loops::Homework"

# Teme Pentru Acasă

[slide hideTitle]
# Problemă cu Soluție: Building

[video src="https://videos.softuni.org/hls/javascript-basics/RO/06-Nested-Loops/JS-basics-nested-loops-33-solution-building-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Building" taskId="pb-js-nested-loops-Building" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function building(floors, rooms) {
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
Creați un program care imprimă următoarele informații despre o clădire:

* Veți primi două numere: numărul de etaje și câte încăperi are fiecare etaj
* Clădirea poate găzdui: **apartamente (etaje cu număr impar)**, **birouri (etaje cu număr par)** și **(la ultimul etaj) apartamente mari**
* Apartamentele sunt indexate cu:  "**A**\{**buildingNum**\}\{**apartmentNum**\}"
* Birourile sunt indexate cu: "**O**\{**floorNum**\}\{**officeNum**\}"
* Apartamentele mari sunt indexate cu: "**L**\{**buildingNum**\}\{**apartmentNum**\}"
* Numărarea începe întotdeauna de la 0

# Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| building(6, 4) | L60 L61 L62 L63|
|| A50 A51 A52 A53|
||O40 O41 O42 O43 |
||A30 A31 A32 A33 |
||O20 O21 O22 O23 |
|| A10 A11 A12 A13|

| **Intrare** | **Ieșire** |
| --- | --- |
| building(2, 5) | L20 L21 L22 L23 L24|
|| A10 A11 A12 A13 A14|

[/task-description]
[tests]
[test open]
[input]
building(6, 4)
[/input]
[output]
L60 L61 L62 L63
A50 A51 A52 A53
O40 O41 O42 O43
A30 A31 A32 A33
O20 O21 O22 O23
A10 A11 A12 A13
[/output]
[/test]
[test]
[input]
bulding(1, 7)
[/input]
[output]
L10 L11 L12 L13 L14 L15 L16
[/output]
[/test]
[test]
[input]
building(0, 0)
[/input]
[output]

[/output]
[/test]
[test open]
[input]
building(2, 5)
[/input]
[output]
L20 L21 L22 L23 L24
A10 A11 A12 A13 A14
[/output]
[/test]
[test]
[input]
building(10, 10)
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
building(5, 5)
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
bulding(1, 1)
[/input]
[output]
L10
[/output]
[/test]
[test]
[input]
building(6, 7)
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
building(8, 2)
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
building(9, 0)
[/input]
[output]

[/output]
[/test]
[test]
[input]
building(7, 3)
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

[slide hideTitle]
# Problemă cu Soluție: Passwords

[video src="https://videos.softuni.org/hls/javascript-basics/RO/06-Nested-Loops/JS-basics-nested-loops-36-solution-password-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Passwords" taskId="pb-js-nested-loops-Passwords" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function passwords(input) {
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
Creați un program care generează parole personalizate:

* Veți primi un număr **n** ca intrare
* Generați toate parolele specifice, care îndeplinesc următoarele condiții:
  * **Prima** parte este un număr **par** care nu trebuie să fie mai mare decât **n**
  * **A doua** parte este un număr **impar** care nu trebuie să fie mai mare decât **n**
  * **Ultima** parte este un **produs** al primelor două

# Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| passwords(6) | 212 236 2510 414 4312 4520 616 6318 6530 |
| passwords(2) | 212 |

[/task-description]
[tests]
[test open]
[input]
passwords(6)
[/input]
[output]
212 236 2510 414 4312 4520 616 6318 6530
[/output]
[/test]
[test]
[input]
passwords(8)
[/input]
[output]
212 236 2510 2714 414 4312 4520 4728 616 6318 6530 6742 818 8324 8540 8756
[/output]
[/test]
[test]
[input]
passwords(9)
[/input]
[output]
212 236 2510 2714 2918 414 4312 4520 4728 4936 616 6318 6530 6742 6954 818 8324 8540 8756 8972
[/output]
[/test]
[test]
[input]
passwords(10)
[/input]
[output]
212 236 2510 2714 2918 414 4312 4520 4728 4936 616 6318 6530 6742 6954 818 8324 8540 8756 8972 10110 10330 10550 10770 10990
[/output]
[/test]
[test]
[input]
passwords(3)
[/input]
[output]
212 236
[/output]
[/test]
[test open]
[input]
passwords(2)
[/input]
[output]
212
[/output]
[/test]
[test]
[input]
passwords(9)
[/input]
[output]
212 236 2510 2714 2918 414 4312 4520 4728 4936 616 6318 6530 6742 6954 818 8324 8540 8756 8972
[/output]
[/test]
[test]
[input]
passwords(15)
[/input]
[output]
212 236 2510 2714 2918 21122 21326 21530 414 4312 4520 4728 4936 41144 41352 41560 616 6318 6530 6742 6954 61166 61378 61590 818 8324 8540 8756 8972 81188 813104 815120 10110 10330 10550 10770 10990 1011110 1013130 1015150 12112 12336 12560 12784 129108 1211132 1213156 1215180 14114 14342 14570 14798 149126 1411154 1413182 1415210
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Magic Number
[code-task title="Magic Number" taskId="pb-js-nested-loops-magic-number" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function magicNumber(input) {
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
Creați un program care găsește toate numerele magice conform următoarelor condiții:
* Veți primi un număr **n** de pe consolă
* Identificați toate **numerele de 3 cifre** pentru care produsul înmulțirii cifrelor care formează numărul să fie egal cu **n**

# Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| magicNumber(3) | 113 |
|| 131 |
|| 311 |
 
| **Intrare** | **Ieșire** |
| --- | --- |
| magicNumber(4)| 114 |
|| 122 |
|| 141 |
|| 212 |
|| 221 |
|| 411 |
 
[/task-description]
[tests]
[test open]
[input]
magicNumber(3)
[/input]
[output]
113
131
311
[/output]
[/test]
[test open]
[input]
magicNumber(4)
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
[test]
[input]
magicNumber(5)
[/input]
[output]
115
151
511
[/output]
[/test]
[test]
[input]
magicNumber(8)
[/input]
[output]
118
124
142
181
214
222
241
412
421
811
[/output]
[/test]
[test]
[input]
magicNumber(9)
[/input]
[output]
119
133
191
313
331
911
[/output]
[/test]
[test]
[input]
magicNumber(12)
[/input]
[output]
126
134
143
162
216
223
232
261
314
322
341
413
431
612
621
[/output]
[/test]
[test]
[input]
magicNumber(4)
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
[test]
[input]
magicNumber(14)
[/input]
[output]
127
172
217
271
712
721
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Travelling
[code-task title="Travelling" taskId="pb-js-nested-loops-travelling" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function travelling(input) {
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
Creați un program care economisește banii necesari pentru a vizita o destinație dată:

* Veți primi o **destinație** și un **buget necesar** pentru a o vizita 
* Continuați să procesați numere - sume de bani, până când bugetul este **suficient** pentru a face călătoria
* Dacă primiți comanda **End** programul se termină

# Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| travelling(['Philippines', 1000, 550, 450, 'End']) | Going to Philippines! |

| **Intrare** | **Ieșire** |
| --- | --- |
| travelling(['Greece', 1000, 200, 200, 300, 100, 150, 240, 'Spain', 1200, 300, 500, 193, 423, 'End']) | Going to Greece! |
||Going to Spain!|

[/task-description]
[tests]
[test open]
[input]
travelling(['Philippines', 1000, 550, 450, 'End'])
[/input]
[output]
Going to Philippines!
[/output]
[/test]
[test open]
[input]
travelling(['Greece', 1000, 200, 200, 300, 100, 150, 240, 'Spain', 1200, 300, 500, 193, 423, 'End'])
[/input]
[output]
Going to Greece!
Going to Spain!
[/output]
[/test]
[test]
[input]
travelling(['France', 2000, 300, 300, 200, 400, 190, 258, 360, 'Portugal', 1450, 400, 400, 200, 300, 300, 'Egypt', 1900, 1000, 280, 300, 500, 'End'])
[/input]
[output]
Going to France!
Going to Portugal!
Going to Egypt!
[/output]
[/test]
[test]
[input]
travelling(['Bulgaria', 500, 200, 100, 300, 'Austria', 700, 200, 200, 200, 200, 'End'])
[/input]
[output]
Going to Bulgaria!
Going to Austria!
[/output]
[/test]
[test]
[input]
travelling(['Maldives', 2500, 1000, 340, 50, 50, 50, 50, 700, 700, 'End'])
[/input]
[output]
Going to Maldives!
[/output]
[/test]
[test]
[input]
travelling(['Africa', 3000, 1000, 5000, 'America', 2000, 2500, 'China', 4000, 2000, 1800, 1800, 'End'])
[/input]
[output]
Going to Africa!
Going to America!
Going to China!
[/output]
[/test]
[test]
[input]
travelling(['Estonia', 1000, 300, 200, 200, 300, 'Peru', 3000, 2000, 1000, 'Uganda', 1000, 1000, 'UAE', 5000, 3000, 4000, 'Germany', 2000, 2000, 'Portugal', 2050, 3000, 'Portugal', 2050, 3000, 'Portugal', 2050, 3000, 'Portugal', 2050, 3000, 'Portugal', 2050, 3000, 'End'])
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
travelling(['End'])
[/input]
[output]

[/output]
[/test]
[test]
[input]
travelling(['France', 3000, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 250, 100, 106, 280, 400, 400, 50, 400, 600, 'End'])
[/input]
[output]
Going to France!
[/output]
[/test]
[test]
[input]
travelling(['Russia', 15000, 4500, 300, 300, 3000, 2000, 4500, 5000, 'Japan', 1500.600, 67.60, 26.4052345, 250.78, 450.78945, 578.76, 98.60, 260.84, 'End'])
[/input]
[output]
Going to Russia!
Going to Japan!
[/output]
[/test]
[test]
[input]
travelling(['South Africa', 2000, 1000, 1000, 'Egypt', 300, 150, 100, 20, 20, 20, 'End'])
[/input]
[output]
Going to South Africa!
Going to Egypt!
[/output]
[/test]
[test]
[input]
travelling(['Zambia', 3700.250, 450.300, 450.20414, 600.43, 640.23, 824.50, 1200.46, 'End'])
[/input]
[output]
Going to Zambia!
[/output]
[/test]
[test]
[input]
travelling(['Albania', 350.23414, 45.24, 23.124, 123.144, 145.23556, 45.2345, 'End'])
[/input]
[output]
Going to Albania!
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Prime Numbers
[code-task title="Prime Numbers" taskId="pb-js-nested-prime-numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function primeNumbers(firstNumber, secondNumber) {
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
Creați un program care imprimă toate numerele prime dintr-un interval dat:

* Veți primi **două numere** de pe consolă: **începutul** și **sfârșitul** intervalului
* Imprimați pe consolă numerele **prime** din acest **interval**

# Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| primeNumbers(1, 50) | 1 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 |
| prmeNumbers(10, 30) | 11 13 17 19 23 29 |

[hints]
[hint]
Un număr prim este un număr întreg care nu poate fi creat prin înmulțirea altor numere întregi.
[/hint]
[/hints]
 
[/task-description]
[tests]
[test open]
[input]
primeNumbers(1, 50)
[/input]
[output]
1 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47
[/output]
[/test]
[test open]
[input]
prmeNumbers(10, 30)
[/input]
[output]
11 13 17 19 23 29
[/output]
[/test]
[test]
[input]
primeNumbers(1, 4)
[/input]
[output]
1 2 3
[/output]
[/test]
[test]
[input]
primeNumbers(600, 900)
[/input]
[output]
601 607 613 617 619 631 641 643 647 653 659 661 673 677 683 691 701 709 719 727 733 739 743 751 757 761 769 773 787 797 809 811 821 823 827 829 839 853 857 859 863 877 881 883 887
[/output]
[/test]
[test]
[input]
primeNumbers(55, 70)
[/input]
[output]
59 61 67
[/output]
[/test]
[test]
[input]
primeNumbers(11, 13)
[/input]
[output]
11 13
[/output]
[/test]
[test]
[input]
primeNumbers(88, 100)
[/input]
[output]
89 97
[/output]
[/test]
[test]
[input]
primeNumbers(23, 27)
[/input]
[output]
23
[/output]
[/test]
[test]
[input]
primeNumbers(1, 9)
[/input]
[output]
1 2 3 5 7
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Unique PIN Codes
[code-task title="Unique PIN Codes" taskId="pb-js-nested-loops-unique-pin-codes" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function uniquePinCodes(firstNumber, secondNumber, thirdNumber) {
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
Creați un program care generază coduri PIN unice:

* Veți primi **3 cifre** - n1, n2 și n3
* Generați **Coduri PIN unice de 3 cifre** care îndeplinesc următoarele **condiții**:
  * **prima** cifră  nu trebuie să fie mai mare decât n1
  * **a doua** cifră nu trebuie să fie mai mare decât n2
  * **a treia** cifră nu trebuie să fie mai mare decât n3
  * prima cifră și cea de-a treia cifră trebuie să fie pare
  * cea de-a doua cifră trebuie să fie **un număr prim** din intervalul \[2 ... 7\]

# Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| uniquePinCodes(3, 5, 5) | 222 |
|| 224 |
|| 232 |
|| 234 |
|| 252 |
|| 254 |

| **Intrare** | **Ieșire** |
| --- | --- |
| uniquePinCodes(2, 4, 6) | 222 |
|| 224 |
|| 226 |
|| 232 |
|| 234 |
|| 236 |

[/task-description]
[tests]
[test open]
[input]
uniquePinCodes(3, 5, 5)
[/input]
[output]
222
224
232
234
252
254
[/output]
[/test]
[test open]
[input]
uniquePinCodes(2, 4, 6)
[/input]
[output]
222
224
226
232
234
236
[/output]
[/test]
[test]
[input]
uniquePinCodes(8, 2, 8)
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
[test]
[input]
uniquePinCodes(2, 4, 6)
[/input]
[output]
222
224
226
232
234
236
[/output]
[/test]
[test]
[input]
uniquePinCodes(3, 6, 9)
[/input]
[output]
222
224
226
228
232
234
236
238
252
254
256
258
[/output]
[/test]
[test]
[input]
uniquePinCodes(2, 2, 3)
[/input]
[output]
222
[/output]
[/test]
[test]
[input]
uniquePinCodes(1, 1, 1)
[/input]
[output]

[/output]
[/test]
[test]
[input]
uniquePinCodes(7, 8, 9)
[/input]
[output]
222
224
226
228
232
234
236
238
252
254
256
258
272
274
276
278
422
424
426
428
432
434
436
438
452
454
456
458
472
474
476
478
622
624
626
628
632
634
636
638
652
654
656
658
672
674
676
678
[/output]
[/test]
[test]
[input]
uniquePinCodes(2, 3, 5)
[/input]
[output]
222
224
232
234
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Letter Combinations
[code-task title="Letter Combinations" taskId="pb-js-nested-loops-letter-combinations" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function letterCombinations(firstLetter, lastLetter,  missedLetter) {
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
Creați un program care imprimă **combinații de litere** și **numărul** de combinații generate:

* Primele două litere pe care le veți primi reprezintă intervalul cu care va trebui să lucrați

* Ignorați a treia literă și nu imprimați combinații cu aceasta

# Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| letterCombinations('a', 'c', 'b') | aaa aac aca acc caa cac cca ccc 8 |

[/task-description]
[tests]
[test open]
[input]
letterCombinations('a', 'c', 'b')
[/input]
[output]
aaa aac aca acc caa cac cca ccc 8
[/output]
[/test]
[test]
[input]
letterCombinations('r', 'w', 'm')
[/input]
[output]
rrr rrs rrt rru rrv rrw rsr rss rst rsu rsv rsw rtr rts rtt rtu rtv rtw rur rus rut ruu ruv ruw rvr rvs rvt rvu rvv rvw rwr rws rwt rwu rwv rww srr srs srt sru srv srw ssr sss sst ssu ssv ssw str sts stt stu stv stw sur sus sut suu suv suw svr svs svt svu svv svw swr sws swt swu swv sww trr trs trt tru trv trw tsr tss tst tsu tsv tsw ttr tts ttt ttu ttv ttw tur tus tut tuu tuv tuw tvr tvs tvt tvu tvv tvw twr tws twt twu twv tww urr urs urt uru urv urw usr uss ust usu usv usw utr uts utt utu utv utw uur uus uut uuu uuv uuw uvr uvs uvt uvu uvv uvw uwr uws uwt uwu uwv uww vrr vrs vrt vru vrv vrw vsr vss vst vsu vsv vsw vtr vts vtt vtu vtv vtw vur vus vut vuu vuv vuw vvr vvs vvt vvu vvv vvw vwr vws vwt vwu vwv vww wrr wrs wrt wru wrv wrw wsr wss wst wsu wsv wsw wtr wts wtt wtu wtv wtw wur wus wut wuu wuv wuw wvr wvs wvt wvu wvv wvw wwr wws wwt wwu wwv www 216
[/output]
[/test]
[test]
[input]
letterCombinations('y', 'v', 'z')
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
letterCombinations('q', 'z', 'n')
[/input]
[output]
qqq qqr qqs qqt qqu qqv qqw qqx qqy qqz qrq qrr qrs qrt qru qrv qrw qrx qry qrz qsq qsr qss qst qsu qsv qsw qsx qsy qsz qtq qtr qts qtt qtu qtv qtw qtx qty qtz quq qur qus qut quu quv quw qux quy quz qvq qvr qvs qvt qvu qvv qvw qvx qvy qvz qwq qwr qws qwt qwu qwv qww qwx qwy qwz qxq qxr qxs qxt qxu qxv qxw qxx qxy qxz qyq qyr qys qyt qyu qyv qyw qyx qyy qyz qzq qzr qzs qzt qzu qzv qzw qzx qzy qzz rqq rqr rqs rqt rqu rqv rqw rqx rqy rqz rrq rrr rrs rrt rru rrv rrw rrx rry rrz rsq rsr rss rst rsu rsv rsw rsx rsy rsz rtq rtr rts rtt rtu rtv rtw rtx rty rtz ruq rur rus rut ruu ruv ruw rux ruy ruz rvq rvr rvs rvt rvu rvv rvw rvx rvy rvz rwq rwr rws rwt rwu rwv rww rwx rwy rwz rxq rxr rxs rxt rxu rxv rxw rxx rxy rxz ryq ryr rys ryt ryu ryv ryw ryx ryy ryz rzq rzr rzs rzt rzu rzv rzw rzx rzy rzz sqq sqr sqs sqt squ sqv sqw sqx sqy sqz srq srr srs srt sru srv srw srx sry srz ssq ssr sss sst ssu ssv ssw ssx ssy ssz stq str sts stt stu stv stw stx sty stz suq sur sus sut suu suv suw sux suy suz svq svr svs svt svu svv svw svx svy svz swq swr sws swt swu swv sww swx swy swz sxq sxr sxs sxt sxu sxv sxw sxx sxy sxz syq syr sys syt syu syv syw syx syy syz szq szr szs szt szu szv szw szx szy szz tqq tqr tqs tqt tqu tqv tqw tqx tqy tqz trq trr trs trt tru trv trw trx try trz tsq tsr tss tst tsu tsv tsw tsx tsy tsz ttq ttr tts ttt ttu ttv ttw ttx tty ttz tuq tur tus tut tuu tuv tuw tux tuy tuz tvq tvr tvs tvt tvu tvv tvw tvx tvy tvz twq twr tws twt twu twv tww twx twy twz txq txr txs txt txu txv txw txx txy txz tyq tyr tys tyt tyu tyv tyw tyx tyy tyz tzq tzr tzs tzt tzu tzv tzw tzx tzy tzz uqq uqr uqs uqt uqu uqv uqw uqx uqy uqz urq urr urs urt uru urv urw urx ury urz usq usr uss ust usu usv usw usx usy usz utq utr uts utt utu utv utw utx uty utz uuq uur uus uut uuu uuv uuw uux uuy uuz uvq uvr uvs uvt uvu uvv uvw uvx uvy uvz uwq uwr uws uwt uwu uwv uww uwx uwy uwz uxq uxr uxs uxt uxu uxv uxw uxx uxy uxz uyq uyr uys uyt uyu uyv uyw uyx uyy uyz uzq uzr uzs uzt uzu uzv uzw uzx uzy uzz vqq vqr vqs vqt vqu vqv vqw vqx vqy vqz vrq vrr vrs vrt vru vrv vrw vrx vry vrz vsq vsr vss vst vsu vsv vsw vsx vsy vsz vtq vtr vts vtt vtu vtv vtw vtx vty vtz vuq vur vus vut vuu vuv vuw vux vuy vuz vvq vvr vvs vvt vvu vvv vvw vvx vvy vvz vwq vwr vws vwt vwu vwv vww vwx vwy vwz vxq vxr vxs vxt vxu vxv vxw vxx vxy vxz vyq vyr vys vyt vyu vyv vyw vyx vyy vyz vzq vzr vzs vzt vzu vzv vzw vzx vzy vzz wqq wqr wqs wqt wqu wqv wqw wqx wqy wqz wrq wrr wrs wrt wru wrv wrw wrx wry wrz wsq wsr wss wst wsu wsv wsw wsx wsy wsz wtq wtr wts wtt wtu wtv wtw wtx wty wtz wuq wur wus wut wuu wuv wuw wux wuy wuz wvq wvr wvs wvt wvu wvv wvw wvx wvy wvz wwq wwr wws wwt wwu wwv www wwx wwy wwz wxq wxr wxs wxt wxu wxv wxw wxx wxy wxz wyq wyr wys wyt wyu wyv wyw wyx wyy wyz wzq wzr wzs wzt wzu wzv wzw wzx wzy wzz xqq xqr xqs xqt xqu xqv xqw xqx xqy xqz xrq xrr xrs xrt xru xrv xrw xrx xry xrz xsq xsr xss xst xsu xsv xsw xsx xsy xsz xtq xtr xts xtt xtu xtv xtw xtx xty xtz xuq xur xus xut xuu xuv xuw xux xuy xuz xvq xvr xvs xvt xvu xvv xvw xvx xvy xvz xwq xwr xws xwt xwu xwv xww xwx xwy xwz xxq xxr xxs xxt xxu xxv xxw xxx xxy xxz xyq xyr xys xyt xyu xyv xyw xyx xyy xyz xzq xzr xzs xzt xzu xzv xzw xzx xzy xzz yqq yqr yqs yqt yqu yqv yqw yqx yqy yqz yrq yrr yrs yrt yru yrv yrw yrx yry yrz ysq ysr yss yst ysu ysv ysw ysx ysy ysz ytq ytr yts ytt ytu ytv ytw ytx yty ytz yuq yur yus yut yuu yuv yuw yux yuy yuz yvq yvr yvs yvt yvu yvv yvw yvx yvy yvz ywq ywr yws ywt ywu ywv yww ywx ywy ywz yxq yxr yxs yxt yxu yxv yxw yxx yxy yxz yyq yyr yys yyt yyu yyv yyw yyx yyy yyz yzq yzr yzs yzt yzu yzv yzw yzx yzy yzz zqq zqr zqs zqt zqu zqv zqw zqx zqy zqz zrq zrr zrs zrt zru zrv zrw zrx zry zrz zsq zsr zss zst zsu zsv zsw zsx zsy zsz ztq ztr zts ztt ztu ztv ztw ztx zty ztz zuq zur zus zut zuu zuv zuw zux zuy zuz zvq zvr zvs zvt zvu zvv zvw zvx zvy zvz zwq zwr zws zwt zwu zwv zww zwx zwy zwz zxq zxr zxs zxt zxu zxv zxw zxx zxy zxz zyq zyr zys zyt zyu zyv zyw zyx zyy zyz zzq zzr zzs zzt zzu zzv zzw zzx zzy zzz 1000
[/output]
[/test]
[test]
[input]
letterCombinations('l', 'p', 'g')
[/input]
[output]
lll llm lln llo llp lml lmm lmn lmo lmp lnl lnm lnn lno lnp lol lom lon loo lop lpl lpm lpn lpo lpp mll mlm mln mlo mlp mml mmm mmn mmo mmp mnl mnm mnn mno mnp mol mom mon moo mop mpl mpm mpn mpo mpp nll nlm nln nlo nlp nml nmm nmn nmo nmp nnl nnm nnn nno nnp nol nom non noo nop npl npm npn npo npp oll olm oln olo olp oml omm omn omo omp onl onm onn ono onp ool oom oon ooo oop opl opm opn opo opp pll plm pln plo plp pml pmm pmn pmo pmp pnl pnm pnn pno pnp pol pom pon poo pop ppl ppm ppn ppo ppp 125
[/output]
[/test]
[test]
[input]
letterCombinations('a', 'd', 'j')
[/input]
[output]
aaa aab aac aad aba abb abc abd aca acb acc acd ada adb adc add baa bab bac bad bba bbb bbc bbd bca bcb bcc bcd bda bdb bdc bdd caa cab cac cad cba cbb cbc cbd cca ccb ccc ccd cda cdb cdc cdd daa dab dac dad dba dbb dbc dbd dca dcb dcc dcd dda ddb ddc ddd 64
[/output]
[/test]
[test]
[input]
letterCombinations('b', 'i', 'l')
[/input]
[output]
bbb bbc bbd bbe bbf bbg bbh bbi bcb bcc bcd bce bcf bcg bch bci bdb bdc bdd bde bdf bdg bdh bdi beb bec bed bee bef beg beh bei bfb bfc bfd bfe bff bfg bfh bfi bgb bgc bgd bge bgf bgg bgh bgi bhb bhc bhd bhe bhf bhg bhh bhi bib bic bid bie bif big bih bii cbb cbc cbd cbe cbf cbg cbh cbi ccb ccc ccd cce ccf ccg cch cci cdb cdc cdd cde cdf cdg cdh cdi ceb cec ced cee cef ceg ceh cei cfb cfc cfd cfe cff cfg cfh cfi cgb cgc cgd cge cgf cgg cgh cgi chb chc chd che chf chg chh chi cib cic cid cie cif cig cih cii dbb dbc dbd dbe dbf dbg dbh dbi dcb dcc dcd dce dcf dcg dch dci ddb ddc ddd dde ddf ddg ddh ddi deb dec ded dee def deg deh dei dfb dfc dfd dfe dff dfg dfh dfi dgb dgc dgd dge dgf dgg dgh dgi dhb dhc dhd dhe dhf dhg dhh dhi dib dic did die dif dig dih dii ebb ebc ebd ebe ebf ebg ebh ebi ecb ecc ecd ece ecf ecg ech eci edb edc edd ede edf edg edh edi eeb eec eed eee eef eeg eeh eei efb efc efd efe eff efg efh efi egb egc egd ege egf egg egh egi ehb ehc ehd ehe ehf ehg ehh ehi eib eic eid eie eif eig eih eii fbb fbc fbd fbe fbf fbg fbh fbi fcb fcc fcd fce fcf fcg fch fci fdb fdc fdd fde fdf fdg fdh fdi feb fec fed fee fef feg feh fei ffb ffc ffd ffe fff ffg ffh ffi fgb fgc fgd fge fgf fgg fgh fgi fhb fhc fhd fhe fhf fhg fhh fhi fib fic fid fie fif fig fih fii gbb gbc gbd gbe gbf gbg gbh gbi gcb gcc gcd gce gcf gcg gch gci gdb gdc gdd gde gdf gdg gdh gdi geb gec ged gee gef geg geh gei gfb gfc gfd gfe gff gfg gfh gfi ggb ggc ggd gge ggf ggg ggh ggi ghb ghc ghd ghe ghf ghg ghh ghi gib gic gid gie gif gig gih gii hbb hbc hbd hbe hbf hbg hbh hbi hcb hcc hcd hce hcf hcg hch hci hdb hdc hdd hde hdf hdg hdh hdi heb hec hed hee hef heg heh hei hfb hfc hfd hfe hff hfg hfh hfi hgb hgc hgd hge hgf hgg hgh hgi hhb hhc hhd hhe hhf hhg hhh hhi hib hic hid hie hif hig hih hii ibb ibc ibd ibe ibf ibg ibh ibi icb icc icd ice icf icg ich ici idb idc idd ide idf idg idh idi ieb iec ied iee ief ieg ieh iei ifb ifc ifd ife iff ifg ifh ifi igb igc igd ige igf igg igh igi ihb ihc ihd ihe ihf ihg ihh ihi iib iic iid iie iif iig iih iii 512
[/output]
[/test]
[test]
[input]
letterCombinations('b', 'e', 'k')
[/input]
[output]
bbb bbc bbd bbe bcb bcc bcd bce bdb bdc bdd bde beb bec bed bee cbb cbc cbd cbe ccb ccc ccd cce cdb cdc cdd cde ceb cec ced cee dbb dbc dbd dbe dcb dcc dcd dce ddb ddc ddd dde deb dec ded dee ebb ebc ebd ebe ecb ecc ecd ece edb edc edd ede eeb eec eed eee 64
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Happy Numbers
[code-task title="Happy Numbers" taskId="pb-js-nested-loops-Happy-numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function happyNumbers(input) {
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
Creați un program care generează toate **numerele de 4 cifre** cu cifre mai mici decât un număr n dat: 

- Veți primi un număr **n** ca intrare

- Imprimați combinațiile care îndeplinesc următoarele cerințe:
   - când împărțiți numărul în două perechi și adunați prima cifră la a doua din fiecare pereche - rezultatul este egal cu **n**
   - când adunați primele două, rezultatul trebuie să fie divizibil cu **n** fără rest

# Exemplu
| **Intrare** | **Ieșire** |
| --- | --- |
| happyNumbers(3) | 1212 1221 2112 2121 |
| happyNumbers(2) | 1111 |

[/task-description]
[tests]
[test open]
[input]
happyNumbers(3)
[/input]
[output]
1212 1221 2112 2121
[/output]
[/test]
[test]
[input]
happyNumbers(6)
[/input]
[output]
1111 1212 1221 1515 1524 1533 1542 1551 2112 2121 2415 2424 2433 2442 2451 3315 3324 3333 3342 3351 4215 4224 4233 4242 4251 5115 5124 5133 5142 5151
[/output]
[/test]
[test open]
[input]
happyNumbers(2)
[/input]
[output]
1111
[/output]
[/test]
[test]
[input]
happyNumbers(4)
[/input]
[output]
1111 1313 1322 1331 2213 2222 2231 3113 3122 3131
[/output]
[/test]
[test]
[input]
happyNumbers(5)
[/input]
[output]
1414 1423 1432 1441 2314 2323 2332 2341 3214 3223 3232 3241 4114 4123 4132 4141
[/output]
[/test]
[test]
[input]
happyNumbers(6)
[/input]
[output]
1111 1212 1221 1515 1524 1533 1542 1551 2112 2121 2415 2424 2433 2442 2451 3315 3324 3333 3342 3351 4215 4224 4233 4242 4251 5115 5124 5133 5142 5151
[/output]
[/test]
[test]
[input]
happyNumbers(7)
[/input]
[output]
1616 1625 1634 1643 1652 1661 2516 2525 2534 2543 2552 2561 3416 3425 3434 3443 3452 3461 4316 4325 4334 4343 4352 4361 5216 5225 5234 5243 5252 5261 6116 6125 6134 6143 6152 6161
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]

[/slide]
