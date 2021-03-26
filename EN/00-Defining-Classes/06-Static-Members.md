# Static Members

[slide hideTitle]
# What Are Static Members

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/EN/interactive-java-advanced-defining-classes-33-34-35-static-members-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

In Java, static members are those members of a class that can be used without initializing the class.

The static keyword can be used with methods, fields, classes (inner/nested), blocks.

## Static Methods

Static methods can access only static fields and methods.

There is no need to instantiate the class to access its static members.

```java live no-template
public class Car {
    private static String brand;
    private static int horsePower;


    public static void setBrand(String brand) {
        Car.brand = brand;
    }

    public static void setHorsePower(int horsePower) {
        Car.horsePower = horsePower;
    }

    public static String printFields() {
        return brand + " - " + horsePower;
    }

    public static void main(String[] args) {
        Car.setBrand("TESLA");
        Car.setHorsePower(503);

        System.out.println(Car.printFields());
        }
    }
```

In the last example, we see that all the methods we are using in the main method are accessible, even though we never actually initialized a Car class.

This works because all the fields and methods in the Car class are static members of the class.

## Static Fields

You can create a static field by using the keyword static. 

The static fields have the same value in all the instances of the class. 

These are created and initialized when the class is loaded for the first time. 

Just like static methods you can access static fields using the class name:

```java live no-template
public class Car {
    private static int horsePower = 503;

    public static void main(String[] args) {
            
        System.out.println(Car.horsePower);
    }
}
```
[/slide]

[slide hideTitle]
# Problem with Solution: Bank Account

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Basics/01-Defining-Classes/EN/interactive-java-advanced-defining-classes-36-problem-and-solution-bank-account-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Bank Account" taskId="oop-basics-java-defining-classes-lab-Bank-Account" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
## Description
Create a `BankAccount` class.

The class should have private fields for:

- "**id**": int (starts from 1 and increases by one for every new account)
- "**balance**": double
- "**interestRate**": double 
    - shared for all accounts
    - default value: 0.02

The class should also have public methods for:
- `setInterestRate(double interest)`: void (static)
- `getInterest(int years)`: double
- `deposit(double amount)`: void

Create a test client supporting the following commands:
- "**Create**"
- "**Deposit** \{**Id**\} \{**Amount**\}"
- "**SetInterest** \{**Interest**\}"
- "**GetInterest** \{**Id**\} \{**Years**\}"
- "**End**"

## Examples


| **Input** | **Output** |
| --- | --- |
| Create | Account ID1 created |
| Deposit 1 20 | Deposited 20 to ID1 |
| GetInterest 1 10 | 4.00 |
| End |  |




| **Input** | **Output** |
| --- | --- |
| Create | Account ID1 created |
| Create | Account ID2 created |
| Deposit 1 20 | Deposited 20 to ID1 |
| Deposit 3 20 | Account does not exist |
| Deposit 2 10 | Deposited 10 to ID2 |
| SetInterest 1.5 | 30.00 |
| GetInterest 1 1 | 15.00 |
| GetInterest 2 1 | Account does not exist |
| GetInterest 3 1 |  |
| End |  |

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test open]
[input]
Create
Deposit 1 20
GetInterest 1 10
End
[/input]
[output]
Account ID1 created
Deposited 20 to ID1
4.00
[/output]
[/test]
[test open]
[input]
Create
Create
Deposit 1 20
Deposit 3 20
Deposit 2 10
SetInterest 1
GetInterest 1 1
GetInterest 2 1
GetInterest 3 1
End
[/input]
[output]
Account ID1 created
Account ID2 created
Deposited 20 to ID1
Account does not exist
Deposited 10 to ID2
20.00
10.00
Account does not exist
[/output]
[/test]
[test]
[input]
Deposit 1 20
Deposit 3 20
Deposit 2 10
SetInterest 1
GetInterest 1 1
GetInterest 2 1
GetInterest 3 1
End
[/input]
[output]
Account does not exist
Account does not exist
Account does not exist
Account does not exist
Account does not exist
Account does not exist
[/output]
[/test]
[test]
[input]
Create
Create
Create
Create
Create
Deposit 1 20
Deposit 3 20
Deposit 2 10
Deposit 1 20
SetInterest 0.05
GetInterest 3 1
GetInterest 1 1
GetInterest 2 1
End
[/input]
[output]
Account ID1 created
Account ID2 created
Account ID3 created
Account ID4 created
Account ID5 created
Deposited 20 to ID1
Deposited 20 to ID3
Deposited 10 to ID2
Deposited 20 to ID1
1.00
2.00
0.50
[/output]
[/test]
[test]
[input]
End
[/input]
[output]

