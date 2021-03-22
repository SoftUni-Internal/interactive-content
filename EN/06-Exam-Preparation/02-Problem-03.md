# Problem 3: Bank
[slide hideTitle]

# Bank

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/07.JS-Advanced-Exam-Preparation/EN/Problem-3-Bank-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Bank" taskId="js-advanced-exam-preparation-bank" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]
```
class Bank {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Description

Write a **Bank** class that implements the following functionality:

- `constructor (bankName)` 

Receives **1 parameter** at initialization of the class (**bankName**).

The **Bank** class should have these **2 properties:**

- bankName \- a **private** property of type string
- allCustomers \- initially an empty array

- `newCustomer (customer)`

The **customer** is of type object "\{**firstName, lastName, personalId**\}".

- Check if they are a customer of the bank. If they are already, throw an error:
"\{**firstName**\} \{**lastName**\} **is already our customer!**"

- Otherwise, this function should **add a new customer** with the provided details

- `depositMoney (personalId, amount)`

Both the **personalId** and **amount** should be numbers.

- Check if the given **personalId** corresponds to a customer in the **customers array**, if not throw a new error:

"**We have no customer with this ID!**"

- Otherwise, add the amount to the corresponding customer in a property named **totalMoney** and store **the transaction information** (see the example for more clarity). After this, **return the total money** of the corresponding customer and a dollar sign:

"\{**totalMoney**\}\$"

- `withdrawMoney (personalId, amount)`

Both **personalId** and **amount** are numbers.

- Check if the given **personalId** corresponds to a customer **in the customers' array**, if not **throw a new error:**

"**We have no customer with this ID!**"

- If there is a customer with the given **personalId**, check if the customer **has enough money** to withdraw the given amount from their account. If the money is not enough, **throw a new error:**

"\{**firstName**\} \{**lastName**\} **does not have enough money to withdraw that amount!**"

- Otherwise, subtract the **amount** from the "**totalMoney**" of the customer and store the **transaction information**, then **return the total money** of the corresponding customer and a dollar sign:

"\{**totalMoney**\}\$"

## `customerInfo (personalId)`

**personalId** is of **type number**.

- Check if the given **personalId** corresponds to a customer in the customers' array, if not throw a new error:

"**We have no customer with this ID!**"

- Otherwise, **return all the customer information** in the following format:

```
Bank name: {bankName}
Customer name: {firstName} {lastName}
Customer ID: {personalId}
Total Money: {totalMoney}$
Transactions:
n. {firstName} {lastName} made deposit of {amount}$!
...
1. {firstName} {lastName} withdrew {amount}$!
2. {firstName} {lastName} made deposit of {amount}$!
```

The **transaction information** contains information about:

- the number of the transaction in descending order

- the customer's name ("**firstName**", "**lastName**")

- if the transaction is a **deposit** or **withdrawal** action

- the **amount** of the transaction


## Examples
This is an example of how the code is **intended to be used**:

**Sample code usage:** 

```js
let bank = new Bank("SoftUni Bank");

console.log(bank.newCustomer({firstName: "John", 
    lastName: "Miller", personalId: 6233267}));
