# Problem cu soluție 1: Mu Online

[slide hideTitle]

# Mu Online

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/05.JS-Fundamentals-ExamPrep-1/JS-Fund-MU Problem -,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Mu Online" taskId="js-fundamentals-examPreparation-Mu-Online" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function muOnline(input) {
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

Personajul vostru începe cu **100 health points** și **0 bitcoins.**

Veți primi un șir**reprezentând diferite evenimente**, pe care trebuie să le procesați.

Fiecare comandă este **separată** de o bară verticală ("\|").

Fiecare dintre comenzi va conține un cuvânt și un număr, separate de un spațiu. 

Comanda poate fi:

* Comanda "**potion**": 

Reface numărul specificat de puncte de sănătate ale personajului vostru. 

Punctele de sănătate **nu pot depăși 100.**

După că ați folosit cu succes poțiunea, imprimați:

"**Healed:** \{**amount**\} **hp.**"

Apoi, imprimați starea de sănătate actuală: 

"**Current health:** \{**health**\} **hp.**"

* Comanda "**chest**": 

Ați găsit bitcoins și adăugați acest număr la valoarea bitcoins existentă. 

Imprimați:

"**You found** \{**amount**\} **bitcoins.**"

*Dacă primiți orice alte date, înseamnă că **v-ați confruntat cu un monstru**. 

Un **cuvânt la începtul comenzii** va fi numele monstrului, iar **numărul** \- va fi **daune pe care monstrul ți le provoacă.**

Exemplu: "**rat** \{**number**\}, **boss** \{**number**\}", aici pot fi alte tipuri de monștri.

Ar trebui să scădeți punctele de sănătate ale campionului cu daunele pe care fiecare monstru le produce.

* Dacă nu ați murit (health <= 0) înseamnă că ați învins monstrul și puteți imprima :

"**You defeated a** \{**monster**\}."

* Dacă ați murit, atunci datele așteptate de ieșire vor fi :  

"**You died! Killed by** \{**monster**\}."

**And your quest is over.**

Imprimați numărul ultimei camere pe care ați reușit să o găsiți: 

"**Highest level reached:** \{**last room**\}."

Dacă ați reușit să parcurgeți toate camerele din temniță, tipăriți pe următoarele trei linii:

"**You've made it!**"

"**Bitcoins:** \{**bitcoins**\}"

"**Health:** \{**health**\}"

## Intrare
Un șir, cu comenzi separate printr-o bară verticală ("\|")..

## Ieșire
Imprimați mesajele corespunzătoare, așa cum se arată în descriere.

## Exemplul Unu

|**Intrare**|**Ieșire** |
| --- | --- |
|muOnline('rat 10\|bat 20\|potion 10\|rat 10\|chest 100\|boss 70\|chest 1000')| You defeated a rat.|
||You defeated a bat.|
||You healed for 10 hp.|
||Current health: 80 hp.|
||You defeated a rat.|
||You found 100 bitcoins.|
||You died! Killed by boss.|
||Highest level reached: 6|

[hints]
[hint]
Initialize the health points (**100**) and bitcoins (**0**), as well as the number of rooms reached (**0** at the beginning).
[/hint] 
[hint]
Split the commands from the input, then go through each one using a for-of loop.
[/hint] 
[hint]
Inside the for-of loop, create if-else statements for each command type or monster.
[/hint] 
[hint]
For every condition, modify the data and/or print the corresponding output.
[/hint] 
[/hints] 

## Exemplul Doi

|**Intrare**|**Ieșire** |
| --- | --- |
|muOnline('cat 10\|potion 30\|orc 10\|chest 10\|snake 25\|chest 110')| You defeated a cat.')|
||You healed for 10 hp.|
||Current health: 100 hp.|
||You defeated a orc.|
||You found 10 bitcoins.|
||You defeated a snake.|
||You found 110 bitcoins.|
||You've made it!|
||Bitcoins: 120|
||Health: 65|

