[slide]
# Problem: Login
[code-task title="Login" taskId="JF-01-05" executionType="tests-execution" executionStrategy="python-code" requiresInput]
[code-editor language=python]
```
# Write your code here
```
[/code-editor]
[task-description]
## Description
You will be given a string representing a **username**. 

The **password** will be that **username reversed**. 

**Until** you receive the **correct** password **print** "Incorrect password. Try again." 

**When** you receive the **correct** password **print** "User \{username\} logged in." 

If the password is still not correct on the **fourth try** print "User \{username\} blocked!" and **end** the program.

### Example
| **Input** | **Output** |
| --- | --- |
| momo | User momo logged in. |
| omom | |

### Example
| **Input** | **Output** |
| --- | --- |
| sunny | Incorrect password. Try again. |
| rainy | Incorrect password. Try again. |
| cloudy | Incorrect password. Try again. |
| stormy | User sunny blocked! |
| not sunny | |

[/task-description]
[code-io /]
[tests]
[test]
[input]
Acer
login
go
let me in
recA
[/input]
[output]
Incorrect password. Try again.
Incorrect password. Try again.
Incorrect password. Try again.
User Acer logged in.
[/output]
[/test]
[test]
[input]
momo
omom
[/input]
[output]
User momo logged in.
[/output]
[/test]
[test]
[input]
sunny
rainy
cloudy
sunny
not sunny
[/input]
[output]
Incorrect password. Try again.
Incorrect password. Try again.
Incorrect password. Try again.
User sunny blocked!
[/output]
[/test]
[test]
[input]
ac
fg
df
ca
[/input]
[output]
Incorrect password. Try again.
Incorrect password. Try again.
User ac logged in.
[/output]
[/test]
[test]
[input]
bb
aa
ss
dd
ff
[/input]
[output]
Incorrect password. Try again.
Incorrect password. Try again.
Incorrect password. Try again.
User bb blocked!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]