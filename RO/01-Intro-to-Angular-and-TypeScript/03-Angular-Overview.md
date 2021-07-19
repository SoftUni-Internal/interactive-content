# Prezentare generală Angular 

[slide hideTitle]

# Ce este Angular?

Intro-to-Angular-and-Typescript-11-12-Angular-Overview

**Angular** este un **framework de aplicații web** open-source, dezvoltat de **Google**, scris în  [TypeScript](https://en.wikipedia.org/wiki/TypeScript), pentru construirea  aplicațiilor **front-end la nivel de întreprindere**.

Angular încorporează cele mai bune **practici front-end** și **instrumente end-to-end**, de asemenea **Angular CLI** ne oferă un proces de construire **de înaltă calitate**, care ne permite să creăm rapid o aplicație bine structurată .

De asemenea, ne oferă **teste end-to-end**, **teste unitare** și multe altele.

Componentele Angular sunt elementele sale de bază, care sunt organizate în "**NgModules**".

O aplicație Angular este definită de un set de "**NgModules**", care colectează codul aferent în seturi funcționale.

**Cerința minimă pentru o aplicație Angular** este de a avea nu mai puțin de **un modul rădăcină** care să permită bootstrapping, pot exista multe module pentru caracteristici suplimentare.

Iată un exemplu de componentă Angular:

```js
   import { Component } from '@angular/core';

   @Component({
      selector: 'my-app',
      template: `<h1>Hello {{ name }}</h1>`,
   })
   export class AppComponent {
      name = 'Angular';
   } 
```

În acest exemplu, avem clasa **AppComponent** decorată cu **decorator de componente** - `@Component`.

Acest **decorator** are un **selector** și un **șablon**.

**Selectorul** înfășoară șablonul ca instrucțiune și declanșează instanțierea acelei instrucțiuni.

Asta înseamnă că ori de câte ori există o etichetă HTML `my-app`, **AppComponent** se va inițializa singur, iar **șablonul** va fi redat.

[/slide]

[slide hideTitle]

# Versiuni Angular

Intro-to-Angular-and-Typescript-13-Angular-Versions

Prima versiune Angular a fost numită **Angular 1**, numită acum **AngularJS**.

A doua - **Angular 2** este o **rescriere completă** a **AngularJS**.

Toate versiunile următoare după **Angular 2** sunt numite doar: **Angular**.

[image assetsSrc="Angular-Introduction-3.png" /]

[/slide]
