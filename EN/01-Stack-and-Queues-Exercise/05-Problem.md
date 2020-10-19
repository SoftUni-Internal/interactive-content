[slide hideTitle]
# Problem: Robotics
[code-task title="Robotics" taskId="31ac9f55-2ed1-4c9e-83b5-5abe32b54c87" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Somewhere in the future, there is a robotics factory.

The current project is assembly-line robots.

Each robot has a **processing time**, the time it needs to process a product. 

When a **robot is free** it should **take a product for processing** and log his name, product, and processing start time.

Each robot **processes a product coming from the assembly line**. 

A **product is coming** from the line **each second** (so the first product should appear at [start time + 1 second]). 

If a product passes the line and **there is not a free robot** to take it, it should be **queued at the end of the line again**.

The robots are **standing on the line in the order of their appearance**.

## Input

- On the first line, you will get the names of the robots and their processing times in format `robotName-processTime;robotName-processTime;robotName-processTime`
- On the second line, you will get the starting time in format `hh:mm:ss`
- Next, until the `End` command, you will get a product on each line.

## Examples
| **Input** | **Output** |
| --- | --- |
| ROB-15;SS2-10;NX8000-3 | ROB - detail \[08:00:01\] |
| 8:00:00 | SS2 - glass \[08:00:02\] |
| detail | NX8000 - wood \[08:00:03\] |
| glass | NX8000 - apple \[08:00:06\] |
| wood |  |
| apple |  |
| End |  |

| **Input** | **Output** |
| --- | --- |
| ROB-60 | ROB - detail \[08:00:00\] |
| 7:59:59 | ROB - sock \[08:01:00\] |
| detail | ROB - wood \[08:02:00\] |
| glass | ROB - glass \[08:03:00\] |
| wood |  |
| sock |  |
| End |  |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
ROB-15;SS2-10;NX8000-3
8:00:00
detail
glass
wood
apple
End
[/input]
[output]
ROB - detail \[08:00:01\]
SS2 - glass \[08:00:02\]
NX8000 - wood \[08:00:03\]
NX8000 - apple \[08:00:06\]
[/output]
[/test]
[test open]
[input]
ROB-60
7:59:59
detail
glass
wood
sock
End
[/input]
[output]
ROB - detail \[08:00:00\]
ROB - sock \[08:01:00\]
ROB - wood \[08:02:00\]
ROB - glass \[08:03:00\]
[/output]
[/test]
[test]
[input]
ROB-90;SS2-120;NX8000-300
12:00:00
detail
glass
detail
glass
wood
detail
glass
wood
sock
sock
wood
detail
glass
wood
sock
sock
End
[/input]
[output]
ROB - detail \[12:00:01\]
SS2 - glass \[12:00:02\]
NX8000 - detail \[12:00:03\]
ROB - glass \[12:01:31\]
SS2 - glass \[12:02:02\]
ROB - wood \[12:03:01\]
SS2 - detail \[12:04:02\]
ROB - sock \[12:04:31\]
NX8000 - wood \[12:05:03\]
ROB - glass \[12:06:01\]
SS2 - wood \[12:06:02\]
ROB - sock \[12:07:31\]
SS2 - wood \[12:08:02\]
ROB - sock \[12:09:01\]
SS2 - detail \[12:10:02\]
NX8000 - sock \[12:10:03\]
[/output]
[/test]
[test]
[input]
BB-8;R2D-2;C3P-0
23:57:20
detail
coffee
glass
detail
beer
glass
wood
detail
glass
wood
sock
cigarettes
sock
wood
phone
detail
glass
wood
swine
sock
rocket
sock
duck
End
[/input]
[output]
BB - detail \[23:57:21\]
R2D - coffee \[23:57:22\]
C3P - glass \[23:57:23\]
R2D - detail \[23:57:24\]
C3P - beer \[23:57:25\]
R2D - glass \[23:57:26\]
C3P - wood \[23:57:27\]
R2D - detail \[23:57:28\]
BB - glass \[23:57:29\]
R2D - wood \[23:57:30\]
C3P - sock \[23:57:31\]
R2D - cigarettes \[23:57:32\]
C3P - sock \[23:57:33\]
R2D - wood \[23:57:34\]
C3P - phone \[23:57:35\]
R2D - detail \[23:57:36\]
BB - glass \[23:57:37\]
R2D - wood \[23:57:38\]
C3P - swine \[23:57:39\]
R2D - sock \[23:57:40\]
C3P - rocket \[23:57:41\]
R2D - sock \[23:57:42\]
C3P - duck \[23:57:43\]
[/output]
[/test]
[test]
[input]
BB-800;R2D-2400;C3P-3560
23:57:20
detail
coffee
glass
detail
beer
glass
wood
detail
glass
wood
sock
cigarettes
sock
wood
phone
detail
glass
wood
swine
sock
rocket
sock
duck
End
[/input]
[output]
BB - detail \[23:57:21\]
R2D - coffee \[23:57:22\]
C3P - glass \[23:57:23\]
BB - rocket \[00:10:41\]
BB - duck \[00:24:01\]
BB - sock \[00:37:21\]
R2D - cigarettes \[00:37:22\]
BB - glass \[00:50:41\]
C3P - sock \[00:56:43\]
BB - glass \[01:04:01\]
BB - glass \[01:17:21\]
R2D - wood \[01:17:22\]
BB - swine \[01:30:41\]
BB - wood \[01:44:01\]
C3P - sock \[01:56:03\]
BB - phone \[01:57:21\]
R2D - detail \[01:57:22\]
BB - sock \[02:10:41\]
BB - wood \[02:24:01\]
BB - wood \[02:37:21\]
R2D - detail \[02:37:22\]
BB - beer \[02:50:41\]
C3P - detail \[02:55:23\]
[/output]
[/test]
[test]
[input]
BB-80000;R2D-24000;C3P-35600
23:57:20
detail
coffee
glass
detail
beer
glass
wood
detail
glass
wood
sock
cigarettes
sock
wood
phone
detail
glass
wood
swine
sock
rocket
sock
duck
End
[/input]
[output]
BB - detail \[23:57:21\]
R2D - coffee \[23:57:22\]
C3P - glass \[23:57:23\]
R2D - sock \[06:37:22\]
C3P - sock \[09:50:43\]
R2D - glass \[13:17:22\]
C3P - detail \[19:44:03\]
R2D - rocket \[19:57:22\]
BB - wood \[22:10:41\]
R2D - beer \[02:37:22\]
C3P - swine \[05:37:23\]
R2D - glass \[09:17:22\]
C3P - detail \[15:30:43\]
R2D - duck \[15:57:22\]
BB - phone \[20:24:01\]
R2D - detail \[22:37:22\]
C3P - sock \[01:24:03\]
R2D - cigarettes \[05:17:22\]
C3P - wood \[11:17:23\]
R2D - glass \[11:57:22\]
BB - wood \[18:37:21\]
R2D - sock \[18:37:22\]
C3P - wood \[21:10:43\]
[/output]
[/test]
[test]
[input]
BB-80000;SARS-34300;GOD200R5-9800;Hammerhead-42000;R2D-24000;C3P-35600
23:57:20
detail
coffee
glass
detail
beer
glass
wood
detail
glass
wood
sock
cigarettes
sock
wood
phone
detail
glass
wood
swine
sock
rocket
sock
duck
detail
coffee
glass
detail
beer
glass
wood
detail
glass
wood
sock
cigarettes
sock
wood
phone
detail
glass
wood
swine
sock
rocket
sock
duck
detail
coffee
glass
detail
beer
glass
wood
detail
glass
wood
sock
cigarettes
sock
wood
phone
detail
glass
wood
swine
sock
rocket
sock
duck
detail
coffee
glass
detail
beer
glass
wood
detail
glass
wood
sock
cigarettes
sock
wood
phone
detail
glass
wood
swine
sock
rocket
sock
duck
detail
coffee
glass
detail
beer
glass
wood
detail
glass
wood
sock
cigarettes
sock
wood
phone
detail
glass
wood
swine
sock
rocket
sock
duck
detail
coffee
glass
detail
beer
glass
wood
detail
glass
wood
sock
cigarettes
sock
wood
phone
detail
glass
wood
swine
sock
rocket
sock
duck
detail
coffee
glass
detail
beer
glass
wood
detail
glass
wood
sock
cigarettes
sock
wood
phone
detail
glass
wood
swine
sock
rocket
sock
duck
detail
coffee
glass
detail
beer
glass
wood
detail
glass
wood
sock
cigarettes
sock
wood
phone
detail
glass
wood
swine
sock
rocket
sock
duck
detail
coffee
glass
detail
beer
glass
wood
detail
glass
wood
sock
cigarettes
sock
wood
phone
detail
glass
wood
swine
sock
rocket
sock
duck
End
[/input]
[output]
BB - detail \[23:57:21\]
SARS - coffee \[23:57:22\]
GOD200R5 - glass \[23:57:23\]
Hammerhead - detail \[23:57:24\]
R2D - beer \[23:57:25\]
C3P - glass \[23:57:26\]
GOD200R5 - glass \[02:40:43\]
GOD200R5 - detail \[05:24:03\]
R2D - wood \[06:37:25\]
GOD200R5 - wood \[08:07:23\]
SARS - sock \[09:29:02\]
C3P - glass \[09:50:46\]
GOD200R5 - sock \[10:50:43\]
Hammerhead - detail \[11:37:24\]
R2D - sock \[13:17:25\]
GOD200R5 - glass \[13:34:03\]
GOD200R5 - beer \[16:17:23\]
SARS - glass \[19:00:42\]
GOD200R5 - detail \[19:00:43\]
C3P - glass \[19:44:06\]
R2D - beer \[19:57:25\]
GOD200R5 - sock \[21:44:03\]
BB - cigarettes \[22:10:41\]
Hammerhead - detail \[23:17:24\]
GOD200R5 - wood \[00:27:23\]
R2D - cigarettes \[02:37:25\]
GOD200R5 - swine \[03:10:43\]
SARS - wood \[04:32:22\]
C3P - duck \[05:37:26\]
GOD200R5 - wood \[05:54:03\]
GOD200R5 - phone \[08:37:23\]
R2D - detail \[09:17:25\]
Hammerhead - duck \[10:57:24\]
GOD200R5 - wood \[11:20:43\]
SARS - duck \[14:04:02\]
GOD200R5 - wood \[14:04:03\]
C3P - sock \[15:30:46\]
R2D - wood \[15:57:25\]
GOD200R5 - beer \[16:47:23\]
GOD200R5 - detail \[19:30:43\]
BB - glass \[20:24:01\]
GOD200R5 - glass \[22:14:03\]
Hammerhead - wood \[22:37:24\]
R2D - swine \[22:37:25\]
SARS - sock \[23:35:42\]
GOD200R5 - detail \[00:57:23\]
C3P - wood \[01:24:06\]
GOD200R5 - rocket \[03:40:43\]
R2D - coffee \[05:17:25\]
GOD200R5 - glass \[06:24:03\]
SARS - sock \[09:07:22\]
GOD200R5 - wood \[09:07:23\]
Hammerhead - sock \[10:17:24\]
C3P - sock \[11:17:26\]
GOD200R5 - detail \[11:50:43\]
R2D - glass \[11:57:25\]
GOD200R5 - detail \[14:34:03\]
GOD200R5 - cigarettes \[17:17:23\]
BB - detail \[18:37:21\]
R2D - beer \[18:37:25\]
SARS - wood \[18:39:02\]
GOD200R5 - wood \[20:00:43\]
C3P - detail \[21:10:46\]
Hammerhead - swine \[21:57:24\]
GOD200R5 - duck \[22:44:03\]
R2D - detail \[01:17:25\]
GOD200R5 - cigarettes \[01:27:23\]
SARS - glass \[04:10:42\]
GOD200R5 - wood \[04:10:43\]
GOD200R5 - wood \[06:54:03\]
C3P - sock \[07:04:06\]
R2D - cigarettes \[07:57:25\]
GOD200R5 - wood \[09:37:23\]
Hammerhead - sock \[09:37:24\]
GOD200R5 - swine \[12:20:43\]
SARS - wood \[13:42:22\]
R2D - glass \[14:37:25\]
GOD200R5 - detail \[15:04:03\]
BB - wood \[16:50:41\]
C3P - rocket \[16:57:26\]
GOD200R5 - sock \[17:47:23\]
GOD200R5 - sock \[20:30:43\]
Hammerhead - swine \[21:17:24\]
R2D - rocket \[21:17:25\]
SARS - rocket \[23:14:02\]
GOD200R5 - sock \[23:14:03\]
GOD200R5 - detail \[01:57:23\]
C3P - phone \[02:50:46\]
R2D - glass \[03:57:25\]
GOD200R5 - cigarettes \[04:40:43\]
GOD200R5 - detail \[07:24:03\]
SARS - beer \[08:45:42\]
Hammerhead - swine \[08:57:24\]
GOD200R5 - detail \[10:07:23\]
R2D - coffee \[10:37:25\]
C3P - sock \[12:44:06\]
GOD200R5 - glass \[12:50:43\]
BB - sock \[15:04:01\]
GOD200R5 - rocket \[15:34:03\]
R2D - rocket \[17:17:25\]
SARS - detail \[18:17:22\]
GOD200R5 - beer \[18:17:23\]
Hammerhead - glass \[20:37:24\]
GOD200R5 - wood \[21:00:43\]
C3P - wood \[22:37:26\]
GOD200R5 - sock \[23:44:03\]
R2D - detail \[23:57:25\]
GOD200R5 - coffee \[02:27:23\]
SARS - glass \[03:49:02\]
GOD200R5 - swine \[05:10:43\]
R2D - glass \[06:37:25\]
GOD200R5 - rocket \[07:54:03\]
Hammerhead - wood \[08:17:24\]
C3P - duck \[08:30:46\]
GOD200R5 - sock \[10:37:23\]
BB - detail \[13:17:21\]
R2D - glass \[13:17:25\]
SARS - duck \[13:20:42\]
GOD200R5 - detail \[13:20:43\]
GOD200R5 - detail \[16:04:03\]
C3P - wood \[18:24:06\]
GOD200R5 - coffee \[18:47:23\]
Hammerhead - detail \[19:57:24\]
R2D - coffee \[19:57:25\]
GOD200R5 - phone \[21:30:43\]
SARS - phone \[22:52:22\]
GOD200R5 - phone \[00:14:03\]
R2D - glass \[02:37:25\]
GOD200R5 - sock \[02:57:23\]
C3P - glass \[04:17:26\]
GOD200R5 - detail \[05:40:43\]
Hammerhead - glass \[07:37:24\]
SARS - sock \[08:24:02\]
GOD200R5 - cigarettes \[08:24:03\]
R2D - wood \[09:17:25\]
GOD200R5 - wood \[11:07:23\]
BB - glass \[11:30:41\]
GOD200R5 - detail \[13:50:43\]
C3P - cigarettes \[14:10:46\]
R2D - sock \[15:57:25\]
GOD200R5 - sock \[16:34:03\]
SARS - glass \[17:55:42\]
GOD200R5 - sock \[19:17:23\]
Hammerhead - phone \[19:17:24\]
GOD200R5 - glass \[22:00:43\]
R2D - wood \[22:37:25\]
C3P - sock \[00:04:06\]
GOD200R5 - detail \[00:44:03\]
SARS - wood \[03:27:22\]
GOD200R5 - detail \[03:27:23\]
R2D - phone \[05:17:25\]
GOD200R5 - glass \[06:10:43\]
Hammerhead - wood \[06:57:24\]
GOD200R5 - rocket \[08:54:03\]
BB - glass \[09:44:01\]
C3P - glass \[09:57:26\]
GOD200R5 - coffee \[11:37:23\]
R2D - glass \[11:57:25\]
SARS - beer \[12:59:02\]
GOD200R5 - wood \[14:20:43\]
GOD200R5 - glass \[17:04:03\]
Hammerhead - sock \[18:37:24\]
R2D - rocket \[18:37:25\]
GOD200R5 - wood \[19:47:23\]
C3P - glass \[19:50:46\]
SARS - sock \[22:30:42\]
GOD200R5 - coffee \[22:30:43\]
GOD200R5 - swine \[01:14:03\]
R2D - sock \[01:17:25\]
GOD200R5 - detail \[03:57:23\]
C3P - glass \[05:44:06\]
Hammerhead - detail \[06:17:24\]
GOD200R5 - detail \[06:40:43\]
BB - duck \[07:57:21\]
R2D - sock \[07:57:25\]
SARS - detail \[08:02:22\]
GOD200R5 - glass \[09:24:03\]
GOD200R5 - detail \[12:07:23\]
R2D - sock \[14:37:25\]
GOD200R5 - cigarettes \[14:50:43\]
C3P - duck \[15:37:26\]
SARS - sock \[17:34:02\]
GOD200R5 - coffee \[17:34:03\]
Hammerhead - wood \[17:57:24\]
GOD200R5 - wood \[20:17:23\]
R2D - glass \[21:17:25\]
GOD200R5 - beer \[23:00:43\]
C3P - sock \[01:30:46\]
GOD200R5 - sock \[01:44:03\]
SARS - detail \[03:05:42\]
R2D - glass \[03:57:25\]
GOD200R5 - duck \[04:27:23\]
Hammerhead - wood \[05:37:24\]
BB - phone \[06:10:41\]
GOD200R5 - glass \[07:10:43\]
GOD200R5 - detail \[09:54:03\]
R2D - sock \[10:37:25\]
C3P - detail \[11:24:06\]
SARS - phone \[12:37:22\]
GOD200R5 - sock \[12:37:23\]
GOD200R5 - wood \[15:20:43\]
Hammerhead - swine \[17:17:24\]
R2D - wood \[17:17:25\]
GOD200R5 - wood \[18:04:03\]
GOD200R5 - sock \[20:47:23\]
C3P - wood \[21:17:26\]
SARS - sock \[22:09:02\]
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
