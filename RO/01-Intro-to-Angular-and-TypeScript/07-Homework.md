# Teme pentru acasă

[slide hideTitle]

# TypeScript Playground

Instalați typescript prin tastarea următoarei comenzi într-un terminal:
`npm install typescript -g`.

[image assetsSrc="Angular-Introduction-4.png" /]

Creați un folder **.vscode** și un fișier **tsconfig.json** cu următoarea configurație:

```
{
   "compilerOptions": {
      "target":"es6",
      "module":"commonjs",
      "sourceMap":true
   }
}
```

[image assetsSrc="Angular-Introduction-5.png" /]

După ce ați obținut fișierul **.ts**, deschideți un **terminal** și executați **următoarele comenzi**:

`tsc {filename}.ts`
`node {filename}`

[image assetsSrc="Angular-Introduction-6.jpg" /]

[/slide]

[slide hideTitle]

# Clasa de date

Scrieți o clasă TypeScript care deține date despre o cerere HTTP.

Aceasta trebuie să aibă următoarele proprietăți:

-  **method** (String)

-  **uri** (String)

-  **verion** (String)

-  **message** (String)

-  **response** (String)

-  **fulfilled** (Boolean)

Primele patru proprietăți (**method**, **uri**, **version**, **message**) sunt setate prin intermediul **constructorului**, în ordinea menționată.

Proprietatea **response** este inițializată ca **undefined**, iar proprietatea **fulfilled** este setată inițial la **false**.

## Exemplu

| **Introducere eșantion**| **Obiect rezultat**|
| --- | --- |
|let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '') | \{ method: 'GET', uri: 'http://google.com', version: 'HTTP/1.1',message: '', response: undefined, fulfilled: false \} |

[/slide]

[slide hideTitle]

# Tichete

Scrieți un program folosind TS care gestionează o bază de date de tichete.

Un tichet are **destination** (șir), un **price** (număr) și un **status** (șir).

Programul va primi **două argumente** - primul este o **matrice de șiruri** care reprezintă descrierile tichetelor, iar al doilea este un **șir**, care reprezintă **criteriile de sortare**.

Descrierile tichetelor au următorul format:

"\<**destinationName**\>\|\<**price**\>\|\<**status**\>"

Stochează fiecare tichet și **returnează** un rezumat sortat al tuturor tichetelor, sortat după **destination**, **price** sau **status**, în funcție de **al doilea parametru** pe care l-a primit programul dumneavoastră.

Sortează întotdeauna intrările în ordine crescătoare (comportamentul implicit pentru sortarea **alfabetică**).

În cazul în care două tichete se compară la fel, se utilizează ordinea de apariție a acestora.

Consultați exemplele pentru mai multe informații.

## Intrarea

Programul dvs. va primi doi parametri - o matrice de șiruri și un singur șir.

## Ieșirea

**Returnează** o **matrice sortată** cu toate tichetele care au fost înregistrate.

## Exemplu

| **Exemplu Intrare** | **Matrice de ieșire** |
| --- | --- | 
| \['Philadelphia\|94.20\|available', 'New York City\|95.99\|available', 'New York City\|95.99\|sold', 'Boston\|126.20\|departed'], 'destination' | [ Ticket \{ destination: 'Boston', price: 126.20, status: 'departed' \}, Ticket \{ destination: 'New York City', price: 95.99, status: 'available' \}, Ticket \{destination: 'New York City', price: 95.99, status: 'sold' \}, Ticket \{ destination: 'Philadelphia', price: 94.20, status: 'available' \} ] |
|['Philadelphia\|94.20\|available', 'New York City\|95.99\|available', 'New York City\|95.99\|sold', 'Boston\|126.20\|departed'], 'status' | [ Ticket \{ destination: 'Philadelphia', price: 94.20, status: 'available' \}, Ticket \{ destination: 'New York City', price: 95.99, status: 'available' \}, Ticket \{ destination: 'Boston', price: 126.20, status: 'departed' \}, Ticket \{ destination: 'New York City', price: 95.99, status: 'sold' \} ] |

[/slide]

[slide hideTitle]

# Persoane

Definiți mai multe clase TS, care reprezintă dosarele angajaților unei companii.

Fiecare angajat are un **nume** și o **vărstă**, un **salariu** și o listă de **sarcini**, în timp ce fiecare poziție are proprietăți specifice care nu sunt prezente pentru celelalte.

Așezați toate funcționalitățile comune într-o clasă **parent abstract**.

Urmați diagrama de mai jos:

[image assetsSrc="Angular-Introduction-7.png" /]

