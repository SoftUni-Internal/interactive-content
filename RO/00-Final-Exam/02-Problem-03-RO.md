# Problem 3: Energy Booster
[slide hideTitle]

# Energy Booster

[code-task title="Energy Booster" taskId="JavaScript-Programming-Basics-Energy-Booster" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function energyBooster(input) {
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

Începe sezonul de urcare a vârfurilor alpine și toți alpiniștii se aprovizionează cu bare energetice pentru alpinism.

Compania oferă **mici** și **mari** tăieturi cu **2 buc.** și **5 buc.** bare energetice, prețul unei bare depinde de fructul din care este fabricat.

În funcție de **dimensiunea tăieturii**, prețul pe numărul unei bare energetice este diferit.

De pe consolă se citesc fructele, mărimea pachetului `(small) 2 pcs.` sau `(big) 5 pcs.`.

De asemenea, veți primi **numărul de tăieri care sunt comandate.**

Scrieți un program care **calculează suma de plătit** pentru comandă.


| \- | Watermelon  | Mango | Pineapple   | Raspberry |
| :---:       |    :----:   |   :---:     |  :---:     | :---:     |
| 2 pcs. (small) | $56 pcs.  | $36.66 pcs. |$42.10 pcs. | $20 pcs.|
| 5 pcs. (big) | $28.70 pcs.  | $19.60 pcs. |$24.80 pcs. | $15.20 pcs.|

Pentru comenzi:

- De la **$400 până la $1.000 inclusiv, există o reducere de 15%**.

- Peste **$1.000 există o reducere de 50%**.

## Intrare

The input comes as an **array of which contains three elements:**

- **First Element:**  

Flavor, text with possibilities: **Watermelon**, **Mango**, **Pineapple** or **Raspberry**

- **Second Element:** 

Cut size, text with options: **small** or **big**

- **Third Element:** 

Number of ordered cuts: integer in the interval \[1 … 10000\]


## Ieșire

**O linie** este imprimată pe consolă:

- **Prețul de plătit**,**formatat la a doua cifră după punctul zecimal**, în următorul format: 

"\{**price**\} **dollars.**"

## Exemplu

|**Intrare**|**Ieșire**|
| --- | --- |
|energyBooster(['Pineapple', 'small', 1]) | 84.20 dollars. |
|energyBooster(['Raspberry', 'small', 50])|1000.00 dollars.|
|energyBooster(['Watermelon', 'big', '4']) | 487.90 dollars. |

[hints]
[hint]
Calculate the individual price for 1 pack of energy bars.
[/hint]
[hint]
Calculate the total price and check if there's a discount.
[/hint]
[hint]
If there is a discount, subtract it from the total price and print the correct output.
[/hint]
[/hints]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
energyBooster(['Watermelon', 'big', '4'])
[/input]
[output]
487.90 dollars.
[/output]
[/test]
[test open]
[input]
energyBooster(['Pineapple', 'small', 1])
[/input]
[output]
84.20 dollars.
[/output]
[/test]
[test open]
[input]
energyBooster(['Raspberry', 'small', 50])
[/input]
[output]
1000.00 dollars.
[/output]
[/test]
[test open]
[input]
energyBooster(['Mango', 'big', 8])
[/input]
[output]
666.40 dollars.
[/output]
[/test]
[test]
[input]
energyBooster(['Raspberry', 'small', 25])
[/input]
[output]
850.00 dollars.
[/output]
[/test]
[test]
[input]
energyBooster(['Raspberry', 'small', 10])
[/input]
[output]
340.00 dollars.
[/output]
[/test]
[test]
[input]
energyBooster(['Watermelon', 'big', 44])
[/input]
[output]
3157.00 dollars.
[/output]
[/test]
[test]
[input]
energyBooster(['Pineapple', 'small', 2])
[/input]
[output]
168.40 dollars.
[/output]
[/test]
[test]
[input]
energyBooster(['Mango', 'big', 10])
[/input]
[output]
833.00 dollars.
[/output]
[/test]
[test]
[input]
energyBooster(['Watermelon', 'big', 0])
[/input]
[output]
0.00 dollars.
[/output]
[/test]
[test]
[input]
energyBooster(['Pineapple', 'big', 77])
[/input]
[output]
4774.00 dollars.
[/output]
[/test]
[test]
[input]
energyBooster(['Watermelon', 'small', 3])
[/input]
[output]
336.00 dollars.
[/output]
[/test]
[test]
[input]
energyBooster(['Mango', 'small', 11])
[/input]
[output]
685.54 dollars.
[/output]
[/test]
[test]
[input]
energyBooster(['Pineapple', 'small', 10000])
[/input]
[output]
421000.00 dollars.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
