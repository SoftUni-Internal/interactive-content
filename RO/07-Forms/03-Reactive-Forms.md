# Formulare Reactive

[slide hideTitle]

# Prezentare Generală a Formularelor Reactive

js-angular-forms-37-38-Handling-Forms-and-reactive-forms-overview

Formularele reactive oferă o abordare bazată pe model reactiv pentru gestionarea intrărilor de formulare ale căror valori se schimbă în timp.

Acestea sunt **imuabile** - o modificare a stării formularului returnează o nouă stare care menține integritatea modelului între modificări.

De asemenea, acestea sunt construite pe **fluxuri observabile**, ceea ce înseamnă că intrările și valorile din formă sunt furnizate ca fluxuri de valori de intrare.

Aceste valori de intrare pot fi apoi accesate **sincron**.

În acest fel, suntem siguri că informațiile stocate sunt consistente și previzibile la cerere.

Acestea permit, de asemenea, transformări reactive, cum ar fi adăugarea de elemente în mod dinamic, facilitând în același timp testarea unității.

Această abordare a construirii formularelor aduce și mai multe avantaje, cum ar fi:

- Este mai **puternic** și **mai ușor** de utilizat
- Activarea mai multor **personalizări** în cazuri de utilizare complexe
- Este **imuabil** ceea ce înseamnă că **nu se realizează legarea datelor**, o abordare de modelare a datelor **preferată** de mulți dezvoltatori

[/slide]

[slide hideTitle]

# Modulul Formulare Reactive

js-angular-forms-39-Reactive-Forms-Module

Pentru a utiliza forme reactive, ar trebui să importăm **Reactive Forms Module**:

```js
import { ReactiveFormsModule } from '@angular/forms'
```

Acest lucru ne oferă acces la mai multe directive.

## formGroup

Directiva `formGroup` este responsabilă pentru urmărirea valorilor și stărilor de validitate ale unui grup de instanțe `FormControl`.

## formControl și formControlName

Folosim `formControl` pentru a urmări valoarea și validitatea unui singur control de formular.

`formControlName` este folosit pentru a înregistra un `FormControl` într-un `FormGroup` existent într-un formular cu element de control după nume.

## formGroupName

`formGroupName` sincronizează un `FormGroup` imbricat cu un element DOM.

## formArrayName

`formArrayName` sincronizează un `FormArray` imbricat cu un element DOM.

[/slide]

[slide hideTitle]

# Clasa Componentelor

js-angular-forms-40-The-Component-Class

În clasa componentelor, vom crea instanțe de **FormGroup** și **FormControl** pe care le vom lega mai târziu în șablon.

Aceste controale ne oferă acces la starea de intrare a formularului, permițându-ne să-l **actualizăm** și **să-l validăm**, precum și să **ascultăm** modificările.

Putem actualiza șablonul cu controlul formularului folosind legătura **formControl** furnizată de **FormControlDirective**.

Ideea principală este de a transfera cea mai mare parte a logicii din șablon în interiorul clasei de componente.

```js
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-laptop-form',
  templateUrl: './laptop-form.component.html',
  styleUrls: ['./laptop-form.component.css']
})

export class LaptopFormComponent {
  this.laptopForm = new FormGroup({
    processor : new FormControl('Intel Core i7'),
    ram : new FormControl('16 GB DDR4')
  });
}
```

În acest exemplu, creăm un grup `laptopForm` care constă din două` formControls` - **"processor"** și  **"ram"**;

[/slide]

[slide hideTitle]

# Șablonul

js-angular-forms-41-Template

Odată ce am creat controale în clasă, trebuie să asociem `formGroup` cu un element de formular din HTML:

```js
<form (ngSubmit)="save()" [formGroup]="laptopForm">
```

În șablon, marcăm principalul **formGroup**, după care adăugăm **formControlName** la fiecare formular de control:

```js
<input type="text" class="form-control" id="processor"
    required
    formControlName="processor">
```

Aici, **formControlName** este numele instanței cheie.

Formularul de control este acum înregistrat la elementul de intrare  `processor` 

[/slide]

[slide hideTitle]

# Accesarea Proprietăților Modelului de Formular

js-angular-forms-42-Accessing-Form-Model-Properties

Există două moduri de a accesa proprietățile modelului formularului.

Putem utiliza **notația punct** după cum urmează:

```js
laptopForm.controls.processor.valid
```

A doua modalitate este folosind sintaxa `getter`:

```js
laptopForm.get('processor').valid
```

Ideea este de a scurta șablonul și de a transfera o astfel de logică în componentă atunci când se utilizează forme reactive.

[/slide]

[slide hideTitle]

# Utilizarea Constructorilor de Formulare

js-angular-forms-43-Using-Form-Builder

Majoritatea aplicațiilor Angular conțin multiple formulare.

