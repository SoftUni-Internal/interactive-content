# Teme Pentru Acasă

[slide hideTitle]
# Problemă: Order Rectangles
[code-task title="Order Rectangles" taskId="js-advanced-object-composition-Order-Rectangles" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]
```
function orderRectangles(input){
  // Scrieți codul dvs. aici
}
```
[/code-editor]
[task-description]
# Descriere

Vi se vor da câteva perechi de **lățimi** și **înălțimi** de dreptunghiuri.

Creați obiecte pentru a reprezenta dreptunghiurile

Obiectele ar trebui să aibă în plus două funcții **area**, care returnează aria dreptunghiului și funcția **compareTo**, care compară dreptunghiul curent cu altul.

Intrarea va veni sub forma unui **tablou de matrice** - fiecare matrice imbricată va conține exact 2 variabile **lățimea** și **înălțimea** dreptunghiului.

Rezultatul trebuie să fie o matrice de obiecte **dreptunghiulare** sortate după **aria lor** în ordinea **descendentă** ca primul criteriu și după **lățimea** în ordinea **descendentă** ca criteriu al doilea.  

## Exemplu
|**Intrare**|**Ieșire** |
|---|---|
|\[\[10,5\], \[5,12\]\]|\[\{width:5, height:12, area:function(), compareTo:function(other)\}, \{width:10, height:5, area:funciton(),compareTo:function(other)\}\]|
|\[\[10,5\], \[3,20\], \[5,12\]\]|\[\{width:5, height:12, area:function(), compareTo:function(other)\}, \{width:3, height:20, area:funciton(),compareTo:function(other)\}, \{width:10, height:5, area:funciton(),compareTo:function(other)\}\]|

[/task-description]
[code-io /]
[tests]
[test]
[input]
let sizes = \[\[10,5\],\[5,12\]\];

let sortedRectangles = result(sizes);

expect(sortedRectangles.length).to.exist;
expect(sortedRectangles).to.have.lengthOf(2,'Returned array had incorrect Length!');

expect(sortedRectangles\[0\].width).to.exist;
expect(sortedRectangles\[0\].height).to.exist;
expect(sortedRectangles\[0\].area).to.exist;
expect(sortedRectangles\[0\].area).to.be.an.instanceOf(Function);

expect(sortedRectangles\[0\].width).to.equal(5,'Width did not match!');
expect(sortedRectangles\[0\].height).to.equal(12,'Height did not match!');
expect(sortedRectangles\[0\].area()).to.equal(60,'Area did not match!');

expect(sortedRectangles\[1\].width).to.exist;
expect(sortedRectangles\[1\].height).to.exist;
expect(sortedRectangles\[1\].area).to.exist;
expect(sortedRectangles\[1\].area).to.be.an.instanceOf(Function);

expect(sortedRectangles\[1\].width).to.equal(10,'Width did not match!');
expect(sortedRectangles\[1\].height).to.equal(5,'Height did not match!');
expect(sortedRectangles\[1\].area()).to.equal(50,'Area did not match!');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let sizes = \[\[10,5\],\[3,20\],\[5,12\]\];

let sortedRectangles = result(sizes);

expect(sortedRectangles.length).to.exist;
expect(sortedRectangles).to.have.lengthOf(3,'Returned array had incorrect Length!');

expect(sortedRectangles\[0\].width).to.exist;
expect(sortedRectangles\[0\].height).to.exist;
expect(sortedRectangles\[0\].area).to.exist;
expect(sortedRectangles\[0\].area).to.be.an.instanceOf(Function);

expect(sortedRectangles\[0\].width).to.equal(5,'Width did not match!');
expect(sortedRectangles\[0\].height).to.equal(12,'Height did not match!');
expect(sortedRectangles\[0\].area()).to.equal(60,'Area did not match!');

expect(sortedRectangles\[1\].width).to.exist;
expect(sortedRectangles\[1\].height).to.exist;
expect(sortedRectangles\[1\].area).to.exist;
expect(sortedRectangles\[1\].area).to.be.an.instanceOf(Function);

expect(sortedRectangles\[1\].width).to.equal(3,'Width did not match!');
expect(sortedRectangles\[1\].height).to.equal(20,'Height did not match!');
expect(sortedRectangles\[1\].area()).to.equal(60,'Area did not match!');

expect(sortedRectangles\[2\].width).to.exist;
expect(sortedRectangles\[2\].height).to.exist;
expect(sortedRectangles\[2\].area).to.exist;
expect(sortedRectangles\[2\].area).to.be.an.instanceOf(Function);

expect(sortedRectangles\[2\].width).to.equal(10,'Width did not match!');
expect(sortedRectangles\[2\].height).to.equal(5,'Height did not match!');
expect(sortedRectangles\[2\].area()).to.equal(50,'Area did not match!');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let sizes = \[\[1,1\],\[15,1\],\[1,1\],\[1,15\],\[7,7\],\[25,3\],\[13,3\],\[15,5\]\];

let sortedRectangles = result(sizes);

expect(sortedRectangles.length).to.exist;
expect(sortedRectangles).to.have.lengthOf(8,'Returned array had incorrect Length!');

expect(sortedRectangles\[0\].width).to.equal(25,'Width did not match!');
expect(sortedRectangles\[0\].height).to.equal(3,'Height did not match!');
expect(sortedRectangles\[0\].area()).to.equal(75,'Area did not match!');

expect(sortedRectangles\[1\].width).to.equal(15,'Width did not match!');
expect(sortedRectangles\[1\].height).to.equal(5,'Height did not match!');
expect(sortedRectangles\[1\].area()).to.equal(75,'Area did not match!');