Fiecare poziție are sarcini diferite.

În plus față de toate proprietățile comune, poziția de manager are o proprietate **dividend** pe care o poate încasa în plus față de salariul său.

Toți angajații au o funcție **work** care, atunci când este apelată, parcurge ciclic lista de responsabilități pentru postul respectiv și o imprimă pe cea curentă.

După ce toate sarcinile au fost tipărite, lista se reia de la început.

Angajații pot, de asemenea, să își **încaseze salariul**, care afișează suma, plus eventualele **bonusuri**.

Programul dumneavoastră trebuie să includă un modul care să conțină cele trei clase **Junior**, **Senior** și **Manager**.

Proprietățile **numele** și **vârsta** sunt stabilite prin constructor, în timp ce **salariul** și **dividend-ul** unui manager sunt stabilite inițial la zero și pot fi modificate ulterior.

Lista de **sarcini** este completată pentru fiecare poziție.

Obiectele rezultate conțin, de asemenea, funcțiile `work()` și `collectSalary()`.

Când `work()` este apelată, una dintre următoarele linii este tipărită în consolă, în funcție de sarcina curentă din listă:


"\{**employee name**\} **is working on a simple task.**"
"\{**employee name**\} **is working on a complicated task.**"
"\{**employee name**\} **is taking time off work.**"
"\{**employee name**\} **is supervising junior workers.**"
"\{**employee name**\} **scheduled a meeting.**"
"\{**employee name**\} **is preparing a quarterly report.**"


Iar când `collectSalary()` este apelat, imprimați următoarele:


"\{**employee name**\} **received** \{**salary + bonuses**\} **this month.**"


## Indicii

Ar trebui să începem prin a crea o clasă părinte, care va deține toate proprietățile, partajate între toate pozițiile.

Următoarea structură ar trebui să fie utilizată pentru obiectul nostru părinte:

```
    {
      age: Number,
      name: String,
      salary: Number,
      tasks: [],
      work: Function,
      collectSalary: Function
    }
```

Variabilele de date vor face parte din obiect și vor fi atașate la contextul local al acestuia folosind **this** în interiorul  **constructorului**.

Toate proprietățile cărora trebuie să li se atribuie o valoare în timpul inițializării obiectului sunt definite ca parametri de funcție.

Funcțiile sunt definite în interiorul corpului clasei.

De ce ar trebui ca clasa să fie abstractă?

```js
abstract class Employee {
    public name: string;
    public age: number;
    public salary: number;
    public tasks: Array<string>;

    (name: string, age: number) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }

    public work(): void {
        //TODO
    }

    public collectSalary(): void {
        //TODO
    }

    public getSalary(): number {
        //TODO
    }
}
```

Funcția `work()` trebuie să parcurgă lista de sarcini și să o tipărească pe cea curentă.

Cel mai simplu mod de a face acest lucru este să `shift` primul element din matrice și `push` până la final.

```js
public work(): void {
    const currentTask = this.tasks.shift();
    this.tasks.push(currentTask);
    console.log(this.name + currentTask);
}
```

Tipărirea salariului este destul de simplă.

Cu toate acestea, din moment ce managerul are un bonus la salariu, este mai bine să se calculeze întreaga sumă cu o funcție internă, pe care managerul o poate **suprascrie**.

```js
public collectSalary(): void {
    console.log(`${this.name} received ${this.getSalary()} this month.`);
}

public getSalary(): number {
    return this.salary;
}
```

Acum, orice obiect care moștenește din clasa Employee va avea toate proprietățile acesteia, precum și orice lucru nou definit în declarația lor.

Pentru a moșteni (extinde) o clasă, se definește o nouă clasă cu ajutorul cuvântului cheie **extends**.

De asemenea, trebuie să apeleze constructorul părintelui din constructorul lor, astfel încât se stabilește lanțul prototipurilor.

Pentru clasele **Junior** și **Senior**, singura diferență față de clasa-mamă **Employee** este reprezentată de elementele din tabloul de sarcini, deoarece acestea pot utiliza funcțiile direct din clasa de bază.

Clasele copil vor apela clasa părinte cu toți parametrii necesari și își vor introduce sarcinile direct în matrice.

```js
export class Junior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push(" is working on a simple task.");
    }
}

export class Senior extends Employee {
    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push(" is working on a complicated task.");
        this.tasks.push(" is taking time off work.");
        this.tasks.push(" is supervising junior workers.");
    }
}
```

**Manager** nu este foarte diferită, cu excepția faptului că constructorul lor trebuie să dețină o proprietate **dividend** care este inițial setată la zero.

