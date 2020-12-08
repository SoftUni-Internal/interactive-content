[slide]
# Problem 3: P!rates
## Description
Until the `Sail` command is given you will be receiving:

* Cities that you and your **crew have targeted**, with their population and gold, separated by `||`.

* If you receive a city which has been **already received**, you have to increase the population and gold with the given values.

After the `Sail` command, you will start receiving lines of text representing events until the `End` command is given.

Events will be in the following format:

* Command: `Plunder=>{town}=>{people}=>{gold}`

You have successfully attacked and plundered the town, killing the given number of people and stealing the respective amount of gold.

For every town you attack print this message: `{town} plundered! {gold} gold stolen, {people} citizens killed.`

If any of those two values (population or gold) reaches zero, the town is disbanded.

You need to remove it from your collection of targeted cities and print the following message: `{town} has been wiped off the map!`

There will be no case of receiving more people or gold than there is in the city.

* Command: `Prosper=>{town}=>{gold}`

There has been a dramatic economic growth in the given city, increasing its treasury by the given amount of gold.

The gold amount can be a **negative number**, so be careful.

If a **negative amount** of gold is given print: `Gold added cannot be a negative number!`

If the given **gold is a valid amount**, increase the **town's gold reserves by the respective amount** and print the following message: `{gold added} gold added to the city treasury. {town} now has {total gold} gold.`


## Output

After receiving the `End` command if there are any existing settlements on your list of targets, you need to print all of them, sorted by their gold in descending order, then by their name in ascending order, in the following format:

`Ahoy, Captain! There are {count} wealthy settlements to go to:`
`{town1} -> Population: {people} citizens, Gold: {gold} kg`

\.\.\.

`{town…n} -> Population: {people} citizens, Gold: {gold} kg`

If there are no settlements left to plunder, print:

`Ahoy, Captain! All targets have been plundered and destroyed!`

## Constraints

* The initial population and gold of the settlements will be valid, 32-bit integers, will never be negative or exceed the respective limits.

* The town names in the events will always be valid towns that should be on your list.


