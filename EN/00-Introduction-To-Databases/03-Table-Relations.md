[slide hideTitle]
# Problem: Define Function 
[code-task title="Define Function" taskId="java-db-and-MySQL-database-programmability-define-function" executionType="tests-execution" executionStrategy="mysql-run-skeleton-run-queries-and-check-database" requiresInput]
[code-editor language=sql]
```
-- Write your query here
```
[/code-editor]
[code-adapter]
create table comprise (
	set_of_chars varchar(50),
	word varchar(50)
);
insert into comprise values ('bobr', 'Rob'), ('oistmiahf', 'halves'), ('oistmiahf', 'Sofia'), ('a', 'aaa'),
('pppp', 'Guy'), ('ostmahf', 'Sofia'), ('itmiahfs', 'Sofia'), ('sitmiaho', 'Sofia'),('itmishof', 'Sofia');
[/code-adapter]
[task-description]
# Description

Define a function **ufn_is_word_comprised(set_of_letters varchar(50), word varchar(50))** that returns **1** or **0** depending on whether the word can be comprised of the given set of letters. 

## Examples

| **set_of_letters** | **word** | **result** |
| --- | --- | 
| oistmiahf | Sofia |1 |
| oistmiahf  | halves |0 |
| bobr | Rob | 1|
| pppp | Guy | 0|


[/task-description]
[code-io /]
[tests]
[test open]
[input]
select \* from comprise where ufn_is_word_comprised(set_of_chars, word) = 1 order by set_of_chars;
[/input]
[output]
a
aaa
bobr
Rob
oistmiahf
Sofia
[/output]
[/test]
[test]
[input]
select ufn_is_word_comprised('bobr', 'Rob');
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
select ufn_is_word_comprised('oistmiahf', 'halves');
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
select ufn_is_word_comprised('oistmiahf', 'Sofia');
[/input]
[output]
1
[/output]
[/test]
[test]
[input]
select ufn_is_word_comprised('pppp', 'Guy');
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
select ufn_is_word_comprised('ostmahf', 'Sofia');
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
select ufn_is_word_comprised('oitmiahf', 'Sofia');
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
select ufn_is_word_comprised('itmiahfs', 'Sofia');
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
select ufn_is_word_comprised('sitmiaho', 'Sofia');
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
select ufn_is_word_comprised('itmishof', 'Sofia');
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
select ufn_is_word_comprised('a', 'aaa');
[/input]
[output]
1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]