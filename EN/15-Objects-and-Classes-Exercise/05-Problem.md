[slide hideTitle]
# Problem: Vehicle Catalogue
[code-task title="Vehicle Catalogue" taskId="java-fund-17-Objects-and-Classes-Exercise-problem-5" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description
Until you receive the **command** "End" you will receive lines of input in the format:
- \{typeOfVehicle\} \{model\} \{color\} \{horsepower\}

After the "End" command, you will start receiving **models of vehicles**. **Print for every received vehicle** its data in the **format**:

Type: \{typeOfVehicle\}

Model: \{modelOfVehicle\}

Color: \{colorOfVehicle\}

Horsepower: \{horsepowerOfVehicle\}

When you receive the command "Close the Catalogue", stop receiving **input and print the average horsepower** for the cars and for the trucks in the **format**:

"\{typeOfVehicles\} have average horsepower of \{averageHorsepower\}."

The average horsepower is **calculated** by **dividing the sum of horsepower for all vehicles of the type by the total count of vehicles from the same type**.

Format the answer to the **second decimal point**.

### Example
| **Input** | **Output** |
| --- | --- |
| truck Man red 200 | Type: Car |
| truck Mercedes blue 300 | Model: Ferrari |
| car Ford green 120 | Color: red |
| car Ferrari red 550 | Horsepower: 550 |
| car Lamborghini orange 570 | Type: Car |
| End | Model: Ford |
| Ferrari | Color: green |
| Ford | Horsepower: 120 |
| Man | Type: Truck |
| Close the Catalogue | Model: Man |
| | Color: red |
| | Horsepower: 200 |
| | Cars have average horsepower of: 413.33. |
| | Trucks have average horsepower of: 250.00. |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
truck Man red 200
truck Mercedes blue 300
car Ford green 120
car Ferrari red 550
car Lamborghini orange 570
End
Ferrari
Ford
Man
Close the Catalogue
[/input]
[output]
Type: Car
Model: Ferrari
Color: red
Horsepower: 550
Type: Car
Model: Ford
Color: green
Horsepower: 120
Type: Truck
Model: Man
Color: red
Horsepower: 200
Cars have average horsepower of: 413.33.
Trucks have average horsepower of: 250.00.
[/output]
[/test]
[test]
[input]
car Opel green 736
End
Close the Catalogue
[/input]
[output]
Cars have average horsepower of: 736.00.
Trucks have average horsepower of: 0.00.
[/output]
[/test]
[test]
[input]
truck Opel green 248
End
Close the Catalogue
[/input]
[output]
Cars have average horsepower of: 0.00.
Trucks have average horsepower of: 248.00.
[/output]
[/test]
[test]
[input]
car Lamborghini orange 570
End
Lamborghini
Close the Catalogue
[/input]
[output]
Type: Car
Model: Lamborghini
Color: orange
Horsepower: 570
Cars have average horsepower of: 570.00.
Trucks have average horsepower of: 0.00.
[/output]
[/test]
[test]
[input]
truck Man red 200
End
Man
Close the Catalogue
[/input]
[output]
Type: Truck
Model: Man
Color: red
Horsepower: 200
Cars have average horsepower of: 0.00.
Trucks have average horsepower of: 200.00.
[/output]
[/test]
[test]
[input]
truck Man red 800
truck Mercedes blue 300
car Ford green 400
car Ferrari red 553
car Lamborghini orange 570
End
Close the Catalogue
[/input]
[output]
Cars have average horsepower of: 507.67.
Trucks have average horsepower of: 550.00.
[/output]
[/test]
[test]
[input]
truck Man red 354
truck Mercedes blue 320
car Jaguar green 480
car Honda red 220
car Volvo orange 326
truck Volkswagen black 423
End
Volvo
Jaguar
Volkswagen
Close the Catalogue
[/input]
[output]
Type: Car
Model: Volvo
Color: orange
Horsepower: 326
Type: Car
Model: Jaguar
Color: green
Horsepower: 480
Type: Truck
Model: Volkswagen
Color: black
Horsepower: 423
Cars have average horsepower of: 342.00.
Trucks have average horsepower of: 365.67.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
