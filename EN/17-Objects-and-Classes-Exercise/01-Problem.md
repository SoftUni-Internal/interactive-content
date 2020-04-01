[slide]
# Advertisement Message
[code-task title="Advertisement Message" taskId="java-fundamentals-objects-and-classes-01" executionType="tests-execution" executionStrategy="java-code"]
[code-editor language=java requiresInput]
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
Write a program that generates random fake advertisement messages.

The messages must consist of **4 parts**: **laudatory phrase** + **event** + **author** + **city**.

Use the following **predefined parts**:
- **Phrases** – \{"Excellent product.", "Such a great product.", "I always use that product.", "Best product of its category.", "Exceptional product.", "I can’t live without this product."\}
- **Events** – \{"Now I feel good.", "I have succeeded with this product.", "Makes miracles. I am happy of the results!", "I cannot believe but now I feel awesome.", "Try it yourself, I am very satisfied.", "I feel great!"\}
- **Authors** – \{"Diana", "Petya", "Stella", "Elena", "Katya", "Iva", "Annie", "Eva"\}
- **Cities** – \{"Burgas", "Sofia", "Plovdiv", "Varna", "Ruse"\}

The **format of the output message** is: \{phrase\} \{event\} \{author\} – \{city\}.

As an input, you **take the number of messages to be generated**. 

Print each random message **at a separate line**.

### Example
| **Input** | **Output** |
| --- | --- |
| 3 | Such a great product. Now I feel good. Elena – Ruse |
| | Excelent product. Makes miracles. I am happy of the results! Katya – Varna |
| | Best product of its category. That makes miracles. Eva - Sofia |

[/task-description]
[code-io /]
[tests]
[test]
[input]
3
[/input]
[output]
Excellent product. I cannot believe but now I feel awesome. Stella - Plovdiv.
I can’t live without this product. Makes miracles. I am happy of the results! Petya - Burgas.
Exceptional product. Try it yourself, I am very satisfied. Stella - Plovdiv.
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
product
[/output]
[/test]
[test]
[input]
2
[/input]
[output]
Excellent product. Makes miracles. I am happy of the results! Annie - Plovdiv.
Such a great product. I feel great! Katya - Plovdiv.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]