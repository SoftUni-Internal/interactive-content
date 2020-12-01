# Shopping List

[slide]
# Video

[vimeo-video]
[stream language="EN" videoId="434990022" default /]
[stream language="RO" videoId="433962297"  /]
[/video-vimeo]
[/slide]

[slide hideTitle]
# Shopping List
[code-task title="Shopping List" taskId="java-fund-18-Exam-Preparation-problem-2" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You will receive an **initial list with groceries separated by** "!".

After that you will be receiving **4 types of commands, until you receive** "Go Shopping!"
- Urgent \{item\} - **add the item at the start** of the list. 
    - If the item **already exists, skip this command**.
- Unnecessary \{item\} - **remove the item with the given name**. 
    - **Only if it exists in the list**. **Otherwise skip** this command.
- Correct \{oldItem\} \{newItem\} - **if the item with the given old name exists**, **change its name** with the new one. 
    - If it **doesn't exist, skip** this command.
- Rearrange \{item\} - if the grocery **exists in the list**, **remove it from its current** position and **add it at the end of the list**.

### Constraints
- There won't be any duplicate items in the initial list

### Output
**Print the list with all the groceries, joined by** ", ".
- "\{firstGrocery\}, \{secondGrocery\}, … \{nthGrocery\}"

### Example
| **Input** | **Output** |
| --- | --- |
| Tomatoes!Potatoes!Bread | Tomatoes, Potatoes, Bread |
| Unnecessary Milk | |
| Urgent Tomatoes | |
| Go Shopping! | |

### Example
| **Input** | **Output** |
| --- | --- |
| Milk!Pepper!Salt!Water!Banana | Milk, Onion, Salt, Water, Banana |
| Urgent Salt | |
| Unnecessary Grapes  | |
| Correct Pepper Onion | |
| Rearrange Grapes | |
| Correct Tomatoes Potatoes | |
| Go Shopping! | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Tomatoes!Potatoes!Bread
Unnecessary Milk
Urgent Tomatoes
Go Shopping!
[/input]
[output]
Tomatoes, Potatoes, Bread
[/output]
[/test]
[test open]
[input]
Milk!Pepper!Salt!Water!Banana
Urgent Salt
Unnecessary Grapes 
Correct Pepper Onion
Rearrange Grapes
Correct Tomatoes Potatoes
Go Shopping!
[/input]
[output]
Milk, Onion, Salt, Water, Banana
[/output]
[/test]
[test]
[input]
Dustin!William
Urgent Jon
Go Shopping!
[/input]
[output]
Jon, Dustin, William
[/output]
[/test]
[test]
[input]
Mark!Dustin!William
Urgent George
Go Shopping!
[/input]
[output]
George, Mark, Dustin, William
[/output]
[/test]
[test]
[input]
Mark!Dustin!William
Unnecessary George
Unnecessary William
Go Shopping!
[/input]
[output]
Mark, Dustin
[/output]
[/test]
[test]
[input]
Mark!Dustin!William
Urgent George
Urgent Dustin
Go Shopping!
[/input]
[output]
George, Mark, Dustin, William
[/output]
[/test]
[test]
[input]
George!Mark!Dustin!Aaron!Will
Correct Will William
Go Shopping!
[/input]
[output]
George, Mark, Dustin, Aaron, William
[/output]
[/test]
[test]
[input]
Joshua!Aaron!Walt!Dustin!William
Correct George Dustin
Correct Walt Will
Go Shopping!
[/input]
[output]
Joshua, Aaron, Will, Dustin, William
[/output]
[/test]
[test]
[input]
Joshua!Aaron!Walt!Dustin!William
Rearrange Aaron
Rearrange Joshua
Go Shopping!
[/input]
[output]
Walt, Dustin, William, Aaron, Joshua
[/output]
[/test]
[test]
[input]
Joshua!Aaron!Walt!Dustin!William
Rearrange Aaron
Rearrange Peter
Rearrange Dustin
Go Shopping!
[/input]
[output]
Joshua, Walt, William, Aaron, Dustin
[/output]
[/test]
[test]
[input]
Joshua!Aaron!Walt!Dustin!William
Unnecessary Aaron
Urgent Jon
Unnecessary Walt
Urgent Kiro
Correct Kiro Kiril
Rearrange Kiril
Go Shopping!
[/input]
[output]
Jon, Joshua, Dustin, William, Kiril
[/output]
[/test]
[test]
[input]
Joshua!Aaron!Walt!Dustin!William
Unnecessary Aaron
Unnecessary Marcus
Urgent Jon
Urgent Walt
Unnecessary Walt
Urgent Kiro
Correct Kiro Kiril
Correct Kiro Kircata
Rearrange Kiril
Rearrange Oliver
Go Shopping!
[/input]
[output]
Jon, Joshua, Dustin, William, Kiril
[/output]
[/test]
[/tests]
[/code-task]
[/slide]