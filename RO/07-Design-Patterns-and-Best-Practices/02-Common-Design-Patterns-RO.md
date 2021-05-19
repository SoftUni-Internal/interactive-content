# Șabloane de proiectare comune

[slide hideTitle]
# Factory Design Pattern

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/08.JS-Applications-Design-Patterns-and-Best-Practices/RO/Design-Patterns-and-Best-Practices-11-12-factory-pattern-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Șablonul de proiectare factory** are drept scop crearea de obiecte. 

Funcționează tocmai precum o fabrică din viața reală.

Deoarece e un șablon de proiectare de tip creațional, acesta **fabrică** produse (obiecte), bazându-se pe cerințele aplicației. 

Logica **fabricării produselor** nu trebuie să fie știută de către clientul care utilizează serviciile fabricii. 

Noile tipuri de obiecte pot fi adăugate oricând în procesul de dezvoltare specific fabricii. 

## Când trebuie utilizat 

Utilizăm acest șablon de proiectare atunci când:

- Inițializarea obiectelor necesită un nivel ridicat de complexitate

Logica instanțierii de obiecte este **integrată** în obiectul de tip factory, iar clientul **nu trebuie să știe** logica efectivă atunci când folosește obiectul.

Apelează acel **factory** și **primește** obiectele create:

- Când trebuie să **generăm** diferite instanțe de obiecte în funcție de context

- Atunci când lucrăm cu obiecte sau componente care **împart aceleași proprietăți**

- Atunci când trebuie să creăm **un sistem cu cuplaj redus**

## Când nu trebuie utilizat

Când e utilizat incorect, poate introduce multă complexitate **care nu e necesară** în codul nostru. 

Nu îl utilizați decât atunci când scopul vostru este să creați o **interfață pentru crearea de obiect** și trebuie să puteți fi capabili să construiți în mod constant obiecte noi de diferite tipuri, fără a le expune logica clienților care îl utilizează.

Crearea de noi obiecte este **abstractă**. Se realizează utilizând o **interfață**, care, ulterior, poate cauza **probleme în procesul de testare unitară**, în funcție de cât de complexă este logica acelui factory.

[/slide]

[slide hideTitle]
# Șablonul Factory : Beneficii și dezavantaje

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/08.JS-Applications-Design-Patterns-and-Best-Practices/RO/Design-Patterns-and-Best-Practices-13-pros-and-cons-of-the-factory-pattern-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

|  **Pro** |**Contra**   |
|---|---|
| Creare dinamică de obiecte   |  Poate complica mai tare codul (prea multe **subclase**) |
| Abstracție   |  Poate introduce probleme în testarea unitară  |
| Reutilizare și o mai bună mentenanță   |   |

Unul dintre cele mai semnificative beneficii ale **șablonului de proiectare de tip factory** este că putem muta logica de instanțiere a obiectului într-un singur loc din program, ceea ce face codul mai ușor de suportat. 

Aceasta este principiul de bază din spatele **Principiului de Responsabilitate Unică**.

De asemenea, aderă și la **Principiul Deschis/Închis**, care menționează că fiecare entitate software  trebuie să fie deschisă spre extensie, dar închisă din punct de vedere al modificărilor. 

Acest concept se datorează faptului că putem adăuga noi tipuri de funcționalități fără a risca să stricăm codul existent.

[/slide]

[slide hideTitle]
# Șablonul Factory: Exemplu

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/08.JS-Applications-Design-Patterns-and-Best-Practices/RO/Design-Patterns-and-Best-Practices-14-15-examples-with-the-factory-pattern-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Mai jos avem un exemplu de utilizare al șablonului de proiectare factory:

Definim o funcție numită "**Digimon**", care acceptă un **nume** și un **specialMove** drept parametri și imprimă numele monstrului digital și mișcarea sa specială atunci când `.attack()` este invocat. 

