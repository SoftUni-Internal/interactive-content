# Problema 3: P!rates

[slide hideTitle]
# P!rates
[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/05.JS-Fundamentals-Exam-Prep/RO/Exam 3-3-pirates-Video-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


[code-task title="P!rates" taskId="js-fundamentals-2-examPreparation-problem-3" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function pirates(input) {
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
Până când comanda "**Sail**" este dată, veți primi:

* Orașele pe care voi și echipajul vostru le-ai țintit, populația și aurul fiecărui oraș, separate prin "\|\|" (bare verticale)

* Dacă primiți un oraș care a fost deja **țintit**, trebuie să creșteți populația și aurul cu valorile date.

După comanda "**Sail**", veți începe să primiți linii de text care reprezintă evenimente, până când este dată comanda "**End**".

Evenimentele vor avea următorul format:

* Comandă: "**Plunder**\=\>\{**town**\}\=\>\{**people**\}\=\>\{**gold**\}"

Aceasta înseamnă că echipajul a atacat și jefuit cu succes orașul, eliminând numărul dat de oameni și furând cantitatea respectivă de aur.

Imprimați acest mesaj pentru fiecare oraș pe care îl atacați: "\{**town**\} **plundered!** \{**gold**\} **gold stolen,** \{**people**\} **citizens killed.**"

Dacă oricare dintre aceste două valori (populație sau aur) ajunge la zero, orașul este distrus. Trebuie să îl eliminați din colecția dvs. de orașe țintite și să imprimați următorul mesaj: "\{**town**\} **has been wiped off the map!**".

Nu va exista niciun caz care să depășească numărul de persoane sau cantitatea de aur care a fost deja specificată pentru fiecare oraș.

* Comandă: "**Prosper**\=\>\{**town**\}\=\>\{**gold**\}"

Indică creșterea economică în orașul dat, mărind trezoreria acestuia cu cantitatea specificată de aur.

Cantitatea de aur în acest caz ar putea fi un **număr negativ**, așa că aveți grijă.

Dacă o **cantitate negativă de aur** este dată în comandă, tipăriți:

"**Gold added cannot be a negative number!**"

După ce ați primit comanda End, dacă există așezări existente pe lista dvs. de ținte, trebuie să le tipăriți pe toate, sortate după aurul aflat în posesia lor, în ordine descrescătoare, apoi după numele lor în ordine crescătoare, în următorul format:

"\{**gold added**\} **gold added to the city treasury.** \{**town**\} **now has** \{**total gold**\} **gold.**"

## Ieșire

Dacă cantitatea dată de aur este un număr pozitiv, măriți rezervele de aur ale orașului cu cantitatea dată și tipăriți următorul mesaj:

"**Ahoy, Captain! There are** \{**count**\} **wealthy settlements to go to:**
\{**town1**\} \-\> **Population:** \{**people**\} **citizens, Gold:** \{**gold**\} **kg**

\.\.\.

\{**town…n**\} \-\> **Population:** \{**people**\} **citizens, Gold:** \{**gold**\} **kg**"

Dacă nu mai sunt așezări de jefuit, tipăriți:

"**Ahoy, Captain! All targets have been plundered and destroyed!**"

## Constrângeri

* Populația inițială și aurul așezărilor vor fi numere valide, întregi de 32 de biți, care nu vor fi niciodată negative și nu vor depăși limitele respective

* Numele orașelor date în cadrul evenimentelor vor fi întotdeauna orașe valide care trebuie să fie pe listă

## Exemplul Unu

|**Intrare**|**Ieșire** |
|---|---|
|pirates(['Tortuga\|\|345000\|\|1250', 'Santo Domingo\|\|240000\|\|630', 'Havana\|\|410000\|\|1100', 'Sail', 'Plunder\=\>Tortuga\=\>75000\=\>380', 'Prosper\=\>Santo Domingo\=\>180', 'End'])|Tortuga plundered! 380 gold stolen, 75000 citizens killed.|
||180 gold added to the city treasury. Santo Domingo now has 810 gold.|
||Ahoy, Captain! There are 3 wealthy settlements to go to:|
||Havana \-\> Population: 410000 citizens, Gold: 1100 kg|
||Tortuga \-\> Population: 270000 citizens, Gold: 870 kg|
||Santo Domingo \-\> Population: 240000 citizens, Gold: 810 kg|


## Exemplul Doi

|**Intrare**|**Ieșire** |
|---|---|
|pirates(['Nassau\|\|95000\|\|1000', 'San Juan\|\|930000\|\|1250', 'Campeche\|\|270000\|\|690', 'Port Royal\|\|320000\|\|1000', 'Port Royal\|\|100000\|\|2000', 'Sail', 'Prosper\=\>Port Royal\=\>\-200', 'Plunder\=\>Nassau\=\>94000\=\>750', 'Plunder\=\>Nassau\=\>1000\=\>150', 'Plunder\=\>Campeche\=\>150000\=\>690', 'End'])|Gold added cannot be a negative number\!|
||Nassau plundered\! 750 gold stolen, 94000 citizens killed.|
||Nassau plundered\! 150 gold stolen, 1000 citizens killed.|
||Nassau has been wiped off the map\!|
||Campeche plundered\! 690 gold stolen, 150000 citizens killed.|
||Campeche has been wiped off the map\!|
||Ahoy, Captain\! There are 2 wealthy settlements to go to:|
||Port Royal \-\> Population: 420000 citizens, Gold: 3000 kg|
||San Juan \-\> Population: 930000 citizens, Gold: 1250 kg|


[/task-description]
[code-io /]
[tests]
[test open]
[input]
pirates(['Tortuga\|\|345000\|\|1250', 'Santo Domingo\|\|240000\|\|630', 'Havana\|\|410000\|\|1100', 'Sail', 'Plunder\=\>Tortuga\=\>75000\=\>380', 'Prosper\=\>Santo Domingo\=\>180', 'End'])
[/input]
[output]
Tortuga plundered! 380 gold stolen, 75000 citizens killed.
180 gold added to the city treasury. Santo Domingo now has 810 gold.
Ahoy, Captain\! There are 3 wealthy settlements to go to\:
Havana -\> Population\: 410000 citizens, Gold: 1100 kg
Tortuga -\> Population\: 270000 citizens, Gold: 870 kg
Santo Domingo -\> Population\: 240000 citizens, Gold\: 810 kg
[/output]
[/test]
[test open]
[input]
pirates(['Nassau\|\|95000\|\|1000', 'San Juan\|\|930000\|\|1250', 'Campeche\|\|270000\|\|690', 'Port Royal\|\|320000\|\|1000', 'Port Royal\|\|100000\|\|2000', 'Sail', 'Prosper\=\>Port Royal\=\>\-200', 'Plunder\=\>Nassau\=\>94000\=\>750', 'Plunder\=\>Nassau\=\>1000\=\>150', 'Plunder\=\>Campeche\=\>150000\=\>690', 'End'])
[/input]
[output]
Gold added cannot be a negative number\!
Nassau plundered\! 750 gold stolen, 94000 citizens killed.
Nassau plundered\! 150 gold stolen, 1000 citizens killed.
Nassau has been wiped off the map\!
Campeche plundered\! 690 gold stolen, 150000 citizens killed.
Campeche has been wiped off the map\!
Ahoy, Captain\! There are 2 wealthy settlements to go to\:
Port Royal \-\> Population: 420000 citizens, Gold: 3000 kg
San Juan \-\> Population: 930000 citizens, Gold: 1250 kg
[/output]
[/test]
[test]
[input]
pirates(['Pernik\|\|900000\|\|900', 'Sail', 'End'])
[/input]
[output]
Ahoy, Captain\! There are 1 wealthy settlements to go to\:
Pernik \-\> Population: 900000 citizens, Gold\: 900 kg
[/output]
[/test]
[test]
[input]
pirates(['Pernik\|\|900000\|\|900', 'Pernik\|\|900000\|\|900', 'Sail', 'End'])
[/input]
[output]
Ahoy, Captain\! There are 1 wealthy settlements to go to:
Pernik \-\> Population\: 1800000 citizens, Gold: 1800 kg
[/output]
[/test]
[test]
[input]
pirates(['Pernik\|\|900000\|\|900', 'Sail', 'Prosper\=\>Pernik\=\>500', 'End'])
[/input]
[output]
500 gold added to the city treasury. Pernik now has 1400 gold.
Ahoy, Captain\! There are 1 wealthy settlements to go to\:
Pernik \-\> Population\: 900000 citizens, Gold: 1400 kg
[/output]
[/test]
[test]
[input]
pirates(['Pernik\|\|900000\|\|900', 'Sail', 'Prosper\=\>Pernik\=\>-500', 'End'])
[/input]
[output]
Gold added cannot be a negative number\!
Ahoy, Captain\! There are 1 wealthy settlements to go to\:
Pernik \-\> Population\: 900000 citizens, Gold\: 900 kg
[/output]
[/test]
[test]
[input]
pirates(['Pernik\|\|900000\|\|900', 'Sail', 'Plunder\=\>Pernik\=\>600000\=\>600', 'End'])
[/input]
[output]
Pernik plundered\! 600 gold stolen, 600000 citizens killed.
Ahoy, Captain\! There are 1 wealthy settlements to go to\:
Pernik \-\> Population\: 300000 citizens, Gold: 300 kg
[/output]
[/test]
[test]
[input]
pirates(['Pernik\|\|900000\|\|900', 'Dupnica\|\|60000\|\|60', 'Sail', 'Plunder\=\>Pernik\=\>900000\=\>10', 'End'])
[/input]
[output]
Pernik plundered\! 10 gold stolen, 900000 citizens killed.
Pernik has been wiped off the map\!
Ahoy, Captain\! There are 1 wealthy settlements to go to\:
Dupnica \-\> Population\: 60000 citizens, Gold: 60 kg
[/output]
[/test]
[test]
[input]
pirates(['Pernik\|\|900000\|\|900', 'Dupnica\|\|60000\|\|60', 'Sail', 'Plunder\=\>Pernik\=\>800000\=\>10', 'Plunder\=\>Pernik\=\>100000\=\>10', 'End'])
[/input]
[output]
Pernik plundered\! 10 gold stolen, 800000 citizens killed.
Pernik plundered\! 10 gold stolen, 100000 citizens killed.
Pernik has been wiped off the map\!
Ahoy, Captain\! There are 1 wealthy settlements to go to:
Dupnica \-\> Population\: 60000 citizens, Gold: 60 kg
[/output]
[/test]
[test]
[input]
pirates(['Pernik\|\|900000\|\|900', 'Dupnica\|\|60000\|\|60', 'Sail', 'Plunder\=\>Pernik\=\>1\=\>450', 'Plunder\=\>Pernik\=\>1\=\>450', 'End'])
[/input]
[output]
Pernik plundered\! 450 gold stolen, 1 citizens killed.
Pernik plundered\! 450 gold stolen, 1 citizens killed.
Pernik has been wiped off the map\!
Ahoy, Captain\! There are 1 wealthy settlements to go to\:
Dupnica \-\> Population\: 60000 citizens, Gold\: 60 kg
[/output]
[/test]
[test]
[input]
pirates(['A\|\|100\|\|10', 'B\|\|100\|\|20', 'Sail', 'End'])
[/input]
[output]
Ahoy, Captain\! There are 2 wealthy settlements to go to\:
B \-\> Population\: 100 citizens, Gold\: 20 kg
A \-\> Population\: 100 citizens, Gold\: 10 kg
[/output]
[/test]
[test]
[input]
pirates(['B\|\|100\|\|10', 'A\|\|100\|\|10', 'Sail', 'End'])
[/input]
[output]
Ahoy, Captain\! There are 2 wealthy settlements to go to\:
A \-\> Population\: 100 citizens, Gold\: 10 kg
B \-\> Population\: 100 citizens, Gold\: 10 kg
[/output]
[/test]
[test]
[input]
pirates(['Sail', 'End'])
[/input]
[output]
Ahoy, Captain\! All targets have been plundered and destroyed\!
[/output]
[/test]
[test]
[input]
pirates(['Pernik\|\|100000\|\|1000', 'Dupnica\|\|100000\|\|1000', 'Slivnica\|\|100000\|\|1000', 'Sail', 'Prosper\=\>Pernik\=\>500', 'Plunder\=\>Pernik\=\>10000\=\>10', 'Plunder\=\>Dupnica\=\>0\=\>1000', 'Plunder\=\>Slivnica\=\>12345\=\>100', 'Prosper\=\>Slivnica\=\>1000', 'End'])
[/input]
[output]
500 gold added to the city treasury. Pernik now has 1500 gold.
Pernik plundered\! 10 gold stolen, 10000 citizens killed.
Dupnica plundered\! 1000 gold stolen, 0 citizens killed.
Dupnica has been wiped off the map\!
Slivnica plundered\! 100 gold stolen, 12345 citizens killed.
1000 gold added to the city treasury. Slivnica now has 1900 gold.
Ahoy, Captain\! There are 2 wealthy settlements to go to:
Slivnica \-\> Population\: 87655 citizens, Gold: 1900 kg
Pernik \-\> Population\: 90000 citizens, Gold: 1490 kg
[/output]
[/test]
[test]
[input]
pirates(['B\|\|100\|\|10', 'A\|\|100\|\|10', 'C\|\|100\|\|10', 'D\|\|100\|\|10', 'Sail', 'Plunder\=\>B\=\>50\=\>5', 'Plunder\=\>A\=\>50\=\>5', 'Plunder\=\>D\=\>50\=\>5', 'Plunder\=\>D\=\>50\=\>5', 'Prosper\=\>C\=\>100', 'End'])
[/input]
[output]
B plundered\! 5 gold stolen, 50 citizens killed.
A plundered\! 5 gold stolen, 50 citizens killed.
D plundered\! 5 gold stolen, 50 citizens killed.
D plundered\! 5 gold stolen, 50 citizens killed.
D has been wiped off the map\!
100 gold added to the city treasury. C now has 110 gold.
Ahoy, Captain\! There are 3 wealthy settlements to go to:
C \-\> Population\: 100 citizens, Gold\: 110 kg
A \-\> Population\: 50 citizens, Gold\: 5 kg
B \-\> Population\: 50 citizens, Gold\: 5 kg
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
