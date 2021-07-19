# Bootstrapping

[slide hideTitle]

# Bootstrapping-ul unei Aplicații

Bootstrapping este acțiunea de inițializare a aplicației noastre de tip Angular.

Atunci când încărcați o aplicație, Angular utilizează următoarea ordine de inițializare:

- Încărcarea fișierului index.html 
- Încărcarea Angular, a librăriilor necesare pentru rularea aplicației și a codului specific aplicației
- Executarea lui main.ts
- Încărcarea modulului App-level 
- Încărcarea componentei App-level 
- Procesarea de șablon

Modulul App-level, numit și root module, are o componentă app-level atașată acestuia. 

Fiecare aplicație are cel puțin un modul Angular, acel root module, care trebuie să fie prezent pentru **bootstrapping**, sau, cu alte cuvinte, pentru **pornirea** aplicației la lansare. 

Pentru a specifica mai exact care componentă ar trebui să fie încărcată de Angular, utilizăm decoratorul `@NgModule`.

**NgModule** descrie cum se îmbină părțile aplicației. 

Prin convenție, modulul **NgModule** este numit **AppModule**, dar îi putem asigna un alt nume semnificativ.

[/slide]

[slide hideTitle]

# Modulul Inițial

Adăugăm decoratorul `@NgModule` după instrucțiunile cu import.

Decoratorul `@NgModule` identifică **AppModule** drept clasă **NgModule**. 

`@NgModule` preia un obiect de tip metadata care sugerează lui Angular cum să compileze și să lanseze aplicația.

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

/* the AppModule class with the @NgModule decorator */
@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

Proprietatea `bootstrap` specifică lui **NgModule** specifică componenta corespunzătoare de tip app-level care să fie încărcată.

[/slide]

[slide hideTitle]

# Proprietățile Modulului Inițial

Acea **matrice de declarații** al modulului sugerează lui Angular care componentă e specifică acelui modul. 

Componentele noi sunt adăugate la **colecția de declarații**.

Declarăm o componentă într-o clasă **NgModule**. 

Utilizarea unei componente fără declararea acesteia va rezulta într-un mesaj ce sugerează eroare.

Acel **imports array** al modulului apare doar în obiectul de tip metadata numit `@NgModule`. 

În acest mod indicăm care **NgModules** sunt necesare pentru ca acest modul să funcționeze corespunzător.

Componenta, în acest caz, este **AppComponent**, care referențiază directive de componente sau pipe-uri în **BrowserModule**.

Serviciile necesare pentru funcționarea corespunzătoare a aplicației Angular sunt declarate în **providers array**.

Orice serviciu listat aici va fi disponibil oriunde în cadrul aplicației.

Aplicația lansează bootstrapping root **AppModule**, cunoscut și drept **entryComponent**. 

Bootstrapping crează de asemenea și componentele listate în bootstrap array și le inserează în DOM.

Aplicația standard creată de Angular CLI are doar o singură componentă, **AppComponent**, deci se află atât în matricea **de declarații**, cât și în **bootstrap**.

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

/* the AppModule class with the @NgModule decorator */
@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

[/slide]
