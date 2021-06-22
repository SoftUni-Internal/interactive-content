# Table Relations


[slide hideTitle]
# Mountains and Peaks
[code-task title="Mountains and Peaks" taskId="table-relations-mountains-and-peaks" executionType="tests-execution" executionStrategy="mysql-run-queries-and-check-database" requiresInput]
[code-editor language=sql]
```

CREATE TABLE `mountains`(
	`id` INT PRIMARY KEY,
    `name` VARCHAR(50)
);

CREATE TABLE `peaks`(
	`id` INT PRIMARY KEY,
    `name` VARCHAR(50),
    `mountain_id` INT,
    CONSTRAINT `fk_peaks_mountains`
    FOREIGN KEY (`mountain_id`)
    REFERENCES `mountains`(`id`)
);
```
[/code-editor]
[task-description]
## Description
Description ...

[/task-description]
[code-io /]
[tests]
[test]
[input]
SELECT DISTINCT lower(column_name)
FROM INFORMATION_SCHEMA.key_column_usage
WHERE TABLE_SCHEMA = database()
  and lower(table_name) = 'mountains'
order by lower(column_name);


SELECT DISTINCT lower(column_name)
FROM INFORMATION_SCHEMA.key_column_usage
WHERE TABLE_SCHEMA = database()
  and lower(table_name) = 'peaks'
order by lower(column_name);
[/input]
[output]
id
id
mountain_id
[/output]
[/test]
[test]
[input]
SELECT DISTINCT lower(column_name)
FROM INFORMATION_SCHEMA.key_column_usage
WHERE TABLE_SCHEMA = database()
  and lower(table_name) = 'mountains'
order by lower(column_name);


SELECT DISTINCT lower(column_name)
FROM INFORMATION_SCHEMA.key_column_usage
WHERE TABLE_SCHEMA = database()
  and lower(table_name) = 'peaks'
order by lower(column_name);
[/input]
[output]
id
id
mountain_id
[/output]
[/test]
[/tests]
[/code-task]
[/slide]