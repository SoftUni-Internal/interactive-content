# Problema 3: Bank
[slide hideTitle]

# Bank

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/07.JS-Advanced-Exam-Preparation/RO/Problem-3-Bank-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Bank" taskId="js-advanced-exam-preparation-bank" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]
```
class Bank {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Cerința voastră

Scrieți o clasă **Bank** care implementează următoarea funcționalitate:

## Funcționalitate

- `constructor (bankName)` - primește **1 parametru** la inițializarea clasei (**bankName**).

Clasa **Bank** ar trebui să aibă aceste **2 proprietăți:**

- bankName \- o proprietate **privată** de tip șir
- allCustomers \- inițial o matrice goală

- `newCustomer (customer)`": **clientul** este de tip obiect "\{**firstName, lastName, personalId**\}".

Verificați dacă sunt deja un client al băncii. Dacă sunt deja generați această eroare:
"\{**firstName**\} \{**lastName**\} **is already our customer!**"

Dacă nu această funcție ar trebui să adauge un nou client cu următoarele funcționalități.

- `depositMoney (personalId, amount)`: **personalId** și **amount** ar trebui să fie numere

Verificați dacă **personalId** dat corespunde unui client din **mulțimea de clienți**, dacă nu generați această eroare:

"**We have no customer with this ID!**"

Altfel, adăugați cantitatea corespunzătoare într-o proprietate numită **totalMoney** și păstrați **the transaction information** (Vedeți exemplul pentru a înțelege mai bine). După asta, **returnați suma totală de bani** a clientului corespunzător și un semn de dolar:

"\{**totalMoney**\}\$"

- `withdrawMoney (personalId, amount)`:  **personalId** și **amount** ar trebui să fie numere.

Verificați dacă **personalId** cdat corespunde unui client din **mulțimea de clienți**, dacă nu **generați o nouă eroare:**

"**We have no customer with this ID!**`"

Dacă există un client cu acel **personalId**, verificați dacă clientul **are destui bani** pentru a extrage suma dată din cont. 

Dacă banii nu sunt destui **generați o nouă eroare:**

"\{**firstName**\} \{**lastName**\} **does not have enough money to withdraw that amount!**"

Altfel, sustrageți **suma** din "**totalMoney**" al clientului și păstrați **informația de tranzacție**, apoi **returnați suma totală** a clientului corespunzător și un semn de dolar:

"\{**totalMoney**\}\$"

"**customerInfo (personalId)**": **personalId** este de **tip număr**

Verificați dacă **personalId** dat corespunde unui client din mulțimea de clienți, dacă nu generați o nouă eroare:

"**We have no customer with this ID!**"

Altfel, returnați toate informațiile clientului în următorul format:

```
Bank name: {bankName}
Customer name: {firstName} {lastName}
Customer ID: {personalId}
Total Money: {totalMoney}$
Transactions:
n. {firstName} {lastName} made deposit of {amount}$!
...
2. {firstName} {lastName} withdrew {amount}$!
1. {firstName} {lastName} made deposit of {amount}$!
```

 **Informația de tranzacție** conține informații despre:

- numărul de tranzacții în ordine descrescătoare

- numele clientului ("**firstName**", "**lastName**")

- dacă tranzacția este o acțiune de tip **depunere** sau **extragere**

- **suma** tranzacției


# Exemple
Acesta este un exemplu de cum se **intenționează folosirea codului**:

**Exemplu de folosire a codului** 

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

**Corresponding output**

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
