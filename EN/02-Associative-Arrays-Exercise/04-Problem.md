[slide hideTitle]
# Problem: Orders
[code-task title="Orders" taskId="f677f7ed-d545-4c07-b912-71da212d943a" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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
Write a program, which keeps information about **products and their prices**.

Each product has **a name, a price and its quantity**.

If the **product doesn't exist** yet, **add it with its starting quantity**.

If you receive a **product, which already exists** **increase its quantity** by the input quantity and if its **price is different, replace the price as well**.

You will receive **products' names, prices and quantities on new lines**. 

Until you receive the **command** "buy", keep adding items.

When you do receive the command "buy", **print** the **items** with their **names** and **total price** of all the products with that name. 

### Input
- Until you receive "buy", the products come in the **format**: "\{name\} \{price\} \{quantity\}".
- The product data is always delimited by a single space.

### Output
- Print information about each product, following the **format**: 
    - "\{productName\} -> {totalPrice\}"
- Format the total price to the **second digit** after the decimal point

### Example
| **Input** | **Output** |
| --- | --- |
| Beer 2.20 100 | Beer -> 220.00 | 
| IceTea 1.50 50 | IceTea -> 75.00 |
| Juice 3.30 80 | Juice -> 264.00 |
| Water 1.00 500 | Water -> 500.00 | 
| buy | | 

### Example
| **Input** | **Output** |
| --- | --- |
| CaesarSalad 10.20 25 | CaesarSalad -> 255.00 | 
| SuperEnergy 0.80 400 | SuperEnergy -> 320.00 |
| Beer 1.35 350 | Beer -> 472.50 |
| IceCream 1.50 25 | IceCream -> 37.50 | 
| buy | | 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
Beer 2.20 100
IceTea 1.50 50
Juice 3.30 80
Water 1.00 500
buy
[/input]
[output]
Beer -> 220.00
IceTea -> 75.00
Juice -> 264.00
Water -> 500.00
[/output]
[/test]
[test open]
[input]
CaesarSalad 10.20 25
SuperEnergy 0.80 400
Beer 1.35 350
IceCream 1.50 25
buy
[/input]
[output]
CaesarSalad -> 255.00
SuperEnergy -> 320.00
Beer -> 472.50
IceCream -> 37.50
[/output]
[/test]
[test]
[input]
Beer 2.40 350
Water 1.25 200
IceTea 5.20 100
Beer 1.20 200
IceTea 0.50 120
buy
[/input]
[output]
Beer -> 660.00
Water -> 250.00
IceTea -> 110.00
[/output]
[/test]
[test]
[input]
CesarSalad 10.20 25
SuperEnergy 0.80 400
Beer 1.35 350
IceCream 1.50 25
buy
[/input]
[output]
CesarSalad -> 255.00
SuperEnergy -> 320.00
Beer -> 472.50
IceCream -> 37.50
[/output]
[/test]
[test]
[input]
CesarSalad 10.20 25
SuperEnergy 0.80 400
CesarSalad 9.70 10
Beer 1.35 350
Water 1.00 20
IceCream 1.50 25
Water 0.95 40
buy
[/input]
[output]
CesarSalad -> 339.50
SuperEnergy -> 320.00
Beer -> 472.50
Water -> 57.00
IceCream -> 37.50
[/output]
[/test]
[test]
[input]
Beer 2.20 100
IceTea 1.50 50
NukaCola 3.30 80
Water 1.00 500
IceTea 2.00 50
IceCream 2.05 45
buy
[/input]
[output]
Beer -> 220.00
IceTea -> 200.00
NukaCola -> 264.00
Water -> 500.00
IceCream -> 92.25
[/output]
[/test]
[test]
[input]
CesarSalad 10.20 25
SuperEnergy 0.80 400
CesarSalad 9.70 10
Beer 1.35 350
Water 1.00 20
IceCream 1.50 25
Water 0.95 40
Beer 2.20 100
IceTea 1.50 50
NukaCola 3.30 80
Water 1.00 500
IceTea 2.00 50
IceCream 2.05 45
buy
[/input]
[output]
CesarSalad -> 339.50
SuperEnergy -> 320.00
Beer -> 990.00
Water -> 560.00
IceCream -> 143.50
IceTea -> 200.00
NukaCola -> 264.00
[/output]
[/test]
[test]
[input]
Beer 2.40 350
Water 1.25 200
IceTea 5.20 100
Beer 1.20 200
IceTea 0.50 120
CesarSalad 10.20 25
SuperEnergy 0.80 400
Beer 1.35 350
IceCream 1.50 25
buy
[/input]
[output]
Beer -> 1215.00
Water -> 250.00
IceTea -> 110.00
CesarSalad -> 255.00
SuperEnergy -> 320.00
IceCream -> 37.50
[/output]
[/test]
[test]
[input]
Beer 2.20 100
IceTea 1.50 50
NukaCola 3.30 80
Water 1.00 500
Beer 2.40 350
Water 1.25 200
IceTea 5.20 100
Beer 1.20 200
IceTea 0.50 120
CesarSalad 10.20 25
SuperEnergy 0.80 400
Beer 1.35 350
IceCream 1.50 25
buy
[/input]
[output]
Beer -> 1350.00
IceTea -> 135.00
NukaCola -> 264.00
Water -> 875.00
CesarSalad -> 255.00
SuperEnergy -> 320.00
IceCream -> 37.50
[/output]
[/test]
[/tests]
[/code-task]
[/slide]