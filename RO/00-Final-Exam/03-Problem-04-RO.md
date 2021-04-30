# Problema 4: Food for Pets
[slide hideTitle]

# Food for Pets

[code-task title="Food for Pets" taskId="JavaScript-Programming-Basics-exam-Food-for-Pets" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function foodForPets(input) {
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
Annie are două animale de companie - un câine și o pisică.

Scrieți un program care să compileze **statistici** depsre hrana pentru animalele de companie, pentru un anumit număr de zile.

În fiecare zi, câinele și pisica mănâncă o **cantitate diferită** din hrana lor obișnuită.

La fiecare **trei zile primesc un premiu** - biscuiți.

Cantitatea de biscuiți reprezintă **10%** din totalul hranei consumate în ziua respectivă.

Programul vostru trebuie să tipărească **statistici despre hrana consumată**:

- Ce cantitate de biscuiți a fost consumată 

- Procentul de hrană consumată din cantitatea totală

- Procentul de hrană consumată de câine, respectiv de pisică


## Intrare
**Datele de intrare sunt introduse sub forma unei matrice de numere:**

- **Primul număr:**

Numărul de zile: un număr din intervalul \[1 ... 30\]

- **Al doilea număr:**

Cantitatea totală de mâncare: un număr din intervalul \[0.00 ... 10000.00\]

**Apoi, pentru fiecare zi, se citesc:**

- Cantitatea de mâncare consumată de către câine: un număr din intervalul \[10 ... 500\]

- Cantitatea de mâncare consumată de către pisică: un număr din intervalul \[10 ... 500\]


## Ieșire

Imprimați patru linii pe consolă:

- "**Total eaten biscuits:** \{**amount of biscuits eaten**\}**gr.**"

- "\{**percentage of food eaten**\}**% of the food has been eaten.**"

- "\{**percentage of food eaten by the dog**\}**% eaten from the dog.**"

- "\{**percentage of food eaten by the cat**\}**% eaten from the cat.**"

Cantitatea de **biscuiți consumați trebuie rotunjită la cel mai apropiat număr întreg.**

Procentul de hrană consumată **trebuie formatat la a doua cifră după punctul zecimal.**

## Exemplu

|**Intrare**|**Ieșire**|
| --- | --- |
|foodForPets([3, 500, 100, 30, 110, 25, 120, 35]) | Total eaten biscuits: 16gr.|
|| 84.00% of the food has been eaten. |
|| 78.57% eaten from the dog. |
|| 21.43% eaten from the cat. |



|**Intrare**|**Ieșire**|
| --- | --- |
|foodForPets([3, 1000, 300, 20, 100, 30, 110, 40]) | Total eaten biscuits: 15gr. |
|| 60.00% of the food has been eaten. |
|| 85.00% eaten from the dog. |
|| 15.00% eaten from the cat. |
 
[hints]
[hint]
Țineți cont de faptul că, odată la 3 zile, animalele de companie primesc un premiu.
[/hint]
[hint]
Tipăriți numărul total de biscuiți care au fost consumați. 

Determinați procentul de hrană consumată din cantitatea totală de hrană, atât de către câine, cât și de către pisică.
[/hint]
[/hints]


[/task-description]
[code-io /]
[tests]
[test open]
[input]
foodForPets([3, 1000, 300, 20, 100, 30, 110, 40])
[/input]
[output]
Total eaten biscuits: 15gr.
60.00% of the food has been eaten.
85.00% eaten from the dog.
15.00% eaten from the cat.
[/output]
[/test]
[test open]
[input]
foodForPets([3, 500, 100, 30, 110, 25, 120, 35])
[/input]
[output]
Total eaten biscuits: 16gr.
84.00% of the food has been eaten.
78.57% eaten from the dog.
21.43% eaten from the cat.
[/output]
[/test]
[test]
[input]
foodForPets([6, 6000, 200, 100, 300, 30, 100, 55, 156, 25, 426, 65, 200, 29])
[/input]
[output]
Total eaten biscuits: 38gr.
28.10% of the food has been eaten.
81.97% eaten from the dog.
18.03% eaten from the cat.
[/output]
[/test]
[test]
[input]
foodForPets([5, 5014, 236, 124, 365, 120, 146, 66, 208, 140, 369, 96])
[/input]
[output]
Total eaten biscuits: 21gr.
37.30% of the food has been eaten.
70.80% eaten from the dog.
29.20% eaten from the cat.
[/output]
[/test]
[test]
[input]
foodForPets([2, 700, 200, 33, 300, 50])
[/input]
[output]
Total eaten biscuits: 0gr.
83.29% of the food has been eaten.
85.76% eaten from the dog.
14.24% eaten from the cat.
[/output]
[/test]
[test]
[input]
foodForPets([7, 7000, 200, 33, 300, 50, 369, 258, 456, 246, 666, 66, 648, 215, 741, 231])
[/input]
[output]
Total eaten biscuits: 149gr.
63.99% of the food has been eaten.
75.46% eaten from the dog.
24.54% eaten from the cat.
[/output]
[/test]
[test]
[input]
foodForPets([7, 3000, 200, 33, 300, 50, 369, 25, 234, 24, 466, 66, 648, 21, 541, 23])
[/input]
[output]
Total eaten biscuits: 106gr.
100.00% of the food has been eaten.
91.93% eaten from the dog.
8.07% eaten from the cat.
[/output]
[/test]
[test]
[input]
foodForPets([5, 5584, 436, 224, 565, 220, 346, 166, 508, 148, 469, 95])
[/input]
[output]
Total eaten biscuits: 51gr.
56.89% of the food has been eaten.
73.15% eaten from the dog.
26.85% eaten from the cat.
[/output]
[/test]
[test]
[input]
foodForPets([3, 900, 176, 36, 159, 19, 399, 111])
[/input]
[output]
Total eaten biscuits: 51gr.
100.00% of the food has been eaten.
81.56% eaten from the dog.
18.44% eaten from the cat.
[/output]
[/test]
[test]
[input]
foodForPets([3, 2000, 300, 110, 365, 120, 444, 50])
[/input]
[output]
Total eaten biscuits: 49gr.
69.45% of the food has been eaten.
79.84% eaten from the dog.
20.16% eaten from the cat.
[/output]
[/test]
[test]
[input]
foodForPets([4, 5000, 666, 230, 156, 32, 400, 200, 500, 190])
[/input]
[output]
Total eaten biscuits: 60gr.
47.48% of the food has been eaten.
72.54% eaten from the dog.
27.46% eaten from the cat.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
