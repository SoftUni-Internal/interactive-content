# Cârlige de Tip Lifecycle

[slide hideTitle]

# Prezentare Generală a Lifecycle

Angular-Components-27-28-Lifecycle-overview

**Metodele de cârlig pentru ciclul de viață** sunt apelate de Angular pe toate directivele și componentele.


Ciclul de viață al unei **componente** este administrat de Angular.

Angular **o creează**, **o randează**, o verifică **când există o șansă** în proprietățile sale legate de date, și **le distruge înainte de eliminarea ei** din DOM.

Angular gestionează crearea, redarea și urmărirea modificărilor proprietăților legate de date în componente.

Aceste acțiuni sunt administrate de **cârlige pentru ciclul de viață**.

Directivele au, de asemenea, un set similar de cârlige pentru ciclul de viață care le gestionează.

[/slide]

[slide hideTitle]

# NgOnInit și NgOnDestroy

Angular-Components-29-NgOnInIt-and-NgOnDestroy-example

`ngOnInit()` este un cârlig care este invocat o singură dată când componenta este instanțiată.

Execută **după afișarea proprietăților legate de date** și când sunt setate toate proprietățile de intrare.

Va executa **indiferent dacă** "**implements OnInit**" este inclus în definiția clasei.

`ngOnDestroy()` este apelat când o componentă este pe cale să fie distrusă.

```js
import { Component, OnInit, OnDestroy } from '@angular/core';
@Component({..})
export class GamesComponent implements OnInit, OnDestroy {
    games: Game[];
    ngOnInit() {
        console.log('CREATED');
    }
    ngOnDestroy() {
        console.log('DELETED');
    }
}
```

[/slide]

[slide hideTitle]

# Alte Cârlige de Tip Lifecycle

Angular-Components-30-Other-Lifecycle-Hooks


| **Lifecycle Hook** | **Descriere** |
| --- | --- |
| ngOnChanges() | Apelat atunci când se modifică orice proprietate legată de date a unei directive |
| ngDoCheck() | Apelat atunci când **detectarea modificărilor este executată**. Este apelat fix după `ngOnChanges()` și `ngOnInit()`|
| ngAfterContentInit() | Se execută o dată după ce întregul conținut al unei directive a fost complet inițializat |
| ngAfterContentChecked() | Apelat după ce detectorul de modificări a verificat tot conținutul unei directive |
| ngAfterViewInit() | Apelat după ce vizualizarea componentei a fost complet inițializată |
| ngAfterViewChecked() | Apelat după ce detectorul de modificări implicite a verificat vizualizarea componentei pentru modificări. |

Toate cârligele ciclului de viață pot fi personalizate cu acțiuni pe care dorim să le realizăm într-un anumit stadiu al vieții unei componente.

De exemplu, putem crea o componentă care are o implementare personalizată a cârligului `ngAfterContentInit()`.

```js
@Component({
    selector: 'heading',
    template: `<h1>{{title}}</h1>`,
    styles: [ `h1 { background-color: red; }` ]
})

class MyHeading implements AfterContentInit {
    ngAfterContentInit() {
        //... some action to execute after initialization here
    }
}
```

[/slide]
