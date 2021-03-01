[slide]

# Ce sunt șirurile?

[vimeo-video]
[stream language="EN" videoId="489371415/8a09c2cbb3" default /]
[stream language="RO" videoId="489371415/8a09c2cbb3"  /]
[/video-vimeo]

Un șir este un tip de date care se folosește pentru a prezenta un **text** și care reprezintă o **secvență** de caractere.

Fiecare simbol are o **poziție** în șir și atunci când le conectăm, **se obține un text.**

Putem scoate **simboluri** individuale dintr-un șir.

Aici, de exemplu, luăm primul element din șir și lungimea acestuia.

``` js live
let myString = "Hello JavaScript!";

console.log(myString[0]);
console.log(myString.length);
```

[/slide]

[slide]


# Șirurile sunt neschimbătoare

[vimeo-video]
[stream language="EN" videoId="489371418/250eaf629b" default /]
[stream language="RO" videoId="489371418/250eaf629b"  /]
[/video-vimeo]


Țineți minte că putem să scoatem doar elemente individuale ale șirului, dar nu putem să modificăm elementele care se află înlăuntrul șirului.

Șirurile sunt neschimbătoare. 

În acest exemplu, încercăm să modificăm al patrulea simbol, care este `o`:

``` js live
let myString = "Hello JavaScript!";
console.log(myString);

myString[4] = 'Change fourth symbol!';
console.log(myString);  
```

Știm că putem schimba **datele conținute în variabile**, dar nu putem schimba simbolurile dintr-un șir.

[/slide]

[slide]

# Interpolarea șirurilor

[vimeo-video]
[stream language="EN" videoId="489371467/900551de56" default /]
[stream language="RO" videoId="489371467/900551de56"  /]
[/video-vimeo]

Înlocuirea **substituenților** cu valori înlăuntrul unui șir literal se numește **interpolarea** șirului. 

În JavaScript, literalele template-ului (acele șiruri aflate între apostroafe) și expresia `${expression}` ca substituent realizează interpolarea șirurilor.

``` js live
let name = "Rick";
let age = 18;
console.log(`Hello, my name is ${name}, I am ${age} years old.`);
```
[/slide]

[slide]

# Problemă: Concantenarea numelor

[vimeo-video]
[stream language="EN" videoId="489371465/3ddd050862" default /]
[stream language="RO" videoId="489371465/3ddd050862"  /]
[/video-vimeo]

