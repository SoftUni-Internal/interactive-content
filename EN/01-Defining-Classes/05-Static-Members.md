[slide]

# Static Members

In Java, static members are those which belongs to the class and you can access these members without instantiating the class.

The static keyword can be used with methods, fields, classes (inner/nested), blocks.

## Static Methods

Static methods can access only static fields, methods.

To access static methods there is no need to instantiate the class, you can do it just using the class name.

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


[slide]
# Problem: Bank Account
[code-task title="Problem: Bank Account" taskId="1dfa7c1b-84b0-4bb3-8ee1-0832b748acb9" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Create class BankAccount.

The class should have private fields for:
- Id: int (Starts from 1 and increments for every new account)
- Balance: double
- Interest rate: double (Shared for all accounts. Default value: 0.02)

The class should also have public methods for:
- setInterestRate(double interest): void (static)
- getInterest(int Years): double
- deposit(double amount): void

Create a test client supporting the following commands:
- Create
- Deposit {Id} {Amount}
- SetInterest {Interest}
- GetInterest {ID} {Years}
- End

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
[code-io /]
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

[slide]
# Solution: Bank Account

- Bank Account class:

```java
public class BankAccount {

    private final static double DEFAULT_INTEREST_RATE = 0.02;
    private static double interestRate = DEFAULT_INTEREST_RATE;
    private static int bankAccountCount = 1;
    private int id;
    private double balance;


    public BankAccount() {
        this.id = BankAccount.bankAccountCount++;
    }

    public int getId() {
        return id;
    }

    public double getInterestRate(int years) {
        return BankAccount.interestRate * years * this.balance;
    }

    public static void setInterestRate(double interestRate) {
        BankAccount.interestRate = interestRate;
    }

    public void deposit(double amount) {
        this.balance += amount;
    }
}
```

- Main class:

```java
public class Main {

    private static Map<Integer, BankAccount> bankAccounts = new HashMap<>();

    public static void main(String[] args) throws IOException {
        BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));

        while (true) {
            String[] line = reader.readLine().split(" ");
            if("end".equalsIgnoreCase(line[0])) {
                break;
            }

            switch (line[0]) {
                case "Create" -> createBankAccount();
                case "Deposit" -> depositSum(Integer.parseInt(line[1]), Double.parseDouble(line[2]));
                case "SetInterest" -> setInterest(Double.parseDouble(line[1]));
                case "GetInterest" -> getInterest(Integer.parseInt(line[1]), Integer.parseInt(line[2]));
            }
        }
    }

    private static void getInterest(int id, int years) {
        if(bankAccounts.containsKey(id)) {
            System.out.printf("%.2f%n", bankAccounts.get(id).getInterestRate(years));
        } else {
            System.out.println("Account does not exist");
        }
    }

    private static void depositSum(int id, double amount) {
        if(bankAccounts.containsKey(id)) {
            bankAccounts.get(id).deposit(amount);
            System.out.printf("Deposited %.0f to ID%d%n", amount, id);
        } else {
            System.out.println("Account does not exist");
        }
    }

    private static void createBankAccount() {
        BankAccount ba = new BankAccount();
        bankAccounts.put(ba.getId(), ba);
        System.out.println("Account ID" + ba.getId() + " created");
    }

    private static void setInterest(double interest) {
        BankAccount.setInterestRate(interest);
    }
}
```

[/slide]