[code-task title="P!rates" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function solve(input) {
	// Write your code here
}
```
[/code-editor]
[task-description]

# Examples
**Input** 
`['Tortuga||345000||1250', 'Santo Domingo||240000||630', 'Havana||410000||1100', 'Sail', 'Plunder=>Tortuga=>75000=>380', 'Prosper=>Santo Domingo=>180', 'End']`

**Output**
Tortuga plundered! 380 gold stolen, 75000 citizens killed.

180 gold added to the city treasury. Santo Domingo now has 810 gold.

Ahoy, Captain! There are 3 wealthy settlements to go to:
Havana \-\> Population: 410000 citizens, Gold: 1100 kg
Tortuga \-\> Population: 270000 citizens, Gold: 870 kg
Santo Domingo \-\> Population: 240000 citizens, Gold: 810 kg

 **Input** 
`['Nassau||95000||1000', 'San Juan||930000||1250', 'Campeche||270000||690', 'Port Royal||320000||1000', 'Port Royal||100000||2000', 'Sail', 'Prosper=>Port Royal=>-200', 'Plunder=>Nassau=>94000=>750', 'Plunder=>Nassau=>1000=>150', 'Plunder=>Campeche=>150000=>690', 'End']`

**Output**
Gold added cannot be a negative number\!
Nassau plundered\! 750 gold stolen, 94000 citizens killed.
Nassau plundered\! 150 gold stolen, 1000 citizens killed.
Nassau has been wiped off the map\!
Campeche plundered\! 690 gold stolen, 150000 citizens killed.
Campeche has been wiped off the map\!
Ahoy, Captain\! There are 2 wealthy settlements to go to:
Port Royal \-\> Population: 420000 citizens, Gold: 3000 kg
San Juan \-\> Population: 930000 citizens, Gold: 1250 kg


[/task-description]
[code-io /]
[tests]
[test]
[input]
Pernik\|\|900000\|\|900
Sail
End
[/input]
[output]
Ahoy, Captain\! There are 1 wealthy settlements to go to\:
Pernik \-\> Population\: 900000 citizens, Gold\: 900 kg
[/output]
[/test]
[test]
[input]
Pernik\|\|900000\|\|900
Pernik\|\|900000\|\|900
Sail
End
[/input]
[output]
Ahoy, Captain\! There are 1 wealthy settlements to go to\:
Pernik \-\> Population: 1800000 citizens, Gold\: 1800 kg
[/output]
[/test]
[test]
[input]
Pernik\|\|900000\|\|900
Sail
Prosper\=\>Pernik\=\>500
End
[/input]
[output]
500 gold added to the city treasury. Pernik now has 1400 gold.
Ahoy, Captain\! There are 1 wealthy settlements to go to\:
Pernik \-\> Population\: 900000 citizens, Gold\: 1400 kg
[/output]
[/test]
[test]
[input]
Pernik\|\|900000\|\|900
Sail
Prosper\=\>Pernik\=\>\-500
End
[/input]
[output]
Gold added cannot be a negative number\!
Ahoy, Captain\! There are 1 wealthy settlements to go to\:
Pernik \-\> Population\: 900000 citizens, Gold\: 900 kg
[/output]
[/test]
[test]
[input]
Pernik\|\|900000\|\|900
Sail
Plunder\=\>Pernik\=\>600000\=\>600
End
[/input]
[output]
Pernik plundered! 600 gold stolen, 600000 citizens killed.
Ahoy, Captain\! There are 1 wealthy settlements to go to\:
Pernik \-\> Population\: 300000 citizens, Gold\: 300 kg
[/output]
[/test]
[test]
[input]
Pernik\|\|900000\|\|900
Dupnica\|\|60000\|\|60
Sail
Plunder\=\>Pernik\=\>900000\=\>10
End
[/input]
[output]
Pernik plundered! 10 gold stolen, 900000 citizens killed.
Pernik has been wiped off the map\!
Ahoy, Captain\! There are 1 wealthy settlements to go to\:
Dupnica \-\> Population: 60000 citizens, Gold\: 60 kg
[/output]
[/test]
[test]
[input]
Pernik\|\|900000\|\|900
Dupnica\|\|60000\|\|60
Sail
Plunder\=\>Pernik\=\>800000\=\>10
Plunder\=\>Pernik\=\>100000\=\>10
End
[/input]
[output]
Pernik plundered\! 10 gold stolen, 800000 citizens killed.
Pernik plundered\! 10 gold stolen, 100000 citizens killed.
Pernik has been wiped off the map\!
Ahoy, Captain\! There are 1 wealthy settlements to go to\:
Dupnica \-\> Population: 60000 citizens, Gold\: 60 kg
[/output]
[/test]
[test]
[input]
Pernik\|\|900000\|\|900
Dupnica\|\|60000\|\|60
Sail
Plunder\=\>Pernik\=\>1\=\>450
Plunder\=\>Pernik\=\>1\=\>450
End
[/input]
[output]
Pernik plundered\! 450 gold stolen, 1 citizens killed.
Pernik plundered\! 450 gold stolen, 1 citizens killed.
Pernik has been wiped off the map\!
Ahoy, Captain\! There are 1 wealthy settlements to go to\:
Dupnica \-\> Population: 60000 citizens, Gold\: 60 kg
[/output]
[/test]
[test]
[input]
A\|\|100\|\|10
B\|\|100\|\|20
Sail
End
[/input]
[output]
Ahoy, Captain\! There are 2 wealthy settlements to go to\:
B \-\> Population: 100 citizens, Gold\: 20 kg
A \-\> Population: 100 citizens, Gold\: 10 kg
[/output]
[/test]
[test]
[input]
B\|\|100\|\|10
A\|\|100\|\|10
Sail
End
[/input]
[output]
Ahoy, Captain\! There are 2 wealthy settlements to go to\:
A \-\> Population\: 100 citizens, Gold\: 10 kg
B \-\> Population\: 100 citizens, Gold\: 10 kg
[/output]
[/test]
[test]
[input]
Sail
End
[/input]
[output]
Ahoy, Captain\! All targets have been plundered and destroyed\!
[/output]
[/test]
[test]
[input]
Pernik\|\|100000\|\|1000
Dupnica\|\|100000\|\|1000
Slivnica\|\|100000\|\|1000
Sail
Prosper\=\>Pernik\=\>500
Plunder\=\>Pernik\=\>10000\=\>10
Plunder\=\>Dupnica\=\>0\=\>1000
Plunder\=\>Slivnica\=\>12345\=\>100
Prosper\=\>Slivnica\=\>1000
End
[/input]
[output]
500 gold added to the city treasury. Pernik now has 1500 gold.
Pernik plundered\! 10 gold stolen, 10000 citizens killed.
Dupnica plundered\! 1000 gold stolen, 0 citizens killed.
Dupnica has been wiped off the map\!
Slivnica plundered\! 100 gold stolen, 12345 citizens killed.
1000 gold added to the city treasury. Slivnica now has 1900 gold.
Ahoy, Captain\! There are 2 wealthy settlements to go to\:
Slivnica \-\> Population: 87655 citizens, Gold\: 1900 kg
Pernik \-\> Population: 90000 citizens, Gold\: 1490 kg
[/output]
[/test]
[test]
[input]
B\|\|100\|\|10
A\|\|100\|\|10
C\|\|100\|\|10
D\|\|100\|\|10
Sail
Plunder\=\>B\=\>50\=\>5
Plunder\=\>A\=\>50\=\>5
Plunder\=\>D\=\>50\=\>5
Plunder\=\>D\=\>50\=\>5
Prosper\=\>C\=\>100
End
[/input]
[output]
B plundered! 5 gold stolen, 50 citizens killed.
A plundered! 5 gold stolen, 50 citizens killed.
D plundered! 5 gold stolen, 50 citizens killed.
D plundered! 5 gold stolen, 50 citizens killed.
D has been wiped off the map\!
100 gold added to the city treasury. C now has 110 gold.
Ahoy, Captain\! There are 3 wealthy settlements to go to\:
C \-\> Population\: 100 citizens, Gold\: 110 kg
A \-\> Population\: 50 citizens, Gold\: 5 kg
B \-\> Population\: 50 citizens, Gold\: 5 kg
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
