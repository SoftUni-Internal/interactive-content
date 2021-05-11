[slide hideTitle]
# Rezumat

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/01.JS-Applications-Unit-Testing/RO/interactive-js-apps-unit-testing-22-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție ați învățat:

- Testele unitare verifică dacă codul dvs. funcționează conform așteptărilor

- Există o mulțime de cadre și biblioteci care ajută la scrierea testelor unitare

- Puteți testa fie comportamentul așteptat, fie starea corectă a unei componente


- Sintaxa Mocha
    ```js
    describe('title', function () {
        it('title', function () { ... });
    });
    ```

- Test Mocha folosind biblioteca încorporată
    ```js
    var assert = require('assert');

    // Crearea unui grup numit  "MathOperations"
    describe('MathOperations', function() {
        // Primul test care descrie ce testăm
        it('Multiplying 2 * 2 should equal 4', function(){
        assert.equal(4, 2*2);
        });
        // Al doilea test
        it('(0 + 2) * 2 should be equal to 4', function(){
        assert.equal(4, (0+2)*2);
        });
    });
    ```

- Chai este o bibliotecă de afirmații care adaugă mai multe moduri de a vă verifica codul pentru consistență și comportamentul așteptat

```js
let assert = require('chai').expect;
describe('ComparingStrings', function() {
    it('The two strings should be equal', function() {
        expect("string1").to.equal("string2");
    });
});
```

- Puteți instala cadre și biblioteci **la nivel global**, ceea ce le face disponibile pentru toate proiectele dvs.

- Am analizat două tipuri de abordări de codare:
    - **Code-first** - scrierea codului precedă orice teste unitare
    - **TDD (Test-Driven Development)** - mai întâi sunt scrise testele, descriind comportamentul așteptat, iar apoi codul se bazează pe ele

## În lecția următoare veți învăța:

- Module

- Tipuri de module

[/slide]
