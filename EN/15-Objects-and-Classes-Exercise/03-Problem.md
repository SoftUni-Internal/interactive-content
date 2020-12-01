[slide hideTitle]
# Problem: Articles 2.0
[code-task title="Articles 2.0" taskId="java-fund-17-Objects-and-Classes-Exercise-problem-3" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Change the program "Articles", so you can store a **list of articles**.

You will not need the methods any more (**except** the ToString method).

On the **first line**, you will get a **number n**.

On the next **n lines**, you will get some **articles in the same format as the previous task** ("\{title\}, \{content\}, \{author\}").

Finally, you will get one of the **three criteria**: "title", "content", "author".

You need to order the articles **alphabetically** based on the command and print them sorted by the given **criteria**.

### Example
| **Input** | **Output** |
| --- | --- |
| 2 | Article - content: Johnny |
| Science, planets, Bill | Science - planets: Bill |
| Article, content, Johnny | |
| title | |

### Example
| **Input** | **Output** |
| --- | --- |
| 3 | title3 – A: author3 |
| title1, C, author1 | title2 – B: author2 |
| title2, B, author2 | title1 – C: author1 |
| title3, A, author3 | |
| content | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
2
Science, planets, Bill
Article, content, Johnny
title
[/input]
[output]
Article - content: Johnny
Science - planets: Bill

[/output]
[/test]
[test]
[input]
3
title1, C, author1
title2, B, author2
title3, A, author3
content
[/input]
[output]
title3 - A: author3
title2 - B: author2
title1 - C: author1
[/output]
[/test]
[test]
[input]
2
The Reckoning, Content, John Grisham
Harry Potter and the Sorcerer's Stone (Enhanced Edition), content2, J.K. Rowling
title
[/input]
[output]
Harry Potter and the Sorcerer's Stone (Enhanced Edition) - content2: J.K. Rowling
The Reckoning - Content: John Grisham
[/output]
[/test]
[test]
[input]
4
Ego Is the Enemy, content2, Ryan Holiday
Cole and Sav, content1, Cole LaBrant & Savannah LaBrant
Most Valuable Playboy, content4, Lauren Blakely
A Christmas Message, content3, Anne Perry
content
[/input]
[output]
Cole and Sav - content1: Cole LaBrant & Savannah LaBrant
Ego Is the Enemy - content2: Ryan Holiday
A Christmas Message - content3: Anne Perry
Most Valuable Playboy - content4: Lauren Blakely
[/output]
[/test]
[test]
[input]
4
Ego Is the Enemy, content2, Ryan Holiday
Cole and Sav, content1, Cole LaBrant & Savannah LaBrant
Most Valuable Playboy, content4, Lauren Blakely
A Christmas Message, content3, Anne Perry
author
[/input]
[output]
A Christmas Message - content3: Anne Perry
Cole and Sav - content1: Cole LaBrant & Savannah LaBrant
Most Valuable Playboy - content4: Lauren Blakely
Ego Is the Enemy - content2: Ryan Holiday
[/output]
[/test]
[test]
[input]
2
A Simple Favor, content2, Darcey Bell
Gracie's Secret, content1, Jill Childs
title
[/input]
[output]
A Simple Favor - content2: Darcey Bell
Gracie's Secret - content1: Jill Childs
[/output]
[/test]
[test]
[input]
3
A Simple Favor, content2, Darcey Bell
Most Valuable Playboy, content4, Lauren Blakely
Gracie's Secret, content1, Jill Childs
content
[/input]
[output]
Gracie's Secret - content1: Jill Childs
A Simple Favor - content2: Darcey Bell
Most Valuable Playboy - content4: Lauren Blakely
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
