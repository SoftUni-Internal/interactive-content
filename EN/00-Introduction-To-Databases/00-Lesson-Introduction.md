[slide hideTitle]
# Problem: Log Accounts Trigger
[code-task title="Log Accounts Trigger" taskId="java-db-and-MySQL-database-programmability-log-accounts-trigger" executionType="tests-execution" executionStrategy="mysql-run-skeleton-run-queries-and-check-database" requiresInput]
[code-editor language=sql]
```
-- Write your query here
```
[/code-editor]
[code-adapter]
```
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping structure for table bank.accounts
DROP TABLE IF EXISTS `accounts`;
CREATE TABLE IF NOT EXISTS `accounts` (
  `id` int(11) NOT NULL,
  `account_holder_id` int(11) NOT NULL,
  `balance` decimal(19,4) DEFAULT '0.0000',
  PRIMARY KEY (`id`),
  KEY `fk_accounts_account_holders` (`account_holder_id`),
  CONSTRAINT `fk_accounts_account_holders` FOREIGN KEY (`account_holder_id`) REFERENCES `account_holders` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table bank.accounts: ~18 rows (approximately)
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
INSERT INTO `accounts` (`id`, `account_holder_id`, `balance`) VALUES
	(1, 1, 123.1200),
	(2, 3, 4354.2300),
	(3, 12, 6546543.2300),
	(4, 9, 15345.6400),
	(5, 11, 36521.2000),
	(6, 8, 5436.3400),
	(7, 10, 565649.2000),
	(8, 11, 999453.5000),
	(9, 1, 5349758.2300),
	(10, 2, 543.3000),
	(11, 3, 10.2000),
	(12, 7, 245656.2300),
	(13, 5, 5435.3200),
	(14, 4, 1.2300),
	(15, 6, 0.1900),
	(16, 2, 5345.3400),
	(17, 11, 76653.2000),
	(18, 1, 235469.8900);
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;


-- Dumping structure for table bank.account_holders
DROP TABLE IF EXISTS `account_holders`;
CREATE TABLE IF NOT EXISTS `account_holders` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `ssn` char(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table bank.account_holders: ~12 rows (approximately)
/*!40000 ALTER TABLE `account_holders` DISABLE KEYS */;
INSERT INTO `account_holders` (`id`, `first_name`, `last_name`, `ssn`) VALUES
	(1, 'Susan', 'Cane', '1234567890'),
	(2, 'Kim', 'Novac', '1234567890'),
	(3, 'Jimmy', 'Henderson', '1234567890'),
	(4, 'Steve', 'Stevenson', '1234567890'),
	(5, 'Bjorn', 'Sweden', '1234567890'),
	(6, 'Kiana', 'Peterson', '1234567890'),
	(7, 'Peter', 'Kirbitson', '1234567890'),
	(8, 'Micheal', 'Tsiga', '1234567890'),
	(9, 'Zlatan', 'Packil', '1234567890'),
	(10, 'Monika', 'Michley', '1234567890'),
	(11, 'Zlock', 'Zlotowitz', '1234567890'),
	(12, 'Peter', 'Peabrick', '1234567890');
/*!40000 ALTER TABLE `account_holders` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
```
[/code-adapter]
[task-description]
# Description

Create another table – logs(log_id, account_id, old_sum, new_sum). Add a trigger to the accounts table that adds a new entry to the logs table every time the sum on the given account changes.


## Examples

The following data is inserted into the logs table after increasing by 10 the balance of an account with an id of 1.

| **log_id** |**account_id** |**old_sum** |**new_sum** |
| --- | --- |--- | --- |
| 1 | 1 | 123.12 | 113.12 |
| 2 | 1 | 145.43 | 155.43 |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
SELECT lower(TABLE_NAME)
FROM information_schema.TABLES 
WHERE lower(TABLE_SCHEMA) = database() and lower(TABLE_NAME) = 'logs'
order by lower(table_name);

SELECT lower(COLUMN_NAME)
FROM information_schema.COLUMNS 
WHERE lower(TABLE_NAME) = 'logs'
order by lower(column_name);

