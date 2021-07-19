# Principiile SOLID

[slide hideTitle]

# Principiul Responsabilității Unice

6-Principiile-SOLID
7-Principiul-Responsabilității-Unice

## Privire Generală Asupra Principiilor SOLID

Principiile **SOLID**, introduse de inginerul software și formatorul american **Robert Cecil Martin**, sunt cele mai importante cinci principii ale **programării orientate pe obiecte**.

**SOLID** este un acronim, la baza căruia stau următoarele cuvinte:

- **S**: Principiul responsabilității unice 
- **O**: Principiul deschis-închis (Open-closed)
- **L**: Principiul substituției al lui Liskov
- **I**: Principiul interfețelor segregate
- **D**: Principiul inversării dependențelor

Principiile SOLID principles formează o **filosofie** centrală pentru metodologii de dezvoltare a softurilor cum sunt **Agile** și **Adaptive**.

Când se **combină**, aceste principii fac ca aplicațiile noastre să fie mai ușor de **menținut** și de **extins**.

## Principiul Responsabilității Unice 

Acesta stabilește că **fiecare clasă** ar trebui să aibă **responsibilitea** doar pentru **o singură** parte a funcționalității unui program.

Cu alte cuvinte, comportamentul de clasă ar trebui să rămână **neschimbat pe parcursul vieții aplicației noastre**.

În contextul aplicațiilor Angular, o anumită componentă a unei aplicații ar trebui să aibă **o singură misiune**, respectiv aceea de a reprezenta **date utilizând șabloane**.

O componentă **nu** ar trebui să facă un apel HTTP, să modifice date, să transmită date, etc.

Aceste operațiuni sunt efectuate de **servicii**, subiect despre care vom vorbi în secțiunea următoare.

[/slide]

[slide hideTitle]

# Principiul Deschis-Închis (Open-Closed)

8-Principiul-Deschis-Închis

**Principiul Deschis-Înschis (Open-Closed)** spune că o clasă, un modul sau o funcție trebuie să fie **deschisă pentru extindere**, dar **închisă pentru modificare**.

Acest lucru înseamnă că imediat ce o **entitate software** dată a fost dată **în funcțiune** clienților, noi **nu ar trebui să îi mai modificăm comportamentul**.

Totuși, ar trebui să fie posibil să o **extindem** atât timp cât adăugarea unei noi funcționalități **nu implică modificări** în codul de bază deja creat.

**Repararea bug-urilor** constituie o **excepție** de la această regulă, fiindu-ne **permis** să **modificăm** codul sursă direct în scopul depanării.

Urmărind principiul Open-Closed, este mult mai probabil că o componentă va conține cod **mentenabil** și **reutilizabil**.

Dacă decidem să **încălcăm** acest principiu și să modificăm funcționalități deja operaționale și folosite de către clienți, această modificare poate avea un **impact negativ** asupra aplicației și a utilizatorilor acesteia.

[/slide]

[slide hideTitle]

# Principiul Substituirii al lui Liskov

9-Principiul-Substituirii-Liskov

Introdus de Barbara Liskov în anul 1987, **Principiul Liskov al substituirii** spune: **clasele copil** ar trebui să **nu încalce niciodată** **definițiile tipurilor claselor părinte**.

În termeni mai simpli, tipurile derivate trebuie să fie **complet substituibile** tipurilor lor de bază.

Clasele derivate care urmează această regulă **extind** numai funcționalitatea clasei de bază. 

Clasele copil ar trebui, de asemenea, să **nu elimine** comportamentul **clasei lor părinte**.

[/slide]

[slide hideTitle]

# Principiul Segregării Interfețelor

10-Principiul-Segregării-Interfațelor

**Principiul segregării interfețelor**, abreviat ISP, spune că clienții **nu ar trebui** să fie forțați să depindă de **metode pe care nu le folosesc**. 

Principalul obiectiv al ISP este să distribuie așa-numitele **interfețe grase** care sunt foarte mari, în **interfețe de "rol"** care sunt mai mici și mult mai specifice. 
 
Făcând acest lucru, **clienții** vor trebui să cunoască numai acele **metode** care le sunt **lor** de interes.

Principala intenție a ISP este să mențină sistemul **decuplat**, rezultând într-o **refactorizare**, **modificare** sau **redistribuire** mai ușoară.

[/slide]

[slide hideTitle]

# Principiul Inversiunii Dependenței

11-12-Principiul-Inversiunii-Dependenței

**Principiul Inversiunii Dependenței** (DIP) spune că:

- Atât **modulele de nivel înalt, cât și cele de nivel jos** ar trebui să depindă de **abstracții**, însă modulele de nivel înalt **nu ar trebui să fie dependente** de modulele de nivel jos

- **Detaliile (concrețiunile)** ar trebui să **depindă** de abstracții, dar abstracțiile **nu ar trebui să depindă** de detalii

DIP modifică **direcția** dependenței și **o împarte** între nivelurile înalte și cele joase.

[/slide]

[slide hideTitle]

