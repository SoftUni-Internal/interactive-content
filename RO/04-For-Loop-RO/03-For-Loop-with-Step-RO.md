// sectionId: "Javascript::Programming-Basics::For-Loop::For-Loop-With-Step"

[slide hideTitle]

# Bucla For cu un Pas

[video src="https://videos.softuni.org/hls/javascript-basics/RO/04-For-Loop/JS-basics-for-18-19-loops-with-a-step-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În această secțiune vom oferi mai multe detalii cu privire la o parte specială și foarte importantă a buclei "**for**", **și anume pasul.**

**Pasul** este acea **parte** a construcției buclei care indică cum să fie incrementată sau decrementată valoarea variabilei principale.

Aceasta este declarată ultimă în corpul buclei for.

Foarte des, pasul are dimensiunea 1 și în acest caz, în loc să scriem `i += 1` sau `i -= 1`, putem folosi operatorii `i++` sau `i--`.

```js live
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

Dacă dorim ca pasul nostru să fie **diferit de 1**, atunci când **incrementăm**, folosim `i +=` + operaorul pentru dimensiunea pasului.

Cu un pas de 2, bucla ar arăta astfel:

```js live
for (let i = 0; i < 10; i += 2) {
  console.log(i);
}
```

S-ar putea să dorim să avem un **pas descrescător** - `i - =` + dimensiunea pasului.

În acest caz, trebuie să fim atenți la condiția finală pentru a evita **o buclă infinită**.

```js live
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
```

[/slide]

[slide hideTitle]

# Problemă cu Soluție: Number Ending With 7

[video src="https://videos.softuni.org/hls/javascript-basics/RO/04-For-Loop/JS-basics-for-21-solution-numbers-ending-in-7-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Number Ending with 7" taskId="pb-js-for-loop-Number-Ending-with-7" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function numbersEndingWith7(n) {
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

Creați un program care imprimă toate numerele care se termină cu 7, până la un număr dat **n**: 
- Veți primi un număr **n**
- Imprimați toate numerele solicitate, de la **7 până la n**

# Exemplu

| **Intrare**              | **Ieșire** |
| ---------------------- | ---------- |
| numbersEndingWith7(30) | 7          |
|                        | 17         |
|                        | 27         |

[/task-description]
[tests]
[test open]
[input]
numbersEndingWith7(30)
[/input]
[output]
7
17
27
[/output]
[/test]
[test]
[input]
numbersEndingWith7(40)
[/input]
[output]
7
17
27
37
[/output]
[/test]
[test]
[input]
numbersEndingWith7(35)
[/input]
[output]
7
17
27
[/output]
[/test]
[test]
[input]
numbersEndingWith7(80)
[/input]
[output]
7
17
27
37
47
57
67
77
[/output]
[/test]
[test]
[input]
numbersEndingWith7(130)
[/input]
[output]
7
17
27
37
47
57
67
77
87
97
107
117
127
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]

# Problemă cu Soluție: Exam Countdown

[video src="https://videos.softuni.org/hls/javascript-basics/RO/04-For-Loop/JS-basics-for-23-solution-exam-countdown-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Exam Countdown" taskId="pb-js-for-loop-Exam-Countdown" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function examCountdown(days) {
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

Creați un program care numără zilele rămase până la un examen:

- Primiți un număr întreg - numărul de **zile înainte de examen**
- După fiecare zi trecută, imprimați: "\{**numberOfDaysLeft**\} **days before the exam**"
- La final imprimați: "**The exam has come.**"

# Exemplu

| **Intrare**        | **Ieșire**             |
| ---------------- | ---------------------- |
| examCountdown(3) | 3 days before the exam |
|                  | 2 days before the exam |
|                  | 1 days before the exam |
|                  | The exam has come.     |

[/task-description]
[tests]
[test open]
[input]
examCountdown(3)
[/input]
[output]
3 days before the exam
2 days before the exam
1 days before the exam
The exam has come.
[/output]
[/test]
[test]
[input]
examCountdown(4)
[/input]
[output]
4 days before the exam
3 days before the exam
2 days before the exam
1 days before the exam
The exam has come.
[/output]
[/test]
[test]
[input]
examCountdown(5)
[/input]
[output]
5 days before the exam
4 days before the exam
3 days before the exam
2 days before the exam
1 days before the exam
The exam has come.
[/output]
[/test]
[test]
[input]
examCountdown(6)
[/input]
[output]
6 days before the exam
5 days before the exam
4 days before the exam
3 days before the exam
2 days before the exam
1 days before the exam
The exam has come.
[/output]
[/test]
[test]
[input]
examCountdown(7)
[/input]
[output]
7 days before the exam
6 days before the exam
5 days before the exam
4 days before the exam
3 days before the exam
2 days before the exam
1 days before the exam
The exam has come.
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
