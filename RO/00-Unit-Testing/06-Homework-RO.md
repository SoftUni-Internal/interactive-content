# Teme pentru acasă

[slide hideTitle]
# Problemă: Even or Odd
[code-task title="Even Or Odd" taskId="js-applications-Unit-Testing-Even-Or-Odd" executionType="tests-execution" executionStrategy="javascript-code-against-unit-tests-with-mocha" requiresInput]

[code-editor language=javascript]
```
describe('Even or odd', () => {
   // Scrieți codul aici
})
```
[/code-editor]
[task-description]

# Descriere

Creați **teste unitare** pentru funcția `isOddOrEven()` care verifică dacă **lungimea** șirului trecut este **pară** sau **impară**.

Dacă parametrul trecut **NU** este un șir, acesta returnează **undefined**.

Dacă parametrul este un șir, acesta returnează fie "**par**", fie "**impar**", pe baza lungimii șirului.

Vi se oferă o implementare a funcției  `isOddOrEven()`.

```js
function isOddOrEven(input) {
  if (typeof (input) !== 'string') {
    return undefined;
  }
  if (input.length % 2 === 0) {
    return 'even';
  }
  return 'odd';
}
```

# Sfaturi
Putem vedea că există trei rezultate pentru această funcție:
- Returnează `undefined`
- Returnează `even`
- Returnează `odd`

Creați unul sau două teste trecând parametrii care **NU** sunt de tip șir, așteptându-se să revină **undefined**.

```js
describe('Is Odd Or Even', function () {
  it('should return undefined with a number as parameter',
    function () {
      expect(isOddOrEven(13)).to.equal(undefined,
        'Function did not return the correct result!')
    });

  it('should return undefined with an object as parameter',
    function () {
      expect(isOddOrEven({
        name: 'George'
      })).to.equal(undefined,
        'Function did not return the correct result!')
    });
})
```

După ce verificăm validarea, este timpul să verificăm dacă funcția funcționează corect cu argumente valide.

Creați un test pentru fiecare dintre cazuri.

În primul test, trecem un șir cu o lungime **pară**, în timp ce, în al doilea, trecem un șir cu o lungime **impară**.

```js
describe('Is Odd Or Even', function () {

  it('should return even', function () {
    expect(isOddOrEven('aaaa')).to.equal('even',
      'Function did not return the correct result!')
  });

  it('should return odd', function () {
    expect(isOddOrEven('aaa')).to.equal('odd',
      'Function did not return the correct result!')
  });
})
```

În cele din urmă, creați un test care trece mai multe șiruri la rând pentru a vă asigura că funcția funcționează corect.

