# Problema 3: Rapel de energie

[slide]

# Descriere

Începe sezonul de urcare a vârfurilor alpine și toți alpiniștii se aprovizionează cu bare energetice pentru alpinism.

Compania oferă **mici** și **mari** tăieturi cu **2 buc.** și **5 buc.** bare energetice, prețul unei bare depinde de fructul din care este fabricat.

În funcție de **dimensiunea tăieturii**, prețul pe numărul unei bare energetice este diferit.

De pe consolă se citesc fructele, mărimea pachetului `(small) 2 pcs.` sau `(big) 5 pcs.`.

De asemenea, veți primi **numărul de tăieri care sunt comandate.**

Scrieți un program care **calculează suma de plătit** pentru comandă.


| \- | Watermelon  | Mango | Pineapple   | Raspberry |
| :---:       |    :----:   |   :---:     |  :---:     | :---:     |
| `2 pcs. (small)` | $56 pcs.  | $36.66 pcs. |$42.10 pcs. | $20 pcs.|
| `5 pcs. (big)`  | $28.70 pcs.  | $19.60 pcs. |$24.80 pcs. | $15.20 pcs.|

Pentru comenzi:

- De la **400 $ până la 1.000 $ inclusiv, există o reducere de 15 \%**.

- Peste **1.000 USD există o reducere de 50 \%**.

# Intrare

Trei rânduri sunt citite de pe consolă

- Fructe - text cu posibilități: `Watermelon`, `Mango`, `Pineapple` sau `Raspberry`

- Dimensiunea setului - text cu opțiuni: `small` sau `big`

- Numărul de seturi ordonate - număr întreg în intervalul \[1 ... 10000\]


# Ieșire

**O linie** este imprimată pe consolă:

- **Prețul de plătit**,**formatat la a doua cifră după punctul zecimal**, în următorul format: `{price} dollars.`


[code-task title="Energy Booster" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
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
|`["Watermelon", "big", "4"]` | 487.90 dollars. |

# Comentarii

- Prețul unui pachet mare de bare de pepene verde este `5 * 28.70 = $143.50`

- Prețul a 4 seturi: `$574`

- Clientul primește o reducere de 15 \%: `400 <= 574 <= 1000`

- `15% from 574 = $86.1 discount`

- Preț final: `574 - 86.1 = $487.9`

# Mai multe exemple

|**Intrare**|**Ieșire**|
| --- | --- |
|`["Pineapple", "small", "1"]` | 84.20 dollars. |
|`["Raspberry", "small", "50"]` | 1000.00 dollars. |
|`["Mango", "big", "8"]` | 1000.00 dollars. |

[/task-description]
[code-io /]
[tests]
[test]
[input]
Raspberry
small
25
[/input]
[output]
850.00 dollars.
[/output]
[/test]
[test]
[input]
Raspberry
small
10
[/input]
[output]
340.00 dollars.
[/output]
[/test]
[test]
[input]
Watermelon
big
44
[/input]
[output]
3157.00 dollars.
[/output]
[/test]
[test]
[input]
Mango
big
10
[/input]
[output]
833.00 dollars.
[/output]
[/test]
[test]
[input]
Watermelon
big
0
[/input]
[output]
0.00 dollars.
[/output]
[/test]
[test]
[input]
Pineapple
big
77
[/input]
[output]
4774.00 dollars.
[/output]
[/test]
[test]
[input]
Watermelon
small
3
[/input]
[output]
336.00 dollars.
[/output]
[/test]
[test]
[input]
Mango
small
11
[/input]
[output]
685.54 dollars.
[/output]
[/test]
[test]
[input]
Pineapple
small
10000
[/input]
[output]
421000.00 dollars.
[/output]
[/test]
[test]
[input]
Mango
big
8
[/input]
[output]
666.40 dollars.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]