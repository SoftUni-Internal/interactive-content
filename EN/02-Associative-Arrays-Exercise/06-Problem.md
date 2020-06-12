[slide hideTitle]
# Problem: Courses
[code-task title="Courses" taskId="ffed8271-3b3f-46de-bd26-273d16582333" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program, which keeps information about **courses**.

Each course has a **name** and **registered students**.

You will receive **course name and student name**, **until** you receive the **command** "end". 

**Check** if such **course already exists**, and if **not**, **add the course**. 

**Register** the **user** into the **course**. 

When you do receive the **command** "end", **print** the courses with their **names** and **total registered users**, ordered by the count of **registered** users in descending order. 

For each **contest print registered users** **ordered by name in ascending** order.

### Input
- Until you receive "end", the **input come in the format**:

 "\{courseName\} : \{studentName\}".
- The product data is **always delimited** by " : ".

### Output
- Print information about each **course**, following the **format**: 

"\{courseName\}: \{registeredStudents\}"
- Print information about each **student**, following the **format**:

"-- \{studentName\}"

### Examples
| **Input** | **Output** |
| --- | --- |
| Programming Fundamentals : John Smith | Programming Fundamentals: 2 | 
| Programming Fundamentals : Linda Johnson | -- John Smith |
| JS Core : Will Wilson | -- Linda Johnson |
| Java Advanced : Harrison White | JS Core: 1 | 
| end | -- Will Wilson |
| | Java Advanced: 1 |
| | -- Harrison White |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Programming Fundamentals : John Smith
Programming Fundamentals : Linda Johnson
JS Core : Will Wilson
Java Advanced : Harrison White
end
[/input]
[output]
Programming Fundamentals: 2
-- John Smith
-- Linda Johnson
JS Core: 1
-- Will Wilson
Java Advanced: 1
-- Harrison White
[/output]
[/test]
[test]
[input]
Algorithms : Jay Moore
Programming Basics : Martin Taylor
Python Fundamentals : John Anderson
Python Fundamentals : Andrew Robinson
Algorithms : Bob Jackson
Python Fundamentals : Clark Lewis
end
[/input]
[output]
Python Fundamentals: 3
-- Andrew Robinson
-- Clark Lewis
-- John Anderson
Algorithms: 2
-- Bob Jackson
-- Jay Moore
Programming Basics: 1
-- Martin Taylor
[/output]
[/test]
[test]
[input]
Programming Fundamentals : John Smith
Programming Fundamentals : Linda Johnson
JS Core : Will Wilson
Java Advanced : Harrison White
Algorithms : Jay Moore
Programming Basics : Martin Taylor
Python Fundamentals : John Anderson
Python Fundamentals : Andrew Robinson
Algorithms : Bob Jackson
Python Fundamentals : Clark Lewis
end
[/input]
[output]
Python Fundamentals: 3
-- Andrew Robinson
-- Clark Lewis
-- John Anderson
Programming Fundamentals: 2
-- John Smith
-- Linda Johnson
Algorithms: 2
-- Bob Jackson
-- Jay Moore
JS Core: 1
-- Will Wilson
Java Advanced: 1
-- Harrison White
Programming Basics: 1
-- Martin Taylor
[/output]
[/test]
[test]
[input]
Programming Fundamentals : John Smith
Programming Fundamentals : Linda Johnson
JS Core : Will Wilson
Algorithms : Harrison White
Python Fundamentals : Jay Moore
Programming Fundamentals : Martin Taylor
Python Fundamentals : John Anderson
Programming Fundamentals : Andrew Robinson
Algorithms : Bob Jackson
Python Fundamentals : Clark Lewis
end
[/input]
[output]
Programming Fundamentals: 4
-- Andrew Robinson
-- John Smith
-- Linda Johnson
-- Martin Taylor
Python Fundamentals: 3
-- Clark Lewis
-- Jay Moore
-- John Anderson
Algorithms: 2
-- Bob Jackson
-- Harrison White
JS Core: 1
-- Will Wilson
[/output]
[/test]
[test]
[input]
JS Core : John Smith
Programming Fundamentals : Linda Johnson
JS Core : Will Wilson
Algorithms : Harrison White
Python Fundamentals : Jay Moore
Programming Fundamentals : Martin Taylor
JS Core : John Anderson
Algorithms : Andrew Robinson
Programming Fundamentals : Bob Jackson
Algorithms : Clark Lewis
end
[/input]
[output]
JS Core: 3
-- John Anderson
-- John Smith
-- Will Wilson
Programming Fundamentals: 3
-- Bob Jackson
-- Linda Johnson
-- Martin Taylor
Algorithms: 3
-- Andrew Robinson
-- Clark Lewis
-- Harrison White
Python Fundamentals: 1
-- Jay Moore
[/output]
[/test]
[test]
[input]
OOP : John Smith
Programming Fundamentals : Linda Johnson
JS Core : Will Wilson
Algorithms : Harrison White
Python Fundamentals : Jay Moore
OOP : Martin Taylor
Python Fundamentals : John Anderson
C# Web : Andrew Robinson
Algorithms : Bob Jackson
C# Web : Clark Lewis
end
[/input]
[output]
OOP: 2
-- John Smith
-- Martin Taylor
Algorithms: 2
-- Bob Jackson
-- Harrison White
Python Fundamentals: 2
-- Jay Moore
-- John Anderson
C# Web: 2
-- Andrew Robinson
-- Clark Lewis
Programming Fundamentals: 1
-- Linda Johnson
JS Core: 1
-- Will Wilson
[/output]
[/test]
[test]
[input]
PHP Web : Linda Johnson
JS Core : Will Wilson
Algorithms : Clark Lewis
JS Core : John Anderson
OOP : Harrison White
OOP : Ivan
C# Web : Jay Moore
Algorithms : Andrew Robinson
OOP : John Smith
PHP Web : Bob Jackson
Programming Fundamentals : Martin Taylor
end
[/input]
[output]
OOP: 3
-- Harrison White
-- Ivan
-- John Smith
PHP Web: 2
-- Bob Jackson
-- Linda Johnson
JS Core: 2
-- John Anderson
-- Will Wilson
Algorithms: 2
-- Andrew Robinson
-- Clark Lewis
C# Web: 1
-- Jay Moore
Programming Fundamentals: 1
-- Martin Taylor
[/output]
[/test]
[/tests]
[/code-task]
[/slide]