expect(sortedRectangles\[2\].width).to.equal(7,'Width did not match!');
expect(sortedRectangles\[2\].height).to.equal(7,'Height did not match!');
expect(sortedRectangles\[2\].area()).to.equal(49,'Area did not match!');

expect(sortedRectangles\[3\].width).to.equal(13,'Width did not match!');
expect(sortedRectangles\[3\].height).to.equal(3,'Height did not match!');
expect(sortedRectangles\[3\].area()).to.equal(39,'Area did not match!');

expect(sortedRectangles\[4\].width).to.equal(15,'Width did not match!');
expect(sortedRectangles\[4\].height).to.equal(1,'Height did not match!');
expect(sortedRectangles\[4\].area()).to.equal(15,'Area did not match!');

expect(sortedRectangles\[5\].width).to.equal(1,'Width did not match!');
expect(sortedRectangles\[5\].height).to.equal(15,'Height did not match!');
expect(sortedRectangles\[5\].area()).to.equal(15,'Area did not match!');

expect(sortedRectangles\[6\].width).to.equal(1,'Width did not match!');
expect(sortedRectangles\[6\].height).to.equal(1,'Height did not match!');
expect(sortedRectangles\[6\].area()).to.equal(1,'Area did not match!');

expect(sortedRectangles\[7\].width).to.equal(1,'Width did not match!');
expect(sortedRectangles\[7\].height).to.equal(1,'Height did not match!');
expect(sortedRectangles\[7\].area()).to.equal(1,'Area did not match!');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let sizes = \[\[1,20\],\[20,1\],\[5,3\],\[5,3\]\];

let sortedRectangles = result(sizes);

expect(sortedRectangles.length).to.exist;
expect(sortedRectangles).to.have.lengthOf(4,'Returned array had incorrect Length!');

expect(sortedRectangles\[0\].compareTo).to.be.an.instanceOf(Function);
expect(sortedRectangles\[1\].compareTo).to.be.an.instanceOf(Function);
expect(sortedRectangles\[2\].compareTo).to.be.an.instanceOf(Function);

expect(sortedRectangles\[0\].compareTo(sortedRectangles\[1\])).to.be.below(0,'CompareTo function did not compare correctly or elements were not sorted');
expect(sortedRectangles\[1\].compareTo(sortedRectangles\[0\])).to.be.above(0,'CompareTo function did not compare correctly or elements were not sorted');

expect(sortedRectangles\[1\].compareTo(sortedRectangles\[2\])).to.be.below(0,'CompareTo function did not compare correctly or elements were not sorted');
expect(sortedRectangles\[2\].compareTo(sortedRectangles\[1\])).to.be.above(0,'CompareTo function did not compare correctly or elements were not sorted');

expect(sortedRectangles\[2\].compareTo(sortedRectangles\[3\])).to.equal(0,'CompareTo function did not compare correctly or elements were not sorted');
expect(sortedRectangles\[2\].compareTo(sortedRectangles\[2\])).to.equal(0,'CompareTo function did not compare correctly or elements were not sorted');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let sizes = \[\[3, 4\], \[5, 3\], \[3, 4\], \[3, 5\], \[12, 1\]\];

let sortedRectangles = result(sizes);


expect(sortedRectangles).to.have.lengthOf(5,'Returned array had incorrect Length!');

expect(sortedRectangles\[0\].width).to.equal(5,'Width did not match!');
expect(sortedRectangles\[0\].height).to.equal(3,'Height did not match!');
expect(sortedRectangles\[0\].area()).to.equal(15,'Area did not match!');

expect(sortedRectangles\[1\].width).to.equal(3,'Width did not match!');
expect(sortedRectangles\[1\].height).to.equal(5,'Height did not match!');
expect(sortedRectangles\[1\].area()).to.equal(15,'Area did not match!');

expect(sortedRectangles\[2\].width).to.equal(12,'Width did not match!');
expect(sortedRectangles\[2\].height).to.equal(1,'Height did not match!');
expect(sortedRectangles\[2\].area()).to.equal(12,'Area did not match!');

expect(sortedRectangles\[3\].width).to.equal(3,'Width did not match!');
expect(sortedRectangles\[3\].height).to.equal(4,'Height did not match!');
expect(sortedRectangles\[3\].area()).to.equal(12,'Area did not match!');

expect(sortedRectangles\[4\].width).to.equal(3,'Width did not match!');
expect(sortedRectangles\[4\].height).to.equal(4,'Height did not match!');
expect(sortedRectangles\[4\].area()).to.equal(12,'Area did not match!');
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Lista Procesor
[code-task title="List Processor" taskId="js-advanced-object-composition-List-Processor" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]
```
function listProcessor(input){
  // Scrieți codul dvs. aici
}
```
[/code-editor]
[task-description]
# Descriere

Folosind o închidere, creați un obiect interior pentru a procesa comenzile listei.

Comenzile acceptate ar trebui să fie următoarele:
- `add <string>` adaugă următorul șir într-o colecție interioară
- `remove <string>` elimină toate aparițiile furnizate de `<string>` din colecția interioară
- `print` tipărește toate elementele colecției interioare unite prin "**,**"

Intrarea va fi sub formă de matrice de șiruri - fiecare șir reprezintă o comandă care trebuie executată din motorul de executare a comenzilor.

## Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
|\['add hello', 'add again', 'remove hello', 'add again', 'print'\]| again,again |


[/task-description]
[code-io /]
[tests]
[test open]
[input]
let output = "";