# Principiul Inversiunii Dependenței: Abstracții și Concrețiuni

DEMO

## Abstracțiile

Abstractizarea  reprezintă procesul de **ascundere a tuturor datelor cu excepția celor mai importante** despre un anumit obiect pentru a îi **crește eficiența** și pentru a îi **reduce complexitatea**. t

Abstracția poate fi realizată prin folosirea **claselor** sau **interfețelor** **abstracte** atunci când definim ce este **obligatoriu** să includă o clasă implementată.

```js
abstract class Person {
    firstName: string,
    lastName: string,
    age: number,
    city: string
}
```
O persoană poate avea **mult mai multe caracteristici**, precum culoarea ochilor, genul, naționalitatea, etc., dar **în acest context**, avem nevoie doar de aceste caracteristici. 

Orice clasă care **moștenește** clasa `Person` **este obligatoriu să includă** cele patru **proprietăți** împreună cu **tipul** lor corespondent:

```js
class Brandon extends Person {
    firstName: string = 'Brandon',
    lastName: string = 'Charles',
    age: number = 29,
    city: string = 'Berlin'
}
```

Putem să creăm **oricât de multe obiecte ne sunt necesare**, iar toate vor moșteni clasa `Person`, și toate vor **trebui să aibă aceleași patru proprietăți**. 

## Concrețiunile

Concrețiunile sunt opusul **abstracțiilor**, unde clasa curentă conține **implementarea completă** a unei clase abstracte.

În exemplul de mai sus, clasa abstractă `Person` este un model pentru toate celelalte clase care o vor moșteni.

Clasele care o **moștenesc**,  precum, de exemplu, `Brandon`, sunt **concrețiuni**, ceea ce înseamnă că ele conțin **implementarea** clasei abstracte numită `Person`.

[/slide]

[slide hideTitle]

# Injecția Dependenței

13-14-Injecția-Dependenței

**Injecția dependenței** este un șablon de design popular și una dintre **trăsăturile cele mai importante** din Angular.

Ea ne permite **să injectăm** dependențe, precum un **cadru** sau o **bază de date**, în diferite **componente** ale aplicației noastre.

Cunoscută și sub denumirea de **inversare a controlului**, injecția de dependență este principiul de separare a **configurării** de **implementare**. 

Un **dezavantaj** al dependențelor este acela că **reduc capacitatea de reutilizare a codului**.

[/slide]

[slide hideTitle]

# Injecția de Dependență: Exemplu

Codul prezentat mai jos este un exemplu de injecție de dependență:

```js
private class ManageUsersService {
  constructor({ users }) {
    this.users = users
  }

  async findAllUsers() {
    return this.users.findAllUsers();
  }

  async addNewUser(user) {
    await this.users.addNewUser(user);
    alert('New user added');
  }
}

module.exports = ManageUsersService;

const ManageUsersService = new ManageUsersService({ users });
```

Pentru a injecta o dependență într-o **clasă**, folosim **constructorul**, în care putem să parsăm utilizatorii ca parametri **unul câte unul** sau folosind un singur **obiect**.

[/slide]

[slide hideTitle]

# Încălcări Clasice

15-Încălcări-Clasice

**Nu ar trebui** să utilizăm un `nou` cuvânt-cheie în interiorul unui constructor sau să folosim metode și proprietăți **statice**.

```js
public class Car {
  public engine: Engine;
  public gearbox: Gearbox;

  constructor() {
    this.engine = new Engine('Honda F20C');
    this.gearbox = new Gearbox('NORD 215N');
  }
}
```

Acest lucru va face ca clasa noastră să devină his **fragilă**, **inflexibilă** și **dificil de testat**.

[/slide]

[slide hideTitle]

# Cum să le Reparăm?

16-Cum-Să-Reparăm

Ar trebui să **adăugăm** întotdeauna **dependențele** prin intermediul **constructorului**:

```js
constructor( public engine: Engine, public gearbox: Gearbox)
```

**Nu ar trebui** să creăm **dependențele** în interiorul clasei **curente**.

Apoi, putem crea oricât de multe noi instanțe dorim:

```js
let carOne = new Car(
  new Engine('Audi N392'),
  new Gearbox('Stober JP34'));

let carTwo = new Car(
  new Engine('BMW RV371'),
  new Gearbox('BorgWarner NH83'));

```

[/slide]

[slide hideTitle]

# Cerințe Generale

17-Cerințe-Generale

Pe scurt, acestea sunt cerințele pentru a construi un șablon DI:

- Clasele ar trebui să nu creeze **niciodată** dependențe
  - ar trebui să fie primite din  **surse externe**
- Ar trebui să  **decuplăm** dependențele prin injecția din constructor
- Codul nostru ar trebui să fie **ușor de testat**

Pentru informații suplimentare, vizitați [Documentația aferentă Angular](https://angular.io/guide/dependency-injection).

Puteți afla mai multe despre principiile SOLID aplicate în JavaScript [aici](https://aspiringcraftsman.com/2011/12/08/solid-javascript-single-responsibility-principle/).

[/slide]
