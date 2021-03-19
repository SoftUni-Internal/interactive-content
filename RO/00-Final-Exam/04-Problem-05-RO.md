# Problem 5: Care of Puppy

[slide]

# Descriere
Annie găsește un cățeluș de care să aibă grijă până când găseste pe cineva să-l adopte.

Mănâncă zilnic o anumită cantitate de mâncare.

Scrieți un program care să verifice dacă**cantitatea de mâncarea achiziționată pentru cățeluș**va fi suficientă**până când câinele va fi adoptat.**

# Ieșire

O linie este tipărită pe consolă:

- Dacă cantitatea de hrană **este suficientă** pentru a tipări `Food is enough! Leftovers: {leftover food} grams.` 

- Dacă cantitatea de mâncare este **insuficientă** pentru a tipări: `Food is not enough. You need {need the amount of food grams more.`


[code-task title="Care of Puppy" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(input) {
	// Write your code here
}
```
[/code-editor]
[task-description]

# Exemplu

| **Intrare**|**Ieșire**|
| --- | --- |
|`["4", "130" ,"345", "400", "180", "230", "120" ,"Adopted"]` | Food is enough! Leftovers: 2595 grams. |

# Comentarii

- Cantitatea **cumpărată** de mâncare este de `4 kg = 4 * 1000 = 4000 grams.`

- **Cantitatea totală de alimente** pe care cățelul a mâncat-o înainte de adopție a fost: `130 + 345 + 400 + 180 + 230 + 120 = 1405 grams.` 

- **Această cantitate este mai mică decât cele 4000 de grame achiziționate inițial:**

     - Mâncarea rămasă este: `4000 - 1405 = 2595 grams.`


# Mai multe exemple

|**Intrare**|**Ieșire**|
| --- | --- |
|`["3","1000","1000","1000", "Adopted"]` |Food is enough! Leftovers: 0 grams. |
|`[2,999,456,999,999,123,456,Adopted]` | Food is not enough. You need 2032 grams more. |

[/task-description]
[code-io /]
[tests]
[test]
[input]
4
500
600
700
800
Adopted
[/input]
[output]
Food is enough! Leftovers: 1400 grams.
[/output]
[/test]
[test]
[input]
4
1000
2000
3000
4000
Adopted
[/input]
[output]
Food is not enough. You need 6000 grams more.
[/output]
[/test]
[test]
[input]
3
120
120
120
120
150
180
340
560
Adopted
[/input]
[output]
Food is enough! Leftovers: 1290 grams.
[/output]
[/test]
[test]
[input]
1
200
300
400
200
Adopted
[/input]
[output]
Food is not enough. You need 100 grams more.
[/output]
[/test]
[test]
[input]
9
800
430
560
120
340
560
125
440
Adopted
[/input]
[output]
Food is enough! Leftovers: 5625 grams.
[/output]
[/test]
[test]
[input]
4
1000
340
120
356
1000
2345
100
450
Adopted
[/input]
[output]
Food is not enough. You need 1711 grams more.
[/output]
[/test]
[test]
[input]
2
1200
1200
1200
Adopted
[/input]
[output]
Food is not enough. You need 1600 grams more.
[/output]
[/test]
[test]
[input]
18
200
400
500
600
Adopted
[/input]
[output]
Food is enough! Leftovers: 16300 grams.
[/output]
[/test]
[test]
[input]
5
5000
1000
234
456
789
Adopted
[/input]
[output]
Food is not enough. You need 2479 grams more.
[/output]
[/test]
[test]
[input]
1
1000
Adopted
[/input]
[output]
Food is enough! Leftovers: 0 grams.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]