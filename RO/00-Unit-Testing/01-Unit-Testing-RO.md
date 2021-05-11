# Testarea Unitară

[slide hideTitle]

# Ce este testarea unitară?

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/01.JS-Applications-Unit-Testing/EN/interactive-js-apps-unit-testing-3-4-5-unit-testing-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Există diferite tipuri de testare, cum ar fi testarea unitară, testarea integrării, testarea acceptării, testarea end-to-end și multe altele.

Dezvoltatorii își testează codul scriind teste unitare.

Acestea se numesc teste unitare, deoarece sunt utilizate pentru testarea părților aplicațiilor (unităților) prin instanțierea unei porțiuni mici a aplicației și verificarea comportamentului acesteia independent de alte părți.

Testele unitare verifică dacă anumite funcționalități de cod **funcționează conform așteptărilor.**

De asemenea, oferă dezvoltatorilor **informațiile necesare** când apar **erori în cod.**

Vom scrie propriul nostru **test** înainte de a începe să folosim unele dintre framework-urile cunoscute.


```js live
function sortNums(arr) {
    arr.sort((a, b) => a - b);
}

// Testul nostru
let nums = [2, 15, -2, 4];
sortNums(nums);
if (JSON.stringify(nums) === '[-2,2,4,15]') {
    console.error('They are equal!');
}
```

În exemplul de mai sus, avem o funcție simplă de sortare numită `sortNums()`. 

Sortează numerele dintr-o matrice.

În testul nostru, declarăm și inițializăm o matrice care conține numere.

Apoi sortăm matricea.

În cele din urmă, avem o instrucțiune **if**, unde verificăm dacă matricea a fost sortată conform așteptărilor.

Folosim metoda `JSON.stringify()` pentru a converti matricea într-un șir și a o compara cu ieșirea așteptată - \[-2,2,4,15\].


## De ce avem nevoie de testarea unitară?

Scrierea testelor unitare vă va obliga să refactorizați codul care nu este bine structurat și vă va ajuta să îl îmbunătățiți.

Acest lucru se datorează faptului că un cod slab structurat va fi dificil sau imposibil de testat.

Utilizarea testelor unitare crește fiabilitatea codului.

Efectuarea testelor unitare înseamnă **practic** asigurarea calității codului.

Afișează probleme și erori înainte ca produsul să fie trimis pentru testarea de integrare.

Testele unitare facilitează procesul de depanare.

Acestea asigură **un design mai bun al codului**, indiferent de limbajul de programare pe care îl utilizați.

Cel mai bun lucru despre scrierea testelor unitare este că îi face pe dezvoltatori să își scrie codul având în vedere testabilitatea.

Când codul este testabil, acest lucru îl face de obicei mai ușor de citit, de cuplat și reutilizabil.

[/slide]

[slide hideTitle]

# Structura testării unitare

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/01.JS-Applications-Unit-Testing/EN/interactive-js-apps-unit-testing-6-7-unit-tests-structures-and-frameworks-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Arrange/Act/Assert (AAA)** este un model pentru aranjarea și formatarea codului în metodele Unit Test.

Fiecare test unitar este împărțit în trei secțiuni:**arrange**, **act**, și **assert**. 

Secțiunea **arrange**  conține codul necesar pentru configurarea testului.

Aici creăm obiecte și putem seta unele comportamente așteptate sau valori.

Următoarea secțiune este **Act**, unde invocăm metoda testată.

În secțiunea **Assert**, verificăm comportamentul sau starea așteptată.

Dacă așteptările stabilite în partea **assert** nu sunt îndeplinite, testul eșuează, în caz contrar, testul trece cu succes.

Să vedem în practică:

```js
// Aranjați toate condițiile prealabile și intrările necesare
let nums = [2, 15, -2, 4];
// Acționați asupra obiectului sau metodei testate
sortNums(nums);
// Afirmați că rezultatele obținute sunt ceea ce ne așteptăm
if (JSON.stringify(nums) === '[-2,2,4,15]') {
    console.error('They are equal!');
}
```

Există două categorii principale de teste unitare:
- **state-based** -  testează dacă starea rezultată a sistemului este corectă
- **interaction-based** - testează dacă anumite metode sunt invocate corect

## Framework-uri de Testare Unitară

Aceasta este o listă a unor framework-uri populare de testare.

**Testarea Unitară JS:**


| **Framework**  | **Descriere** |
| --- | --- |
| Mocha  | Un framework de testare JavaScript bogat în funcții care rulează pe Node.js și în browser pentru testare asincronă |
| QUnit  | O suită de testare a unității JavaScript puternică și ușor de utilizat. Testele pot fi efectuate oriunde |
| Unit.js  | O bibliotecă de afirmații pentru Javascript, care rulează pe Node.js și browser. Funcționează cu orice cadru de testare și cadru de testare unitară |
| Jasmine  | Un framework bazat pe comportament care funcționează imediat, fără dependențe necesare pentru ca acesta să funcționeze |


**Biblioteci de afirmații utilizate în combinație cu framework-urile de testare unitară:** 

| **Nume**  | **Descriere** |
| --- | --- |
| Chai | O bibliotecă de afirmații pentru node și browser care poate fi asociată cu orice framework de testare JavaScript|
| Assert.js | O bibliotecă de afirmații de tip run-time pentru JavaScript |
| Should.js | Compatibil cu orice framework de testare unitară. Vă păstrează codul de testare curat, ușor de înțeles și mesajele de eroare utile. |


**Framework-urile Mocking:** 

Mocking este utilizat atunci când codul pe care îl testați are dependențe externe necesare pentru a rula.

Aici intră în joc framework-urile mocking.

Unele dintre cele mai populare sunt:

- Sinon
- JMock
- Mockito
- Moq

[/slide]
