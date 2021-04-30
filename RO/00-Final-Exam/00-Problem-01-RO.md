# Problema 1: Study Materials
[slide hideTitle]
# Study Materials

[code-task title="Study materials" taskId="JavaScript-Programming-Basics-exam-Study-Materials" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function studyMaterials(input) {
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
Anul școlar a început deja și Annie trebuie să cumpere un anumit număr de **pachete de creioane**, **pachete de markere** și **detergent** pentru curățarea tablei.

Ea este un client obișnuit al unei librării și beneficiază de o **reducere**, care reprezintă un **procent** din prețul total.

Scrieți un program care să calculeze câți bani va trebui să **economisească** Annie pentru a plăti factura, ținând cont de următoarea listă de prețuri:

- **Un pachet de creioane:** $5.80

- **Un pachet de markere:** $7.20

- **Un litru de detergent:** $1.20 

## Intrare
Intrarea este dată ca o **matrice de patru numere**:

- Numărul pachetelor de creioane - număr întreg în intervalul \[0 ... 100\]

- Numărul pachetelor de markere - număr întreg în intervalul \[0 ... 100\]

- Litri de detergent - număr real în intervalul \[0.00 ... 50.00\]

- Reducerea procentuală - număr întreg în intervalul \[0 ... 100\]

## Ieșire

Imprimați pe consolă suma de care va avea nevoie Annie pentru a plăti factura. 

Rezultatul trebuie să fie **formatat** la a treia zecimală.

## Exemplu

|**Intrare**|**Ieșire**|
| --- | --- |
|studyMaterials([4, 2, 5, 13])| 37.932 |
|studyMaterials([7, 8, 0.5, 45])|54.340|
|studyMaterials([2, 3, 2.5, 25])| 27.150 |



[hints]
[hint]
Calculați prețul individual al creioanelor, al markerelor și al detergentului. 

După aceea, calculați prețul total.
[/hint]
[hint]
Determinați prețul final rezultat în urma aplicării reducerii.
[/hint]
[/hints]
 
[/task-description]
[code-io /]
[tests]
[test open]
[input]
studyMaterials([2, 3, 2.5, 25])
[/input]
[output]
27.150
[/output]
[/test]
[test open]
[input]
studyMaterials([4, 2, 5, 13])
[/input]
[output]
37.932
[/output]
[/test]
[test open]
[input]
studyMaterials([7, 8, 0.5, 45])
[/input]
[output]
54.340
[/output]
[/test]
[test]
[input]
studyMaterials([1, 8, 5.5, 40])
[/input]
[output]
42.000
[/output]
[/test]
[test]
[input]
studyMaterials([9, 9, 4, 15])
[/input]
[output]
103.530
[/output]
[/test]
[test]
[input]
studyMaterials([11, 2, 4.5, 16])
[/input]
[output]
70.224
[/output]
[/test]
[test]
[input]
studyMaterials([12, 12, 10, 5])
[/input]
[output]
159.600
[/output]
[/test]
[test]
[input]
studyMaterials([1, 1, 1, 1])
[/input]
[output]
14.058
[/output]
[/test]
[test]
[input]
studyMaterials([3, 11, 8, 50])
[/input]
[output]
53.100
[/output]
[/test]
[test]
[input]
studyMaterials([17, 19, 35.6, 45])
[/input]
[output]
152.966
[/output]
[/test]
[test]
[input]
studyMaterials([48, 62, 32.54, 18])
[/input]
[output]
626.355
[/output]
[/test]
[test]
[input]
studyMaterials([73, 84, 50.0, 65])
[/input]
[output]
380.870
[/output]
[/test]
[test]
[input]
studyMaterials([100, 100, 50, 100])
[/input]
[output]
0.000
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
