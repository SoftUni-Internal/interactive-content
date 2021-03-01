# Problem with Solution 2: Inventory

[slide hideTitle]
# Inventory


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
# Description

Veți primi un șir care conține obiecte curente separate de o virgulă și de un spațiu \(", "\).

Apoi, până la mesajul "**Craft!**", veți primi diferite comenzi. 

Comenzile sunt separate de (" \- "):

* Dați comanda "**Collect -** \{**item**\}":

Prin primirea acestei comenzi, veți putea adăuga obiectul dat inventarului vostru.

Dacă obiectul există deja, veți putea sări peste această comandă. 

* Dați comanda "**Drop -** \{**item**\}": 

Astfel, veți șterge obiectul din inventar, dacă îl aveți. 

* Dați comanda "**Combine Items -** \{**oldItem**\}**:**\{**newItem**\}":

Veți putea verifica dacă primul obiect există în inventar. Dacă există, atunci adăugați noul obiect după primul.

Dacă nu există, ignorați comanda.

* Dați comanda "**Renew -** \{**item**\}":

Dacă obiectul există deja, puteți să-i schimbați poziția și să îl puneți pe ultima poziție în inventar. 


## Ieșire
După ce primiți "**Craft!**", Imprimați toate articolele din inventarul dvs., separate prin,o virgulă și un spațiu.

## Examples One
| **Input** | **Output** |
| --- | --- |
|inventory(['Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!'])| Iron, Sword, Gold |

## Examples Two
| **Input** | **Output** |
| --- | --- |
|inventory(['Iron, Sword','Drop - Bronze','Combine Items - Sword:Bow','Renew - Iron', 'Craft!'])| Sword, Bow, Iron|


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
