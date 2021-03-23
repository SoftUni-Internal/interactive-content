# Teme Pentru Acasă
[slide hideTitle]

# Problem: Company

[code-task title="Company" taskId="js-advanced-function-context-company" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]

```
class Company {
    // Scrieți codul dvs. aici
}
```
[/code-editor]
[task-description]
# Descriere

Scrieți o Company Class (Clasă cu numele Company), care să aibă funcționalitatea descrisă mai jos.

**1. Funcționalitatea**

`Constructor()`:

Ar trebui să aibă această unică proprietate: `departments`- o matrice goală

"**AddEmployee**(\{**username**\}, \{**Salary**\}, \{**Position**\}, \{**Department**\})":

Această funcție trebuie să adauge un nou angajat cu numele dat, la departament.

- Dacă unul dintre parametrii trecuți este un șir gol **""**, nedefinit sau nul, această funcție ar trebui să genereze o eroare cu următorul mesaj:

"**Invalid input!**"

- Dacă salariul este mai mic de 0, această funcție ar trebui să genereze o eroare cu următorul mesaj:

"**Invalid input!**"

- Dacă noul angajat este angajat cu succes, ar trebui să-l adăugați în matricea departamentelor și să returnați următorul mesaj:

"**New employee is hired. Name:** \{**name**\}. **Position:** \{**position**\}"

`bestDepartment()`:

Această **funcție** trebuie să tipărească departamentul cu cel mai mare salariu mediu și angajații săi, sortați după salariul lor în funcție descrescătoare și după nume, în următorul format:

