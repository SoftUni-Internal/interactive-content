# Laborator pentru Componente: Articles

[slide hideTitle]

# Creați Aplicația Angular

Angular-Components-Lab-1
Angular-Components-Lab-2
Angular-Components-Lab-3

Generați o nouă aplicație de tip Angular, utilizând comanda "**ng new articles-app**". 

După aceea, schimbați titlul site-ului vostru în "**Article Site**" în cadrul fișierului "**app.component.ts**" și înlocuiți codul HTML din fișierul "**app.component.html**" cu următoarea secvență de cod:

```html
<div style="text-align:center">
  <h1>
    Welcome to {{title}}!
  </h1>
</div>
```

Schimbați stilul antetului din cadrul fișierului "**app.component.css**", utilizând secvența de cod CSS care urmează:

```js
@import url('https://fonts.googleapis.com/css?family=Raleway');
h1 {
  margin: -10px -8px;
  padding: 15px 10px 15px 10px;
  background: #616192;
  color: white;
  font-family: 'Raleway',
  sans-serif;
}
```

Deschideți aplicația prin utilizarea comenzii "**ng serve -open**". 

Această comandă va **construi aplicația de tip Angular** și va deschide **o nouă fereastră în browserul vostru standard**. 

Aplicația voastră ar trebui să arate în felul următor:

[image assetsSrc="Angular-Components(1).png" /]

[/slide]

[slide hideTitle]

# Creați Modelul Pentru Article

Angular-Components-Lab-4

Avem nevoie de o clasă de articol de model, pentru a stoca informațiile.

Fiecare articol prezintă un titlu - un șir de caractere, o descriere - un șir de caractere, un autor - un șir de caractere, un url al imaginii - exprimat tot printr-un șir de caractere. 

Creați un director numit **models** în `src/app`, iar în interiorul acestuia, creați un fișier cu numele "article.model.ts". 

Trebuie de asemenea să **exportăm** clasa, pentru a o putea utiliza în oricare fișier avem nevoie.

```js
export class Article{
    constructor(
        public title: string,
        public description: string,
        public author: string,
        public imageUrl: string
    ) {}
}
```

[/slide]

[slide hideTitle]

# Creați Datele Pentru Article

Angular-Components-Lab-5

Trebuie să creăm un fișier de ”sămânță”, pentru ca acesta să poată conțină **datele** pe care le vom afișa mai târziu.

Creați un director numit **data** în `src/app`, iar în interiorul acestuia, generați un nou fișier cu numele "seed.ts", care va conține o matrice de obiecte. 

După acest pas, exportați matricea. 

Puteți schimba informațiile **din interiorul obiectelor dacă doriți**, dar nu schimbați numele proprietăților.

```js
const data = [{
  title: 'Article 1',
  description: 'LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1v',
  author: 'Author 1',
  imageUrl: 'http://ichef.bbci.co.uk/news/976/cpsprodpb/10434/production/_90121666_agreementcartoon.jpg'
},
{
  title: 'Article 2',
  description: 'LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1v',
  author: 'Author 2',
  imageUrl: 'http://www.digitalmeetsculture.net/wp-content/uploads/2015/04/article.jpg'
},
{
  title: 'Article 3',
  description: 'LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1v',
  author: 'Author 3',
  imageUrl: 'http://i.dailymail.co.uk/i/pix/2010/04/17/article-1266852-092DE58A000005DC-112_634x411.jpg'
},
{
  title: 'Article 4',
  description: 'LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1v',
  author: 'Author 4',
  imageUrl: 'https://www.seoclerk.com/pics/518476-1iDFBR1489198900.png'
},
{
  title: 'Article 5',
  description: 'LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1LongDesc 1v',
  author: 'Author 5',
  imageUrl: 'http://www.stat.columbia.edu/~gelman/teaching/literacy/images/IV.gif'
}]

export { data };
```

Avem nevoie și de o clasă **service**. 

În interiorul acesteia, vom **mapa** fiecare obiect la o **instanță de articol** și returnează o nouă matrice de articole. 

În directorul **data**, creați un nou fișier intitulat "**data.ts**", importați articolul model, precum și datele din fișierul "seed.ts" și adăugați ulterior următoarea clasă:

```js
export class ArticleData {
    getData() : Article[] {
        let articles : Article[] = [];
        for (let i = 0; i < data.length; i++) {
            articles[i] = new Article(data[i].title, data[i].description, data[i].author, data[i].imageUrl);
        }
        return articles;
    }
}
```

Avem o funcție `getData()` care iterează prin toate obiectele de date și crează instanțe de articole.

Acestea sunt **salvate într-o matrice** și sunt returnate din funcție. 

Mai târziu, vom învăța mai multe cu privire la **serviciile reale** și **injectabile**, precum și despre cum să implementăm acest lucru într-un mod corespunzător.

