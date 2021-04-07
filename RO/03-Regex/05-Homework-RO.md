# Teme Pentru Acasă

[slide hideTitle]

# Problemă: Match Dates

[code-task title="Match Dates" taskId="js-fundamentals-pt2-Regular-Expressions-Match-Dates" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function matchDate(input){
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

Scrieți un program care potrivește o dată în formatul "**dd**\{**separator**\}**MMM**\{**separator**\}**yyyy**".

Compuneți expresia regulată.

Fiecare dată valabilă are următoarele caracteristici:

- Începe întotdeauna cu două cifre, urmate de un separator
- După aceea, are o literă mare și două litere mici (ex. Jan, Mar)
- După aceea, are un separator și exact 4 cifre (pentru an)
- Separatorul poate fi\: un punct "**.**", o cratimă "**-**", sau o bară oblică spre dreapta `/`
- Separatorul trebuie să fie același pentru întreaga dată **(de ex. 13.03.2016 este valabil, 13.03/2016 NU este)**

Folosiți o referință de grup pentru a verifica acest lucru.


## Exemplul Unu

|**Intrare**|**Ieșire** |
| --- | --- |
| matchDate('13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016') | Day\: 13\, Month\: Jul\, Year\: 1928 |
| | Day\: 10\, Month\: Nov\, Year\: 1934 |
| | Day\: 25\, Month\: Dec\, Year\: 1937 |

## Exemplul Doi
|**Intrare**|**Ieșire** |
| --- | --- |
| matchDate('28-Mar-2000') | Day\: 28\, Month\: Mar\, Year\: 2000 |

[/task-description]
[tests]
[test open]
[input]
matchDate('13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016')
[/input]
[output]
 Day\: 13\, Month\: Jul\, Year\: 1928
Day\: 10\, Month\: Nov\, Year\: 1934
Day\: 25\, Month\: Dec\, Year\: 1937
[/output]
[/test]
[test open]
[input]
matchDate('28-Mar-2000')
[/input]
[output]
Day\: 28\, Month\: Mar\, Year\: 2000
[/output]
[/test]
[test]
[input]
matchDate(['13\/Jul\/1928\, 10\-Nov\-1934\, 01\/Jan\-1951\, 25\.Dec\.1937\, 23\/09\/1973\, 1\/Feb\/2016'])
[/input]
[output]
Day\: 13\, Month\: Jul\, Year\: 1928
Day\: 10\, Month\: Nov\, Year\: 1934
Day\: 25\, Month\: Dec\, Year\: 1937
[/output]
[/test]
[test]
[input]
matchDate(['01\/Jan\-1951, 29\/Feb\/2024, 1\/Jan\-1951, 27\-Feb\-2007, 1\/Jan\-1951, 1\/Mar\/2016, 23\/october\/197'])
[/input]
[output]
Day\: 29\, Month\: Feb\, Year\: 2024
Day\: 27\, Month\: Feb\, Year\: 2007
[/output]
[/test]
[test]
[input]
matchDate(['24\.Apr\.2003, 1\/Jan\-1951, 12\/Jan\/2024, 1\/Jan\-1951, 22\.Jan\.2014, 1\/Jan\-1951, 24\-Sep\-2014, 18\-Jan\-2012, 23\/october\/197'])
[/input]
[output]
Day\: 24\, Month\: Apr\, Year\: 2003
Day\: 12\, Month\: Jan\, Year\: 2024
Day\: 22\, Month\: Jan\, Year\: 2014
Day\: 24\, Month\: Sep\, Year\: 2014
Day\: 18\, Month\: Jan\, Year\: 2012
[/output]
[/test]
[test]
[input]
matchDate(['1\/Jan\-1951, 23\/october\/197, 11\-Dec\-2010, 18\.Jan\.2014'])
[/input]
[output]
Day\: 11\, Month\: Dec\, Year\: 2010
Day\: 18\, Month\: Jan\, Year\: 2014
[/output]
[/test]
[test]
[input]
matchDate(['04\-Jan\-2014, 1\/Jan\-1951, 23\/october\/197, 23\/october\/197, 23\/Nov\/2023, 1\/Jan\-1951, 27\-Feb\-2012, 08\-Mar\-2000, 1\/Jan\-1951'])
[/input]
[output]
Day\: 04\, Month\: Jan\, Year\: 2014
Day\: 23\, Month\: Nov\, Year\: 2023
Day\: 27\, Month\: Feb\, Year\: 2012
Day\: 08\, Month\: Mar\, Year\: 2000
[/output]
[/test]
[test]
[input]
matchDate(['22\.Nov\.2011, 09\.May\.2013, 1\/Jan\-1951, 29\/Sep\/2011, 24\-Jul\-2012, 06\.Oct\.2013'])
[/input]
[output]
Day\: 22\, Month\: Nov\, Year\: 2011
Day\: 09\, Month\: May\, Year\: 2013
Day\: 29\, Month\: Sep\, Year\: 2011
Day\: 24\, Month\: Jul\, Year\: 2012
Day\: 06\, Month\: Oct\, Year\: 2013
[/output]
[/test]
[test]
[input]
matchDate(['02\/Apr\/2002, 1\/Jan\-1951, 21\-Feb\-2019'])
[/input]
[output]
Day\: 02\, Month\: Apr\, Year\: 2002
Day\: 21\, Month\: Feb\, Year\: 2019
[/output]
[/test]
[test]
[input]
matchDate(['1\/Jan\-1951, 06\-Jan\-2014, 1\/Jan\-1951, 30\/Jun\/2004, 21\.Nov\.2000, 15\/Nov\/2018, 11\.Mar\.2017, 1\/Jan\-1951'])
[/input]
[output]
Day\: 06\, Month\: Jan\, Year\: 2014
Day\: 30\, Month\: Jun\, Year\: 2004
Day\: 21\, Month\: Nov\, Year\: 2000
Day\: 15\, Month\: Nov\, Year\: 2018
Day\: 11\, Month\: Mar\, Year\: 2017
[/output]
[/test]
[test]
[input]
matchDate(['11\/Aug\/2005, 18\/Oct\/2021, 1\/Jan\-1951, 30\.Oct\.2004, 25\/Aug\/2002, 13\-Aug\-2016'])
[/input]
[output]
Day\: 11\, Month\: Aug\, Year\: 2005
Day\: 18\, Month\: Oct\, Year\: 2021
Day\: 30\, Month\: Oct\, Year\: 2004
Day\: 25\, Month\: Aug\, Year\: 2002
Day\: 13\, Month\: Aug\, Year\: 2016
[/output]
[/test]
[test]
[input]
matchDate(['1\/Jan\-1951, 06\-Jun\-2021, 21\/Aug\/2003, 07\/May\/2008'])
[/input]
[output]
Day\: 06\, Month\: Jun\, Year\: 2021
Day\: 21\, Month\: Aug\, Year\: 2003
Day\: 07\, Month\: May\, Year\: 2008
[/output]
[/test]
[test]
[input]
matchDate(['1\/Jan\-1951, 02\.Sep\.2014, 13\/Aug\/2024, 01\.Sep\.2001, 02\.Sep\.2022, 07\/Feb\/2008'])
[/input]
[output]
Day\: 02\, Month\: Sep\, Year\: 2014
Day\: 13\, Month\: Aug\, Year\: 2024
Day\: 01\, Month\: Sep\, Year\: 2001
Day\: 02\, Month\: Sep\, Year\: 2022
Day\: 07\, Month\: Feb\, Year\: 2008
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]

# Problemă: Furniture

[code-task title="Furniture" taskId="js-fundamentals-pt2-Regular-Expressions-Furniture" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function furniture(input) {
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

Scrieți o funcție pentru a calcula costul total al diferitelor tipuri de mobilier.

Vi se vor da câteva linii de intrare până când veți primi linia "**Purchase**". 

Linia este valabilă atunci când este în următorul format:

"\>\>\{**furniture name**\}\<\<\{**price**\}\!\{**quantity**\}"

Prețul poate fi un număr în virgulă mobilă sau un număr întreg.

Stocați numele mobilierului și prețul total.

La final, tipăriți fiecare mobilier cumpărat pe o linie separată în format:

"**Bought furniture:**
\{**1st name**\}
\{**2nd name**\}
…
"

Pe ultima linie tipăriți următoarele:

"**Total money spent:** \{**spent money**\}", formatând rezultatul la a doua zecimală.

## Exemplul Unu

|**Intrare**|**Ieșire** |
| --- | --- |
| furniture(['\>\>Sofa\<\<312.23!3', '\>\>TV\<\<300!5', '\>Invalid\<\<!5', 'Purchase']) | Bought furniture\: |
| | Sofa |
| | TV |
| | Total money spent\: 2436\.69 |

## Exemplul Doi

|**Intrare**|**Ieșire** |
| --- | --- |
| furniture(['\>\>Chair\<\<34.44!1', '\>\>Table\<44.44!2', 'Purchase']) | Bought furniture\: |
| | Chair |
| | Total money spent\: 34\.44 |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
furniture(['\>\>Sofa\<\<312.23!3', '\>\>TV\<\<300!5', '\>Invalid\<\<!5', 'Purchase'])
[/input]
[output]
Bought furniture:
Sofa
TV
Total money spend: 2436.69
[/output]
[/test]
[test open]
[input]
furniture(['\>\>Chair\<\<34.44\!1', '\>\>Table\<44.44!2', 'Purchase'])
[/input]
[output]
Bought furniture:
Chair
Total money spent\: 34\.44
[/output]
[/test]
[test]
[input]
furniture(['\>\>Televizor\<\<312.23!3', '\>\>Monitor\<\<300!5', '\>\>Invalid\<\<\<\<!5', '\>\>Sink\<\<220!10', '\>\>\>\>\>\>Invalid\<\<!5', 'Purchase'])
[/input]
[output]
Bought furniture:
Televizor
Monitor
Sink
Total money spend: 4636.69
[/output]
[/test]
[test]
[input]
furniture(['\>Invalid\<\<!5', '\>Invalid\<\<!5', '\>Invalid\<\<!5', 'Purchase'])
[/input]
[output]
Bought furniture:
Total money spend: 0.00
[/output]
[/test]
[test]
[input]
furniture(['\>\>Sofa\<\<316.12!10', '\>\>Couch\<\<31!12', '\>\>Table\<\<31!12', '\>Masichka\<\<5', 'Purchase'])
[/input]
[output]
Bought furniture:
Sofa
Couch
Table
Total money spend: 3905.20
[/output]
[/test]
[test]
[input]
furniture(['\>\>Sofa\<\<312.23!3.66', '\>\>Sofa\<\<312.23!3.66', '\>\>Sofa\<\<312.23!3.66', '\>\>Sofa\<\<312.23!3.66', '\>\>Sofa\<\<312.23!3.66', 'Purchase'])
[/input]
[output]
Bought furniture:
Sofa
Sofa
Sofa
Sofa
Sofa
Total money spend: 4683.45
[/output]
[/test]
[test]
[input]
furniture(['\>\>Laptop\<\<312.2323!3', '\>\>TV\<\<300.21314!5', '\>Invalid\<\<!5', '\>\>TV\<\<300.21314!20', '\>\>Invalid\<!5', '\>\>TV\<\<30.21314!5', '\>\>Invalid\<\<!!5', 'Purchase'])
[/input]
[output]
Bought furniture:
Laptop
TV
TV
TV
Total money spend: 8593.09
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]

# Problemă: Race

[code-task title="Race"  taskId="js-fundamentals-pt2-Regular-Expressions-Race" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function race(input) {
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

Scrieți o funcție care procesează informații despre o competiție.

Pe prima linie, vi se va oferi o listă de participanți, separați prin **", "**.

Pe următoarele câteva rânduri, până când primiți o comandă **end of race**, vi se vor oferi câteva informații, care vor fi câteva caractere alfanumerice.

Între ele, puteți avea câteva caractere suplimentare, pe care trebuie să le ignorați.

De exemplu: "**G!32e%o7r#32g$235@!2e**". 

Literele sunt numele persoanei, iar suma cifrelor este distanța pe care a parcurs-o.

Deci, aici îl avem pe "George" care a alergat "29" km.

Stocați informațiile despre persoană numai dacă lista de curse conține numele persoanei respective.

Dacă primiți aceeași persoană de mai multe ori, adăugați distanța la cea veche.

La final, tipăriți primii 3 participanți, ordonați după distanța lor în ordine **descrescătoare** în format:

"**1st place:** \{**first racer**\}
**2nd place:** \{**second racer**\}
**3rd place:** \{**third racer**\}"


## Exemplu

|**Intrare**|**Ieșire** |
|---|---|
| race(['George, Peter, Bill, Tom', 'G4e@55or%6g6!68e!!@', 'R1@!3a$y4456@', 'B5@i@#123ll', 'G@e54o$r6ge#', '7P%et^#e5346r', 'T$o553m&6', 'end of race']) | 1st place\: George |
| | 2nd place\: Peter |
| | 3rd place\: Tom |

[/task-description]
[tests]
[test open]
[input]
race(['George\, Peter\, Bill\, Tom', 'G4e\@55or\%6g6\!68e\!\!\@', 'R1\@\!3a\$y4456\@', 'B5\@i\@\#123ll', 'G\@e54o\$r6ge\#', '7P\%et\^\#e5346r', 'T\$o553m\&6', 'end of race'])
[/input]
[output]
1st place\: George
2nd place\: Peter
3rd place\: Tom
[/output]
[/test]
[test]
[input]
race(['Gregory\, Tom\, Jerry\, Christian\, Bill', 'G4r\*\&\^\$\#ego\%4\^\&4\*ry', 'T\*&\^\%57\)\&\%\$o\^\*m6', 'J\&\*\*67e\%\&\)\)rr\&12\*3y', 'J\&\*\*22e\%\&\)\)rr\&44\*8y', 'Ch\&\*\&\*\^ri1s3t5ian', 'L\&\*\&\%666amar', 'end of race'])
[/input]
[output]
1st place\: Jerry
2nd place\: Tom
3rd place\: Gregory
[/output]
[/test]
[test]
[input]
race(['Ronald\, Bill\, Tom\, Timmy\, Maggie\, Michonne', 'Mi\*\&\^\%\$ch123o\!\#\$\%\#nne787)', '\%\$\$B\(\*\&\&\)i89ll\)\*\&\)', 'R\*\*\(on\%\^\&ald992\)', 'T\(\*\^\^\%immy77\)', 'Ma10\*\*\$\#g0g0g0i0e', 'end of race'])
[/input]
[output]
1st place\: Michonne
2nd place\: Ronald
3rd place\: Bill
[/output]
[/test]
[test]
[input]
race(['Rick\, Negan\, Lucille\, Peter\, Stamat\, George', 'R\*\*\*\*i22c00k199\!\!\!', 'N\*\*\*\&\^E989GA\(\*\&\^\&\^\&N323a\)\)\)', '\*\^\%\%Pe87876t\&\&\^er87\#\$\&\(\%\)', 'L\&\^\%u9754cille\*\&\^\&\%\^234', 'end of race'])
[/input]
[output]
1st place\: Peter
2nd place\: Lucille
3rd place\: Rick
[/output]
[/test]
[test]
[input]
race(['Rick\, Negan\, Lucille\, Peter\, Stamat\, George', 'R\*\*\*\*i22c00k199\!\!\!', 'N\*\*\*\&\^e989ga\(\*\&\^\&\^\&n323\)\)\)', '\*\^\%\%\Pe87876t\&\&\^er87\#\$\&\(\%\)', 'L\&\^\%u9754cille\*\&\^\&\%\^234', 'R\*\*\%\^\&\%i11c104k123\!\^\&\!\!', 'R\&\&\%\^\&\%ic10\^\$\@k123\!\^\&\!\!', '\*\^\%Peter8675', '\*\^\%Geo\$12\#\%112r\^\$ge23\!\(\@\^\)', '\!\!22\!P23\!e\!t\!e\!r\!85', 'end of race'])
[/input]
[output]
1st place\: Peter
2nd place\: Rick
3rd place\: Negan
[/output]
[/test]
[test]
[input]
race(['Joro\, George\, Georgi\, Stamat', '\^\&\^\%\^232St\#\$ama\&\&\^\^t', '\^\&\^\%\^232St\#\$ama\&\&\^\^t', 'G7667eorge\&\^\^\&\^', '\&\^\&\&\&J99999oro\&\^\^57', 'end of race'])
[/input]
[output]
1st place\: Joro
2nd place\: George
3rd place\: Stamat
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]

# Problemă: Bar Income

[code-task title="Bar Income" taskId="js-fundamentals-pt2-Regular-Expressions-Bar-Income" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function income(input) {
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

Să luăm o pauză și să vizităm barul de jocuri de la SoftUni.

Este timpul ca oamenii din spatele barului să plece acasă. Sunteți persoana care trebuie să calculeze banii câștigați din produsele care au fost vândute pe tot parcursul zilei.

Până când primiți o linie cu un text "**end of shift**", vi se vor da linii de intrare.

Înainte de a prelucra aceste linii, trebuie să faceți mai întâi câteva validări.

Fiecare comandă validă trebuie să aibă un client, un produs, un număr și un preț:

- Numele clientului valid ar trebui să fie încadrat de "**%**" și trebuie să înceapă cu o literă mare, urmată de litere mici

- Produsul valid conține orice caracter de cuvânt și trebuie să fie încadrat de "**<**" și "**>**"

- Numărul valid este un număr întreg, încadrat de "\|"

- Prețul valabil este orice număr real urmat de "**$**"

Părțile unei comenzi valide trebuie să apară în comanda dată: un client, un produs, un număr și un preț.

Între fiecare parte pot exista și alte simboluri, cu excepția (\|, \$, \% \.).

Pentru fiecare linie validă tipărită pe consolă: \{**customerName**\}**:** \{**product**\} **-** \{**totalPrice**\}.

Când primiți "**end of shift**" imprimați suma totală de bani pentru zi, rotunjită la 2 zecimale în următorul format:

"**Total income:** \{**income**\}"

## Exemplul Unu

|**Intrare**|**Ieșire** |
| --- | --- |
| income(['\%George\%\<Croissant\>\|2\|10.3\$', '\%Peter\%\<Gum\>\|1\|1.3\$', '\%Maria\%\<Cola\>\|1\|2.4\$', 'end of shift']) | George\: Croissant \- 20\.60 |
| | Peter\: Gum \- 1\.30 |
| | Maria\: Cola \- 2\.40 |
| | Total income\: 24\.30 |

## Exemplul Doi

|**Intrare**|**Ieșire** |
| --- | --- |
| income(['\%InvalidName\%\<Croissant\>\|2\|10.3\$', '\%Peter\%\<Gum\>1.3\$', '\%Maria\%\<Cola\>\|1\|2.4', '\%Valid\%\<Valid\>valid\|10\|valid20\$', 'end of shift']) | Valid\: Valid \- 200\.00 |
| | Total income\: 200\.00 |

[/task-description]
[tests]
[test open]
[input]
income(['\%George\%\<Croissant\>\|2\|10\.3\$', '\%Peter\%\<Gum\>\|1\|1\.3\$', '\%Maria\%\<Cola\>\|1\|2\.4\$', 'end of shift'])
[/input]
[output]
George\: Croissant \- 20\.60
Peter\: Gum \- 1\.30
Maria\: Cola \- 2\.40
Total income\: 24\.30
[/output]
[/test]
[test open]
[input]
income(['\%InvalidName\%\<Croissant\>\|2\|10\.3\$', '\%Peter\%\<Gum\>1\.3\$', '\%Maria\%\<Cola\>\|1\|2\.4', '\%Valid\%\<Valid\>valid\|10\|valid20\$', 'end of shift'])
[/input]
[output]
Valid\: Valid \- 200\.00
Total income\: 200\.00
[/output]
[/test]
[test]
[input]
income(['\%Name\%\<Product\>\|1\|20\.50\$', 'end of shift'])
[/input]
[output]
Name\: Product \- 20\.50
Total income\: 20\.50
[/output]
[/test]
[test]
[input]
income(['\%Name\%\<Product2\>\|1\|20\.50\$', 'end of shift'])
[/input]
[output]
Name\: Product2 \- 20\.50
Total income\: 20\.50
[/output]
[/test]
[test]
[input]
income(['\%Name\%valid\<Product3\>valid\|1\|20\.80\$', 'end of shift'])
[/input]
[output]
Name\: Product3 \- 20\.80
Total income\: 20\.80
[/output]
[/test]
[test]
[input]
income(['\%Name\%\<Product\>\|2\|20\.50\$', 'end of shift'])
[/input]
[output]
Name\: Product \- 41\.00
Total income\: 41\.00
[/output]
[/test]
[test]
[input]
income(['\%Name\%\<Product\>\|1\|20\.50\$', '\%Name\%\<Product\>\|1\|9\.50\$', 'end of shift'])
[/input]
[output]
Name\: Product \- 20\.50
Name\: Product \- 9\.50
Total income\: 30\.00
[/output]
[/test]
[test]
[input]
income(['\%Name\%\<Product\>\|2\|10\.3\$', '\%Name\%\<Pro\_duct\>\|2\|10\.3\$', 'end of shift'])
[/input]
[output]
Name\: Product \- 20\.60
Name\: Pro\_duct \- 20\.60
Total income\: 41\.20
[/output]
[/test]
[test]
[input]
income(['\%Name\%\<Product\>\|2\|10\$', 'end of shift'])
[/input]
[output]
Name\: Product \- 20\.00
Total income\: 20\.00
[/output]
[/test]
[test]
[input]
income(['\%Name\%\<Product\>\|1\|30\.10\$', '\%Name\%\<Product\>\|1\.0\|10\.10\$', '\%Name\%\<Product\>\|1\|10\.10', '\%Name\%Product\|1\|10\.10\$', 'end of shift'])
[/input]
[output]
Name\: Product \- 30\.10
Total income\: 30\.10
[/output]
[/test]
[test]
[input]
income(['\%Name\%ho\<Product\>eins\|1\|10\$', '\%Name\%he\<Product\>zwei\|2\|10\$', '\%Name\%hi\<Product\>drei\|3\|10\$', 'end of shift'])
[/input]
[output]
Name\: Product \- 10\.00
Name\: Product \- 20\.00
Name\: Product \- 30\.00
Total income\: 60\.00
[/output]
[/test]
[test]
[input]
income(['\%Name\%sorry for this test\<\>\<\>\<\>\<\>\<Product\>\<\>\<\>\|2\|10\$', 'end of shift'])
[/input]
[output]
Name\: Product \- 20\.00
Total income\: 20\.00
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