console.log = function (buff) \{
    output += buff;
\};

let commands = \['add hello', 'add again', 'remove hello', 'add again', 'print'\];
result(commands);

expect(output).to.equal('again,again', 'Expected output did not match!');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let output = "";
console.log = function (buff)\{
    output += buff;
\};

let commands = \['add stallone', 'remove stallone', 'remove stallone', 'print'\];
result(commands);

expect(output).to.equal('','Expected output did not match!');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let output = "";
console.log = function (buff)\{
    output += buff;
\};

let commands = \['add peter', 'add george', 'add peter', 'remove peter','print'\];
result(commands);

expect(output).to.equal('george','Expected output did not match!');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let output = "";
console.log = function (buff)\{
    output += buff;
    output += '\n';
\};

let commands = \['add JSFundamentals', 'print', 'add JSAdvanced', 'print','add JSApplications','print'\];
result(commands);

expect(output).to.equal('JSFundamentals\nJSFundamentals,JSAdvanced\nJSFundamentals,JSAdvanced,JSApplications\n','Expected output did not match!');
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Object Factory
[code-task title="Object Factory" taskId="js-advanced-object-composition-Object-Factory" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]
```
function objectFactory(input){
  // Scrieți codul dvs. aici
}
```
[/code-editor]
[task-description]
# Descriere

Scrieți o funcție care poate compune obiecte.

Veți primi o matrice și obiectivul dvs. este să creați un nou obiect cu toate proprietățile unice care vi s-au dat.

Ar trebui să imprimați obiectul nou creat
 

## Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
|'\[\{"canMove": true\},\{"canMove":true, "doors": 4\},\{"capacity": 5\}\]'| \{ canMove: true, doors: 4, capacity: 5 \} |
|'\[\{"canFly": true\},\{"canMove":true, "doors": 4\},\{"capacity": 255\},\{"canFly":true, "canLand": true\}\]'| \{ canFly: true, canMove: true, doors: 4, capacity: 255, canLand: true \} |

