[slide]

# Testing Function Adapter JS

[code-task title="Building" taskId="pb-js-testing-function" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function intFloat(n1,n2,n3){
    let sumNums = n1+n2+n3;
    let type;
    if (sumNums % 1 === 0){
        type = "Integer";
    }else {
        type = "Float";
    }

    console.log(`${sumNums} - ${type}`);
}
```
[/code-editor]
[code-adapter]
```
function adapter(input, code) {
    let inputParams = /\((.+)\)$/.exec(input)[1];
    inputParams = eval(`[${inputParams}]`);
    return code(...inputParams);
}
```
[/code-adapter]
[task-description]
# Description

Test Adapter Function Here with this code **input**:

solve(9, 100, 1.1)

**Output** must be: 

110.1 - Float

[/task-description]
[tests]
[test open]
[input]
solve(9, 100, 1.1)
[/input]
[output]
110.1 - Float
[/output]
[/test]
[test open]
[input]
solve(100, 200, 303)
[/input]
[output]
603 - Integer
[/output]
[/test]
[test]
[input]
solve(9, 14156, 1231.41)
[/input]
[output]
15396.41 - Float
[/output]
[/test]
[test]
[input]
solve(456, 120, 145.41)
[/input]
[output]
721.41 - Float
[/output]
[/test]
[test]
[input]
solve(912, 54610, 451.11)
[/input]
[output]
55973.11 - Float
[/output]
[/test]
[test]
[input]
solve(56, 2120, 3203)
[/input]
[output]
5379 - Integer
[/output]
[/test]
[test]
[input]
solve(170, 2098, 483)
[/input]
[output]
2751 - Integer
[/output]
[/test]
[test]
[input]
solve(10990, 78, 483)
[/input]
[output]
11551 - Integer
[/output]
[/test]
[/tests]
[code-io/]
[/code-task]
[/slide]