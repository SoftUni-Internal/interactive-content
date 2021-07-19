# Serviciile

[slide hideTitle]

# De ce avem nevoie de servicii?

18-19-Serviciile-si-de-ce-avem-nevoie-de-ele

O aplicație Angular poate fi **împărțită** în câteva componente:

- Componenta **Logo** 
- Componenta **Sign in**  
- Componenta **Image** 
- Componenta **Create account** 

Aceste componente sunt **de sine stătătoare**, și fiecare dintre ele **reprzintă** o parte a interfeței utilizatorului.

Toate ar putea să **execute** sarcini comune, precum accesarea unei **baze de date** sau **randarea** unor imagini pe interfața vizuală.

În loc să trebuiască să **scriem codul pentru fiecare componentă**, putem să folosim serviciile Angular.

Un serviciu ar putea fi o **funcție**, o **variabilă**, sau o **trăsătură** de care are nevoie aplicația, și odată scris, el poate fi **injectat în toate** aceste componente.
 
O componentă poate **delega** sarcini precum:
- **Preluarea** de date de la server
- **Validarea** inputurilor de la utilizatori

Aceste sarcini pot fi făcute **disponibile** oricărei componente din aplicație.

Serviciile Angular au următoarele **trăsături**:

- Ele sunt pur și simplu **clase** TypeScript cu un decorator **injectabil**

Acest decorator **îi spune lui** Angular că o clasă este un **serviciu** și că poate fi **injectată** în **componentele** care au nevoie de acel serviciu.

- Serviciile dețin o **logică valoroasă de business** și pot de asemenea să fie utilizate pentru a interacționa cu partea de server 

De exemplu, dacă dorim să facem **AJAX calls**, putem să avem **metode** pentru aceste apeluri în cadrul **serviciului**.

Apoi, putem să le folosim ca o **dependență** în fișiere.

- Serviciile sunt **singleton**, adică doar o **singură** instanță a serviciului este **creată** și **aceeași instanță** este folosită de **fiecare** bloc din aplicație.  

- Un serviciu poate fi **înregistrat** ca parte a unui **modul** sau poate fi **înregistrat** ca parte a unei **componente** 

Pentru a înregistra un serviciu ca parte a **componentei**, va trebui să **specificăm** acest lucru în **matricea furnizor** a modulului.

[/slide]

[slide hideTitle]

# Crearea unui serviciu

20-Crearea-unui-serviciu

**Serviciile** Angular arată ca oricare **clasă** TypeScript care execută **manipularea unor date**.

În următorul exemplu, vom crea un serviciu simplu și îl vom numi `NotifyService`.

În directorul proiectului nostru `src/app`, vom crea un fișier nou, pe care îl vom denumi `notify.service.ts`.

In acest fișier, veți tasta următorul bloc de cod:

```js
export class NotifyService {
  notify(message: string) { 
    alert(message); 
  }
}
```

Serviciul nostru simplu conține o funcție de notificare `notify()`, care afișează o alertă în browser.

[/slide]


[slide hideTitle]

# Injectarea în componente

21-Injectarea-in-Componente

Pentru **a inkecta un serviciu într-o componentă**, ar trebui să mergem la fișierul TypeScript al acesteia.

Vom folosi componenta principală `AppComponent` ca și exemplu:

```js
import { Component } from '@angular/core';
import { NotifyService } from './notify.service.ts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [NotifyService]
})

export class AppComponent {
  constructor(private notifyService: NotifyService) {
    this.notifyService.notify("Our service is working!")
  }
}
```

În partea de sus a fișierului nostru, vom importa clasa `NotifyService`.

În decoratorul `@Component`, vom pasa o matrice care conține clasa noastră către proprietatea  `providers`.

Apoi, vom adăuga `NotifyService` ca parametru la funcția constructor a clasei `AppComponent`.

[/slide]


[slide hideTitle]

# Decoratorul Injectabil

22-Decoratorul-Injectabil

Cea **mai ușoară modalitate de a crea** un serviciu injectabil este prin utilizarea **Angular CLI**.

După deschiderea unui **instrument de linie de comandă** în directorul proiectului, tastați `ng generate service demo`.

Această comandă va genera o clasă schelet `DemoService`.

Putem înlocui `demo` cu orice alt nume vrem.

Serviciul nostru va fi localizat în `src/app/demo.service.ts`:

```js
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class DemoService {

  constructor() { 
    // ...
  }

}
```

Decoratorul `@Injectable` se folosește pentru a marca o clasă ca **membru** al **sistemului de injectare a dependențelor**.

Clasa `DemoService` va furniza un **serviciu** injectabil/ Ea poate de asemenea să aibă propriile sale **dependențe** injectate.

[/slide]
