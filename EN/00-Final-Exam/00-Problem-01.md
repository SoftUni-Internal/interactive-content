# Problem 1: Study Materials
[slide hideTitle]
# Study Materials

[code-task title="Study materials" taskId="JavaScript-Programming-Basics-exam-Study-Materials" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function studyMaterials(input) {
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
# Description

The school year has already started and Annie has to buy a few packs of **pencils**, **markers**, and a **detergent** for cleaning the board. 

She is a regular customer of a bookstore, and there is a **discount** for her, which represents a **percentage** of the total.

Create a program, which calculates how much money Annie will have to **save** to pay the bill, keeping in mind the following price list:

- **A pack of pencils:** $5.80

- **A pack of markers:** $7.20

- **A liter of detergent**: $1.20 

## Input

The input comes as an **array of four numbers**:

- Number of pencil packages - Int in the interval \[0 ... 100\]

- Number of marker packages - Int in the interval \[0 ... 100\]

- Liters of detergent - Floating-point number in the interval \[0.00… 50.00\]

- Percentage discount - Int in the interval \[0 ... 100\]

## Output

Print to the console how much money Annie will need to pay her bill. 

The result should be **formatted** to the third decimal place.

## Example

| **Input** | **Output** |
| --- | --- |
|studyMaterials([4, 2, 5, 13])| 37.932 |
|studyMaterials([7, 8, 0.5, 45])|54.340|
|studyMaterials([2, 3, 2.5, 25])| 27.150 |

**Comments**

- Price for the **pencils**: 2 \* 5.80 = 11.60

- Price for the **markers**: 3 \* 7.20 = 21.60

- Price for the **detergent**: 2.5 \* 1.20 = 3.00

- **Total price:** 11.60 \+ 21.60 \+ 3.00 = 36.20

- **Price with discount:** 36.20 \– ((36.20 \* 25) \/ 100) = 27.150

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
