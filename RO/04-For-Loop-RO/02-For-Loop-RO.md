// sectionId: "Javascript::Programming-Basics::For-Loop::For-Loop"

# Bucla For

[slide hideTitle]

# Exemplu din Viața Reală: Moving Dishes

[video src="https://videos.softuni.org/hls/javascript-basics/RO/04-For-Loop/JS-basics-for-9-10-Real-life-example-Moving-dishes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Să spunem că vreți să umpleți mașina de spălat vase cu farfurii.

Pentru a face asta, trebuie să luați niște farfurii și să le puneți înăuntru.

Apoi veți lua mai multe farfurii și veți repeta acțiunea.

Asta este o buclă, repetați o acțiune până ce îndepliniți o condiție.

Când îndepliniți acea condiție, bucla se oprește.

[/slide]

[slide hideTitle]

# Bucla For 

[video src="https://videos.softuni.org/hls/javascript-basics/RO/04-For-Loop/JS-basics-for-11-13-For-loop-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În programare, de multe ori trebuie executat un bloc de comenzi, în mod repetat.

Pentru a face asta, sunt folosite așa-zisele bucle for.

Să vedem un exemplu de buclă care trece secvențial prin numerele de la 1 la 10 și le afișează.

```js live
for (let i = 1; i <= 10; i += 1) {
  console.log(i);
}
```

Acest bloc de cod poate fi explicat cu ajutorul acestei diagrame:

[image assetsSrc="for-loop-use-case.png" /]

Bucla începe cu operatorul "**for**" și trece prin toate valorile pentru o variabilă particulară într-un interval dat, de exemplu numerele de la 1 la 10 (inclusiv), iar pentru fiecare valoare se fac anumite comenzi.

## Sintaxă: Bucla For

După ce se declară bucla, se poate specifica o **valoare inițială** și o **valoare finală.**

Corpul buclei este cuprins între acolade `{ }` și reprezintă un bloc de una sau mai multe comenzi.

Blocul de cod de mai jos ne arată structura unei bucle "**for**":

```js
for (initialization; condition; update) {
  //loop's body;
}
```

Acesta constă în:

- O **parte de inițialzare** pentru numărător (după modelul `let i = 0`)

- O condiție **booleană** (`i < 10`)

- O expresie pentru **a actualiza** numărătorul (`i += 1`)

- Corpul buclei

În cele mai multe cazuri, bucla `for` este cuprinsă între `1` și `n` ori (de exemplu de la 1 la 10).

Scopul buclei este să treacă secvențial prin numerele 1, 2, 3, …, n și pentru fiecare să se facă o acțiune.

În primul exemplu, variabila `i` acceptă valori de la 1 la 10 și valoarea **curentă** este tipărită în interiorul buclei.

Bucla se repetă de 10 ori și fiecate repetare se numește **iterație**.

[/slide]

[slide hideTitle]

# Problemă cu Soluție: Print Sum of N Numbers

[video src="https://videos.softuni.org/hls/javascript-basics/RO/04-For-Loop/JS-basics-for-15-Solution-Print-Sum-of-N-Numbers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Print Sum of N Numbers" taskId="pb-js-for-loop-Print-Sum-of-N-Numbers" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function printSum (input) {
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

Creați un program care imprimă toate numerele dintr-un interval dat și suma acestora:

- Veți primi un număr **n** din consolă
- **Imprimați** toate numerele de la **1** la **n**
- **Calculați** suma tuturor numerelor de la **1** la **n**
- **Imprimați** suma pe consolă la sfârșit

# Exemplu

| **Intrare**  | **Ieșire** |
| ----------- | ---------- |
| printSum(5) | 1          |
|             | 2          |
|             | 3          |
|             | 4          |
|             | 5          |
|             | 15         |

| **Intrare**   | **Ieșire**  |
| ----------- | ----------- |
| printSum(3) | 1          |
|             | 2          |
|             | 3          |
|             | 6          |

[/task-description]
[tests]
[test open]
[input]
printSum(5)
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
[test open]
[input]
printSum(3)
[/input]
[output]
1
2
3
6
[/output]
[/test]
[test]
[input]
printSum(5)
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
printSum(6)
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

# Problemă cu Soluție: Greatest Number

[video src="https://videos.softuni.org/hls/javascript-basics/RO/04-For-Loop/JS-basics-for-17-solution-biggest-number-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

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
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]

# Descriere

Creați un program care imprimă **cel mai mare** număr dintr-o matrice:

- Veți primi **n**: dimensiunea matricei

- Procesați **n** numere

- Găsiți și imprimați cel mai mare număr

# Exemplu

| **Intrare**                             | **Ieșire** |
| ------------------------------------- | ---------- |
| greatestNumber(3, [40, 90, 50]) | 90         |
| greatestNumber(4, [5, 3, 14, 35]) | 35 |

[/task-description]
[tests]
[test open]
[input]
greatestNumber(3, [40, 90, 50])
[/input]
[output]
90
[/output]
[/test]
[test open]
[input]
greatestNumber(4, [5, 3, 14, 35])
[/input]
[output]
35
[/output]
[/test]
[test]
[input]
greatestNumber(3, [30, 80, 40])
[/input]
[output]
80
[/output]
[/test]
[test]
[input]
greatestNumber(3, [30, 80, 40])
[/input]
[output]
80
[/output]
[/test]
[test]
[input]
greatestNumber(3, [15, 110, 40])
[/input]
[output]
110
[/output]
[/test]
[test]
[input]
greatestNumber(3, [30, 90, 40])
[/input]
[output]
90
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
