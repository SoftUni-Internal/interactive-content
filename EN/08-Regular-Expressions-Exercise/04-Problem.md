[slide hideTitle]
# Problem: Star Enigma
[code-task title="Star Enigma" taskId="62851f82-c61f-4d6b-967b-e4646496f4c3" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You are tasked to create a program to **decrypt messages**.

You will receive **several messages, which are encrypted** using the legendary star enigma. 

You should **decrypt the messages**, following these rules:
- To properly decrypt a message, **you should count all the letters** [s, t, a, r] - **case insensitive and remove the count** from the current ASCII value of each symbol of the encrypted message.

**After decryption**:
- Each **message** should have **a planet name, population, attack type** ('A', as attack or 'D', as destruction) and **soldier count**.
- The **planet name starts after** '\@' and **contains only letters from the Latin alphabet**. 
- The **planet population starts after** ':' and **is an integer**.
- The **attack type** may be "A"(attack) or "D"(destruction) and **must be surrounded by** "!" (exclamation mark).
- The **soldier count starts after** "->" and **should be an integer**.

The **order in the message** should be: 
- **planet name -> planet population -> attack type -> soldier count**. 

Each part can be **separated from the others by any character except**: '\@', '-', '!', ':' and '>'.

### Output
**After decrypting all messages**, you should **print the decrypted information in the following format**:
- First print the attacked planets, then the destroyed planets.
- "Attacked planets: \{attackedPlanetsCount\}"
- "-> \{planetName1\}"
- ...
- "Destroyed planets: \{destroyedPlanetsCount\}"
- "-> \{planetName1\}"
- ...

The planets should be ordered by name **alphabetically**.

### Example
| **Input** | **Output** |
| --- | --- |
| 2 | Attacked planets: 1 |
| STCDoghudd4=63333$D$0A53333 | -> Alderaa |
| EHfsytsnhf?8555&I&2C9555SR | Destroyed planets: 1 |
| | -> Cantonica |

### Comments
We receive two messages, to decrypt them we calculate the key:
- First message has decryption key 3. 
    - So we substract from each characters code 3.
    - PQ@Alderaa1:30000!A!->20000
- The second message has key 5.
    - @Cantonica:3000!D!->4000NM
- Both messages are valid and they contain planet, population, attack type and soldiers count. 
- After decrypting all messages we print each planet according the format given.

### Example
| **Input** | **Output** |
| --- | --- |
| 3 | Attacked planets: 0 |
| tt(''DGsvywgerx>6444444444%H%1B9444 | Destroyed planets: 2 |
| GQhrr|A977777(H(TTTT | -> Cantonica |
| EHfsytsnhf?8555&I&2C9555SR | -> Coruscant |

### Comments
We receive three messages.
- Message one is decrypted with key 4:
    - pp$##@Coruscant:2000000000!D!->5000
- Message two is decrypted with key 7:
    - @Jakku:200000!A!MMMM
    - This is invalid message, missing soldier count, so we continue.
- The third message has key 5.
    - @Cantonica:3000!D!->4000NM

[/task-description]
[code-io /]
[tests]
[test open]
[input]
2
STCDoghudd4=63333\$D\$0A53333
EHfsytsnhf?8555&I&2C9555SR
[/input]
[output]
Attacked planets: 1
-> Alderaa
Destroyed planets: 1
-> Cantonica
[/output]
[/test]
[test open]
[input]
3
tt(''DGsvywgerx>6444444444%H%1B9444
GQhrr\|A977777(H(TTTT
EHfsytsnhf?8555&I&2C9555SR
[/input]
[output]
Attacked planets: 0
Destroyed planets: 2
-> Cantonica
-> Coruscant
[/output]
[/test]
[test]
[input]
2
@Khomm:100!D!->200
@Lwhekk:100!D!->200
[/input]
[output]
Attacked planets: 0
Destroyed planets: 2
-> Khomm
-> Lwhekk
[/output]
[/test]
[test]
[input]
2
GQhrr\|A977777(H(4E:777TTTT
@Khomm:100!D!->200
[/input]
[output]
Attacked planets: 1
-> Jakku
Destroyed planets: 1
-> Khomm
[/output]
[/test]
[test]
[input]
1
STCDoghudd4=63333\$D\$0A53333
[/input]
[output]
Attacked planets: 1
-> Alderaa
Destroyed planets: 0
[/output]
[/test]
[test]
[input]
2
STCDoghudd4=63333\$D\$0A53333
STCDoghudddd4=63333\$G\$0A53333
[/input]
[output]
Attacked planets: 1
-> Alderaa
Destroyed planets: 1
-> Alderaaaa
[/output]
[/test]
[test]
[input]
3
CWdwrrlqh&'(=533333\$D\$&'.0A633333
tt(''DGsvywgerx>6444444444%H%1B9444
GQhrr\|A977777(H(4E:777TTTT
[/input]
[output]
Attacked planets: 2
-> Jakku
-> Tatooine
Destroyed planets: 1
-> Coruscant
[/output]
[/test]
[test]
[input]
2
CWdwrrlqh&'(=533333\$D\$&'.0A433333
GQhrr\|A977777(H(4E:777TTTT
[/input]
[output]
Attacked planets: 2
-> Jakku
-> Tatooine
Destroyed planets: 0
[/output]
[/test]
[test]
[input]
5
TTBFciqdcj<722\#C\#/@622
TBEqtwuecpv<622\#C\#/@522
TBDgurkp<522\#C\#/@422
TBCnfgtccp<422\#C\#/@322
TTB\[cxkp<822\#F\#/@722
[/input]
[output]
Attacked planets: 4
-> Alderaan
-> Bespin
-> Coruscant
-> Dagobah
Destroyed planets: 1
-> Yavin
[/output]
[/test]
[test]
[input]
2
TTBFc\#iqdcj<722\#C\#/@622
TTB\[cx\#kp<822\#F\#/@722
[/input]
[output]
Attacked planets: 0
Destroyed planets: 0
[/output]
[/test]
[test]
[input]
3
TBCnfgtccccp<422\#C\#/@322
TTBFc\#iqdcj<722\#C\#/@622
TTB\[cx\#kp<822\#F\#/@722
[/input]
[output]
Attacked planets: 1
-> Alderaaaan
Destroyed planets: 0
[/output]
[/test]
[test]
[input]
5
TTBFciqdcj\#C\#<722/@622
TBEqtwuecpv/@522<622\#C\#
<522\#C\#/@422TBDgurkp
TBCnfgtccp<422\#C\#/@322
TTB\[cxkp<822\#F\#/@722
[/input]
[output]
Attacked planets: 1
-> Alderaan
Destroyed planets: 1
-> Yavin
[/output]
[/test]
[/tests]
[/code-task]
[/slide]