SELECT lower(COLUMN_NAME)
    FROM INFORMATION_SCHEMA.key_column_usage
    WHERE TABLE_SCHEMA = database()
    and CONSTRAINT_NAME='PRIMARY'
    and lower(table_name) = 'logs';
	
UPDATE accounts SET balance = balance + 10
WHERE id = 1;

UPDATE accounts SET balance = 1.1 \* balance;
SELECT \* FROM logs order by log_id, new_sum;
[/input]
[output]
logs
account_id
log_id
new_sum
old_sum
log_id
1
1
123.1200
133.1200
2
1
133.1200
146.4320
3
2
4354.2300
4789.6530
4
3
6546543.2300
7201197.5530
5
4
15345.6400
16880.2040
6
5
36521.2000
40173.3200
7
6
5436.3400
5979.9740
8
7
565649.2000
622214.1200
9
8
999453.5000
1099398.8500
10
9
5349758.2300
5884734.0530
11
10
543.3000
597.6300
12
11
10.2000
11.2200
13
12
245656.2300
270221.8530
14
13
5435.3200
5978.8520
15
14
1.2300
1.3530
16
15
0.1900
0.2090
17
16
5345.3400
5879.8740
18
17
76653.2000
84318.5200
19
18
235469.8900
259016.8790
[/output]
[/test]
[test]
[input]
SELECT lower(TABLE_NAME)
FROM information_schema.TABLES 
WHERE lower(TABLE_SCHEMA) = database() and lower(TABLE_NAME) = 'logs'
order by lower(table_name);

SELECT lower(COLUMN_NAME)
FROM information_schema.COLUMNS 
WHERE lower(TABLE_NAME) = 'logs'
order by lower(column_name);

SELECT lower(COLUMN_NAME)
    FROM INFORMATION_SCHEMA.key_column_usage
    WHERE TABLE_SCHEMA = database()
    and CONSTRAINT_NAME='PRIMARY'
    and lower(table_name) = 'logs'
order by lower(column_name);
[/input]
[output]
logs
account_id
log_id
new_sum
old_sum
log_id
[/output]
[/test]
[test]
[input]
UPDATE accounts SET balance = balance + 10
WHERE id = 1;
SELECT \* FROM logs;
[/input]
[output]
1
1
123.1200
133.1200
[/output]
[/test]
[test]
[input]
UPDATE accounts SET balance = 1.1 \* balance;
SELECT \* FROM logs;
[/input]
[output]
1
1
123.1200
135.4320
2
2
4354.2300
4789.6530
3
3
6546543.2300
7201197.5530
4
4
15345.6400
16880.2040
5
5
36521.2000
40173.3200
6
6
5436.3400
5979.9740
7
7
565649.2000
622214.1200
8
8
999453.5000
1099398.8500
9
9
5349758.2300
5884734.0530
10
10
543.3000
597.6300
11
11
10.2000
11.2200
12
12
245656.2300
270221.8530
13
13
5435.3200
5978.8520
14
14
1.2300
1.3530
15
15
0.1900
0.2090
16
16
5345.3400
5879.8740
17
17
76653.2000
84318.5200
18
18
235469.8900
259016.8790
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]
# Problem: Emails Trigger
[code-task title="Emails Trigger" taskId="java-db-and-MySQL-database-programmability-emails-trigger" executionType="tests-execution" executionStrategy="mysql-run-skeleton-run-queries-and-check-database" requiresInput]
[code-editor language=sql]
```
-- Write your query here
```
[/code-editor]
[code-adapter]
```
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping structure for table bank.accounts
DROP TABLE IF EXISTS `accounts`;
CREATE TABLE IF NOT EXISTS `accounts` (
  `id` int(11) NOT NULL,
  `account_holder_id` int(11) NOT NULL,
  `balance` decimal(19,4) DEFAULT '0.0000',
  PRIMARY KEY (`id`),
  KEY `fk_accounts_account_holders` (`account_holder_id`),
  CONSTRAINT `fk_accounts_account_holders` FOREIGN KEY (`account_holder_id`) REFERENCES `account_holders` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table bank.accounts: ~18 rows (approximately)
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
INSERT INTO `accounts` (`id`, `account_holder_id`, `balance`) VALUES
	(1, 1, 123.1200),
	(2, 3, 4354.2300),
	(3, 12, 6546543.2300),
	(4, 9, 15345.6400),
	(5, 11, 36521.2000),
	(6, 8, 5436.3400),
	(7, 10, 565649.2000),
	(8, 11, 999453.5000),
	(9, 1, 5349758.2300),
	(10, 2, 543.3000),
	(11, 3, 10.2000),
	(12, 7, 245656.2300),
	(13, 5, 5435.3200),
	(14, 4, 1.2300),
	(15, 6, 0.1900),
	(16, 2, 5345.3400),
	(17, 11, 76653.2000),
	(18, 1, 235469.8900);
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;


-- Dumping structure for table bank.account_holders
DROP TABLE IF EXISTS `account_holders`;
CREATE TABLE IF NOT EXISTS `account_holders` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `ssn` char(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table bank.account_holders: ~12 rows (approximately)
/*!40000 ALTER TABLE `account_holders` DISABLE KEYS */;
INSERT INTO `account_holders` (`id`, `first_name`, `last_name`, `ssn`) VALUES
	(1, 'Susan', 'Cane', '1234567890'),
	(2, 'Kim', 'Novac', '1234567890'),
	(3, 'Jimmy', 'Henderson', '1234567890'),
	(4, 'Steve', 'Stevenson', '1234567890'),
	(5, 'Bjorn', 'Sweden', '1234567890'),
	(6, 'Kiana', 'Peterson', '1234567890'),
	(7, 'Peter', 'Kirbitson', '1234567890'),
	(8, 'Micheal', 'Tsiga', '1234567890'),
	(9, 'Zlatan', 'Packil', '1234567890'),
	(10, 'Monika', 'Michley', '1234567890'),
	(11, 'Zlock', 'Zlotowitz', '1234567890'),
	(12, 'Peter', 'Peabrick', '1234567890');
/*!40000 ALTER TABLE `account_holders` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
```
[/code-adapter]
[task-description]
# Description

