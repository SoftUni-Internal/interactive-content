# Problem 2: Food Supply

[slide hideTitle]
# Food Supply

[code-task title="Food Supply" taskId="js-fundamentals-2-finalExam-Food-Supply" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function foodSupply(input) {
    // Write your code here
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

On the first line of the input, you will be given a **string**, containing the items that are **currently stored in your fridge.** 

You must **extract the information about each one of them** and calculate their total calories. 

First, you must **extract the food info.** 

It will always follow the **same pattern** rules:

* Items will be separated by "\|" or "\#" (only one of the two) in the following format:

"\#\{**itemName**\}\#\{**expirationDate**\}\#\{**calories**\}\#"

"\|\{**itemName**\}\|\{**expirationDate**\}\|\{**calories**\}\|"

* The item name may contain only **lowercase**, **uppercase** **letters**, and **spaces**

* The expiration date will always follow the pattern: "\{**day**\}\/\{**month**\}\/\{**year**\}"

**The day**, **the month**, and **the year** will consist of two digits. 

* The calories will be an **integer in the range: 0-10000**

Calculate **the total calories of all food items** from the string, and then determine how many days you could last with this amount, **assuming that you consume 2000 kcal per day.** 

## Input

* You will receive a single string

## Output

- On the first output line, print the number of days that this food supply would last before you have to go to the store for more: 

"**You have enough food for** \{**days**\} **days!**"

- After that, print all valid items

- The output should look like this:

"**Item:** \{**itemName**\}**, Best before:** \{**expirationDate**\}**, Nutrition:** \{**calories**\}"


## Examples One

| **Input** | **Output** |
| --- | --- |
|foodSupply('\#Bread#19\/03\/21\#4000\#\|Invalid\|03\/03\.20\|\|Apples\|08\/10\/20\|200\|\|Carrots\|06\/08\/20\|500\|\|Not right\|6\.8\.20\|5\|')|You have enough food for 2 days\!|
||Item: Bread, Best before: 19\/03\/21, Nutrition: 4000|
||Item: Apples, Best before: 08\/10\/20, Nutrition: 200|
||Item: Carrots, Best before: 06\/08\/20, Nutrition: 500|


[hints]
[hint]
We have three matches in total: 
"\#Bread#19/03/21\#4000\#": bread
"\|Apples\|08/10/20\|200\|": apples
"\|Carrots\|06/08/20\|500\|": carrots
[/hint] 
[hint]
The sum of their calories is 4700.
Since you need 2000kcal a day, you divide 4700/2000, which means that this food will last for 2 days.
[/hint] 
[hint]
We print each item. 
[/hint] 
[/hints] 

## Examples Two

| **Input** | **Output** |
| --- | --- |
|foodSupply('\$\$\#\@\@\%\^\&\#Fish\#24\/12\/20\#8500\#\|\#Incorrect\#19\.03\.20\#450\|\$5\*\(\@\!\#Ice Cream\#03\/10\/21\#9000\#\^\#\@aswe\|Milk\|05\/09\/20\|2000\|')|You have enough food for 9 days\!|
||Item: Fish, Best before: 24\/12\/20, Nutrition: 8500|
||Item: Ice Cream, Best before: 03\/10\/21, Nutrition: 9000|
||Item: Milk, Best before: 05\/09\/20, Nutrition: 2000|
|||


[hints]
[hint]
We have three matches:
"\#Fish\#24/12/20\#8500\#"
"\#Ice Cream\#03/10/21\#9000\#"
"\|Milk\|05/09/20\|2000\|"

The total calories are 8500 + 9000 + 2000 = 19500, which means you have food for a total of 9 days.
[/hint] 
[/hints] 

## Examples Three

| **Input** | **Output** |
| --- | --- |
|foodSupply('Hello\|\#Invalid food\#19/03/20\#450\|\$5\*\(\@')|You have enough food for 0 days\!|

[hints]
[hint]
There are no matches, which means you have no food.

This text "\#Invalid food\#19/03/20\#450" is not a match, since it does not have a "\#" at the end.
[/hint] 
[/hints] 



[/task-description]
[code-io /]
[tests]
[test open]
[input]
foodSupply('\#Bread\#19/03/21\#4000\#\|Invalid\|03/03.20\|\|Apples\|08/10/20\|200\|\|Carrots\|06/08/20\|500\|\|Not right\|6.8.20\|5\|')
[/input]
[output]
You have enough food for 2 days\!
Item: Bread, Best before: 19\/03\/21, Nutrition\: 4000
Item: Apples, Best before: 08\/10\/20, Nutrition\: 200
Item: Carrots, Best before: 06\/08\/20, Nutrition\: 500
[/output]
[/test]
[test open]
[input]
foodSupply('\\$\\$\#\@\@\%\^\&\#Fish\#24/12/20\#8500\#\|\#Incorrect\#19.03.20\#450\|\\$5\*(@!\#Ice Cream\#03/10/21\#9000\#^\#@aswe\|Milk\|05/09/20\|2000\|')
[/input]
[output]
You have enough food for 9 days\!
Item: Fish, Best before\: 24\/12\/20, Nutrition\: 8500
Item: Ice Cream, Best before: 03\/10\/21, Nutrition\: 9000
Item: Milk, Best before: 05\/09\/20, Nutrition\: 2000
[/output]
[/test]
[test]
[input]
foodSupply('\\$\\$\#\@\@\%\^\&\#Fish\#24\/12\/20\#8500\#\|\#Incorrect\#19\.03\.20\#450\|\\$5\*\(\@\!\#Ice Cream\#03/10/21\#9000\#\^\#\@aswe\|Milk\|05/09/20\|2000\|\\$\\$\#\@\@\%\^\&\#Fish\#24/12/20\#8500\#\|\#Incorrect\#19\.03\.20\#450\|\\$5\*\(\@\!\#Ice Cream\#03\/10\/21\#9000\#\^\#\@aswe\|Milk\|05/09/20\|2000\|')
[/input]
[output]
You have enough food for 19 days\!
Item: Fish, Best before: 24\/12\/20, Nutrition\: 8500
Item: Ice Cream, Best before\: 03\/10\/21, Nutrition\: 9000
Item: Milk, Best before\: 05\/09\/20, Nutrition\: 2000
Item: Fish, Best before\: 24\/12\/20, Nutrition\: 8500
Item: Ice Cream, Best before\: 03\/10\/21, Nutrition\: 9000
Item: Milk, Best before: 05\/09\/20, Nutrition\: 2000
[/output]
[/test]
[test]
[input]
foodSupply('\\$\\$\#\@\@\%\^\&\#Fish\#24/12/20\#1000\#\|Incorrect\#19.03.20\#450\|\\$5\*(@!\#Ice Cream\#03/10/21\#1000\#^\#\@aswe\|Milk\|05/09/20\|1000\|\\$\\$\#\@\@\%\^\&\#Fish\#24/12/20\#1000\#\|\#Incorrect\#19.03.20\#450\|\\$5\*\(\@\!\#Ice Cream\#03/10/21\#1000\#\^\#Incorr\#Lettuce\#24\/06\/20\#1000\#')
[/input]
[output]
You have enough food for 3 days\!
Item: Fish, Best before\: 24\/12\/20, Nutrition\: 1000
Item: Ice Cream, Best before\: 03\/10\/21, Nutrition\: 1000
Item: Milk, Best before\: 05\/09\/20, Nutrition\: 1000
Item: Fish, Best before\: 24\/12\/20, Nutrition\: 1000
Item: Ice Cream, Best before\: 03\/10\/21, Nutrition\: 1000
Item: Lettuce, Best before\: 24\/06\/20, Nutrition\: 1000
[/output]
[/test]
[test]
[input]
foodSupply('\#Fish\#24/12/20\#1000\#\|Milk\|05/09/20\|1000\|\#Fish\#24/12/20\#1000\#\|\#Ice Cream\#03/10/21\#1000\#\#Lettuce\#24/06/20\#1000\#')
[/input]
[output]
You have enough food for 2 days\!
Item: Fish, Best before\: 24\/12\/20, Nutrition\: 1000
Item: Milk, Best before\: 05\/09\/20, Nutrition\: 1000
Item: Fish, Best before\: 24\/12\/20, Nutrition\: 1000
Item: Ice Cream, Best before\: 03/10/21, Nutrition\: 1000
Item: Lettuce, Best before\: 24\/06\/20, Nutrition\: 1000
[/output]
[/test]
[test]
[input]
foodSupply('\|Fish\#24/12/20\#1000\|\#Milk\#05/09/20\#1000\|\|Fis\|24/12/20\|1000\#\|Ice Cream\#03/10/21\#1000\#\#Lettuce\/24\/06\/20\#1000\#')
[/input]
[output]
You have enough food for 0 days\!
[/output]
[/test]
[test]
[input]
foodSupply('\|Fish\#24/12/20\|1000\|')
[/input]
[output]
You have enough food for 0 days\!
[/output]
[/test]
[test]
[input]
foodSupply('\|Fish\|24/12/20\|1000\|\|Fish\|24/12/20\|1000\|\|Fish\|24/12/20\|1000\|\|\|24/12/20\|1000\|\|Fish\|24/12/2\|1000\|\|Fish\|24/12/20\|\|')
[/input]
[output]
You have enough food for 1 days\!
Item: Fish, Best before\: 24\/12\/20, Nutrition\: 1000
Item: Fish, Best before\: 24\/12\/20, Nutrition\: 1000
Item: Fish, Best before\: 24\/12\/20, Nutrition\: 1000
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