```js live
function Digimon(name, specialMove) {
    this.name = name;
    this.specialMove = specialMove;

    this.attack = () => {
        console.log(`${name} attacks with ${specialMove}!`);
    };
}

function DigimonFactory() {
    this.create = function(name, specialMove) {
        return new Digimon(name, specialMove)
    }
}

let digimonFactory = new DigimonFactory();
let digitalMonsters = [];

digitalMonsters.push(digimonFactory.create('Agumon', 'Fire Breath'));
digitalMonsters.push(digimonFactory.create('Botamon', 'Bubble Blow'));

digitalMonsters.forEach((digimon) => {
    digimon.attack();
});
```

În exemplul de mai sus, avem un **digimonFactory** care e utilizat pentru a crea noi monștri digitali. 

Atunci când creăm o **matrice goală** și îi adăugăm câțiva monștri, după **crearea** lor utilizând factory. 

În final, iterăm prin întreaga colecție și **printăm numele** și mișcările speciale ale fiecărui monstru din interiorul colecției.

[/slide]

[slide hideTitle]
# Șablonul Decorator 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/08.JS-Applications-Design-Patterns-and-Best-Practices/RO/Design-Patterns-and-Best-Practices-16-17-decorator-pattern-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Șablonul de proiectare decorator** este un șablon de proiectare structural care promovează reutilizarea codului și reprezintă și o alternativă a subclasării.

Prin intermediul acestui șablon de proiectare, responsabilități sau comportamente extra pot fi **adăugate** obiectelor în timpul **rulării**, fără a strica partea de cod care le utilizează.

## Când se utilizează

- Atunci când trebuie să adăugăm o **funcționalitate** unui obiect, în mod dinamic (la rulare) sau în mod static, fără a afecta **comportamentul** altor obiecte din aceeași clasă

- Atunci când extinderea cu subclase nu e o metodă practică

## Când nu se utilizează

Decoratorii pot introduce probleme atunci când codul nostru se bazează pe anumite tipuri specifice de obiecte și le verifică tipul. 

De exemplu: 

```js
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

let toyota = new Car('Toyota', 'Corolla', 1998);

function performAction(car) {
    if (toyota instanceof Car) {
        console.log('Do something');
    } else {
        console.log('Do something else');
    }
}

performAction(toyota);
// "Do something"

```

Dacă ar fi să utilizăm un decorator deasupra obiectului de tip `Car` din exemplul de mai sus, apoi metoda `instanceof` ar returna `false`.

Ceea ce înseamnă că partea de cod din blocul **else** ar fi executat, ceea ce nu ar fi neapărat comportamentul intenționat.

[/slide]

[slide hideTitle]
# Șablonul Decorator: Beneficii și dezavantaje

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/08.JS-Applications-Design-Patterns-and-Best-Practices/RO/Design-Patterns-and-Best-Practices-18-pros-and-cons-of-the-decorator-pattern-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

|  **Pro** |**Contra**   |
|---|---|
| Extinde funcționalitatea fără a modifica obiectele pe care le decorează   | Poate adăuga prea multe obiecte mici  |
| Adaugă și scoate responsabilități atunci când e necesar  | Poate cauza probleme atunci când clientul se bazează mult pe tipurile concrete de componente  |
| Suportă principiul SOLID Deschis/Închis   | Instanțierea componentelor poate fi mai complicată |
[/slide]

[slide hideTitle]
# Șablonul Decorator: Exemplu

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/08.JS-Applications-Design-Patterns-and-Best-Practices/RO/Design-Patterns-and-Best-Practices-19-20-examples-with-the-decorator-pattern-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Aici avem un exemplu de funcționare al **șablonului de proiectare decorator**:

```js live
let EbookReader = function(cost, screenSize) {
    this.cost = cost;
    this.screenSize = screenSize;
    this.info = function() {
        console.log(`Cost: ${cost}, Screen size: ${screenSize}`);
    }
}

/*Decorator 1*/
let DecoratedEbook = function(ebookReader, model) {
    this.cost = ebookReader.cost;
    this.screenSize = ebookReader.screenSize;
    this.model = model;
    this.info = function() {
        console.log('Decorated ebook:');
        console.log(`Model: ${this.model}, Cost: ${this.cost}, Screen size: ${this.screenSize}`)
    }
}

let eBook = new EbookReader(100, 7);
let decoratedEbook = new DecoratedEbook(eBook, 'Kindle');


eBook.info();
decoratedEbook.info();
```

