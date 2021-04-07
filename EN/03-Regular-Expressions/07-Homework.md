# Homework

[slide hideTitle]

# Problem: Furniture

[code-task title="Furniture" taskId="Java-Fundamentals-2-Regular-Expressions-Furniture" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program that **calculates the total cost** of all bought furniture.

You will be given some lines of input until you receive the **Purchase** command. 

A line is considered to be **valid** if it is in the following format:
- "\>\>\{furniture name\}\<\<\{price\}!\{quantity\}"

The price can be a **floating-point** number or an **integer** number. 

You should store the **names of the furniture** and the **total price**. 

In the end, you should print out the **names of all bought furniture**, each on a new line in the following format:

"Bought furniture:

\{1st name\}

\{2nd name\}

…"

**On the last line** print out the following message: 
- "Total money spend: \{spend money\}" 

Note that all numbers should be **formatted** to the second digit after the decimal point.


### Example
| **Input** | **Output** |
| --- | --- |
| >>Sofa<<312.23!3 | Bought furniture: |
| >>TV<<300!5 | Sofa |
| >Invalid<<!5 | TV |
| Purchase | Total money spend: 2436.69 |

### Comments
- Only the **Sofa** and the **TV** are valid items 
- For each one of them, we **multiply** the price by the quantity
- We print out the result

[/task-description]
[code-io /]
[tests]
[test open]
[input]
>>Sofa<<312.23!3
>>TV<<300!5
>Invalid<<!5
Purchase
[/input]
[output]
Bought furniture:
Sofa
TV
Total money spend: 2436.69
[/output]
[/test]
[test]
[input]
>>Televizor<<312.23!3
>>Monitor<<300!5
>>Invalid<<<<!5
>>Sink<<220!10
>>>>>>Invalid<<!5
Purchase
[/input]
[output]
Bought furniture:
Televizor
Monitor
Sink
Total money spend: 4636.69
[/output]
[/test]
[test]
[input]
>Invalid<<!5
>Invalid<<!5
>Invalid<<!5
Purchase
[/input]
[output]
Bought furniture:
Total money spend: 0.00
[/output]
[/test]
[test]
[input]
>>Sofa<<316.12!10
>>Couch<<31!12
>>Table<<31!12
>Masichka<<5
Purchase
[/input]
[output]
Bought furniture:
Sofa
Couch
Table
Total money spend: 3905.20
[/output]
[/test]
[test]
[input]
>>Sofa<<312.23!3.66
>>Sofa<<312.23!3.66
>>Sofa<<312.23!3.66
>>Sofa<<312.23!3.66
>>Sofa<<312.23!3.66
Purchase
[/input]
[output]
Bought furniture:
Sofa
Sofa
Sofa
Sofa
Sofa
Total money spend: 4683.45
[/output]
[/test]
[test]
[input]
>>Laptop<<312.2323!3
>>TV<<300.21314!5
>Invalid<<!5
>>TV<<300.21314!20
>>Invalid<!5
>>TV<<30.21314!5
>>Invalid<<!!5
Purchase
[/input]
[output]
Bought furniture:
Laptop
TV
TV
TV
Total money spend: 8593.09
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Race
[code-task title="Race" taskId="Java-Fundamentals-2-Regex-Race" executionType="tests-execution" executionStrategy="java-code"  requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Create a program that processes information about a race.

On the first line, you will be given a **list of participants**, separated by a comma and a single white space (", ").

On the next lines, until you receive the "end of race" command, you will be given some info that will represent some **alphanumeric characters**.

There could be **some extra characters that you should ignore**.


The **name** of the person is formed by **concatenating all letters**. 
The **distance** that each person ran is calculated by **summing all of the digits**.

For example: "G!32e%o7r#32g$235@!2e".

The name of the person is **George** and he ran **29 km**.

You should store the information about the person only if **the list of racers contains the name** of this person.

If you receive the **same person more than once**, just add the new distance to the old distance he has run.

In the end, print out the **top 3** racers ordered by the distance they have run in **descending order** in the following format:

"1st place: \{first racer\}

2nd place: \{second racer\}

3rd place: \{third racer\}"

### Example
| **Input** | **Output** |
| --- | --- |
| George, Peter, Bill, Tom | 1st place: George |
| G4e@55or%6g6!68e!!@ | 2nd place: Peter |
| R1@!3a$y4456@ | 3rd place: Tom |
| B5@i@#123ll | |
| G@e54o$r6ge# | |
| 7P%et^#e5346r | |
| T$o553m&6 | |
| end of race | |

### Comments
- On the third line, we have **Ray**
- He is not in the list of participants, so we ignore him
- The other people are in the list of participants
- **George** has run a total of **55** km, **Peter** has run a total of **25**, and **Tom** has run a total of **19**
- We print the winners (the people at the top 3 places)

[/task-description]
[code-io /]
[tests]
[test open]
[input]
George, Peter, Bill, Tom
G4e@55or%6g6!68e!!@
R1@!3a\$y4456@
B5@i@\#123ll
G@e54o\$r6ge\#
7P%et^\#e5346r
T\$o553m&6
end of race
[/input]
[output]
1st place: George
2nd place: Peter
3rd place: Tom
[/output]
[/test]
[test]
[input]
Gregory, Tom, Jerry, Christian, Bill
G4r\*\&^\$\#ego%4^\&4\*ry
T\*\&^%57)\&%\$o^\*m6
J\&\*\*67e%\&))rr\&12\*3y
J\&\*\*22e%&))rr\&44\*8y
Ch\&\*\&\*^ri1s3t5ian
L\&\*\&%666amar
end of race
[/input]
[output]
1st place: Jerry
2nd place: Tom
3rd place: Gregory
[/output]
[/test]
[test]
[input]
Ronald, Bill, Tom, Timmy, Maggie, Michonne
Mi@@@@!ch123o!@nne787)
%@B(@@)i89ll)!@)
R@(on@ald992)
T(@immy77)
Ma10!@@g0g0g0i0e
end of race
[/input]
[output]
1st place: Michonne
2nd place: Ronald
3rd place: Bill
[/output]
[/test]
[test]
[input]
Rick, Negan, Lucille, Peter, Stamat, George
R\*\*\*\*i22c00k199!!!
N\*\*\*\\&^E989GA(\*\\&^\\&^\\&N323a)))
\*^%%Pe87876t\\&\\&^er87\#\$\\&(%)
L\\&^%u9754cille\*\\&^\\&%^234
end of race
[/input]
[output]
1st place: Peter
2nd place: Lucille
3rd place: Rick
[/output]
[/test]
[test]
[input]
Rick, Negan, Lucille, Peter, Stamat, George
R****i22c00k199!!!
N***\\&^e989ga(*\\&^\\&^\\&n323)))
*^%%Pe87876t\\&\\&^er87\#\$\\&(%)
L\\&^%u9754cille*\\&^\\&%^234
R**%^\\&%i11c104k123!^\\&!!
R\\&\\&%^\\&%ic10^\$@k123!^\\&!!
*^%Peter8675
*^%Geo\$12\#%112r^\$ge23!(@^)
!!22!P23!e!t!e!r!85
end of race
[/input]
[output]
1st place: Peter
2nd place: Rick
3rd place: Negan
[/output]
[/test]
[test]
[input]
Joro, George, Georgi, Stamat
!@232St#$ama!@!@t
@@@232St@@ama!@!@!t
G7667eorge!!!
@!@@J99999oro@@@57
end of race
[/input]
[output]
1st place: Joro
2nd place: George
3rd place: Stamat
[/output]
[/test]
[/tests]
[/code-task]
[/slide]



