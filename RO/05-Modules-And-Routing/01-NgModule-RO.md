# NgModule

[slide hideTitle]

# Prezentare Generală a Modulelor în Angular

Angular-Modules-and-routing-3-4-The-NgModule

Un modul de tip Angular module este o **submulțime** de implementare a întregii aplicații Angular.

Acesta ne poate fi de folos în organizarea codului nostru în blocuri care funcționează sub forma unei singure unități.

Modulele sunt create cu ajutorul decoratorului `@NgModule()`.

Le puteți injecta în interiorul **altor module** sau al altor componente.

Așa arată principalul `app.module.ts`:

```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports:      [ BrowserModule ],
  providers:    [ Logger ],
  declarations: [ AppComponent ],
  exports:      [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

Puteți observa din exemplul nostru că există doar **obiecte simple** în interiorul unui anumit **decorator**.

Cele mai populare librării de tip **Angular** și **third-party** care vin la pachet cu **NgModules** sunt:

- [Material UI](https://material.angular.io/)
- [Ionic](https://ionicframework.com/)
- [AngularFire2](https://github.com/IdanCo/angularfire2)

[/slide]

[slide hideTitle]

# Creating Custom Modules

Angular-Modules-and-routing-5-6-Creating-Custom-modules

Putem implementa **module personalizate** (cunoscute și sub denumirea de module funcționale) atunci când aplicația devine semnificativ mai mare.

Ar trebui să importați **CommonModule** în momentul în care creați un modul personalizat. 

Nu este necesar să importați **BrowserModule**, din moment ce **CommonModule** face parte din acesta.

Este o practică bună să păstrați **BrowserModule** doar în modulul de bază (root).

Atunci când creăm o componentă în cadrul unui modul, aceasta va apărea în cadrul matricei intitulate **declarations**.

În mod implicit, componentele din matricea numită **declarations** sunt private.

Dacă dorim să utilizăm **componenta respectivă în afara acelui modul**, vom avea nevoie de matricea **exports**.

```js
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
   imports: [CommonModule],
   declarations: [CustomerListComponent, CustomerDetailsComponent],
   exports: [CustomerListComponent],
   providers: [CustomersService],
})
export class CustomersModule {}
```

În acest exemplu, creăm un modul intitulat **CustomersModule**.

Acesta **importă CommonModule** și **declară** două componente.

**CustomersModule** exportă doar una dintre componente și se folosește de un furnizor, care e numit **CustomersService**.

[/slide]

[slide hideTitle]

# Suggested Common Module

Angular-Modules-and-routing-7-Suggested-Common-Module

Atunci când lucrăm cu un proiect de mici dimensiuni, putem utiliza unicul `AppModule` pentru toate declarațiile.

Totuși, atunci când aplicația se extinde și devine mai complexă, ar trebui să utilizăm modulele **comune**, **de bază**, și **funcționale**.

Procedând astfel, ne vom asigura că există o separare corespunzătoare a scopurilor și de asemenea se va îmbunătăți scalabilitatea.

## Module Comune

```js
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CustomerComponent } from './components/customer/customer.component';
import { PercentagePipe } from './pipes/percentage/percentange.pipe';
import { CustomerStyleDirective } from './directives/customer-style/customer-style.directive';

@NgModule({
  imports: [ CommonModule ],
  exports: [
    CommonModule,
    CustomerComponent,
    PercentagePipe,
    CustomerStyleDirective 
  ],
  declarations: [ CustomerComponent, CustomerStyleDirective, PercentagePipe ]
})
export class SharedModule { }
```

Modulele comune **conțin părți** ale aplicației noastre, împărțite în multiple locuri.

Declarăm un modul comun cu scopul de a activa reutilizarea de componente.

Un exemplu de modul comun este încărcarea de animații, utilizată în cadrul aplicației noastre.

## Module funcționale

```js
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/SharedModule';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  imports: [
    NgModule,
    SharedModule
  ],
  declarations: [ DashboardComponent, ProjectComponent ]
})
export class DashboardModule { }
```

Un modul funcțional este o **sub-aplicație** aflată în interiorul proiectului nostru.

O aplicație de tip Angular conține multiple module funcționale.

Utilizarea lor **asigură o scalabilitate semnificativ mai bună** și, de asemenea, activează încărcarea leneșă, despre care vom învăța în cadrul unei lecții viitoare.

## Module de Bază

```js
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { ApiService } from './services/api.service';

@NgModule({
  providers: [ ApiService ]
})

export class CoreModule {
   // Cannot be used more than once
  constructor(@Optional() @SkipSelf() parent: CoreModule) {
    if (parent) {
      throw new Error(
        'You can only import CoreModule in the root module.'
      );
    }
  }
}
```

Modulele de bază reprezintă un mod de a separa stratul de configurație al aplicației noastre de restul aplicației.

Putem realiza acest lucru prin **declararea funcțiilor noastre**, precum și a modulelor comune într-un **modul de bază**, și pur și simplu îl vom furniza ulterior modulului `AppModule`.

Putem privi acest aspect ca fiind un **modul funcțional de tip părinte** pentru partea de conținut pe care o adăugăm unei anumite aplicații.

Puteți găsi mai multe informații cu privire la NgModules în [ghidul Angular](https://angular.io/guide/ngmodules).

[/slide]
