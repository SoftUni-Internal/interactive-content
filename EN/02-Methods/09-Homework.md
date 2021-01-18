# Homework

[slide hideTitle]
# Problem: Smallest of Three Numbers

[vimeo-video]
[stream language="EN" videoId="421822503" default /]
[stream language="RO" videoId="430366304"  /]
[/video-vimeo]

[code-task title="Smallest of Three Numbers" taskId="java-fund-Methods-Exercise-Smallest-of-Three-Numbers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a method to **print the smallest of three integer numbers**.

Use an appropriate name for the method.

### Example
| **Input** | **Output** |
| --- | --- |
| 2 | 2 |
| 5 | |
| 3 | |

### Example
| **Input** | **Output** |
| --- | --- |
| 25 | -21 |
| -21 | |
| 4 | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
2
5
3
[/input]
[output]
2
[/output]
[/test]
[test open]
[input]
25
-21
4
[/input]
[output]
-21
[/output]
[/test]
[test]
[input]
600
600
123
[/input]
[output]
123
[/output]
[/test]
[test]
[input]
-5
-10
-100
[/input]
[output]
-100
[/output]
[/test]
[test]
[input]
-1
0
1
[/input]
[output]
-1
[/output]
[/test]
[test]
[input]
-12345
0
12312
[/input]
[output]
-12345
[/output]
[/test]
[test]
[input]
5
5
5
[/input]
[output]
5
[/output]
[/test]
[test]
[input]
-5
5
-5
[/input]
[output]
-5
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Vowels Count
[code-task title="Vowels Count" taskId="java-fund-Methods-Exercise-Vowels-Count" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a method that receives a **single string** and **prints the count of the vowels**.

Use appropriate name for the method.

### Example
| **Input** | **Output** |
| --- | --- |
| SoftUni | 3 |

### Example
| **Input** | **Output** |
| --- | --- |
| Cats | 1 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
SoftUni
[/input]
[output]
3
[/output]
[/test]
[test open]
[input]
Cats
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
JS
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
SOFTuNI
[/input]
[output]
3
[/output]
[/test]
[test]
[input]
Welcome tO SoftwarE
[/input]
[output]
7
[/output]
[/test]
[test]
[input]
beer
[/input]
[output]
2
[/output]
[/test]
[test]
[input]
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non.
[/input]
[output]
22
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Characters in Range

[vimeo-video]
[stream language="EN" videoId="421819325" default /]
[stream language="RO" videoId="430366338"  /]
[/video-vimeo]

[code-task title="Characters in Range" taskId="java-fund-Methods-Exercise-Characters-in-Range" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

[slide hideTitle]
# Problem: Password Validator
[code-task title="Password Validator" taskId="java-fund-Methods-Exercise-Password-Validator" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that checks if a given password is **valid**. 

Password **rules** are:
- **6 - 10 characters** (inclusive)
- Consists **only** of **letters and digits**
- Have **at least 2 digits** 
If a password is **valid** print "Password is valid". 

If it is **not valid**, for every unfulfilled rule **print a message**:
- "Password must be between 6 and 10 characters"
- "Password must consist only of letters and digits"
- "Password must have at least 2 digits"

### Hint
Write a method for each rule.

### Example
| **Input** | **Output** |
| --- | --- |
| logIn | Password must be between 6 and 10 characters |
| | Password must have at least 2 digits |

### Example
| **Input** | **Output** |
| --- | --- |
| MyPass123 | Password is valid |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
logIn
[/input]
[output]
Password must be between 6 and 10 characters
Password must have at least 2 digits
[/output]
[/test]
[test open]
[input]
MyPass123
[/input]
[output]
Password is valid
[/output]
[/test]
[test]
[input]
Pa$s$s
[/input]
[output]
Password must consist only of letters and digits
Password must have at least 2 digits
[/output]
[/test]
[test]
[input]
Acer
[/input]
[output]
Password must be between 6 and 10 characters
Password must have at least 2 digits
[/output]
[/test]
[test]
[input]
Picture
[/input]
[output]
Password must have at least 2 digits
[/output]
[/test]
[test]
[input]
pesho123\#
[/input]
[output]
Password must consist only of letters and digits
[/output]
[/test]
[test]
[input]
gas%2
[/input]
[output]
Password must be between 6 and 10 characters
Password must consist only of letters and digits
Password must have at least 2 digits
[/output]
[/test]
[test]
[input]
Pesho189
[/input]
[output]
Password is valid
[/output]
[/test]
[test]
[input]
SoftUni40
[/input]
[output]
Password is valid
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Add and Subtract

[vimeo-video]
[stream language="EN" videoId="421818762" default /]
[stream language="RO" videoId="430366408"  /]
[/video-vimeo]

[code-task title="Add and Subtract" taskId="java-fund-Methods-Exercise-Add-and-Subtract" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You will receive 3 integers.

Write a method sum to get the sum of the first two integers and subtract method that subtracts the third integer from the result from the Sum method.

### Example
| **Input** | **Output** |
| --- | --- |
| 23 | 19 |
| 6 | |
| 10 | |

### Example
| **Input** | **Output** |
| --- | --- |
| 1 | -12 |
| 17 | |
| 30 | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
23
6
10
[/input]
[output]
19
[/output]
[/test]
[test open]
[input]
1
17
30
[/input]
[output]
-12
[/output]
[/test]
[test]
[input]
42
58
100
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
20
30
50
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
4321
33
231
[/input]
[output]
4123
[/output]
[/test]
[test]
[input]
162
33
-23
[/input]
[output]
218
[/output]
[/test]
[test]
[input]
16235
1233
-223
[/input]
[output]
17691
[/output]
[/test]
[test]
[input]
20
20
10
[/input]
[output]
30
[/output]
[/test]
[test]
[input]
123
321
231
[/input]
[output]
213
[/output]
[/test]
[test]
[input]
-547
247
100
[/input]
[output]
-400
[/output]
[/test]
[test]
[input]
-5
-5
1
[/input]
[output]
-11
[/output]
[/test]
[test]
[input]
3828
9348
12334
[/input]
[output]
842
[/output]
[/test]
[test]
[input]
-21
79
-2
[/input]
[output]
60
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Middle Characters
[code-task title="Middle Characters" taskId="java-fund-Methods-Exercise-Middle-Characters" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
You will receive a single string.

Write a method that **prints the middle character**.

If the **length** of the string is **even** there are **two middle characters**.

### Example
| **Input** | **Output** |
| --- | --- |
| aString | r |

### Example
| **Input** | **Output** |
| --- | --- |
| someText | eT |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
aString
[/input]
[output]
r
[/output]
[/test]
[test open]
[input]
someText
[/input]
[output]
eT
[/output]
[/test]
[test]
[input]
3245
[/input]
[output]
24
[/output]
[/test]
[test]
[input]
invisible
[/input]
[output]
s
[/output]
[/test]
[test]
[input]
ornamental
[/input]
[output]
me
[/output]
[/test]
[test]
[input]
round
[/input]
[output]
u
[/output]
[/test]
[test]
[input]
innocent
[/input]
[output]
oc
[/output]
[/test]
[test]
[input]
silver
[/input]
[output]
lv
[/output]
[/test]
[test]
[input]
teen
[/input]
[output]
ee
[/output]
[/test]
[test]
[input]
web
[/input]
[output]
e
[/output]
[/test]
[test]
[input]
technologies
[/input]
[output]
ol
[/output]
[/test]
[test]
[input]
SoftUni
[/input]
[output]
t
[/output]
[/test]
[test]
[input]
freaky
[/input]
[output]
ea
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: NxN Matrix

[vimeo-video]
[stream language="EN" videoId="421821470" default /]
[stream language="RO" videoId="430366442"  /]
[/video-vimeo]

[code-task title="NxN Matrix" taskId="java-fund-Methods-Exercise-NxN-Matrix" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a method that receives a single integer n and prints nxn matrix with that number.

### Example
| **Input** | **Output** |
| --- | --- |
| 3 | 3 3 3 |
| | 3 3 3 |
| | 3 3 3 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
3
[/input]
[output]
3 3 3
3 3 3
3 3 3
[/output]
[/test]
[test]
[input]
7
[/input]
[output]
7 7 7 7 7 7 7	
7 7 7 7 7 7 7
7 7 7 7 7 7 7
7 7 7 7 7 7 7
7 7 7 7 7 7 7
7 7 7 7 7 7 7
7 7 7 7 7 7 7
[/output]
[/test]
[test]
[input]
2
[/input]
[output]
2 2
2 2

[/output]
[/test]
[test]
[input]
4
[/input]
[output]
4 4 4 4
4 4 4 4
4 4 4 4
4 4 4 4
[/output]
[/test]
[test]
[input]
10
[/input]
[output]
10 10 10 10 10 10 10 10 10 10 
10 10 10 10 10 10 10 10 10 10 
10 10 10 10 10 10 10 10 10 10 
10 10 10 10 10 10 10 10 10 10 
10 10 10 10 10 10 10 10 10 10 
10 10 10 10 10 10 10 10 10 10 
10 10 10 10 10 10 10 10 10 10 
10 10 10 10 10 10 10 10 10 10 
10 10 10 10 10 10 10 10 10 10 
10 10 10 10 10 10 10 10 10 10
[/output]
[/test]
[test]
[input]
13
[/input]
[output]
13 13 13 13 13 13 13 13 13 13 13 13 13 
13 13 13 13 13 13 13 13 13 13 13 13 13 
13 13 13 13 13 13 13 13 13 13 13 13 13 
13 13 13 13 13 13 13 13 13 13 13 13 13 
13 13 13 13 13 13 13 13 13 13 13 13 13 
13 13 13 13 13 13 13 13 13 13 13 13 13 
13 13 13 13 13 13 13 13 13 13 13 13 13 
13 13 13 13 13 13 13 13 13 13 13 13 13 
13 13 13 13 13 13 13 13 13 13 13 13 13 
13 13 13 13 13 13 13 13 13 13 13 13 13 
13 13 13 13 13 13 13 13 13 13 13 13 13 
13 13 13 13 13 13 13 13 13 13 13 13 13 
13 13 13 13 13 13 13 13 13 13 13 13 13
[/output]
[/test]
[test]
[input]
9
[/input]
[output]
9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
20
[/input]
[output]
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 20 
[/output]
[/test]
[test]
[input]
5
[/input]
[output]
5 5 5 5 5 
5 5 5 5 5 
5 5 5 5 5 
5 5 5 5 5 
5 5 5 5 5 
[/output]
[/test]
[test]
[input]
6
[/input]
[output]
6 6 6 6 6 6 
6 6 6 6 6 6 
6 6 6 6 6 6 
6 6 6 6 6 6 
6 6 6 6 6 6 
6 6 6 6 6 6 
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Factorial Division
[code-task title="Factorial Division" taskId="java-fund-Methods-Exercise-Factorial-Division" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Read **two integer numbers**.

Calculate **factorial** of each number.

**Divide the first result by the second** and print the **division formatted to the second** decimal point.

### Example
| **Input** | **Output** |
| --- | --- |
| 5 | 60.00 |
| 2 | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
2
[/input]
[output]
60.00
[/output]
[/test]
[test]
[input]
6
2
[/input]
[output]
360.00
[/output]
[/test]
[test]
[input]
2
2
[/input]
[output]
1.00
[/output]
[/test]
[test]
[input]
14
4
[/input]
[output]
3632428800.00
[/output]
[/test]
[test]
[input]
1
12
[/input]
[output]
0.00
[/output]
[/test]
[test]
[input]
5
3
[/input]
[output]
20.00
[/output]
[/test]
[test]
[input]
11
3
[/input]
[output]
6652800.00
[/output]
[/test]
[test]
[input]
10
12
[/input]
[output]
0.01
[/output]
[/test]
[test]
[input]
14
13
[/input]
[output]
14.00
[/output]
[/test]
[test]
[input]
6
5
[/input]
[output]
6.00
[/output]
[/test]
[test]
[input]
11
1
[/input]
[output]
39916800.00
[/output]
[/test]
[test]
[input]
12
13
[/input]
[output]
0.08
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Palindrome Integers
[code-task title="Palindrome Integers" taskId="java-fund-Methods-Exercise-Palindrome-Integers" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
A palindrome is a number which reads the same **backward as forward,** such as 323 or 1001.

Write a program which reads a positive integer numbers **until you receive** "END", for each number **print whether the number is palindrome or not**.

### Example
| **Input** | **Output** |
| --- | --- |
| 123 | false |
| 323 | true |
| 421 | false |
| 121 | true |
| END | |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
123
323
421
121
END
[/input]
[output]
false
true
false
true
[/output]
[/test]
[test]
[input]
32
2
232
1010
END
[/input]
[output]
false
true
true
false
[/output]
[/test]
[test]
[input]
121
159
259
END
[/input]
[output]
true
false
false
[/output]
[/test]
[test]
[input]
121
528
891
622
271
602
117
489
END
[/input]
[output]
true
false
false
false
false
false
false
false
[/output]
[/test]
[test]
[input]
70
555
523
902
554
209
918
37
808
END
[/input]
[output]
false
true
false
false
false
false
false
false
true
[/output]
[/test]
[test]
[input]
567
656
920
184
580
128
638
276
137
END
[/input]
[output]
false
true
false
false
false
false
false
false
false
[/output]
[/test]
[test]
[input]
123321
121
356653
157
1001
666
159951
END
[/input]
[output]
true
true
true
false
true
true
true
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Top Number

[vimeo-video]
[stream language="EN" videoId="421823015" default /]
[stream language="RO" videoId="430365015"  /]
[/video-vimeo]

[code-task title="Top Number" taskId="java-fund-Methods-Exercise-Top-Number" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
A **top number** is an integer that holds the following properties:
- Its sum of digits is divisible by 8, e.g. 8, 16, 88.
- Holds at least one odd digit, e.g. 232, 707, 87578.

Write a program to print all master numbers in the range [1…n].

### Example
| **Input** | **Output** |
| --- | --- |
| 100 | 17 |
| | 35 |
| | 53 |
| | 71 |
| | 79 |
| | 97 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
100
[/input]
[output]
17
35
53
71
79
97
[/output]
[/test]
[test]
[input]
50
[/input]
[output]
17
35
[/output]
[/test]
[test]
[input]
211
[/input]
[output]
17
35
53
71
79
97
107
116
125
134
143
152
161
169
170
178
187
196
[/output]
[/test]
[test]
[input]
885
[/input]
[output]
17
35
53
71
79
97
107
116
125
134
143
152
161
169
170
178
187
196
215
233
251
259
277
295
305
314
323
332
341
349
350
358
367
376
385
394
413
431
439
457
475
493
503
512
521
529
530
538
547
556
565
574
583
592
611
619
637
655
673
691
699
701
709
710
718
727
736
745
754
763
772
781
789
790
798
817
835
853
871
879
[/output]
[/test]
[test]
[input]
791
[/input]
[output]
17
35
53
71
79
97
107
116
125
134
143
152
161
169
170
178
187
196
215
233
251
259
277
295
305
314
323
332
341
349
350
358
367
376
385
394
413
431
439
457
475
493
503
512
521
529
530
538
547
556
565
574
583
592
611
619
637
655
673
691
699
701
709
710
718
727
736
745
754
763
772
781
789
790
[/output]
[/test]
[test]
[input]
348
[/input]
[output]
17
35
53
71
79
97
107
116
125
134
143
152
161
169
170
178
187
196
215
233
251
259
277
295
305
314
323
332
341
[/output]
[/test]
[test]
[input]
461
[/input]
[output]
17
35
53
71
79
97
107
116
125
134
143
152
161
169
170
178
187
196
215
233
251
259
277
295
305
314
323
332
341
349
350
358
367
376
385
394
413
431
439
457
[/output]
[/test]
[test]
[input]
181
[/input]
[output]
17
35
53
71
79
97
107
116
125
134
143
152
161
169
170
178
[/output]
[/test]
[test]
[input]
230
[/input]
[output]
17
35
53
71
79
97
107
116
125
134
143
152
161
169
170
178
187
196
215
[/output]
[/test]
[test]
[input]
360
[/input]
[output]
17
35
53
71
79
97
107
116
125
134
143
152
161
169
170
178
187
196
215
233
251
259
277
295
305
314
323
332
341
349
350
358
[/output]
[/test]
[test]
[input]
175
[/input]
[output]
17
35
53
71
79
97
107
116
125
134
143
152
161
169
170
[/output]
[/test]
[test]
[input]
1000
[/input]
[output]
17
35
53
71
79
97
107
116
125
134
143
152
161
169
170
178
187
196
215
233
251
259
277
295
305
314
323
332
341
349
350
358
367
376
385
394
413
431
439
457
475
493
503
512
521
529
530
538
547
556
565
574
583
592
611
619
637
655
673
691
699
701
709
710
718
727
736
745
754
763
772
781
789
790
798
817
835
853
871
879
897
907
916
925
934
943
952
961
969
970
978
987
996
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
