# Teme de acasa

[slide]
# Problem: Reveal Words
[code-task title="Reveal Words" taskId="js-advanced-text-processing-Reveal-Words" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function revealWords(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți o funcție, care primește doi parametri.

Primul parametru va fi un **șir care conține câteva cuvinte** separate prin `, `.

**Al doilea parametru va fi un șir** care conține șabloane care conțin `*`.

Găsiți cuvântul **exact cu aceeași lungime ca șablonul** și înlocuiți-l.

# Exemplu
   |**Intrare**|**Ieșire**|
| --- | --- |
|`['great', 'softuni is ***** place for learning new programming languages']`| softuni is great place for learning new programming languages |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
great
softuni is \*\*\*\*\* place for learning new programming languages
[/input]
[output]
softuni is great place for learning new programming languages
[/output]
[/test]
[test open]
[input]
great, learning
softuni is \*\*\*\*\* place for \*\*\*\*\*\*\*\* new programming languages
[/input]
[output]
softuni is great place for learning new programming languages
[/output]
[/test]
[test]
[input]
pesho
jdsakl as \*\*\*\*\* dsajkk hdsj
[/input]
[output]
jdsakl as pesho dsajkk hdsj
[/output]
[/test]
[test]
[input]
pesho, goshho
jdsakl as \*\*\*\*\* dsajkk \*\*\*\*\*\* hdsj
[/input]
[output]
jdsakl as pesho dsajkk goshho hdsj
[/output]
[/test]
[test]
[input]
pesho, goshho, stamatko
jdsakl as \*\*\*\*\* dsajkk \*\*\*\*\*\* hdsj \*\*\*\*\*\*\*\*
[/input]
[output]
jdsakl as pesho dsajkk goshho hdsj stamatko
[/output]
[/test]
[test]
[input]
pesho, goshho, stamatko, kiro
jdsakl \*\*\*\* as \*\*\*\*\* dsajkk \*\*\*\*\*\* hdsj \*\*\*\*\*\*\*\*
[/input]
[output]
jdsakl kiro as pesho dsajkk goshho hdsj stamatko
[/output]
[/test]
[test]
[input]
pesho, goshho, stamatko, kiro, b
jdsakl \*\*\*\* as \*\*\*\*\* dsajkk \*\*\*\*\*\* \* hdsj \*\*\*\*\*\*\*\*
[/input]
[output]
jdsakl kiro as pesho dsajkk goshho b hdsj stamatko
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Problemă: Modern Times of HashTag
[code-task title="Modern Times of HashTag" taskId="js-advanced-text-processing-Modern-Times-of HashTag" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function modernTimesOfHashTag(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
## Descriere
Intrarea va fi un **șir unic.**

Găsiți toate cuvintele speciale **începând cu** `#`.

Cuvântul nu este valid dacă are **orice altceva decât** literele.

Imprimați cuvintele pe care le-ați găsit fără etichetă, fiecare pe o nouă linie de intrare.

# Exemplu
   |**Intrare**|**Ieșire**|
| --- | --- |
|`[''Nowadays everyone uses # to tag a #special word in #socialMedia']`| special
socialMedia
 |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
Nowadays everyone uses \# to tag a \#special word in \#socialMedia
[/input]
[output]
special
socialMedia
[/output]
[/test]
[test]
[input]
hjahd hasjk ag dwgyw gdyag dgsydwu shusia \#jkdlsa dasjkfjkj \#dsdas
[/input]
[output]
jkdlsa
dsdas
[/output]
[/test]
[test]
[input]
hjag dgsydwu shusia \#545A dasjkfjkj \#sdas
[/input]
[output]
sdas
[/output]
[/test]
[test]
[input]
nj kwuei euie ruiw eop oerr \# \#sa
[/input]
[output]
sa
[/output]
[/test]
[test]
[input]
nj \#kwuei \#euiAAe \#32432\\$\\$\\$\\$ ruiw eop oerr \# \#sa
[/input]
[output]
kwuei
euiAAe
sa
[/output]
[/test]
[test]
[input]
nj \#nnj
[/input]
[output]
nnj
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Problemă: Extract File
[code-task title="Extract File" taskId="js-advanced-text-processing-Extract-File" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function extractFile(input){
  // Write your code here
}
```

[/code-editor]
[task-description]

## Descriere
Scrieți o funcție care primește un singur șir - calea către un fișier (caracterul `\` este scăpat)
Sarcina dvs. este de a scădea **numele fișierului** și extensia acestuia. (Feriți-vă de fișiere precum **template.bak.pptx**, deoarece **template.bak** ar trebui să fie numele fișierului, în timp ce pptx este extensia).

# Exemplu
   |**Intrare**|**Ieșire**|
| --- | --- |
|`['C:\\Internal\\training-internal\\Template.pptx']`| File name: Template |
||File extension: pptx|

   |**Intrare**|**Ieșire**|
| --- | --- |
|`['C:\\Projects\\Data-Structures\\LinkedList.cs']`|File name: LinkedList |
||File extension: cs|


[/task-description]
[code-io /]
[tests]
[test open]
[input]
C:\Internal\training-internal\Template.pptx
[/input]
[output]
File name: Template
File extension: pptx
[/output]
[/test]
[test open]
[input]
C:\Projects\Data-Structures\LinkedList.cs
[/input]
[output]
File name: LinkedList
File extension: cs
[/output]
[/test]
[test]
[input]
E:\P\JAVA\src\oop\Main.java
[/input]
[output]
File name: Main
File extension: java
[/output]
[/test]
[test]
[input]
E:\EX\csharp\CatShop.sln
[/input]
[output]
File name: CatShop
File extension: sln
[/output]
[/test]
[test]
[input]
E:\P\JAVA\src\oop\Bor.xml
[/input]
[output]
File name: Bor
File extension: xml
[/output]
[/test]
[test]
[input]
E:\Trash\MoreTrash\SoftUniExamsSolutions.txt
[/input]
[output]
File name: SoftUniExamsSolutions
File extension: txt
[/output]
[/test]
[test]
[input]
E:\TECH-SVN\Java\07-Objects-and-Classes\Exercise\07.Objects-and-Classes-Exercise.docx
[/input]
[output]
File name: 07.Objects-and-Classes-Exercise
File extension: docx
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Problemă: String Substring
[code-task title="String Substring" taskId="js-advanced-text-processing-String-Substring" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function stringSubstring(input){
  // Write your code here
}
```

[/code-editor]
[task-description]
## Descriere
Intrarea va fi dată ca **două** șiruri separate.

Scrieți o funcție care verifică dacă textul dat conține un cuvânt anume.

Comparația ar trebui să fie **nesensibilă la majuscule.**

După ce găsiți rezultatul, imprimați cuvântul și opriți programul.

Dacă nu găsiți cuvântul print `{word} not found!`


# Exemplu
   |**Intrare**|**Ieșire**|
| --- | --- |
|`['javascript', 'JavaScript is the best programming language']`| javascript |
|`['python','JavaScript is the best programming language']`| python not found\! |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
javascript
JavaScript is the best programming language
[/input]
[output]
javascript
[/output]
[/test]
[test open]
[input]
python
JavaScript is the best programming language
[/input]
[output]
python not found!
[/output]
[/test]
[test]
[input]
java
Java is the best programming language
[/input]
[output]
java
[/output]
[/test]
[test]
[input]
chushki
Jaba is chushki the best jaba programming language
[/input]
[output]
chushki
[/output]
[/test]
[test]
[input]
chushki
bla bla bla
[/input]
[output]
chushki not found!
[/output]
[/test]
[test]
[input]
drashki
bla bla bla drashki
[/input]
[output]
drashki
[/output]
[/test]
[test]
[input]
drashki
bla bla bla nodrashki
[/input]
[output]
drashki not found!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Problemă: Replace Repeating Chars
[code-task title="Replace Repeating Chars" taskId="js-advanced-text-processing-Replace-Repeating-Chars" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function replaceRepeatingChars(input){
  // Write your code here
}
```

[/code-editor]
[task-description]
## Descriere
Scrieți o funcție care primește un singur șir și **înlocuiește** orice secvență din **aceleași litere** cu o singură literă corespunzătoare.

# Exemplu
   |**Intrare**|**Ieșire**|
| --- | --- |
|`['aaaaabbbbbcdddeeeedssaa']`| abcdedsa |
|`['qqqwerqwecccwd']`| qwerqwecwd |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
aaaaabbbbbcdddeeeedssaa
[/input]
[output]
abcdedsa
[/output]
[/test]
[test open]
[input]
qqqwerqwecccwd
[/input]
[output]
qwerqwecwd
[/output]
[/test]
[test]
[input]
aaaaaaaa
[/input]
[output]
a
[/output]
[/test]
[test]
[input]
bbbbbbbbb
[/input]
[output]
b
[/output]
[/test]
[test]
[input]
aaaaabbbbbbbcccceeede
[/input]
[output]
abcede
[/output]
[/test]
[test]
[input]
kkddidkkgiiggbd
[/input]
[output]
kdidkgigbd
[/output]
[/test]
[test]
[input]
asdasdasd
[/input]
[output]
asdasdasd
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Problemă: Pascal-Case Splitter

[code-task title="Pascal-Case Splitter" taskId="js-advanced-text-processing-Pascal-Case-Splitter" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function splitter(input){
  // Write your code here
}
```

[/code-editor]
[task-description]
## Descriere
Veți primi un **singur șir.**

Acest șir este scris folosind formatul **PascalCase**.

Sarcina dvs. aici este de a împărți **fiecare cuvânt separat de șir.**

Imprimați-le împreună cu **o virgulă și un spațiu.**

# Exemplu
   |**Intrare**|**Ieșire**|
| --- | --- |
|`['SplitMeIfYouCanHaHaYouCantOrYouCan']`| Split, Me, If, You, Can, Ha, Ha, You, Cant, Or, You, Can |
|`['HoldTheDoor']`| Hold, The, Door |
|`['ThisIsSoAnnoyingToDo']`| This, Is, So, Annoying, To, Do |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
SplitMeIfYouCanHaHaYouCantOrYouCan
[/input]
[output]
Split, Me, If, You, Can, Ha, Ha, You, Cant, Or, You, Can
[/output]
[/test]
[test open]
[input]
HoldTheDoor
[/input]
[output]
Hold, The, Door
[/output]
[/test]
[test open]
[input]
ThisIsSoAnnoyingToDo
[/input]
[output]
This, Is, So, Annoying, To, Do
[/output]
[/test]
[test]
[input]
BdgshajTgdshDdsadasFF
[/input]
[output]
Bdgshaj, Tgdsh, Ddsadas, F, F
[/output]
[/test]
[test]
[input]
AhjbhbBsgasf
[/input]
[output]
Ahjbhb, Bsgasf
[/output]
[/test]
[test]
[input]
AhjbhbBsgasfCaXa
[/input]
[output]
Ahjbhb, Bsgasf, Ca, Xa
[/output]
[/test]
[test]
[input]
AhjbhbBsgasNNNMfCaXa
[/input]
[output]
Ahjbhb, Bsgas, N, N, N, Mf, Ca, Xa
[/output]
[/test]
[test]
[input]
Mhjbhb
[/input]
[output]
Mhjbhb
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Problemă: Cut and Reverse

[code-task title="Cut and Reverse" taskId="js-advanced-text-processing-cut-and-reverse" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function cutAndReverse(input){
  // Write your code here
}
```

[/code-editor]
[task-description]

## Descriere
Introducerea va fi un **șir unic.**

Scrieți o funcție care taie șirul dat **în jumătate** și inversați cele **două jumătăți.**

Imprimați fiecare jumătate pe o **linie separată.**

# Exemplu
|**Intrare**|**Ieșire**|
| --- | --- |
|`['tluciffiDsIsihTgnizamAoSsIsihT']`| ThisIsDifficult|
||ThisIsSoAmazing|

|**Intrare**|**Ieșire**|
| --- | --- |
|`['sihToDtnaCuoYteBIboJsihTtAdooGoSmI']`| IBetYouCantDoThis|
||ImSoGoodAtThisJob|

[/task-description]
[code-io /]
[tests]
[test open]
[input]
tluciffiDsIsihTgnizamAoSsIsihT
[/input]
[output]
ThisIsDifficult
ThisIsSoAmazing
[/output]
[/test]
[test open]
[input]
sihToDtnaCuoYteBIboJsihTtAdooGoSmI
[/input]
[output]
IBetYouCantDoThis
ImSoGoodAtThisJob
[/output]
[/test]
[test]
[input]
adahjfvgshfgeegy
[/input]
[output]
gvfjhada
ygeegfhs
[/output]
[/test]
[test]
[input]
uiuyiuyuiy
[/input]
[output]
iyuiu
yiuyu
[/output]
[/test]
[test]
[input]
uasdfgiuADFGAyiuKAJIDPyuiy
[/input]
[output]
AGFDAuigfdsau
yiuyPDIJAKuiy
[/output]
[/test]
[test]
[input]
tluciffiDsdssdIsihTgnizfamAohgfSsIsihT
[/input]
[output]
ThisIdssdsDifficult
ThisIsSfghoAmafzing
[/output]
[/test]
[test]
[input]
VDSHvdgshVSGDA
[/input]
[output]
gdvHSDV
ADGSVhs
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide]
# Rezultatele  Temei de acasă

[tasks-results/]

[/slide]