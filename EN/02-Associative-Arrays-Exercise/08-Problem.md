[slide hideTitle]
# Problem: Company Users
[code-task title="Company Users" taskId="d4c5fcc2-0b0a-4fdf-8a97-be46e4a9e197" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program which keeps information about companies and their employees.

You will receive **company name** and **employee's id**, until you receive the **command** "End". 

**Add** each **employee** to the **given company**.

Keep in mind that a **company cannot have two employees with the same id**.

When you finish reading data, **order** the companies by the name in ascending order.

Print the company name and each employee's id in the following format:
- \{companyName\}

-- \{id1\}

-- \{id2\}

-- \{idN\}

### Input
Until you receive "End", the input come **in the format**:

"\{companyName\} -> \{employeeId\}".


### Examples
| **Input** | **Output** |
| --- | --- |
| SoftUni -> AA12345 | HP | 
| SoftUni -> BB12345 | -- BB12345 |
| Microsoft -> CC12345 | Microsoft |
| HP -> BB12345 | -- CC12345 | 
| End | SoftUni |
| | -- AA12345 |
| | -- BB12345 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
SoftUni -> AA12345
SoftUni -> BB12345
Microsoft -> CC12345
HP -> BB12345
End
[/input]
[output]
HP
-- BB12345
Microsoft
-- CC12345
SoftUni
-- AA12345
-- BB12345
[/output]
[/test]
[test]
[input]
SoftUni -> AA12345
SoftUni -> CC12344
Lenovo -> XX23456
SoftUni -> AA12345
Movement -> DD11111
End
[/input]
[output]
Lenovo
-- XX23456
Movement
-- DD11111
SoftUni
-- AA12345
-- CC12344
[/output]
[/test]
[test]
[input]
Apple -> KA78902
BlackBerry -> DL66709
Sony -> YR46697
End
[/input]
[output]
Apple
-- KA78902
BlackBerry
-- DL66709
Sony
-- YR46697
[/output]
[/test]
[test]
[input]
Apple -> KA78902
BlackBerry -> OA39837
Ebay -> VY45587
Playboy -> LJ17678
Sony -> YR46697
End
[/input]
[output]
Apple
-- KA78902
BlackBerry
-- OA39837
Ebay
-- VY45587
Playboy
-- LJ17678
Sony
-- YR46697
[/output]
[/test]
[test]
[input]
Apple -> KA78902
BlackBerry -> OA39837
Ebay -> VY45587
Apple -> AF97028
Playboy -> XX95869
Apple -> PF65183
Playboy -> LJ17678
Sony -> YR46697
Sony -> KT68064
End
[/input]
[output]
Apple
-- KA78902
-- AF97028
-- PF65183
BlackBerry
-- OA39837
Ebay
-- VY45587
Playboy
-- XX95869
-- LJ17678
Sony
-- YR46697
-- KT68064
[/output]
[/test]
[test]
[input]
Apple -> EG51303
BestBuy -> IM52664	
Ebay -> AC22875
Apple -> UQ49150
Pepsi -> VU98184
Apple -> BN60893
Pepsi -> DK12387
Subway -> QM12984
Subway -> LG26063
End
[/input]
[output]
Apple
-- EG51303
-- UQ49150
-- BN60893
BestBuy
-- IM52664
Ebay
-- AC22875
Pepsi
-- VU98184
-- DK12387
Subway
-- QM12984
-- LG26063
[/output]
[/test]
[test]
[input]
Apple -> EG51303
BestBuy -> IM52664	
Ebay -> AC22875
Pepsi -> DK12387
Apple -> UQ49150
Pepsi -> VU98184
Apple -> UQ49150
Pepsi -> DK12387
Subway -> QM12984
Subway -> QM12984
End
[/input]
[output]
Apple
-- EG51303
-- UQ49150
BestBuy
-- IM52664
Ebay
-- AC22875
Pepsi
-- DK12387
-- VU98184
Subway
-- QM12984
[/output]
[/test]
[test]
[input]
Apple -> EG51303
BestBuy -> IM52664	
Ebay -> AC22875
Pepsi -> DK12387
Apple -> UQ49150
Subway -> UQ49150
Pepsi -> VU98184
BestBuy -> VU98184	
BestBuy -> IM52664	
Apple -> UQ49150
Pepsi -> DK12387
Subway -> QM12984
Subway -> QM12984
End
[/input]
[output]
Apple
-- EG51303
-- UQ49150
BestBuy
-- IM52664
-- VU98184
Ebay
-- AC22875
Pepsi
-- DK12387
-- VU98184
Subway
-- UQ49150
-- QM12984
[/output]
[/test]
[test]
[input]
BestBuy -> IM52664
IBM -> MS95597
Apple -> EG51303
Nike -> ED33168
Adidas -> YJ71385
End
[/input]
[output]
Adidas
-- YJ71385
Apple
-- EG51303
BestBuy
-- IM52664
IBM
-- MS95597
Nike
-- ED33168
[/output]
[/test]
[test]
[input]
BestBuy -> QW62766	
Pepsi -> YQ12022
Pepsi -> HB92932
Subway -> PU61190
Apple -> GV85833
BestBuy -> UJ28125	
Subway -> ES16007
Ebay -> PA51310
Pepsi -> TO11520
Apple -> PF47880
BestBuy -> FG66075	
Subway -> RY44017
Apple -> WT62658
End
[/input]
[output]
Apple
-- GV85833
-- PF47880
-- WT62658
BestBuy
-- QW62766
-- UJ28125
-- FG66075
Ebay
-- PA51310
Pepsi
-- YQ12022
-- HB92932
-- TO11520
Subway
-- PU61190
-- ES16007
-- RY44017
[/output]
[/test]
[/tests]
[/code-task]
[/slide]