[/slide]

[slide hideTitle]

# Creați Componenta Pentru Article

Angular-Components-Lab-6

Generați o componentă de articol utilizând comanda "ng generate component article". 

Puteți să îl creați și singuri, **fără** a utiliza acel **CLI**, dar țineți cont de faptul că trebuie să creați un **fișier de tip typescript** care să stocheze logica specifică acelei componente, un **fișier HTML** pentru marcaj, precum și un **fișier CSS** care e destinat strict acestei componente. 

Țineți minte să importați componenta pe care ați creat-o în **matricea de declarații** aflată în interiorul modulului principal al aplicației. 

CLI realizează toate aceste lucruri pentru noi. 

Adăugați următoarea secvență de cod CSS în interiorul fișierului "**article.component.css**":

```js
@import url('https://fonts.googleapis.com/css?family=Raleway');
* {
  font-family: 'Raleway',
  sans-serif;
  font-weight: bold;
}
li {
  list-style-type: none;
  width: 240px;
  text-align: center;
  border-radius: 5px;
  padding-top: 20px;
  padding-bottom: 20px;
  transition: all 0.2s linear;
  text-align: center;
  margin-bottom: 20px;
  margin-right: 15px;
  background: #ADADE8;
}
li:hover {
  transform: scale(1.04);
  box-shadow:  -1px 2px 27px 3px rgba(0,0,0,0.09)
}
img {
  width: 150px;
  height: 150px;
  margin-top: 20px;
  border-radius: 4px;
  border: 1px solid rgb(248, 248, 248);
}
#title {
  margin-bottom: 10px; 
  color: white;
}
.desc {
  padding: 10px;
}
button {
  outline: none;
  border: none;
  background: white;
  color:rgb(7, 7, 7);
  padding: 6px;
  border-radius: 3px;
  margin: 5px;
}
button:hover {
  background: #616192;
  color: white;
}
```

Trebuie să stabilim o **relație** între **componenta de articol** și viitoarele **componente de articole**. 

Cea pe care o implementăm la momentul de față este **componenta-copil**. 

Va primi **două proprietăți** care trebuie să fie **transferate** de la componenta-părinte la componenta-copil.

[/slide]

[slide hideTitle]

# Creați Markup-ul HTML

Angular-Components-Lab-7

Adăugați următoarea secvență de cod HTML, aflat în interiorul fișierului "article.component.html":

```html
<li>
    <div id="title">{{article.title}}</div>
    <button *ngIf="showReadMoreBtn" (click)="readMore()">Read More</button>
    <button *ngIf="showHideBtn" (click)="hideDesc()">Hide Desc</button>
    <button (click)="toggleImage()">{{imageButtonTitle}}</button>
    <div class="desc" *ngIf="articleDescLen > 0">{{descToShow}}</div>
    <img *ngIf="imageIsShown" src="{{article.imageUrl}}" alt="article image" />
</li>
```

În interiorul marcajului HTML, vom afișa o descriere detaliată cu privire la fiecare articol - **title**, **description** și **image**. 

Avem un total de **3 butoane**, iar fiecare buton are asociată o funcție de gestionare **onclick**. 

Două dintre aceste butoane vor fi **activate**. 

De fiecare dată când se face click pe "**Read More**", încă 250 de  simboluri din descrierea articolului vor apărea, până când nu vor mai exista caractere rămase. 

În momentul în care descrierea noastră ajunge la sfârșit, trebuie să afișăm "**Hide Desc**". 

Prin apăsarea lui "**Hide Desc**", ar trebui să fie eliminate toate descrierile din interior și să se reseteze numărătorul.

Ambele butoane au funcții atașate acestora -`readMore()`, respectiv `hideDesc()`. 

De asemenea, trebuie să **afișăm** sau să **ascundem** imaginea. Din acest motiv, atașăm o funcție numită `toggleImage()`, căreia îi vom oferi o implementare puțin mai târziu. 

Toate proprietățile din cadrul directivei `*ngIf` sunt controlate în cadrul componentei noastre de articol.

[/slide]

[slide hideTitle]

# Creați Proprietățile Necesare

Angular-Components-Lab-8

În cadrul fișierului `article.component.ts`, trebuie să declarăm următoarele proprietăți, pe care le-am evidențiat în secțiunea precedentă:

```js
export class ArticleComponent {
    private symbols: number = 250;
    @Input() article: Article;
    @Input() articleDesc: string;
    descToShow: string;
    articleDescLen: number;
    showReadMoreBtn : boolean = true;
    showHideBtn : boolean = false;
    imageIsShown : boolean = false;
    imageButtonTitle: string = "Show Image";

    constructor() {
        this.aricleDescLen = 0;
        this.descToShow = "";
    }
}
```

