// sectionId: "Javascript-Programming-Basics-For-Loop-For-Loop

# Bucla For

[slide hideTitle]

# Exemplu din viața reală: Mutatul vaselor

[vimeo-video]
[stream language="EN" videoId="487119221/9c519c14e8" default /]
[stream language="RO" videoId="487119221/9c519c14e8"  /]
[/video-vimeo]

Să spunem că vreți să umpleți mașina de spălat vase cu farfurii.

Pentru a face asta, trebuie să luați niște farfurii și să le puneți înăuntru.

Apoi veți lua mai multe farfurii și veți repeta acțiunea.

Asta este o buclă, repetați o acțiune până ce îndepliniți o condiție.

Când îndepliniți acea condiție, bucla se oprește.

[/slide]

[slide hideTitle]
# For Loop

[vimeo-video]
[stream language="EN" videoId="487119239/423a548f1b" default /]
[stream language="RO" videoId="487119239/423a548f1b"  /]
[/video-vimeo]

În programare, de multe ori trebuie executat un bloc de comenzi, în mod repetat. 

Pentru a face asta, sunt folosite așa-zisele bucle. 

Să vedem un exemplu de buclă care trece separat prin numerele de la 1 la 10 si le afișează. 

```js live
for (let i = 1; i <= 10; i += 1) {
  console.log(i);
}
```

Acest bloc de cod poate fi explicat cu ajutorul acestei diagrame:

[image assetsSrc="for-loop-use-case.png" /]

Bucla începe cu operatorul `for` și trece prin toate valorile cu ajutorul unei variabile, de exemplu numerele de la 1 la 10 (inclusiv), iar pentru fiecare valoare se fac anumite comenzi. 

## Sintaxa: Bucla For 

După ce se declară bucla, se poate specifica o  **valoare inițială** și o **valoare finală.** 

Cuprinsul buclei este cuprins între acolade `{ }` și reprezintă un bloc de una sau mai multe comenzi. 
Blocul de cod de mai jos ne arată structura buclei `for`: 

``` js
for (initialization; condition; update) {
  //loop's body;
}
```

Acesta constă în:

* o **parte de inițialzare** pentru numărător (după modelul `let i = 0`)

* un condiție **booleană** (`i < 10`)

* o expresie pentru  **a actualiza** numărătorul (``i += 1``)

* corpul buclei

În cele mai multe cazuri, bucla  `for` este cuprinsă între `1` și `n` ori (de exemplu de la 1 la 10).

Scopul buclei este să treacă secvențial prin numerele 1, 2, 3, …, n și pentru fiecare să se facă o acțiune.

În primul exemplu, variabila `i` acceptă valori de la 1 la 10 și valoarea **curentă** este prelucrată în interiorul buclei.

Bucla se repetă de 10 ori și fiecate repetare se numește **iterație**.

[/slide]

[slide hideTitle]
# Problemă cu soluția: Print Sum of N Numbers


[code-task title="Print Sum of N Numbers" taskId="pb-js-for-loop-Print-Sum-of-N-Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function printSum (input) {
    // Scrieți codul dvs. aici
}
```
[/code-editor]
[task-description]

# Descriere
Scrieți un program care:

* Citește numarul n în consolă
* **Afișează** toate numerele de la **1** la **n**
* **Adună** toate numerele de la **1** la **n**
* **Afișează** suma în consolă la sfârșit

# Exemplu
  | **Input** | **Output** |
| --- | --- |
|5| 1 |
|| 2 |
|| 3 |
|| 4 |
|| 5 |
|| 15 |

[/task-description]
[tests]
[test]
[input]
5
[/input]
[output]
1
2
3
4
5
15
[/output]
[/test]
[test]
[input]
6
[/input]
[output]
1
2
3
4
5
6
21
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]



[slide hideTitle]
# Problemă cu soluția: Greatest Number

[vimeo-video]
[stream language="EN" videoId="487119324/39b9907585" default /]
[stream language="RO" videoId="487119324/39b9907585"  /]
[/video-vimeo]

[code-task title="Greatest Number" taskId="pb-js-for-loop-Greatest-Number" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function greatestNumber(n, numbers) {
 // Scrieți codul dvs. aici
}
```
[/code-editor]
[code-adapter]
```
(input, code) => code(...input);
```
[/code-adapter]
[task-description]

# Descriere
Scrieți un program care: 

* Citește `n`: un număr care reprezintă câte elemente sunt introduse 

* Citește n numere 

* Găsește și afișează cel mai mare număr 

# Exemplu

| **Input** | **Output** |
| --- | --- |
|`3, ['40', '90', '50']`| 90 |


[/task-description]
[tests]
[test]
[input]
3
30
80
40
[/input]
[output]
80
[/output]
[/test]
[test]
[input]
3
30
80
40
[/input]
[output]
80
[/output]
[/test]
[test]
[input]
3
15
110
40
[/input]
[output]
110
[/output]
[/test]
[test]
[input]
3
30
90
40
[/input]
[output]
90
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