Create another table - **notification_emails(id, recipient, subject, body)**. 

Add a trigger to the logs table to **create a new email whenever a new record is inserted into the logs table**. 

Each record must consist of:
- **recipient** - **account_id**
- **subject** - "**Balance change for account:** \{**account_id**\}"
- **body** - "**On** \{**date (current date)**\} **your balance was changed from** \{**old**\} **to** \{**new**\}."

## Examples

| **id** |**recipient** |**subject** |**body** |
| --- | --- |--- | --- |
| 1 | 1 | Balance change for account: 1 | On Sep 15 2016 at 11:44:06 AM your balance was changed from 133 to 143. |
| ... | ... | ... | ... |

[/task-description]
[code-io /]
[tests]
[test open]
[input]
SELECT lower(TABLE_NAME)
FROM information_schema.TABLES
WHERE lower(TABLE_SCHEMA) = database() and lower(TABLE_NAME) = 'notification_emails'
order by lower(table_name);

SELECT lower(COLUMN_NAME)
FROM information_schema.COLUMNS
WHERE lower(TABLE_NAME) = 'notification_emails'
order by lower(column_name);

SELECT lower(COLUMN_NAME)
FROM INFORMATION_SCHEMA.key_column_usage
WHERE TABLE_SCHEMA = database()
  and CONSTRAINT_NAME='PRIMARY'
  and lower(table_name) = 'notification_emails'
order by lower(COLUMN_NAME);

SELECT lower(TABLE_NAME)
FROM information_schema.TABLES
WHERE lower(TABLE_SCHEMA) = database() and lower(TABLE_NAME) = 'logs'
order by lower(TABLE_NAME);

SELECT lower(COLUMN_NAME)
FROM information_schema.COLUMNS
WHERE lower(TABLE_NAME) = 'logs'
order by lower(COLUMN_NAME);

SELECT lower(COLUMN_NAME)
FROM INFORMATION_SCHEMA.key_column_usage
WHERE TABLE_SCHEMA = database()
  and CONSTRAINT_NAME='PRIMARY'
  and lower(table_name) = 'logs'
