[slide hideTitle]
# Problem: Withdraw Money
[code-task title="Withdraw Money" taskId="java-db-and-MySQL-database-programmability-withdraw-money" executionType="tests-execution" executionStrategy="mysql-run-skeleton-run-queries-and-check-database" requiresInput]
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
Add stored procedures **usp_withdraw_money(account_id, money_amount)** that operate on transactions.

Ensure that withdrawing is only possible when the balance is enough and **money_amount** is a valid positive number. 

**Work with precision of four digits after the decimal point.**

The procedure should produce exact results, working with the specified precision.


## Examples

Here is the result for **account_id = 1** and **money_amount = 10**.

| **account_id** |**account_holder_id** |**balance** |
| --- | --- |--- |
| 1 | 1 | 123.1200 | 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
CALL usp_withdraw_money (1, 10);
select \* from accounts
WHERE id = 1;
[/input]
[output]
1
1
113.1200
[/output]
[/test]
[test]
[input]
CALL usp_withdraw_money (1, 10);
select \* from accounts
WHERE id = 1;
[/input]
[output]
1
1
113.1200
[/output]
[/test]
[test]
[input]
CALL usp_withdraw_money (2, 10.1);
select \* from accounts
WHERE id = 2;
[/input]
[output]
2
3
4344.1300
[/output]
[/test]
[test]
[input]
CALL usp_withdraw_money (3, 12.4324);
select \* from accounts
WHERE id = 3;
[/input]
[output]
3
12
6546530.7976
[/output]
[/test]
[test]
[input]
CALL usp_withdraw_money (4, 0.0);
select \* from accounts
WHERE id = 4;
[/input]
[output]
4
9
15345.6400
[/output]
[/test]
[test]
[input]
CALL usp_withdraw_money (6, -50);
select \* from accounts
WHERE id = 6;
[/input]
[output]
6
8
5436.3400
[/output]
[/test]
[test]
[input]
CALL usp_withdraw_money (7, 1000000);
select \* from accounts
WHERE id = 7;
[/input]
[output]
7
10
565649.2000
[/output]
[/test]
[/tests]
[/code-task]
[/slide]