[slide hideTitle]
# Problem: Articles
[code-task title="Articles" taskId="java-fund-17-Objects-and-Classes-Exercise-problem-1" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create an article class with the following properties:
- Title – a string
- Content – a string
- Author – a string

The class should have a constructor and the following methods:
- **Edit** (new content) – change the old content with the new one
- **ChangeAuthor** (new author) – change the author
- **Rename** (new title) – change the title of the article
- **override ToString** – print the article in the following format: 

"\{title\} - \{content\}:\{author\}"

Write a program that reads an article in the following **format** "\{title\}, \{content\}, \{author\}". 

On the next line, you will get a **number n**. 

On the **next n lines**, you will get one of the following **commands**: 
- "Edit: \{new content\}" 
- "ChangeAuthor: \{new author\}" 
- "Rename: \{new title\}". 

At the end, **print the final article**.


### Example
| **Input** | **Output** |
| --- | --- |
| some title, some content, some author | better title - better content: better author |
| 3 | |
| Edit: better content | |
| ChangeAuthor:  better author | |
| Rename: better title | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
some title, some content, some author
3
Edit: better content
ChangeAuthor: better author
Rename: better title
[/input]
[output]
better title - better content: better author
[/output]
[/test]
[test]
[input]
Holy Ghost, content, John Sandford
3
Edit: better content1
Edit: better content2
Edit: better content3
[/input]
[output]
Holy Ghost - better content3: John Sandford
[/output]
[/test]
[test]
[input]
Holy Ghost, content, John Sandford
3
ChangeAuthor:  Mitch Albom
ChangeAuthor:  better author
ChangeAuthor:  Kim Heacox
[/input]
[output]
Holy Ghost - content:  Kim Heacox
[/output]
[/test]
[test]
[input]
Holy Ghost, content, John Sandford
3
Rename: The Next Person You Meet in Heaven
Rename: better title
Rename: John Muir and the Ice That Started a Fire
[/input]
[output]
John Muir and the Ice That Started a Fire - content: John Sandford
[/output]
[/test]
[test]
[input]
some title, some content, some author
6
Rename: The Good German
Edit: better content1
ChangeAuthor:  Ben Coes
ChangeAuthor:  Gary D. Chapman
Rename: The Girl with No Shadow
Edit: better content2
[/input]
[output]
The Girl with No Shadow - better content2:  Gary D. Chapman
[/output]
[/test]
[test]
[input]
some title, some content, some author
5
Rename: John Muir and the Ice That Started a Fire
ChangeAuthor:  John Grisham
ChangeAuthor:  Shirley Jackson
Rename: The haunting of hill house
Edit: better content2
[/input]
[output]
The haunting of hill house - better content2:  Shirley Jackson
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
