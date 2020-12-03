[slide]
# Homework

[image assetsSrc="homeowrk.png" /]

Welcome to the homework tab.

Here, we are going to write a couple of console applications together.

Let us solve a few problems to exercise what we have learned.
[/slide]

[slide]
# Problem: Employees
[code-task title="Employees" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function employees(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description
You're tasked to create a list of employees and their personal numbers.

You will receive an array of strings.

Each string is an employee name and to assign them a personal number you have to find the **length of the name** (whitespace included).

Try to use an object.

At the end print all the list employees in the following format:

`Name: {employeeName} -- Personal Number: {personalNum}`


# Example
| **Input** | **Output** |
| --- | --- |
|`['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal']`| Name\: Silas Butler \-\- Personal Number\: 12 |
|| Name\: Adnaan Buckley \-\- Personal Number\: 14 |
|| Name\: Juan Peterson \-\- Personal Number\: 13 |
||Name\: Brendan Villarreal \-\- Personal Number\: 18|

[/task-description]
[tests]
[test]
[input]
Kiril Kirilov
Peter Petrov
[/input]
[output]
Name\: Kiril Kirilov \-\- Personal Number\: 13
Name\: Peter Petrov \-\- Personal Number\: 12
[/output]
[/test]
[test]
[input]
Jack
Will
Amanda
[/input]
[output]
Name\: Jack \-\- Personal Number\: 4
Name\: Will \-\- Personal Number\: 4
Name\: Amanda \-\- Personal Number\: 6
[/output]
[/test]
[test]
[input]
Samuel Jackson
Will Smith
Bruce Willis
Tom Holland
[/input]
[output]
Name\: Samuel Jackson \-\- Personal Number\: 14
Name\: Will Smith \-\- Personal Number\: 10
Name\: Bruce Willis \-\- Personal Number\: 12
Name\: Tom Holland \-\- Personal Number\: 11
[/output]
[/test]
[test]
[input]
Silas Butler
Adnaan Buckley
Juan Peterson
Brendan Villarreal
[/input]
[output]
Name\: Silas Butler \-\- Personal Number\: 12
Name\: Adnaan Buckley \-\- Personal Number\: 14
Name\: Juan Peterson \-\- Personal Number\: 13
Name\: Brendan Villarreal \-\- Personal Number\: 18
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Towns
[code-task title="Towns" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function towns(input){
  // Write your code here
}
```
[/code-editor]
[task-description]
# Description

You're tasked to create and print objects from a text table. 

You will receive the input as an array of strings, where each string represents a table row, with values on the row separated by pipes ` | ` and spaces.

The table will consist of exactly 3 columns `Town`, `Latitude` and `Longitude`. 

The latitude and longitude columns will always contain valid numbers. 

Check the examples to get a better understanding of your task.

The output should be objects. 

Latitude and longitude must be parsed to numbers and formatted to the second decimal point!

# Example
| **Input** | **Output** |
| --- | --- |
|`['Bucuresti | 42.696552 | 23.32601','Beijing | 39.913818 | 116.363625']`|`{ town: 'Bucuresti', latitude: '42.70', longitude: '23.33' }` |
|| `{ town: 'Beijing', latitude: '39.91', longitude: '116.36' }` |

[/task-description]
[tests]
[test]
[input]
jdk \| 156.45 \| 12.5645
hjk \| 32.556 \| 134.824
io \| 87.65 \| 14.929
op \| 44.76 \| 184.28
[/input]
[output]
\{ town: 'jdk', latitude: '156.45', longitude: '12.56' \}
\{ town: 'hjk', latitude: '32.56', longitude: '134.82' \}
\{ town: 'io', latitude: '87.65', longitude: '14.93' \}
\{ town: 'op', latitude: '44.76', longitude: '184.28' \}
[/output]
[/test]
[test]
[input]
jj \| 156.45 \| 12.575
yu \| 65.65 \| 64.919
i \| 12.76 \| 184.28
[/input]
[output]
\{ town: 'jj', latitude: '156.45', longitude: '12.57' \}
\{ town: 'yu', latitude: '65.65', longitude: '64.92' \}
\{ town: 'i', latitude: '12.76', longitude: '184.28' \}
[/output]
[/test]
[test]
[input]
a \| 156.45 \| 12.575
b \| 1.65 \| 64.8919
c \| 45.786 \| 184.128
d \| 9.745 \| 1684.28
e \| 12.676 \| 1814.28
[/input]
[output]
\{ town: 'a', latitude: '156.45', longitude: '12.57' \}
\{ town: 'b', latitude: '1.65', longitude: '64.89' \}
\{ town: 'c', latitude: '45.79', longitude: '184.13' \}
\{ town: 'd', latitude: '9.74', longitude: '1684.28' \}
\{ town: 'e', latitude: '12.68', longitude: '1814.28' \}
[/output]
[/test]
[test]
[input]
a \| 136.45 \| 12.575
k \| 1.65 \| 564.19
l \| 99.545 \| 1684.18
e \| 112.66 \| 1814.28
[/input]
[output]
\{ town: 'a', latitude: '136.45', longitude: '12.57' \}
\{ town: 'k', latitude: '1.65', longitude: '564.19' \}
\{ town: 'l', latitude: '99.55', longitude: '1684.18' \}
\{ town: 'e', latitude: '112.66', longitude: '1814.28' \}
[/output]
[/test]
[test]
[input]
a \| 136.45 \| 812.575
[/input]
[output]
\{ town: 'a', latitude: '136.45', longitude: '812.58' \}
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]
# Problem: Movies
[code-task title="Movies" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function movies(input){
  // Write your code here 
}
```
[/code-editor]
[task-description]
# Description
Write a function that stores information about movies inside an array. 

The movies object info must be name, director and date. You can receive several types of input:

* `addMovie {movie name}`: add the movie

* `{movie name} directedBy {director}`: check if the movie exists and then add the director
* `{movie name} onDate {date}`: check if the movie exists and then add the date

At the end print all the movies that have all the info (if the movie has no director, name or date, don’t print it) **in JSON format.**

# Example

**Input:** 
`['addMovie Fast and Furious','addMovie Godfather','Inception directedBy Christopher Nolan','Godfather directedBy Francis Ford Coppola','Godfather onDate 29.07.2018','Fast and Furious onDate 30.07.2018','Batman onDate 01.08.2018','Fast and Furious directedBy Rob Cohen']`

 **Output:**
`{"name":"Fast and Furious","date":"30.07.2018","director":"Rob Cohen"}`

`{"name":"Godfather","director":"Francis Ford Coppola","date":"29.07.2018"}`


[/task-description]
[tests]
[test]
[input]
addMovie a
addMovie b
a directedBy j
b directedBy o
b onDate 12\.34\.1244
a onDate 30\.07\.2010
addMovie c
c directedBy o
c onDate 12\.01\.1998
[/input]
[output]
\{"name":"a","director":"j","date":"30\.07\.2010"\}
\{"name":"b","director":"o","date":"12\.34\.1244"\}
\{"name":"c","director":"o","date":"12\.01\.1998"\}
[/output]
[/test]
[test]
[input]
addMovie a
addMovie b
a directedBy j
a onDate 30\.07\.2010
[/input]
[output]
\{"name":"a","director":"j","date":"30.07.2010"\}
[/output]
[/test]
[test]
[input]
addMovie y
addMovie b
y directedBy j
y onDate 30\.07\.2010
c onDate 30\.07\.2010
c directedBy l
[/input]
[output]
\{"name":"y","director":"j","date":"30\.07\.2010"\}
[/output]
[/test]
[test]
[input]
addMovie y
addMovie b
y directedBy j
y onDate 30\.07\.2010
b onDate 30\.17\.2015
addMovie k
k directedBy l
y directedBy j
k onDate 30\.07\.2010
y onDate 10\.07\.2010
addMovie n
x onDate 12\.07\.1994
y onDate 30\.07\.2018
n directedBy j
n onDate 30\.07\.2017
[/input]
[output]
\{"name":"y","director":"j","date":"30\.07\.2018"\}
\{"name":"k","director":"l","date":"30\.07\.2010"\}
\{"name":"n","director":"j","date":"30\.07\.2017"\}
[/output]
[/test]
[test]
[input]
addMovie y
addMovie b
y directedBy j
y onDate 30\.07\.2010
b onDate 30\.17\.2015
addMovie k
k directedBy l
y directedBy j
k onDate 30\.07\.2010
[/input]
[output]
\{"name":"y","director":"j","date":"30\.07\.2010"\}
\{"name":"k","director":"l","date":"30\.07\.2010"\}
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]