[slide hideTitle]

# Rezumat

## În această lecție ai învățat:

- Componentele sunt elementele de bază ale oricărei aplicații unghiulare


- Puteți crea componente manual

```js
import { Component } from '@angular/core';
@Component({
    selector: 'app-home',
    template: '<h1>Home View</h1>'
    styleUrls: ['./app.component.css']
})
export class AppComponent{}
```

- Componentele pot fi create cu Angular CLI folosind comanda `ng generate component`, urmată de numele componentei.

-Fiecare componentă are propriul șablon care poate fi redat din HTML inline sau încărcat dintr-un fișier extern

```js
@Component({ 
    selector: 'app', 
    template: `<h1>{{title}}</h1`
});
```

- Există trei tipuri de legare a datelor
    - de la model la vizualizare
    - de la vizualizare la model
    - legătură în două sensuri
    
- Putem intersecta ciclul de viață al unei componente

```js
ngOnInit() { this.data = 'Retrieve data'};
```

- Componenetele pot interacționa una cu alta

```js
@Output() fromChild = new EventEmitter<boolean>();
```

## În lecția următoare, veți învăța:

- Strategia de detectare a schimbărilor
- Principiile SOLID
- Servicii
- Observabile și RxJS
- Client HTTP

[/slide]