console.log(bank.newCustomer({firstName: "Michelle", 
    lastName: "Davis", personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
 
```

**Corresponding output:**

```
{ firstName: "John", lastName: "Miller", 
personalId: 6233267 } 
{ firstName: "Michelle", lastName: "Davis", 
personalId: 4151596 }
500$
375$
Bank name: SoftUni Bank
Customer name: John Miller
Customer ID: 6233267
Total Money: 375$
Transactions:
3. John Miller withdrew 125$!
2. John Miller made adepostit of 250$!
1. John Miller made a depostit of 250$!

```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
// zero test 1
let Bank = result;
let name = 'SoftUni Bank';
let bank = new Bank(name);


let customer1 = bank.newCustomer({ firstName: 'John', lastName: 'Miller', personalId: 1111111 });
expect(customer1.firstName).to.be.equal('John');

let customer2 = bank.newCustomer({ firstName: 'Michelle', lastName: 'Davis', personalId: 3333333 });
expect(customer2.lastName).to.be.equal('Davis');
expect(customer2.personalId).to.be.equal(3333333);

let totalMoney1 = bank.depositMoney(1111111, 250);
expect(totalMoney1).to.be.equal('250$', 'Function depositMoney returns incorrect totalMoney');

let totalMoney2 = bank.depositMoney(1111111, 250);
expect(totalMoney2).to.be.equal('500$', 'Function depositMoney returns incorrect totalMoney');

let totalMoney3 = bank.depositMoney(3333333, 555);
expect(totalMoney3).to.be.equal('555$', 'Function depositMoney returns incorrect totalMoney');

let totalMoney4 = bank.withdrawMoney(1111111, 125);
expect(totalMoney4).to.equal('375$', 'Function withdrawMoney returns incorrect totalMoney');

let output = bank.customerInfo(1111111);
let expectedOutput = \`Bank name: SoftUni Bank
Customer name: John Miller
Customer ID: 1111111
Total Money: 375$
Transactions:
3\. John Miller withdrew 125$!
2\. John Miller made deposit of 250$!
1\. John Miller made deposit of 250$!\`;
expect(expectedOutput).to.be.equal(output, 'Incorrect output');

[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
// zero test 2
let Bank = result;
let name = 'SoftUni Bank';
let bank = new Bank(name);


bank.newCustomer(\{ firstName: 'John', lastName: 'Miller', personalId: 1111111 \});
let sameCustomer = () =\> bank.newCustomer(\{ firstName: 'John', lastName: 'Miller', personalId: 1111111 \});
expect(sameCustomer).to.throw(Error, 'John Miller is already our customer!');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Is a valid constructor
let Bank = result;
let bank;
let name = 'SoftUni';
expect(() =\> bank = new Bank(name), 'Instance creation failed, make sure you have submitted a class').to.not.throw();
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Contains all properties, functions attached to prototype
let Bank = result;
let name = 'SoftUni';

let bank = new Bank(name);

expect(bank.bankName).to.equal(undefined, 'Private property _bankname not found');
expect(bank.allCustomers).to.deep.equal(\[\], 'allCustomers is not an empty Array');
expect(bank.allCustomers).to.be.an.instanceof(Array, 'allCustomers is not instance of Array');

expect(new Bank()).to.respondTo('newCustomer', 'newCustomer is not a function');
expect(new Bank()).to.respondTo('depositMoney', 'depositMoney is not a function');
expect(new Bank()).to.respondTo('withdrawMoney', 'withdrawMoney is not a function');
expect(new Bank()).to.respondTo('customerInfo', 'customerInfo is not a function');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Valid newCustomer
let Bank = result;
let name = 'SoftUniBank';

let bank = new Bank(name);
let customer = bank.newCustomer(\{firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267\});

expect(customer.firstName).to.equal('Svetlin', 'Function returns incorrect');
expect(customer.lastName).to.equal( 'Nakov', 'Function returns incorrect');
expect(customer.personalId).to.equal( 6233267, 'Function returns incorrect');
expect(()=\>bank.newCustomer(\{firstName: 'Pesho', lastName: 'Palenkov', personalId: 7777777\})).to.not.throw();
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// newCustomer throws
let Bank = result;
let name = 'SoftUniBank';

let bank = new Bank(name);
bank.newCustomer(\{firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267\});

expect(()=\>bank.newCustomer(\{firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267\})).to.throw(Error, 'Svetlin Nakov is already our customer!');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Valid depositMoney
let Bank = result;
let name = 'SoftUniBank';

let bank = new Bank(name);
bank.newCustomer(\{ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 \});
let totalMoney = bank.depositMoney(6233267, 200);

expect(totalMoney).to.be.equal('200\\$', 'Function returns incorrect totalMoney');

let totalMoney2 = bank.depositMoney(6233267, 123);
expect(totalMoney2).to.be.equal('323\\$', 'Function returns incorrect totalMoney');

let customer = bank.allCustomers.find(x =\> \{ return x.personalId === 6233267 \});
expect(customer.personalId).to.be.equal(6233267, 'In allCustomer array was not found the right customer');

let customerMoney = bank.allCustomers.find(x =\> \{ return x.personalId === 6233267 \}).totalMoney;
expect(customerMoney).to.be.equal(323, 'The propertyname does not exist');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// depositMoney throws
let Bank = result;
let name = 'SoftUniBank';

let bank = new Bank(name);

expect(()=\>bank.depositMoney(6233267, 200)).to.throw(Error, \`We have no customer with this ID!\`);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
// Valid withdrawMoney
let Bank = result;
let name = 'SoftUniBank';

let bank = new Bank(name);
bank.newCustomer(\{ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 \});
bank.depositMoney(6233267, 155);

let totalMoney = bank.withdrawMoney(6233267, 154);
expect(totalMoney).to.equal('1\\$', 'Function returns incorrect totalMoney');

let totalMoney2 = bank.withdrawMoney(6233267, 1);
expect(totalMoney2).to.equal('0\\$', 'Function returns incorrect totalMoney');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
//withdrawMoney throws not enough money
let Bank = result;
let name = 'SoftUniBank';

let bank = new Bank(name);
bank.newCustomer(\{ firstName: 'Pesho', lastName: 'Ivanov', personalId: 55555555 \});
bank.depositMoney(55555555, 155);

let totalMoney = bank.withdrawMoney(55555555, 154);
expect(totalMoney).to.equal('1\\$', 'Function returns incorrect totalMoney');

expect(()=\>bank.withdrawMoney(55555555, 100)).to.throw(Error, \`Pesho Ivanov does not have enough money to withdraw that amount!\`);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
//withdrawMoney throws not enough money
let Bank = result;
let name = 'SoftUniBank';

let bank = new Bank(name);

expect(()=\>bank.withdrawMoney(55555555, 1)).to.throw(Error, 'We have no customer with this ID!');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
//Valid customerInfo
let Bank = result;
let name = 'SoftUniBank';

let bank = new Bank(name);
bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 9265667});
bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596});
bank.newCustomer({firstName: 'Pesho', lastName: 'Ivanov', personalId: 55555555});

bank.depositMoney(9265667, 250);
bank.depositMoney(55555555, 155);
bank.depositMoney(9265667, 333);

bank.withdrawMoney(9265667, 150);
bank.withdrawMoney(9265667, 133);

let info = bank.customerInfo(9265667);

let output = \`Bank name: SoftUniBank
Customer name: Svetlin Nakov
Customer ID: 9265667
Total Money: 300$
Transactions:
4\. Svetlin Nakov withdrew 133$!
3\. Svetlin Nakov withdrew 150$!
2\. Svetlin Nakov made deposit of 333$!
1\. Svetlin Nakov made deposit of 250$!\`;

expect(info).to.be.equal(output, 'Function prints incorrect answer');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
//Valid customerInfo
let Bank = result;
let name = 'Some Name';

let bank = new Bank(name);
bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 123123123});

bank.depositMoney(123123123, 221);
bank.depositMoney(123123123, 21);
bank.withdrawMoney(123123123, 111);
bank.depositMoney(123123123, 356);
bank.withdrawMoney(123123123, 125);
bank.withdrawMoney(123123123, 25);

let info = bank.customerInfo(123123123);

let output = \`Bank name: Some Name
Customer name: Svetlin Nakov
Customer ID: 123123123
Total Money: 337$
Transactions:
6\. Svetlin Nakov withdrew 25$!
5\. Svetlin Nakov withdrew 125$!
4\. Svetlin Nakov made deposit of 356$!
3\. Svetlin Nakov withdrew 111$!
2\. Svetlin Nakov made deposit of 21$!
1\. Svetlin Nakov made deposit of 221$!\`;

expect(info).to.be.equal(output, 'Function prints incorrect answer');
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