"**Best department is:** \{**best department's name**\}
**Average salary:** \{**best department's average salary**\}
\{**employee1**\} \{**salary**\} \{**position**\}
\{**employee2**\} \{**salary**\} \{**position**\}
\{**employee3**\} \{**salary**\} \{**position**\}
..."


**2. Trimiterea**

Trimiteți doar **Company class**.

**3. Exemplu**

Acesta este un exemplu de cum **se intenționează să fie folosit** codul:

**Exemplu de utilizare a codului**

```js
let c = new Company();
c.addEmployee('Steven', 2000, 'engineer', 'Construction');
c.addEmployee('Peter', 1500, 'electrical engineer', 'Construction');
c.addEmployee('Sam', 500, 'dyer', 'Construction');
c.addEmployee('Stan', 2000, 'architect', 'Construction');
c.addEmployee('Steven', 1200, 'digital marketing manager', 'Marketing');
c.addEmployee('Peter', 1000, 'graphical designer', 'Marketing');
c.addEmployee('George', 1350, 'HR', 'Human resources');
console.log(c.bestDepartment());
```

**Rezultatul**

```
Best Department is: Construction
Average salary: 1500.00
Stan 2000 architect
Steven 2000 engineer
Peter 1500 electrical engineer
Sam 500 dyer
```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
let Company = result;
let c = new Company();

let actual1 = c.addEmployee("Steven", 2000, "engineer", "Human resources");
let expected1 = "New employee is hired. Name: Steven. Position: engineer";
assert.equal(actual1,expected1);

c.addEmployee("Peter", 1500, "electrical engineer", "Construction");
c.addEmployee("Sam", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Steven", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Peter", 1000, "graphical designer", "Marketing");
c.addEmployee("George", 1350, "HR", "Human resources");

let act = c.bestDepartment();
let exp = "Best Department is: Human resources\nAverage salary: 1675.00\nSteven 2000 engineer\nGeorge 1350 HR";
assert.equal(act,exp);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Company = result;
let c = new Company();

assert.instanceOf(c,Company,"not instance");

c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

let actual = c.bestDepartment();
let expected = "Best Department is: Construction\nAverage salary: 1500.00\nStan 2000 architect\nStanimir 2000 engineer\nPesho 1500 electrical engineer\nSlavi 500 dyer";

assert.equal(actual,expected,"not equal");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Company = result;
let c = new Company();

let fn = ()=\>\{c.addEmployee("Stanimir", -2000, "engineer", "Construction");\};
assert.throw(fn,"Invalid input!");
let fn1 = ()=\>\{c.addEmployee("", 2000, "engineer", "Construction");\};
assert.throw(fn1,"Invalid input!");
let fn2 = ()=\>\{c.addEmployee("A", "", "engineer", "Construction");\};
assert.throw(fn2,"Invalid input!");
let fn3 = ()=\>\{c.addEmployee("A", 2, "", "Construction");\};
assert.throw(fn3,"Invalid input!");
let fn4 = ()=\>\{c.addEmployee("A", 2, "e", "");\};
assert.throw(fn4,"Invalid input!");
let fn5 = ()=\>\{c.addEmployee("A", 2, null, "Construction");\};
assert.throw(fn5,"Invalid input!")
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Company = result;
let c = new Company();

let actual1 = () =\> c.addEmployee("Stanimir", -2000, "engineer", "Human resources");
assert.throw(actual1,"Invalid input!");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Company = result;
let c = new Company();

let actual1 = c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
let expected1 = "New employee is hired. Name: Stanimir. Position: engineer";
assert.equal(actual1,expected1);

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

let act = c.bestDepartment();
let exp = "Best Department is: Human resources\nAverage salary: 1675.00\nStanimir 2000 engineer\nGosho 1350 HR";
assert.equal(act,exp);
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Fibonacci

[code-task title="Fibonacci" taskId="js-advanced-function-context-fibonacci" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]
```

function fibonacci() {
   // Scrieți codul dvs. aici
}
```
[/code-editor]
[task-description]
## Descriere
Scrieți o funcție care returnează următorul număr Fibonacci, începând de la 0, 1.

Folosiți o **closure** pentru a păstra numărul curent.

## Intrare
Nu va exista nicio intrare.

## Ieșire
Ieșirea trebuie să fie un număr Fibonacci și trebuie să fie **returnată** din funcție.

## Exemplu

**Exemplu de execuție**

```js
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
let fibResult = result();

expect(fibResult()).to.equal(1,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(1,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(2,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(3,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(5,'Incorrect Fibonacci number received!');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let fibResult = result();

expect(fibResult()).to.equal(1,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(1,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(2,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(3,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(5,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(8,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(13,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(21,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(34,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(55,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(89,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(144,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(233,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(377,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(610,'Incorrect Fibonacci number received!');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let fibResult = result();

expect(fibResult()).to.equal(1,'Incorrect Fibonacci number received!');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let fibResult = result();

expect(fibResult()).to.equal(1,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(1,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(2,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(3,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(5,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(8,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(13,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(21,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(34,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(55,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(89,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(144,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(233,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(377,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(610,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(987,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(1597,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(2584,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(4181,'Incorrect Fibonacci number received!');
expect(fibResult()).to.equal(6765,'Incorrect Fibonacci number received!');
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: HEX

[code-task title="Problem: HEX" taskId="js-advanced-function-context-hex" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]


```
class Hex {
    // Scrieți codul dvs. aici
}
```
[/code-editor]
[task-description]

**1. Sarcina ta**
Scrieți o Hex class (clasă Hex), care acceptă funcționalitatea descrisă mai jos.

**2. Funcționalitate**

Constructor(`{value}`)

Trebuie să aibă **1** proprietate:
- **value** - number

Funcții:
- `ValueOf()`:
Această funcție ar trebui să returneze valoarea proprie Hex class (clasei Hex).

- `ToString()`:
Această funcție își va arăta valoarea hexazecimală începând cu `0x`.

- `Plus({number})`:
Această funcție ar trebui să adauge un număr sau un obiect Hex și să returneze un nou obiect Hex.

- `Minus({number})`:
Această funcție ar trebui să scadă un număr sau un obiect Hex și să returneze un nou obiect Hex.

- `Parse({string})`:
Creați o parse class method (metodă de clasă de analiză) care poate analiza numerele hexazecimale și le poate converti în numere zecimale standard.

**3. Trimiterea**
Trimiteți doar **Hex class**.

**4. Exemplu**
Acesta este un exemplu de cum **se intenționează să fie folosit** codul:


## Intrare

```js
let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
```

## Ieșire
```
0xFF
0xF
true
```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
let Hex = result;
let FF = new Hex(255);
let actual = FF.toString();
let expected = "0xFF";
assert.equal(actual,expected);
assert.equal(FF.valueOf() + 1 , 256);
let a = new Hex(10);
let b = new Hex(5);
let act = a.plus(b).toString();
let exp = "0xF";
assert.equal(act,exp);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Hex = result;
let FF = new Hex(255);
assert.instanceOf(FF,Hex);
assert.equal(FF.valueOf(),255);

let act = FF.toString();
let exp = "0xFF";
assert.equal(act,exp);

assert.isTrue(FF.valueOf() -1  == 254);
let a = new Hex(10);
let b = new Hex(5);
let c = new Hex(155);
let act2 = a.plus(c).toString();
let exp2 = "0xA5";
assert.equal(act2,exp2);
let act3 = a.minus(b).toString();
let exp3 = "0x5";
assert.equal(act3,exp3);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Hex = result;
let h = new Hex(380);
assert.equal(h.valueOf(),380);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Hex = result;
let h = new Hex(380);
assert.equal(h.toString(),"0x17C");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Hex = result;
let h = new Hex(380);
let y = new Hex(18);
let actual = h.plus(y).toString();
let expected = "0x18E";
assert.equal(actual,expected);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Hex = result;
let h = new Hex(380);
let y = new Hex(18);
let actual = h.minus(y);
let expected = new Hex(362);
assert.deepEqual(actual,expected);
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Table

[code-task title="Problem: Table" taskId="js-advanced-function-context-table" executionType="tests-execution" executionStrategy="javascript-js-dom-unit-tests" requiresInput] [code-editor language=javascript]

```
function table(){
    // Scrieți codul dvs. aici
}
```
[/code-editor]
[task-description]
## Descriere

Utilizați resursele puse la dispoziție [resources](https://videos.softuni.org/resources/javascript/javascript-advanced/04-JS-Advanced-Function-Context-Homework-Resources.zip) pentru a finaliza această problemă. 

**Notă: trebuie să finalizați această sarcină fără a schimba nimic în fișierul HTML dat (index.html).**

[image assetsSrc="function-context-07.png" /]

**1. Sarcina ta**

Scrieți codul JavaScript lipsă pentru ca aplicația **Table** să funcționeze conform așteptărilor.

Când faceți **clic** pe un element din tabel, trebuie să schimbați **culoarea de fundal** a acestuia la `#413f5e`. 

```js
<table class="minimalistBlack">
   <thead>_</thead>
   <tbody>
      <tr>
         <td>Eve</td>
         <td>New York</td>
      </tr>
      <tr>
         <td>Nick</td>
         <td>London</td>
      </tr>
      <tr>
         <td>Donald</td>
         <td>Boston</td>
      </tr>
      <tr>
         <td>Ted</td>
         <td>San Diego</td>
      </tr>
   </tbody>
</table>

```

[image assetsSrc="function-context-09.png" /]

Dacă elementul pe care ați dat clic **are deja** o proprietate **style**, trebuie **să îl eliminați**.

[image assetsSrc="function-context-10.png" /]

Dacă **dați clic** pe unul dintre elemente după care dați clic pe **altul**, proprietatea stilului primului element trebuie să fie **eliminată** și trebuie să **schimbați** **culoarea de fundal** a **noului element pe care ați dat clic**.

[image assetsSrc="function-context-11.png" /]

**Notă: nu trebuie să schimbați capul tabelului, chiar dacă se face clic pe acesta.**

[/task-description]
[code-io /]
[tests]
[test open]
[input]
document.body.innerHTML = `
\<table class="minimalistBlack"\>
        \<thead\>
            \<tr\>
                \<th\>Name\</th\>
                \<th\>Town\</th\>
            \</tr\>
        \</thead\>
        \<tbody\>
            \<tr\>
                \<td\>Eve\</td\>
                \<td\>New York\</td\>
            \</tr\>
            \<tr\>
                \<td\>Nick\</td\>
                \<td\>London\</td\>
            \</tr\>
            \<tr\>
                \<td\>Donald\</td\>
                \<td\>Boston\</td\>
            \</tr\>
            \<tr\>
                \<td\>Ted\</td\>
                \<td\>San Diego\</td\>
            \</tr\>
        \</tbody\>
    
    \</table\>
`;

result();

let color = "rgb(65, 63, 94)";
let tds = document.querySelectorAll('td');
tds\[3\].click();
assert.equal(tds\[3\].parentNode.style.backgroundColor,color,"1");
tds\[3\].click();
assert.equal(tds\[3\].parentElement.style.backgroundColor,"","2");
tds\[6\].click();
assert.equal(tds\[6\].parentElement.style.backgroundColor,color,"3");
tds\[2\].click();
assert.equal(tds\[2\].parentElement.style.backgroundColor,color,"4");
assert.equal(tds\[6\].parentElement.style.backgroundColor,"","5");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
\<table class="minimalistBlack"\>
        \<thead\>
            \<tr\>
                \<th\>Name\</th\>
                \<th\>Town\</th\>
            \</tr\>
        \</thead\>
        \<tbody\>
            \<tr\>
                \<td\>Eve\</td\>
                \<td\>Sofia\</td\>
            \</tr\>
            \<tr\>
                \<td\>Nick\</td\>
                \<td\>Varna\</td\>
            \</tr\>
            \<tr\>
                \<td\>Didi\</td\>
                \<td\>Ruse\</td\>
            \</tr\>
            \<tr\>
                \<td\>Tedy\</td\>
                \<td\>Varna\</td\>
            \</tr\>
        \</tbody\>
    
    \</table\>
`;

result();

let color = "rgb(65, 63, 94)";
let tds = document.querySelectorAll('td');
tds\[3\].click();
assert.equal(tds\[3\].parentNode.style.backgroundColor,color,"1");
tds\[3\].click();
assert.equal(tds\[3\].parentElement.style.backgroundColor,"","2");
tds\[6\].click();
assert.equal(tds\[6\].parentElement.style.backgroundColor,color,"3");
tds\[2\].click();
assert.equal(tds\[2\].parentElement.style.backgroundColor,color,"4");
assert.equal(tds\[6\].parentElement.style.backgroundColor,"","5");

let ths = document.querySelectorAll('th');
ths\[0\].click();
assert.equal(tds\[6\].parentElement.style.backgroundColor,"","6");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
\<table class="minimalistBlack"\>
        \<thead\>
            \<tr\>
                \<th\>Name\</th\>
                \<th\>Town\</th\>
            \</tr\>
        \</thead\>
        \<tbody\>
            \<tr\>
                \<td\>Eve\</td\>
                \<td\>Sofia\</td\>
            \</tr\>
            \<tr\>
                \<td\>Nick\</td\>
                \<td\>Varna\</td\>
            \</tr\>
            \<tr\>
                \<td\>Didi\</td\>
                \<td\>Ruse\</td\>
            \</tr\>
            \<tr\>
                \<td\>Tedy\</td\>
                \<td\>Varna\</td\>
            \</tr\>
        \</tbody\>
    
    \</table\>
`;

result();

let color = "rgb(65, 63, 94)";
let tds = document.querySelectorAll('td');
tds\[3\].click();
assert.equal(tds\[3\].parentNode.style.backgroundColor,color,"1");
tds\[3\].click();
assert.equal(tds\[3\].parentElement.style.backgroundColor,"","2");


let ths = document.querySelectorAll('th');
ths\[0\].click();
assert.equal(tds\[6\].parentElement.style.backgroundColor,"","6");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
\<table class="minimalistBlack"\>
        \<thead\>
            \<tr\>
                \<th\>Name\</th\>
                \<th\>Town\</th\>
            \</tr\>
        \</thead\>
        \<tbody\>
            \<tr\>
                \<td\>Eve\</td\>
                \<td\>Sofia\</td\>
            \</tr\>
            \<tr\>
                \<td\>Nick\</td\>
                \<td\>Varna\</td\>
            \</tr\>
            \<tr\>
                \<td\>Didi\</td\>
                \<td\>Ruse\</td\>
            \</tr\>
            \<tr\>
                \<td\>Tedy\</td\>
                \<td\>Varna\</td\>
            \</tr\>
        \</tbody\>
    
    \</table\>
`;

result();

let color = "rgb(65, 63, 94)";
let tds = document.querySelectorAll('td');
tds\[0\].click();
tds\[1\].click();
assert.equal(tds\[0\].parentElement.style.backgroundColor,"","1");

let ths = document.querySelectorAll('th');
ths\[0\].click();
assert.equal(tds\[6\].parentElement.style.backgroundColor,"","2");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
\<table class="minimalistBlack"\>
        \<thead\>
            \<tr\>
                \<th\>Name\</th\>
                \<th\>Town\</th\>
            \</tr\>
        \</thead\>
        \<tbody\>
            \<tr\>
                \<td\>Eve\</td\>
                \<td\>Sofia\</td\>
            \</tr\>
            \<tr\>
                \<td\>Nick\</td\>
                \<td\>Varna\</td\>
            \</tr\>
            \<tr\>
                \<td\>Didi\</td\>
                \<td\>Ruse\</td\>
            \</tr\>
            \<tr\>
                \<td\>Tedy\</td\>
                \<td\>Varna\</td\>
            \</tr\>
        \</tbody\>
    
    \</table\>
`;

result();

let color = "rgb(65, 63, 94)";
let tds = document.querySelectorAll('td');
tds\[0\].click();
tds\[1\].click();
assert.equal(tds\[0\].parentElement.style.backgroundColor,"","1");

tds\[2\].click();
assert.equal(tds\[3\].parentElement.style.backgroundColor,color,"2");

let ths = document.querySelectorAll('th');
ths\[0\].click();
assert.equal(tds\[6\].parentElement.style.backgroundColor,"","2");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problem: Next Article

[code-task title="Next Article" taskId="js-advanced-function-context-next-article" executionType="tests-execution" executionStrategy="javascript-js-dom-unit-tests" requiresInput] [code-editor language=javascript]

```
function getArticleGenerator(articles) {
    // Scrieți codul dvs. aici
}
```
[/code-editor]
[task-description]
# Descriere
Scrieți o funcție care **afișează articole** secvențial pe o pagină web atunci când utilizatorul **face clic** pe un buton.

Veți primi o **matrice de șiruri** care vor inițializa programul.

Trebuie să returnați o funcție care păstrează matricea inițială în closure și de fiecare dată când este apelată, preia primul element din matrice și îl afișează pe pagina web, într-un `div` cu ID-ul "**content**". 

Dacă nu mai sunt elemente rămase, funcția dvs. nu ar trebui să facă nimic.

## Cod HTML și JavaScript
Vi se oferă următorul cod **HTML**:

```js
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <title>Next Article</title>
      <style>div{width:600px; text-align: center; font-size: 1.5em} article{border: 2px solid blue; padding: 2em; margin: 1em}</style>
      <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
      <script src="next-article.js"></script>
   </head>
   <body>
      <div id="content"></div>
      <div><button onclick="showNext()">Show Next Article</button></div>
      <script>
         let articles =[
           "Cats are the most popular pet in the United States: There are 88 million pet cats and 74 million dogs.",
           "A group of cats is called a clowder.",
           "Cats have over 20 muscles that control their ears.",
           "A cat has been mayor of Talkeetna, Alaska, for 15 years. His name is Stubbs.",
           "The world's largest cat measured 48.5 inches long."
         ];
         let showNext = getArticleGenerator(articles);
      </script>
   </body>
</html>
```

Acesta vine împreună cu următorul cod **JavaScript**:

`next-article.js`

```js
function getArticleGenerator(articles) {
    // TODO
}
```

Funcția dvs. va fi apelată automat, **nu este necesar** să atașați event listeners (observatori de evenimente).

## Intrare
Veți primi și **o matrice** de șiruri.

## Ieșire
Returnează o **funcție** care afișează elementele matricei pe pagina web.

## Exemplu 1:
[image assetsSrc="function-context-12.png" /]

## Exemplu 2:
[image assetsSrc="function-context-13.png" /]

## Exemplu 3:
[image assetsSrc="function-context-14.png" /]

[/task-description]
[code-io /]
[tests]
[test open]
[input]
document.body.innerHTML = `
<div id="content"></div>
<button>Show Next Article</button>
`;

expect(typeof result).to.equal('function', "Your solution must be a function");
expect(result.length).to.equal(1, "Your function must receive a single parameter - an array of strings");

let articles =[
    "Cats are the most popular pet in the United States: There are 88 million pet cats and 74 million dogs.",
    "A group of cats is called a clowder.",
    "Cats have over 20 muscles that control their ears.",
    "A cat has been mayor of Talkeetna, Alaska, for 15 years. His name is Stubbs.",
    "The world's largest cat measured 48.5 inches long."
];
let showNext = result(articles);
expect(typeof showNext).to.equal('function', "Your solution did not return a function");
expect(showNext.length).to.equal(0, "The returned function should be parameterless");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
<div id="content"></div>
<button>Show Next Article</button>
`;

let articles =[
    "Cats are the most popular pet in the United States: There are 88 million pet cats and 74 million dogs.",
    "A group of cats is called a clowder.",
    "Cats have over 20 muscles that control their ears.",
    "A cat has been mayor of Talkeetna, Alaska, for 15 years. His name is Stubbs.",
    "The world's largest cat measured 48.5 inches long."
];
let showNext = result(Object.assign([], articles));
let contentHolder = $('#content');
expect(contentHolder.text()).to.equal('', "Do not modify the content before the button is clicked");
showNext();
expect(contentHolder.text()).to.contains(articles[0], "First article is missing after click");
showNext();
expect(contentHolder.text()).to.contains(articles[0], "First article is missing after click");
expect(contentHolder.text()).to.contains(articles[1], "Second article is missing after click");
showNext();
showNext();
showNext();
showNext();
expect(contentHolder.find('article').length).to.equal(5, "Empty article added, your function should od nothing when the elements in the array run out\n");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = `
<div id="content"></div>
<button>Show Next Article</button>
`;

expect(typeof result).to.equal('function', "Your solution must be a function");
expect(result.length).to.equal(1, "Your function must receive a single parameter - an array of strings");

let articles =[
    "Cats are the most popular pet in the United States: There are 88 million pet cats and 74 million dogs.",
    "A group of cats is called a clowder.",
    "Cats have over 20 muscles that control their ears.",
    "A cat has been mayor of Talkeetna, Alaska, for 15 years. His name is Stubbs.",
    "The world's largest cat measured 48.5 inches long."
];
let showNext = result(articles);
expect(typeof showNext).to.equal('function', "Your solution did not return a function");
expect(showNext.length).to.equal(0, "The returned function should be parameterless");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]