[code-task title="Concantenate names" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function concatNames(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți un program care să execute următoarele: 
- Să primească două nume ca parametri ai unui șir și un delimitator
- Să tipărească numele alăturate cu delimitatorul

# Exemplu
  | **Date de intrare** | **Rezultat** |
| --- | --- |
|`['John', 'Smith', '->']`| John\-\>Smith |
|`['Jan', 'White', '<->']`|Jan\<\-\>White|

[/task-description]
[tests]
[test]
[input]
John
Smith
m
[/input]
[output]
JohnmSmith
[/output]
[/test]
[test]
[input]
Jan
White
k
[/input]
[output]
JankWhite
[/output]
[/test]
[test]
[input]
Jan
White
\-
[/input]
[output]
Jan\-White
[/output]
[/test]
[test]
[input]
Jan
White
\=
[/input]
[output]
Jan\=White
[/output]
[/test]
[test]
[input]
Jan
White
\,
[/input]
[output]
Jan\,White
[/output]
[/test]
[test]
[input]
Jan
White
p
[/input]
[output]
JanpWhite
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]

# Soluție: Concatenarea numelor

[vimeo-video]
[stream language="EN" videoId="489371497/73837bd2a6" default /]
[stream language="RO" videoId="489371497/73837bd2a6"  /]
[/video-vimeo]

[code-task title="Concantenate names" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function concatNames(input){
let firstName = input[0];
let lastName = input[1];
let delimiter = input[2];

console.log(`${firstName}${delimiter}${lastName}`);
}
```
[/code-editor]
[task-description]
# Descrierea problemei
Scrieți un program care să execute următoarele: 
- Să primească două nume ca parametri ai unui șir și un delimitator
- Să tipărească numele alăturate cu delimitatorul

# Exemplu
  | **Date de intrare** | **Rezultat** |
| --- | --- |
|`['John', 'Smith', '->']`| John\-\>Smith |
|`['Jan', 'White', '<->']`|Jan\<\-\>White|

[/task-description]
[tests]
[test]
[input]
John
Smith
m
[/input]
[output]
JohnmSmith
[/output]
[/test]
[test]
[input]
Jan
White
k
[/input]
[output]
JankWhite
[/output]
[/test]
[test]
[input]
Jan
White
\-
[/input]
[output]
Jan\-White
[/output]
[/test]
[test]
[input]
Jan
White
\=
[/input]
[output]
Jan\=White
[/output]
[/test]
[test]
[input]
Jan
White
\,
[/input]
[output]
Jan\,White
[/output]
[/test]
[test]
[input]
Jan
White
p
[/input]
[output]
JanpWhite
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]

# Problemă: Locul potrivit

[vimeo-video]
[stream language="EN" videoId="489371500/1d3c01f1f7" default /]
[stream language="RO" videoId="489371500/1d3c01f1f7"  /]
[/video-vimeo]

[code-task title="Right Place" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function rightPlace(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Descrierе:
Veți primi 3 parametri: **string** (**șir**), **char** (**caracter**), **string** (**șir**).

Primul șir va fi un cuvânt cu un **caracter lipsă** înlocuit cu underscore `_`.

Trebuie să **înlocuiți** spațiul lipsă semnalat de underscore din primul șir cu caracterul dat și să **comparați** rezultatul cu cel de-al doilea șir dat. 

Dacă sunt egale, ar trebui să tipăriți `Matched` (`Potrivire`), altfel veți tipări `Not Matched` (`Nepotrivire`).


# Exemplu
  | **Date de intrare** | **Rezultat** |
| --- | --- |
|\['Str_ng', 'I', 'Strong'\] | Not Matched |
|\['Str_ng', 'i', 'String'\] |Matched|

[/task-description]
[tests]
[test]
[input]
aa_av
n
aanav
[/input]
[output]
Matched
[/output]
[/test]
[test]
[input]
fd_sa
l
fdlsa
[/input]
[output]
Matched
[/output]
[/test]
[test]
[input]
ww_
w
www
[/input]
[output]
Matched
[/output]
[/test]
[test]
[input]
_ngsd
n
jkljkl
[/input]
[output]
Not Matched
[/output]
[/test]
[test]
[input]
gds_aaasng
m
Sjkl
[/input]
[output]
Not Matched
[/output]
[/test]
[test]
[input]
a_ff
i
jkll
[/input]
[output]
Not Matched
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]

[slide]


# Soluția problemei: Locul potrivit

[vimeo-video]
[stream language="EN" videoId="489371554/f8c9ad29ff" default /]
[stream language="RO" videoId="489371554/f8c9ad29ff"  /]
[/video-vimeo]
[code-task title="Right Place" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function rightPlace(input){
  let underScopedString = input[0];
  let char = input[1];
  let string = input[2];
  
  let newString = underScopedString.replace('_', char);

  if (newString === string) {
    console.log('Matched');
  } else {
    console.log('Not Matched');
  }
}
```
[/code-editor]
[task-description]
# Descriere
Veți primi 3 parametri: **string** (**șir**), **char** (**caracter**), **string** (**șir**).

Primul șir va fi un cuvânt cu un **caracter lipsă** înlocuit cu underscore `_`.

Trebuie să **înlocuiți** spațiul lipsă semnalat de underscore din primul șir cu caracterul dat și să **comparați** rezultatul cu cel de-al doilea șir dat.

Dacă sunt egale, ar trebui să tipăriți `Matched` (`Potrivire`), altfel veți tipări `Not Matched` (`Nepotrivire`).


# Exemplu
  | **Date de intrare** | **Rezultat** |
| --- | --- |
|\['Str_ng', 'I', 'Strong'\]| Not Matched |
|\['Str_ng', 'i', 'String'\]|Matched|

[/task-description]
[tests]
[test]
[input]
aa_av
n
aanav
[/input]
[output]
Matched
[/output]
[/test]
[test]
[input]
fd_sa
l
fdlsa
[/input]
[output]
Matched
[/output]
[/test]
[test]
[input]
ww_
w
www
[/input]
[output]
Matched
[/output]
[/test]
[test]
[input]
_ngsd
n
jkljkl
[/input]
[output]
Not Matched
[/output]
[/test]
[test]
[input]
gds_aaasng
m
Sjkl
[/input]
[output]
Not Matched
[/output]
[/test]
[test]
[input]
a_ff
i
jkll
[/input]
[output]
Not Matched
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]
[/slide]