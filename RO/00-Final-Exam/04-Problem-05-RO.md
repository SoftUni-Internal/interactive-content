# Problem 5: Care of Puppy
[slide hideTitle]
# Care of Puppy

[code-task title="Care of Puppy" taskId="JavaScript-Programming-Basics-final-exam-Care-of-Puppy" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function careOfPuppy(input) {
	// Write your code here
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
Annie găsește un cățeluș de care să aibă grijă până când găseste pe cineva să-l adopte.

Mănâncă zilnic o anumită cantitate de mâncare.

Scrieți un program care să verifice dacă **cantitatea de mâncarea achiziționată pentru cățeluș** va fi suficientă **până când câinele va fi adoptat.**

## Intrare

**Datele de intrare sunt introduse sub forma unei matrice de elemente:**

- **Primul Element:**

**Cantitatea de mâncare achiziționată pentru cățel, exprimată în kilograme**: un număr întreg din intervalul \[1  ... 100\]

- Fiecare element care urmează, până la introducerea comenzii "**Adopted**", va reprezenta **cantitatea de mâncare consumată de cățel la fiecare masă, exprimată în grame**, un număr întreg din intervalul \[10 ... 1000\]

## Ieșire

Se printează o linie în consolă:

- Dacă avem o cantitate de mâncare cu mențiunea **is enough**, se printează:

"**Food is enough! Leftovers:** \{**leftover food**\} **grams.**" 

- Dacă avem o cantitate de mâncare cu mențiunea **not enough**, se printează:

"**Food is not enough. You need** \{**need the amount of food**\} **grams more.**"

## Exemplu

| **Intrare**|**Ieșire**|
| --- | --- |
|careOfPuppy([4, 130, 345, 400, 180, 230, 120, 'Adopted']) | Food is enough! Leftovers: 2595 grams. |
|careOfPuppy([2, 999, 456, 999, 999, 123, 456, 'Adopted']) | Food is not enough. You need 2032 grams more. |
|careOfPuppy([3, 1000, 1000, 1000, 'Adopted']) | Food is enough! Leftovers: 0 grams. |
 
[hints]
[hint]
Calculați cantitatea totală de mâncare, exprimată în grame. 

Apoi, determinați cantitatea totală de mâncare consumată de către cățel înainte ca acesta să fie adoptat.
[/hint]
[hint]
Verificați dacă a mai rămas mâncare și printați datele de ieșire corespunzătoare.
[/hint]
[/hints]


[/task-description]
[code-io /]
[tests]
[test open]
[input]
careOfPuppy([4, 130, 345, 400, 180, 230, 120, 'Adopted'])
[/input]
[output]
Food is enough! Leftovers: 2595 grams.
[/output]
[/test]
[test open]
[input]
careOfPuppy([3, 1000, 1000, 1000, 'Adopted'])
[/input]
[output]
Food is enough! Leftovers: 0 grams.
[/output]
[/test]
[test open]
[input]
careOfPuppy([2, 999, 456, 999, 999, 123, 456, 'Adopted'])
[/input]
[output]
Food is not enough. You need 2032 grams more.
[/output]
[/test]
[test]
[input]
careOfPuppy([4, 500, 600, 700, 800, 'Adopted'])
[/input]
[output]
Food is enough! Leftovers: 1400 grams.
[/output]
[/test]
[test]
[input]
careOfPuppy([4, 1000, 2000, 3000, 4000, 'Adopted'])
[/input]
[output]
Food is not enough. You need 6000 grams more.
[/output]
[/test]
[test]
[input]
careOfPuppy([3, 120, 120, 120, 120, 150, 180, 340, 560, 'Adopted'])
[/input]
[output]
Food is enough! Leftovers: 1290 grams.
[/output]
[/test]
[test]
[input]
careOfPuppy([1, 200, 300, 400, 200, 'Adopted'])
[/input]
[output]
Food is not enough. You need 100 grams more.
[/output]
[/test]
[test]
[input]
careOfPuppy([9, 800, 430, 560, 120, 340, 560, 125, 440, 'Adopted'])
[/input]
[output]
Food is enough! Leftovers: 5625 grams.
[/output]
[/test]
[test]
[input]
careOfPuppy([4, 1000, 340, 120, 356, 1000, 2345, 100, 450, 'Adopted'])
[/input]
[output]
Food is not enough. You need 1711 grams more.
[/output]
[/test]
[test]
[input]
careOfPuppy([2, 1200, 1200, 1200, 'Adopted'])
[/input]
[output]
Food is not enough. You need 1600 grams more.
[/output]
[/test]
[test]
[input]
careOfPuppy([18, 200, 400, 500, 600, 'Adopted'])
[/input]
[output]
Food is enough! Leftovers: 16300 grams.
[/output]
[/test]
[test]
[input]
careOfPuppy([5, 5000, 1000, 234, 456, 789, 'Adopted'])
[/input]
[output]
Food is not enough. You need 2479 grams more.
[/output]
[/test]
[test]
[input]
careOfPuppy([1, 1000, 'Adopted'])
[/input]
[output]
Food is enough! Leftovers: 0 grams.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
