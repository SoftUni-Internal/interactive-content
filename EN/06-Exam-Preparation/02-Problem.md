[slide hideTitle]
# Legendary Farming

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/09-Exam-Preparation/EN/interactive-java-advanced-exam-preparation-3-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Legendary Farming" taskId="Java-Advanced-Exam-Preparation-Legendary-Farming" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java-code]
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

You’ve beaten all the content and the last thing left to accomplish is own a legendary item. 

However, it’s a tedious process and requires quite a bit of farming. 

Anyway, you are not too pretentious – any legendary will do. 

The possible items are:

- **Shadowmourne** – requires **250 Shards**;
- **Valanyr** – requires **250 Fragments**;
- **Dragonwrath** – requires **250 Motes**;

**Shards**, **Fragments** and **Motes** are **the key materials**, all else is **junk**. 

You will be given lines of input, such as 
**2 motes 3 ores 15 stones**. 

Keep track of the **key materials** - the **first** that reaches the **250 mark wins** the **race**. 

At that point, print the corresponding legendary obtained. 

Then, print the **remaining** shards, fragments, motes, ordered by **quantity** in **descending** order, each on a new line. 

Finally, print the collected **junk** items, in **alphabetical** order.

## Input

- Each line of input is in format \{quantity\} \{material\} \{quantity\} \{material\} … \{quantity\} \{material\}

## Output

- On the first line, print the obtained item in format \{Legendary item\} obtained |!
- On the next three lines, print the remaining key materials in descending order by quantity
  * If two key materials have the same quantity, print them in alphabetical order
- On the final several lines, print the junk items in alphabetical order
  * All materials are printed in format \{material\}: \{quantity\}
  * All output should be **lowercase**, except the first letter of the legendary


## Constraints

- The quantity-material pairs are between 1 and 25 per line.
- The number of lines is in range \[1..10\]
- All materials are case-insensitive.
- Allowed working time: 0.25s
- Allowed memory: 16 MB


## Example 1

| **Input** | **Output** |
| --- | --- |
| 3 Motes 5 stones 5 Shards | Valanyr obtained! |
| 6 leathers 255 fragments 7 Shards | fragments: 5 |
| | shards: 5 | 
| | motes: 3 |
| | leathers: 6 |
| | stones: 5 |

[hints]
[hint]
Store the key and junk materials in two different data structures.
[/hint] 
[hint]
Read lines of input until the item is obtained.
[/hint] 
[hint]
Split the tokens on each input line and iterate through them.
[/hint] 
[/hints] 

## Example 2

| **Input** | **Output** |
| --- | --- |
| 123 silver 6 shards 8 shards 5 motes | Dragonwrath obtained! |
| 9 fangs 75 motes 103 MOTES 8 Shards | shards: 22 |
| 86 Motes 7 stones 19 silver | motes: 19 |
| | fragments: 0 |
| | fangs: 9 |
| | silver: 123 |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
3 Motes 5 stones 5 Shards
6 leathers 255 fragments 7 Shards
[/input]
[output]
Valanyr obtained!
fragments: 5
shards: 5
motes: 3
leathers: 6
stones: 5
[/output]
[/test]
[test open]
[input]
123 silver 6 shards 8 shards 5 motes
9 fangs 75 motes 103 MOTES 8 Shards
86 Motes 7 stones 19 silver
[/input]
[output]
Dragonwrath obtained!
shards: 22
motes: 19
fragments: 0
fangs: 9
silver: 123
[/output]
[/test]
[test]
[input]
5 shards 5 motes 255 fragments
[/input]
[output]
Valanyr obtained!
fragments: 5
motes: 5
shards: 5
[/output]
[/test]
[test]
[input]
16 leathers 22 leather 82 leathers 17 LEATHER 88 LEATHERS
28 shards 78 motes 66 motes 215 shards 7 shards 3 fragments
[/input]
[output]
Shadowmourne obtained!
motes: 144
fragments: 0
shards: 0
leather: 39
leathers: 186
[/output]
[/test]
[test]
[input]
8 iron
3 gold
7 silver 15 shards
15 onions 236 shards
8 freshwater
9 souls
[/input]
[output]
Shadowmourne obtained!
shards: 1
fragments: 0
motes: 0
gold: 3
iron: 8
onions: 15
silver: 7
[/output]
[/test]
[test]
[input]
249 shards 249 fragments 249 motes 8 linen 5 silver 123 silk 22 embersilk
13 alpha-gems 0 shards 0 fragments 1 motes
[/input]
[output]
Dragonwrath obtained!
fragments: 249
shards: 249
motes: 0
alpha-gems: 13
embersilk: 22
linen: 8
silk: 123
silver: 5
[/output]
[/test]
[test]
[input]
98 spirit-shards 17 SPIRiT-SHARDS 123 SPIRIT-SHARDS 12 sPI_ritShards 92 gems 1 gem
6 fragments 9 Fragments 129 Fragments 1 Shards 0 Shards 123 Shards 9 Motes
123 Motes 123 Fragments 1098 MotES
[/input]
[output]
Valanyr obtained!
motes: 132
shards: 124
fragments: 17
gem: 1
gems: 92
spi_ritshards: 12
spirit-shards: 238
[/output]
[/test]
[test]
[input]
0 shards
1 shards
2 shards
3 shards
4 shards
0 SHARDS 126 SHARDS
122 SHARDS
1 motes
1 fragments
[/input]
[output]
Shadowmourne obtained!
shards: 8
fragments: 0
motes: 0
[/output]
[/test]
[test]
[input]
77 heavy-leather 123 light-leather
789 fragments 8889 fragments 88123 motes
[/input]
[output]
Valanyr obtained!
fragments: 539
motes: 0
shards: 0
heavy-leather: 77
light-leather: 123
[/output]
[/test]
[test]
[input]
988 HEAVY-STONES
1230812 HEAVY-STONes
120398 Fragments
[/input]
[output]
Valanyr obtained!
fragments: 120148
motes: 0
shards: 0
heavy-stones: 1231800
[/output]
[/test]
[test]
[input]
123 leathers
12 leather
12 leathe
12 motes
12 shards
262 fragments
[/input]
[output]
Valanyr obtained!
fragments: 12
motes: 12
shards: 12
leathe: 12
leather: 12
leathers: 123
[/output]
[/test]
[test]
[input]
71 linen 71 linen 71 linen 71 linen 71 linen 71 linen 71 linen 71 linen 71 linen 71 linen 71 linen 71 linen 71 linen 71 linen
71 linen 71 linen 71 linen 71 linen 71 linen 71 linen
15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes
15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes
15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes
15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes
15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes
15 shards 15 fragments 15 motes
15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes
15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes 15 shards 15 fragments 15 motes
[/input]
[output]
Shadowmourne obtained!
fragments: 240
motes: 240
shards: 5
linen: 1420
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