```js
describe('Is Odd Or Even', function () {

  it('should return correct values with multiple checks',
    function () {
      expect(isOddOrEven('cat')).to.equal('odd',
        'Function did not return the correct result!')

      expect(isOddOrEven('pet')).to.equal('odd',
        'Function did not return the correct result!')

      expect(isOddOrEven('bird')).to.equal('even',
        'Function did not return the correct result!')
    });
})
```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
//\<minTestCount\>3\</minTestCount\> - specifică cantitatea minimă de teste pe care ar trebui să le aibă codul dvs.
let isOddOrEven = function(string)\{\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test open]
[input]
isOddOrEven = function (string) \{
    if (typeof(string) !== 'string') \{
        return undefined;
    \}
    if (string.length % 2 === 0) \{
        return "even";
    \}

    return "odd";
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
isOddOrEven = function (string) \{
    if (string.length % 2 === 0) \{
        return "even";
    \}

    return "odd";
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
isOddOrEven = function (string) \{
    if (typeof(string) !== 'string') \{
        return undefined;
    \}

    return "even";
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
isOddOrEven = function (string) \{
    if (typeof(string) !== 'string') \{
        return undefined;
    \}

    return "odd";
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
isOddOrEven = function (string) \{
    if (typeof(string) !== 'string') \{
        return undefined;
    \}
    if (string.length % 2 === 1) \{
        return "even";
    \}

    return "odd";
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Char Lookup
[code-task title="Char Lookup" taskId="js-applications-Unit-Testing-Char-Lookup" executionType="tests-execution" executionStrategy="javascript-code-against-unit-tests-with-mocha" requiresInput]

[code-editor language=javascript]
```
describe('Char lookup', () => {
  // Scrieți codul aici
})
```
[/code-editor]
[task-description]
# Descriere

Creați **teste unitare** pentru o funcție care preia un caracter la un anumit **index** dintr-un **string**.

Aveți o funcție numită `lookupChar()` care are următoarele funcționalități:

- `lookupChar(string, index)` - acceptă un **string** și un **integer**, care este indicele caracterului pe care îl căutăm

- Dacă **primul parametru** **NU** este un șir sau **al doilea parametru** **NU este un număr** - ar trebui să returneze "**undefined**"

- Dacă **ambii parametri** sunt de tipul corect, dar valoarea indexului este incorectă, adică mai mare sau egală cu lungimea șirului sau un număr negativ - ar trebui să returneze "**Index incorect**"

- Dacă ambii parametri au tipuri și valori corecte - returnează caracterul la indexul specificat în șir

Iată implementarea funcției `lookupChar()`.

```js
function lookupChar(string, index) {
  if (typeof (string) !== 'string' ||
    !Number.isInteger(index)) {
    return undefined;
  }
  if (string.length <= index || index < 0) {
    return 'Incorrect index';
  }
  return string.charAt(index);
}
```

# Sugestii

Un prim pas bun în testarea unei metode este determinarea tuturor condițiilor de ieșire.

Citind specificațiile sau aruncând o privire asupra implementării, putem determina trei condiții principale de ieșire:
- Returnează `undefined`
- Returnează `Incorrect index`
- Returnează `character at the specified index`

Avem condițiile noastre de ieșire, așa că începem să verificăm în ce situații putem ajunge la ele.

Dacă oricare dintre parametri este de **tip incorect**, returnăm **undefined**.

```js
describe('Character Look Up', function () {
  it('should return undefined with first parameter as a number',
    function () {
      expect(lookupChar(13, 0)).to.equal(undefined,
        'Function did not return the correct result!')
    });

  it('should return undefined with second parameter as a string',
    function () {
      expect(lookupChar('Peter', 'George')).to.equal(undefined,
        'Function did not return the correct result!')
    });
})
```

Dacă aruncăm o privire mai atentă asupra implementării, vedem că verificarea folosește `Number.isInteger()` în loc de  `typeof(index === number)` pentru a verifica indexul.

`typeof()` ne-ar proteja de obținerea unui **index** care este un **non-number**, dar nu ne va proteja de primirea unui **număr cu virgulă mobilă**.

Condiția spune că indexul trebuie să fie un **integer**, deci numerele cu virgulă mobilă nu vor fi indexuri valide.

```js
describe('Character Look Up', function () {
  it('should return undefined with second parameter as a floating point number',
    function () {
      expect(lookupChar('Peter', 3.12)).to.equal(undefined,
        'Function did not return the correct result!')
    });
})
```

Trecerea la următoarea condiție de ieșire - returnarea **Incorrect Index**.

Acesta este cazul când trecem un index care este un număr negativ sau un index care se află în afara limitelor șirului.

```js
describe('Character Look Up', function () {
  it('should return incorrect index with second parameter as incorrect value',
    function () {
      expect(lookupChar('George', 13)).to.equal('Incorrect index',
        'Function did not return the correct result!')
    });

  it('should return incorrect index with second parameter as negative value',
    function () {
      expect(lookupChar('Peter', -1)).to.equal('Incorrect index',
        'Function did not return the correct result!')
    });

  it('should return incorrect index with second parameter equal to the first parameter length',
    function () {
      expect(lookupChar('Peter', 5)).to.equal('Incorrect index',
        'Function did not return the correct result!')
    });
})
```

Pentru ultima condiție de ieșire, care va fi să returneze un rezultat corect, va fi suficientă o simplă verificare a valorii returnate.

```js
describe('Character Look Up', function () {
  it('should return correct value with correct parameters',
    function () {
      expect(lookupChar('Peter', 3)).to.equal('e',
        'Function did not return the correct result!')
    });
  it('should return correct value with correct parameters',
    function () {
      expect(lookupChar('Peter', 0)).to.equal('P',
        'Function did not return the correct result!')
    });
})
```

[/task-description]
[code-io /]
[tests]
[test open]
[input]
//\<minTestCount\>3\</minTestCount\> - specifică cantitatea minimă de teste pe care ar trebui să le aibă codul dvs.
let lookupChar = function(string, index)\{\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test open]
[input]
lookupChar = function(string, index) \{
    if (typeof(string) !== 'string' \|\| !Number.isInteger(index)) \{
        return undefined;
    \}
    if (string.length \<= index \|\| index \< 0) \{
        return "Incorrect index";
    \}

    return string.charAt(index);
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
lookupChar = function(string, index) \{
    if (typeof(string) !== 'string' \|\| typeof (index) !== 'number') \{
        return undefined;
    \}
    if (string.length \<= index \|\| index \< 0) \{
        return "Incorrect index";
    \}

    return string.charAt(index);
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
lookupChar = function(string, index) \{
    if (typeof(string) !== 'string') \{
        return undefined;
    \}
    if (string.length \<= index \|\| index \< 0) \{
        return "Incorrect index";
    \}

    return string.charAt(index);
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
lookupChar = function(string, index) \{
    if (typeof(string) !== 'string' \|\| !Number.isInteger(index)) \{
        return undefined;
    \}
    if (string.length \<= index) \{
        return "Incorrect index";
    \}
    return string.charAt(index);
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
lookupChar = function(string, index) \{
    if (typeof(string) !== 'string' \|\| !Number.isInteger(index)) \{
        return undefined;
    \}
    if (index \< 0) \{
        return "Incorrect index";
    \}

    return string.charAt(index);
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
lookupChar = function(string, index) \{
    if (typeof(string) !== 'string' \|\| !Number.isInteger(index)) \{
        return undefined;
    \}
    if (string.length \<= index \|\| index \< 0) \{
        return "Incorrect index";
    \}

    return string.charAt(0);
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
lookupChar = function(string, index) \{
    if (!Number.isInteger(index)) \{
        return undefined;
    \}
    if (string.length \<= index \|\| index \< 0) \{
        return "Incorrect index";
    \}

    return string.charAt(index);
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Math Enforcer
[code-task title="Math Enforcer" taskId="js-applications-Unit-Testing-Math-Enforcer" executionType="tests-execution" executionStrategy="javascript-code-against-unit-tests-with-mocha" requiresInput]
[code-editor language=javascript]

```
describe('Math enforcer', function () {
   // Scrieți codul aici
})
```
[/code-editor]
[task-description]
# Descriere

Testați un obiect numit **mathEnforcer**, care va avea următoarele funcționalități:

- `addFive(num)`: O funcție care acceptă un parametru **unic**
    - dacă parametrul **NU** este un **număr**, funcția ar trebui să returneze **undefined**
    - dacă parametrul este un **număr**, **îi adaugă 5** și returnează rezultatul

- `subtractTen(num)`: O funcție care acceptă **un singur** parametru
    - dacă parametrul **NU** este un **număr**, funcția ar trebui să returneze **undefined**
    - dacă parametrul este un **număr**, **îi scade 10** și returnează rezultatul

- `sum(num1, num2)`: O funcție care acceptă **doi** parametri
    - dacă oricare dintre cei 2 parametri NU este un număr, funcția ar trebui să returneze **undefined**
    - dacă **ambii** parametri sunt **numere**, funcția ar trebui să returneze **suma lor**

Aici este implementarea obiectului **mathEnforcer**:

```js
let mathEnforcer = {
    addFive: function(num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function(num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function(num1, num2) {
        if (typeof(num1) !== 'number' || 
            typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};
```

Metodele ar trebui să funcționeze corect pentru numerele pozitive, negative și cu virgulă mobilă.

Atunci când se utilizează numere cu virgulă mobilă, rezultatul trebuie considerat corect dacă se află la 0,01 din valoarea corectă.

Când testați un obiect mai complex, scrieți o **descriere imbricată** pentru fiecare funcție prezentată în exemplul de mai jos.

```js
describe('Math Enforcer', function() {
    describe('Add Five', function() {
        it('should return undefined passing parameter as a string', 
          function() {
            // De făcut
        });
    })

    describe('Add Five', function() {
        it('should return 5 if parameter equals 0', function() {
            // De făcut
        });
    })
})
```

Testele dvs. vor fi furnizate cu o variabilă numită "mathEnforcer", care va conține logica menționată mai sus. 

Toate cazurile de testare ar trebui să facă referire la această variabilă.

# Sfaturi

- Testați cum se comportă programul atunci când treceți valori negative

- Testați programul cu numere cu virgulă mobilă folosind metoda Chai `closeTo()` pentru a compara numerele cu virgulă mobilă

[/task-description]
[code-io /]
[tests]
[test open]
[input]
//\<minTestCount\>2\</minTestCount\> - specifică cantitatea minimă de teste pe care ar trebui să le aibă codul dvs.
let mathEnforcer = \{\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test open]
[input]
mathEnforcer = \{
    addFive: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num + 5;
    \},
    subtractTen: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num - 10;
    \},
    sum: function (num1, num2) \{
        if (typeof(num1) !== 'number' \|\| typeof(num2) !== 'number') \{
            return undefined;
        \}
        return num1 + num2;
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
mathEnforcer = \{
    addFive: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num + 4;
    \}, subtractTen: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num - 10;
    \}, sum: function (num1, num2) \{
        if (typeof(num1) !== 'number' \|\| typeof(num2) !== 'number') \{
            return undefined;
        \}
        return num1 + num2;
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
mathEnforcer = \{
    addFive: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num + 5;
    \}, subtractTen: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num - 5;
    \}, sum: function (num1, num2) \{
        if (typeof(num1) !== 'number' \|\| typeof(num2) !== 'number') \{
            return undefined;
        \}
        return num1 + num2;
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
mathEnforcer = \{
    addFive: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num + 5;
    \}, subtractTen: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num - 10;
    \}, sum: function (num1, num2) \{
        if (typeof(num1) !== 'number' \|\| typeof(num2) !== 'number') \{
            return undefined;
        \}
        return num1 - num2;
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
mathEnforcer = \{
    addFive: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return Math.abs(num) + 5;
    \}, subtractTen: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num - 10;
    \}, sum: function (num1, num2) \{
        if (typeof(num1) !== 'number' \|\| typeof(num2) !== 'number') \{
            return undefined;
        \}
        return num1 + num2;
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
mathEnforcer = \{
    addFive: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num + 5;
    \}, subtractTen: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return Math.abs(num) - 10;
    \}, sum: function (num1, num2) \{
        if (typeof(num1) !== 'number' \|\| typeof(num2) !== 'number') \{
            return undefined;
        \}
        return num1 + num2;
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
mathEnforcer = \{
    addFive: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num + 5;
    \}, subtractTen: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num - 10;
    \}, sum: function (num1, num2) \{
        if (typeof(num1) !== 'number' \|\| typeof(num2) !== 'number') \{
            return undefined;
        \}
        return Math.abs(num1 - num2);
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
mathEnforcer = \{
    addFive: function (num) \{
        return num + 5;
    \},
    subtractTen: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num - 10;
    \},
    sum: function (num1, num2) \{
        if (typeof(num1) !== 'number' \|\| typeof(num2) !== 'number') \{
            return undefined;
        \}
        return num1 + num2;
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
mathEnforcer = \{
    addFive: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num + 5;
    \},
    subtractTen: function (num) \{
        return num - 10;
    \},
    sum: function (num1, num2) \{
        if (typeof(num1) !== 'number' \|\| typeof(num2) !== 'number') \{
            return undefined;
        \}
        return num1 + num2;
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
mathEnforcer = \{
    addFive: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num + 5;
    \},
    subtractTen: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num - 10;
    \},
    sum: function (num1, num2) \{
        if (typeof(num2) !== 'number') \{
            return undefined;
        \}
        return num1 + num2;
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
mathEnforcer = \{
    addFive: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num + 5;
    \},
    subtractTen: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num - 10;
    \},
    sum: function (num1, num2) \{
        if (typeof(num1) !== 'number') \{
            return undefined;
        \}
        return num1 + num2;
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
mathEnforcer = \{
    addFive: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return parseInt(num) + 5;
    \},
    subtractTen: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num - 10;
    \},
    sum: function (num1, num2) \{
        if (typeof(num1) !== 'number' \|\| typeof(num2) !== 'number') \{
            return undefined;
        \}
        return num1 + num2;
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
mathEnforcer = \{
    addFive: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num + 5;
    \},
    subtractTen: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return parseInt(num) - 10;
    \},
    sum: function (num1, num2) \{
        if (typeof(num1) !== 'number' \|\| typeof(num2) !== 'number') \{
            return undefined;
        \}
        return num1 + num2;
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
mathEnforcer = \{
    addFive: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num + 5;
    \},
    subtractTen: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num - 10;
    \},
    sum: function (num1, num2) \{
        if (typeof(num1) !== 'number' \|\| typeof(num2) !== 'number') \{
            return undefined;
        \}
        return parseInt(num1) + num2;
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
mathEnforcer = \{
    addFive: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num + 5;
    \},
    subtractTen: function (num) \{
        if (typeof(num) !== 'number') \{
            return undefined;
        \}
        return num - 10;
    \},
    sum: function (num1, num2) \{
        if (typeof(num1) !== 'number' \|\| typeof(num2) !== 'number') \{
            return undefined;
        \}
        return num1 + parseInt(num2);
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: String Builder
[code-task title="String Builder" taskId="js-applications-Unit-Testing-String-Builder" executionType="tests-execution" executionStrategy="javascript-code-against-unit-tests-with-mocha" requiresInput]
[code-editor language=javascript]
```
describe('String Builder', function(){
   // Scrieți codul aici
});

```
[/code-editor]
[task-description]
# Descriere

Utilizați următoarea clasă JavaScript.

```js
class StringBuilder {
    constructor(string) {
        if (string !== undefined) {
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        } else {
            this._stringArray = [];
        }
    }

    append(string) {
        StringBuilder._vrfyParam(string);
        for (let i = 0; i < string.length; i++) {
            this._stringArray.push(string[i]);
        }
    }

    prepend(string) {
        StringBuilder._vrfyParam(string);
        for (let i = string.length - 1; i >= 0; i--) {
            this._stringArray.unshift(string[i]);
        }
    }

    insertAt(string, startIndex) {
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    }

    remove(startIndex, length) {
        this._stringArray.splice(startIndex, length);
    }

    static _vrfyParam(param) {
        if (typeof param !== 'string') throw new TypeError('Argument must be string');
    }

    toString() {
        return this._stringArray.join('');
    }
}
```

Codul de mai sus definește o clasă care conține caractere (șiruri cu lungimea 1) într-o matrice.

O instanță a clasei ar trebui să accepte următoarele operațiuni:

- Poate fi instanțiată cu un argument string pasat sau fără nimic

- Funcţia `append(string)`: convertește argumentul string într-o matrice și îl adaugă la sfârșitul stocării

- Funcţia `prepend(string)`: convertește argumentul string pasat în matrice și îl adaugă la începutul stocării

- `insertAt(string, index)`: convertește șirul pasat într-o matrice și îl adaugă la indexul dat (nu este necesar să verificați dacă indexul este în interval)

- `remove(startIndex, length)`: elimină elementele din stocare, începând de la indexul dat (inclusiv, lungimea numărului de caractere (nu este necesar să verificați dacă indexul este în interval)

- Funcţia `toString()`: returnează un șir cu toate elementele unite de un șir gol

- Toate argumentele pasate trebuie să fie șiruri

Dacă oricare dintre parametri nu este un șir, aruncă  **TypeError** cu următorul mesaj: `Argument must be a string`.

# Exemplu

**Intrare**
```js
let str = new StringBuilder('hello');
str.append(', there');
str.prepend('User, ');
str.insertAt('woop',5 );
console.log(str.toString());
str.remove(6, 3);
console.log(str.toString());
```

**Ieșire**

User, Woop hello, there

User,w Hello, there

[/task-description]
[code-io /]
[tests]
[test open]
[input]
//\<minTestCount\>7\</minTestCount\> - specifică cantitatea minimă de teste pe care ar trebui să le aibă codul dvs.
var StringBuilder = function () \{\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test open]
[input]
StringBuilder = class StringBuilder \{
    constructor(string) \{
        if (string !== undefined) \{
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        \} else \{
            this._stringArray = \[\];
        \}
    \}

    append(string) \{
        StringBuilder._vrfyParam(string);
        for(let i = 0; i \< string.length; i++) \{
            this._stringArray.push(string\[i\]);
        \}
    \}

    prepend(string) \{
        StringBuilder._vrfyParam(string);
        for(let i = string.length - 1; i \>= 0; i--) \{
            this._stringArray.unshift(string\[i\]);
        \}
    \}

    insertAt(string, startIndex) \{
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    \}

    remove(startIndex, length) \{
        this._stringArray.splice(startIndex, length);
    \}

    static _vrfyParam(param) \{
        if (typeof param !== 'string') throw new TypeError('Argument must be string');
    \}

    toString() \{
        return this._stringArray.join('');
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>Data not initialized empty\</testInfo\>
StringBuilder = class StringBuilder \{
    constructor(string) \{
        this._stringArray = \[''\];
    \}

    append(string) \{
        StringBuilder._vrfyParam(string);
        for (let i = 0; i \< string.length; i++) \{
            this._stringArray.push(string\[i\]);
        \}
    \}

    prepend(string) \{
        StringBuilder._vrfyParam(string);
        for (let i = string.length - 1; i \>= 0; i--) \{
            this._stringArray.unshift(string\[i\]);
        \}
    \}

    insertAt(string, startIndex) \{
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    \}

    remove(startIndex, length) \{
        this._stringArray.splice(startIndex, length);
    \}

    static _vrfyParam(param) \{
        if (typeof param !== 'string') throw new TypeError('Argument must be string');
    \}

    toString() \{
        return this._stringArray.join('');
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>Data always initializes empty\</testInfo\>
StringBuilder = class StringBuilder \{
    constructor(string) \{
        this._stringArray = \[\];
    \}

    append(string) \{
        StringBuilder._vrfyParam(string);
        for (let i = 0; i \< string.length; i++) \{
            this._stringArray.push(string\[i\]);
        \}
    \}

    prepend(string) \{
        StringBuilder._vrfyParam(string);
        for (let i = string.length - 1; i \>= 0; i--) \{
            this._stringArray.unshift(string\[i\]);
        \}
    \}

    insertAt(string, startIndex) \{
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    \}

    remove(startIndex, length) \{
        this._stringArray.splice(startIndex, length);
    \}

    static _vrfyParam(param) \{
        if (typeof param !== 'string') throw new TypeError('Argument must be string');
    \}

    toString() \{
        return this._stringArray.join('');
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>Append missing\</testInfo\>
StringBuilder = class StringBuilder \{
    constructor(string) \{
        if (string !== undefined) \{
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        \} else \{
            this._stringArray = \[\];
        \}
    \}

    prepend(string) \{
        StringBuilder._vrfyParam(string);
        for(let i = string.length - 1; i \>= 0; i--) \{
            this._stringArray.unshift(string\[i\]);
        \}
    \}

    insertAt(string, startIndex) \{
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    \}

    remove(startIndex, length) \{
        this._stringArray.splice(startIndex, length);
    \}

    static _vrfyParam(param) \{
        if (typeof param !== 'string') throw new TypeError('Argument must be string');
    \}

    toString() \{
        return this._stringArray.join('');
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>Prepend not implemented\</testInfo\>
StringBuilder = class StringBuilder \{
    constructor(string) \{
        if (string !== undefined) \{
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        \} else \{
            this._stringArray = \[\];
        \}
    \}

    append(string) \{
        StringBuilder._vrfyParam(string);
        for(let i = 0; i \< string.length; i++) \{
            this._stringArray.push(string\[i\]);
        \}
    \}

    prepend(string) \{
    \}

    insertAt(string, startIndex) \{
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    \}

    remove(startIndex, length) \{
        this._stringArray.splice(startIndex, length);
    \}

    static _vrfyParam(param) \{
        if (typeof param !== 'string') throw new TypeError('Argument must be string');
    \}

    toString() \{
        return this._stringArray.join('');
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>Insert does not spread array\</testInfo\>
StringBuilder = class StringBuilder \{
    constructor(string) \{
        if (string !== undefined) \{
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        \} else \{
            this._stringArray = \[\];
        \}
    \}

    append(string) \{
        StringBuilder._vrfyParam(string);
        for(let i = 0; i \< string.length; i++) \{
            this._stringArray.push(string\[i\]);
        \}
    \}

    prepend(string) \{
        StringBuilder._vrfyParam(string);
        for(let i = string.length - 1; i \>= 0; i--) \{
            this._stringArray.unshift(string\[i\]);
        \}
    \}

    insertAt(string, startIndex) \{
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, string);
    \}

    remove(startIndex, length) \{
        this._stringArray.splice(startIndex, length);
    \}

    static _vrfyParam(param) \{
        if (typeof param !== 'string') throw new TypeError('Argument must be string');
    \}

    toString() \{
        return this._stringArray.join('');
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>Remove has parameter swapped\</testInfo\>
StringBuilder = class StringBuilder \{
    constructor(string) \{
        if (string !== undefined) \{
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        \} else \{
            this._stringArray = \[\];
        \}
    \}

    append(string) \{
        StringBuilder._vrfyParam(string);
        for(let i = 0; i \< string.length; i++) \{
            this._stringArray.push(string\[i\]);
        \}
    \}

    prepend(string) \{
        StringBuilder._vrfyParam(string);
        for(let i = string.length - 1; i \>= 0; i--) \{
            this._stringArray.unshift(string\[i\]);
        \}
    \}

    insertAt(string, startIndex) \{
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    \}

    remove(startIndex, length) \{
        this._stringArray.splice(length, startIndex);
    \}

    static _vrfyParam(param) \{
        if (typeof param !== 'string') throw new TypeError('Argument must be string');
    \}

    toString() \{
        return this._stringArray.join('');
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>toString missing join parameter\</testInfo\>
StringBuilder = class StringBuilder \{
    constructor(string) \{
        if (string !== undefined) \{
            StringBuilder._vrfyParam(string);
            this._stringArray = Array.from(string);
        \} else \{
            this._stringArray = \[\];
        \}
    \}

    append(string) \{
        StringBuilder._vrfyParam(string);
        for(let i = 0; i \< string.length; i++) \{
            this._stringArray.push(string\[i\]);
        \}
    \}

    prepend(string) \{
        StringBuilder._vrfyParam(string);
        for(let i = string.length - 1; i \>= 0; i--) \{
            this._stringArray.unshift(string\[i\]);
        \}
    \}

    insertAt(string, startIndex) \{
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    \}

    remove(startIndex, length) \{
        this._stringArray.splice(startIndex, length);
    \}

    static _vrfyParam(param) \{
        if (typeof param !== 'string') throw new TypeError('Argument must be string');
    \}

    toString() \{
        return this._stringArray.join();
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>Constructor does not verify parameter\</testInfo\>
StringBuilder = class StringBuilder \{
    constructor(string) \{
        if (string !== undefined) \{
            this._stringArray = Array.from(string);
        \} else \{
            this._stringArray = \[\];
        \}
    \}

    append(string) \{
        StringBuilder._vrfyParam(string);
        for(let i = 0; i \< string.length; i++) \{
            this._stringArray.push(string\[i\]);
        \}
    \}

    prepend(string) \{
        StringBuilder._vrfyParam(string);
        for(let i = string.length - 1; i \>= 0; i--) \{
            this._stringArray.unshift(string\[i\]);
        \}
    \}

    insertAt(string, startIndex) \{
        StringBuilder._vrfyParam(string);
        this._stringArray.splice(startIndex, 0, ...string);
    \}

    remove(startIndex, length) \{
        this._stringArray.splice(startIndex, length);
    \}

    static _vrfyParam(param) \{
        if (typeof param !== 'string') throw new TypeError('Argument must be string');
    \}

    toString() \{
        return this._stringArray.join();
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>append, prepend, insertAt do not verify parameter\</testInfo\>
StringBuilder = class StringBuilder \{
    constructor(string) \{
        if (string !== undefined) \{
            if (typeof string !== 'string') throw new TypeError('Argument must be string');
            this._stringArray = Array.from(string);
        \} else \{
            this._stringArray = \[\];
        \}
    \}

    append(string) \{
        for(let i = 0; i \< string.length; i++) \{
            this._stringArray.push(string\[i\]);
        \}
    \}

    prepend(string) \{
        for(let i = string.length - 1; i \>= 0; i--) \{
            this._stringArray.unshift(string\[i\]);
        \}
    \}

    insertAt(string, startIndex) \{
        this._stringArray.splice(startIndex, 0, ...string);
    \}

    remove(startIndex, length) \{
        this._stringArray.splice(startIndex, length);
    \}

    toString() \{
        return this._stringArray.join('');
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>Functions attached to instance\</testInfo\>
StringBuilder = class StringBuilder \{
    constructor(string) \{
        this._vrfyParam = function(param) \{
            if (typeof param !== 'string') throw new TypeError('Argument must be string');
        \};

        if (string !== undefined) \{
            this._vrfyParam(string);
            this._stringArray = Array.from(string);
        \} else \{
            this._stringArray = \[\];
        \}

        this.append = function(string) \{
            this._vrfyParam(string);
            for(let i = 0; i \< string.length; i++) \{
                this._stringArray.push(string\[i\]);
            \}
        \};

        this.prepend = function(string) \{
            this._vrfyParam(string);
            for(let i = string.length - 1; i \>= 0; i--) \{
                this._stringArray.unshift(string\[i\]);
            \}
        \};

        this.insertAt = function(string, startIndex) \{
            this._vrfyParam(string);
            this._stringArray.splice(startIndex, 0, ...string);
        \};

        this.remove = function(startIndex, length) \{
            this._stringArray.splice(startIndex, length);
        \};

        this.toString = function() \{
            return this._stringArray.join('');
        \};
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

[slide hideTitle]
# Problemă: Payment Package
[code-task title="Payment Package" taskId="js-applications-Unit-Testing-Payment-Package" executionType="tests-execution" executionStrategy="javascript-code-against-unit-tests-with-mocha" requiresInput]
[code-editor language=javascript]
```
describe('Payment package', function(){
   // Scrieți codul aici
});
```
[/code-editor]
[task-description]
## Descriere

Utilizați următoarea clasă JavaScript.

```js
class PaymentPackage {
    constructor(name, value) {
        this.name = name;
        this.value = value;
        this.VAT = 20; // Valoare implicită   
        this.active = true; // Valoare implicită
    }

    get name() {
        return this._name;
    }

    set name(newValue) {
        if (typeof newValue !== 'string') {
            throw new Error('Name must be a non-empty string');
        }
        if (newValue.length === 0) {
            throw new Error('Name must be a non-empty string');
        }
        this._name = newValue;
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('Value must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('Value must be a non-negative number');
        }
        this._value = newValue;
    }

    get VAT() {
        return this._VAT;
    }

    set VAT(newValue) {
        if (typeof newValue !== 'number') {
            throw new Error('VAT must be a non-negative number');
        }
        if (newValue < 0) {
            throw new Error('VAT must be a non-negative number');
        }
        this._VAT = newValue;
    }

    get active() {
        return this._active;
    }

    set active(newValue) {
        if (typeof newValue !== 'boolean') {
            throw new Error('Active status must be a boolean');
        }
        this._active = newValue;
    }

    toString() {
        const output = [
            `Package: ${this.name}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): ${this.value}`,
            `- Value (VAT ${this.VAT}%): ${this.value * (1 + this.VAT / 100)}`
        ];
        return output.join('\n');
    }
}
```
## Funcționalitate
Codul de mai sus definește o clasă care conține informații despre un pachet de plăți.

O instanță a clasei ar trebui să accepte următoarele operațiuni:
- Poate fi instanțiată cu doi parametri: un nume de tip șir și o valoare numerică
- Accesorul **name**: obține și stabilește valoarea "name"
- Accesorul **value**: obține și stabilește valoarea "value"
- Accesorul **VAT**: obține și stabilește valoarea "VAT"
- Accesorul **active**: obține și stabilește valoarea "active"
- Funcţia `toString()`: returnează un șir care conține o prezentare generală a instanței

Dacă pachetul nu este activ, adăugați eticheta `(inactive)` la numele tipărit.

Când creați o instanță sau modificați oricare dintre valorile proprietății, parametrii sunt validați.

Trebuie să urmeze aceste reguli:

- **name**: un șir ne-gol

- **value**: un număr non-negativ

- **VAT**: un număr non-negativ

- **active**: un Boolean

Dacă oricare dintre cerințe nu este îndeplinită, operațiunea trebuie să arunce o eroare.

# Exemplu

**Intrare**

```js
// Ar trebui să arunce o eroare
try {
    const hrPack = new PaymentPackage('HR Services');
} catch (err) {
    console.log('Error: ' + err.message);
}
const packages = [
    new PaymentPackage('HR Services', 1500),
    new PaymentPackage('Consultation', 800),
    new PaymentPackage('Partnership Fee', 7000),
];
console.log(packages.join('\n'));

const wrongPack = new PaymentPackage('Transfer Fee', 100);
// Ar trebui să arunce o eroare
try {
    wrongPack.active = null;
} catch (err) {
    console.log('Error: ' + err.message);
}
```

**Ieșire**

Error: Value must be a non-negative number
Package: HR Services
\- Value (excl. VAT): 1500
\- Value (VAT 20%): 1800
Package: Consultation
\- Value (excl. VAT): 800
\- Value (VAT 20%): 960
Package: Partnership Fee
\- Value (excl. VAT): 7000
\- Value (VAT 20%): 8400
Error: Active status must be a boolean

## Sarcina dvs.

Folosind **Mocha** și **Chai**, scrieți teste JavaScript care testează funcționalitatea completă a clasei **PaymentPackage**.

Asigurați-vă că instanțele clasei **PaymentPackage** au toate funcționalitățile și validarea necesare.

## Încărcarea

Încărcați testele într-o funcție  `describe()`.

[/task-description]
[code-io /]
[tests]
[test open]
[input]
//\<minTestCount\>5\</minTestCount\> - specifică cantitatea minimă de teste pe care ar trebui să le aibă codul dvs.
var PaymentPackage = function () \{\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test open]
[input]
PaymentPackage = class PaymentPackage \{
    constructor(name, value) \{
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Valoare implicită        
        this.active = true; // Valoare implicită
    \}

    get name() \{
        return this._name;
    \}

    set name(newValue) \{
        if (typeof newValue !== 'string') \{
            throw new Error('Name must be a non-empty string');
        \}
        if (newValue.length === 0) \{
            throw new Error('Name must be a non-empty string');            
        \}
        this._name = newValue;
    \}

    get value() \{
        return this._value;
    \}

    set value(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('Value must be a non-negative number');
        \}
        if (newValue \< 0) \{
            throw new Error('Value must be a non-negative number');            
        \}
        this._value = newValue;
    \}
    
    get VAT() \{
        return this._VAT;
    \}

    set VAT(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('VAT must be a non-negative number');
        \}
        if (newValue \< 0) \{
            throw new Error('VAT must be a non-negative number');            
        \}
        this._VAT = newValue;
    \}

    get active() \{
        return this._active;
    \}

    set active(newValue) \{
        if (typeof newValue !== 'boolean') \{
            throw new Error('Active status must be a boolean');
        \}
        this._active = newValue;
    \}

    toString() \{
        const output = \[
            `Package: \\$\{this.name\}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): \\$\{this.value\}`,
            `- Value (VAT \\$\{this.VAT\}%): \\$\{this.value * (1 + this.VAT / 100)\}`
        \];
        return output.join('\n');
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>Missing name getter/setter\</testInfo\>
PaymentPackage = class PaymentPackage \{
    constructor(name, value) \{
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Valoare implicită       
        this.active = true; // Valoare implicită
    \}

    get value() \{
        return this._value;
    \}

    set value(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('Value must be a non-negative number');
        \}
        if (newValue \< 0) \{
            throw new Error('Value must be a non-negative number');            
        \}
        this._value = newValue;
    \}
    
    get VAT() \{
        return this._VAT;
    \}

    set VAT(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('VAT must be a non-negative number');
        \}
        if (newValue \< 0) \{
            throw new Error('VAT must be a non-negative number');            
        \}
        this._VAT = newValue;
    \}

    get active() \{
        return this._active;
    \}

    set active(newValue) \{
        if (typeof newValue !== 'boolean') \{
            throw new Error('Active status must be a boolean');
        \}
        this._active = newValue;
    \}

    toString() \{
        const output = \[
            `Package: \\$\{this.name\}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): \\$\{this.value\}`,
            `- Value (VAT \\$\{this.VAT\}%): \\$\{this.value * (1 + this.VAT / 100)\}`
        \];
        return output.join('\n');
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>Missing value getter/setter\</testInfo\>
PaymentPackage = class PaymentPackage \{
    constructor(name, value) \{
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Valoare implicită       
        this.active = true; // Valoare implicită
    \}

    get name() \{
        return this._name;
    \}

    set name(newValue) \{
        if (typeof newValue !== 'string') \{
            throw new Error('Name must be a non-empty string');
        \}
        if (newValue.length === 0) \{
            throw new Error('Name must be a non-empty string');            
        \}
        this._name = newValue;
    \}
    
    get VAT() \{
        return this._VAT;
    \}

    set VAT(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('VAT must be a non-negative number');
        \}
        if (newValue \< 0) \{
            throw new Error('VAT must be a non-negative number');            
        \}
        this._VAT = newValue;
    \}

    get active() \{
        return this._active;
    \}

    set active(newValue) \{
        if (typeof newValue !== 'boolean') \{
            throw new Error('Active status must be a boolean');
        \}
        this._active = newValue;
    \}

    toString() \{
        const output = \[
            `Package: \\$\{this.name\}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): \\$\{this.value\}`,
            `- Value (VAT \\$\{this.VAT\}%): \\$\{this.value * (1 + this.VAT / 100)\}`
        \];
        return output.join('\n');
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>Missing VAT getter/setter\</testInfo\>
PaymentPackage = class PaymentPackage \{
    constructor(name, value) \{
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value        
        this.active = true; // Default value
    \}

    get name() \{
        return this._name;
    \}

    set name(newValue) \{
        if (typeof newValue !== 'string') \{
            throw new Error('Name must be a non-empty string');
        \}
        if (newValue.length === 0) \{
            throw new Error('Name must be a non-empty string');            
        \}
        this._name = newValue;
    \}

    get value() \{
        return this._value;
    \}

    set value(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('Value must be a non-negative number');
        \}
        if (newValue \< 0) \{
            throw new Error('Value must be a non-negative number');            
        \}
        this._value = newValue;
    \}

    get active() \{
        return this._active;
    \}

    set active(newValue) \{
        if (typeof newValue !== 'boolean') \{
            throw new Error('Active status must be a boolean');
        \}
        this._active = newValue;
    \}

    toString() \{
        const output = \[
            `Package: \\$\{this.name\}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): \\$\{this.value\}`,
            `- Value (VAT \\$\{this.VAT\}%): \\$\{this.value * (1 + this.VAT / 100)\}`
        \];
        return output.join('\n');
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>Missing active getter/setter\</testInfo\>
PaymentPackage = class PaymentPackage \{
    constructor(name, value) \{
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Valoare implicită        
        this.active = true; // Valoare implicită
    \}

    get name() \{
        return this._name;
    \}

    set name(newValue) \{
        if (typeof newValue !== 'string') \{
            throw new Error('Name must be a non-empty string');
        \}
        if (newValue.length === 0) \{
            throw new Error('Name must be a non-empty string');            
        \}
        this._name = newValue;
    \}

    get value() \{
        return this._value;
    \}

    set value(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('Value must be a non-negative number');
        \}
        if (newValue \< 0) \{
            throw new Error('Value must be a non-negative number');            
        \}
        this._value = newValue;
    \}
    
    get VAT() \{
        return this._VAT;
    \}

    set VAT(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('VAT must be a non-negative number');
        \}
        if (newValue \< 0) \{
            throw new Error('VAT must be a non-negative number');            
        \}
        this._VAT = newValue;
    \}

    toString() \{
        const output = \[
            `Package: \\$\{this.name\}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): \\$\{this.value\}`,
            `- Value (VAT \\$\{this.VAT\}%): \\$\{this.value * (1 + this.VAT / 100)\}`
        \];
        return output.join('\n');
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>VAT not set in constructor\</testInfo\>
PaymentPackage = class PaymentPackage \{
    constructor(name, value) \{
        this.name = name;
        this.value = value;     
        this.active = true; // Valoare implicită
    \}

    get name() \{
        return this._name;
    \}

    set name(newValue) \{
        if (typeof newValue !== 'string') \{
            throw new Error('Name must be a non-empty string');
        \}
        if (newValue.length === 0) \{
            throw new Error('Name must be a non-empty string');            
        \}
        this._name = newValue;
    \}

    get value() \{
        return this._value;
    \}

    set value(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('Value must be a non-negative number');
        \}
        if (newValue \< 0) \{
            throw new Error('Value must be a non-negative number');            
        \}
        this._value = newValue;
    \}
    
    get VAT() \{
        return this._VAT;
    \}

    set VAT(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('VAT must be a non-negative number');
        \}
        if (newValue \< 0) \{
            throw new Error('VAT must be a non-negative number');            
        \}
        this._VAT = newValue;
    \}

    get active() \{
        return this._active;
    \}

    set active(newValue) \{
        if (typeof newValue !== 'boolean') \{
            throw new Error('Active status must be a boolean');
        \}
        this._active = newValue;
    \}

    toString() \{
        const output = \[
            `Package: \\$\{this.name\}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): \\$\{this.value\}`,
            `- Value (VAT \\$\{this.VAT\}%): \\$\{this.value * (1 + this.VAT / 100)\}`
        \];
        return output.join('\n');
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>Active not set in constructor\</testInfo\>
PaymentPackage = class PaymentPackage \{
    constructor(name, value) \{
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Valoare implicită
    \}

    get name() \{
        return this._name;
    \}

    set name(newValue) \{
        if (typeof newValue !== 'string') \{
            throw new Error('Name must be a non-empty string');
        \}
        if (newValue.length === 0) \{
            throw new Error('Name must be a non-empty string');            
        \}
        this._name = newValue;
    \}

    get value() \{
        return this._value;
    \}

    set value(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('Value must be a non-negative number');
        \}
        if (newValue \< 0) \{
            throw new Error('Value must be a non-negative number');            
        \}
        this._value = newValue;
    \}
    
    get VAT() \{
        return this._VAT;
    \}

    set VAT(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('VAT must be a non-negative number');
        \}
        if (newValue \< 0) \{
            throw new Error('VAT must be a non-negative number');            
        \}
        this._VAT = newValue;
    \}

    get active() \{
        return this._active;
    \}

    set active(newValue) \{
        if (typeof newValue !== 'boolean') \{
            throw new Error('Active status must be a boolean');
        \}
        this._active = newValue;
    \}

    toString() \{
        const output = \[
            `Package: \\$\{this.name\}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): \\$\{this.value\}`,
            `- Value (VAT \\$\{this.VAT\}%): \\$\{this.value * (1 + this.VAT / 100)\}`
        \];
        return output.join('\n');
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>Incorrect value validation\</testInfo\>
PaymentPackage = class PaymentPackage \{
    constructor(name, value) \{
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value        
        this.active = true; // Default value
    \}

    get name() \{
        return this._name;
    \}

    set name(newValue) \{
        if (typeof newValue !== 'string') \{
            throw new Error('Name must be a non-empty string');
        \}
        if (newValue.length === 0) \{
            throw new Error('Name must be a non-empty string');            
        \}
        this._name = newValue;
    \}

    get value() \{
        return this._value;
    \}

    set value(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('Value must be a non-negative number');
        \}
        if (newValue \<= 0) \{
            throw new Error('Value must be a non-negative number');            
        \}
        this._value = newValue;
    \}
    
    get VAT() \{
        return this._VAT;
    \}

    set VAT(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('VAT must be a non-negative number');
        \}
        if (newValue \< 0) \{
            throw new Error('VAT must be a non-negative number');            
        \}
        this._VAT = newValue;
    \}

    get active() \{
        return this._active;
    \}

    set active(newValue) \{
        if (typeof newValue !== 'boolean') \{
            throw new Error('Active status must be a boolean');
        \}
        this._active = newValue;
    \}

    toString() \{
        const output = \[
            `Package: \\$\{this.name\}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): \\$\{this.value\}`,
            `- Value (VAT \\$\{this.VAT\}%): \\$\{this.value * (1 + this.VAT / 100)\}`
        \];
        return output.join('\n');
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>Incorrect VAT validation\</testInfo\>
PaymentPackage = class PaymentPackage \{
    constructor(name, value) \{
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Default value        
        this.active = true; // Default value
    \}

    get name() \{
        return this._name;
    \}

    set name(newValue) \{
        if (typeof newValue !== 'string') \{
            throw new Error('Name must be a non-empty string');
        \}
        if (newValue.length === 0) \{
            throw new Error('Name must be a non-empty string');            
        \}
        this._name = newValue;
    \}

    get value() \{
        return this._value;
    \}

    set value(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('Value must be a non-negative number');
        \}
        if (newValue \< 0) \{
            throw new Error('Value must be a non-negative number');            
        \}
        this._value = newValue;
    \}
    
    get VAT() \{
        return this._VAT;
    \}

    set VAT(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('VAT must be a non-negative number');
        \}
        if (newValue \> 0) \{
            throw new Error('VAT must be a non-negative number');            
        \}
        this._VAT = newValue;
    \}

    get active() \{
        return this._active;
    \}

    set active(newValue) \{
        if (typeof newValue !== 'boolean') \{
            throw new Error('Active status must be a boolean');
        \}
        this._active = newValue;
    \}

    toString() \{
        const output = \[
            `Package: \\$\{this.name\}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): \\$\{this.value\}`,
            `- Value (VAT \\$\{this.VAT\}%): \\$\{this.value * (1 + this.VAT / 100)\}`
        \];
        return output.join('\n');
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>Output does not convert VAT to percentage\</testInfo\>
PaymentPackage = class PaymentPackage \{
    constructor(name, value) \{
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Valoare implicită       
        this.active = true; // Valoare implicită
    \}

    get name() \{
        return this._name;
    \}

    set name(newValue) \{
        if (typeof newValue !== 'string') \{
            throw new Error('Name must be a non-empty string');
        \}
        if (newValue.length === 0) \{
            throw new Error('Name must be a non-empty string');            
        \}
        this._name = newValue;
    \}

    get value() \{
        return this._value;
    \}

    set value(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('Value must be a non-negative number');
        \}
        if (newValue \< 0) \{
            throw new Error('Value must be a non-negative number');            
        \}
        this._value = newValue;
    \}
    
    get VAT() \{
        return this._VAT;
    \}

    set VAT(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('VAT must be a non-negative number');
        \}
        if (newValue \< 0) \{
            throw new Error('VAT must be a non-negative number');            
        \}
        this._VAT = newValue;
    \}

    get active() \{
        return this._active;
    \}

    set active(newValue) \{
        if (typeof newValue !== 'boolean') \{
            throw new Error('Active status must be a boolean');
        \}
        this._active = newValue;
    \}

    toString() \{
        const output = \[
            `Package: \\$\{this.name\}` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): \\$\{this.value\}`,
            `- Value (VAT \\$\{this.VAT\}%): \\$\{this.value * (1 + this.VAT)\}`
        \];
        return output.join('\n');
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
//\<testInfo\>Missing inactive label in output\</testInfo\>
PaymentPackage = class PaymentPackage \{
    constructor(name, value) \{
        this.name = name;
        this.value = value;
        this.VAT = 20;      // Valoare implicită       
        this.active = true; // Valoare implicită
    \}

    get name() \{
        return this._name;
    \}

    set name(newValue) \{
        if (typeof newValue !== 'string') \{
            throw new Error('Name must be a non-empty string');
        \}
        if (newValue.length === 0) \{
            throw new Error('Name must be a non-empty string');            
        \}
        this._name = newValue;
    \}

    get value() \{
        return this._value;
    \}

    set value(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('Value must be a non-negative number');
        \}
        if (newValue \< 0) \{
            throw new Error('Value must be a non-negative number');            
        \}
        this._value = newValue;
    \}
    
    get VAT() \{
        return this._VAT;
    \}

    set VAT(newValue) \{
        if (typeof newValue !== 'number') \{
            throw new Error('VAT must be a non-negative number');
        \}
        if (newValue \< 0) \{
            throw new Error('VAT must be a non-negative number');            
        \}
        this._VAT = newValue;
    \}

    get active() \{
        return this._active;
    \}

    set active(newValue) \{
        if (typeof newValue !== 'boolean') \{
            throw new Error('Active status must be a boolean');
        \}
        this._active = newValue;
    \}

    toString() \{
        const output = \[
            `Package: \\$\{this.name\}`,
            `- Value (excl. VAT): \\$\{this.value\}`,
            `- Value (VAT \\$\{this.VAT\}%): \\$\{this.value * (1 + this.VAT / 100)\}`
        \];
        return output.join('\n');
    \}
\};
[/input]
[output]
Test Passed!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]