[/task-description]
[code-io /]
[tests]
[test open]
[input]
muOnline('rat 10\|bat 20\|potion 10\|rat 10\|chest 100\|boss 70\|chest 1000')
[/input]
[output]
You defeated a rat.
You defeated a bat.
You healed for 10 hp.
Current health: 80 hp.
You defeated a rat.
You found 100 bitcoins.
You died! Killed by boss.
Highest level reached: 6
[/output]
[/test]
[test open]
[input]
muOnline('cat 10\|potion 30\|orc 10\|chest 10\|snake 25\|chest 110')
[/input]
[output]
You defeated a cat.
You healed for 10 hp.
Current health: 100 hp.
You defeated a orc.
You found 10 bitcoins.
You defeated a snake.
You found 110 bitcoins.
You've made it!
Bitcoins: 120
Health: 65
[/output]
[/test]
[test]
[input]
muOnline('rat 10\|bat 20')
[/input]
[output]
You defeated a rat.
You defeated a bat.
You've made it!
Bitcoins: 0
Health: 70
[/output]
[/test]
[test]
[input]
muOnline('rat 10\|bat 20\|cat 30\|dog 39')
[/input]
[output]
You defeated a rat.
You defeated a bat.
You defeated a cat.
You defeated a dog.
You've made it!
Bitcoins: 0
Health: 1
[/output]
[/test]
[test]
[input]
muOnline('rat 10\|bat 20\|cat 30\|dog 40')
[/input]
[output]
You defeated a rat.
You defeated a bat.
You defeated a cat.
You died! Killed by dog.
Highest level reached: 4
[/output]
[/test]
[test]
[input]
muOnline('chest 1\|chest 2\|chest 3')
[/input]
[output]
You found 1 bitcoins.
You found 2 bitcoins.
You found 3 bitcoins.
You've made it!
Bitcoins: 6
Health: 100
[/output]
[/test]
[test]
[input]
muOnline('chest 10\|chest 20\|chest 30')
[/input]
[output]
You found 10 bitcoins.
You found 20 bitcoins.
You found 30 bitcoins.
You've made it!
Bitcoins: 60
Health: 100
[/output]
[/test]
[test]
[input]
muOnline('cat 40\|potion 30')
[/input]
[output]
You defeated a cat.
You healed for 30 hp.
Current health: 90 hp.
You've made it!
Bitcoins: 0
Health: 90
[/output]
[/test]
[test]
[input]
muOnline('cat 10\|potion 30')
[/input]
[output]
You defeated a cat.
You healed for 10 hp.
Current health: 100 hp.
You've made it!
Bitcoins: 0
Health: 100
[/output]
[/test]
[test]
[input]
muOnline('dog 10\|potion 30')
[/input]
[output]
You defeated a dog.
You healed for 10 hp.
Current health: 100 hp.
You've made it!
Bitcoins: 0
Health: 100
[/output]
[/test]
[test]
[input]
muOnline('a 10\|b 20\|potion 10\|c 30\|chest 10\|chest 1000\|d 50\|chest 1000')
[/input]
[output]
You defeated a a.
You defeated a b.
You healed for 10 hp.
Current health: 80 hp.
You defeated a c.
You found 10 bitcoins.
You found 1000 bitcoins.
You died! Killed by d.
Highest level reached: 7
[/output]
[/test]
[test]
[input]
muOnline('cat 10\|potion 30\|orc 10\|chest 10\|snake 25\|chest 110\|chest 100\|potion 1000\|DRAGON 1000')
[/input]
[output]
You defeated a cat.
You healed for 10 hp.
Current health: 100 hp.
You defeated a orc.
You found 10 bitcoins.
You defeated a snake.
You found 110 bitcoins.
You found 100 bitcoins.
You healed for 35 hp.
Current health: 100 hp.
You died! Killed by DRAGON.
Highest level reached: 9
[/output]
[/test]
[/tests]
[/code-task]

[/slide]
