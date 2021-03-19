# Problema 1: Trip
[slide hideTitle]
# Trip

[code-task title="Trip" taskId="js-fundamentals-2-finalExam-Trip" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function trip(travelDestinations, commands) {
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

Unii dintre prietenii tăi au decis să meargă într-o călătorie destul de lungă, cu toate acestea, chiar sunt distrasi chiar acum, deoarece trebuie să se pregătească pentru drum.

Așadar, v-au cerut să îi ajutați să își organizeze călătoria prin crearea unui program care va procesa unele modificări ale planului lor inițial de călătorie.

Veți primi un șir care conține lista inițială a **destinațiilor de călătorie.**

Ulterior, veți primi **comenzi**, care reprezintă modificări ale șirului de destinație de călătorie, până când primiți
comanda **Travel**.

Comenzile pot fi:

* Comandă "**Add Stop:**\{**index**\}**:**\{**string**\}":

**Introduceți** șirul dat la acel index, **numai dacă indexul este valid.**

* Comandă **Remove Stop:**\{**start_index**\}**:**\{**end_index**\}:

**Eliminați** elementele șirului din **indexul de început** la **indexul final** (inclusiv) dacă ambii indici sunt valabili.

* Comandă "**Switch:**\{**oldString**\}**:**\{**newString**\}":

Dacă **vechiul șir** este prezent în prezent în șirul planului de călătorie, **înlocuiți toate aparițiile cu noul șir.**

**Notă: După fiecare comandă, tipăriți starea curentă a șirului.**

După primirea comenzii „**Travel**”, tipăriți următorul mesaj:

"**Ready for a world tour! Planned stops:** \{**string**\}"

## Intrare

* Veți primi un șir pe care trebuie să îl modificați, precum și o listă cu comenzi

## Ieșire

* Imprimați mesajele de ieșire corespunzătoare pentru fiecare dintre cazuri, așa cum este descris în descrierea problemei

## Exemplu

| **Intrare** | **Ieșire** |
| --- | --- |
|trip('Hawai::Cyprys-Greece', ['Add Stop:7:Rome', 'Remove Stop:11:16', 'Switch:Hawai:Bulgaria', 'Travel'])|Hawai::RomeCyprys-Greece|
||Hawai::Rome-Greece|
||Bulgaria::Rome-Greece|
||Ready for a world tour! Planned stops: Bulgaria::Rome-Greece|


[/task-description]
[code-io /]
[tests]
[test open]
[input]
trip('Hawai\:\:Cyprys\-Greece', ['Add Stop\:7\:Rome', 'Remove Stop\:11\:16', 'Switch\:Hawai\:Bulgaria', 'Travel'])
[/input]
[output]
Hawai\:\:RomeCyprys\-Greece
Hawai\:\:Rome\-Greece
Bulgaria\:\:Rome\-Greece
Ready for a world tour\! Planned stops\: Bulgaria\:\:Rome\-Greece
[/output]
[/test]
[test]
[input]
trip('A:B:C', ['Add Stop:0:D', 'Travel'])
[/input]
[output]
DA:B:C
Ready for a world tour! Planned stops: DA:B:C
[/output]
[/test]
[test]
[input]
trip('A:B:C', ['Remove Stop:4:4', 'Travel'])
[/input]
[output]
A:B:
Ready for a world tour! Planned stops: A:B:
[/output]
[/test]
[test]
[input]
trip('A:B:C', ['Switch:B:D', 'Travel'])
[/input]
[output]
A:D:C
Ready for a world tour! Planned stops: A:D:C
[/output]
[/test]
[test]
[input]
trip('A:B:C:D', ['Add Stop:6:F', 'Remove Stop:7:7', 'Travel'])
[/input]
[output]
A:B:C:FD
A:B:C:F
Ready for a world tour! Planned stops: A:B:C:F
[/output]
[/test]
[test]
[input]
trip('A:B:C:D', ['Remove Stop:0:1', 'Remove Stop:9:10', 'Switch:C:F', 'Travel'])
[/input]
[output]
B:C:D
B:C:D
B:F:D
Ready for a world tour! Planned stops: B:F:D
[/output]
[/test]
[test]
[input]
trip('A:B:C:D', ['Add Stop:3:N', 'Remove Stop:4:8', 'Switch:A:AA', 'Travel'])
[/input]
[output]
A:BN:C:D
A:BN:C:D
AA:BN:C:D
Ready for a world tour! Planned stops: AA:BN:C:D
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
