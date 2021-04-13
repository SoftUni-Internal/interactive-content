# Problema 2: Fancy Barcodes

[slide hideTitle]

# Fancy Barcodes
[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/05.JS-Fundamentals-Exam-Prep/RO/Exam 3-1-barcodes-Video-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Fancy Barcodes" taskId="js-fundamentals-2-examPreparation-problem-2" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function fancyBarcodes(n, barcodes) {
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
Sarcina dvs. este de a determina dacă secvența dată de caractere este sau nu un cod de bare valid.

Nicio linie nu trebuie să conțină altceva decât un cod de bare valid.

Un cod de bare este valid atunci când:

* Începe și se termină cu un semn "**@**" urmat de unul sau mai multe semne "\#"

* Are cel puțin **6 caractere** (fără "**@**" sau "\#" din jur)

* Începe cu o literă mare

* Conține **numai litere** (majuscule și minuscule) și cifre

* Se încheie cu o **literă mare**

**Exemple de coduri de bare valide:** "\@\#FreshFisH\@\#", "\@\#\#\#Brea0D\@\#\#\#", "\@\#\#Che46sE\@\#\#"

**Exemple de coduri de bare nevalide**: "\#\#InvaliDiteM\#\#", "\@InvalidIteM\@", "\@\#Invalid_IteM\@\#"

Mai departe, va trebui să determinați **"grupa de produse"** a articolului din codul de bare. Acest lucru se face concatenând toate cifrele din codul de bare.

Dacă nu există cifre în codul de bare, grupul de produse implicit este "**00**".

**Exemple:** 

"\@\#FreshFisH\@\#" \-\> product group: 00

"\@\#\#\#Brea0D\@\#\#\#" \-\> product group: 0

"\@\#\#Che4s6E\@\#\#" \-\> product group: 46

## Intrare

* Pe prima linie vi se va da un număr întreg "**n**" - reprezentând numărul de coduri de bare pe care le veți primi în continuare

* Pe următoarele n linii, veți primi șiruri diferite

## Ieșire

Pentru fiecare cod de bare pe care îl procesați, trebuie să imprimați un mesaj.

* Dacă codul de bare este nevalid: "**Invalid barcode**"

* Dacă codul de bare este valid: "**Product group:** \{**product group**\}"

## Exemplul Unu

|**Intrare**|**Ieșire**|
|---|---|
|fancyBarcodes(3, ['\@\#FreshFisH\@\#', '\@\#\#\#Brea0D\@\#\#\#', '\@\#\#Che4s6E\@\#\#'])|Product group\: 00|
||Product group\: 0|
||Product group\: 46|


## Exemplul Doi

|**Intrare**|**Ieșire**|
|---|---|
|fancyBarcodes(6, ['\@\#\#\#Val1d1teM\@\#\#\#', '\@\#InvalidIteM\@\#', '\#\#InvaliDiteM\#\#', '\@InvalidIteM\@', '\@\#Invalid_IteM\@\#', '\@\#ValiditeM\@\#'])|Product group\: 11|
||Product group\: 00|
||Invalid barcode|
||Invalid barcode|
||Invalid barcode|
||Product group\: 00|

[/task-description]
[code-io /]
[tests]
[test open]
[input]
fancyBarcodes(3, ['@\#FreshFisH@\#', '@\#\#\#Brea0D@\#\#\#', '@\#\#Che46sE@\#\#'])
[/input]
[output]
Product group: 00
Product group: 0
Product group: 46
[/output]
[/test]
[test open]
[input]
fancyBarcodes(6, ['@\#\#\#Val1d1teM@\#\#\#', '@\#InvalidIteM@\#', '\#\#InvaliDiteM\#\#', '@InvalidIteM@', '@\#Invalid_IteM@\#', '@\#ValiditeM@\#'])
[/input]
[output]
Product group: 11
Product group: 00
Invalid barcode
Invalid barcode
Invalid barcode
Product group: 00
[/output]
[/test]
[test]
[input]
fancyBarcodes(1, \['@\#invalid@\#\'\])
[/input]
[output]
Invalid barcode
[/output]
[/test]
[test]
[input]
fancyBarcodes(1, \['@\#\#Invalid@\#\#'\])
[/input]
[output]
Invalid barcode
[/output]
[/test]
[test]
[input]
fancyBarcodes(1, \['@\#invalidBarcodE@\#'\])
[/input]
[output]
Invalid barcode
[/output]
[/test]
[test]
[input]
fancyBarcodes(1, \['@\#ValiD@\#'\])
[/input]
[output]
Invalid barcode
[/output]
[/test]
[test]
[input]
fancyBarcodes(1, \['@\#\#Xa013mlX@\#\#'\])
[/input]
[output]
Product group: 013
[/output]
[/test]
[test]
[input]
fancyBarcodes(3, ['@\#CucumberS@\#', '@\#\#CarrotS@\#\#', '@\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#PotatoeS@\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#'])
[/input]
[output]
Product group: 00
Product group: 00
Product group: 00
[/output]
[/test]
[test]
[input]
fancyBarcodes(3, ['@\#P1n3Appl3S@\#', '@\#\#\#X1x2x3x4x5x6x7x8x9x0X@\#\#\#', '@\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#Zzzz987zzz65zzz43zzz210zzZ@\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#'])
[/input]
[output]
Product group: 133
Product group: 1234567890
Product group: 9876543210
[/output]
[/test]
[test]
[input]
fancyBarcodes(1, \['@\#Test4et0O@\#'\])
[/input]
[output]
Product group: 40
[/output]
[/test]
[test]
[input]
fancyBarcodes(11, ['@\#\#Aaa1A1aaA@\#\#', '@\#Bbbbbb@\#', '@\#Ccccc_ccccC@\#', '@\#\#\#D2d3d4D@\#\#\#', '@\#EfgfE@\#', '@\#hhhhhhhH@\#', '@\#IIIIIIIII@\#', '@\#IIII11IIIII@\#', '@\#\#JjjjjJ@\#', '@KkkkkkK@', '@\#\#Lmn83opq19RsTuV@\#\#'])
[/input]
[output]
Product group: 11
Invalid barcode
Invalid barcode
Product group: 234
Invalid barcode
Invalid barcode
Product group: 00
Product group: 11
Product group: 00
Invalid barcode
Product group: 8319
[/output]
[/test]
[test]
[input]
fancyBarcodes(7, ['@\#Th1sIsTh3T0ughestT3sT@\#', '@\#\#\#ItReallyISharD@\#\#\#', '@\#\#ItT3stsTh3Wh0l3Match1nG@\#\#', '@\#I`llThrowSomeInvalidCodeS@\#', '@\#\#\#AndSomeMorE@\#\#', '@\#\#AndFinally@\#\#', '@\#\#Th3R34lM0F0T3sT@\#\#\#'])
[/input]
[output]
Product group: 1303
Product group: 00
Product group: 33031
Invalid barcode
Product group: 00
Invalid barcode
Product group: 334003
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
