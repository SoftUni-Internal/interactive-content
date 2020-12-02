[slide hideTitle]
# Problem: Caesar Cipher
[code-task title="Caesar Cipher" taskId="c46864a7-02cc-4fdd-b8a9-2daf11d12134" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that **returns an encrypted version of the same text**.

**Encrypt the text by shifting each character with three positions forward**.

**For example** A would be replaced by D, B would become E, and so on.

**Print the encrypted text**.

### Example
| **Input** | **Output** |
| --- | --- |
| Programming is cool! | Surjudpplqj#lv#frro$ | 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Programming is cool!
[/input]
[output]
Surjudpplqj#lv#frro$
[/output]
[/test]
[test]
[input]
One year has 365 days.
[/input]
[output]
Rqh#\|hdu#kdv#698#gd\|v1
[/output]
[/test]
[test]
[input]
Where do random thoughts come from?
[/input]
[output]
Zkhuh#gr#udqgrp#wkrxjkwv#frph#iurpB
[/output]
[/test]
[test]
[input]
I think I will buy the red car, or I will lease the blue one.
[/input]
[output]
L#wklqn#L#zloo#ex\|#wkh#uhg#fdu/#ru#L#zloo#ohdvh#wkh#eoxh#rqh1
[/output]
[/test]
[test]
[input]
The stranger officiates the meal.
[/input]
[output]
Wkh#vwudqjhu#riilfldwhv#wkh#phdo1
[/output]
[/test]
[test]
[input]
There was no ice cream in the freezer, nor did they have money to go to the store.
[/input]
[output]
Wkhuh#zdv#qr#lfh#fuhdp#lq#wkh#iuhh}hu/#qru#glg#wkh\|#kdyh#prqh\|#wr#jr#wr#wkh#vwruh1
[/output]
[/test]
[test]
[input]
My Mum tries to be cool by saying that she likes all the same things that I do.
[/input]
[output]
P\|#Pxp#wulhv#wr#eh#frro#e\|#vd\|lqj#wkdw#vkh#olnhv#doo#wkh#vdph#wklqjv#wkdw#L#gr1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]