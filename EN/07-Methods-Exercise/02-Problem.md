# Problem: Characters in Range

[slide]
# Video

[vimeo-video]
[stream language="EN" videoId="421819325" default /]
[stream language="RO" videoId="430366338"  /]
[/video-vimeo]
[/slide]

[slide hideTitle]
# Problem: Characters in Range
[code-task title="Characters in Range" taskId="java-fund-11-Methods-Exercise-problem-3" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a method that receives **two characters** and prints on a single line all the **characters in between them according to ASCII**.

**NOTE:** If the second letter is less than the first one then letters should be swapped.

### Example
| **Input** | **Output** |
| --- | --- |
| a | b c |
| d | |

### Example
| **Input** | **Output** |
| --- | --- |
| # | $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 |
| : | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
a
d
[/input]
[output]
b c
[/output]
[/test]
[test open]
[input]
\#
:
[/input]
[output]
$ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9
[/output]
[/test]
[test]
[input]
C
\#
[/input]
[output]
$ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ A B
[/output]
[/test]
[test]
[input]
b
r
[/input]
[output]
c d e f g h i j k l m n o p q
[/output]
[/test]
[test]
[input]
9
1
[/input]
[output]
2 3 4 5 6 7 8
[/output]
[/test]
[test]
[input]
!
A
[/input]
[output]
" # $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @
[/output]
[/test]
[test]
[input]
z
A
[/input]
[output]
B C D E F G H I J K L M N O P Q R S T U V W X Y Z [ \ ] ^ _ ` a b c d e f g h i j k l m n o p q r s t u v w x y
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
