# Teme pentru acasă

[slide hideTitle]
# Problemă: Heroic Inventory

[code-task title="Heroic Inventory" taskId="java-path-js-advanced-objects-and-classes- heroic-inventory" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function heroicInventory(heroArr) {
    // Write your code here
};
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
# Descriere
În era eroilor, fiecare erou are propriile obiecte care îl fac unic. 

Scrieți o funcție care creează un **registru pentru eroi** cu ale lor **names**, **level** și **items** (obiecte), dacă au. 

Registrul ar trebui să accepte date într-un format specificat și să le returneze prezentate într-un format specificat. 

## Intrare 
**Intrarea** vine ca o matrice de șiruri. 

Fiecare element conține date despre un erou în următorul format: 

`{heroName} / {heroLevel} / {item1}, {item2}, {item3}...` 

Trebuie să stocați datele despre fiecare erou. 

**Name**  este un **șir**,**level** este un **număr** și **items** sunt toate **șiruri**. 

## Ieșire 
**Ieșirea** este o matrice de **reprezentări JSON** ale datelor pentru toți eroii pe care i-ați stocat. 

Consultați exemplele pentru mai multe informații.

## Examplul unu

### Intrare

`heroicInventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara'])`

### Ieșire

```json
[{"name":"Isacc","level":25,"items":
  ["Apple","GravityGun"]},
{"name":"Derek","level":12,"items":
  ["BarrelVest","DestructionSword"]},
{"name":"Hes","level":1,"items":
  ["Desolator","Sentinel","Antara"]}] 
```

## Examplul doi

### Intrare

`heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade'])`

### Ieșire

```json
[{"name":"Jake","level":1000,"items":
  ["Gauss","HolidayGrenade"]}] 
```

[hints]
[hint]
Avem nevoie de o **matrice** care să conțină datele despre **eroul** nostru.

Acesta este **primul** lucru pe care ar trebui să-l creăm.

[image assetsSrc="../syntax-hint-01.png" /]

```js
function heroicInventory(input) {
    let result = [];
};
```
[/hint] 
[hint]
Apoi, trebuie să **buclăm** prin întreaga intrare și să o **procesăm**.

Să facem acest lucru cu o simplă buclă `for ... of`.

```js
for (const iterator of input) {
    let [name, level, items] = 
        iterator.split(' / ');

    level = Number(level);

    // ...
}
```
[/hint] 
[hint]
Fiecare element din intrare conține informații despre un erou.

Cu toate acestea, **elementele** de care avem nevoie sunt **separate printr-un delimitator**, deci doar împărțim fiecare șir cu acel **delimitator**. 
[/hint] 
[hint]
Apoi, trebuie să luăm elementele din **matricea de șiruri**, care este rezultatul **metodei de împărțire a șirurilor**.

Cu [destructuring assignment syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment), atribuim proprietățile matricei.

Nu uitați să transformați numărul. 
[/hint] 
[hint]
Cu toate acestea, aici, ne amintim că există ceva special la articole. 

Dacă citim din nou descrierea problemei, vom observa că ar putea exista un **caz** în care eroul **să nu aibă obiecte**.

În acest caz, când folosim **destructurarea**, elementele noastre de proprietate vor fi nedefinite și încercarea de a afișa matricea va genera o eroare. 

De aceea trebuie să efectuăm o verificare simplă folosind [ternary operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator). 

```js
items = items ? items.split(', ') : [];
```
[/hint] 
[hint]
Dacă **există elemente** de **intrare**, **variabila** va fi setată la **versiunea divizată a acestora**.

Dacă nu, va fi setată doar la o **matrice goală**.
[/hint] 
[hint]
Acum am extras datele necesare - am stocat **numele de intrare** într-o **variabilă**, am analizat **nivelul dat** la un **număr** și am și **împarțit** **obiectele** pe care **eroul le deține** prin **delimitatorul** lor. 

Prin definiție, **articolele** sunt **șiruri**, deci nu mai este nevoie să procesăm matricea pe care am creat-o. 
[/hint] 
[hint]
Ceea ce a mai rămas este să adăugați aceste date la **un obiect** și să **adăugați** obiectul la **matrice**.

```js
for (const iterator of input) {
    let [name, level, items] = 
        iterator.split(' / ');
    level = Number(level);
    items = items ? items.split(', ') : [];

    result.push({name, level, items});
}
```
[/hint] 
[hint]
În cele din urmă, trebuie să transformăm matricea de obiecte într-un șir JSON, care se face cu metoda `JSON.stringify()`.

```js
console.log(JSON.stringify(result));
```
[/hint] 
[/hints] 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
heroicInventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara'])
[/input]
[output]
\[\{"name":"Isacc","level":25,"items":\["Apple","GravityGun"\]\},\{"name":"Derek","level":12,"items":\["BarrelVest","DestructionSword"\]\},\{"name":"Hes","level":1,"items":\["Desolator","Sentinel","Antara"\]\}\]
[/output]
[/test]
[test open]
[input]
heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade'])
[/input]
[output]
\[\{"name":"Jake","level":1000,"items":\["Gauss","HolidayGrenade"\]\}\]
[/output]
[/test]
[test]
[input]
heroicInventory(['Kayden / 24 / Apple, Orange, Grapefruit', 'Joseph / 50 / AK47, M4A1, ES21, Deagle', 'Chris / 10 / Knife', 'Eve / 23 / Gummy, Depathy'])
[/input]
[output]
\[\{"name":"Kayden","level":24,"items":\["Apple","Orange","Grapefruit"\]\},\{"name":"Joseph","level":50,"items":\["AK47","M4A1","ES21","Deagle"\]\},\{"name":"Chris","level":10,"items":\["Knife"\]\},\{"name":"Eve","level":23,"items":\["Gummy","Depathy"\]\}\]
[/output]
[/test]
[test]
[input]
heroicInventory(['EmptyOne / 200', 'Anderson / 250 / StrikeForge, HeavensGuard', 'Hendricksen / 300 / DemonHeart, DemonSoul, DemonEdge'])
[/input]
[output]
\[\{"name":"EmptyOne","level":200,"items":\[\]\},\{"name":"Anderson","level":250,"items":\["StrikeForge","HeavensGuard"\]\},\{"name":"Hendricksen","level":300,"items":\["DemonHeart","DemonSoul","DemonEdge"\]\}\]
[/output]
[/test]
[test]
[input]
heroicInventory(['Test / 3 / In, Txt'])
[/input]
[output]
\[\{"name":"Test","level":3,"items":\["In","Txt"\]\}\]
[/output]
[/test]
[test]
[input]
heroicInventory(['Destroyer / 25 / DivineRapier, AghanimScepter, Dagon', 'Geomancer / 25 / AghanimScepter, VladmirsOffering, Mekanism', 'Juggernaut / 25 / AghanimScepter, Desolator, BattleFury', 'Earthshaker / 20 / AghanimScepter, RefresherOrb, BlinkDagger', 'Chieftain / 20 / AghanimScepter, BlinkDagger, Battlefury, TravelBoots, DrumOfEndurance', 'Invoker / 25 / AghanimScepter, Satanic, EyeOfSkadi, Butterfly', 'NogoTheNextLevel / 150 / DomoSweather'])
[/input]
[output]
\[\{"name":"Destroyer","level":25,"items":\["DivineRapier","AghanimScepter","Dagon"\]\},\{"name":"Geomancer","level":25,"items":\["AghanimScepter","VladmirsOffering","Mekanism"\]\},\{"name":"Juggernaut","level":25,"items":\["AghanimScepter","Desolator","BattleFury"\]\},\{"name":"Earthshaker","level":20,"items":\["AghanimScepter","RefresherOrb","BlinkDagger"\]\},\{"name":"Chieftain","level":20,"items":\["AghanimScepter","BlinkDagger","Battlefury","TravelBoots","DrumOfEndurance"\]\},\{"name":"Invoker","level":25,"items":\["AghanimScepter","Satanic","EyeOfSkadi","Butterfly"\]\},\{"name":"NogoTheNextLevel","level":150,"items":\["DomoSweather"\]\}\]
[/output]
[/test]
[test]
[input]
heroicInventory(['What / 1 / The, Fuck'])
[/input]
[output]
\[\{"name":"What","level":1,"items":\["The","Fuck"\]\}\]
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: JSON's Table

[code-task title="JSON's Table" taskId="java-path-js-advanced-objects-and-classes-json-s-table" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function jsonTable(employeeData) {
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
# Descriere
Tabelul JSON este un tabel magic care transformă datele JSON într-un tabel HTML. 

Veți primi **șiruri JSON** care dețin date despre angajați, inclusiv **name** (numele), **position** (poziția) și **salary** (salariul) acestora. 

Ar trebui să **transformați șirurile** în **obiecte** și să creați un **tabel HTML** care să conțină datele despre fiecare **angajat pe un rând diferit** ca **coloane**.

Câmpurile **name** și **position** ale angajaților sunt **șiruri**, iar **salary** este **număr întreg**. 

## Intrare
** Intrarea ** vine ca o matrice de șiruri. 

Fiecare element este un șir JSON care reprezintă datele despre un anumit angajat. 

## Ieșire
**Ieșirea** este codul HTML al unui tabel care conține datele exact așa cum s-a explicat mai sus.

Consultați exemplele pentru mai multe informații. 

## Examplu

### Intrare

`jsonTable(['{"name":"Peter","position":"Director", "salary":100000}', '{"name":"Ted","position":"Lecturer","salary":1000}', '{"name":"George","position":"Lecturer","salary":1000}'])`

### Ieșire

```html
<table>
	<tr>
		<td>Peter</td>
		<td>Director</td>
		<td>100000</td>
	</tr>
	<tr>
		<td>Ted</td>
		<td>Lecturer</td>
		<td>1000</td>
	</tr>
	<tr>
		<td>George</td>
		<td>Lecturer</td>
		<td>1000</td>
	</tr>
</table>
```

[hints]
[hint]
Ar trebui să **scăpați de codul HTML**.

În caz contrar, s-ar putea să deveniți victima codului JavaScript rău intenționat **primit în intrare**.
[/hint] 
[/hints] 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
jsonTable(['\{"name":"Peter","position":"Director","salary":100000\}', '\{"name":"Ted","position":"Lecturer","salary":1000\}', '\{"name":"George","position":"Lecturer","salary":1000\}'])
[/input]
[output]
\<table\>
	\<tr\>
		\<td\>Peter\</td\>
		\<td\>Director\</td\>
		\<td\>100000\</td\>
	\</tr\>
	\<tr\>
		\<td\>Ted\</td\>
		\<td\>Lecturer\</td\>
		\<td\>1000\</td\>
	\</tr\>
	\<tr\>
		\<td\>George\</td\>
		\<td\>Lecturer\</td\>
		\<td\>1000\</td\>
	\</tr\>
\</table\>
[/output]
[/test]
[test]
[input]
jsonTable(['\{"name":"George","position":"CEO","salary":10000\}', '\{"name":"Peter","position":"Employee","salary":1000\}', '\{"name":"John","position":"Employee","salary":1000\}', '\{"name":"Henrick","position":"Employee","salary":1000\}', '\{"name":"Phillip","position":"Employee","salary":1000\}', '\{"name":"Alex","position":"Cleaner","salary":500\}', '\{"name":"Ivan","position":"Cleaner","salary":500\}'])
[/input]
[output]
\<table\>
	\<tr\>
		\<td\>George\</td\>
		\<td\>CEO\</td\>
		\<td\>10000\</td\>
	\</tr\>
	\<tr\>
		\<td\>Peter\</td\>
		\<td\>Employee\</td\>
		\<td\>1000\</td\>
	\</tr\>
	\<tr\>
		\<td\>John\</td\>
		\<td\>Employee\</td\>
		\<td\>1000\</td\>
	\</tr\>
	\<tr\>
		\<td\>Henrick\</td\>
		\<td\>Employee\</td\>
		\<td\>1000\</td\>
	\</tr\>
	\<tr\>
		\<td\>Phillip\</td\>
		\<td\>Employee\</td\>
		\<td\>1000\</td\>
	\</tr\>
	\<tr\>
		\<td\>Alex\</td\>
		\<td\>Cleaner\</td\>
		\<td\>500\</td\>
	\</tr\>
	\<tr\>
		\<td\>Ivan\</td\>
		\<td\>Cleaner\</td\>
		\<td\>500\</td\>
	\</tr\>
\</table\>
[/output]
[/test]
[test]
[input]
jsonTable(['\{"name":"This","position":"Will","salary":123\}', '\{"name":"Be","position":"ALot","salary":456\}', '\{"name":"Of","position":"Fun","salary":789\}'])
[/input]
[output]
\<table\>
	\<tr\>
		\<td\>This\</td\>
		\<td\>Will\</td\>
		\<td\>123\</td\>
	\</tr\>
	\<tr\>
		\<td\>Be\</td\>
		\<td\>ALot\</td\>
		\<td\>456\</td\>
	\</tr\>
	\<tr\>
		\<td\>Of\</td\>
		\<td\>Fun\</td\>
		\<td\>789\</td\>
	\</tr\>
\</table\>
[/output]
[/test]
[test]
[input]
jsonTable(['\{"name":"test","position":"out.txt","salary":3\}'])
[/input]
[output]
\<table\>
	\<tr\>
		\<td\>test\</td\>
		\<td\>out.txt\</td\>
		\<td\>3\</td\>
	\</tr\>
\</table\>
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Juice

[code-task title="Juice" taskId="java-path-js-advanced-objects-and-classes-juice" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function juice(juiceData) {
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
# Descriere

Vi se vor oferi diferite tipuri de sucuri ca **șiruri**.

De asemenea, veți primi **mililitri** ca **număr**.

Dacă primiți un tip de suc pe care îl aveți deja, ar trebui să **combinați volumul lor**.

Când un tip de suc ajunge la **1000 mililitri**, acesta este turnat într-o sticlă.

Trebuie **să stocați toate sticlele** și trebuie să **le tipăriți** la final.


**Notă:** 1000 de mililitri de **suc** este **o sticlă**.

Dacă se întâmplă să aveți **mai mult de 1000 de mililitri**, trebuie să faceți **cât mai multe sticle** și să păstrați **ceea ce a rămas** din suc.


**Examplu:** Aveți **2643 mililitri** de suc de portocale - aceasta înseamnă **2 sticle** de suc de portocale și **643 de mililitri rămași**.


## Intrare
**Intrarea** vine ca o matrice de șiruri.

Fiecare element conține date despre tipul sucului și volumul acestuia în următorul format:
`{juiceName} => {juiceVolume}`
 
## Ieșire
**Ieșirea** constă din toate sticlele umplute.

Acestea trebuie tipărite în **ordinea de umplere**.

Verificați al doilea exemplu de mai jos.

Chiar dacă primim mai întâi sucul de kiwi, nu umplem o sticlă de suc de kiwi până la a 4-a linie.

În acel moment, am umplut deja sticle de suc de pere și pepene verde, astfel încât sticlele de Kiwi apar ultimele în ieșire.

## Exemplul unu

### Intrare

`juice(['Orange => 2000', 'Peach => 1432', 'Banana => 450', 'Peach => 600', 'Strawberry => 549'])`

### Ieșire

```js
Orange => 2 
Peach => 2 
```

## Exemplul doi

### Intrare

`juice(['Kiwi => 234', 'Pear => 2345', 'Watermelon => 3456', 'Kiwi => 4567', 'Pear => 5678', 'Watermelon => 6789'])`

### Ieșire

```js
Pear => 8 
Watermelon => 10 
Kiwi => 4 
```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
juice(['Orange =\> 2000', 'Peach =\> 1432', 'Banana =\> 450', 'Peach =\> 600', 'Strawberry =\> 549'])
[/input]
[output]
Orange =\> 2
Peach =\> 2
[/output]
[/test]
[test open]
[input]
juice(['Kiwi =\> 234', 'Pear =\> 2345', 'Watermelon =\> 3456', 'Kiwi =\> 4567', 'Pear =\> 5678', 'Watermelon =\> 6789'])
[/input]
[output]
Pear =\> 8
Watermelon =\> 10
Kiwi =\> 4
[/output]
[/test]
[test]
[input]
juice(['Hell =\> 100000', 'Coca Cola =\> 1000000000', 'Water =\> 10000', 'Nestea =\> 11111'])
[/input]
[output]
Hell =\> 100
Coca Cola =\> 1000000
Water =\> 10
Nestea =\> 11
[/output]
[/test]
[test]
[input]
juice(['Musaka =\> 1000', 'Lambda =\> 1000', 'Filter =\> 1000', 'Function =\> 1000', 'Judge =\> 1000', 'Mojem =\> 1000', 'Zadacha =\> 1000', 'Reshenie =\> 1000', 'Prav =\> 1000', 'Nakov =\> 1000', 'Izvrashtenie =\> 1000'])
[/input]
[output]
Musaka =\> 1
Lambda =\> 1
Filter =\> 1
Function =\> 1
Judge =\> 1
Mojem =\> 1
Zadacha =\> 1
Reshenie =\> 1
Prav =\> 1
Nakov =\> 1
Izvrashtenie =\> 1
[/output]
[/test]
[test]
[input]
juice(['Code =\> 999', 'Software =\> 1000', 'SoftwareShouldBeBeforeCode =\> 1345', 'Code =\> 1'])
[/input]
[output]
Software =\> 1
SoftwareShouldBeBeforeCode =\> 1
Code =\> 1
[/output]
[/test]
[test]
[input]
juice(['What =\> 919', 'The =\> 191', 'Fuck =\> 1110', 'What =\> 191', 'The =\> 919', 'The =\> 889', 'The =\> 1'])
[/input]
[output]
Fuck =\> 1
What =\> 1
The =\> 2
[/output]
[/test]
[test]
[input]
juice(['Test =\> 500', 'Out =\> 500', 'Txt =\> 1000', 'Out =\> 512', 'Test =\> 499', 'Test =\> 1'])
[/input]
[output]
Txt =\> 1
Out =\> 1
Test =\> 1
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Store Catalogue

[code-task title="Store Catalogue" taskId="java-path-js-advanced-objects-and-classes-store-catalogue" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function store(products) {
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
# Descriere

Trebuie să creați un catalog sortat cu unele produse.

Veți primi numele și prețurile produselor.

Trebuie să le comandați **alfabetic**. 

## Intrare
**Intrarea** vine ca o matrice de șiruri.

Fiecare element conține informații despre un produs în următorul format:

`{productName} : {productPrice}`

**Numele produsului** va fi un **șir**, care va începe **întotdeauna cu o majusculă**.

**Prețul** va fi un **număr**.

Puteți presupune în siguranță că nu vor exista **duplicate**.

Comparația pentru ordinea alfabetică este **insensibilă la majuscule**.


## Ieșire
Trebuie să imprimați toate produsele în formatul specificat.

Acestea trebuie comandate **exact așa cum se arată mai sus**.

Produsele trebuie să fie **împărțite în grupuri**, pe baza **primei litere a numelui lor**.

Inițiala grupului **ar trebui să fie tipărită** și, după aceea, produsele ar trebui tipărite cu **2 spații înainte de numele lor**.

Pentru mai multe informații, consultați exemplele.

## Exemplul unu

### Intrare

`store(['Apricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10'])`

### Ieșire

```
A 
  Anti-Bug Spray: 15 
  Apple: 1.25 
  Apricot: 20.4 
B 
  Boiler: 300 
D 
  Deodorant: 10 
F 
  Fridge: 1500 
T 
  T-Shirt: 10 
  TV: 1499 
```

## Exemplul doi

### Intrare

`store(['Banana : 2', 'Rubic's Cube : 5', 'Raspberry P : 4999', 'Rolex : 100000', 'Rollon : 10', 'Rally Car : 2000000', 'Paper : 0.000001', 'Barrel : 10'])`

### Ieșire

```
B 
  Banana: 2 
  Barrel: 10 
P 
  Paper: 0.000001 
R 
  Rali Car: 2000000 
  Raspberry P: 4999 
  Rolex: 100000 
  Rollon: 10 
  Rubic's Cube: 5 
```


[/task-description]
[code-io /]
[tests]
[test open]
[input]
store(['Apricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10'])
[/input]
[output]
A
  Anti-Bug Spray: 15
  Apple: 1.25
  Apricot: 20.4
B
  Boiler: 300
D
  Deodorant: 10
F
  Fridge: 1500
T
  T-Shirt: 10
  TV: 1499
[/output]
[/test]
[test open]
[input]
store(['Banana : 2', 'Rubic Cube : 5', 'Raspberry P : 4999', 'Rolex : 100000', 'Rollon : 10', 'Rally Car : 2000000', 'Paper : 0.000001', 'Barrel : 10'])
[/input]
[output]
B
  Banana: 2
  Barrel: 10
P
  Paper: 0.000001
R
  Rally Car: 2000000
  Raspberry P: 4999
  Rolex: 100000
  Rollon: 10
  Rubic Cube: 5
[/output]
[/test]
[test]
[input]
store(['Apple : 1', 'Broccoli : 2', 'Corn : 3', 'Deagle : 4', 'Eclipse : 5', 'Flirt : 6', 'Gargoyle : 7', 'Heart : 8', 'Iris : 9', 'Juice : 10', 'King : 11', 'Lemon : 12', 'Melolemonmelon : 13', 'Nestea : 14', 'Opium : 15', 'Pineapple Pen : 16', 'Quartz : 17', 'Rocket : 18', 'Sphere : 19', 'Tantrum : 20', 'Uranium : 21', 'Vi\*\*\*tor : 22', 'Wolfy : 23', 'Xeno : 24', 'Yoyo : 25', 'Zord : 26'])
[/input]
[output]
A
  Apple: 1
B
  Broccoli: 2
C
  Corn: 3
D
  Deagle: 4
E
  Eclipse: 5
F
  Flirt: 6
G
  Gargoyle: 7
H
  Heart: 8
I
  Iris: 9
J
  Juice: 10
K
  King: 11
L
  Lemon: 12
M
  Melolemonmelon: 13
N
  Nestea: 14
O
  Opium: 15
P
  Pineapple Pen: 16
Q
  Quartz: 17
R
  Rocket: 18
S
  Sphere: 19
T
  Tantrum: 20
U
  Uranium: 21
V
  Vi\*\*\*tor: 22
W
  Wolfy: 23
X
  Xeno: 24
Y
  Yoyo: 25
Z
  Zord: 26
[/output]
[/test]
[test]
[input]
store(['HueHueHue : 1000', 'Harley Davidson : 10', 'Halberd : 101', 'Broccoli : 10', 'Beans : 2302', 'KFC : 1000', 'McDonalds : 10', 'Kitchen : 10'])
[/input]
[output]
B
  Beans: 2302
  Broccoli: 10
H
  Halberd: 101
  Harley Davidson: 10
  HueHueHue: 1000
K
  KFC: 1000
  Kitchen: 10
M
  McDonalds: 10
[/output]
[/test]
[test]
[input]
store(['Test : 300', 'Out : 200', 'Txt : 100', 'Milionaaa : 300'])
[/input]
[output]
M
  Milionaaa: 300
O
  Out: 200
T
  Test: 300
  Txt: 100
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: System Components
[code-task title="System Components" taskId="java-path-js-advanced-objects-and-classes-system-components" executionType="tests-execution" executionStrategy="javascript-code" requiresInput]
[code-editor language=javascript]
```
function system(components) {
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
# Descriere
Vi se va oferi un registru de sisteme cu componente și subcomponente.

Trebuie să construiți o bază de date ordonată cu toate elementele pe care le aveți.


Elementele sunt înregistrate într-un mod foarte simplu.

După ce ați procesat toate datele de intrare, trebuie să le imprimați într-o anumită ordine.

Pentru fiecare **sistem**, trebuie să imprimați componentele sale într-o ordine specificată, iar pentru fiecare **componentă**, trebuie să le imprimați subcomponentele într-o ordine specificată.


**Sistemele** pe care le-ați stocat trebuie să fie ordonate după **numărul de componente** în **ordine descrescătoare** ca **prim criteriu** și în **ordine alfabetică** ca **al doilea criteriu** .

**Componentele** trebuie ordonate după **numărul de Subcomponente** în **ordine descendentă**.


## Intrare 
**Intrarea** vine ca o serie de șiruri.

Fiecare element conține **date** despre un **sistem**, o **componentă** a acelui **sistem** și o **subcomponentă** a acelei **componente**.

Dacă sistemul dat **există deja**, trebuie doar să **adăugați noua componentă** la acesta.

Dacă și **componenta există**, ar trebui să **adăugați** **noua subcomponentă** la aceasta.

**Subcomponentele** vor fi **întotdeauna unice**.

**Formatul de intrare este:** 

`{systemName} | {componentName} | {subcomponentName}`

Toate elementele sunt șiruri și pot conține **orice caractere ASCII**.

**Comparația șirului** pentru ordinea alfabetică este **nesensibilă la majuscule**.


## Ieșire 
Trebuie să imprimați toate elementele, ordonate exact în modul specificat mai sus.

**Formatul este:**

```
{systemName} 
|||{componentName} 
|||{component2Name} 
||||||{subcomponentName} 
||||||{subcomponent2Name} 
{system2Name}  
...
```

## Exemplu

### Intrare

`system(['SULS | Main Site | Home Page', 'SULS | Main Site | Login Page', 'SULS | Main Site | Register Page', 'SULS | Judge Site | Login Page', 'SULS | Judge Site | Submittion Page', 'Lambda | CoreA | A23', 'SULS | Digital Site | Login Page', 'Lambda | CoreB | B24', 'Lambda | CoreA | A24', 'Lambda | CoreA | A25', 'Lambda | CoreC | C4', 'Indice | Session | Default Storage', 'Indice | Session | Default Security'])`

### Ieșire

```
Lambda 
|||CoreA 
||||||A23 
||||||A24 
||||||A25 
|||CoreB 
||||||B24 
|||CoreC 
||||||C4 
SULS 
|||Main Site 
||||||Home Page 
||||||Login Page 
||||||Register Page 
|||Judge Site 
||||||Login Page 
||||||Submittion Page 
|||Digital Site 
||||||Login Page 
Indice 
|||Session 
||||||Default Storage 
||||||Default Security
```

[hints]
[hint]
Crearea unei funcții de sortare cu două criterii ar putea părea foarte dificilă, dar poate fi simplificată cu următoarele: 

- Dacă elementele **a** și **b** sunt diferite, pe baza **primului criteriu**, atunci rezultatul este rezultatul funcției de sortare
  * nu este necesară verificarea celui de-al doilea criteriu

- Dacă elementele **a** și **b** sunt **egale**, pe baza **primului criteriu**, atunci rezultatul comparării **a** și **b** pe baza celui de-**al doilea criteriu** este rezultatul sortării
[/hint] 
[/hints] 


[/task-description]
[code-io /]
[tests]
[test open]
[input]
system(['SULS \| Main Site \| Home Page', 'SULS \| Main Site \| Login Page', 'SULS \| Main Site \| Register Page', 'SULS \| Judge Site \| Login Page', 'SULS \| Judge Site \| Submittion Page', 'Lambda \| CoreA \| A23', 'SULS \| Digital Site \| Login Page', 'Lambda \| CoreB \| B24', 'Lambda \| CoreA \| A24', 'Lambda \| CoreA \| A25', 'Lambda \| CoreC \| C4', 'Indice \| Session \| Default Storage', 'Indice \| Session \| Default Security'])
[/input]
[output]
Lambda
\|\|\|CoreA
\|\|\|\|\|\|A23
\|\|\|\|\|\|A24
\|\|\|\|\|\|A25
\|\|\|CoreB
\|\|\|\|\|\|B24
\|\|\|CoreC
\|\|\|\|\|\|C4
SULS
\|\|\|Main Site
\|\|\|\|\|\|Home Page
\|\|\|\|\|\|Login Page
\|\|\|\|\|\|Register Page
\|\|\|Judge Site
\|\|\|\|\|\|Login Page
\|\|\|\|\|\|Submittion Page
\|\|\|Digital Site
\|\|\|\|\|\|Login Page
Indice
\|\|\|Session
\|\|\|\|\|\|Default Storage
\|\|\|\|\|\|Default Security
[/output]
[/test]
[test]
[input]
system(['Shift \| Section-A \| A-2', 'Shift \| Section-A \| A-3', 'Shift \| Section-A \| A-23', 'Shift \| Section-B \| B-1', 'Shift \| Section-B \| B-64', 'Shift \| Section-B \| B-56', 'Shit \| Anex \| Indie', 'Shit \| Bider \| Indie'])
[/input]
[output]
Shift
\|\|\|Section-A
\|\|\|\|\|\|A-2
\|\|\|\|\|\|A-3
\|\|\|\|\|\|A-23
\|\|\|Section-B
\|\|\|\|\|\|B-1
\|\|\|\|\|\|B-64
\|\|\|\|\|\|B-56
Shit
\|\|\|Anex
\|\|\|\|\|\|Indie
\|\|\|Bider
\|\|\|\|\|\|Indie
[/output]
[/test]
[test]
[input]
system(['Aniel \| Defa \| Aidi', 'Bari \| Defa \| Aidi', 'Bari \| Defa \| Isex', 'Bari \| Aha \| Xeno', 'Bari \| Defa \| Xeno', 'Aniel \| Defa \| Insiel', 'Ciel \| Defa \| Insiel'])
[/input]
[output]
Bari
\|\|\|Defa
\|\|\|\|\|\|Aidi
\|\|\|\|\|\|Isex
\|\|\|\|\|\|Xeno
\|\|\|Aha
\|\|\|\|\|\|Xeno
Aniel
\|\|\|Defa
\|\|\|\|\|\|Aidi
\|\|\|\|\|\|Insiel
Ciel
\|\|\|Defa
\|\|\|\|\|\|Insiel
[/output]
[/test]
[test]
[input]
system(['Iris \| Main System \| Radiation Reducer', 'Iris \| Main System \| Blue Light Reducer', 'Iris \| Sub-System Alpha \| Resistor Level-5', 'Iris \| Core \| Memory Reducer', 'Iris \| Core \| Electricity Reducer', 'Iris \| Sub-System Gamma \| Resistor Level-2', 'Iris \| Sub-System Gamma \| Resistor Level-3', 'Iris \| Main System \| Interface'])
[/input]
[output]
Iris
\|\|\|Main System
\|\|\|\|\|\|Radiation Reducer
\|\|\|\|\|\|Blue Light Reducer
\|\|\|\|\|\|Interface
\|\|\|Core
\|\|\|\|\|\|Memory Reducer
\|\|\|\|\|\|Electricity Reducer
\|\|\|Sub-System Gamma
\|\|\|\|\|\|Resistor Level-2
\|\|\|\|\|\|Resistor Level-3
\|\|\|Sub-System Alpha
\|\|\|\|\|\|Resistor Level-5
[/output]
[/test]
[test]
[input]
system(['Creativity \| Going \| Down', 'Creativity \| Reducing \| Fast', 'Creativity \| Is \| Dead', 'Creativity \| Going \| Down Really Fast', 'Creativity \| Is \| Really Dead', 'Tests \| Are \| Dying', 'Tests \| Are \| Dead'])
[/input]
[output]
Creativity
\|\|\|Going
\|\|\|\|\|\|Down
\|\|\|\|\|\|Down Really Fast
\|\|\|Is
\|\|\|\|\|\|Dead
\|\|\|\|\|\|Really Dead
\|\|\|Reducing
\|\|\|\|\|\|Fast
Tests
\|\|\|Are
\|\|\|\|\|\|Dying
\|\|\|\|\|\|Dead
[/output]
[/test]
[test]
[input]
system(['Tests \| 001 \| In', 'Tests \| 001 \| Out', 'Tests \| 002 \| In', 'Tests \| 002 \| Out', 'Tests \| 003 \| In', 'Tests \| 003 \| Out', 'Tests \| 004 \| In', 'Tests \| 004 \| Out', 'Tests \| 005 \| In', 'Tests \| 005 \| Out'])
[/input]
[output]
Tests
\|\|\|001
\|\|\|\|\|\|In
\|\|\|\|\|\|Out
\|\|\|002
\|\|\|\|\|\|In
\|\|\|\|\|\|Out
\|\|\|003
\|\|\|\|\|\|In
\|\|\|\|\|\|Out
\|\|\|004
\|\|\|\|\|\|In
\|\|\|\|\|\|Out
\|\|\|005
\|\|\|\|\|\|In
\|\|\|\|\|\|Out
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Data Class

[code-task title="Data Class" taskId="java-path-js-advanced-objects-and-classes-data-class" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput]
[code-editor language=javascript]
```
class Request {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Descriere

Creați o **clasă** care conține date despre o **cerere** HTTP.

Are următoarele proprietăți: 

- `method` (string) 
- `uri` (string) 
- `version` (string) 
- `message` (string) 
- `response` (string) 
- `fulfilled` (Boolean) 

Primele patru proprietăți (`method`, `uri`, `version`, `message`) sunt setate prin `constructor` în ordinea listată.

Proprietatea `response` este inițializată ca  `undefined`, iar proprietatea `fulfilled` este setată inițial la `false`.

# Constrângeri 
- Constructorul clasei dvs. va primi parametri valizi
- Trimiteți definiția clasei așa cum este, fără a o împacheta în nicio funcție

## Exemple 

### Exemplu de intrare 

```js
let myData = new Request(
  'GET', 'http://google.com', 'HTTP/1.1', ''); 

console.log(myData); 
```

### Obiect rezultat 

```js
Request { 
  method: 'GET', 
  uri: 'http://google.com', 
  version: 'HTTP/1.1', 
  message: '', 
  response: undefined, 
  fulfilled: false 
} 
```

[hints]
[hint]
Folosind sintaxa ES6 cu cuvântul cheie `class`, o clasă poate fi definită similar unei funcții:

```js
class Request {
  // ...
}
```
[/hint] 
[hint]
În acest moment, **clasa** poate **fi** deja **instanțiată**, dar nu va conține nimic util, deoarece nu are un constructor.

Un **constructor** este o funcție care **inițializează** contextul obiectului și îi atașează **valori**.

Este definit cu cuvântul cheie `constructor` în corpul definiției clasei și urmează sintaxa funcțiilor JS obișnuite - poate primi **argumente** și executa **logic**.

Orice variabilă pe care dorim să o atașăm **instanței** trebuie să fie prefixată cu identificatorul `this`:

```js
class Request {
  constructor() {
    this.method = '';
    this.uri = '';
    this.version = '';
    this.message = '';
    this.response = undefined;
    this.fulfilled = false;
  }
}
```
[/hint] 
[hint]
Descrierea menționează că unele proprietăți trebuie setate prin intermediul constructorului.

Aceasta înseamnă că constructorul trebuie să le primească ca argumente.

Îl modificăm pentru a primi patru argumente numite pe care le atribuim apoi variabilelor locale: 

```js
class Request {
  constructor(method, uri, version, message) {
    this.method = method;
    this.uri = uri;
    this.version = version;
    this.message = message;
    this.response = undefined;
    this.fulfilled = false;
  }
}
```

Rețineți că parametrii de intrare au aceleași nume ca și variabilele de instanță.

Acest lucru nu este necesar, dar este mai ușor de citit.

Nu va exista o coliziune de nume, deoarece identificatorul `this` instruiește interpretul să caute o variabilă într-un context diferit, deci `this.method` nu este același cu `method`. 
[/hint] 
[/hints] 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
expect(typeof result).to.equal('function', "Couldn't find constructor.");
let myData = new result('GET', 'http://google.com', 'HTTP/1.1', '');
expect(myData.hasOwnProperty('method')).to.equal(true, "Instance doesn't have a method property.");
expect(myData.hasOwnProperty('uri')).to.equal(true, "Instance doesn't have a uri property.");
expect(myData.hasOwnProperty('version')).to.equal(true, "Instance doesn't have a version property.");
expect(myData.hasOwnProperty('message')).to.equal(true, "Instance doesn't have a message property.");
expect(myData.hasOwnProperty('response')).to.equal(true, "Instance doesn't have a response property.");
expect(myData.hasOwnProperty('fulfilled')).to.equal(true, "Instance doesn't have a fulfilled property.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect(typeof result).to.equal('function', "Couldn't find constructor.");
let myData = new result('POST', 'http://bing.com', 'HTTP/1.1', 'hi');
expect(myData.hasOwnProperty('method')).to.equal(true, "Instance doesn't have a method property.");
expect(myData.hasOwnProperty('uri')).to.equal(true, "Instance doesn't have a uri property.");
expect(myData.hasOwnProperty('version')).to.equal(true, "Instance doesn't have a version property.");
expect(myData.hasOwnProperty('message')).to.equal(true, "Instance doesn't have a message property.");
expect(myData.hasOwnProperty('response')).to.equal(true, "Instance doesn't have a response property.");
expect(myData.hasOwnProperty('fulfilled')).to.equal(true, "Instance doesn't have a fulfilled property.");

expect(myData.method).to.equal('POST', "Property method wasn't set correctly");
expect(myData.uri).to.equal('http://bing.com', "Property uri wasn't set correctly");
expect(myData.version).to.equal('HTTP/1.1', "Property version wasn't set correctly");
expect(myData.message).to.equal('hi', "Property message wasn't set correctly");
expect(myData.response).to.equal(undefined, "Property response wasn't set correctly");
expect(myData.fulfilled).to.equal(false, "Property fulfilled wasn't set correctly");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Tickets

[code-task title="Tickets" taskId="java-path-js-advanced-objects-and-classes-tickets" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput]
[code-editor language=javascript]
```
function tickets(ticketArr, sortCrit) {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Descriere

Creați un program care gestionează o bază de date cu bilete.

Un bilet are `destination` (destinație), `price` (preț) și `status` (statut).

Funcția dvs. va primi **două argumente** - o **matrice de șiruri** reprezentând descrieri de bilete și un **șir** reprezentând un **criteriu de sortare**.

Descrierea biletelor are următorul format: 

`<destinationName>|<price>|<status>`

Stocați fiecare bilet.

După execuție, **returnați** un rezumat sortat al tuturor biletelor, sortat fie după `destination`, `price` sau `status`, pe baza celui **de-al doilea parametru** primit de programul dvs.

Sortați întotdeauna în ordine crescătoare (comportament implicit pentru sortare **alfabetică**).

Dacă două bilete sunt la fel, utilizați ordinea de apariție.

Consultați exemplele pentru mai multe informații.

## Intrare 

Programul dvs. va primi doi parametri - o **matrice de șiruri** și un **singur șir**. 

## Ieșire 

**Returnează** o **matrice sortată** a tuturor biletelor înregistrate.

## Exemple

## Exemplul unu

### Exemplu de intrare 

`tickets(['Philadelphia|94.20|available', 'New York City|95.99|available', 'New York City|95.99|sold', 'Boston|126.20|departed'], 'destination')`

### Matrice ieșire

```js
[ Ticket { destination: 'Boston', 
    price: 126.20, 
    status: 'departed' },  

  Ticket { destination: 'New York City', 
    price: 95.99, 
    status: 'available' },  

  Ticket { destination: 'New York City', 
    price: 95.99, 
    status: 'sold' },  

  Ticket { destination: 'Philadelphia', 
    price: 94.20, 
    status: 'available' } ] 
```

## Exemplul doi

### Exemplu de intrare 

`tickets(sort['Philadelphia|94.20|available', 'New York City|95.99|available', 'New York City|95.99|sold', Boston|126.20|departed'], 'status')`

### Matrice ieșire

```js
[ Ticket { destination: 'Philadelphia', 
    price: 94.20, 
    status: 'available' }, 

  Ticket { destination: 'New York City', 
    price: 95.99, 
    status: 'available' }, 

  Ticket { destination: 'Boston', 
    price: 126.20, 
    status: 'departed' }, 

  Ticket { destination: 'New York City', 
    price: 95.99, 
    status: 'sold' } ] 
```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
let resultArray = result(\['Philadelphia\|94.20\|available'\], 'status');

expect(resultArray instanceof Array).to.equal(true, "Output didn't match required type (Array).");

expect(resultArray\[0\].hasOwnProperty('destination')).to.equal(true, "Resulting object didn't have destination property.");
expect(resultArray\[0\].hasOwnProperty('price')).to.equal(true, "Resulting object didn't have price property.");
expect(resultArray\[0\].hasOwnProperty('status')).to.equal(true, "Resulting object didn't have status property.");
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
let resultArray = result(\['Philadelphia\|94.20\|available',
        'New York City\|95.99\|available',
        'New York City\|95.99\|sold',
        'Boston\|126.20\|departed'\],
    'destination');

expect(resultArray instanceof Array).to.equal(true, "Output didn't match required type (Array).");

let expectedArray = \[\{destination: 'Boston', price: 126.2, status: 'departed'\},
    \{destination: 'New York City', price: 95.99, status: 'available'\},
    \{destination: 'New York City', price: 95.99, status: 'sold'\},
    \{destination: 'Philadelphia', price: 94.2, status: 'available'\}\];

expect(resultArray.length).to.equal(expectedArray.length, "Result didn't include the required number of tickets.");

for (let i = 0; i \< expectedArray.length; i++) \{
    expect(resultArray\[i\].destination).to.equal(expectedArray\[i\].destination, "Result is not properly sorted.");
    expect(resultArray\[i\].price).to.equal(expectedArray\[i\].price, "Result is not properly sorted.");
    expect(resultArray\[i\].status).to.equal(expectedArray\[i\].status, "Result is not properly sorted.");
\}
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
let resultArray = result(\['Philadelphia\|94.20\|available',
        'New York City\|95.99\|available',
        'New York City\|95.99\|sold',
        'Boston\|126.20\|departed'\],
    'status');

expect(resultArray instanceof Array).to.equal(true, "Output didn't match required type (Array).");

let expectedArray = \[\{destination: 'Philadelphia', price: 94.2, status: 'available'\},
    \{destination: 'New York City', price: 95.99, status: 'available'\},
    \{destination: 'Boston', price: 126.2, status: 'departed'\},
    \{destination: 'New York City', price: 95.99, status: 'sold'\}\];

expect(resultArray.length).to.equal(expectedArray.length, "Result didn't include the required number of tickets.");

for (let i = 0; i \< expectedArray.length; i++) \{
    expect(resultArray\[i\].destination).to.equal(expectedArray\[i\].destination, "Result is not properly sorted.");
    expect(resultArray\[i\].price).to.equal(expectedArray\[i\].price, "Result is not properly sorted.");
    expect(resultArray\[i\].status).to.equal(expectedArray\[i\].status, "Result is not properly sorted.");
\}
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
let resultArray = result(\['Philadelphia\|94.20\|available',
        'New York City\|95.99\|available',
        'New York City\|95.99\|sold',
        'Boston\|126.20\|departed'\],
    'price');

expect(resultArray instanceof Array).to.equal(true, "Output didn't match required type (Array).");

let expectedArray = \[\{destination: 'Philadelphia', price: 94.2, status: 'available'\},
    \{destination: 'New York City', price: 95.99, status: 'available'\},
    \{destination: 'New York City', price: 95.99, status: 'sold'\},
    \{destination: 'Boston', price: 126.2, status: 'departed'\}\];

expect(resultArray.length).to.equal(expectedArray.length, "Result didn't include the required number of tickets.");

for (let i = 0; i \< expectedArray.length; i++) \{
    expect(resultArray\[i\].destination).to.equal(expectedArray\[i\].destination, "Result is not properly sorted.");
    expect(resultArray\[i\].price).to.equal(expectedArray\[i\].price, "Result is not properly sorted.");
    expect(resultArray\[i\].status).to.equal(expectedArray\[i\].status, "Result is not properly sorted.");
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let resultArray = result(\['Philadelphia\|94.20\|available',
        'New York City\|95.99\|available',
        'New York City\|95.99\|sold',
        'Boston\|126.20\|available',
        'Philadelphia\|132.20\|departed',
        'Chicago\|140.20\|available',
        'Dallas\|144.60\|sold',
        'New York City\|206.20\|sold',
        'New York City\|240.20\|departed',
        'New York City\|305.20\|departed'\],
    'destination');

expect(resultArray instanceof Array).to.equal(true, "Output didn't match required type (Array).");

let expectedArray = \[ \{ destination: 'Boston', price: 126.2, status: 'available' \},
    \{ destination: 'Chicago', price: 140.2, status: 'available' \},
    \{ destination: 'Dallas', price: 144.6, status: 'sold' \},
    \{destination: 'New York City', price: 95.99, status: 'available' \},
    \{ destination: 'New York City', price: 95.99, status: 'sold' \},
    \{ destination: 'New York City', price: 206.2, status: 'sold' \},
    \{destination: 'New York City', price: 240.2, status: 'departed' \},
    \{destination: 'New York City', price: 305.2, status: 'departed' \},
    \{ destination: 'Philadelphia', price: 94.2, status: 'available' \},
    \{ destination: 'Philadelphia', price: 132.2, status: 'departed' \} \];

expect(resultArray.length).to.equal(expectedArray.length, "Result didn't include the required number of tickets.");

for (let i = 0; i \< expectedArray.length; i++) \{
    expect(resultArray\[i\].destination).to.equal(expectedArray\[i\].destination, "Result is not properly sorted.");
    expect(resultArray\[i\].price).to.equal(expectedArray\[i\].price, "Result is not properly sorted.");
    expect(resultArray\[i\].status).to.equal(expectedArray\[i\].status, "Result is not properly sorted.");
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let resultArray = result(\['Philadelphia\|94.20\|available',
        'New York City\|95.99\|available',
        'New York City\|95.99\|sold',
        'Boston\|126.20\|available',
        'Philadelphia\|132.20\|departed',
        'Chicago\|140.20\|available',
        'Dallas\|144.60\|sold',
        'New York City\|206.20\|sold',
        'New York City\|240.20\|departed',
        'New York City\|305.20\|departed'\],
    'price');

expect(resultArray instanceof Array).to.equal(true, "Output didn't match required type (Array).");

let expectedArray = \[\{destination: 'Philadelphia', price: 94.2, status: 'available'\},
    \{destination: 'New York City', price: 95.99, status: 'available'\},
    \{destination: 'New York City', price: 95.99, status: 'sold'\},
    \{destination: 'Boston', price: 126.2, status: 'available'\},
    \{destination: 'Philadelphia', price: 132.2, status: 'departed'\},
    \{destination: 'Chicago', price: 140.2, status: 'available'\},
    \{destination: 'Dallas', price: 144.6, status: 'sold'\},
    \{destination: 'New York City', price: 206.2, status: 'sold'\},
    \{destination: 'New York City', price: 240.2, status: 'departed'\},
    \{destination: 'New York City', price: 305.2, status: 'departed'\}\];

expect(resultArray.length).to.equal(expectedArray.length, "Result didn't include the required number of tickets.");

for (let i = 0; i \< expectedArray.length; i++) \{
    expect(resultArray\[i\].destination).to.equal(expectedArray\[i\].destination, "Result is not properly sorted.");
    expect(resultArray\[i\].price).to.equal(expectedArray\[i\].price, "Result is not properly sorted.");
    expect(resultArray\[i\].status).to.equal(expectedArray\[i\].status, "Result is not properly sorted.");
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let resultArray = result(\['Philadelphia\|94.20\|available',
        'New York City\|95.99\|available',
        'New York City\|95.99\|sold',
        'Boston\|126.20\|available',
        'Philadelphia\|132.20\|departed',
        'Chicago\|140.20\|available',
        'Dallas\|144.60\|sold',
        'New York City\|206.20\|sold',
        'New York City\|240.20\|departed',
        'New York City\|305.20\|departed'\],
    'status');

expect(resultArray instanceof Array).to.equal(true, "Output didn't match required type (Array).");

let expectedArray = \[\{destination: 'Philadelphia', price: 94.2, status: 'available'\},
    \{destination: 'New York City', price: 95.99, status: 'available'\},
    \{destination: 'Boston', price: 126.2, status: 'available'\},
    \{destination: 'Chicago', price: 140.2, status: 'available'\},
    \{destination: 'Philadelphia', price: 132.2, status: 'departed'\},
    \{destination: 'New York City', price: 240.2, status: 'departed'\},
    \{destination: 'New York City', price: 305.2, status: 'departed'\},
    \{destination: 'New York City', price: 95.99, status: 'sold'\},
    \{destination: 'Dallas', price: 144.6, status: 'sold'\},
    \{destination: 'New York City', price: 206.2, status: 'sold'\}\];

expect(resultArray.length).to.equal(expectedArray.length, "Result didn't include the required number of tickets.");

for (let i = 0; i \< expectedArray.length; i++) \{
    expect(resultArray\[i\].destination).to.equal(expectedArray\[i\].destination, "Result is not properly sorted.");
    expect(resultArray\[i\].price).to.equal(expectedArray\[i\].price, "Result is not properly sorted.");
    expect(resultArray\[i\].status).to.equal(expectedArray\[i\].status, "Result is not properly sorted.");
\}
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Sorted List

[code-task title="Sorted List" taskId="java-path-js-advanced-objects-and-classes-sorted-list" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput]
[code-editor language=javascript]
```
class List {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Descriere

Implementați o **clasă** care **păstrează** o listă de numere sortate în **ordine crescătoare**.

Trebuie să accepte următoarele funcționalități: 

- `add(elemenent)` - adaugă un element nou colecției 
- `remove(index)` - elimină elementul de la **indexul** specificat 
- `get(index)` - returnează valoarea elementului de la **indexul** specificat
- `size` – returnează numărul de elemente stocate în colecție

**Ordinea corectă** a elementelor trebuie păstrată **în orice moment**, indiferent de operațiunea care este apelată.

**Eliminarea** și **recuperarea** elementelor **nu ar trebui să funcționeze** dacă punctele index furnizate sunt **în afara lungimii** colecției (fie aruncă o eroare, fie nu face nimic).

Rețineți că **dimensiunea** colecției **nu** este o funcție.

# Intrare / Ieșire 

Toate funcțiile care așteaptă **intrare** vor primi date ca **argumente**.

Funcțiile care efectuează **validări** vor fi testate atât cu date **valide, cât și cu date nevalide**.

Orice rezultat așteptat de la o funcție trebuie **returnat** ca rezultat.

**Funcțiile** dvs. `add` și `remove` ar trebui **să returneze** o **instanță de clasă** cu funcționalitatea necesară ca rezultat.

## Transmitere

Transmiteți definiția clasei așa cum este **fără** să o înfășurați în nicio funcție.


## Exemplu

### Exemplu de intrare

```js
let list = new List(); 
list.add(5); 
list.add(6); 
list.add(7); 
console.log(list.get(1));  
list.remove(1); 
console.log(list.get(1)); 
```

### Ieșire 

```
6 
7 
```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
expect(result.prototype.hasOwnProperty('add')).to.equal(true, "Function add() was not found");
expect(result.prototype.hasOwnProperty('remove')).to.equal(true, "Function remove() was not found");
expect(result.prototype.hasOwnProperty('get')).to.equal(true, "Function get() was not found");

// Instantiate and test functionality
var myList = new result();
expect(myList.hasOwnProperty('size')).to.equal(true, "Property size was not found");

myList.add(5);
expect(myList.get(0)).to.equal(5, "Element wasn't added");

myList.add(3);
expect(myList.get(0)).to.equal(3, "Collection wasn't sorted");

myList.remove(0);
expect(myList.get(0)).to.equal(5, "Element wasn't removed");
expect(myList.size).to.equal(1, "Element wasn't removed");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect(result.prototype.hasOwnProperty('add')).to.equal(true, "Function add() was not found");
expect(result.prototype.hasOwnProperty('get')).to.equal(true, "Function get() was not found");

var myList = new result();
expect(myList.hasOwnProperty('size')).to.equal(true, "Property size was not found");

// Generate random list of 20 numbers
var expectedArray = \[\];
for (let i = 0; i \< 20; i++) \{
    expectedArray.push(Math.floor(Math.random() \* 200) - 100);
\}
// Add to collection
for (let i = 0; i \< expectedArray.length; i++) \{
    myList.add(expectedArray\[i\]);
\}
expect(myList.size).to.equal(20, "Elements weren't added");
// Sort array
expectedArray.sort((a, b) =\> a - b);
// Compare with collection
for (let i = 0; i \< expectedArray.length; i++) \{
    expect(myList.get(i)).to.equal(expectedArray\[i\], "Array wasn't sorted");
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
expect(result.prototype.hasOwnProperty('remove')).to.equal(true, "Function remove() was not found");
expect(result.prototype.hasOwnProperty('get')).to.equal(true, "Function get() was not found");

var myList = new result();
expect(myList.hasOwnProperty('size')).to.equal(true, "Property size was not found");

for (let i = 0; i \< 10; i++) \{
    myList.add(i);
\}

myList.remove(9);
expect(myList.size).to.equal(9, "Element wasn't removed");
var expectedArray = \[0, 1, 2, 3, 4, 5, 6, 7, 8\];
// Compare with collection
for (let i = 0; i \< expectedArray.length; i++) \{
    expect(myList.get(i)).to.equal(expectedArray\[i\], "Element wasn't removed");
\}
myList.remove(5);
expect(myList.size).to.equal(8, "Element wasn't removed");
expectedArray = \[0, 1, 2, 3, 4, 6, 7, 8\];
// Compare with collection
for (let i = 0; i \< expectedArray.length; i++) \{
    expect(myList.get(i)).to.equal(expectedArray\[i\], "Element wasn't removed");
\}
myList.remove(0);
expect(myList.size).to.equal(7, "Element wasn't removed");
expectedArray = \[1, 2, 3, 4, 6, 7, 8\];
// Compare with collection
for (let i = 0; i \< expectedArray.length; i++) \{
    expect(myList.get(i)).to.equal(expectedArray\[i\], "Element wasn't removed");
\}
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var myList = new result();
var failsafe = 'failsafe';

try \{
    failsafe = myList.get(0) ? myList.get(0) : 'failsafe';
\} catch (e) \{\}

expect(myList.size).to.equal(0, "Unexpected behaviour with empty collection.");
expect(failsafe).to.equal('failsafe', "Unexpected behaviour with empty collection.");

try \{
    myList.remove(0);
\} catch (e) \{\}

expect(myList.size).to.equal(0, "Unexpected behaviour with empty collection.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var myList = new result();
var failsafe = 'failsafe';

for (let i = 0; i \< 10; i++) \{
    myList.add(i);
\}

try \{
    failsafe = myList.get(-1) ? myList.get(-1) : 'failsafe';
\} catch (e) \{\}
expect(myList.size).to.equal(10, "Unexpected behaviour with negative index.");
expect(failsafe).to.equal('failsafe', "Unexpected behaviour with negative index.");

try \{
    failsafe = myList.get(11) ? myList.get(11) : 'failsafe';
\} catch (e) \{\}
expect(myList.size).to.equal(10, "Unexpected behaviour with negative index.");
expect(failsafe).to.equal('failsafe', "Unexpected behaviour with negative index.");

var expectedArray = \[0, 1, 2, 3, 4, 5, 6, 7, 8, 9\];
try \{
    myList.remove(-1);
\} catch (e) \{\}

expect(myList.size).to.equal(10, "Unexpected behaviour with negative index.");
for (let i = 0; i \< expectedArray.length; i++) \{
    expect(myList.get(i)).to.equal(expectedArray\[i\], "Unexpected behaviour with negative index.");
\}

try \{
    myList.remove(11);
\} catch (e) \{\}

expect(myList.size).to.equal(10, "Unexpected behaviour with negative index.");
for (let i = 0; i \< expectedArray.length; i++) \{
    expect(myList.get(i)).to.equal(expectedArray\[i\], "Unexpected behaviour with negative index.");
\}
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Length Limit

[code-task title="Length Limit" taskId="java-path-js-advanced-objects-and-classes-length-limit" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput]
[code-editor language=javascript]
```
class Stringer {
    // Write your code here
}
```
[/code-editor]
[task-description]
# Descriere

Creați o clasă `Stringer` care conține **un singur șir** și o proprietate **length** (lungime).

Clasa ar trebui inițializată cu un **șir** și o **lungime inițială**.

Ar trebui să păstreze întotdeauna **starea inițială** a **șirului dat**.

Creați cele două proprietăți `innerString` și` innerLength`.

De asemenea, ar trebui să existe funcționalități pentru creșterea și micșorarea proprietății inițiale **length**.

Implementați funcțiile `increase(length)` și `decrease(length)` care manipulează proprietatea lungime cu **valoarea dată**.

Proprietatea length este **o valoare numerică** și nu trebuie să scadă sub **0**.

Nu este nevoie să aruncați erori, dar dacă se face o încercare de scădere sub 0, setați-l la **0**.

De asemenea, ar trebui să implementați o funcționalitate pentru funcția `toString()` care returnează șirul cu care a fost inițializat obiectul.

Dacă lungimea șirului este mai mare decât **proprietatea length**, tăiați-o de la dreapta la stânga, astfel încât să aibă aceeași lungime ca și **proprietatea length** și adăugați **3 puncte** după ea.

Dacă proprietatea length este **0**, returnează **3 puncte**.

## Exemple 

### `lengthLimit.js`

```js
let test = new Stringer("Test", 5); 
console.log(test.toString()); // Test 
 
test.decrease(3); 
console.log(test.toString()); // Te... 
 
test.decrease(5); 
console.log(test.toString()); // ... 
 
test.increase(4);  
console.log(test.toString()); // Test 
```

[hints]
[hint]
Stocați șirul inițial într-o proprietate și nu îl modificați.

La apelarea funcției `toString ()`, trunchiați-o la valoarea dorită și returnați-o. 

[/hint] 
[hint]
Trimiteți soluția doar ca reprezentare de clasă!

Nu este nevoie de IIFE sau de împachetarea claselor. 
[/hint] 
[/hints] 

[/task-description]
[code-io /]
[tests]
[test open]
[input]
let Stringer = result;

expect(typeof Stringer).to.be.equal('function',
            "Class 'Stringer' not found");
[/input]
[output]
yes
[/output]
[/test]
[test open]
[input]
let Stringer = result;
let s = new Stringer("Viktor", 6);
        expect(s.toString()).to.be.equal("Viktor",
            "'Stringer.toString()' function does not work properly");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Stringer = result;
expect(typeof Stringer.constructor).to.be.equal('function',
            "'Stringer.constructor' not found");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Stringer = result;
expect(Stringer.length).to.be.equal(2,
            "'Stringer constructor' should take 1 parameter");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Stringer = result;
expect(typeof Stringer.constructor.name).to.be.equal('string',
            "'Stringer.constructor' not found");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Stringer = result;
let s = new Stringer("Viktor", 6);
expect(s.innerString).to.be.equal("Viktor",
            "'Stringer.innerString' property does not exist, or does not initialize properly");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Stringer = result;
let s = new Stringer("Viktor", 6);
expect(s.innerLength).to.be.equal(6,
            "'Stringer.innerLength' property does not exist, or does not initialize properly");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Stringer = result;
let s = new Stringer("Viktor", 6);
s.decrease(3);
expect(s.innerLength).to.be.equal(3,
            "'Stringer.decrease()' function does not work properly");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Stringer = result;
let s = new Stringer("Viktor", 6);
s.decrease(9);
expect(s.innerLength).to.be.equal(0,
            "'Stringer.decrease()' function does not work properly");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Stringer = result;
let s = new Stringer("Viktor", 6);
s.increase(3);
expect(s.innerLength).to.be.equal(9,
            "'Stringer.increase()' function does not work properly");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Stringer = result;
let s = new Stringer("Viktor", 6);
s.decrease(3);
expect(s.toString()).to.be.equal("Vik...",
            "'Stringer.toString()' function does not work properly");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let Stringer = result;
let s = new Stringer("Viktor", 6);
s.decrease(9);
expect(s.toString()).to.be.equal("...",
            "'Stringer.toString()' function does not work properly");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
