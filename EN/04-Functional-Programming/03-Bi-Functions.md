[slide]

# Using Functions With More Parameters

The `BiFunction <T,U,R>` interface is a part of **java.util.function** package.

## Type parameters:

**T** - The type of the first argument to the function

**U** - The type of the second argument to the function

**R** - The type of the result of the function

It represents a **function** which takes in two arguments and produces a **result**.

``` java
BiFunction <Integer, Integer, String> sum = (x, y) -> "Sum is" + (x + y);
// We have two input parameters
```

Analogically we can use:

- `BiConsumer <T, U>`

- `BiPredicate <T, U>`


Additional we can pass `Function<T,R>` to methods:

``` java
static int operation(int number, Function<Integer, Integer> function) {
  return function.apply(number);
}

```

We can use the method like that:

``` java
int a = 5;
int b = operation(a, number -> number + 5); // b = 10;
int c = operation(a, number -> number * 3); // b = 15;
int d = operation(b, number -> number % 2); // b = 0;
```



[/slide]

[slide hideTitle]
# Problem: Filter by Age
[code-task title="Problem: Filter by Age" taskId="90fc0093-b7c1-4ef4-9dd8-65e305b0b0d0" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program that reads an integer **N** on the first line. And on next **N** lines read pairs of "**name, age**". Then read three more lines with:

- Condition - **"younger"** or **"older"**

- Age - **Integer**

- Format - **"name"**, **"age"**, or **"name age"**

Depending on the **condition**, print the **pairs** in the right **format**.


**Don’t use any build-in functionality. Write your own methods.**


## Examples

 
| **Input** | **Output** |                                 
| --- | --- |
| 5 | Peter - 20
| Peter - 20 | Maria - 29 |  
| George, 18 | Alex - 31 |
| Maria, 29 |
| Alex, 31 |
| Ivan, 16 |
| older |
| 20 |
| name age |

| **Input** | **Output** |
| --- | --- |
| 5 | Peter 
| Peter - 20 | George |  
| George, 18 | Ivan |
| Maria, 29 |
| Alex, 31 |
| Ivan, 16 |
| younger |
| 20 |
| name |

| **Input** | **Output** |
| --- | --- |
| 5 | 20
| Peter - 20 | 18 |  
| George, 18 | 29 |
| Maria, 29 | 31 |
| Alex, 31 | 16 |
| Ivan, 16 |
| younger |
| 50 |
| age |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
Peter, 20
George, 18
Maria, 29
Alex, 31
Ivan, 16
older
20
name age
[/input]
[output]
Peter - 20
Maria - 29
Alex - 31
[/output]
[/test]
[test open]
[input]
5
Peter, 20
George, 18
Maria, 29
Alex, 31
Ivan, 16
younger
20
name
[/input]
[output]
Peter
George
Ivan
[/output]
[/test]
[test open]
[input]
5
Peter, 20
George, 18
Maria, 29
Alex, 31
Ivan, 16
younger
50
age
[/input]
[output]
20
18
29
31
16
[/output]
[/test]
[test]
[input]
5
Pesho, 20
Gosho, 18
Mimi, 29
Ico, 31
Simo, 16
younger
30
name
[/input]
[output]
Pesho
Gosho
Mimi
Simo
[/output]
[/test]
[test]
[input]
3
Pesho, 20
Gosho, 18
Mimi, 29
younger
30
name
[/input]
[output]
Pesho
Gosho
Mimi
[/output]
[/test]
[test]
[input]
3
Pesho, 20
Gosho, 18
Mimi, 29
younger
30
name age
[/input]
[output]
Pesho - 20
Gosho - 18
Mimi - 29
[/output]
[/test]
[test]
[input]
5
Pesho, 20
Gosho, 18
Mimi, 29
Ico, 31
Simo, 16
older
15
name age
[/input]
[output]
Pesho - 20
Gosho - 18
Mimi - 29
Ico - 31
Simo - 16
[/output]
[/test]
[test]
[input]
5
Pesho, 20
Gosho, 18
Mimi, 29
Ico, 31
Simo, 16
younger
15
name age
[/input]
[output]

[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Solution: Filter by Age
[code-task title="Problem: Filter by Age" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.function.BiPredicate;
import java.util.function.Consumer;

public class Main {
    public static void main(String[] args) throws IOException {
        BiPredicate<Map.Entry<String, Integer>, Integer> youngerThen =
                (person, ageLimit) -> person.getValue() <= ageLimit;

        BiPredicate<Map.Entry<String, Integer>, Integer> olderThen =
                (person, ageLimit) -> person.getValue() >= ageLimit;

        Consumer<Map.Entry<String, Integer>> printName = person -> System.out.println(person.getKey());
        Consumer<Map.Entry<String, Integer>> printAge = person -> System.out.println(person.getValue());
        Consumer<Map.Entry<String, Integer>> printNameAndAge = person ->
                System.out.printf("%s - %d%n", person.getKey(), person.getValue());

        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        LinkedHashMap<String, Integer> peoples = new LinkedHashMap<>();
        int peopleCount = Integer.parseInt(reader.readLine());

        for (int i = 0; i < peopleCount; i++) {
            String[] line = reader.readLine().split(", ");

            peoples.put(line[0], Integer.parseInt(line[1]));
        }

        String comparison = reader.readLine();
        int ageLimit = Integer.parseInt(reader.readLine());
        String printType = reader.readLine();

        peoples.entrySet().stream()
                .filter(person -> comparison.equals("younger") ?
                        youngerThen.test(person, ageLimit) :
                        olderThen.test(person, ageLimit))
                .forEach(person -> {
                    switch (printType){
                        case "age":
                            printAge.accept(person);
                            break;
                        case "name":
                            printName.accept(person);
                            break;
                        default:
                            printNameAndAge.accept(person);
                            break;
                    }
                });
    }
}
```
[/code-editor]
[task-description]
## Description
Write a program that reads an integer **N** on the first line. And on next **N** lines read pairs of "**name, age**". Then read three more lines with:

- Condition - **"younger"** or **"older"**

- Age - **Integer**

- Format - **"name"**, **"age"**, or **"name age"**

Depending on the **condition**, print the **pairs** in the right **format**.


**Don’t use any build-in functionality. Write your own methods.**


## Examples

 
| **Input** | **Output** |                                 
| --- | --- |
| 5 | Peter - 20
| Peter - 20 | Maria - 29 |  
| George, 18 | Alex - 31 |
| Maria, 29 |
| Alex, 31 |
| Ivan, 16 |
| older |
| 20 |
| name age |

| **Input** | **Output** |
| --- | --- |
| 5 | Peter 
| Peter - 20 | George |  
| George, 18 | Ivan |
| Maria, 29 |
| Alex, 31 |
| Ivan, 16 |
| younger |
| 20 |
| name |

| **Input** | **Output** |
| --- | --- |
| 5 | 20
| Peter - 20 | 18 |  
| George, 18 | 29 |
| Maria, 29 | 31 |
| Alex, 31 | 16 |
| Ivan, 16 |
| younger |
| 50 |
| age |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
5
Peter, 20
George, 18
Maria, 29
Alex, 31
Ivan, 16
older
20
name age
[/input]
[output]
Peter - 20
Maria - 29
Alex - 31
[/output]
[/test]
[test open]
[input]
5
Peter, 20
George, 18
Maria, 29
Alex, 31
Ivan, 16
younger
20
name
[/input]
[output]
Peter
George
Ivan
[/output]
[/test]
[test open]
[input]
5
Peter, 20
George, 18
Maria, 29
Alex, 31
Ivan, 16
younger
50
age
[/input]
[output]
20
18
29
31
16
[/output]
[/test]
[test]
[input]
5
Pesho, 20
Gosho, 18
Mimi, 29
Ico, 31
Simo, 16
younger
30
name
[/input]
[output]
Pesho
Gosho
Mimi
Simo
[/output]
[/test]
[test]
[input]
3
Pesho, 20
Gosho, 18
Mimi, 29
younger
30
name
[/input]
[output]
Pesho
Gosho
Mimi
[/output]
[/test]
[test]
[input]
3
Pesho, 20
Gosho, 18
Mimi, 29
younger
30
name age
[/input]
[output]
Pesho - 20
Gosho - 18
Mimi - 29
[/output]
[/test]
[test]
[input]
5
Pesho, 20
Gosho, 18
Mimi, 29
Ico, 31
Simo, 16
older
15
name age
[/input]
[output]
Pesho - 20
Gosho - 18
Mimi - 29
Ico - 31
Simo - 16
[/output]
[/test]
[test]
[input]
5
Pesho, 20
Gosho, 18
Mimi, 29
Ico, 31
Simo, 16
younger
15
name age
[/input]
[output]

[/output]
[/test]
[/tests]
[/code-task]
[/slide]