# Formularele și manipularea datelor

[slide hideTitle]

# Prezentare generală a formularelor

js-angular-forms-12-13-Handling-Forms-and-forms-overview

Formularele din Angular ne permit să gestionăm datele de intrare ale utilizatorilor într-un mod rapid și interactiv.

Acest lucru ne permite să realizăm numeroase sarcini de introducere a datelor, precum conectarea, înregistrarea, comanda produselor, precum și stocarea și modificarea informațiilor.

Există două tipuri de formulare în Angular: **formulare reactive** și **formulare bazate pe șabloane**.

Ambele captează evenimentele de intrare ale utilizatorului din vizualizare, validează intrarea utilizatorului, creează un model de formular și un model de date pentru actualizare.

De asemenea, oferă o modalitate de urmărire a modificărilor.

Formularele **reactive** sunt mai ușor de reutilizat și testat, fiind în același timp mai robuste și permit o scalabilitate mai bună.

**Formularele bazate pe șabloane** sunt aplicabile în cazuri de utilizare mai de bază.

[/slide]

[slide hideTitle]

# Formulare bazate pe șabloane

js-angular-forms-14-Template-Driven-Forms

Formularele bazate pe șabloane nu sunt la fel de scalabile ca formularele reactive. 

Le folosim atunci când dorim o cerință de bază foarte simplă și o logică care poate fi gestionată exclusiv în șablon.

Urmați acești pași atunci când creați un formular scriind șabloane utilizând sintaxa șablonului Angular:

- Urmăriți modificările de stare
- Oferiți feedback vizual folosind clase CSS speciale
- Afișați erori de validare atunci când este necesar
- Utilizați variabile de referință pentru a partaja informații

[/slide]

[slide hideTitle]

# Problemă: Crearea unui formular bazat pe șabloane

js-angular-forms-15-problem-Create-a-Template-Driven-Form

Creați un formular **bazat pe șabloane** care să arate astfel:

[image assetsSrc="Angular-Forms.png" /]

După cum puteți vedea mai sus, conține:

- Un câmp de intrare **Procesor** cu o etichetă și un substituent pentru  "Intel Core i7"

- Un câmp de intrare **RAM** și o etichetă cu un substituent "16 GB DDR4"

- Un câmp de intrare **Hard Disk (GB)** de tip "number",  o etichetă și un substituent "1000"  

- Și, în sfârșit, un element și o etichetă `select` pentru un **sistem de operare**, cum ar fi "Windows 10"

[/slide]

[slide hideTitle]

# Importul Bootstrap

js-angular-forms-16-Import-Bootstrap

Bootstrap este un plugin JavaScript foarte puternic și unul dintre cele mai populare seturi de instrumente front-end.

Instalați-l folosind **NPM**:

```
npm install bootstrap
```

Apoi, importați-l în fișierul `angular.json` după cum urmează:

```
"styles": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "src/styles.css"
]
```

După cum se arată mai sus, trebuie să localizați matricea `styles` și să inserați calea către `bootstrap.min.css` în **node_modules**.

Veți utiliza Bootstrap pentru a crea **containere**, **grupuri de formulare**, **formulare-controale**, **butoane de stil** și **erori**.

[/slide]

[slide hideTitle]

# Introducerea Modulului de Formulare

js-angular-forms-17-Introducing-Forms-Module

Deoarece Angular este bazat pe module, pentru a gestiona formularele, trebuie să importăm **FormsModule**.

Puteți face acest lucru în `app.module.ts` așa cum se arată mai jos:

```js
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ]
})
export class AppModule { }
```

Modulul de formulare **exportă** mai mulți **furnizori** și **directive**, necesare pentru crearea formularelor bazate pe șabloane.