Ambele **articole** și **articleDesc** reprezintă date care provin din componenta-părinte **Articles**, pe care o vom implementa mai târziu.

De aceea utilizăm decoratorul `@Input`, pe care trebuie să îl importăm. 

Avem nevoie de o proprietate pentru a afișa **descrierea curentă**, care poate varia, de la **0 simboluri** până la lungimea descrierii.

Descrierea articolului este un **numărător**, al cărui scop este să controleze numărul de simboluri pe care dorim să îl afișăm. 

Cele **3 proprietăți boolene** sunt utilizate în interiorul directivei `*ngIf` pentru a determina dacă ne arată sau ascunde un buton. 

De asemenea, conținutul butonului de imagine trece de la "**Show Image**" la "**Hide Image**".

În interiorul **constructorului componentei**, definim "article description length" pentru a fi egal cu **zero** și "description to show" pentru a fi un **șir gol de caractere**.

Putem realiza acest lucru și în ciclul de viață de hook `ngOnInit`.

[/slide]

[slide hideTitle]

# Implementați Funcția Read More

Angular-Components-Lab-9
Angular-Components-Lab-10

De fiecare dată când faceți click pe `readMore()`, trebuie să **mărim** lungimea descrierii articolului cu 250 de simboluri și, dacă noua lungime e **mai mare** decât lungimea **actuală**, trebuie să schimbăm ambele proprietăți **booleene** în mod corespunzător. 

Dacă noua lungime este una **mai mică** decât cea actuală, trebuie să **schimbăm** porțiunea cu ”description to show". 

Următoarea imagine e blurată. 

Încercați să implementați singuri această logică:

[image assetsSrc="Angular-Components(2).png" /]

## Implementarea Funcției ToggleImage 

De fiecare dată când facem click pe "**Show Image**", trebuie să schimbăm proprietatea booleană **true** și să schimbăm **titlul imaginii** în "**Hide Image**". 

Dacă facem click pe "**Hide Image**", trebuie să procedăm în mod contrar.

[image assetsSrc="Angular-Components(3).png" /]

## Implementarea Funcției HideDesc 

Această funcție este responsabilă cu **resetarea** părții cu "description to show", a celei cu "article description length" și cu **schimbarea** valorilor ambelor butoane.

[image assetsSrc="Angular-Components(4).png" /]

[/slide]

[slide hideTitle]

# Creați Componenta Articles

Angular-Components-Lab-11

După ce am creat componenta-copil, singurul lucru rămas de făcut este să creăm componenta articolului și să pasăm matricea de date de la **părinte** la **copil**.

Creați componenta "Article” utilizând "**ng generate component articles**" și adăugați următoarea secvență de cod CSS în interiorul fișierului "**articles.component.css**":

```js
ul {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 40px auto;
}
```

## Implementarea Logicii componentei

În interiorul componentei articolului, avem nevoie de proprietatea unei matrice care va conține articolele noastre. Trebuie să inițializăm matricea din interiorul hook-ului intitulat `ngOnInit`. 

În acest caz, creăm o **instanță** a "article data".

**Notă:** Această metodă nu este una recomandată, din moment ce Angular are **injectarea integrată de dependințe**, care e mereu o bună practică de pus în aplicare, dar din moment ce nu avem încă toate cunoștințele necesare pentru a știi cum să o implementăm, cealaltă metodă este una potrivită de abordat pentru moment.

```js
export class ArticlesComponent implements OnInit {
    articles : Article[];
    constructor() {

    }
    ngOnInit() {
        this.articles = new ArticleData().getData();
    }
}
```

## Creați Marcajul HTML 

Pasul următor constă în crearea marcajului HTML pentru componenta articolului. 

Trebuie să **iterăm** prin toate articolele, utilizând directiva `*ngFor`și să **pasăm** fiecare articol și descrierea corespunzătoare acestuia la componenta de articol **copil**, utilizând paranteze drepte. 

De asemenea, utilizăm componenta de articol numită **selector**.

```html
<ul>
  <app-article *ngFor="let a of articles"
   [article]="a"
   [articleDesc]="a.description">
  </app-article>
</ul>
```

Singurul lucru rămas este să plasăm selectorul de articole în interiorul fișierului "app.component.html", utilizând:

`<app-articles></app-articles>`

[/slide]

[slide hideTitle]

# Testați Aplicația

Angular-Components-Lab-12

Dacă ați reușit să implementați cu succes totul, **vă puteți testa aplicația** și puteți încerca toate **functionalitățile** acesteia. 

Puteți afișa/ascunde descrierea și puteți afișa/ascunde imaginea.

Ar trebui să arate în felul următor:

[image assetsSrc="Angular-Components(5).png" /]

[/slide]