Decoratorul acceptă un parametru numit "**ebookReader**", care este obiectul pe care vrem să îl decorăm, precum și o nouă proprietate numită "**model**". 

În acest fel,  e-book reader-ul decorat ar avea o proprietate adițională, iar funcția `info()` a fost extinsă corespunzător, fără a modifica clasa originală "**EbookReader**".

[/slide]


[slide hideTitle]
# Șablonul Facade 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/08.JS-Applications-Design-Patterns-and-Best-Practices/RO/Design-Patterns-and-Best-Practices-21-22-facade-pattern-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[image assetsSrc="js-application-design-patterns-14.png" /]

**Șablonul de proiectare facade** este utilizat în aplicații pe nivele multiple, atunci când o anumită logică și funcționalitate trebuie să fie expuse unor **diferiți clienți**, protejându-i de logica complexă care nu trebuie să fie un aspect de luat în considerare de către clienți. 

Este folositor și în **formatare** și aproape întotdeauna îmbunătățește **utilizarea codului**.

Implementăm creând o clasă de tip "**wrapper**", **integrând** subsistemul. 

Clientul e **cuplat** spre facade și nu spre subsistemele din spatele său.

## Când trebuie utilizat

Utilizăm acest șablon atunci când avem:

- Un sistem **complex** și avem nevoie de o interfață **simplă** pentru a comunica cu aceasta

- Mult cod strâns **cuplat** care ar necesita ca clientul să aibă cunoștințe **extinse** cu privire la cum funcționează sistemul, pentru a-l putea utiliza


[/slide]

[slide hideTitle]
# Șablonul Facade: Beneficii și dezavantaje

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/08.JS-Applications-Design-Patterns-and-Best-Practices/RO/Design-Patterns-and-Best-Practices-23-pros-and-cons-of-the-facade-pattern-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

|  **Pro** |**Contra**   |
|---|---|
| Putem să ne **izolăm** codul de **complexitatea** **subsistemului** | Obiectul facade poate fi cuplat cu prea multe obiecte, fenomen numit și **supracuplare** |
| Ajută în menținerea **cuplajului restrâns**, ceea ce face ca software-ul să fie mai ușor de extins | Foarte mare **dependență** de interfața facade |

Șablonul de proiectare facade poate reduce complexitatea atunci când mai multe module comunică unul cu celălalt sau atunci când clientul are nevoie de mai multe clase în același timp.

[/slide]

[slide hideTitle]
# Șablonul Facade: Exemplu

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/08.JS-Applications-Design-Patterns-and-Best-Practices/RO/Design-Patterns-and-Best-Practices-24-example-with-the-facade-pattern-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Aici creăm o clasă facade "**ComplaintRegistry**", care conține o metodă numită "**registerComplaint**".

```js
class ComplaintRegistry {
    registerComplaint(customer, type, details) {
        let registry;
        if (type === 'service') {
            registry = new ServiceComplaints();
        } else {
            registry = new ProductComplaints();
        }
        return registry.addComplaint({
            id,
            customer,
            details
        });
    }
}

```

`ServiceComplaints()` și `ProductComplaints()` sunt subsisteme complexe, dar clientul nu trebuie să se îngrijoreze de implementarea acestora. 

Acel facade acceptă **customer**, **type**, și **details** ca parametri

Apoi, adaugă o plângere la registru:
  * **service complaint**, dacă tipul primit este **service**
  * **product complaint**, dacă este vorba de orice alt tip, invocând **addComplaint** pe registrul care a fost creat

[/slide]


[slide hideTitle]
# Șablonul Observer 

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/08.JS-Applications-Design-Patterns-and-Best-Practices/RO/Design-Patterns-and-Best-Practices-25-26-27-observer-pattern-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Șablonul de proiectare **Observer** facilitează o bună metodă de programare orientată pe obiect și promovează cuplajul slab.

Acesta este un șablon în care un obiect, numit **subject**, menține o listă de obiecte dependente și le notifică atunci când se produce orice tip de schimbare de stare, de obicei prin apelarea uneia din metodele lor. 

