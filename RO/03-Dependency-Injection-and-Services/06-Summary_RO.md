[slide hideTitle]

# Rezumat

38-Rezumat

## În această lecție ați învățat:

- Principiile SOLID sunt **cele mai importante principii** ale programării orientate pe obiect 
  - iar aplicarea lor face aplicațiile noastre mai ușor de extins și gestionat

- Injecția de dependență este un șablon de design **popular** 
  - care ne permite să **injectăm dependențe** în diferite componente

```js
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DemoService {
  constructor() {
    // ...
  }
}
```

- RxJS și programarea reactivă funcțională constituie o **combinație puternică**
  - în care RxJS furnizează funcțiile utilitare pentru manipularea fluxurilor 
  - iar FRP integrează fluxul de timp și evenimentele compozite într-un proces de programare funcțională

```js
const obs = range(1, 10).pipe(tap((i) => console.log(`Hello: ${i}`)));
```

- Clientul HTTP (`HTTPClient`) este folosit pentru preluarea de date dintr-un API

```js
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostsService { constructor(
    private http : HttpClient
  ) { }

  getAllPosts() : Observable<Post[]> {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    return this.http.get<Post[]>(url);
  }
}
```

## În lecția următoare, veți învăța în cadrul unui:

- atelier de studiu în profunzime al componentelor

[/slide]
