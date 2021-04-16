# Problema 1: Password Reset

[slide hideTitle]
# Password Reset
[video src="https://videos.softuni.org/hls/02.fundamentals-objects-maps-strings/05.JS-Fundamentals-Exam-Prep/RO/Exam 3-2-password-Video-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


[code-task title="Password Reset" taskId="js-fundamentals-2-examPreparation-problem-1" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function passwordReset(input) {
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
Scrieți un program de resetare a parolei care efectuează o serie de comenzi pe un șir.

Mai întâi, veți primi **șirul pe care trebuie să îl modificați**, iar apoi, până când se primește comanda "**Done**", vi se vor da **comenzi** sub formă de text (un șir), împărțite printr-un singur spațiu.

Comenzile vor fi următoarele:

* Comanda "**TakeOdd**": 

Ia în considerare doar caracterele de pe **indici impari** și le concatenează împreună pentru a obține noua parolă primară și apoi o imprimă.

* Comanda "**Cut** \{**index**\} \{**length**\}": 

Taie un subșir cu lungimea dată din șirul original, începând de la indicele specificat, și îl imprimă pe consolă.

Apoi tipărește noua parolă primară pe o nouă linie.

Indicele și lungimea specificate vor fi întotdeauna valide.

* Comanda "**Substitute** \{**substring**\} \{**substitute**\}": 

Dacă **parola primară** conține subșirul dat, înlocuiește toate aparițiile sale cu textul de substituție dat și imprimă rezultatul.

Dacă nu, imprimați "**Nothing to replace!**".

## Intrare

* Veți primi șiruri până când se primește comanda "**Done**".

* Indicii comenzii "**Cut** \{**index**\} \{**length**\}" vor fi întotdeauna valizi

## Ieșire

* După primirea comenzii "**Done**", tipăriți: "**Your password is:** \{**password**\}"

## Exemplul Unu

**Intrare**:

passwordReset(['Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr', 'TakeOdd', 'Cut 15 3', 'Substitute :: -', 'Substitute \| \^', 'Done'])

**Ieșire**:

icecream\:\:hot\:\:summer

icecream\:\:hot\:\:mer

icecream\-hot\-mer

Nothing to replace!

Your password is: icecream\-hot\-mer

[hints]
[hint]
**Prima** comandă este `TakeOdd`

Șirul inițial este: "**Siiceercaroetavm**!:?:**ahsott**.:**i**:**nstupmomceqr**"

Luăm caracterele de pe indici **impari** 1, 3, 5 etc., iar rezultatul este: "**icecream**\:\:**hot**\:\:**summer**"
[/hint] 
[hint]
A **doua** comandă este `Cut 15 3`

Șirul este: "**icecream**\:\:**hot**\:\:**summer**"

Tăiem șubșirul care începe de la indicele 15 cu lungimea 3, care este "**sum**", îl eliminăm din parola primară și îl imprimăm.

Apoi, pe o nouă linie imprimăm noua parolă primară care rezultă: "**icecream**::**hot**::**mer**"
[/hint] 
[hint]
A **treia** comandă este `Substitute :: -`

Șirul inițial este: "**icecream**\:\:**hot**\:\:**summer**"

Înlocuim "\:\:" cu "-", iar rezultatul este: "**icecream**-**hot**-**mer**"
[/hint] 
[hint]
A **patra** comandă este `Substitute | ^`

"\|" nu este găsit nicăieri în parola primară.

Tipărim: "**Nothing to replace!**"
[/hint] 
[hint]
În cele din urmă, după ce primim comanda "**Done**", imprimăm parola care rezultă în formatul corespunzător.
[/hint] 
[/hints] 


## Exemplul Doi

**Intrare**:

passwordReset(['up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy', 'TakeOdd', 'Cut 18 2', 'Substitute ! \*\*\*', 'Substitute ? .!.', 'Done'])

**Ieșire**:

programming!is!funny

programming!is!fun

programming\*\*\*is\*\*\*fun

Nothing to replace!

Your password is: programming\*\*\*is\*\*\*fun

[/task-description]
[code-io /]
[tests]
[test open]
[input]
passwordReset(['Siiceercaroetavm!\:\?\:ahsott\.\:i\:nstupmomceqr', 'TakeOdd', 'Cut 15 3', 'Substitute \:\: \-', 'Substitute \| \^', 'Done'])
[/input]
[output]
icecream\:\:hot\:\:summer
icecream\:\:hot\:\:mer
icecream\-hot\-mer
Nothing to replace\!
Your password is\: icecream\-hot\-mer
[/output]
[/test]
[test open]
[input]
passwordReset(['up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy', 'TakeOdd', 'Cut 18 2', 'Substitute ! \*\*\*', 'Substitute ? .!.', 'Done'])
[/input]
[output]
programming!is!funny
programming!is!fun
programming\*\*\*is\*\*\*fun
Nothing to replace!
Your password is: programming\*\*\*is\*\*\*fun
[/output]
[/test]
[test]
[input]
passwordReset(['abcd', 'TakeOdd', 'Done'])
[/input]
[output]
bd
Your password is: bd
[/output]
[/test]
[test]
[input]
passwordReset(['abcdefg', 'TakeOdd'
'Done'])
[/input]
[output]
bdf
Your password is: bdf
[/output]
[/test]
[test]
[input]
passwordReset(['abcdefg', 'TakeOdd', 'Cut 0 2', 'Done'])
[/input]
[output]
bdf
f
Your password is: f
[/output]
[/test]
[test]
[input]
passwordReset(['abcdefg', 'TakeOdd', 'Substitute b y', 'Done'])
[/input]
[output]
bdf
ydf
Your password is: ydf
[/output]
[/test]
[test]
[input]
passwordReset(['abcdefg', 'TakeOdd', 'Substitute z y', 'Done'])
[/input]
[output]
bdf
Nothing to replace!
Your password is: bdf
[/output]
[/test]
[test]
[input]
passwordReset(['abcdefg', 'Cut 0 3', 'Done'])
[/input]
[output]
defg
Your password is: defg
[/output]
[/test]
[test]
[input]
passwordReset(['abcdefg', 'Cut 0 6', 'Done'])
[/input]
[output]
g
Your password is: g
[/output]
[/test]
[test]
[input]
passwordReset(['abcdefg', 'Cut 3 1', 'Done'])
[/input]
[output]
abcefg
Your password is: abcefg
[/output]
[/test]
[test]
[input]
passwordReset(['abcdefg', 'Cut 4 2', 'Done'])
[/input]
[output]
abcdg
Your password is: abcdg
[/output]
[/test]
[test]
[input]
passwordReset(['AABBCCDDEEFFGG', 'TakeOdd', 'Cut 2 3', 'Substitute B A', 'Done'])
[/input]
[output]
ABCDEFG
ABFG
AAFG
Your password is: AAFG
[/output]
[/test]
[test]
[input]
passwordReset(['AAABBBCCCDDDEEEFFFGGG', 'Cut 0 1', 'Cut 0 1', 'Cut 0 1', 'Cut 1 1', 'Cut 3 2', 'Substitute G Y', 'TakeOdd', 'Done'])
[/input]
[output]
AABBBCCCDDDEEEFFFGGG
ABBBCCCDDDEEEFFFGGG
BBBCCCDDDEEEFFFGGG
BBCCCDDDEEEFFFGGG
BBCDDDEEEFFFGGG
BBCDDDEEEFFFYYY
BDDEFFY
Your password is: BDDEFFY
[/output]
[/test]
[test]
[input]
passwordReset(['AAABBBCCCDDD', 'Cut 2 3', 'Substitute C J', 'Substitute Z M', 'TakeOdd', 'Done'])
[/input]
[output]
AABCCCDDD
AABJJJDDD
Nothing to replace!
AJJD
Your password is: AJJD
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
