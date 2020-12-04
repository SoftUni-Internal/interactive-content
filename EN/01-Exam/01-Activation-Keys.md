[slide]
# Problem 1. Activation Keys
[code-task title="Problem 1. Activation Keys" taskId="a711074e-87ab-436e-89fd-bfe15b215cab" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description

The first line of the input will be your raw activation key. It will consist of **letters and numbers only**.

After that, until the `Generate` command is given, you will be receiving strings with instructions for different operations that need to be performed upon the raw activation key.

There are several types of instructions, split by `>>>`:

* `Contains>>>{substring}` – checks if the raw activation key contains the given substring.

  - If it does prints: `{raw activation key} contains {substring}`.

  - If not, prints: `Substring not found!`

* `Flip>>>Upper/Lower>>>{startIndex}>>>{endIndex}`:

Changes the substring **between the given indices (the end index is exclusive)** to upper or lower case.

All given indexes will be valid.

Prints the activation key.

- `Slice>>>{startIndex}>>>{endIndex}`:

**Deletes** the characters between the start and end indices (**end index is exclusive**).

Both indices will be **valid**.

Prints the activation key.

### Input

The first line of the input will be string and it will consist of **letters and numbers only**.

After the first line, until the `Generate` command is given, you will be receiving strings.

### Output

After the `Generate` command is received, print:

`Your activation key is: {activation key}`

## Examples
| **Input** | **Output** |
| --- | --- |
| abcdefghijklmnopqrstuvwxyz | abghijklmnopqrstuvwxyz |
| Slice\>\>\>2\>\>\>6 | abgHIJKLMNOPQRstuvwxyz |
| Flip\>\>\>Upper\>\>\>3\>\>\>14 | abgHIjkLMNOPQRstuvwxyz |
| Flip\>\>\>Lower\>\>\>5\>\>\>7 | Substring not found! |
| Contains\>\>\>def | Substring not found! |
| Contains\>\>\>deF | Your activation key is: abgHIjkLMNOPQRstuvwxyz |
| Generate |  |

### Comments

* `Slice>>2>>6`:

ab**cdef**ghijklmnopqrstuvwxyz becomes `abghijklmnopqrstuvwxyz`

* `Flip>>>Upper>>>3>>>14`:

abg**hijklmnopqr**stuvwxyz becomes abg`HIJKLMNOPQR`stuvwxyz

* `Flip>>>Lower>>>5>>>7`:

abgHI**JK**LMNOPQRstuvwxyz becomes abgHI`jk`LMNOPQRstuvwxyz

* `Contains>>>def`:

`abgHIjkLMNOPQRstuvwxyz` does not contain `def`

* `Contains>>>deF`:

`abgHIjkLMNOPQRstuvwxyz` does not contain `deF`

The final activation key is `abgHIjkLMNOPQRstuvwxyz`

| **Input** | **Output** |
| --- | --- |
| 134softsf5ftuni2020rockz42 | 134sf5ftuni2020rockz42 |
| Slice\>\>\>3\>\>\>7 | Substring not found! |
| Contains\>\>\>-rock | Substring not found! |
| Contains\>\>\>-uni- | Substring not found! |
| Contains\>\>\>-rocks | 134SF5FTuni2020rockz42 |
| Flip\>\>\>Upper\>\>\>2\>\>\>8 | 134SF5ftuni2020rockz42 |
| Flip\>\>\>Lower\>\>\>5\>\>\>11 | Your activation key is: 134SF5ftuni2020rockz42 |
| Generate |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
abcdefghijklmnopqrstuvwxyz
Slice\>\>\>2\>\>\>6
Flip\>\>\>Upper\>\>\>3\>\>\>14
Flip\>\>\>Lower\>\>\>5\>\>\>7
Contains\>\>\>def
Contains\>\>\>deF
Generate
[/input]
[output]
abghijklmnopqrstuvwxyz
abgHIJKLMNOPQRstuvwxyz
abgHIjkLMNOPQRstuvwxyz
Substring not found!
Substring not found!
Your activation key is: abgHIjkLMNOPQRstuvwxyz
[/output]
[/test]
[test open]
[input]
134softsf5ftuni2020rockz42
Slice\>\>\>3\>\>\>7
Contains\>\>\>-rock
Contains\>\>\>-uni-
Contains\>\>\>-rocks
Flip\>\>\>Upper\>\>\>2\>\>\>8
Flip\>\>\>Lower\>\>\>5\>\>\>11
Generate
[/input]
[output]
134sf5ftuni2020rockz42
Substring not found!
Substring not found!
Substring not found!
134SF5FTuni2020rockz42
134SF5ftuni2020rockz42
Your activation key is: 134SF5ftuni2020rockz42
[/output]
[/test]
[test]
[input]
abc
Contains\>\>\>def
Generate
[/input]
[output]
Substring not found!
Your activation key is: abc
[/output]
[/test]
[test]
[input]
abc
Contains\>\>\>a
Contains\>\>\>b
Contains\>\>\>c
Contains\>\>\>A
Contains\>\>\>ab
Contains\>\>\>abc
Generate
[/input]
[output]
abc contains a
abc contains b
abc contains c
Substring not found!
abc contains ab
abc contains abc
Your activation key is: abc
[/output]
[/test]
[test]
[input]
abcdefghijklmnopqrstuvwxyzadsadasdadsdad
Flip\>\>\>Upper\>\>\>13\>\>\>28
Generate
[/input]
[output]
abcdefghijklmNOPQRSTUVWXYZADsadasdadsdad
Your activation key is: abcdefghijklmNOPQRSTUVWXYZADsadasdadsdad
[/output]
[/test]
[test]
[input]
ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789
Flip\>\>\>Lower\>\>\>5\>\>\>12
Generate
[/input]
[output]
ABCDEfghijklMNOPQRSTUVWXYZ0123456789
Your activation key is: ABCDEfghijklMNOPQRSTUVWXYZ0123456789
[/output]
[/test]
[test]
[input]
abcdefghijklmnopqrstuvwxyz0123456789
Slice\>\>\>2\>\>\>5
Generate
[/input]
[output]
abfghijklmnopqrstuvwxyz0123456789
Your activation key is: abfghijklmnopqrstuvwxyz0123456789
[/output]
[/test]
[test]
[input]
abcdefghijklmnopq-rstuvwxyz0123456789
Contains\>\>\>klm
Flip\>\>\>Upper\>\>\>4\>\>\>9
Generate
[/input]
[output]
abcdefghijklmnopq-rstuvwxyz0123456789 contains klm
abcdEFGHIjklmnopq-rstuvwxyz0123456789
Your activation key is: abcdEFGHIjklmnopq-rstuvwxyz0123456789
[/output]
[/test]
[test]
[input]
abcdefghijklmnopqrstuvwxyz0123456789
Slice\>\>\>2\>\>\>8
Contains\>\>\>defg
Contains\>\>\>789
Flip\>\>\>Upper\>\>\>3\>\>\>19
Flip\>\>\>Lower\>\>\>1\>\>\>11
Slice\>\>\>0\>\>\>2\>\>\>7\>\>\>10\>\>\>13\>\>\>21
Generate
[/input]
[output]
abijklmnopqrstuvwxyz0123456789
Substring not found!
abijklmnopqrstuvwxyz0123456789 contains 789
abiJKLMNOPQRSTUVWXYz0123456789
abijklmnopqRSTUVWXYz0123456789
ijklmnopqRSTUVWXYz0123456789
Your activation key is: ijklmnopqRSTUVWXYz0123456789
[/output]
[/test]
[/tests]
[/code-task]
[/slide]