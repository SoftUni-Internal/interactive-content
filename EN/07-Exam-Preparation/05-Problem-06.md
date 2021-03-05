// sectionId: "Javascript::Programming-Basics::Exam-Preparation::Problem-06"
# Problem 6: The Best Movie
[slide hideTitle]
# The Best Movie

[video src="https://videos.softuni.org/hls/javascript-basics/07.Exam-Preparation/EN/JS-exam-preparation-6-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]



[code-task title="The Best Movie" taskId="js-pb-exam-preparation-The-Best-Movie" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function movie(input) {
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
It is Friday night, and you are wondering which movie to watch. 

You decide to create a program, which chooses it for you. 

Until receiving the "**STOP**" command, you will be given the titles of some of your favorite movies. 

The best movie for you will be the one that has the most points. 

The points are calculated by the sum of the ASCII character values in the movie title. 

There will not be a case where two movies have an equal amount of points

Keep in mind the following:

- For each lowercase letter from the title, you must subtract the length of the movie title, multiplied by 2, from the sum.

- For each uppercase letter in the title, the length of the movie's title should be subtracted from the sum.

- You can have a maximum of 7 movie titles.

## Input

You will receive multiple elements from the console until the "**STOP**" command or until the limit of 7 movies is reached:

- Movie title: String

## Output

Print on the console:

- If you have reached the limit of 7 movies you must print: 

"**Title limit has been reached.**"

- Print the best movie: 

"**The best movie for you is** \{**movie title**\} **its ASCII sum is:** \{**sum of symbols**\}."

## Example
| **Input** | **Output** |
| --- | --- |
|movie(['Matrix', 'Breaking bad', 'Legend', 'STOP'])| The best movie for you is Breaking bad its ASCII sum is: 878.|
|movie(['Wrong turn', 'The maze', 'Area 51', 'Night Club', 'Ice age', 'Harry Potter', 'Wizards'])| Title limit has been reached.|
||The best movie for you is Harry Potter its ASCII sum is: 948.|


[hints]
[hint]
First, we get **Matrix**, the first letter is M with a value of 77, it is a capital letter so we subtract from it the length of the title 77 \- 6 \= 71.
[/hint]
[hint]
The second letter has a value of 97 and we subtract from its title length \* 2 from the sum 97 \- 12 = 85.

Similarly, we proceed with each subsequent letter until we get the final amount of 563.
[/hint]
[hint]
Upon receiving the "**STOP**" command, we print the title with the highest value, which is **Breaking bad** with a sum of 878.
[/hint]

[/hints]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
movie(['Matrix', 'Breaking bad', 'Legend', 'STOP'])
[/input]
[output]
The best movie for you is Breaking bad its ASCII sum is: 878.
[/output]
[/test]
[test open]
[input]
movie(['Wrong turn', 'The maze', 'Area 51', 'Night Club', 'Ice age', 'Harry Potter', 'Wizards'])
[/input]
[output]
Title limit has been reached.
The best movie for you is Harry Potter its ASCII sum is: 948.
[/output]
[/test]
[test]
[input]
movie(['The maze', 'School story 2', 'Shrek 2', 'Ice age', 'STOP'])
[/input]
[output]
The best movie for you is School story 2 its ASCII sum is: 1013.
[/output]
[/test]
[test]
[input]
movie(['Tomorrow Land', 'NEW BEGINNING', 'STOP'])
[/input]
[output]
The best movie for you is Tomorrow Land its ASCII sum is: 1002.
[/output]
[/test]
[test]
[input]
movie(['The maze', 'Scorch', 'Killing zone', 'Danger alert', 'Harry Poter', 'Shrek', 'Hobbit'])
[/input]
[output]
Title limit has been reached.
The best movie for you is Killing zone its ASCII sum is: 938.
[/output]
[/test]
[test]
[input]
movie(['The Maze', 'New Beggining', 'Trials', 'STOP'])
[/input]
[output]
The best movie for you is New Beggining its ASCII sum is: 950.
[/output]
[/test]
[test]
[input]
movie(['Dark Knight Raises', 'Game of thrones', 'STOP'])
[/input]
[output]
The best movie for you is Dark Knight Raises its ASCII sum is: 1156.
[/output]
[/test]
[test]
[input]
movie(['New Beggining', 'Pretty Little Liars', 'Hobbit New Beggining', 'STOP'])
[/input]
[output]
The best movie for you is Pretty Little Liars its ASCII sum is: 1252.
[/output]
[/test]
[test]
[input]
movie(['Frozen', 'Kill machine', 'Mad Max', 'Fury', 'Rage', 'Stone cold', 'Matrix'])
[/input]
[output]
Title limit has been reached.
The best movie for you is Kill machine its ASCII sum is: 901.
[/output]
[/test]
[test]
[input]
movie(['Rage', 'Fury', 'Cold', 'Ice', 'Fire', 'Furrry', 'ROAD RAGE'])
[/input]
[output]
Title limit has been reached.
The best movie for you is Furrry its ASCII sum is: 584.
[/output]
[/test]
[test]
[input]
movie(['Heavy Metal', 'Armagedon', 'War of Titans', 'TROY', 'Elysium', 'Vortex', 'Ice Age'])
[/input]
[output]
Title limit has been reached.
The best movie for you is War of Titans its ASCII sum is: 942.
[/output]
[/test]
[test]
[input]
movie(['Heavy Metal', 'Armagedon', 'War of Titans', 'TROY', 'Elysium', 'Vortex', 'STOP'])
[/input]
[output]
The best movie for you is War of Titans its ASCII sum is: 942.
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
