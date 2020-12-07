# Heart Delivery

[slide]
# Video

[vimeo-video]
[stream language="EN" videoId="434990115" default /]
[stream language="RO" videoId="433962598"  /]
[/video-vimeo]
[/slide]

[slide hideTitle]
# Heart Delivery
[code-task title="Heart Delivery" taskId="java-fund-18-Exam-Preparation-problem-3" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You will receive a **string with even integers**, separated by a "@".

This is the **neighborhood**.

After that a **series of Jump commands** will follow, **until you receive** "Love!".

Every house in the neighborhood **needs a certain number of hearts delivered by Cupid**, in order to be able to celebrate Valentine’s Day.

Those needed hearts are **indicated by the integers** in the neighborhood.

Cupid **starts at the position of the first house** (index 0) and must jump by a given length.

The **jump commands will be in this format**: "Jump \{length\}".

Every time he jumps from one house to another, the **needed hearts for the visited house are decreased by 2**.

**If the needed hearts for a certain house become equal to 0**, **print** on the console "Place \{houseIndex\} has Valentine's day." 

If Cupid jumps to a house where the **needed hearts are already 0**, **print** on the console "Place \{houseIndex\} already had Valentine's day.".

Keep in mind that Cupid can have a **bigger jump length than the size of the neighborhood** and if he does jump **outside** of it, he should **start from the first house** again.

**For example**, we are given this neighborhood: 6@6@7.

**Cupid is at the start** and **jumps** with a **length of 2**.

He will end up at **index 2** and decrease the needed hearts there by 2: [6, 6, 5].

Next he jumps again with a length of 2 and goes **outside the neighborhood**, so he goes **back to the first house** (index 0) and **again decreases the needed hearts there**: [4, 6, 5].

### Input
- On the first line you will receive a string with even integers separated by "@" – the neighborhood and the number of hearts for each house.
- On the next lines, until "Love!" is received, you will be getting jump commands in this format: "Jump \{length\}".

### Output
At the end print Cupid's **last position and whether his mission was successful or not**:
- "Cupid's last position was \{lastPositionIndex\}."
- If each house has had a Valentine's day, print: 
    - "Mission was successful."
- If not, print the count of all houses that didn't celebrate a Valentine's Day:
    - "Cupid has failed \{houseCount\} places."

### Constraints
- The neighborhood`s size will be in the range \[1 … 20\]
- Each house will need an even number of hearts in the range \[2 … 10\]
- Each jump length will be an integer in the range \[1 … 20\]

### Example
| **Input** | **Output** |
| --- | --- |
| 10@10@10@2 | Place 3 has Valentine's day. |
| Jump 1 | Cupid's last position was 3. |
| Jump 2 | Cupid has failed 3 places. |
| Love! | |

### Comment
- Jump 1 -> \[10, 8, 10, 2\]
- Jump 2 -> \[10, 8, 10, 0\] so we print "Place 3 has Valentine's day."
- Next command is "Love!", so we print Cupid's last position and the outcome of his mission.

### Example
| **Input** | **Output** |
| --- | --- |
| 2@4@2 | Place 2 has Valentine's day. |
| Jump 2 | Place 0 has Valentine's day. |
| Jump 2 | Place 0 already had Valentine's day. |
| Jump 8 | Place 0 already had Valentine's day. |
| Jump 3 | Cupid's last position was 1. |
| Jump 1 | Cupid has failed 1 places. |
| Love! | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
10@10@10@2
Jump 1
Jump 2
Love!
[/input]
[output]
Place 3 has Valentine's day.
Cupid's last position was 3.
Cupid has failed 3 places.
[/output]
[/test]
[test open]
[input]
2@4@2
Jump 2
Jump 2
Jump 8
Jump 3
Jump 1
Love!
[/input]
[output]
Place 2 has Valentine's day.
Place 0 has Valentine's day.
Place 0 already had Valentine's day.
Place 0 already had Valentine's day.
Cupid's last position was 1.
Cupid has failed 1 places.
[/output]
[/test]
[test]
[input]
8@8@8@8@8@8@8
Jump 1
Jump 2
Jump 3
Love!
[/input]
[output]
Cupid's last position was 6.
Cupid has failed 7 places.
[/output]
[/test]
[test]
[input]
2@2@2@2@2@2@2
Jump 2
Jump 2
Jump 1
Love!
[/input]
[output]
Place 2 has Valentine's day.
Place 4 has Valentine's day.
Place 5 has Valentine's day.
Cupid's last position was 5.
Cupid has failed 4 places.

[/output]
[/test]
[test]
[input]
10@8@6@2@2@2@2@2@2@2@2@2
Jump 20
Jump 13
Jump 5
Love!
[/input]
[output]
Place 5 has Valentine's day.
Cupid's last position was 5.
Cupid has failed 11 places.
[/output]
[/test]
[test]
[input]
4@4@4
Jump 15
Jump 17
Jump 5
Jump 6
Love!
[/input]
[output]
Place 0 has Valentine's day.
Place 0 already had Valentine's day.
Place 0 already had Valentine's day.
Cupid's last position was 0.
Cupid has failed 2 places.
[/output]
[/test]
[test]
[input]
2@2@2@2@2@2@2@2@2
Jump 2
Jump 2
Jump 2
Jump 2
Jump 2
Jump 2
Jump 2
Jump 1
Love!
[/input]
[output]
Place 2 has Valentine's day.
Place 4 has Valentine's day.
Place 6 has Valentine's day.
Place 8 has Valentine's day.
Place 0 has Valentine's day.
Place 2 already had Valentine's day.
Place 4 already had Valentine's day.
Place 5 has Valentine's day.
Cupid's last position was 5.
Cupid has failed 3 places.
[/output]
[/test]
[test]
[input]
8@2@4
Jump 1
Jump 3
Jump 1
Jump 3
Jump 3
Love!
[/input]
[output]
Place 1 has Valentine's day.
Place 1 already had Valentine's day.
Cupid's last position was 0.
Cupid has failed 2 places.
[/output]
[/test]
[test]
[input]
4@2@4@2
Jump 1
Jump 2
Jump 1
Jump 2
Jump 2
Jump 2
Love!
[/input]
[output]
Place 1 has Valentine's day.
Place 3 has Valentine's day.
Place 0 has Valentine's day.
Place 2 has Valentine's day.
Cupid's last position was 2.
Mission was successful.
[/output]
[/test]
[test]
[input]
10@10
Jump 20
Jump 20
Jump 20
Jump 20
Jump 20
Jump 1
Jump 4
Jump 4
Jump 4
Jump 4
Jump 4
Love!
[/input]
[output]
Place 0 has Valentine's day.
Place 0 already had Valentine's day.
Place 0 already had Valentine's day.
Place 0 already had Valentine's day.
Place 0 already had Valentine's day.
Place 0 already had Valentine's day.
Cupid's last position was 0.
Cupid has failed 1 places.
[/output]
[/test]
[test]
[input]
2@2@2@2@2
Jump 1
Jump 1
Jump 1
Jump 1
Jump 1
Jump 1
Jump 1
Jump 1
Jump 1
Jump 1
Love!
[/input]
[output]
Place 1 has Valentine's day.
Place 2 has Valentine's day.
Place 3 has Valentine's day.
Place 4 has Valentine's day.
Place 0 has Valentine's day.
Place 1 already had Valentine's day.
Place 2 already had Valentine's day.
Place 3 already had Valentine's day.
Place 4 already had Valentine's day.
Place 0 already had Valentine's day.
Cupid's last position was 0.
Mission was successful.
[/output]
[/test]
[test]
[input]
10@8@6@4@2@10@8@6@4@2@10@8@6@4@2@10@8@6@4@2
Jump 4
Jump 5
Jump 5
Jump 5
Love!
[/input]
[output]
Place 4 has Valentine's day.
Place 9 has Valentine's day.
Place 14 has Valentine's day.
Place 19 has Valentine's day.
Cupid's last position was 19.
Cupid has failed 16 places.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]