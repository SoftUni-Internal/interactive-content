# Problem: Furniture

[slide]
# Video

[vimeo-video]
[stream language="EN" videoId="421820196" default /]
[stream language="RO" videoId="436028909"  /]
[/video-vimeo]
[/slide]

[slide hideTitle]
# Problem: Furniture
[code-task title="Furniture" taskId="03a38e07-6ad8-453f-9595-bc4d9c14b30d" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program to **calculate the total cost** of different types of furniture.

You will be given some lines of input **until you receive the line** "Purchase". 

For the **line to be valid** it should be in the following **format**:
- ">>\{furniture name\}<<\{price\}!\{quantity\}"

The price can be a **floating-point number or a whole number**. 

Store the **names of the furniture and the total price**. 

At the end **print each bought furniture on a separate line** in the format:

"Bought furniture:

\{1st name\}

\{2nd name\}

…"

And **on the last line print** the following: 
- "Total money spend: \{spend money\}" **formatted** to the second decimal point.


### Example
| **Input** | **Output** |
| --- | --- |
| >>Sofa<<312.23!3 | Bought furniture: |
| >>TV<<300!5 | Sofa |
| >Invalid<<!5 | TV |
| Purchase | Total money spend: 2436.69 |

### Comments
- Only the Sofa and the TV are valid.
- For each of them we multiply the price by the quantity.
- Print the result.

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