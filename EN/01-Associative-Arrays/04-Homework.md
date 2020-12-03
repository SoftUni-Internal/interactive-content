[slide]

# Homework

[/slide]
[slide]

# Problem: Word Tracker

[code-task title="Word Tracker" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```js
function occurence(input) {
  let words = input.shift().split(" ");
  let wordMap = new Map();
  for (const word of words) {
    wordMap.set(word, 0);
  }

  for (const word of input) {
    if (wordMap.has(word)) {
      wordMap.set(word, wordMap.get(word) + 1);
    }
  }

  sortedWords = Array.from(wordMap).sort((a, b) => {
    return b[1] - a[1];
  });

  for (const [word, count] of sortedWords) {
    console.log(`${word} - ${count}`);
  }
}
// function solve(input) {
//   // Write your code here
// }
```

[/code-editor]
[task-description]

# Description

Write a function that receives an **array of words** and finds **occurrences of given words** in that sentence.

The input will come as **array of strings**.

The **first string** will contain the **words** you will be looking for separated by a **space**.

All **strings after that** will be the words you will be looking for.

Print **for each word** how many times it **occurs**.

The words should be **sorted by count in descending**.

# Example

| **Input**                                                                                                                                                                 | **Output**    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `['this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the' ,'words','this','and','sentence','because','this','is','your','task' ]` | this \- 3     |
|                                                                                                                                                                           | sentence \- 2 |

[/task-description]
[tests]
[test]
[input]
this sentence
In this sentence you have to count the occurances of the words this and sentence because this is your task
[/input]
[output]
this \- 3
sentence \- 2
[/output]
[/test]
[test]
[input]
dara bara mara
mara mara mara dara bara dara bara data dara rdhfdjkk fhsjksdhjks sdhfsdjfd fhdjk bara bara
[/input]
[output]
bara \- 4
dara \- 3
mara \- 3
[/output]
[/test]
[test]
[input]
dara
mara mara mara dara bara dara bara data dara rdhfdjkk fhsjksdhjks sdhfsdjfd fhdjk bara bara
[/input]
[output]
dara - 3
[/output]
[/test]
[test]
[input]
dara sara mara
mara mara mara dara bara dara bara data dara rdhfdjkk fhsjksdhjks sdhfsdjfd fhdjk bara bara
[/input]
[output]
dara \- 3
mara \- 3
sara \- 0
[/output]
[/test]
[test]
[input]
dara sara mara bara
mara mara mara dara bara dara bara data dara rdhfdjkk fhsjksdhjks sdhfsdjfd fhdjk bara bara
[/input]
[output]
bara \- 4
dara \- 3
mara \- 3
sara \- 0
[/output]
[/test]
[test]
[input]
a b c d
vdsa a rb b dbs a ss b c d sdn bd d
[/input]
[output]
a \- 2
b \- 2
d \- 2
c \- 1
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
[slide]

# Problem: Odd Occurrences

[code-task title="Odd Occurrences" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```js
function odd(input) {
  let map = new Map();
  let list = input.split(" ").map((x) => x.toLowerCase());
  let string = "";

  for (const word of list) {
    if (map.has(word)) {
      map.set(word, map.get(word) + 1);
    } else {
      map.set(word, 1);
    }
  }

  for (const [key, value] of map) {
    if (value % 2 !== 0) {
      string += key + " ";
    }
  }

  console.log(string);
}
// function solve(input) {
//   // Write your code here
// }
```

[/code-editor]
[task-description]

# Description

Write a function that extracts all the elements of a sentence odd number of times (**case-insensitive**).

The input comes as a **single string**. The words will be **separated by a single space**.

# Example

| **Input**                                   | **Output**  |
| ------------------------------------------- | ----------- |
| 'Java C\# Php PHP Java PhP 3 C\# 3 1 5 C\#' | c\# php 1 5 |

[/task-description]
[tests]
[test]
[input]
Java C\# Php PHP Java PhP 3 C\# 3 1 5 C\#
[/input]
[output]
c\# php 1 5
[/output]
[/test]
[test]
[input]
a 2 A a A c D C dcndjk dbsa bsd bs Cbc D ss as
[/input]
[output]
2 dcndjk dbsa bsd bs cbc ss as
[/output]
[/test]
[test]
[input]
a a a a a D Sb dbsnb bdw dd dd dss
[/input]
[output]
a d sb dbsnb bdw dss
[/output]
[/test]
[test]
[input]
b b b b b
[/input]
[output]
b
[/output]
[/test]
[test]
[input]
a a a b b c
[/input]
[output]
a c
[/output]
[/test]
[test]
[input]
a a a a a a a a a aa a a a a ab bb bb cccc
[/input]
[output]
a aa ab cccc
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]

# Problem: Piccolo

[code-task title="Piccolo" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```js
function piccolo(input) {
  let register = [];
  for (const entry of input) {
    let [command, car] = entry.split(", ");
    switch (command) {
      case "IN":
        carIn(car);
        break;
      case "OUT":
        carOut(car);
        break;
    }
  }

  function carIn(number) {
    if (!register.includes(number)) register.push(number);
  }

  function carOut(number) {
    if (register.includes(number)) {
      register.splice(register.indexOf(number), 1);
    }
  }

  register = register.sort((a, b) => a.localeCompare(b));

  if (register.length !== 0) {
    for (const car of register) {
      console.log(car);
    }
  } else {
    console.log("Parking Lot is Empty");
  }
}
// function solve(input) {
//   // Write your code here
// }
```

[/code-editor]
[task-description]

# Description

Write function that:

- Records a car number for every car that enters the parking lot.
- Removes a car number when the car goes out.
- Input will be array of strings in format [**direction**, **carNumber**].

Print the output with all car numbers which are in the parking lot **sorted in ascending by number**.

# Example 1

| **Input**                                                                                                                                                             | **Output** |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| `['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU']` | CA2822UU   |
|                                                                                                                                                                       | CA2844AA   |
|                                                                                                                                                                       | CA9876HH   |
|                                                                                                                                                                       | CA9999TT   |

# Example 2

| **Input**                                                            | **Output**           |
| -------------------------------------------------------------------- | -------------------- |
| `['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA']` | Parking Lot is Empty |

[/task-description]
[tests]
[test]
[input]
IN\, CA2844AA
IN\, CA1234TA
OUT\, CA2844AA
IN\, CA9999TT
IN\, CA2866HI
OUT\, CA1234TA
IN\, CA2844AA
OUT\, CA2866HI
IN\, CA9876HH
IN\, CA2822UU
[/input]
[output]
CA2822UU
CA2844AA
CA9876HH
CA9999TT
[/output]
[/test]
[test]
[input]
IN\, CA2844AA
IN\, CA1234TA
OUT\, CA2844AA
OUT\, CA1234TA
[/input]
[output]
Parking Lot is Empty
[/output]
[/test]
[test]
[input]
IN\, mmm
IN\, aaa
IN\, ccc
IN\, ggg
IN\, sss
IN\, gqq
[/input]
[output]
aaa
ccc
ggg
gqq
mmm
sss
[/output]
[/test]
[test]
[input]
IN\, mmm
IN\, aaa
IN\, ccc
IN\, ggg
IN\, sss
IN\, sss
IN\, gqq
[/input]
[output]
aaa
ccc
ggg
gqq
mmm
sss
[/output]
[/test]
[test]
[input]
IN\, mmm
IN\, aaa
IN\, ccc
OUT\, ggg
IN\, sss
IN\, mmm
OUT\, aaa
IN\, ccc
OUT\, ggg
IN\, sss
IN\, mmm
IN\, aaa
OUT\, ccc
IN\, ggg
IN\, sss
IN\, sss
OUT\, gqq
[/input]
[output]
aaa
ggg
mmm
sss
[/output]
[/test]
[test]
[input]
IN\, mmm
IN\, aaa
IN\, ccc
OUT\, ggg
IN\, sss
IN\, mmm
IN\, ggg
IN\, sss
IN\, sss
OUT\, gqq
[/input]
[output]
aaa
ccc
ggg
mmm
sss
[/output]
[/test]
[test]
[input]
IN\, mmm
IN\, aaa
IN\, ccc
OUT\, ggg
IN\, ll
IN\, sss
IN\, mmm
IN\, kk
IN\, sss
IN\, sss
IN\, sss
IN\, mmm
IN\, ggg
IN\, sss
IN\, sss
OUT\, gqq
[/input]
[output]
aaa
ccc
ggg
kk
ll
mmm
sss
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]

[slide]

# Problem: Party Time

[code-task title="Party Time" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```js
function partyTime(input) {
  let invitedList = input.splice(0, input.indexOf("PARTY"));
  input.splice(0, 1);
  let VIP = [];
  let regular = [];
  for (let guest of invitedList) {
    if (guest[0] >= "0" && guest[0] <= "9") {
      VIP.push(guest);
    } else {
      regular.push(guest);
    }
  }
  for (let guest of input) {
    if (VIP.includes(guest)) {
      VIP.splice(VIP.indexOf(guest), 1);
    }
    if (regular.includes(guest)) {
      regular.splice(regular.indexOf(guest), 1);
    }
  }
  console.log(VIP.length + regular.length);
  VIP.forEach((x) => console.log(x));
  regular.forEach((x) => console.log(x));
}
// function solve(input) {
//   // Write your code here
// }
```

[/code-editor]
[task-description]

# Description

There is a party at SoftUni. Many guests are invited and they are **two types**: VIP and regular.

When guests come to the party check if he/she **exists** in any of **the two reservation lists**.

The input will come as **array of strings**. You will be given the list with the guests before you receive a command "**PARTY**".

All **VIP numbers start with digit**.

When you receive the command "**PARTY**" the guests start coming.

Output all guest, who didn't come to the party (VIP must be first).

# Example 1

| **Input**                                                                                                   | **Output** |
| ----------------------------------------------------------------------------------------------------------- | ---------- |
| `['7IK9Yo0h', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc', 'tSzE5t0p', 'PARTY', '9NoBUajQ', 'Ce8vwPmE', 'SVQXQCbc']` | 2          |
|                                                                                                             | 7IK9Yo0h   |
|                                                                                                             | tSzE5t0p   |

# Example 2

| **Input**                                                                                                                                                                                                                                                                                                                                                   | **Output** |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| `['m8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ']` | 2          |
|                                                                                                                                                                                                                                                                                                                                                             | xys2FYzn   |
|                                                                                                                                                                                                                                                                                                                                                             | MDzcM9ZK   |

[/task-description]
[tests]
[test]
[input]
7IK9Yo0h
9NoBUajQ
Ce8vwPmE
SVQXQCbc
tSzE5t0p
PARTY
9NoBUajQ
Ce8vwPmE
SVQXQCbc
[/input]
[output]
2
7IK9Yo0h
tSzE5t0p
[/output]
[/test]
[test]
[input]
7IK9Yo0h
9NoBUajQ
Ce8vwPmE
SVQXQCbc
tSzE5t0p
PARTY
9NoBUajQ
Ce8vwPmE
SVQXQCbc
[/input]
[output]
2
7IK9Yo0h
tSzE5t0p
[/output]
[/test]
[test]
[input]
7IK9Yo0h
9NoBUajQ
Ce8vwPmE
SVQXQCbc
tSzE5t0p
PARTY
[/input]
[output]
5
7IK9Yo0h
9NoBUajQ
Ce8vwPmE
SVQXQCbc
tSzE5t0p
[/output]
[/test]
[test]
[input]
7IK9Yo0h
9NoBUajQ
4Ce8vwPmE
5SVQXQCbc
6tSzE5t0p
PARTY
5SVQXQCbc
6tSzE5t0p
[/input]
[output]
3
7IK9Yo0h
9NoBUajQ
4Ce8vwPmE
[/output]
[/test]
[test]
[input]
IK9Yo0h
NoBUajQ
4Ce8vwPmE
5SVQXQCbc
7IK9Yo0h
9NoBUajQ
4Ce8vwPmE
5SVQXQCbc
6tSzE5t0p
PARTY
9NoBUajQ
4Ce8vwPmE
5SVQXQCbc
6tSzE5t0p
[/input]
[output]
5
7IK9Yo0h
4Ce8vwPmE
5SVQXQCbc
IK9Yo0h
NoBUajQ
[/output]
[/test]
[test]
[input]
IK9Yo0h
NoBUajQ
4Ce8vwPmE
5SVQXQCbc
6tSzE5t0p
PARTY
IK9Yo0h
NoBUajQ
4Ce8vwPmE
5SVQXQCbc
6tSzE5t0p
[/input]
[output]
0
[/output]
[/test]
[test]
[input]
5IK9Yo0h
NoBUajQ
4Ce8vwPmE
QXQCbc
6tSzE5t0p
4ftyfvwPmE
jghvgyg
6tSzE5t0p
PARTY
4Ce8vwPmE
6tSzE5t0p
[/input]
[output]
6
5IK9Yo0h
4ftyfvwPmE
6tSzE5t0p
NoBUajQ
QXQCbc
jghvgyg
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
[slide]

# Problem: Card Game

[code-task title="Card Game" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```js
function card(input) {
  let register = new Map();
  let deckInfo = new Map();
  deckInfo.set("J", 11);
  deckInfo.set("Q", 12);
  deckInfo.set("K", 13);
  deckInfo.set("A", 14);
  deckInfo.set("S", 4);
  deckInfo.set("H", 3);
  deckInfo.set("D", 2);
  deckInfo.set("C", 1);
  for (const command of input) {
    let [person, deck] = command.split(": ");
    deck = deck.split(", ");
    if (register.has(person)) {
      register.set(person, register.get(person).concat(deck));
    } else {
      register.set(person, deck);
    }
  }

  for (const [key, value] of register) {
    register.set(key, filter(value));
  }

  for (const [key, value] of register) {
    console.log(`${key}: ${sum(value)}`);
  }

  function filter(array) {
    array = array.filter((item, pos) => {
      return array.indexOf(item) == pos;
    });

    return array;
  }

  function sum(array) {
    let sum = 0;
    for (const card of array) {
      let type = card.slice(-1);
      let power = card.slice(0, card.length - 1);
      if (power[0] >= "0" && power[0] <= "9") {
        power = Number(power);
      } else {
        power = deckInfo.get(power);
      }
      type = deckInfo.get(type);
      sum += power * type;
    }
    return sum;
  }
}
// function solve(input) {
//   // Write your code here
// }
```

[/code-editor]
[task-description]

# Description

You are given a sequence of people and for every person what cards he draws from the deck.

The input will be **array of strings**. Each string will be in format:

\{personName\}\: \{PT\, PT\, PT\,\.\.\. PT\}

Where P \(2\, 3\, 4\, 5\, 6\, 7\, 8\, 9\, 10\, J\, Q\, K\, A\) is the power of the card and T \(S\, H\, D\, C\) is the type.

The name can contain any ASCII symbol except '\:'.

The input will always be valid and in the format described, there is no need to check it.

A single person cannot have more than one card with the same power and type, if he draws such a card he discards it.

The people are playing with multiple decks. Each card has a value that is calculated by the power multiplied by the type.

Powers 2 to 10 have the same value and J to A are 11 to 14.

Types are mapped to multipliers the following way \(S \-\> 4, H\-\> 3, D \-\> 2, C \-\> 1\).

Finally print out the total value each player has in his hand in the format:

\{personName\}\: \{value\}

# Example 1

| **Input**                                                                                                                                                                                      | **Output**   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| `[ 'Peter: 2C, 4H, 9H, AS, QS', 'Tomas: 3H, 10S, JC, KD, 5S, 10S', 'Andrea: QH, QC, QS, QD', 'Tomas: 6H, 7S, KC, KD, 5S, 10C', 'Andrea: QH, QC, JS, JD, JC', 'Peter: JD, JD, JD, JD, JD, JD']` | Peter\: 167  |
|                                                                                                                                                                                                | Tomas\: 175  |
|                                                                                                                                                                                                | Andrea\: 197 |

[/task-description]
[tests]
[test]
[input]
Pesho\: 2C\, 4H\, 9H\, AS\, QS
Slav\: 3H\, 10S\, JC\, KD\, 5S\, 10S
Peshoslav\: QH\, QC\, QS\, QD
Slav\: 6H\, 7S\, KC\, KD\, 5S\, 10C
Peshoslav\: QH\, QC\, JS\, JD\, JC
Pesho\: JD\, JD\, JD\, JD\, JD\, JD
[/input]
[output]
Pesho\: 167
Slav\: 175
Peshoslav\: 197
[/output]
[/test]
[test]
[input]
Jonathan DA\: JD\, JD\, JD\, JD
[/input]
[output]
Jonathan DA\: 22
[/output]
[/test]
[test]
[input]
Pesho\: 2C\, 4H\, 9H\, AS\, QS
Pesh0\: 3H\, 10S\, JC\, KD\, 5S\, 10S
pesho\: QH\, QC\, QS\, QD
Pe$ho\: 6H\, 7S\, KC\, KD\, 5S\, 10C
PESHO\: QH\, QC\, JS\, JD\, JC
P3sho\: JD\, 7D\, 3D\, 4D\, 5D\, 6D
[/input]
[output]
Pesho\: 145
Pesh0\: 106
pesho\: 120
Pe$ho\: 115
PESHO\: 125
P3sho\: 72
[/output]
[/test]
[test]
[input]
Pesho\: 2C\, 4H\, 9H\, AS\, QS
Slav\: 3H\, 10S\, JC\, KD\, 5S\, 10S
Slav\: 6H\, 7S\, KC\, KD\, 5S\, 10C
Peshoslav\: QH\, QC\, JS\, JD\, JC
Pesho\: JD\, JD\, JD\, JD
[/input]
[output]
Pesho\: 167
Slav\: 175
Peshoslav\: 125
[/output]
[/test]
[test]
[input]
Pesho\: 2C\, 4H\, 9H\, AS\, QS
Slav\: 3H\, 10S\, JC\, KD\, 5S\, 10S
A\: 6H\, 7S\, KC\, KD\, 5S\, 10C
Peshoslav\: QH\, QC\, JS\, JD\, JC
Slav\: 6H\, 7S\, KC\, KD\, 5S\, 10C
Peshoslav\: QH\, QC\, JS\, JD\, JC
A\: 6H\, 7S\, KC\, KD\, 5S\, 10C
Peshoslav\: QH\, QC\, JS\, JD\, JC
Pesho\: JD\, JD\, JD\, JD
[/input]
[output]
Pesho\: 167
Slav\: 175
A\: 115
Peshoslav\: 125
[/output]
[/test]
[test]
[input]
A\: 6H\, 7S\, KC\, KD\, 5S\, 10C
Peshoslav\: QH\, QC\, JS\, JD\, JC
Slav\: 6H\, 7S\, KC\, KD\, 5S\, 10C
Peshoslav\: QH\, QC\, JS\, JD\, JC
A\: 6H\, 7S\, KC\, KD\, 5S\, 10C
Peshoslav\: QH\, QC\, JS\, JD\, JC
Pesho\: JD\, JD\, JD\, JD
[/input]
[output]
A\: 115
Peshoslav\: 125
Slav\: 115
Pesho\: 22
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
[slide]

# Problem: Company Users

[code-task title="Company Users" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```js
function employer(input) {
  let list = new Map();
  let set = new Set();

  for (const string of input) {
    let [company, employee] = string.split(" -> ");
    if (list.has(company)) {
      list.set(company, list.get(company).add(employee));
    } else {
      list.set(company, new Set([employee]));
    }
  }

  let sortedList = Object.fromEntries(
    Array.from(list).sort((a, b) => a[0].localeCompare(b[0]))
  );

  for (const company in sortedList) {
    console.log(`${company}`);
    for (const employee of sortedList[company]) {
      console.log(`-- ${employee}`);
    }
  }
}
// function solve(input) {
//   // Write your code here
// }
```

[/code-editor]
[task-description]

# Description

Write a function which keeps information about companies and their employees.

You will receive array of strings containing company name and employee's id.

Add each employee to the given company. Keep in mind that a company cannot have two employees with the same id.

When you finish reading data, order the companies by the name in ascending order.

Print the company name and each employee's id in the following format:

\{companyName\}
\-\- \{id1\}
\-\- \{id2\}
\-\- \{idN\}

Input / Constraints

- The input comes **as array of strings**, each in the format: \{companyName\} \-\> \{employeeId\}.
- The input always will be valid.

# Example 1

| **Input**                                                                               | **Output**   |
| --------------------------------------------------------------------------------------- | ------------ |
| `['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345']` | HP           |
|                                                                                         | \-\- BB12345 |
|                                                                                         | Microsoft    |
|                                                                                         | \-\- CC12345 |
|                                                                                         | SoftUni      |
|                                                                                         | \-\- AA12345 |
|                                                                                         | \-\- BB12345 |

# Example 2

| **Input**                                                                                                        | **Output**   |
| ---------------------------------------------------------------------------------------------------------------- | ------------ |
| `['SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345', 'Movement -> DD11111']` | Lenovo       |
|                                                                                                                  | \-\- XX23456 |
|                                                                                                                  | Movement     |
|                                                                                                                  | \-\- DD11111 |
|                                                                                                                  | SoftUni      |
|                                                                                                                  | \-\- AA12345 |
|                                                                                                                  | \-\- CC12344 |

[/task-description]
[tests]
[test]
[input]
SoftUni \-\> AA12345
SoftUni \-\> BB12345
Microsoft \-\> CC12345
HP \-\> BB12345
[/input]
[output]
HP
\-\- BB12345
Microsoft
\-\- CC12345
SoftUni
\-\- AA12345
\-\- BB12345
[/output]
[/test]
[test]
[input]
SoftUni \-\> AA12345
SoftUni \-\> CC12344
Lenovo \-\> XX23456
SoftUni \-\> AA12345
Movement \-\> DD11111
[/input]
[output]
Lenovo
\-\- XX23456
Movement
\-\- DD11111
SoftUni
\-\- AA12345
\-\- CC12344
[/output]
[/test]
[test]
[input]
A \-\> ncsms
B \-\> sasa
B \-\> sasa
M \-\> sasads
M \-\> 12ww
Z \-\> wqwqw
[/input]
[output]
A
\-\- ncsms
B
\-\- sasa
M
\-\- sasads
\-\- 12ww
Z
\-\- wqwqw
[/output]
[/test]
[test]
[input]
A \-\> ncsms
B \-\> sasa
B \-\> sasa
M \-\> sasgyads
M \-\> 12gyww
Z \-\> wqwqw
L \-\> sasa
L \-\> sahjksads
L \-\> 12vvww
[/input]
[output]
A
\-\- ncsms
B
\-\- sasa
L
\-\- sasa
\-\- sahjksads
\-\- 12vvww
M
\-\- sasgyads
\-\- 12gyww
Z
\-\- wqwqw
[/output]
[/test]
[test]
[input]
F \-\> dncsms
B \-\> sasadd
B \-\> sasadd
M \-\> sasgdyads
M \-\> 12gyww
F \-\> wqwqw
L \-\> sasa
L \-\> sahjksads
[/input]
[output]
B
\-\- sasadd
F
\-\- dncsms
\-\- wqwqw
L
\-\- sasa
\-\- sahjksads
M
\-\- sasgdyads
\-\- 12gyww
[/output]
[/test]
[test]
[input]
F \-\> dncsms
A \-\> sa44sadd
B \-\> sasadd
M \-\> sas,gdyads
M \-\> 12gnjyww
N \-\> wqwqw
L \-\> sasa
L \-\> sahjksads
[/input]
[output]
A
\-\- sa44sadd
B
\-\- sasadd
F
\-\- dncsms
L
\-\- sasa
\-\- sahjksads
M
\-\- sas,gdyads
\-\- 12gnjyww
N
\-\- wqwqw
[/output]
[/test]
[test]
[input]
F \-\> dnjkcsms
A \-\> sa44sadd
B \-\> sanjsadd
M \-\> sas,gdyads
M \-\> 12gnjyww
N \-\> wqwqw
O \-\> snnasa
L \-\> sa(\*hjksads
P \-\> 12gnjyww
N \-\> wqwqw
Q \-\> snnasa
[/input]
[output]
A
\-\- sa44sadd
B
\-\- sanjsadd
F
\-\- dnjkcsms
L
\-\- sa(\*hjksads
M
\-\- sas,gdyads
\-\- 12gnjyww
N
\-\- wqwqw
O
\-\- snnasa
P
\-\- 12gnjyww
Q
\-\- snnasa
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
[slide]

# Problem: A Miner Task

[code-task title="A Miner Task" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]

```js
function solve(input) {
  // Write your code here
}
```

[/code-editor]
[task-description]

# Description

You are given an **array of strings**. Every **odd string** is representing a **resource** (e.g. Gold, Silver, Copper, and so on), and **every even – quantity**.

Your task is to collect the resources and print them each on a new line.

**Print the resources and their quantities in format**:

**\{resource\} –\> \{quantity\}**

The quantities inputs will be in the range \[1 \.\.\. 2 000 000 000\]

# Example 1

| **Input**                                         | **Output**     |
| ------------------------------------------------- | -------------- |
| `['Gold', '155', 'Silver', '10', 'Copper', '17']` | Gold \-\> 155  |
|                                                   | Silver \-\> 10 |
|                                                   | Copper \-\> 17 |

# Example 2

| **Input**                                                       | **Output**     |
| --------------------------------------------------------------- | -------------- |
| `['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15']` | gold \-\> 170  |
|                                                                 | silver \-\> 10 |
|                                                                 | Copper \-\> 17 |

[/task-description]
[tests]
[test]
[input]
SoftUni \-\> AA12345
SoftUni \-\> BB12345
Microsoft \-\> CC12345
HP \-\> BB12345
[/input]
[output]
HP
\-\- BB12345
Microsoft
\-\- CC12345
SoftUni
\-\- AA12345
\-\- BB12345
[/output]
[/test]
[test]
[input]
SoftUni \-\> AA12345
SoftUni \-\> CC12344
Lenovo \-\> XX23456
SoftUni \-\> AA12345
Movement \-\> DD11111
[/input]
[output]
Lenovo
\-\- XX23456
Movement
\-\- DD11111
SoftUni
\-\- AA12345
\-\- CC12344
[/output]
[/test]
[test]
[input]
A \-\> ncsms
B \-\> sasa
B \-\> sasa
M \-\> sasads
M \-\> 12ww
Z \-\> wqwqw
[/input]
[output]
A
\-\- ncsms
B
\-\- sasa
M
\-\- sasads
\-\- 12ww
Z
\-\- wqwqw
[/output]
[/test]
[test]
[input]
A \-\> ncsms
B \-\> sasa
B \-\> sasa
M \-\> sasgyads
M \-\> 12gyww
Z \-\> wqwqw
L \-\> sasa
L \-\> sahjksads
L \-\> 12vvww
[/input]
[output]
A
\-\- ncsms
B
\-\- sasa
L
\-\- sasa
\-\- sahjksads
\-\- 12vvww
M
\-\- sasgyads
\-\- 12gyww
Z
\-\- wqwqw
[/output]
[/test]
[test]
[input]
F \-\> dncsms
B \-\> sasadd
B \-\> sasadd
M \-\> sasgdyads
M \-\> 12gyww
F \-\> wqwqw
L \-\> sasa
L \-\> sahjksads
[/input]
[output]
B
\-\- sasadd
F
\-\- dncsms
\-\- wqwqw
L
\-\- sasa
\-\- sahjksads
M
\-\- sasgdyads
\-\- 12gyww
[/output]
[/test]
[test]
[input]
F \-\> dncsms
A \-\> sa44sadd
B \-\> sasadd
M \-\> sas,gdyads
M \-\> 12gnjyww
N \-\> wqwqw
L \-\> sasa
L \-\> sahjksads
[/input]
[output]
A
\-\- sa44sadd
B
\-\- sasadd
F
\-\- dncsms
L
\-\- sasa
\-\- sahjksads
M
\-\- sas,gdyads
\-\- 12gnjyww
N
\-\- wqwqw
[/output]
[/test]
[test]
[input]
F \-\> dnjkcsms
A \-\> sa44sadd
B \-\> sanjsadd
M \-\> sas,gdyads
M \-\> 12gnjyww
N \-\> wqwqw
O \-\> snnasa
L \-\> sa(\*hjksads
P \-\> 12gnjyww
N \-\> wqwqw
Q \-\> snnasa
[/input]
[output]
A
\-\- sa44sadd
B
\-\- sanjsadd
F
\-\- dnjkcsms
L
\-\- sa(\*hjksads
M
\-\- sas,gdyads
\-\- 12gnjyww
N
\-\- wqwqw
O
\-\- snnasa
P
\-\- 12gnjyww
Q
\-\- snnasa
[/output]
[/test]
[/tests]
[code-io /]
[/code-task]

[/slide]