## Participanți comuni

[image assetsSrc="js-application-design-patterns-15.png" /]

- **Subiectul**: conține o colecție de observatori

Poate adăuga sau șterge observatori, dacă e cazul.

Implementează o **interfață** care permite obiectelor observate să fie adăugate sau șterse - `subscribe()`, `unsubscribe()`. 

Trimite notificări către observatorii care sunt atașați acestuia.

- **Observatorul**: are o interfață care trimite actualizări obiectelor care trebuie să fie notificate cu privire la schimbarea stării unui anumit subiect

## Concept 

[image assetsSrc="js-application-design-patterns-10.png" /]

Conceptul din spatele șablonului **observer** este că avem un subiect care poate avea unul sau mai mulți observatori. 

Acesta menține o colecție de observatori și îi notifică atunci când are loc o schimbare la nivelul stării sale.

Mesajele transmise observatorilor sunt trimise de obicei utilizând metoda `notify()`. 

Această metodă trece prin întreaga listă de observatori ai săi, iar, în interiorul buclei, se invocă metoda **update** a fiecărui observator.

Atunci când un observator nu mai trebuie să primească actualizări de la subiect, poate fi **detașat** (eliminat din colecția subiectului).

## Când se utilizează

Acest șablon de proiectare este folositor atunci când avem o clasă care trebuie să fie **monitorizată** de către alte clase din program, iar acestea trebuie **să știe** de prezența oricărei schimbări cu privire la **starea acesteia**. 

Un exemplu de genul ar fi funcționalitatea site-urilor web unde putem să ne abonăm la alți utilizatori prin apăsarea unui buton.

Numele de utilizator va fi adăugat la lista de **abonați** și de fiecare dată când se adaugă un nou videoclip, veți fi notificați, practic contul vostru este un obiect de tip Observer.

[/slide]

[slide hideTitle]
# Șablonul Observer: Beneficii și dezavantaje

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/08.JS-Applications-Design-Patterns-and-Best-Practices/RO/Design-Patterns-and-Best-Practices-28-pros-and-cons-of-the-observer-pattern-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

|  **Pro** |**Contra**   |
|---|---|
| Transmitere de **schimbări** și **actualizări** | Poate adăuga complexitate care nu e necesară  |
| Noi observatori pot fi adăugați la subiect fără modificări în codul său |  Ordine neprevăzută de trimitere a notificărilor |
| Adaugă și șterge observatori la orice moment |  |
| **Cuplaj slab** între subiect și observator |  |

Utilizând șablonul de proiectare Observer, introducem **cuplaj slab** între subiect și observatorii săi. 

Subiectul e conștient doar de colecția sa de observatori, pe care o menține, dar nu ține evidența implementărilor efective ale acestora.

Modificările pot fi **transmise** unui număr oricât de mare de observatori, deși ordinea în care sunt trimise **notificările** poate fi neprevăzută, ceea ce poate genera probleme.

[/slide]

[slide hideTitle]
# Observer Pattern: Example

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/08.JS-Applications-Design-Patterns-and-Best-Practices/RO/Design-Patterns-and-Best-Practices-29-example-of-the-observer-pattern-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Aici avem un exemplu simplificat de **șablon de proiectare observer**:

```js
class Observable {
    constructor() {
        this.observers = [];
    }
    subscribe(f) {
        this.observers.push(f);
    }
    unsubscribe(f) {
        this.observers = this.observers.
        filter(subscriber => subscriber !== f);
    }
    notify(data) {
        this.observers.forEach(observer => observer(data));
    }
}

```

Declarăm o clasă numită **Observable**. 

Are un constructor care inițializează o colecție de **observers**: `this.observers = []`. 

Metoda **subscribe** e utilizată pentru a adăuga observers pentru colecția de obiecte de tip observable. 

Metoda **unsubscribe** șterge (**detașează**) un observer de subiect.

Când e apelată metoda `notify(data)`, iterăm prin colecția de observers și **trimite o notificare** către **fiecare observer** care e **abonat** curent la obiectul de tip observable.
[/slide]
