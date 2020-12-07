# Problem: Nether Realms

[slide]
# Video

[vimeo-video]
[stream language="EN" videoId="421821336" default /]
[stream language="RO" videoId="436028985"  /]
[/video-vimeo]
[/slide]

[slide hideTitle]
# Problem: Nether Realms
[code-task title="Nether Realms" taskId="b906fb25-6321-44d0-bde6-80b88937d198" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Mighty battle is coming. 

In the stormy Nether Realms, demons are fighting against each other for supremacy in a duel from which only one will survive. 

Your job, however, is not so exciting. 

You are assigned to **sign in all the participants** in the Nether Realm's mighty battle's demon book, which of course is **sorted alphabetically**. 

A demon's name contains **his health and his damage**. 

The **sum of the ASCII codes of all characters** (excluding numbers (0-9), arithmetic symbols ('+', '-', '*', '/') and **delimiter do**t ('.')) **gives a demon's total health**. 

The **sum of all numbers in his name forms his base damage**. 

Note that you should consider the **plus** '+' and **minus** '-' signs (e.g. +10 is 10 and -10 is -10). 

However, there are **some symbols** ('\*' and '/') that **can further alter the base damage by multiplying or dividing it by 2** (e.g. in the name "m15\*/c-5.0", the base damage is 15 + (-5.0) = 10 and then **you need to multiply it by 2** (e.g. 10 \* 2 = 20) and **then divide it by 2** (e.g. 20 / 2 = 10)). 

So, **multiplication and division are applied only after all numbers are included in the calculation** and in the order they appear in the name. 

You will get **all demons on a single line**, **separated by commas and zero or more blank spaces**. 

Sort them in **alphabetical order and print their names** along their **health and damage**. 

### Input
- The input will be read from the console. 
- The input consists of a single line containing all demon names separated by commas and zero or more spaces in the format:
    - "\{demon name\}, \{demon name\}, … \{demon name\}"

### Output
- Print all demons sorted by their name in ascending order, each on a separate line in the format:
    - "\{demon name\} - \{health points\} health, \{damage points\} damage"

### Constraints
- A demon's name will contain at least one character
- A demon's name cannot contain blank spaces ' ' or commas ','
- A floating-point number will always have digits before and after its decimal separator
- Number in a demon's name is considered everything that is a valid integer or floating point number (with dot '.' used as separator). 
    - For example, all these are valid numbers: '4', '+4', '-4', '3.5', '+3.5', '-3.5' 

### Example
| **Input** | **Output** |
| --- | --- |
| M3ph-0.5s-0.5t0.0** | M3ph-0.5s-0.5t0.0** - 524 health, 8.00 damage |

### Comments
- M3ph-0.5s-0.5t0.0**:
    - Health = 'M' + 'p' + 'h' + 's' + 't' = 524 health.
    - Damage = (3 + (-0.5) + (-0.5) + 0.0) * 2 * 2 = 8 damage.

### Example
| **Input** | **Output** |
| --- | --- |
| M3ph1st0**, Azazel | Azazel - 615 health, 0.00 damage  |
| | M3ph1st0** - 524 health, 16.00 damage |

### Comments
- Azazel: 
    - Health - 'A' + 'z' + 'a' + 'z' + 'e' + 'l' = 615 health. Damage - no digits = 0 damage.
- M3ph1st0**:
    - Health - 'M' + 'p' + 'h' + 's' + 't' = 524 health.
    - Damage - (3 + 1 + 0) * 2 * 2 = 16 damage.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
M3ph-0.5s-0.5t0.0**
[/input]
[output]
M3ph-0.5s-0.5t0.0** - 524 health, 8.00 damage
[/output]
[/test]
[test open]
[input]
M3ph1st0**, Azazel
[/input]
[output]
Azazel - 615 health, 0.00 damage 
M3ph1st0** - 524 health, 16.00 damage
[/output]
[/test]
[test]
[input]
Gos/ho
[/input]
[output]
Gos/ho - 512 health, 0.00 damage
[/output]
[/test]
[test]
[input]
Leopold   ,    Merrie , Goldham,     Stephen   ,     Rodgers,Bob
[/input]
[output]
Bob - 275 health, 0.00 damage
Goldham - 700 health, 0.00 damage
Leopold - 719 health, 0.00 damage
Merrie - 612 health, 0.00 damage
Rodgers - 726 health, 0.00 damage
Stephen - 727 health, 0.00 damage
[/output]
[/test]
[test]
[input]
D0novan , P1er, Alfons000, Mav3r1ck   , Garf13ld33
[/input]
[output]
Alfons000 - 611 health, 0.00 damage
D0novan - 614 health, 0.00 damage
Garf13ld33 - 592 health, 46.00 damage
Mav3r1ck - 612 health, 4.00 damage
P1er - 295 health, 1.00 damage
[/output]
[/test]
[test]
[input]
F3.0R0.3D0.5, K0.0TL1.1N, Z3R0.0303, F3RD1NAND
[/input]
[output]
F3.0R0.3D0.5 - 220 health, 3.80 damage
F3RD1NAND - 509 health, 4.00 damage
K0.0TL1.1N - 313 health, 1.10 damage
Z3R0.0303 - 172 health, 3.03 damage
[/output]
[/test]
[test]
[input]
F-3.0R3D0.5, K-0.0TL1.1N, Z3R-0.0303, F-3RD1NAND
[/input]
[output]
F-3.0R3D0.5 - 220 health, 0.50 damage
F-3RD1NAND - 509 health, -2.00 damage
K-0.0TL1.1N - 313 health, 1.10 damage
Z3R-0.0303 - 172 health, 2.97 damage
[/output]
[/test]
[test]
[input]
G0SH0  , P3.666SH-0.666, AP3.666SH0.666   , G0.056-0.56O65
[/input]
[output]
AP3.666SH0.666 - 300 health, 4.33 damage
G0.056-0.56O65 - 150 health, 64.50 damage
G0SH0 - 226 health, 0.00 damage
P3.666SH-0.666 - 235 health, 3.00 damage
[/output]
[/test]
[test]
[input]
***a/// , ***b///  , ***c///
[/input]
[output]
***a/// - 97 health, 0.00 damage
***b/// - 98 health, 0.00 damage
***c/// - 99 health, 0.00 damage
[/output]
[/test]
[test]
[input]
912345678912.2**/-468.3a  , 0123456789.3*/b ,  0123456789.99999*/c
[/input]
[output]
0123456789.3*/b - 98 health, 123456789.30 damage
0123456789.99999*/c - 99 health, 123456790.00 damage
912345678912.2**/-468.3a - 97 health, 1824691356887.80 damage
[/output]
[/test]
[test]
[input]
1.1!@2.2\#\$3.999%^0.01&*(0.22)?0.3/* , d0.3r0.2o0.1b0.0, k0.0rab0.02a0.5*    ,      fr0002d0.2*/
[/input]
[output]
1.1!@2.2\#\$3.999%^0.01&*(0.22)?0.3/* - 481 health, 15.66 damage
d0.3r0.2o0.1b0.0 - 423 health, 0.60 damage
fr0002d0.2*/ - 316 health, 2.20 damage
k0.0rab0.02a0.5* - 513 health, 1.04 damage
[/output]
[/test]
[/tests]
[/code-task]
[/slide]