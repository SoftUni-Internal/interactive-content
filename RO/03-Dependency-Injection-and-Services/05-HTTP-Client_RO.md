# Clientul HTTP 

[slide hideTitle]

# Modulul de Client HTTP

32-33-Clientul-HTTP-și-Modulul-de-Client-http

Modulul HTTP din Angular ne permite să **interacționăm** cu mii de **API-uri de pe internet** precum Facebook, Twitter, și serviciile web ale Amazon.

Ceea ce au în comun toate aceste produse este că furnizează o **REST API** pe care să le **consumați** dintr-o aplicație Angular.

**REST API** este responsabilă pentru **comunicarea** dintre client și server. 

Datele pot fi recuperate fără **modificare**  folosind o cerere de tip "**GET**". 

Serverul va răspunde cu **codul de stare** precum și cu datele care au fost **cerute**.

Dacă cererea s-a efectuat cu succes, serverul va returna un status  "**200 OK**" împreună cu datele **solicitate**.

Dacă cererea **nu a fost validă** sau dacă a apărut **o problemă internă la server**, veți primi un cod de stare **400** sau respectiv **500**.

Mai pot exista și alte tipuri de cereri:

- "**POST**" - Îi spune serverului că vor fi create noi date și trimite o sarcină utilă purtătoare a acestora.
- "**PUT**" - Actualizează o resursă disponibilă pe server.
- "**PATCH**" - Setează instrucțiunile privind modul cum se modifică o resursă de pe server.
- "**DELETE**" - Șterge o resursă de pe server.
 
Pentru a începe, mergeți la `src/app/app.module.ts`:

```js
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

La începutul fișierului vostru, importați `HttpClientModule`:

`import { HttpClientModule } from '@angular/common/http';`

Apoi, puneți `HttpClientModule` în matricea importurilor.

De acum înainte, `HttpClient` poate fi injectat în diferite servicii. 

[/slide]

[slide hideTitle]

# Utilizarea Clientului HTTP în Servicii

34-Utilizarea-Clientului-HTTP-in-Servicii

Deși este posibil să importăm modulul `HttpClient` într-o componentă, acest lucru nu este recomandat.

O soluție mai bună ar fi să îl **separăm**  în propriul său **serviciu** Angular. 

În diapozitivele următoare, vom simula modul de accesare a unor fotografii dintr-o bază de date.

Utilizând Angular CLI, tastați:

`ng generate service services/Photos`

Acest lucru va crea un serviciu nou cu denumirea `PhotosService` în cadrul directorului `services`.

În partea de sus a fișierului `PhotosService`, importați `HttpClient`.

```js
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PhotosService {
  constructor (private http : HttpClient) {

  }

  getAllPhotos() : Observable<Photo[]> {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    return this.http.get<Photo[]>(url);
  }
}
```

Metoda `getAllPhotos()` trimite o cerere GET către un demo al unei REST API.

[/slide]

[slide hideTitle]

# Abonarea la un Observabil

35-Abonarea-la-un-Observabil

Pentru a se abona la un Observabil, creați o componentă `PhotosComponent` folosind Angular CLI:

`ng g c photos`

```js
import { PhotosService } from 'services/photos.service.ts';

// ...

export class PhotosComponent implements OnInit {
  photos: Photos[];   
  constructor (
   private photosService : PhotosService
  ) { }

ngOnInit(): void {
   this.photosService.getAllPhotos()
      .subscribe(data => {
         this.photos = data;
      });
  }
}
```

Mai întâi, importați serviciul `PhotosService` din folderul `services`.

Inlăuntrul `ngOnInit()`, folosiți metoda `subcribe()`.

[/slide]

[slide hideTitle]

# Tastarea Verificării Răspunsului

36-Tastarea-Verificării-Răspunsului

Un avantaj major al TypeScript este acela că putem să utilizăm **interfețele** pentru a tasta în mod **explicit** ce trebuie să includă o clasă.

Următorul exemplu arată care este sintaxa corectă atunci când verificăm tipurile de date ale unei clase:

```js
interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}
```

[/slide]

[slide hideTitle]

# Erorile de Manipulare

37-Erorile-de-Manipulare

Atunci când accesăm date remote, pot apărea mai multe **probleme**.

Putem să **manipulăm aceste erori** apelând la o funcție de manipulare a erorilor ca **argument** către metoda `subscribe()`:

```js
ngOnInit(): void {
this.photosService.getAllPhotos()
  .subscribe(
    data => { 
      // Attach data to prop
    },
    err => {
      console.log(`${JSON.stringify(err)}`) 
    }
  )
}
```
[/slide]

[slide hideTitle]

# Clientul HTTP - Demo

03-Angular_Fundamentals_Dependency_Injection_and_Services_Demo-1-2

[/slide]
