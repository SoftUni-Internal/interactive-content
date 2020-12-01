# Problem: Count Chars in a String

[slide]
# Video

[vimeo-video]
[stream language="EN" videoId="421819388" default /]
[stream language="RO" videoId="435755578"  /]
[/video-vimeo]
[/slide]

[slide hideTitle]
# Problem: Count Chars in a String
[code-task title="Count Chars in a String" taskId="95ac6981-6926-4f87-a71a-40a9025161d6" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program which **counts all characters** in a string except space (' ').

**Print** all occurrences in the following **format**:

\{char\} -> \{occurrences\}

### Example
| **Input** | **Output** |
| --- | --- |
| text | t -> 2 | 
| | e -> 1 |
| | x -> 1 |

### Example
| **Input** | **Output** |
| --- | --- |
| text text text | t -> 6 | 
| | e -> 3 |
| | x -> 3 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
text
[/input]
[output]
t -> 2
e -> 1
x -> 1
[/output]
[/test]
[test open]
[input]
text text text
[/input]
[output]
t -> 6
e -> 3
x -> 3
[/output]
[/test]
[test]
[input]
The waves were crashing on the shore; it was a lovely sight.
[/input]
[output]
T -> 1
h -> 5
e -> 7
w -> 3
a -> 4
v -> 2
s -> 5
r -> 3
c -> 1
i -> 3
n -> 2
g -> 2
o -> 3
t -> 3
; -> 1
l -> 2
y -> 1
. -> 1
[/output]
[/test]
[test]
[input]
There were white out conditions in the town; subsequently, the roads were impassable.
[/input]
[output]
T -> 1
h -> 4
e -> 12
r -> 4
w -> 4
i -> 5
t -> 7
o -> 5
u -> 3
c -> 1
n -> 5
d -> 2
s -> 6
; -> 1
b -> 2
q -> 1
l -> 2
y -> 1
, -> 1
a -> 3
m -> 1
p -> 1
. -> 1
[/output]
[/test]
[test]
[input]
I hear that Nancy is very pretty.
[/input]
[output]
I -> 1
h -> 2
e -> 3
a -> 3
r -> 3
t -> 4
N -> 1
n -> 1
c -> 1
y -> 3
i -> 1
s -> 1
v -> 1
p -> 1
. -> 1
[/output]
[/test]
[test]
[input]
Yeah, I think it's a good environment for learning English.
[/input]
[output]
Y -> 1
e -> 4
a -> 3
h -> 3
, -> 1
I -> 1
t -> 3
i -> 5
n -> 7
k -> 1
' -> 1
s -> 2
g -> 3
o -> 4
d -> 1
v -> 1
r -> 3
m -> 1
f -> 1
l -> 2
E -> 1
. -> 1
[/output]
[/test]
[test]
[input]
Writing a list of random sentences is harder than I initially thought it would be.
[/input]
[output]
W -> 1
r -> 4
i -> 8
t -> 8
n -> 6
g -> 2
a -> 5
l -> 4
s -> 4
o -> 4
f -> 1
d -> 3
m -> 1
e -> 5
c -> 1
h -> 4
I -> 1
y -> 1
u -> 2
w -> 1
b -> 1
. -> 1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]