order by lower(COLUMN_NAME);
[/input]
[output]
notification_emails
body
id
recipient
subject
id
logs
account_id
log_id
new_sum
old_sum
log_id
[/output]
[/test]
[test]
[input]
SELECT lower(TABLE_NAME)
FROM information_schema.TABLES
WHERE lower(TABLE_SCHEMA) = database() and lower(TABLE_NAME) = 'notification_emails'
order by lower(table_name);

SELECT lower(COLUMN_NAME)
FROM information_schema.COLUMNS
WHERE lower(TABLE_NAME) = 'notification_emails'
order by lower(column_name);

SELECT lower(COLUMN_NAME)
FROM INFORMATION_SCHEMA.key_column_usage
WHERE TABLE_SCHEMA = database()
  and CONSTRAINT_NAME='PRIMARY'
  and lower(table_name) = 'notification_emails'
order by lower(COLUMN_NAME);
[/input]
[output]
notification_emails
body
id
recipient
subject
id
[/output]
[/test]
[test]
[input]
SELECT lower(TABLE_NAME)
FROM information_schema.TABLES
WHERE lower(TABLE_SCHEMA) = database() and lower(TABLE_NAME) = 'logs'
order by lower(TABLE_NAME);

SELECT lower(COLUMN_NAME)
FROM information_schema.COLUMNS
WHERE lower(TABLE_NAME) = 'logs'
order by lower(COLUMN_NAME);

SELECT lower(COLUMN_NAME)
FROM INFORMATION_SCHEMA.key_column_usage
WHERE TABLE_SCHEMA = database()
  and CONSTRAINT_NAME='PRIMARY'
  and lower(table_name) = 'logs'
order by lower(COLUMN_NAME);
[/input]
[output]
logs
account_id
log_id
new_sum
old_sum
log_id
[/output]
[/test]
[test]
[input]
UPDATE accounts SET balance = balance + 10
WHERE id = 1;
SELECT ne.id, ne.recipient, ne.subject
FROM notification_emails ne
order by ne.id;
[/input]
[output]
1
1
Balance change for account: 1
[/output]
[/test]
[test]
[input]
UPDATE accounts SET balance = balance + 10
WHERE id = 1;
SELECT \*
FROM logs l
order by l.log_id;
[/input]
[output]
1
1
123.1200
133.1200
[/output]
[/test]
[test]
[input]
UPDATE accounts SET balance = 1.1 \* balance;
SELECT ne.id, ne.recipient, ne.subject
FROM notification_emails ne
order by ne.id;
[/input]
[output]
1
1
Balance change for account: 1
2
2
Balance change for account: 2
3
3
Balance change for account: 3
4
4
Balance change for account: 4
5
5
Balance change for account: 5
6
6
Balance change for account: 6
7
7
Balance change for account: 7
8
8
Balance change for account: 8
9
9
Balance change for account: 9
10
10
Balance change for account: 10
11
11
Balance change for account: 11
12
12
Balance change for account: 12
13
13
Balance change for account: 13
14
14
Balance change for account: 14
15
15
Balance change for account: 15
16
16
Balance change for account: 16
17
17
Balance change for account: 17
18
18
Balance change for account: 18
[/output]
[/test]
[test]
[input]
UPDATE accounts SET balance = 1.1 \* balance;
SELECT \*
FROM logs l
order by l.log_id;
[/input]
[output]
1
1
123.1200
135.4320
2
2
4354.2300
4789.6530
3
3
6546543.2300
7201197.5530
4
4
15345.6400
16880.2040
5
5
36521.2000
40173.3200
6
6
5436.3400
5979.9740
7
7
565649.2000
622214.1200
8
8
999453.5000
1099398.8500
9
9
5349758.2300
5884734.0530
10
10
543.3000
597.6300
11
11
10.2000
11.2200
12
12
245656.2300
270221.8530
13
13
5435.3200
5978.8520
14
14
1.2300
1.3530
15
15
0.1900
0.2090
16
16
5345.3400
5879.8740
17
17
76653.2000
84318.5200
18
18
235469.8900
259016.8790
[/output]
[/test]
[/tests]
[/code-task]
[/slide]