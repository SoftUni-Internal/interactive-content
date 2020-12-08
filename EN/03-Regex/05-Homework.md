[slide]

# Homework

[/slide]

[slide]

# Problem: Match Dates

[code-task title="Match Dates" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function solve(input){
    input=input[0];
    let pattern = /\b(?<day>[0-9]{2})([-/.])(?<month>[A-Z]{1}[a-z]{2})\2(?<year>[0-9]{4})/g;
    let output = [];

    while ((date=pattern.exec(input))!==null) {
        let day = date.groups["day"];
        let month = date.groups["month"];
        let year = date.groups["year"];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);     
    }    
}
```

[/code-editor]
[task-description]

# Description

Write a program, which matches a date in the format `dd{separator}MMM{separator}yyyy`.

Compose the Regular Expression

Every valid date has the following characteristics:

- Always starts with two digits, followed by a separator.
- After that, it has one uppercase and two lowercase letters (e.g. Jan, Mar).
- After that, it has a separator and exactly 4 digits (for the year).
- The separator could be either of three things: a period `(".")`, a hyphen `("-")` or a forward slash `("/")`.
- The separator needs to be the same for the whole date `(e.g. 13.03.2016 is valid, 13.03/2016 is NOT)`.

Use a group backreference to check for this.


# Example

**Input**

`['13/Jul/1928, 10-Nov-1934, 
, 01/Jan-1951,f 25.Dec.1937 
23/09/1973, 1/Feb/2016']`

**Output**

Day\: 13\, Month\: Jul\, Year\: 1928 

Day\: 10\, Month\: Nov\, Year\: 1934

Day\: 25\, Month\: Dec\, Year\: 1937

[/task-description]
[tests]
[test]
[input]
13\/Jul\/1928\, 10\-Nov\-1934\, 01\/Jan\-1951\, 25\.Dec\.1937\, 23\/09\/1973\, 1\/Feb\/2016
[/input]
[output]
Day\: 13\, Month\: Jul\, Year\: 1928
Day\: 10\, Month\: Nov\, Year\: 1934
Day\: 25\, Month\: Dec\, Year\: 1937
[/output]
[/test]
[test]
[input]
01\/Jan\-1951 29\/Feb\/2024 1\/Jan\-1951 27\-Feb\-2007 1\/Jan\-1951 1\/Mar\/2016 23\/october\/197
[/input]
[output]
Day\: 29\, Month\: Feb\, Year\: 2024
Day\: 27\, Month\: Feb\, Year\: 2007
[/output]
[/test]
[test]
[input]
24\.Apr\.2003 1\/Jan\-1951 12\/Jan\/2024 1\/Jan\-1951 22\.Jan\.2014 1\/Jan\-1951 24\-Sep\-2014 18\-Jan\-2012 23\/october\/197
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
1\/Jan\-1951 23\/october\/197 11\-Dec\-2010 18\.Jan\.2014
[/input]
[output]
Day\: 11\, Month\: Dec\, Year\: 2010
Day\: 18\, Month\: Jan\, Year\: 2014
[/output]
[/test]
[test]
[input]
04\-Jan\-2014 1\/Jan\-1951 23\/october\/197 23\/october\/197 23\/Nov\/2023 1\/Jan\-1951 27\-Feb\-2012 08\-Mar\-2000 1\/Jan\-1951
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
22\.Nov\.2011 09\.May\.2013 1\/Jan\-1951 29\/Sep\/2011 24\-Jul\-2012 06\.Oct\.2013
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
02\/Apr\/2002 1\/Jan\-1951 21\-Feb\-2019
[/input]
[output]
Day\: 02\, Month\: Apr\, Year\: 2002
Day\: 21\, Month\: Feb\, Year\: 2019
[/output]
[/test]
[test]
[input]
1\/Jan\-1951 06\-Jan\-2014 1\/Jan\-1951 30\/Jun\/2004 21\.Nov\.2000 15\/Nov\/2018 11\.Mar\.2017 1\/Jan\-1951
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
11\/Aug\/2005 18\/Oct\/2021 1\/Jan\-1951 30\.Oct\.2004 25\/Aug\/2002 13\-Aug\-2016
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
1\/Jan\-1951 06\-Jun\-2021 21\/Aug\/2003 07\/May\/2008
[/input]
[output]
Day\: 06\, Month\: Jun\, Year\: 2021
Day\: 21\, Month\: Aug\, Year\: 2003
Day\: 07\, Month\: May\, Year\: 2008
[/output]
[/test]
[test]
[input]
1\/Jan\-1951 02\.Sep\.2014 13\/Aug\/2024 01\.Sep\.2001 02\.Sep\.2022 07\/Feb\/2008
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

[slide]

# Problem: Furniture

[code-task title="Furniture" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```
function solve(args) {
    let furniture = []
    let prices = []
    let quantities = []
    for (let i = 0; i < args.length; i++) {
        if (args[i].match(/.+[a-zA-Z]+.+[0-9]+\.?[0-9]*!{1}[0-9]+/g)) {
            let numbers = args[i].match(/[0-9]+\.?[0-9]*!{1}[0-9]+/g)[0].split('!')
            furniture.push(args[i].match(/[a-zA-Z]+/g)[0])
            prices.push(Number(numbers[0]))
            quantities.push(Number(numbers[1]))
        }
    }
    prices = prices.map((x, i) => x * quantities[i]).reduce((a, v) => a + v, 0)
    console.log(`Bought furniture: `)
    furniture.forEach(x => console.log(x))
    console.log(`Total money spend: ${prices.toFixed(2)}`)
}
```

[/code-editor]
[task-description]

# Description

Write a function to calculate the total cost of different types of furniture. 

You will be given some lines of input until you receive the line "Purchase". 

For the line to be valid it should be in the following format:

`>>{furniture name}<<{price}!{quantity}`

The price can be floating point number or whole number. 

Store the names of the furniture and the total price. 

At the end print the each bought furniture on separate line in the format:

`Bought furniture:
{1st name}
{2nd name}
…`

And on the last line print the following: 

`Total money spend: {spend money}` formatted to the second decimal point.

# Example

**Input**

`['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']`

**Output**

Bought furniture\:

Sofa

TV

Total money spend\: 2436\.69

[/task-description]
[tests]
[test]
[input]
\>\>Sofa\<\<312\.23\!3
\>\>TV\<\<300\!5
\>Invalid\<\<\!5
Purchase
[/input]
[output]
Bought furniture\:
Sofa
TV
Total money spend\: 2436\.69
[/output]
[/test]
[test]
[input]
\>\>Televizor\<\<312\.23\!3
\>\>Monitor\<\<300\!5
\>\>Invalid\<\<\<\<\!5
\>\>Sink\<\<220\!10
\>\>\>\>\>\>Invalid\<\<\!5
Purchase
[/input]
[output]
Bought furniture\:
Televizor
Monitor
Sink
Total money spend\: 4636\.69
[/output]
[/test]
[test]
[input]
\>Invalid\<\<\!5
\>Invalid\<\<\!5
\>Invalid\<\<\!5
Purchase
[/input]
[output]
Bought furniture\:
Total money spend\: 0\.00
[/output]
[/test]
[test]
[input]
\>\>Sofa\<\<316\.12\!10
\>\>Couch\<\<31\!12
\>\>Table\<\<31\!12
\>Masichka\<\<5
Purchase
[/input]
[output]
Bought furniture\:
Sofa
Couch
Table
Total money spend\: 3905\.20
[/output]
[/test]
[test]
[input]
\>\>Sofa\<\<312\.23\!3\.66
\>\>Sofa\<\<312\.23\!3\.66
\>\>Sofa\<\<312\.23\!3\.66
\>\>Sofa\<\<312\.23\!3\.66
\>\>Sofa\<\<312\.23\!3\.66
Purchase
[/input]
[output]
Bought furniture\:
Sofa
Sofa
Sofa
Sofa
Sofa
Total money spend\: 4683\.45
[/output]
[/test]
[test]
[input]
\>\>Laptop\<\<312\.2323\!3
\>\>TV\<\<300\.21314\!5
\>Invalid\<\<\!5
\>\>TV\<\<300\.21314\!20
\>\>Invalid\<\!5
\>\>TV\<\<30\.21314\!5
\>\>Invalid\<\<\!\!5
Purchase
[/input]
[output]
Bought furniture\:
Laptop
TV
TV
TV
Total money spend\: 8593\.09
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]