Crearea manuală a instanțelor de control al formularului poate deveni o sarcină care necesită mult timp.

Serviciul `FormBuilder` conține o serie de metode care generează formulare de control.

Pentru a începe să utilizăm `FormBuilder`, trebuie să importăm clasa în fișierul nostru `laptop-form.component.ts`:

```js
import { FormBuilder } from '@angular/forms';
```

Următorul pas este să injectați serviciul în constructor:

```js
constructor(private fb : FormBuilder) { }
```

Serviciul `FormBuilder` conține multe metode utile, cum ar fi `control()`, `group()`, și `array()`.

```js
this.laptopForm = this.fb.group({
    processor : 'Intel Core i7',
    ram : '16 GB DDR4'
});
```

[/slide]

[slide hideTitle]

# Validarea

js-angular-forms-44-Validation

Validarea formularelor **reactive** poate fi efectuată **sincron** și **asincron**.

Comparativ cu formularele bazate pe șabloane, unde intrarea este validată prin adăugarea de atribute **șablon**, aici adăugăm funcții de validare la formularul de control al formularului direct din **clasa**.

## Validare Sincronă

Funcțiile de validare **sincrone** acceptă o instanță de control ca argument și apoi **returnează**:

- `null` - când intrarea este validă
- un set de **errors** - în cazul datelor nevalide

Când instanțiem un `FormControl`, putem trece o funcție sincronă ca un argument **secundar**.

## Validare Asincronă

Validatorii **asincroni** acceptă, de asemenea, o instanță de control ca argument, dar **returnează** fie o `Promise` sau un `Observable` care evaluează la `null` sau un set de erori.

Putem trece o funcție asincronă ca un **al treilea** argument atunci când instanțiem un formular de control.

În mod implicit, Angular invocă validatori asincroni după eșecul sincron.

Acest lucru se face din motive de performanță.

[/slide]

[slide hideTitle]

#  Configurarea Validării Încorporate

js-angular-forms-45-Setting-Up-Build-in-Validation

Definirea **FormGroup** cu un **FormBuilder** ne permite să adăugăm o serie de validări folosind clasa **Validators**.

```js
import { Validators } from '@angular/forms';

// ...

this.laptopForm = this.fb.group({
    processor : [
        'Intel core i7', [
            Validators.required,
            Validators.minLength(10)
        ]
    ]
});
```

Aici, folosim metoda `group`, trecând un obiect cu proprietatea `procesor`.

Metoda creează o nouă instanță a clasei `FormGroup`.

[/slide]

[slide hideTitle]

# Ajustarea Șablonului

js-angular-forms-46-Adjust-the-Template

Directiva `formGroup` are o proprietate ``errors``

Îl putem folosi pentru a **afișa** erori în funcție de valoarea sa:

```js
<div *ngIf="(laptopForm.get('processor').touched 
|| laptopForm.get('processor').dirty) 
&& laptopForm.get('processor').errors" class="alert alert-danger">
<span *ngIf="laptopForm.get('processor').errors.required">
  Processor is required!
</span>
<span *ngIf="laptopForm.get('processor').errors.minlength">
  Processor should be at least 10 symbols long!
</span>
</div>
```

Proprietatea `errors` este egală cu `null` în cazul unei intrări valide.

Aceasta înseamnă că elementul `span` cu directive`ngIf*`nu va fi afișat dacă datele de intrare sunt valide.

În celălalt caz, proprietatea va conține un obiect cu erori.

[/slide]

[slide hideTitle]

#  Urmărirea și Reacționarea la Schimbări

js-angular-forms-47-Watching-and-Reacting-to-Changes

Folosind **Forme reactive** avem posibilitatea de a **urmări** și **a reacționa** la modificările din **grupurile** de formulare și controalele de **formulare**.

Ori de câte ori o **valoare** a unei intrări **se modifică**, putem **să ne abonăm** la acel eveniment și să gestionăm **observatorul**.

```js
this.laptopForm.get('os')
.valueChanges
.subscribe(console.log);
```

Evenimentul `valueChanges` returnează un Observable.

În acest exemplu, vom folosi apoi metoda `subscribe` pentru a imprima cea mai recentă valoare a `os` pe consolă.

[/slide]

[slide hideTitle]

# Transformări Reactive: Exemple

js-angular-forms-48-Reactive-Transformations-Example

Importați **throttleTime** din următoarea bibliotecă.

```js
import { throttleTime } 'rxjs/operators';
```

Apoi, atașați funcția **throttleTime** la evenimentul **valueChanges** al formularului de control:

```js
processorControl.valueChanges
.pipe(throttleTime(1500))
.subscribe(value => {
    console.log(value);
});
```

În acest cod, metoda `throtlleTime` va emite prima valoare și va ignora apoi **1,5** secunde.

[/slide]