[slide hideTitle]
# Problem: Bar Income
[code-task title="Bar Income" taskId="Java-Fundamentals-2-Regex-Bar-Income" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program that calculates the total profit from the products that were sold throughout the day.

You will be receiving lines of input until you receive the **end of shift** command.

Before processing each line of input, you have to do some **validations**.

Each valid line should contain a **customer**, a **product**, a **count**, and a **price**.

A **valid**: 
- The **Customer's name** should be surrounded by `%` and must start with a capital letter, followed only by lower-case letters
- The **Product's name** should be surrounded by '\<' and '\>' 
- The **Count** should be an integer, surrounded by '\|'
- The **Price** is a real number, followed by '$'

The parts of a **valid order should appear in the order given**: **customer, product, count and a price**.
A line of input is considered to be valid if its parts appear in the following order:  a **customer**, a **product**, a **count**, and a **price**. 

Between each **part there can be other symbols**, **except** ('\|', '$', '%' and '.')
There could be other symbols between the parts of the input lines, **except**: ('\|', '$', '%' and '.')

For each valid, line print out the following message: "\{customerName\}: \{product\} - \{totalPrice\}"

When you receive the **end of shift** command, print out the total amount of money earned that day, rounded to the second digit after the decimal point in the following format: 
- "Total income: \{income\}".

### Example
| **Input** | **Output** |
| --- | --- |
| %George%\<Croissant\>\|2\|10.3\$ | George: Croissant - 20.60 |
| %Peter%\<Gum\>\|1\|1.3\$ | Peter: Gum - 1.30 |
| %Maria%\<Cola\>\|1\|2.4\$ | Maria: Cola - 2.40 |
| end of shift | Total income: 24.30 |

### Comments
- Each line is valid, so we print the expected message for each input line, calculating the price of the order
- It the end, we print out the total income for the day

### Example
| **Input** | **Output** |
| --- | --- |
| %InvalidName%\<Croissant\>\|2\|10.3\$ | Valid: Valid - 200.00 |
| %Peter%\<Gum\>1.3\$ | Total income: 200.00 |
| %Maria%\<Cola\>\|1\|2.4 | |
| %Valid%\<Valid\>valid\|10\|valid20\$ | |
| end of shift | |

### Comments
- On the first line, the name of the customer is not valid, so we skip that line
- On the second line, the count of the products to be sold is missing, so it is not valid
- On the third line, the price is not valid
- The forth line is valid, so we calculate the total income fot the day

[/task-description]
[code-io /]
[tests]
[test open]
[input]
%George%\<Croissant\>\|2\|10.3\$
%Peter%\<Gum\>\|1\|1.3\$
%Maria%\<Cola\>\|1\|2.4\$
end of shift
[/input]
[output]
George: Croissant - 20.60
Peter: Gum - 1.30
Maria: Cola - 2.40
Total income: 24.30
[/output]
[/test]
[test open]
[input]
%InvalidName%\<Croissant\>\|2\|10.3\$
%Peter%\<Gum\>1.3\$
%Maria%\<Cola\>\|1\|2.4
%Valid%\<Valid\>valid\|10\|valid20\$
end of shift
[/input]
[output]
Valid: Valid - 200.00
Total income: 200.00
[/output]
[/test]
[test]
[input]
%Name%\<Product\>\|1\|20.50\$
end of shift
[/input]
[output]
Name: Product - 20.50
Total income: 20.50
[/output]
[/test]
[test]
[input]
%Name%\<Product2\>\|1\|20.50\$
end of shift
[/input]
[output]
Name: Product2 - 20.50
Total income: 20.50
[/output]
[/test]
[test]
[input]
%Name%valid\<Product3\>valid\|1\|20.80\$
end of shift
[/input]
[output]
Name: Product3 - 20.80
Total income: 20.80
[/output]
[/test]
[test]
[input]
%Name%\<Product\>\|2\|20.50\$
end of shift
[/input]
[output]
Name: Product - 41.00
Total income: 41.00
[/output]
[/test]
[test]
[input]
%Name%\<Product\>\|1\|20.50\$
%Name%\<Product\>\|1\|9.50\$
end of shift
[/input]
[output]
Name: Product - 20.50
Name: Product - 9.50
Total income: 30.00
[/output]
[/test]
[test]
[input]
%Name%\<Product\>\|2\|10.3\$
%Name%\<Pro_duct\>\|2\|10.3\$
end of shift
[/input]
[output]
Name: Product - 20.60
Name: Pro_duct - 20.60
Total income: 41.20
[/output]
[/test]
[test]
[input]
%Name%\<Product\>\|2\|10\$
end of shift
[/input]
[output]
Name: Product - 20.00
Total income: 20.00
[/output]
[/test]
[test]
[input]
%Name%\<Product\>\|1\|30.10\$
%Name%\<Product\>\|1.0\|10.10\$
%Name%\<Product\>\|1\|10.10
%Name%Product\|1\|10.10\$
end of shift
[/input]
[output]
Name: Product - 30.10
Total income: 30.10
[/output]
[/test]
[test]
[input]
%Name%ho\<Product\>eins\|1\|10\$
%Name%he\<Product\>zwei\|2\|10\$
%Name%hi\<Product\>drei\|3\|10\$
end of shift
[/input]
[output]
Name: Product - 10.00
Name: Product - 20.00
Name: Product - 30.00
Total income: 60.00
[/output]
[/test]
[test]
[input]
%Name%sorry for this test\<\>\<\>\<\>\<\>\<Product\>\<\>\<\>\|2\|10\$
end of shift
[/input]
[output]
Name: Product - 20.00
Total income: 20.00
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Star Enigma
[code-task title="Star Enigma" taskId="Java-Fundamentals-2-Regex-Star-Enigma" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Create a program to decrypt messages.

We will receive several messages, which are encrypted using the legendary **star enigma** encryption code.


Decrypt the messages, following these rules:
- Count the number of times any of these letters is contained on each separate line of input [s, t, a, r] - **case insensitive**. The final number is the encryption key

- Remove this number from the ASCII value of each symbol in the encrypted message

**After decryption**:
- Each message should contain a **planet name**, **population**, **attack status**** ('A' stands for attacked; 'D' stands for destroyed), and a **soldier count**
- The **planet name** is marked by '@' followed only by letters from the English alphabet
- The **planet population** starts after a ':' sign and will be an **integer**
- The **planet might be "A"(attacked) or "D"(destroyed)**, and this value will be surrounded by "!" (exclamation marks)
- The **soldier count** is placed afer this sign: "->", and will be an **integer**

The order of a **valid** message is: 
**planet name -> planet population -> attack type -> soldier count**

Each part can be separated from the others by any character, excluding: '@', '-', '!', ':' and '>'.

### Output

**After decrypting all messages**, you should print the received information in the following format:
- Print out the attacked planets first, then the destroyed planets
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
- The first message has a decryption key of: 3 (as it contains **one** occurance of the letter "S", **one** occurance of the letter "T" and **one** occurance of the letter "A")
    - So, we subtract 3 from the ASCII value of each character.
    - The deciphered message is: PQ@Alderaa1:30000!A!->20000
- The second message's key is: 5
    - The deciphered message is: @Cantonica:3000!D!->4000NM
    - 
- Both messages are valid and they contain a planet, population, whether they are attacked or destroyed, and their soldier count
- After decrypting all messages, we print out the contained information

### Example
| **Input** | **Output** |
| --- | --- |
| 3 | Attacked planets: 0 |
| tt(''DGsvywgerx>6444444444%H%1B9444 | Destroyed planets: 2 |
| GQhrr\|A977777(H(TTTT | -> Cantonica |
| EHfsytsnhf?8555&I&2C9555SR | -> Coruscant |

### Comments
We receive three messages.
- Message one is decrypted using 4 as a key
    - pp$##@Coruscant:2000000000!D!->5000
- Message two is decrypted with key: 7
    - @Jakku:200000!A!MMMM
    - this is an invalid message as it does not contain a soldier count, so it should be ignored
- The third message has 5 for a key
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


[slide hideTitle]
# Problem: Nether Realms
[code-task title="Nether Realms" taskId="Java-Fundamentals-2-Regex-Nether-Realm" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
А мighty battle is coming. 

In the stormy Nether Realms, demons are fighting against each other for supremacy in a duel. In the end, only one will survive. 

However, your job is not so exciting. 

You are assigned to **sign in all the participants** in the Nether Realm's mighty battle's demon book, which of course is **sorted alphabetically**. 

Based on the demon's name, you could find out the **demon's health** and the **demon's damage**. 

The demon's total **health** is calculated by summing the ASCII codes of all characters (excluding numbers (0-9), arithmetic symbols ('+', '-', '*', '/'), and the dot('.'))

The base **damage** is calculated by summing all numbers in a demon's name.

Note that you should consider the **plus** '+' and the **minus** '-' signs (e.g. +10 is 10, and -10 is -10). 

However, there are **some symbols** ('\*' and '/') that **can further alter the base damage by multiplying or dividing it by 2** (e.g. in the name "m15\*/c-5.0", the base damage is 15 + (-5.0) = 10. After that, you need to **multiply it by 2** (e.g. 10 \* 2 = 20), and then to **divide it by 2** (e.g. 20 / 2 = 10)). 

So, **multiplication** and **division** should be applied after the sum of all numbers is calculated. You should perform them in the order they appear in the name. 

The demons should be sorted in **alphabetical order**. 
For each demon, you should print out their **name** along with their **health** and their **damage**. 

### Input
- The input will be read from the console
- The input consists of a single line containing all demons' names, separated by commas and zero or more white spaces in the following format:
    - "\{demon name\}, \{demon name\}, … \{demon name\}"

### Output
- Print all demons, sorted by their name in ascending order, each on a new line in the following format:
    - "\{demon name\} - \{health points\} health, \{damage points\} damage"

### Constraints
- A demon's name will contain at least one character
- A demon's name cannot contain blank spaces ' ' or commas ','
- A floating-point number will always have digits before and after its decimal separator
- A number in a demon's name is considered to be everything that is a valid integer or a valid floating point number (with a dot '.' used as separator) 
    - for example, all these are valid numbers: '4', '+4', '-4', '3.5', '+3.5', '-3.5' 

### Example
| **Input** | **Output** |
| --- | --- |
| M3ph-0.5s-0.5t0.0** | M3ph-0.5s-0.5t0.0** - 524 health, 8.00 damage |

### Comments
- M3ph-0.5s-0.5t0.0**:
    - Health = 'M' + 'p' + 'h' + 's' + 't' = 524 health.
    - Damage = (3 + (-0.5) + (-0.5) + 0.0) \* 2 \* 2 = 8 damage.

### Example
| **Input** | **Output** |
| --- | --- |
| M3ph1st0**, Azazel | Azazel - 615 health, 0.00 damage  |
| | M3ph1st0** - 524 health, 16.00 damage |

### Comments
- Azazel: 
    - Health - 'A' + 'z' + 'a' + 'z' + 'e' + 'l' = 615 health. 
    - Damage - no digits = 0 damage.
- M3ph1st0**:
    - Health - 'M' + 'p' + 'h' + 's' + 't' = 524 health.
    - Damage - (3 + 1 + 0) \* 2 \* 2 = 16 damage.

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

[slide hideTitle]
# Problem: Extract Emails
[code-task title="Extract Emails" taskId="Java-Fundamentals-2-Regex-Extract-Emails" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create a program that extracts all email addresses from a given text.

You will receive only one line of input.

Emails are considered to be in the following **format**: \{user\}\@\{host\} 

- \{user\} is a sequence of **letters and digits**, where '.', '-' and '_' can appear somewhere in the text, except in the beginning
    - examples of **valid users**: "stephan", "mike03", "s.johnson", "st_steward", "12345"
    - examples of **invalid users**: ''--123", ".....", "_steve", ".info"
- \{host\} is a **sequence of at least two words, separated by dots** (' . '). Each word is **sequence of letters and can have hyphens** ('-') between the letters
    - examples of **valid hosts**: "softuni.org", "software-university.com", "intoprogramming.info", "mail.softuni.org"
    - examples of **invalid hosts**: "helloworld", ".unknown.soft.", "invalid-host-", "invalid-"
- Examples of **valid emails**: info\@softuni.org, kiki\@hotmail.co.uk, no-reply\@github.com, s.peterson\@mail.uu.net, info-bg\@software-university.software.academy
- Examples of **invalid emails**: --123\@gmail.com, …\@mail.bg, .info\@info.info, _steve\@yahoo.cn, mike\@helloworld, mike\@.unknown.soft., s.johnson\@invalid-


You should print out all valid emails, each on a new line.

### Example
| **Input** | **Output** |
| --- | --- |
| Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information. | s.miller@mit.edu  |
| | j.hopking@york.ac.uk |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.
end
[/input]
[output]
s.miller@mit.edu
j.hopking@york.ac.uk
[/output]
[/test]
[test]
[input]
Please contact us at: support@github.com.
end
[/input]
[output]
support@github.com
[/output]
[/test]
[test]
[input]
Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. ?- steve.parker@softuni.de.
end
[/input]
[output]
steve.parker@softuni.de
[/output]
[/test]
[test]
[input]
Examples of valid emails: info@softuni-bulgaria.org, kiki@hotmail.co.uk, no-reply@github.com, s.peterson@mail.uu.net, info-bg@software-university.software.academy
end
[/input]
[output]
info@softuni-bulgaria.org
kiki@hotmail.co.uk
no-reply@github.com
s.peterson@mail.uu.net
info-bg@software-university.software.academy
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