[/task-description]
[code-io /]
[tests]
[test]
[input]
let composer = result;
let actual = composer(\`\[\{"prop1": 1\},\{"prop2":2\},\{"prop3":3\}\]\`);
let expected = \{prop1:1,prop2:2,prop3:3\};
assert.deepEqual(actual,expected);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let composer = result;
let actual = composer(\`\[\{"canFly": true\},\{"canMove":true, "doors": 4\},\{"capacity": 255\},\{"canFly":true, "canLand": true\}\]\`);
let expected = \{ canFly: true, canMove: true, doors: 4, capacity: 255, canLand: true \};
assert.deepEqual(actual,expected);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let composer = result;
let actual = composer('\[\]');
let expected = \{\};
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
# Problemă: Cars
[code-task title="Cars" taskId="js-advanced-object-composition-Cars" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]
```
function cars(input){
  // Scrieți codul dvs. aici
}
```
[/code-editor]
[task-description]
# Descriere

Scrieți o închidere care poate crea și modifica obiecte

Toate obiectele create ar trebui păstrate și să fie accesibile după nume. 

Ar trebui să acceptați următoarele funcționalități:
- `create <name>` creează un obiect cu un `<name>`dat
- `create <name> inherits <parentName>` creează un obiect cu un `<name>` dat, care moștenește de la obiectul primar `<parentName>`
- `set <name> <key> <value>` setează proprietatea cu cheia egală cu `<key>` la `<value>` in obiectul furnizat cu `<name>`
- `print <name>` tipărește obiectul cu `<name>` în formatul `<key1>:<value1>,<key2>:<value2>…`, tipărirea ar trebui să tipărească toate proprietățile moștenite de la obiectele primare. Proprietățile moștenite ar trebui să vină după proprietăți proprii

Intrarea va fi sub formă de matrice de șiruri, fiecare șir reprezintă o comandă care trebuie executată de la închiderea dvs.

Toate comenzile vor fi întotdeauna valabile. 
  
Nu va exista nicio intrare inexistentă sau incorectă.

## Exemplu
|**Intrare**|**Ieșire** |
| --- | --- |
|\['create c1', 'create c2 inherit c1', 'set c1 color red', 'set c2 model new', 'print c1', 'print c2'\]| color\:red |
||model\:new\, color\:red|



[/task-description]
[code-io /]
[tests]
[test]
[input]
let commands = \['create c1','create c2 inherit c1','set c1 color red','set c2 model new','print c1','print c2'\];

let text = "";
console.log = function (buff) \{
    text += buff;
    text += '\n';
\};

result(commands);

expect(text).to.equal('color:red\nmodel:new, color:red\n', 'The expected output did not match!');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let commands = \['create pesho','create gosho inherit pesho','create stamat inherit gosho','set pesho rank number1','set gosho nick goshko','print stamat'\];

let text = "";
console.log = function (buff) \{
    text += buff;
    text += '\n';
\};

result(commands);
expect(text).to.equal('nick:goshko, rank:number1\n', 'The expected output did not match!');
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Sum
[code-task title="Sum" taskId="js-advanced-object-composition-Sum" executionType="tests-execution" executionStrategy="javascript-js-dom-unit-tests" requiresInput] [code-editor language=javascript]

```
function sum(){
  // Scrieți codul dvs. aici
}
```
[/code-editor]
[task-description]
# Descriere

Creați o funcție care returnează un obiect care poate modifica DOM.

Obiectul returnat ar trebui să accepte următoarele funcționalități:
- `init(selector1, selector2, resultSelector)` inițializează obiectul pentru a lucra cu elementele corespunzătoare selectorilor furnizați
- `add()` adaugă valoarea numerică a elementului corespunzător selectorului1 la valoarea numerică a elementului corespunzător selectorului2 și apoi scrie rezultatul în elementul corespunzător rezultatuluiSelector
- `subtract()` scade valoarea numerică a elementului corespunzător selectorului2 din valoarea numerică a elementului corespunzător selectorului1 și apoi scrie rezultatul în elementul corespunzător rezultatuluiSelector

## Intrare
Funcția dvs. nu trebuie să furnizeze decât un obiect.

## Intrare
Funcția dvs. ar trebui să returneze un obiect care îndeplinește cerințele specificate.

## Constrângeri

- Toate comenzile vor fi întotdeauna valabile, nu va exista o intrare inexistentă sau incorectă

- Toți selectorii vor indica un singur element de text

## HTML
Vi se oferă următorul cod HTML în scopul testării:

```js
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <title>Title</title>
   </head>
   <body>
      <input type="text" id="num1" />
      <input type="text" id="num2" />
      <input type="text" id="result" readonly />
      <br>
      <button id="sumButton">
      Sum</button>
      <button id="subtractButton">
      Subtract</button>
   </body>
</html>
```

[/task-description]
[code-io /]
[tests]
[test]
[input]
document.body.innerHTML = '\<input type="text" id="num1" /\>' +
    '\<input type="text" id="num2" /\>' +
    '\<input type="text" id="result" readonly /\>';

let obj = result();

obj.init("\#num1","\#num2",'\#result');
let num1 = \\$('\#num1');
let num2 = \\$('\#num2');
let res = \\$('\#result');
num1.val(5);
num2.val(3);
obj.add();
expect(res.val()).to.equal('8',"Incorrect result");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
document.body.innerHTML = '\<input type="text" id="num1" /\>' +
    '\<input type="text" id="num2" /\>' +
    '\<input type="text" id="result" readonly /\>';

let obj = result();

obj.init("\#num1","\#num2",'\#result');
let num1 = \\$('\#num1');
let num2 = \\$('\#num2');
let res = \\$('\#result');
num1.val(-13);
num2.val(5);
obj.subtract();
expect(res.val()).to.equal('-18',"Incorrect result");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Heroes
[code-task title="Heroes" taskId="js-advanced-object-composition-Heroes" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]
```
function heroes(){
  // Scrieți codul dvs. aici
}
```
[/code-editor]
[task-description]
# Descriere

Creați o funcție care returnează un obiect cu 2 metode "**mage**" și "**fighter**".

Acest obiect ar trebui să poată crea eroi "**fighters**" and "**mage**". 

Fiecare erou are o stare.

Luptătorii au "**name**", `health = 100` și `stamina = 100` ași fiecare luptător se poate lupta.

Când luptătorul luptă, rezistența acestuia scade cu 1 și următorul mesaj este imprimat pe consolă:

"\{**fighter's name**\} **slashes at the foe!**"

Magii au "**name**", `health = 100` și `mana = 100`. 

Fiecare mag poate face vrăji. Când se lansează o vrăjeală, mana magului scade cu 1 și următorul mesaj este imprimat pe consolă:

"\{**mage's name**\} **cast** \{**spell**\}"


# Exemplu

## Intrare

```js
let create = solve();
const scorcher = create.mage('Scorcher');
scorcher.cast('fireball');
scorcher.cast('thunder');
scorcher.cast('light');
const scorcher2 = create.fighter('Scorcher 2');
scorcher2.fight();
console.log(scorcher2.stamina);
console.log(scorcher.mana);
```

## Ieșire

```
Scorcher cast fireball
Scorcher cast thunder
Scorcher cast light
Scorcher 2 slashes at the foe\!
99
97
```

[/task-description]
[code-io /]
[tests]
[test]
[input]
let create = result();
const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight();
let act = scorcher2.stamina;
let exp = 99;
assert.equal(act,exp,"2");

let act1 = scorcher2.name;
let exp1 = "Scorcher 2"
assert.equal(act1,exp1);
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let create = result\(\);
const scorcher = create.mage\("Scorcher"\);
scorcher\.cast\("fireball"\);
scorcher\.cast\("thunder"\);
scorcher\.cast\("light"\);

let act4 = scorcher\.mana;
let exp4 = 97;
assert\.equal\(act4,exp4,"4"\);
let act1 = scorcher\.health;
assert\.equal\(100,act1\);
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Construction Crew
[code-task title="Construction Crew" taskId="js-advanced-object-composition-Construction-Crew" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]
```
function constructionCrew(input){
  // Scrieți codul dvs. aici
}
```
[/code-editor]
[task-description]
# Descriere

Scrieți un program care primește un obiect lucrător ca parametru și îi modifică proprietățile.

Lucrătorii au următoarea structură:
```
{
    weight: Number,
    experience: Number,
    levelOfHydrated: Number,
    dizziness: Boolean
}
```

Greutatea este exprimată în kilograme, experiența în ani, iar "**levelOfHydrated**" în mililitri.

Dacă primiți un lucrător amețeală căruia este setată la **true** înseamnă că trebuie să bea puțină apă pentru a putea funcționa corect.

Cantitatea necesară este 0\.1ml pe kilogram pe an de experiență.

Cantitatea necesară trebuie adăugată la cantitatea existentă.

Odată ce apa este administrată, schimbați proprietatea de amețeală la **false**.

Lucrătorii care nu au amețeli nu trebuie modificați în niciun fel. Întoarce-le așa cum sunt.

# Exemple

## Exemplu 1 

## Intrare
```
{
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}
```

## Ieșire
```
{
    weight: 80,
    experience: 1,
    levelOfHydrated: 8,
    dizziness: false
}
```

## Exemplu 2

## Intrare
```
{
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}
```
  
## Ieșire 
```
{
    weight: 120,
    experience: 20,
    levelOfHydrated: 440,
    dizziness: false
}
```

## Exemplu 3

## Intrare  
```
{
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}
```

## Ieșire
```
{
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}
```

[/task-description]
[code-io /]
[tests]
[test]
[input]
let worker = result(\{ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true \}
);

expect(worker.weight).to.equal(80, "Worker weight was modified.");
expect(worker.experience).to.equal(1, "Worker experience was modified.");
expect(worker.levelOfHydrated).to.equal(8, "Worker wasn't given enough water.");
expect(worker.dizziness).to.equal(false, "Worker's dizziness is still true.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let worker = result(\{ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true \}
);

expect(worker.weight).to.equal(120, "Worker weight was modified.");
expect(worker.experience).to.equal(20, "Worker experience was modified.");
expect(worker.levelOfHydrated).to.equal(440, "Worker wasn't given enough water.");
expect(worker.dizziness).to.equal(false, "Worker's dizziness is still true");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let worker = result(\{ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false \}
);

expect(worker.weight).to.equal(95, "Worker weight was modified.");
expect(worker.experience).to.equal(3, "Worker experience was modified.");
expect(worker.levelOfHydrated).to.equal(0, "Worker was given water.");
expect(worker.dizziness).to.equal(false, "Worker's dizziness is still true.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let worker = result(\{ weight: 60,
    experience: 5,
    levelOfHydrated: 600,
    dizziness: false \}
);

expect(worker.weight).to.equal(60, "Worker weight was modified.");
expect(worker.experience).to.equal(5, "Worker experience was modified.");
expect(worker.levelOfHydrated).to.equal(600, "Worker was given water.");
expect(worker.dizziness).to.equal(false, "Worker's dizziness is still true");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]

[/slide]

[slide hideTitle]
# Problemă: Car Factory
[code-task title="Car Factory" taskId="js-advanced-Object-Composition-Car-Factory" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput]
[code-editor language=javascript]
```
function carFactory(input){
  // Scrieți codul dvs. aici
}
```
[/code-editor]
[task-description]

# Descriere

Scrieți un program care asamblează o mașină în funcție de cerințele date din componentele existente.

Clientul va plasa o comandă sub forma unui obiect care descrie mașina

Trebuie să stabiliți ce părți să utilizați pentru a îndeplini comanda clientului. 

Aveți următoarele piese în depozit:

Un motor are putere și volum. Puterea este în cai de putere, iar volumul este în centimetri cubi.

Ambele valori sunt numere. Când selectați un motor, alegeți cel mai mic posibil care încă îndeplinește cerințele.

"**Small engine:** \{ **power: 90, volume: 1800** \}"

"**Normal engine:** \{ **power: 120, volume: 2400** \}"

"**Monster engine:** \{ **power: 200, volume: 3500** \}"

O trăsură are tip și culoarea.

Ambele valori sunt șiruri. Aveți la dispoziție două tipuri de trăsuri și le puteți vopsi în orice culoare.

`Hatchback: { type: 'hatchback', color: <as required> }`

`Coupe: { type: 'coupe', color: <as required> }`

Roțile vor fi reprezentate printr-o serie de 4 numere, fiecare număr reprezentă diametrul roții în inci.

Mărimea poate fi doar un număr impar. Rotunjiți în jos pe toate cerințele pe care le primiți la cel mai apropiat număr impar.

Veți primi un obiect ca argument pentru funcția dvs.

Formatul va fi după cum urmează:

```js
{
    model: <model name>,
    power: <minimum power>,
    color: <color>,
    carriage: <carriage type>,
    wheelsize: <size>
}
```

# Exemple

## Exemplu 1

## Intrare
```
{
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
```

## Ieșire
```
{
    model: 'VW Golf II',
    engine: {
        power: 90,
        volume: 1800
    },
    carriage: {
        type: 'hatchback',
        color: 'blue'
    },
    wheels: [13, 13, 13, 13]
}
```

## Exemplu 2

## Intrare
```
{
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
```

## Ieșire
```
{
    model: 'Opel Vectra',
    engine: {
        power: 120,
        volume: 2400
    },
    carriage: {
        type: 'coupe',
        color: 'grey'
    },
    wheels: [17, 17, 17, 17]
}
```

[/task-description]
[code-io /]
[tests]
[test]
[input]
let input = \{
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
\};

let expected = \{
    model: 'VW Golf II',
    engine: \{
        power: 90,
        volume: 1800
    \},
    carriage: \{
        type: 'hatchback',
        color: 'blue'
    \},
    wheels: \[13, 13, 13, 13\]
\};

let output = result(input);

expect(output.model).to.equal(expected.model, "Car model didn't match.");
expect(output.engine.power).to.equal(expected.engine.power, "Engine power rating didn't match.");
expect(output.engine.volume).to.equal(expected.engine.volume, "Engine volume didn't match.");
expect(output.carriage.type).to.equal(expected.carriage.type, "Carriage type didn't match.");
expect(output.carriage.color).to.equal(expected.carriage.color, "Car color type didn't match.");
expect(output.wheels.length).to.equal(4, "Number of wheels didn't match.");
expect(output.wheels\[0\]).to.equal(expected.wheels\[0\], "Wheel size didn't match.");
expect(output.wheels\[0\] == output.wheels\[1\] &&
    output.wheels\[0\] == output.wheels\[2\] &&
    output.wheels\[0\] == output.wheels\[3\]).to.equal(true, "Wheel size didn't match.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let input = \{
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
\};

let expected = \{
    model: 'Opel Vectra',
    engine: \{
        power: 120,
        volume: 2400
    \},
    carriage: \{
        type: 'coupe',
        color: 'grey'
    \},
    wheels: \[17, 17, 17, 17\]
\};

let output = result(input);

expect(output.model).to.equal(expected.model, "Car model didn't match.");
expect(output.engine.power).to.equal(expected.engine.power, "Engine power rating didn't match.");
expect(output.engine.volume).to.equal(expected.engine.volume, "Engine volume didn't match.");
expect(output.carriage.type).to.equal(expected.carriage.type, "Carriage type didn't match.");
expect(output.carriage.color).to.equal(expected.carriage.color, "Car color type didn't match.");
expect(output.wheels.length).to.equal(4, "Number of wheels didn't match.");
expect(output.wheels\[0\]).to.equal(expected.wheels\[0\], "Wheel size didn't match.");
expect(output.wheels\[0\] == output.wheels\[1\] &&
    output.wheels\[0\] == output.wheels\[2\] &&
    output.wheels\[0\] == output.wheels\[3\]).to.equal(true, "Wheel size didn't match.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let input = \{
    model: 'Ferrari',
    power: 200,
    color: 'red',
    carriage: 'coupe',
    wheelsize: 21
\};

let expected = \{
    model: 'Ferrari',
    engine: \{power: 200, volume: 3500\},
    carriage: \{type: 'coupe', color: 'red'\},
    wheels: \[21, 21, 21, 21\]
\};

let output = result(input);

expect(output.model).to.equal(expected.model, "Car model didn't match.");
expect(output.engine.power).to.equal(expected.engine.power, "Engine power rating didn't match.");
expect(output.engine.volume).to.equal(expected.engine.volume, "Engine volume didn't match.");
expect(output.carriage.type).to.equal(expected.carriage.type, "Carriage type didn't match.");
expect(output.carriage.color).to.equal(expected.carriage.color, "Car color type didn't match.");
expect(output.wheels.length).to.equal(4, "Number of wheels didn't match.");
expect(output.wheels\[0\]).to.equal(expected.wheels\[0\], "Wheel size didn't match.");
expect(output.wheels\[0\] == output.wheels\[1\] &&
    output.wheels\[0\] == output.wheels\[2\] &&
    output.wheels\[0\] == output.wheels\[3\]).to.equal(true, "Wheel size didn't match.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
let input = \{
    model: 'Brichka',
    power: 65,
    color: 'white',
    carriage: 'hatchback',
    wheelsize: 16
\};

let expected = \{
    model: 'Brichka',
    engine: \{power: 90, volume: 1800\},
    carriage: \{type: 'hatchback', color: 'white'\},
    wheels: \[15, 15, 15, 15\]
\};

let output = result(input);

expect(output.model).to.equal(expected.model, "Car model didn't match.");
expect(output.engine.power).to.equal(expected.engine.power, "Engine power rating didn't match.");
expect(output.engine.volume).to.equal(expected.engine.volume, "Engine volume didn't match.");
expect(output.carriage.type).to.equal(expected.carriage.type, "Carriage type didn't match.");
expect(output.carriage.color).to.equal(expected.carriage.color, "Car color type didn't match.");
expect(output.wheels.length).to.equal(4, "Number of wheels didn't match.");
expect(output.wheels\[0\]).to.equal(expected.wheels\[0\], "Wheel size didn't match.");
expect(output.wheels\[0\] == output.wheels\[1\] &&
    output.wheels\[0\] == output.wheels\[2\] &&
    output.wheels\[0\] == output.wheels\[3\]).to.equal(true, "Wheel size didn't match.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]

[/slide]

[slide hideTitle]

# Problemă: Extensible Objec
[code-task title="Extensible Object" taskId="js-advanced-object-composition-Extensible-Object" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]

```
function extensibleObject(){
  // Scrieți codul dvs. aici
}
```
[/code-editor]
[task-description]
# Descriere

Creați un obiect care poate clona funcționalitatea unui alt obiect în sine.

Implementați o funcție de extindere\(șablon\) care ar copia toate proprietățile șablonului la obiectul primar și dacă proprietatea este o funcție, adăugați-o în schimb la prototipul obiectului.

Codul dvs. ar trebui să returneze instanța obiectului extensibil.

Funcția `extend()` a obiectului dvs. va primi un obiect valid ca parametru de intrare și nu are ieșire.

Pentru a obține acces la prototipul unei instanțe, utilizați funcția `Object.getPrototypeOf()` function. 

Pentru a executa o funcție partajată între toate instanțele, va trebui să fie atașată la prototip în loc de instanță.

## Exemplu
**Extensible Object**

```js
myObj: {
  __proto__: {}
  extend: function () {…}
}
```

**Template Object**

```js
template: {
  extensionMethod: function () {…},
  extensionProperty: 'someString'
}
```

**Resulting Object**

```js
myObj: {
  __proto__: {
    extensionMethod: function () {…}
  },
  extend: function () {…},
  extensionProperty: 'someString'
}
```

[/task-description]
[code-io /]
[tests]
[test]
[input]
var template = \{
    extensionMethod: function () \{
        console.log("From extension method")
    \}
\};

var testObject = result();
testObject.extend(template);
expect(Object.getPrototypeOf(testObject).hasOwnProperty('extensionMethod')).to.equal(true, "Object's prototype was not extended");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var template = \{
    extensionMethod: function () \{
        return 5;
    \}
\};

var testObject = result();
testObject.extend(template);
expect(testObject.extensionMethod()).to.equal(5, "Extension method wasn't cloned correctly.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var template = \{
    health: 100,
    mana: 50
\};

var testObject = result();
testObject.extend(template);
expect(testObject.hasOwnProperty('health')).to.equal(true, "Template properties were not cloned correctly.");
expect(testObject.hasOwnProperty('mana')).to.equal(true, "Template properties were not cloned correctly.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var template = \{
    fight: function(target) \{ return \`object fights with \\$\{target\}\` \},
    health: 100,
    mana: 50
\};

var testObject = result();
testObject.extend(template);
expect(Object.getPrototypeOf(testObject).hasOwnProperty('fight')).to.equal(true, "Object's prototype was not extended");
expect(testObject.hasOwnProperty('health')).to.equal(true, "Template properties were not cloned correctly.");
expect(testObject.hasOwnProperty('mana')).to.equal(true, "Template properties were not cloned correctly.");
expect(testObject.fight('me')).to.equal('object fights with me', "Extension method wasn't cloned correctly.");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var template = \{
    name: '',
    setName: function (newValue) \{
        this.name = newValue;
    \},
    getName: function () \{
        return this.name;
    \}
\};

var testObject = result();
testObject.extend(template);
expect(testObject.hasOwnProperty('name')).to.equal(true, "Template properties were not cloned correctly.");
testObject.setName('new name');
expect(testObject.getName()).to.equal('new name', "Extension method didn't work with local context.");
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]

[/slide]

[slide hideTitle]

# Problemă: String Extension
[code-task title="String Extension" taskId="js-advanced-object-composition-String-Extension" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]
```
function stringExtension(){
  // Scrieți codul dvs. aici
}
```
[/code-editor]
[task-description]
# Descriere

Extindeți obiectul String încorporat cu funcționalități suplimentare. 

Implementați următoarele funcții:

- `ensureStart(str)` - adăugați str la începutul unui șir, numai dacă nu este deja prezent

- `ensureEnd(str)` - adăugați str la sfârșitul unui șir, numai dacă nu este deja prezent

- `isEmpty()` - returnează **true** dacă șirul este gol, **false** în caz contrar

- `truncate(n)` - trunchiază șirul la **n** caractere prin eliminarea cuvintelor și adaugă o elipsă \(trei puncte \) la final

Dacă un șir are mai puțin de **n** caractere, întoarceți același șir.

Dacă este mai lung, împărțiți șirul unde apare spațiul și adăugați o elipsă pentru ca lungimea totală să fie mai mică sau egală cu **n**.

Dacă nu există spațiu nicăieri în șir, returnați n \- 3 caractere și o elipsă.

Dacă n este mai mic de 4, returnați **n** suma perioadelor

- `format(string, …params)` - metodă statică pentru a înlocui substituenții cu parametri

Un substituent este un număr înconjurat de bucle(curly braces). 

Dacă indexul parametrilor nu poate fi găsit pentru un anumit substituent, nu îl modificați.

Rețineți că metodele statice sunt atașate obiectului String în locul prototipului său.

Vedeți exemplele pentru mai multe informatii.

Codul dvs. principal ar trebui să fie structurat ca un IIFE fără intrare sau ieșire.

Ar trebui să modifice în schimb prototipul String existent.

# Exemplu

## Intrare

```js
let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
  'quick', 'brown');
str = String.format('jumps {0} {1}',
  'dog');
```

## Ieșire

'my string'
'hello my string'
'hello my string'
'hello my...'
'hello...'
'h...'
'..'
'The quick brown fox'
'jumps dog \{1\}'

[/task-description]
[code-io /]
[tests]
[test open]
[input]
expect(String.prototype.hasOwnProperty('ensureStart')).to.equal(true, "Couldn't find ensureStart() function");
expect(String.prototype.hasOwnProperty('ensureEnd')).to.equal(true, "Couldn't find ensureEnd() function");
expect(String.prototype.hasOwnProperty('isEmpty')).to.equal(true, "Couldn't find isEmpty() function");
expect(String.prototype.hasOwnProperty('truncate')).to.equal(true, "Couldn't find truncate() function");
expect(String.hasOwnProperty('format')).to.equal(true, "Couldn't find format() function");
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var testString = 'quick brown fox jumps over the lazy dog';
expect(String.prototype.hasOwnProperty('ensureStart')).to.equal(true, "Couldn't find ensureStart() function");
var answer = testString.ensureStart('the ');
expect(answer).to.equal('the quick brown fox jumps over the lazy dog', 'Incorrect ensureStart() functionality');
answer = answer.ensureStart('the ');
expect(answer).to.equal('the quick brown fox jumps over the lazy dog', 'Ignored existing start of string');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var testString = 'the quick brown fox jumps over the lazy';
expect(String.prototype.hasOwnProperty('ensureEnd')).to.equal(true, "Couldn't find ensureEnd() function");
var answer = testString.ensureEnd(' dog');
expect(answer).to.equal('the quick brown fox jumps over the lazy dog', 'Incorrect ensureEnd() functionality');
answer = answer.ensureEnd(' dog');
expect(answer).to.equal('the quick brown fox jumps over the lazy dog', 'Ignored existing end of string');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var testString = 'the quick brown fox jumps over the lazy dog';
expect(String.prototype.hasOwnProperty('isEmpty')).to.equal(true, "Couldn't find isEmpty() function");
expect(testString.isEmpty()).to.equal(false, 'Incorrect isEmpty() functionality');
''.isEmpty().should.be.true;
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var testString = 'the quick brown fox jumps over the lazy dog';
expect(String.prototype.hasOwnProperty('truncate')).to.equal(true, "Couldn't find truncate() function");
expect(testString.truncate(6)).to.equal('the...', 'Incorrect truncate() functionality');
expect(testString.truncate(12)).to.equal('the quick...', 'Incorrect truncate() functionality');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var testString = 'the quick brown fox jumps over the lazy dog';
expect(String.prototype.hasOwnProperty('truncate')).to.equal(true, "Couldn't find truncate() function");
expect(testString.truncate(10)).to.equal('the...', 'Incorrect truncate() functionality 1');
expect(testString.truncate(25)).to.equal('the quick brown fox...', 'Incorrect truncate() functionality 2');
expect(testString.truncate(43)).to.equal('the quick brown fox jumps over the lazy dog', 'Incorrect truncate() functionality 3');
expect(testString.truncate(45)).to.equal('the quick brown fox jumps over the lazy dog', 'Incorrect truncate() functionality 4');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var testString = 'the \{0\} brown \{1\} jumps over the \{2\} dog';
expect(String.hasOwnProperty('format')).to.equal(true, "Couldn't find format() function");
expect(String.format(testString, 'quick')).to.equal('the quick brown \{1\} jumps over the \{2\} dog', 'Incorrect format() functionality');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var testString = 'the \{0\} brown \{1\} jumps over the \{2\} dog';
expect(String.hasOwnProperty('format')).to.equal(true, "Couldn't find format() function");
expect(String.format(testString, 'quick', 'fox', 'lazy')).to.equal('the quick brown fox jumps over the lazy dog', 'Incorrect format() functionality');
[/input]
[output]
yes
[/output]
[/test]
[test]
[input]
var testString = 'the \{0\} brown \{1\} jumps over the \{2\} dog';
expect(String.hasOwnProperty('format')).to.equal(true, "Couldn't find format() function");
expect(String.format(testString, 'quick', 'fox', 'lazy', 'bananas')).to.equal('the quick brown fox jumps over the lazy dog', 'Incorrect format() functionality');
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
[code-task title="Sorted List" taskId="js-advanced-object-composition-Sorted List" executionType="tests-execution" executionStrategy="javascript-unit-tests-with-mocha" requiresInput] [code-editor language=javascript]
```
function sortedList(){
  // Scrieți codul dvs. aici
}
```
[/code-editor]
[task-description]
# Descriere

Implementați o colecție, care păstrează o listă de numere, sortate în ordine **crescătoare**.

Acesta trebuie să accepte următoarele funcționalități:

- `add(element)`- adaugă un element nou la colecția

- `remove(index)`- elimină elementul de la indexul poziției

- `get(index)` - returnează valoarea elementului la indexul poziției

- `size` - numărul de elemente stocate în colecție

Ordinea corectă a elementului trebuie păstrată în orice moment, indiferent de operația care este apelată.

Elementele de **emoving** și **retrieving** nu ar trebui să funcționeze dacă indicele furnizat este în afara **lungimii** colecției \(fie arată o eroare, fie nu execute nimic\) 

Rețineți că **dimensiunea** colecției **NU** este o funcție.

Scrieți codul astfel încât **prima funcție din soluția dvs.** să returneze o instanță din lista dvs. sortată.


# Exemplu

``` js
function sortedList() {
    return (function () {
        let arr = [];
        let sorting = (a, b) => a - b;
        let add = function (element) {};
        let remove = function (index) {};
        let get = function (index) {};
        let size = 0;
        return {add, remove, get, size}
    })();
}
```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
result = result();
expect(result.hasOwnProperty('add')).to.equal(true, "Function add() was not found");
expect(result.hasOwnProperty('remove')).to.equal(true, "Function remove() was not found");
expect(result.hasOwnProperty('get')).to.equal(true, "Function get() was not found");

// Instantiate and test functionality
var myList = result;
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
result = result();
expect(result.hasOwnProperty('add')).to.equal(true, "Function add() was not found");
expect(result.hasOwnProperty('get')).to.equal(true, "Function get() was not found");

var myList = result;
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
result = result();
expect(result.hasOwnProperty('remove')).to.equal(true, "Function remove() was not found");
expect(result.hasOwnProperty('get')).to.equal(true, "Function get() was not found");

var myList = result;
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
var myList = result();
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
var myList = result();
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
expect(myList.size).to.equal(10, "Unexpected behaviour with index outside of range.");
expect(failsafe).to.equal('failsafe', "Unexpected behaviour with index outside of range.");

var expectedArray = \[0, 1, 2, 3, 4, 5, 6, 7, 8, 9\];
try \{
    myList.remove(-1);
\} catch (e) \{\}

expect(myList.size).to.equal(10, "Unexpected behaviour with index outside of range.");
for (let i = 0; i \< expectedArray.length; i++) \{
    expect(myList.get(i)).to.equal(expectedArray\[i\], "Unexpected behaviour with index outside of range.");
\}

try \{
    myList.remove(11);
\} catch (e) \{\}

expect(myList.size).to.equal(10, "Unexpected behaviour with index outside of range.");
for (let i = 0; i \< expectedArray.length; i++) \{
    expect(myList.get(i)).to.equal(expectedArray\[i\], "Unexpected behaviour with index outside of range.");
\}
[/input]
[output]
yes
[/output]
[/test]
[/tests]
[/code-task]

[/slide]