[/output]
[/test]
[test]
[input]
Create
Create
Create
Create
Create
Deposit 1 20
Deposit 1 20
Deposit 1 20
Deposit 1 20
Deposit 1 20
Deposit 2 20
Deposit 2 20
Deposit 2 20
Deposit 2 20
Deposit 2 20
Deposit 3 20
Deposit 3 20
Deposit 3 20
Deposit 3 20
Deposit 3 20
Deposit 4 20
Deposit 4 20
Deposit 4 20
Deposit 4 20
Deposit 4 20
Deposit 5 20
Deposit 5 20
Deposit 5 20
Deposit 5 20
Deposit 5 20
Deposit 5 20
Deposit 12 20
Deposit 7 20
Deposit 6 20
Deposit 6 20
SetInterest 0.06
GetInterest 1 10
GetInterest 4 20
SetInterest 0.12
GetInterest 2 10
GetInterest 1 15
End
[/input]
[output]
Account ID1 created
Account ID2 created
Account ID3 created
Account ID4 created
Account ID5 created
Deposited 20 to ID1
Deposited 20 to ID1
Deposited 20 to ID1
Deposited 20 to ID1
Deposited 20 to ID1
Deposited 20 to ID2
Deposited 20 to ID2
Deposited 20 to ID2
Deposited 20 to ID2
Deposited 20 to ID2
Deposited 20 to ID3
Deposited 20 to ID3
Deposited 20 to ID3
Deposited 20 to ID3
Deposited 20 to ID3
Deposited 20 to ID4
Deposited 20 to ID4
Deposited 20 to ID4
Deposited 20 to ID4
Deposited 20 to ID4
Deposited 20 to ID5
Deposited 20 to ID5
Deposited 20 to ID5
Deposited 20 to ID5
Deposited 20 to ID5
Deposited 20 to ID5
Account does not exist
Account does not exist
Account does not exist
Account does not exist
60.00
120.00
120.00
180.00
[/output]
[/test]
[test]
[input]
Create
Create
Create
Create
Create
Deposit 1 20
Deposit 1 20
Deposit 1 20
Deposit 1 20
Deposit 1 20
Deposit 2 20
Deposit 2 20
Deposit 2 20
Deposit 2 20
Deposit 2 20
Deposit 3 20
Deposit 3 20
Deposit 3 20
Deposit 3 20
Deposit 3 20
Deposit 4 20
Deposit 4 20
Deposit 4 20
Deposit 4 20
Deposit 4 20
Deposit 5 20
Deposit 5 20
Deposit 5 20
Deposit 5 20
Deposit 5 20
Deposit 6 20
SetInterest 0.02
GetInterest 2 15
GetInterest 3 20
GetInterest 7 30
End
[/input]
[output]
Account ID1 created
Account ID2 created
Account ID3 created
Account ID4 created
Account ID5 created
Deposited 20 to ID1
Deposited 20 to ID1
Deposited 20 to ID1
Deposited 20 to ID1
Deposited 20 to ID1
Deposited 20 to ID2
Deposited 20 to ID2
Deposited 20 to ID2
Deposited 20 to ID2
Deposited 20 to ID2
Deposited 20 to ID3
Deposited 20 to ID3
Deposited 20 to ID3
Deposited 20 to ID3
Deposited 20 to ID3
Deposited 20 to ID4
Deposited 20 to ID4
Deposited 20 to ID4
Deposited 20 to ID4
Deposited 20 to ID4
Deposited 20 to ID5
Deposited 20 to ID5
Deposited 20 to ID5
Deposited 20 to ID5
Deposited 20 to ID5
Account does not exist
30.00
40.00
Account does not exist
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

