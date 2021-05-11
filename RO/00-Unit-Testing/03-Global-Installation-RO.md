# Instalarea Mocha și Chai la nivel global

[slide hideTitle]

# Instalarea globală

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/01.JS-Applications-Unit-Testing/EN/interactive-js-apps-unit-testing-11-12-13-14-global-installation-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a instala framework-uri și biblioteci la nivel global, utilizați Windows "CMD" (Command Prompt) sau "npm" (Node Package Manager) în Visual Studio Code.

Deschideți o instanță a terminalului în Visual Studio Code.

Tastați următoarele comenzi pentru a instala **Mocha** și **Chai** la nivel global:

```js
npm install -g mocha
```

```js
npm install -g chai
```

Verificați dacă Mocha este instalat.

```js
mocha --version
```

# Configurarea Node Path

**Node.js** nu își găsește implicit modulele instalate global.

Trebuie să setați manual variabila de mediu "NODE_PATH".

Deschideți consola Windows "CMD".

Pentru a seta calea, utilizați această bucată de cod pentru sesiunile viitoare:

`setx NODE_PATH %AppData%\npm\node_modules`

Variabilele setate cu **setx** sunt disponibile numai în viitoarele ferestre de comandă.

Utilizați această bucată de cod pentru a seta calea pentru sesiunea curentă:

`set NODE_PATH=%AppData%\npm\node_modules`

Poate fi necesar să vă reporniți IDE-ul după ce ați schimbat "NODE_PATH".

Iată un exemplu de încărcare a unei biblioteci:

`const expect = require("chai").expect;`

```js
const expect = require('chai').expect;

describe('Test group #1', function () {
    it('should… when…', function () {
        expect(actual).to.be.equal(expected);
    });
    it('should… when…', function () { … });
});
describe('Test group #2', function () {
    it('should… when…', function () {
        expect(actual).to.be.equal(expected);
    });
});
```

[/slide]

[slide hideTitle]
# Problemă cu soluție: Sum of Numbers

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/01.JS-Applications-Unit-Testing/EN/interactive-js-apps-unit-testing-15-solution-sum-of-numbers-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Sum of Numbers" taskId="js-applications-Unit-Testing-lab-Sum-Of-Numbers" executionType="tests-execution" executionStrategy="javascript-code-against-unit-tests-with-mocha" requiresInput]

[code-editor language=javascript]

```
describe('Sum of numbers', () => {
  // Write your code here
});
```
[/code-editor]
[task-description]
# Descriere
Vi se cere să trimiteți numai testele unitare pentru obiectul / funcția pe care o testați.

Creați teste pentru a verifica funcționalitatea următorului cod:

```js
function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}
```

Folosiți o funcție numită `sum()`. 

Ar trebui să îndeplinească următoarele cerințe:
- Ia o **matrice** de **numere** ca argument
- **Returnează** **suma** valorilor **tuturor elementelor** din interiorul matricei

[/task-description]
[code-io /]
[tests]
[test]
[input]
//\<minTestCount\>3\</minTestCount\> - specifică cantitatea minimă de teste pe care ar trebui să le aibă codul dvs.
let sum = function(arr)\{\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
sum = function(arr) \{
    let sum = 0;
    for (let num of arr)
        sum += Number(num);
    return sum;
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
sum = function(arr) \{
    let sum = "0";
    for (let num of arr)
        sum += Number(num);
    return sum;
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
sum = function(arr) \{
    let sum = 0;
    for (let i = 0; i \< arr.length - 1; i++)
        sum += Number(arr\[i\]);
    return sum;
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


