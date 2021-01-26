[slide hideTitle]
# javascript-code
[code-task title="Marketplace" taskId="random-id-for-testing-1238219309123" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function marketPlace(input) {
  let product = input[0];
  let dayOfWeek = input[1];

  if (product == "Banana") {
    if (dayOfWeek == "Weekday") {
      console.log("2.50");
    } else
      console.log("2.70");
  } else if (product == "Apple") {
    if (dayOfWeek == "Weekday") {
      console.log("1.30");
    } else {
      console.log("1.60");
    }
  } else if (product == "Kiwi") {
    if (dayOfWeek == "Weekday") {
      console.log("2.20");
    } else {
      console.log("3.00");
    }
  }
}
```
[/code-editor]
[task-description]
# Description
Write a program that: 

- Reads a **product** and a day from the console. 

- Prints the **price**, formatted to 2nd digit, based on the price table below: 

| Product      | Weekday | Weekend   |
| :---:       |    :----:   |   :---:     |
| Banana      | 2.50       | 2.70 |
| Apple   | 1.30        | 1.60    |
| Kiwi   | 2.20        | 3.00    |

# Example
| **Input** | **Output** |
| --- | --- |
| Banana| 2.50 |
|  Weekday||

[/task-description]
[tests]
[test]
[input]
Banana
Weekday
[/input]
[output]
2.50
[/output]
[/test]
[test]
[input]
Apple
Weekend
[/input]
[output]
1.60
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]