# Problem 1: Study Materials

[slide]

# Descriere
Anul școlar a început deja și Annie trebuie să cumpere un anumit număr de**pachete de creioane**,**pachete de markere**și un** detergent**pentru curățarea plăcii.

Este un client obișnuit al unei librării și există o**reducere**pentru ea, care reprezintă un**procent**din total.

Scrieți un program care să calculeze câți bani va trebui să** economisească**Annie pentru a plăti factura, ținând cont de următoarea listă de prețuri:

- **Pachet de creioane:** 5,80 USD

- **Markere:** 7,20 USD

- Un**litru de detergent**: 1,20 USD

# Intrare
Patru numere sunt citite de pe consolă:

- Numărați pachetele cu creioane. Număr întreg în intervalul \[0 ... 100\]

- Numărați pachetele de markeri. Număr întreg în intervalul \[0 ... 100\]

- Litri de detergent pentru curățarea plăcii. Număr real în intervalul \[0,00 ... 50,00\]

- Reducerea procentuală. Număr întreg în intervalul \[0 ... 100\]

# Ieșire

Imprimați pe consolă câți bani va avea Annie pentru a-și plăti factura. Rezultatul trebuie să fie **formatat** la a treia zecimală.

[code-task title="Study materials" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(input) {
	// Write your code here
}
```
[/code-editor]
[task-description]

# Exemplu

|**Intrare**|**Ieșire**|
| --- | --- |
|`["2", "3", "2.5", "25"]` | 27.150 |

# Comentarii

- Preț pentru**creioane**: `2 * 5.80 = 11.60`

- Preț pentru**marcatori**: `3 * 7.20 = 21.60`

- Preț pentru**detergent**: `2.5 * 1.20 = 3.00`

- **Preț total:** `11.60 + 21.60 + 3.00 = 36.20`

- **Preț cu reducere:** `36.20 – ((36.20 * 25) / 100) = 27.150`

# Mai multe exemple

|**Intrare**|**Ieșire**|
| --- | --- |
|`["4", "2", "5", "13"]` | 37.932 |
|`["7, "8", "0.5", "45"]` | 54.340 |
 
[/task-description]
[code-io /]
[tests]
[test]
[input]
1
8
5.5
40
[/input]
[output]
42.000
[/output]
[/test]
[test]
[input]
9
9
4
15
[/input]
[output]
103.530
[/output]
[/test]
[test]
[input]
11
2
4.5
16
[/input]
[output]
70.224
[/output]
[/test]
[test]
[input]
12
12
10
5
[/input]
[output]
159.600
[/output]
[/test]
[test]
[input]
1
1
1
1
[/input]
[output]
14.058
[/output]
[/test]
[test]
[input]
3
11
8
50
[/input]
[output]
53.100
[/output]
[/test]
[test]
[input]
17
19
35.6
45
[/input]
[output]
152.966
[/output]
[/test]
[test]
[input]
48
62
32.54
18
[/input]
[output]
626.355
[/output]
[/test]
[test]
[input]
73
84
50.0
65
[/input]
[output]
380.870
[/output]
[/test]
[test]
[input]
100
100
50
100
[/input]
[output]
0.000
[/output]
[/test]
[/tests]
[/code-task]
[/slide]