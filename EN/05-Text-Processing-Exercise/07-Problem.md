# Problem: String Explosion

[slide]
# Video

[vimeo-video]
[stream language="EN" videoId="421822656" default /]
[stream language="RO" videoId="436016476"  /]
[/video-vimeo]
[/slide]

[slide hideTitle]
# Problem: String Explosion
[code-task title="String Explosion" taskId="ba2d7943-6271-4a2e-9266-5dae9fed1ba3" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
**Explosions are marked** with '>'.

Immediately after the mark, there will be an integer, which signifies the **strength of the explosion**.

You should **remove x characters** (where x is the strength of the explosion), **starting after the punch character** ('>').

If you find **another explosion mark** ('>') **while you're deleting characters**, you should **add the strength to your previous explosion**.

When all characters are processed, **print the string without the deleted characters**. 

You **should not delete the explosion character** - '>', but you **should delete the integers**, which represent the strength.

### Input
You will receive single line with the string.

### Output
Print what is left from the string after explosions.

### Example
| **Input** | **Output** |
| --- | --- |
| abv>1>1>2>2asdasd | abv>>>>dasd |

### Comments
1st explosion is at index 3 and it is with strength of 1. 

We delete only the digit after the explosion character. 

The string will look like this: abv>>1>2>2asdasd

2nd explosion is with strength one and the string transforms to this: abv>>>2>2asdasd

3rd explosion is now with strength of 2. 

We delete the digit and we find another explosion. 

At this point the string looks like this: abv>>>>2asdasd. 

4th explosion is with strength 2. 

We have 1 strength left from the previous explosion, we add the strength of the current explosion to what is left and that adds up to a total strength of 3. 

We delete the next three characters and we receive the string abv>>>>dasd 

We do not have any more explosions and we print the result: abv>>>>dasd

[/task-description]
[code-io /]
[tests]
[test open]
[input]
abv>1>1>2>2asdasd
[/input]
[output]
abv>>>>dasd
[/output]
[/test]
[test]
[input]
pesho>2sis>1a>2akarate>4hexmaster
[/input]
[output]
pesho>is>a>karate>master
[/output]
[/test]
[test]
[input]
abv>1as>1 dfgdg>2ss>2Adasd
[/input]
[output]
abv>as> dfgdg>s>dasd
[/output]
[/test]
[test]
[input]
aaaa>2B>3ACe>1asdfghjkl
[/input]
[output]
aaaa>>e>asdfghjkl
[/output]
[/test]
[test]
[input]
aaaa>5B>9ACE>9ASDFGHJKL
[/input]
[output]
aaaa>>>
[/output]
[/test]
[test]
[input]
frtkvd>8CARDS>5ACE>2
[/input]
[output]
frtkvd>>>
[/output]
[/test]
[/tests]
[/code-task]
[/slide]