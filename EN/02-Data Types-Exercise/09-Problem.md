[slide]
# Problem: Spice Must Flow
[code-task title="Spice Must Flow" taskId="JF-02-09" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
      // Write code here
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program that **calculates the total amount of spice** that can be extracted from a source. 

The source has a **starting** yield, which indicates how much spice can be mined on the **first day**.

After it has been mined for a day, the yield drops by 10, meaning on the **second day it’ll produce 10 less spice** than on the first, on the **third day 10 less than on the second**, and **so on** (see examples). 

A source is considered **profitable only while its yield is at least 100** – when less than 100 spice is expected in a day, abandon the source.

The mining **crew consumes 26 spice every day** at the **end of their shift and an additional 26** after the mine has been exhausted. Note that the workers cannot consume more spice than there is in storage. 

When the operation is complete, **print on the console on two separate lines** how many **days** the mine has operated and the total **amount** of spice extracted.


### Input
You will **receive a number**, representing the **starting** yield of the source. 

### Output
Print **two separate lines** how many **days the mine has operated** and the **total amount of spice extracted**.

[/task-description]
[code-io /]
[tests]
[test]
[input]
111
[/input]
[output]
2
134
[/output]
[/test]
[test]
[input]
450
[/input]
[output] 
36
8938
[/output]
[/test]
[test]
[input]
200
[/input]
[output]
11
1338
[/output]
[/test]
[test]
[input]
1234
[/input]
[output] 
114
73276
[/output]
[/test]
[/tests]
[/code-task]
[/slide]