# Homework

[slide hideTitle]

# Problem: Match Dates

[code-task title="Match Dates" taskId="js-fundamentals-pt2-Regular-Expressions-Match-Dates" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function matchDate(input){
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

Write a program, which matches a date in the format "**dd**\{**separator**\}**MMM**\{**separator**\}**yyyy**".

Compose the regular expression.

Every valid date has the following characteristics:

- Always starts with two digits, followed by a separator
- After that, it has one uppercase and two lowercase letters (e.g. Jan, Mar)
- After that, it has a separator and exactly 4 digits (for the year)
- The separator could be\: a period "**.**", a hyphen "**-**", or a forward slash `/`
- The separator needs to be the same for the whole date **(e.g. 13.03.2016 is valid, 13.03/2016 is NOT)**

Use a group **backreference** to check for this.


## Example One

| **Input** | **Output** |
| --- | --- |
| matchDate('13/Jul/1928, 10-Nov-1934 , 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016') | Day\: 13\, Month\: Jul\, Year\: 1928 |
| | Day\: 10\, Month\: Nov\, Year\: 1934 |
| | Day\: 25\, Month\: Dec\, Year\: 1937 |

## Example Two
| **Input** | **Output** |
| --- | --- |
| matchDate('28-Mar-2000') | Day\: 28\, Month\: Mar\, Year\: 2000 |

[/task-description]
[tests]
[test open]
[input]
matchDate('13/Jul/1928, 10-Nov-1934 , 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016')
[/input]
[output]
 Day\: 13\, Month\: Jul\, Year\: 1928
Day\: 10\, Month\: Nov\, Year\: 1934
Day\: 25\, Month\: Dec\, Year\: 1937
[/output]
[/test]
[test open]
[input]
matchDate('28-Mar-2000')
[/input]
[output]
Day\: 28\, Month\: Mar\, Year\: 2000
[/output]
[/test]
[test]
[input]
matchDate(['13\/Jul\/1928\, 10\-Nov\-1934\, 01\/Jan\-1951\, 25\.Dec\.1937\, 23\/09\/1973\, 1\/Feb\/2016'])
[/input]
[output]
Day\: 13\, Month\: Jul\, Year\: 1928
Day\: 10\, Month\: Nov\, Year\: 1934
Day\: 25\, Month\: Dec\, Year\: 1937
[/output]
[/test]
[test]
[input]
matchDate(['01\/Jan\-1951, 29\/Feb\/2024, 1\/Jan\-1951, 27\-Feb\-2007, 1\/Jan\-1951, 1\/Mar\/2016, 23\/october\/197'])
[/input]
[output]
Day\: 29\, Month\: Feb\, Year\: 2024
Day\: 27\, Month\: Feb\, Year\: 2007
[/output]
[/test]
[test]
[input]
matchDate(['24\.Apr\.2003, 1\/Jan\-1951, 12\/Jan\/2024, 1\/Jan\-1951, 22\.Jan\.2014, 1\/Jan\-1951, 24\-Sep\-2014, 18\-Jan\-2012, 23\/october\/197'])
[/input]
[output]
Day\: 24\, Month\: Apr\, Year\: 2003
Day\: 12\, Month\: Jan\, Year\: 2024
Day\: 22\, Month\: Jan\, Year\: 2014
Day\: 24\, Month\: Sep\, Year\: 2014
Day\: 18\, Month\: Jan\, Year\: 2012
[/output]
[/test]
[test]
[input]
matchDate(['1\/Jan\-1951, 23\/october\/197, 11\-Dec\-2010, 18\.Jan\.2014'])
[/input]
[output]
Day\: 11\, Month\: Dec\, Year\: 2010
Day\: 18\, Month\: Jan\, Year\: 2014
[/output]
[/test]
[test]
[input]
matchDate(['04\-Jan\-2014, 1\/Jan\-1951, 23\/october\/197, 23\/october\/197, 23\/Nov\/2023, 1\/Jan\-1951, 27\-Feb\-2012, 08\-Mar\-2000, 1\/Jan\-1951'])
[/input]
[output]
Day\: 04\, Month\: Jan\, Year\: 2014
Day\: 23\, Month\: Nov\, Year\: 2023
Day\: 27\, Month\: Feb\, Year\: 2012
Day\: 08\, Month\: Mar\, Year\: 2000
[/output]
[/test]
[test]
[input]
matchDate(['22\.Nov\.2011, 09\.May\.2013, 1\/Jan\-1951, 29\/Sep\/2011, 24\-Jul\-2012, 06\.Oct\.2013'])
[/input]
[output]
Day\: 22\, Month\: Nov\, Year\: 2011
Day\: 09\, Month\: May\, Year\: 2013
Day\: 29\, Month\: Sep\, Year\: 2011
Day\: 24\, Month\: Jul\, Year\: 2012
Day\: 06\, Month\: Oct\, Year\: 2013
[/output]
[/test]
[test]
[input]
matchDate(['02\/Apr\/2002, 1\/Jan\-1951, 21\-Feb\-2019'])
[/input]
[output]
Day\: 02\, Month\: Apr\, Year\: 2002
Day\: 21\, Month\: Feb\, Year\: 2019
[/output]
[/test]
[test]
[input]
matchDate(['1\/Jan\-1951, 06\-Jan\-2014, 1\/Jan\-1951, 30\/Jun\/2004, 21\.Nov\.2000, 15\/Nov\/2018, 11\.Mar\.2017, 1\/Jan\-1951'])
[/input]
[output]
Day\: 06\, Month\: Jan\, Year\: 2014
Day\: 30\, Month\: Jun\, Year\: 2004
Day\: 21\, Month\: Nov\, Year\: 2000
Day\: 15\, Month\: Nov\, Year\: 2018
Day\: 11\, Month\: Mar\, Year\: 2017
[/output]
[/test]
[test]
[input]
matchDate(['11\/Aug\/2005, 18\/Oct\/2021, 1\/Jan\-1951, 30\.Oct\.2004, 25\/Aug\/2002, 13\-Aug\-2016'])
[/input]
[output]
Day\: 11\, Month\: Aug\, Year\: 2005
Day\: 18\, Month\: Oct\, Year\: 2021
Day\: 30\, Month\: Oct\, Year\: 2004
Day\: 25\, Month\: Aug\, Year\: 2002
Day\: 13\, Month\: Aug\, Year\: 2016
[/output]
[/test]
[test]
[input]
matchDate(['1\/Jan\-1951, 06\-Jun\-2021, 21\/Aug\/2003, 07\/May\/2008'])
[/input]
[output]
Day\: 06\, Month\: Jun\, Year\: 2021
Day\: 21\, Month\: Aug\, Year\: 2003
Day\: 07\, Month\: May\, Year\: 2008
[/output]
[/test]
[test]
[input]
matchDate(['1\/Jan\-1951, 02\.Sep\.2014, 13\/Aug\/2024, 01\.Sep\.2001, 02\.Sep\.2022, 07\/Feb\/2008'])
[/input]
[output]
Day\: 02\, Month\: Sep\, Year\: 2014
Day\: 13\, Month\: Aug\, Year\: 2024
Day\: 01\, Month\: Sep\, Year\: 2001
Day\: 02\, Month\: Sep\, Year\: 2022
Day\: 07\, Month\: Feb\, Year\: 2008
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]

# Problem: Furniture

[code-task title="Furniture" taskId="js-fundamentals-pt2-Regular-Expressions-Furniture" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function furniture(input) {
   // Write youer code here
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

Write a function to calculate the total cost of different types of furniture. 

You will be given some lines of input until you receive the line "**Purchase**". 

The line is valid when it is in the following format:

"\>\>\{**furniture name**\}\<\<\{**price**\}\!\{**quantity**\}"

The price can be a floating point number or an integer number. 

Store the names of the furniture and the total price. 

In the end print out each bought furniture on a separate line in the format:

"**Bought furniture:**
\{**1st name**\}
\{**2nd name**\}
…
"
And on the last line, print the following: 

"**Total money spent:** \{**spent money**\}" formatted to the second decimal point.

## Example One

| **Input** | **Output** |
| --- | --- |
| furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']) | Bought furniture\: |
| | Sofa |
| | TV |
| | Total money spent\: 2436\.69 |

[hints]
[hint]
You can use [Regex101](https://regex101.com/) or [RegExr](https://regexr.com) to **test** your pattern in real time.

In this example, only the **Sofa** and the **TV** are valid items.
[/hint] 
[hint]
For each one of them, we **multiply** the price by the quantity:

```js
if (match) {
let name = match.groups['name'];
let price = Number(match.groups['price']);
let quantity = Number(match.groups['quantity']);

totalPrice += price * quantity;

furniture.push(name);
}
```

You can use a **named capturing group**. Learn more about groups and ranges [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges).
[/hint] 
[hint]
We **print** out the result:

```js
console.log('Bought furniture:');

for (const piece of furniture) {
  console.log(piece);
}

console.log(`Total money spent: ${(totalPrice).toFixed(2)}`);
```

Remember to **format** the **final price** to the second digit after the decimal point.
[/hint] 
[/hints] 

## Example Two

| **Input** | **Output** |
| --- | --- |
| furniture(['>>Chair<<34.44!1', '>>Table<44.44!2', 'Purchase']) | Bought furniture\: |
| | Chair |
| | Total money spent\: 34\.44 |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
furniture(['\>\>Sofa\<\<312.23!3', '\>\>TV\<\<300!5', '\>Invalid\<\<!5', 'Purchase'])
[/input]
[output]
Bought furniture:
Sofa
TV
Total money spent: 2436.69
[/output]
[/test]
[test open]
[input]
furniture(['\>\>Chair\<\<34.44\!1', '\>\>Table\<44.44!2', 'Purchase'])
[/input]
[output]
Bought furniture:
Chair
Total money spent\: 34\.44
[/output]
[/test]
[test]
[input]
furniture(['\>\>Televizor\<\<312.23!3', '\>\>Monitor\<\<300!5', '\>\>Invalid\<\<\<\<!5', '\>\>Sink\<\<220!10', '\>\>\>\>\>\>Invalid\<\<!5', 'Purchase'])
[/input]
[output]
Bought furniture:
Televizor
Monitor
Sink
Total money spent: 4636.69
[/output]
[/test]
[test]
[input]
furniture(['\>Invalid\<\<!5', '\>Invalid\<\<!5', '\>Invalid\<\<!5', 'Purchase'])
[/input]
[output]
Bought furniture:
Total money spent: 0.00
[/output]
[/test]
[test]
[input]
furniture(['\>\>Sofa\<\<316.12!10', '\>\>Couch\<\<31!12', '\>\>Table\<\<31!12', '\>Masichka\<\<5', 'Purchase'])
[/input]
[output]
Bought furniture:
Sofa
Couch
Table
Total money spent: 3905.20
[/output]
[/test]
[test]
[input]
furniture(['\>\>Sofa\<\<312.23!3.66', '\>\>Sofa\<\<312.23!3.66', '\>\>Sofa\<\<312.23!3.66', '\>\>Sofa\<\<312.23!3.66', '\>\>Sofa\<\<312.23!3.66', 'Purchase'])
[/input]
[output]
Bought furniture:
Sofa
Sofa
Sofa
Sofa
Sofa
Total money spent: 4683.45
[/output]
[/test]
[test]
[input]
furniture(['\>\>Laptop\<\<312.2323!3', '\>\>TV\<\<300.21314!5', '\>Invalid\<\<!5', '\>\>TV\<\<300.21314!20', '\>\>Invalid\<!5', '\>\>TV\<\<30.21314!5', '\>\>Invalid\<\<!!5', 'Purchase'])
[/input]
[output]
Bought furniture:
Laptop
TV
TV
TV
Total money spent: 8593.09
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]

# Problem: Race

[code-task title="Race"  taskId="js-fundamentals-pt2-Regular-Expressions-Race" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function race(input) {
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

Write a function that processes information about a race. 

On the first line, you will be given a list of participants, separated by **", "**.

On the next few lines, until you receive a line **end of race**, you will be given some info, which will be some alphanumeric characters.

In between them, you could have some extra characters, which you should ignore. 

For example: "**G!32e%o7r#32g$235@!2e**". 

The letters are the name of the person and the sum of the digits is the distance he ran. 

So here we have "George" who ran "29" km. 

Store the information about the person only if the list of racers contains the name of the person. 

If you receive the same person more than once, just add the distance to his old one. 

In the end print out the top 3 racers, ordered by their distance in **descending** order in the format:

**1st place:** \{**first racer**\}
**2nd place:** \{**second racer**\}
**3rd place:** \{**third racer**\}

## Example

| **Input** | **Output** |
|---|---|
| race(['George, Peter, Bill, Tom', 'G4e@55or%6g6!68e!!@', 'R1@!3a$y4456@', 'B5@i@#123ll', 'G@e54o$r6ge#', '7P%et^#e5346r', 'T$o553m&6', 'end of race']) | 1st place\: George |
| | 2nd place\: Peter |
| | 3rd place\: Tom |

[hints]
[hint]
As a **third** argument, we have **Ray** - `R1@!3a$y4456@`
He is **not** in the list of participants so we ignore him.
[/hint] 
[hint]
The other people **are** in the list of **participants**.

```js
if (racers.hasOwnProperty(name)) {
  racers[name] += distance;
}
```

**George** has run a total of **55** km, **Peter** has run a total of **25**, and **Tom** has run a total of **19**
[/hint] 
[hint]
We **print** the **winners** (the people in the **top 3**):

```js
let winners = Object.keys(racers)
  .sort((a, b) => racers[b] - racers[a])
  .slice(0, 3);
    
console.log(`1st place: ${winners[0]}`);
console.log(`2nd place: ${winners[1]}`);
console.log(`3rd place: ${winners[2]}`);
```
[/hint] 
[/hints] 

[/task-description]
[tests]
[test open]
[input]
race(['George\, Peter\, Bill\, Tom', 'G4e\@55or\%6g6\!68e\!\!\@', 'R1\@\!3a\$y4456\@', 'B5\@i\@\#123ll', 'G\@e54o\$r6ge\#', '7P\%et\^\#e5346r', 'T\$o553m\&6', 'end of race'])
[/input]
[output]
1st place\: George
2nd place\: Peter
3rd place\: Tom
[/output]
[/test]
[test]
[input]
race(['Gregory\, Tom\, Jerry\, Christian\, Bill', 'G4r\*\&\^\$\#ego\%4\^\&4\*ry', 'T\*&\^\%57\)\&\%\$o\^\*m6', 'J\&\*\*67e\%\&\)\)rr\&12\*3y', 'J\&\*\*22e\%\&\)\)rr\&44\*8y', 'Ch\&\*\&\*\^ri1s3t5ian', 'L\&\*\&\%666amar', 'end of race'])
[/input]
[output]
1st place\: Jerry
2nd place\: Tom
3rd place\: Gregory
[/output]
[/test]
[test]
[input]
race(['Ronald\, Bill\, Tom\, Timmy\, Maggie\, Michonne', 'Mi\*\&\^\%\$ch123o\!\#\$\%\#nne787)', '\%\$\$B\(\*\&\&\)i89ll\)\*\&\)', 'R\*\*\(on\%\^\&ald992\)', 'T\(\*\^\^\%immy77\)', 'Ma10\*\*\$\#g0g0g0i0e', 'end of race'])
[/input]
[output]
1st place\: Michonne
2nd place\: Ronald
3rd place\: Bill
[/output]
[/test]
[test]
[input]
race(['Rick\, Negan\, Lucille\, Peter\, Stamat\, George', 'R\*\*\*\*i22c00k199\!\!\!', 'N\*\*\*\&\^E989GA\(\*\&\^\&\^\&N323a\)\)\)', '\*\^\%\%Pe87876t\&\&\^er87\#\$\&\(\%\)', 'L\&\^\%u9754cille\*\&\^\&\%\^234', 'end of race'])
[/input]
[output]
1st place\: Peter
2nd place\: Lucille
3rd place\: Rick
[/output]
[/test]
[test]
[input]
race(['Rick\, Negan\, Lucille\, Peter\, Stamat\, George', 'R\*\*\*\*i22c00k199\!\!\!', 'N\*\*\*\&\^e989ga\(\*\&\^\&\^\&n323\)\)\)', '\*\^\%\%\Pe87876t\&\&\^er87\#\$\&\(\%\)', 'L\&\^\%u9754cille\*\&\^\&\%\^234', 'R\*\*\%\^\&\%i11c104k123\!\^\&\!\!', 'R\&\&\%\^\&\%ic10\^\$\@k123\!\^\&\!\!', '\*\^\%Peter8675', '\*\^\%Geo\$12\#\%112r\^\$ge23\!\(\@\^\)', '\!\!22\!P23\!e\!t\!e\!r\!85', 'end of race'])
[/input]
[output]
1st place\: Peter
2nd place\: Rick
3rd place\: Negan
[/output]
[/test]
[test]
[input]
race(['Joro\, George\, Georgi\, Stamat', '\^\&\^\%\^232St\#\$ama\&\&\^\^t', '\^\&\^\%\^232St\#\$ama\&\&\^\^t', 'G7667eorge\&\^\^\&\^', '\&\^\&\&\&J99999oro\&\^\^57', 'end of race'])
[/input]
[output]
1st place\: Joro
2nd place\: George
3rd place\: Stamat
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide hideTitle]

# Problem: Bar Income

[code-task title="Bar Income" taskId="js-fundamentals-pt2-Regular-Expressions-Bar-Income" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function income(input) {
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

Let us take a break and visit the game bar at SoftUni. 

It is about time for the people behind the bar to go home. You are the person, who has to calculate the earned money from the products that were sold throughout the day.

Until you receive a line with a text "**end of shift**", you will be given lines of input. 

Before processing these lines, you have to do some validations first.

Each valid order should have a customer, a product, a count and a price:
- Valid customer's name should be surrounded by **%** and must start with a capital letter, followed by lower-case letters
- Valid product contains any word character and must be surrounded by **<** and **>**
- Valid count is an integer, surrounded by "\|"
- Valid price is any real number followed by "**$**"

The parts of a valid order should appear in the given order: a customer, a product, a count and a price.

Between each part there can be other symbols, except (\|, \$, \% \.).

For each valid line print on the console: \{**customerName**\}**:** \{**product**\} **-** \{**totalPrice**\}.

When you receive "**end of shift**" print the total amount of money for the day, rounded to 2 decimal places in the following format: 

"**Total income:** \{**income**\}"

## Example One

| **Input** | **Output** |
| --- | --- |
| income(['\%George\%\<Croissant\>\|2\|10.3\$', '\%Peter\%\<Gum\>\|1\|1.3\$', '\%Maria\%\<Cola\>\|1\|2.4\$', 'end of shift']) | George\: Croissant \- 20\.60 |
| | Peter\: Gum \- 1\.30 |
| | Maria\: Cola \- 2\.40 |
| | Total income\: 24\.30 |

## Example Two

| **Input** | **Output** |
| --- | --- |
| income(['\%InvalidName\%\<Croissant\>\|2\|10.3\$', '\%Peter\%\<Gum\>1.3\$', '\%Maria\%\<Cola\>\|1\|2.4', '\%Valid\%\<Valid\>valid\|10\|valid20\$', 'end of shift']) | Valid\: Valid \- 200\.00 |
| | Total income\: 200\.00 |

[/task-description]
[tests]
[test open]
[input]
income(['\%George\%\<Croissant\>\|2\|10\.3\$', '\%Peter\%\<Gum\>\|1\|1\.3\$', '\%Maria\%\<Cola\>\|1\|2\.4\$', 'end of shift'])
[/input]
[output]
George\: Croissant \- 20\.60
Peter\: Gum \- 1\.30
Maria\: Cola \- 2\.40
Total income\: 24\.30
[/output]
[/test]
[test open]
[input]
income(['\%InvalidName\%\<Croissant\>\|2\|10\.3\$', '\%Peter\%\<Gum\>1\.3\$', '\%Maria\%\<Cola\>\|1\|2\.4', '\%Valid\%\<Valid\>valid\|10\|valid20\$', 'end of shift'])
[/input]
[output]
Valid\: Valid \- 200\.00
Total income\: 200\.00
[/output]
[/test]
[test]
[input]
income(['\%Name\%\<Product\>\|1\|20\.50\$', 'end of shift'])
[/input]
[output]
Name\: Product \- 20\.50
Total income\: 20\.50
[/output]
[/test]
[test]
[input]
income(['\%Name\%\<Product2\>\|1\|20\.50\$', 'end of shift'])
[/input]
[output]
Name\: Product2 \- 20\.50
Total income\: 20\.50
[/output]
[/test]
[test]
[input]
income(['\%Name\%valid\<Product3\>valid\|1\|20\.80\$', 'end of shift'])
[/input]
[output]
Name\: Product3 \- 20\.80
Total income\: 20\.80
[/output]
[/test]
[test]
[input]
income(['\%Name\%\<Product\>\|2\|20\.50\$', 'end of shift'])
[/input]
[output]
Name\: Product \- 41\.00
Total income\: 41\.00
[/output]
[/test]
[test]
[input]
income(['\%Name\%\<Product\>\|1\|20\.50\$', '\%Name\%\<Product\>\|1\|9\.50\$', 'end of shift'])
[/input]
[output]
Name\: Product \- 20\.50
Name\: Product \- 9\.50
Total income\: 30\.00
[/output]
[/test]
[test]
[input]
income(['\%Name\%\<Product\>\|2\|10\.3\$', '\%Name\%\<Pro\_duct\>\|2\|10\.3\$', 'end of shift'])
[/input]
[output]
Name\: Product \- 20\.60
Name\: Pro\_duct \- 20\.60
Total income\: 41\.20
[/output]
[/test]
[test]
[input]
income(['\%Name\%\<Product\>\|2\|10\$', 'end of shift'])
[/input]
[output]
Name\: Product \- 20\.00
Total income\: 20\.00
[/output]
[/test]
[test]
[input]
income(['\%Name\%\<Product\>\|1\|30\.10\$', '\%Name\%\<Product\>\|1\.0\|10\.10\$', '\%Name\%\<Product\>\|1\|10\.10', '\%Name\%Product\|1\|10\.10\$', 'end of shift'])
[/input]
[output]
Name\: Product \- 30\.10
Total income\: 30\.10
[/output]
[/test]
[test]
[input]
income(['\%Name\%ho\<Product\>eins\|1\|10\$', '\%Name\%he\<Product\>zwei\|2\|10\$', '\%Name\%hi\<Product\>drei\|3\|10\$', 'end of shift'])
[/input]
[output]
Name\: Product \- 10\.00
Name\: Product \- 20\.00
Name\: Product \- 30\.00
Total income\: 60\.00
[/output]
[/test]
[test]
[input]
income(['\%Name\%sorry for this test\<\>\<\>\<\>\<\>\<Product\>\<\>\<\>\|2\|10\$', 'end of shift'])
[/input]
[output]
Name\: Product \- 20\.00
Total income\: 20\.00
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