Clasa trebuie să suprascrie funcția `getSalary()` pe care am adăugat-o mai devreme la clasa de bază, astfel încât să includă bonusul.

```js
export class Manager extends Employee {
    public dividend: number;

    constructor(name: string, age: number) {
        super(name, age);
        this.tasks.push(" scheduled a meeting.");
        this.tasks.push(" is preparing a quarterly meeting.");
    }

    public getSalary(): number {
        return this.salary + this.dividend
    }
}
```

[/slide]

[slide hideTitle]

# Elementele

Dacă Watermelons există, Firemelons, Earthmelons, și Airmelons ar trebui, de asemenea, să existe.

Creați **clase** pentru **cei 4 Elemelons**.

Creați o **clasă abstractă** pentru Elemelons.

Numiți-o **Melon**.

Clasa **Melon**  trebuie inițializat cu **height** \(Number\) și **melonSort** \(String\) ca argumente.

Cele două argumente trebuie să fie **public members**.

Creați clasele **Watermelon**, **Firemelon**, **Earthmelon**, **Airmelon**.

Fiecare dintre ele ar trebui să **moștenească** **clasa abstractă Melon** și funcționalitatea acesteia.

În afară de funcționalitatea abstractă, **fiecare** dintre **Elemelons** ar trebui să aibă o proprietate numită **elementIndex** \(Number\), care este **egală** cu "**greutatea** sa înmulțită cu **lungimea șirului**" din **melonSort**.

Proprietatea ar trebui să aibă doar un **getter**.

Toate clasele ar trebui să dețină o funcție `toString()` , care returnează următorul rezultat:

"**Element:** \{**Water/Fire/Earth/Air**\}"
"**Sort:** \{**elemelonSort**\}"
"**Element Index:** \{**elemelonElementIndex**\}"


Creați încă o clasă care se numește **Melolemonmelon**, care moștenește **unul** din cele **4 elemente, indiferent care**.

Melolemonmelon-ul **nu are niciun element**, dar se poate **transforma** în oricare dintre celelalte. Implementați în el o funcție `morph()` care **schimbă elementul curent** al Melolemonmelon-ului **de fiecare dată** când este apelată.

La inițializare, elementul **de start este Apa**.

De atunci încolo, ar trebui să se procedeze în următoarea ordine: **Foc, Pământ, Aer, Apă, Foc**.

Funcția `toString()` ar trebui să rămână la fel ca și clasa sa mamă.

## Exemplu

```js
let test : Melon = new Melon(100, "Test");
// Aruncă o eroare

let watermelon : Watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());

// Element: Water
// Sortare: Kingsize
// Element Index: 100
```

[/slide]

[slide hideTitle]

# Boxes

Creați o clasă Box<> care poate stoca orice.

Aceasta ar trebui să aibă două metode publice și un getter:

-  `add(element)`

-  `remove()`

-  **count - getter**

`Add` ar trebui să adauge un element peste conținutul său.

`Remove` ar trebui să elimine ultimul element plasat.

## Exemplu

| **Intrare**| **Ieșire** |
| --- | --- |
| let box = new Box\<Number\>(); | 3 |
| box.add(1); ||
| box.add(2); ||
| box.add(3); ||
| console.log(box.count); ||
| let box = new Box\<String\>(); | 2 |
| box.add("Pesho"); | 1 |
| box.add("Gosho"); ||
| console.log(box.count); ||
| box.remove(); ||
| console.log(box.count); ||

```js
class Box<T> {
    private _boxes = [];

    public add(el: T) {
        //TODO
    }
        
    public remove(el: T) {
        //TODO
    }

    get count(): number {
        //TODO
    }
}

export default Box;
```

[/slide]

[slide hideTitle]

# Perechi cheie-valoare

Creați o clasă generică care poate stoca o cheie și o valoare de orice tip.

Aceasta ar trebui să aibă următoarele metode publice:

-  `setKeyValue(key: T, value: U)`

-  `display()` - înregistrează cheia și valoarea în următorul format: "**key =** \{**key**\}, **value =** \{**value**\}"

## Exemplu

| **Intrare**| **Ieșire**|
| --- | --- |
| let kvp = new KeyValuePair\<number, string\>(); | key = 1, value = Steve |
| kvp.setKeyValue(1, "Steve");||
| kvp.display();||

```js
class KeyValuePair<T, U> {
    private key: T;
    private value: U;

    //TODO: Crează funcția setKeyValue

    //TODO: Crează funcția de afișare
}

export default KeyValuePair;
```

[/slide]
