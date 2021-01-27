[slide]
# php-code

[code-task title="Yard Greening" taskId="php-code-statements-Yard-Greening" executionType="tests-execution" executionStrategy="php-code" requiresInput]
[code-io /]
[code-editor language=php]
```
<?php
$n = intval(readline());

$month  = ["Invalid Month!", "January", "February","March", "April",
    "May", "June", "July", "August", "September", "October", "November", "December","Invalid Month!"];

echo $month[$n];
```
[/code-editor]
[task-description]
## Description
Description ...

[/task-description]
[tests]
[test open]
[input]
1
[/input]
[output]
January
[/output]
[/test]
[test]
[input]
1
[/input]
[output]
January
[/output]
[/test]
[test]
[input]
2
[/input]
[output]
February
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
