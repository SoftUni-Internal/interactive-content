# Problema 3: The Pianist
[slide hideTitle]
# The Pianist

[code-task title="The Pianist" taskId="js-fundamentals-2-finalExam-The-Pianist" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function thePianist(number, input) {
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

*Sunteți pianist și vă place să păstrați o listă a pieselor dvs. preferate de pian.*
*Creați un program, pentru a vă ajuta să îl organizați și să adăugați, să schimbați, să eliminați piese din el!*

Pe prima linie a intrării, veți primi un **integer** "**n**" - reprezentând numărul de piese pe care le veți avea inițial.

Pe următoarele rânduri "**n**", veți primi titlul fiecărei piese, urmat de **compozitorul și cheia**, separate prin "\|" în următorul format:

"\{**piece**}\|\{**composer**\}\|\{**key**\}"

Apoi, veți primi **comenzi diferite**, fiecare pe o nouă linie, separate prin "\|", până când este dată comanda "**Stop**":

* Comanda "**Add**\|\{**piece**\}\|\{**composer**\}\|\{**key**\}":
Trebuie să **adăugați piesa și informațiile** despre aceasta la celelalte piese.

Dacă piesa este deja **în colecție**, ar trebui să tipăriți: 
"\{**piece**\} **is already in the collection!**"

Dacă piesa **nu se află în colecție**, ar trebui să tipăriți:
"\{**piece**\} **by** \{**composer**\} **in** \{**key**\} **added to the collection!**"

* Comanda "**Remove**\|\{**piece**\}":
Dacă **piesa este în colecție**, trebuie să o eliminați.

Apoi, trebuie să imprimați următorul mesaj:
"**Successfully removed** \{**piece**\}!"

Dacă **piesa nu se află în colecție**, trebuie să imprimați:
"**Invalid operation!** \{**piece**\} **does not exist in the collection.**"

* Comanda "**ChangeKey**\|\{**piece**\}\|\{**newKey**\}":
Dacă **piesa este în colecție**, schimbați cheia cu cea specificată și imprimați:

"**Changed the key of** \{**piece**\} **to** \{**newKey**\}!"

Dacă **piesa nu se află în colecție**, tipăriți:
"**Invalid operation!** \{**piece**\} **does not exist in the collection.**"

La primirea comenzii "**Stop**", trebuie să imprimați toate piesele din colecție, sortate după **numele lor și după numele compozitorului lor în ordine alfabetică**, în următorul format:

"\{**piece**\} \-\> **composer:** \{**composer**\}, **Key:** \{**key**\}"

## Intrare

- Mai întâi, veți primi un singur număr întreg - numărul inițial de piese din colecție

- Pentru fiecare piesă, veți primi o singură linie de text care conține informații despre aceasta

- Apoi, veți primi mai multe comenzi în modul descris mai sus, până când veți primi comanda "**Stop**"

**Notă**: Comenzile pe care le veți primi vor modifica obiectul.

## Ieșire

* Toate mesajele de ieșire și formatele corespunzătoare sunt descrise în descrierea problemei

## Exemplul Unu

| **Intrare** | **Ieșire** |
| --- | --- |
|thePianist(3, ['Fur Elise\|Beethoven\|A Minor', 'Moonlight Sonata\|Beethoven\|C\# Minor', 'Clair de Lune\|Debussy\|C\# Minor', 'Add\|Sonata No.2\|Chopin\|B Minor', 'Add\|Hungarian Rhapsody No.2\|Liszt\|C\# Minor', 'Add\|Fur Elise\|Beethoven\|C# Minor', 'Remove\|Clair de Lune', 'ChangeKey\|Moonlight Sonata\|C\# Major', 'Stop'])|Sonata No.2 by Chopin in B Minor added to the collection!|
||Hungarian Rhapsody No.2 by Liszt in C# Minor added to the collection!|
||Fur Elise is already in the collection!|
||Successfully removed Clair de Lune!|
||Changed the key of Moonlight Sonata to C\# Major!|
||Fur Elise \-\> Composer: Beethoven, Key: A Minor|
||Hungarian Rhapsody No.2 \-\> Composer: Liszt, Key: C\# Minor|
||Moonlight Sonata \-\> Composer: Beethoven, Key: C\# Major|
||Sonata No.2 \-\> Composer: Chopin, Key: B Minor|

[hints]
[hint]
După ce primiți **piesele inițiale** și informațiile despre ele, începeți să primiți **comenzi**.
[/hint] 
[hint]
**Primele două** comenzi sunt **adăugarea** unei piese la colecție. 

Deoarece piesele **nu se află** în colecție, le adăugați.
[/hint] 
[hint]
Prin a treia comandă, care este și "**add**", **încercați să adăugați o piesă** care este deja în colecție, astfel încât să **imprimați mesajul corespunzător**, dar nu adăugați bucată.
[/hint] 
[hint]
După aceea, primiți comanda "**remove**" command. 

Ultima comandă **necesită schimbarea cheii unei piese**.

Deoarece piesa este **prezentă în colecție**, îi **modificați** cheia.
[/hint] 
[hint]
Apoi, primiți comanda "**Stop**".

**Imprimați informațiile despre piese**, ați sortat modul descris mai sus și programul se încheie.
[/hint] 
[/hints] 

## Exemplul Doi

| **Intrare** | **Ieșire** |
| --- | --- |
|thePianist(4, ['Eine kleine Nachtmusik\|Mozart\|G Major', 'La Campanella\|Liszt\|G\# Minor', 'The Marriage of Figaro\|Mozart\|G Major', 'Hungarian Dance No\.5\|Brahms\|G Minor', 'Add\|Spring\|Vivaldi\|E Major', 'Remove\|The Marriage of Figaro', 'Remove\|Turkish March', 'ChangeKey\|Spring\|C Major', 'Add\|Nocturne\|Chopin\|C\# Minor', 'Stop'])|Spring by Vivaldi in E Major added to the collection\!|
||Successfully removed The Marriage of Figaro\!|
||Invalid operation! Turkish March does not exist in the collection\.|
||Changed the key of Spring to C Major\!|
||Nocturne by Chopin in C\# Minor added to the collection\!|
||Eine kleine Nachtmusik \-\> Composer\: Mozart, Key\: G Major|
||Hungarian Dance No\.5 \-\> Composer\: Brahms, Key\: G Minor|
||La Campanella \-\> Composer\: Liszt, Key\: G\# Minor|
||Nocturne \-\> Composer\: Chopin, Key\: C\# Minor|
||Spring \-\> Composer\: Vivaldi, Key\: C Major|

[/task-description]
[code-io /]
[tests]
[test open]
[input]
thePianist(3, ['Fur Elise\|Beethoven\|A Minor', 'Moonlight Sonata\|Beethoven\|C\# Minor', 'Clair de Lune\|Debussy\|C\# Minor', 'Add\|Sonata No\.2\|Chopin\|B Minor', 'Add\|Hungarian Rhapsody No\.2\|Liszt\|C\# Minor', 'Add\|Fur Elise\|Beethoven\|C\# Minor', 'Remove\|Clair de Lune', 'ChangeKey\|Moonlight Sonata\|C\# Major', 'Stop',])
[/input]
[output]
Sonata No\.2 by Chopin in B Minor added to the collection\!
Hungarian Rhapsody No\.2 by Liszt in C\# Minor added to the collection\!
Fur Elise is already in the collection\!
Successfully removed Clair de Lune\!
Changed the key of Moonlight Sonata to C\# Major\!
Fur Elise \-\> Composer\: Beethoven, Key: A Minor
Hungarian Rhapsody No\.2 \-\> Composer\: Liszt, Key\: C\# Minor
Moonlight Sonata \-\> Composer\: Beethoven, Key\: C\# Major
Sonata No\.2 \-\> Composer\: Chopin, Key\: B Minor
[/output]
[/test]
[test open]
[input]
thePianist(4, ['Eine kleine Nachtmusik\|Mozart\|G Major', 'La Campanella\|Liszt\|G\# Minor', 'The Marriage of Figaro\|Mozart\|G Major', 'Hungarian Dance No\.5\|Brahms\|G Minor', 'Add\|Spring\|Vivaldi\|E Major', 'Remove\|The Marriage of Figaro', 'Remove\|Turkish March', 'ChangeKey\|Spring\|C Major', 'Add\|Nocturne\|Chopin\|C\# Minor', 'Stop'])
[/input]
[output]
Spring by Vivaldi in E Major added to the collection\!
Successfully removed The Marriage of Figaro\!
Invalid operation\! Turkish March does not exist in the collection\.
Changed the key of Spring to C Major\!
Nocturne by Chopin in C\# Minor added to the collection\!
Eine kleine Nachtmusik \-\> Composer\: Mozart, Key\: G Major
Hungarian Dance No\.5 \-\> Composer\: Brahms, Key\: G Minor
La Campanella \-\> Composer\: Liszt, Key\: G\# Minor
Nocturne \-\> Composer\: Chopin, Key\: C\# Minor
Spring \-\> Composer\: Vivaldi, Key\: C Major
[/output]
[/test]
[test]
[input]
thePianist(4, ['AAAA\|Mozart\|G Major', 'BBBB\|Liszt\|G\# Minor', 'VVVVV\|Mozart\|G Major', 'CC\|Brahms\|G Minor', 'Add\|AAAA\|Vivaldi\|E Major', 'Remove\|The Marriage of Figaro', 'Remove\|Turkish March', 'ChangeKey\|Spring\|C Major', 'Add\|Nocturne\|Chopin\|C\# Minor', 'Stop'])
[/input]
[output]
AAAA is already in the collection\!
Invalid operation\! The Marriage of Figaro does not exist in the collection\.
Invalid operation\! Turkish March does not exist in the collection\.
Invalid operation\! Spring does not exist in the collection\.
Nocturne by Chopin in C\# Minor added to the collection\!
AAAA \-\> Composer\: Mozart, Key\: G Major
BBBB \-\> Composer\: Liszt, Key\: G\# Minor
CC \-\> Composer\: Brahms, Key\: G Minor
Nocturne \-\> Composer: Chopin, Key\: C\# Minor
VVVVV \-\> Composer\: Mozart, Key\: G Major
[/output]
[/test]
[test]
[input]
thePianist(3, ['AAAA\|BB\|G Major', 'ABcshj\|AA\|G\# Minor', 'ACygsv\|CC\|G Major', 'Stop'])
[/input]
[output]
AAAA \-\> Composer\: BB, Key\: G Major
ABcshj \-\> Composer\: AA, Key\: G\# Minor
ACygsv \-\> Composer\: CC, Key\: G Major
[/output]
[/test]
[test]
[input]
thePianist(3, ['AAAA\|BB\|G Major', 'ABcshj\|AA\|G\# Minor', 'ACygsv\|CC\|G Major', 'Add\|Hello\|Mozart\|C', 'ChangeKey\|Hello\|B Minor', 'Remove\|Hello', 'Stop'])
[/input]
[output]
Hello by Mozart in C added to the collection\!
Changed the key of Hello to B Minor\!
Successfully removed Hello\!
AAAA \-\> Composer\: BB, Key\: G Major
ABcshj \-\> Composer\: AA, Key\: G\# Minor
ACygsv \-\> Composer\: CC, Key\: G Major
[/output]
[/test]
[test]
[input]
thePianist(0, ['Add\|Autumn\|Vivaldi\|C', 'Add\|Winter\|Vivaldi\|C', 'Add\|Summer\|Vivaldi\|C', 'Add\|Spring\|Vivaldi\|C', 'ChangeKey\|Spring\|B Minor', 'ChangeKey\|Summer\|B Minor', 'Stop'])
[/input]
[output]
Autumn by Vivaldi in C added to the collection\!
Winter by Vivaldi in C added to the collection\!
Summer by Vivaldi in C added to the collection\!
Spring by Vivaldi in C added to the collection\!
Changed the key of Spring to B Minor\!
Changed the key of Summer to B Minor\!
Autumn \-\> Composer\: Vivaldi, Key\: C
Spring \-\> Composer\: Vivaldi, Key\: B Minor
Summer \-\> Composer\: Vivaldi, Key\: B Minor
Winter \-\> Composer\: Vivaldi, Key\: C
[/output]
[/test]
[test]
[input]
thePianist(5, ['Concerto\|Schumann\|C Minor', 'Nocturne\|Chopin\|E Major', 'Clavier\|Bach\|E Major', 'Emperor\|Beethoven\|B Minor', 'Piano sonata\|Liszt\|B Minor', 'Add\|Autumn\|Vivaldi\|C', 'Add\|Winter\|Vivaldi\|C', 'Add\|Summer\|Vivaldi\|C', 'Add\|Spring\|Vivaldi\|C', 'ChangeKey\|Spring\|B Minor', 'ChangeKey\|Summer\|B Minor', 'Remove\|Nocturne', 'Remove\|Concerto', 'Remove\|Clavier', 'Remove\|Clavier', 'Remove\|Piano Sonata', 'Remove\|Autumn', 'Stop'])
[/input]
[output]
Autumn by Vivaldi in C added to the collection\!
Winter by Vivaldi in C added to the collection\!
Summer by Vivaldi in C added to the collection\!
Spring by Vivaldi in C added to the collection\!
Changed the key of Spring to B Minor\!
Changed the key of Summer to B Minor\!
Successfully removed Nocturne\!
Successfully removed Concerto\!
Successfully removed Clavier\!
Invalid operation\! Clavier does not exist in the collection\.
Invalid operation\! Piano Sonata does not exist in the collection\.
Successfully removed Autumn\!
Emperor \-\> Composer: Beethoven, Key\: B Minor
Piano sonata \-\> Composer\: Liszt, Key\: B Minor
Spring \-\> Composer\: Vivaldi, Key\: B Minor
Summer \-\> Composer\: Vivaldi, Key\: B Minor
Winter \-\> Composer\: Vivaldi, Key\: C
[/output]
[/test]
[test]
[input]
thePianist(5, ['Concerto\|Schumann\|C Minor', 'Nocturne\|Chopin\|E Major', 'Clavier\|Bach\|E Major', 'Emperor\|Beethoven\|B Minor', 'Piano sonata\|Liszt\|B Minor', 'Add\|Autumn\|Vivaldi\|C', 'Add\|Winter\|Vivaldi\|C', 'Add\|Summer\|Vivaldi\|C', 'Add\|Spring\|Vivaldi\|C', 'ChangeKey\|Spring\|B Minor', 'ChangeKey\|Summer\|B Minor', 'ChangeKey\|Winter\|B Minor', 'ChangeKey\|Autumn\|B Minor', 'ChangeKey\|Emperor\|B Minor', 'ChangeKey\|Clavier\|B Minor', 'ChangeKey\|Turkish March\|B Minor', 'ChangeKey\|Turkish March\|B Minor', 'Stop'])
[/input]
[output]
Autumn by Vivaldi in C added to the collection\!
Winter by Vivaldi in C added to the collection\!
Summer by Vivaldi in C added to the collection\!
Spring by Vivaldi in C added to the collection\!
Changed the key of Spring to B Minor\!
Changed the key of Summer to B Minor\!
Changed the key of Winter to B Minor\!
Changed the key of Autumn to B Minor\!
Changed the key of Emperor to B Minor\!
Changed the key of Clavier to B Minor\!
Invalid operation\! Turkish March does not exist in the collection\.
Invalid operation\! Turkish March does not exist in the collection\.
Autumn \-\> Composer\: Vivaldi, Key\: B Minor
Clavier \-\> Composer\: Bach, Key\: B Minor
Concerto \-\> Composer\: Schumann, Key\: C Minor
Emperor \-\> Composer\: Beethoven, Key\: B Minor
Nocturne \-\> Composer\: Chopin, Key\: E Major
Piano sonata \-\> Composer\: Liszt, Key\: B Minor
Spring \-\> Composer\: Vivaldi, Key\: B Minor
Summer \-\> Composer\: Vivaldi, Key\: B Minor
Winter \-\> Composer\: Vivaldi, Key\: B Minor
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
