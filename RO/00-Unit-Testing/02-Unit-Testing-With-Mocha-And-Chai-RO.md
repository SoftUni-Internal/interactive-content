# Testarea unitară cu Mocha și Chai

[slide hideTitle]

# Ce sunt Mocha și Chai?

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/01.JS-Applications-Unit-Testing/EN/interactive-js-apps-unit-testing-8-9-10-mocha-and-chai-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


## Mocha

**Mocha** este un framework de testare JavaScript bogat în funcții care rulează pe Node.js sau în browser, făcând testarea asincronă simplă și ușor de realizat.

Testele Mocha se execută secvențial, permițând o raportare flexibilă și precisă, în timp ce mapează excepțiile neacoperite de la cazurile de testare corecte.

Mocha oferă funcții comune de testare, inclusiv **it**, **describe** și funcția principală care rulează testele.

Mocha este de obicei utilizat împreună cu **Chai**.


Aceasta este sintaxa unui test de unitate Mocha:

```js
describe('title', function () {
    it('title', function () { ... });
});
```

Mocha utilizează mai multe cârlige pentru a rula teste:

| **Name**  | **Description** |
| --- | --- |
| describe() | Folosit pentru gruparea conținutului testului de unitate, puteți imbrica cârlige describe(). |
| it() | Conține un singur caz de testare. |
| before() | Rulează o dată înainte de primul cârlig it() într-un describe() dat |
| beforeEach() | Rulează înainte de fiecare cârlig it() |
| after() | Rulează după primul cârlig it() |
| afterEach() | Rulează după fiecare cârlig it() |


Să vedem un exemplu cu biblioteca de afirmații încorporată. Există și două teste grupate împreună.

```js
var assert = require('assert');

// Crearea unui grup de testare numit  "MathOperations"
describe('MathOperations', function() {
    // Primul test care descrie ceea ce testăm
    it('Multiplying 2*2 should equal 4', function(){
      assert.equal(4, 2*2);
    });
    // Al doilea test
    it('(0+2)*2 should be equal to 4', function(){
      assert.equal(4, (0+2)*2);
    });
});
```



Aici este un link [link](https://www.mochajs.org/) la documentația Mocha.Js. 

## Chai

**Chai** este o **biblioteca de afirmații** care poate fi asociată cu orice framework de testare JavaScript.

Permite utilizarea multor afirmații diferite, cum ar fi `assert.equal`, `asset.typeOf` și `assert.lengthOf`.

Înainte de a folosi **Chai**, trebuie să importăm modulul necesar folosind următorul cuvânt cheie: `require`.

Acest lucru se face pe prima linie a codului: `let assert = require("chai").assert;`

Chai oferă trei stiluri diferite de scriere de teste utilizând unul dintre următoarele:
- Should
- Expect
- Assert

Vom arunca o privire mai atentă asupra **Assert** și **Expect** pe următoarele diapozitive.

[/slide]


[slide hideTitle]
# Chai Expect

Iată un exemplu de testare unitară folosind **expect**:

```js
let assert = require('chai').expect;
describe('ComparingStrings', function() {
    it('The two strings should be equal', function() {
        expect("string1").to.equal("string2");
    });
});
```

Câteva dintre afirmațiile disponibile în biblioteca Chai sunt:

| **Afirmaţie**  | **Descriere** |
| --- | --- |
| expect(actual).to.equal(expected) | Comparație folosind `==` (e.g. 2 ar fi considerat egal cu "2") |
| expect(actual).to.eql(expected) | Comparație folosind `===` (e.g. 2 nu este egal cu "2" deoarece sunt de tipuri diferite)  |
| expect(actual).to.deep.equal(expected) | La fel ca cel de mai sus |
| equal(actual).to.be(expected) | Verifică tipul obiectului |
| expect(actual).to.include(expected) | Afirmă că proprietățile obiectului actual sunt un subset al proprietăților obiectului așteptat |
| expect(actual).to.be.true | Afirmă că obiectul este strict adevărat (===). Puteți utiliza, de asemenea `.to.be.false`  |


Aici este un link [link](https://www.chaijs.com/api/bdd) la documentația Chai.JS despre `expect`.

[/slide]

[slide hideTitle]
# Chai Assert

Iată un exemplu de testare unitară folosind **assert**:

```js
let assert = require('chai').assert;
describe('pow', function() {
    it('2 raised to power 3 is 8', function() {
        assert.equal(pow(2, 3), 8);
    });
});
```

Grupul de testare se numește "pow". Conține un test de verificare a rezultatului unei operații.

Testele folosesc `assert.equal()` pentru a determina dacă operațiunea are succes (dacă are, testul trece).

Câteva dintre afirmațiile disponibile în biblioteca Chai sunt:

| **Afirmaţie**  | **Descriere** |
| --- | --- |
| assert.equal(actual, expected) | Comparație folosind `==` (e.g. 2 ar fi considerat egal cu "2") |
| assert.strictEqual(actual, expected) | Comparație folosind `===` (e.g. 2 nu este egal cu "2" deoarece sunt de tipuri diferite) |
| assert.deepEqual(actual, expected) | Afirmă că `actual` este profund egal cu `expected`. Folosit pentru obiecte, atunci când doriți să comparați fiecare valoare a fiecărei proprietăți|
| assert.typeOf(value, name) | Verifică dacă valoarea dată este de tipul specificat|
| assert.isTrue(value) | Verifică dacă valoarea dată este `true`. Puteți utiliza, de asemenea, isNull(), isNotNull, isUndefined(), isDefined(), isFunction(), isObject(), isArray(), isString(), isNumber(), isBoolean() |

Putem atașa un mesaj oricărei afirmații.

Pentru a face acest lucru, adăugăm un parametru suplimentar la oricare dintre afirmațiile de acest gen: assert.typeOf(null, 'null', 'This is of type null').

Aici este un [link](https://www.chaijs.com/api/assert) la documentația Chai.JS despre `assert`.

[/slide]
