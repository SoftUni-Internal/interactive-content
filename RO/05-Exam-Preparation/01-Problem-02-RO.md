# Problemă cu Soluție 2: Inventory

[slide hideTitle]
# Inventory

[video src="https://videos.softuni.org/hls/01.fundamentals-functions-and-arrays/RO/05.JS-Fundamentals-ExamPrep-1/Inventory Problem Solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Inventory" taskId="js-fundamentals-examPreparation-Inventory" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function inventory(input) {
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

Veți primi un șir care conține obiectele curente din inventarul vostru. Obiectele vor fi separate printr-o virgulă și de un spațiu \(", "\).

Apoi, până la primirea mesajului "**Craft!**", veți primi diferite comenzi. 

Comenzile sunt separate prin (" \- ") și pot să fie următoarele:

* "**Collect -** \{**item**\}":

   - Adăugați obiectul dat la inventarul vostru

   - Dacă obiectul există deja, săriți peste această comandă 

* "**Drop -** \{**item**\}": 

   - Ștergeți obiectul din inventar, dacă îl aveți

* "**Combine Items -** \{**oldItem**\}**:**\{**newItem**\}":

   - Verifica dacă primul obiect există în inventar, iar dacă există, atunci adăugați noul obiect după primul

   - Dacă nu există, ignorați comanda.

* "**Renew -** \{**item**\}":

   - Dacă obiectul există deja, trebuie să îi schimbați poziția și să îl puneți pe ultima poziție în inventar


## Ieșire
După ce primiți comanda "**Craft!**", imprimați toate articole din inventarul vostru, separate printr-o virgulă și un spațiu \(", "\).

## Exemplul Unu
|**Intrare**|**Ieșire** |
| --- | --- |
|inventory(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!'])| Iron, Sword, Gold |

[hints]
[hint]
Împărțiți comenzile și obiectele pentru fiecare comandă de lângă cratimă, înconjurată de spații: **" - "**
[/hint] 
[hint]
Creați o condiție care verifică dacă șirul obiectelor conține două puncte (**":"**), iar apoi îl împarte.
[/hint] 
[hint]
Parcurgeți fiecare comandă/obiecte și modificați inventarul în mod corespunzător.
[/hint] 
[hint]
La final, tipăriți inventarul pe consolă folosind metoda `.join(separator)`.
[/hint] 
[/hints] 

## Exemplul Doi
|**Intrare**|**Ieșire** |
| --- | --- |
|inventory(['Iron, Sword', 'Drop - Bronze', 'Combine Items - Sword:Bow', 'Renew - Iron', 'Craft!'])| Sword, Bow, Iron|

[/task-description]
[code-io /]
[tests]
[test open]
[input]
inventory(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!'])
[/input]
[output]
Iron, Sword, Gold
[/output]
[/test]
[test open]
[input]
inventory(['Iron, Sword','Drop - Bronze','Combine Items - Sword:Bow','Renew - Iron', 'Craft!'])
[/input]
[output]
Sword, Bow, Iron
[/output]
[/test]
[test]
[input]
inventory(['A, B, C, D', 'Collect - E', 'Collect - F', 'Craft!'])
[/input]
[output]
A, B, C, D, E, F
[/output]
[/test]
[test]
[input]
inventory(['A, B, C, D', 'Collect - D', 'Collect - E', 'Craft!'])
[/input]
[output]
A, B, C, D, E
[/output]
[/test]
[test]
[input]
inventory(['A, B, C, D', 'Drop - C', 'Drop - D', 'Craft!'])
[/input]
[output]
A, B
[/output]
[/test]
[test]
[input]
inventory(['A, B, C, D', 'Drop - D', 'Drop - E', 'Craft!'])
[/input]
[output]
A, B, C
[/output]
[/test]
[test]
[input]
inventory(['A, B, C, D', 'Renew - C', 'Craft!'])
[/input]
[output]
A, B, D, C
[/output]
[/test]
[test]
[input]
inventory(['A, B, C, D', 'Renew - D', 'Renew - E', 'Renew - B', 'Craft!'])
[/input]
[output]
A, C, D, B
[/output]
[/test]
[test]
[input]
inventory(['A, B, C, D', 'Combine Items - C:C1', 'Craft!'])
[/input]
[output]
A, B, C, C1, D
[/output]
[/test]
[test]
[input]
inventory(['A, B, C, D', 'Combine Items - C:C1', 'Combine Items - E:E1', 'Craft!'])
[/input]
[output]
A, B, C, C1, D
[/output]
[/test]
[test]
[input]
inventory(['N, S, F, T', 'Collect - U', 'Drop - F', 'Renew - N', 'Combine Items - S:B1', 'Combine Items - B1:O', 'Drop - B1', 'Combine Items - O:F', 'Collect - I', 'Craft!'])
[/input]
[output]
S, O, F, T, U, N, I
[/output]
[/test]
[/tests]
[/code-task]

[/slide]