Pentru o listă completă a directivelor exportate, puteți consulta [Documentația Angular](https://angular.io/api/forms/FormsModule#directives).

[/slide]

[slide hideTitle]

# Crearea unei componente de formular

js-angular-forms-18-Create-Form-Component

## Definirea modelului de date

Primul pas pentru crearea unei componente de formular este definirea unui plan pentru această.

În directorul `src/app` creăm un fișier `laptop.ts` pentru formularul nostru **Laptop** :

```js
export class Laptop {

  constructor(
    public processor: string,
    public RAM: string,
    public hardDisk: number,
    public operatingSystem: string
  ) {  }

}
```

După cum se arată mai sus, exportăm o clasă, care conține cele patru proprietăți principale ale unui laptop:

- `processor` - Şir
- `RAM` - Şir
- `hardDisk` - Număr
- `operatingSystem` - Şir

## Crearea componentei unui formular

Ar trebui să creăm o clasă  `LaptopFormComponent`, care va defini aspectul și detaliile formularului.

În directorul `src/app` trebuie să creăm un nou folder `laptop-form`.

Vom stoca componenta noastră într-un fișier `laptop-form.component.ts`.

Angular CLI poate face majoritatea acestor lucruri pentru noi:

```js
ng generate component laptop-form
```

Un formular Angular are două părți:

- un **șablon** bazat pe **HTML** 
- o componentă **clasă**, utilizată pentru gestionarea datelor

```js
@Component({
    selector: 'app-laptop-form',
    templateUrl: './laptop-form.component.html',
    styleUrls: ['./laptop-form.component.css']
})

export class LaptopFormComponent {
    operatingSystems: string[] = [
        'Windows 10',
        'Linux',
        'Mac OS'
    ];

    // ...

    submitted = false;

    onSubmit() { this.submitted = true; }
}
```

În codul de mai sus, exportăm clasa `LaptopFormComponent`.

Are o proprietate `operatingSystems` - o matrice de șiruri.

Urmăriți proprietatea `submitted` și metoda  `onSubmit` -  acestea vor fi folosite la gestionarea trimiterii formularului.

[/slide]

[slide hideTitle]

# Șablon HTML inițial

js-angular-forms-19-20-Initial-HTML-Template

Utilizați următorul HTML pentru a crea șablonul.

Această marcare trebuie stocată în directorul nostru `src/app/laptop-form`, într-un fișier `laptop-form.component.html`.

```js
<div class="container">
  <h1>Laptop Form</h1>
  <form>
    <div class="form-group">
      <label for="processor">Proccessor</label>
      <input type="text" class="form-control" id="processor" 
      required>
    </div>
    <div class="form-group">
      <label for="ram">RAM</label>
      <input type="text" class="form-control" id="ram" 
      required>
    </div>
    <div class="form-group">
      <label for="hardDisk">Hard Disk (GB)</label>
      <input type="number" class="form-control" id="hardDisk">
    </div>
    <div class="form-group">
        <label for="os">Operating System</label>
            <select class="form-control" 
                id="os" 
                required>
                <option *ngFor="let os of operatingSystems"
                    [value]="os">{{os}}
                </option>
            </select>
    </div>
    <button type="submit" class="btn btn-success">Submit</button>
  </form>
</div>
```

Aici, avem un `div` cu o clasă "container" în care stocăm un **titlu** `h1` și un element `form`.

Există **patru** elemente "form-group" `div`, dintre care trei constau dintr-o etichetă și un câmp de intrare.

Grupul de formulare **sistem de operare** are un element `select` care folosește directiva structurală `*ngFor` pentru a aduna o listă de elemente de `option` OS.

În partea de jos, putem vedea un `button` de tip `submit`  care are clasele `btn` și  `btn-success`.

Acesta este un nume de clasă  **Bootstrap** care va aplica automat **styling** butonului nostru.

[/slide]

[slide hideTitle]

# Directiva NgModel

js-angular-forms-21-The-NgModel-Directive

Trebuie să afișăm, să ascultăm și să extragem date în același timp.

Pentru a face acest lucru, folosim directiva **ngModel**.

```js
<input type="text"
    class="form-control" id="processor"
    ngModel />
```

Directiva **ngModel** leagă comenzile unui formular bazat pe șabloane de proprietățile unui model de date.

Rețineți că această directivă nu va funcționa fără un **atribut de nume**.

Deci, trebuie să includem acest lucru în șablonul nostru HTML:

```js
<input name="processor"/>
```

Dacă dorim ca Angular să urmărească interacțiunea cu utilizatorul și valoarea controlului unui anumit formular, menținând vizualizarea actualizată, trebuie să includem directiva după cum urmează:

- `[(ngmodel)]` - aceasta este sintaxa pentru legarea de date în două direcții

[/slide]

[slide hideTitle]

# Directiva NgForm

js-angular-forms-22-The-NgForm-Directive

Declarați o variabilă șablon în formular.

```js
<form #f="ngForm">
```

Angular va atașa automat o **directivă NgForm**.

**Directiva NgForm** include, de asemenea, aceste caracteristici suplimentare:

- Poate monitoriza proprietățile
- Poate valida proprietăți
- Deține o proprietate `valid`,care este **adevărată** numai dacă **toate controalele** sunt valide

[/slide]

[slide hideTitle]

# Accesarea referinței locale

js-angular-forms-23-Access-the-Local-Reference

În Angular, putem prelua cu ușurință o valoare a oricărei intrări prin referințe locale.

Utilizați `@ ViewChild` pentru a accesa referința locală

```js
@Component({…})
export class LaptopFormComponent implements AfterViewInit {
    @ViewChild('f') form: NgForm
    ngAfterViewInit() {
        console.dir(this.form);
    }
}
```
După cum puteți vedea, folosim și cârligul de ciclu de viață `ngAfterViewInit`.

În interior, imprimăm proprietățile `this.form`  în consolă utilizând metoda `console.dir`.

[/slide]

[slide hideTitle]

# Trimiterea unui formular

js-angular-forms-24-Submit-a-Form

Butonul **trimite** din partea de jos a formularului nostru nu efectuează nimic de la sine.

Cu toate acestea, declanșează un **eveniment de trimitere**, datorită atributului său `type="submit"`.

Pentru a gestiona acest eveniment, legați proprietatea evenimentului **ngSubmit** de metoda `onSubmit()` a componentei formularului.

```js
<form (ngSubmit)="onSubmit()" #f="ngForm">
```

Metoda `onSubmit()` trebuie să trimită **valorile de control** direct către un API printr-un serviciu.

```js
onSubmit() {
  const content = this.form.value;
  // Trimite modelul către un API
}
```

## Gestionarea trimiterii formularului

Odată ce formularul a fost trimis, se recomandă ascunderea **div-block** încapsulant:

```js
<div class="container" [hidden]="submitted">
  <h1>Laptop Form</h1>
  <form (ngSubmit)="onSubmit()" #f="ngForm">

    // Elementele formularului merg aici...

  </form>
</div>
```

Pentru a realiza acest lucru, legăm proprietatea **div** cu clasa **container** de proprietatea `LaptopFormComponent.submitted`.

În acest fel putem arăta altceva, cum ar fi o animație **loading** sau un corp de formular **read-only**.

[/slide]

[slide hideTitle]

# Starea formularului de urmărire

js-angular-forms-25-Tracking-Form-State

**Directiva NgForm** urmărește dacă:
- Utilizatorul a atins controlul
- Utilizatorul a schimbat controlul
- Controlul este valid

**Directiva NgForm** nu urmărește doar starea controlului formularului.

```js
<form #heroForm="ngForm">
```

De asemenea, poate **actualiza** controlul cu clase speciale Angular CSS și poate folosi numele acestor clase pentru a schimba aspectul.

[/slide]

[slide hideTitle]

# Starea controlului de urmărire

js-angular-forms-26-Track-Control-State

Angular adaugă clase CSS personalizate la câmpurile și formularele de intrare, în funcție de stările lor.
 
## **ng-touched** / **ng-untouched**

Clasa `ng-touched` va fi aplicată dacă a fost atins câmpul de intrare.

`ng-untouched` se aplică dacă nu a fost încă atins.

## **ng-dirty** / **ng-pristine**

`ng-dirty` este folosit pentru a indica faptul că unul sau mai multe câmpuri au fost modificate.

`ng-pristine` indică faptul că se află în starea lor inițială.
 
## **ng-valid** / **ng-invalid**

Aceste două clase sunt adesea folosite atunci când dorim să informăm utilizatorul despre datele de intrare greșite.

`ngvalid` se aplică unui formular sau unui câmp de intrare atunci când conținutul lor este valid, în celălalt caz - Angular aplică `ng-invalid`.

[/slide]

[slide hideTitle]

# Adăugarea CSS personalizat pentru un feedback vizual

js-angular-forms-27-Add-Custom-CSS-for-Visual-Feedback

Puteți marca **câmpurile obligatorii** și datele **nevalide** în același timp, cu **bare** colorate în **stânga** **casetei de intrare**.

```css
input.ng-valid {
    border-left: 5px solid #42A948; /* green */
}
input.ng-invalid.ng-touched {
    border-left: 5px solid #A94442; /* red */
}
```

[/slide]

[slide hideTitle]

# Adăugarea validării

js-angular-forms-28-Add-Validation

Puteți adăuga **atribute HTML 5** la câmpurile de intrare pentru validare.

Angular urmărește atributele și schimbă starea în funcție de intrarea utilizatorului.

```js
<input type="text" class="form-control"
    id="processor"
    required
    minLength="5"
    ngModel
    name="processor">
```

Putem folosi o directivă `*ngIf` pentru a informa utilizatorul despre informații incompatibile.

De exemplu:

```js
<div *ngIf="processor.invalid && (processor.dirty || processor.touched)" class="alert">

  <div *ngIf="processor.errors?.required">
    A processor name is required.
  </div>
  <div *ngIf="processor.errors?.minlength">
    The processor's name must be at least 4 characters long.
  </div>
  <div *ngIf="processor.errors?.forbiddenName">
    The processor cannot be named like that.
  </div>
```

[/slide]

[slide hideTitle]

# Validatori terți

js-angular-forms-29-List-of-Validators-Third-party-Validators

Angular vine cu următoarele [validatoare](https://angular.io/api/forms/Validators):

- `min(num)` - acest validator necesită ca valoarea controlului să fie mai mare sau egală cu argumentul număr

```js
const ctrl = new FormControl(4, Validators.min(5));

console.log(ctrl.errors); // Ieșire: {min: {min: 5, actual: 4}}
```

- `max(num)` - necesită ca valoarea controlului să fie mai mică sau egală cu numărul transmis

```js
const ctrl = new FormControl(4, Validators.max(3));

console.log(ctrl.errors); // Ieșire: {max: {max: 3, actual: 4}}
```

- `required()` - acest validator asigură faptul că valoarea controlului nu este goală

```js
const ctrl = new FormControl('', Validators.required);

console.log(ctrl.errors); // Ieșire: {required: true}
```

Pentru formularele **bazate pe șabloane**, veți avea nevoie de următoarele [directive](https://angular.io/api?type=directive).

Și aici puteți găsi câteva pachete npm cu [validatoare personalizate](https://www.npmjs.com/package/ng5-validation).

[/slide]

[slide hideTitle]

# Afișarea mesajelor de eroare

js-angular-forms-30-31-Outputing-Error-Messages

În cazul unei erori, utilizatorul ar trebui să primească un mesaj adecvat cu o explicație a ceea ce a mers prost.

Utilizați starea controlului pentru a dezvălui un mesaj util.

Adăugați o variabilă de referință șablon în intrare.

```js
<input type="text" class="form-control"
    id="processor"
    required
    ngModel
    name="processor"
    #processor="ngModel">
```

Creați un **div** și afișați-l **numai** când starea de control este **nevalidă**.

Utilizați variabila de referință pentru a verifica starea.

Adăugați un mesaj util în **div**.

```js
<div *ngIf="processor.invalid && proccer.touched" alert alert-danger>
    Processor is required!
</div>
```

[/slide]

[slide hideTitle]

# Valabilitatea generală a formularului

js-angular-forms-32-Form-Overall-Validity

Putem lega validitatea generală a formularului folosind variabila de referință declarată în eticheta `<form>`.

Blocați butonul **submit** în cazul în care un control are **stare nevalidă**.

```js
<button type="submit" class="btn btn-success" [disabled]="f.invalid">
    Submit
</button>
```

[/slide]

[slide hideTitle]

# Legare de date bidirecțională

js-angular-forms-33-Two-way-Data-Binding

Puteți reacționa instantaneu la orice modificare utilizând legarea de date în două direcții.

Utilizați sintaxa de legare bidirecțională - o combinație de paranteze pătrate și paranteze rotunde `[()]`.

```js
<input type="text" class="form-control"
    id="processor"
    required
    [(ngModel)]="laptop.processor"
    name="processor"
    #processor="ngModel">
```

```js
constructor() {
    this.laptop = new Laptop();
}
```

[/slide]

[slide hideTitle]

# Directiva NgModelGroup

js-angular-forms-34-The-NgModelGroup-Directive

Această directivă poate fi utilizată doar ca un copil al unui **NgForm** în etichetele `<form>`.

Folosiți-l pentru a valida un subgrup al formularului dvs. separat de restul formularului.

Este util pentru câmpurile de intrare care au aceeași validare.

De exemplu, **Parolă** și **Confirmare parolă**:

```js
<div ngModelGroup="passData" #passData="ngModelGroup"></div>
```

```js
<div *ngIf="passData.invalid && passData.touched">
    Both passwords must be valid!
</div>
```

[/slide]

[slide hideTitle]

# Setarea și corectarea unei valori de formular

js-angular-forms-35-Setting-and-Patching-Form-Value

Utilizați `setValue()` or `patchValue()` pentru a schimba formularul din interiorul componentei sau pentru a adăuga valori implicite.

```js
changeInput() {this.laptopForm.form.patchValue({
    ram: '16 GB'
    processor: 'Intel Core i7'
    });
}
```

[/slide]

[slide hideTitle]

# Resetarea formularului

js-angular-forms-36-Resetting-the-Form

După trimiterea unui formular, resetarea este necesară pentru a șterge toate câmpurile de intrare și a reseta starea rutei.

```js
onSubmit() {
    const body = this.form.value;
    // Trimite corpul către un API
    this.form.reset();
}
```

[/slide]
