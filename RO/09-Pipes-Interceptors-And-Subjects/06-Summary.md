[slide hideTitle]

# Rezumat

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/RO/09-Pipes-Interceptors-Subjects/js-interactive-pipes-interceptors-and-subjects-36-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție ați învățat:

- Pipe-urile în Angular sunt **folosite pentru a transforma date** în șablon
  - ele primesc **numere întregi**, **șiruri**, **matrice** și **date** ca date de intrare

```js
@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  transform(value: string) {
    if (value.length > 10) {
      return `${value.substr(0, 10)}...`; 
    }

    return value;
  }
}

```

`{{ description | shorten }}`


-JSON Web Tokens sunt folosite pentru **a transmite informații într-un mod sigur** ca obiect JSON, între părțile implicate
  - aceste informații pot fi **verificate și sunt de încredere, deoarece** sunt semnate digital
  - ele consistă într-un **antet**, o **încărcătură** și o **semnătură**, separate prin puncte 

- Interceptorii sunt de cele mai multe ori **folosiți pentru a atașa automat informațiile de autentificare** la solicitări  
  - implementați începând cu Angular 4, folosind `HttpInterceptor`

```js
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.token}`,
        ContentType: 'application/json'
      }
    });

    return next.handle(request);
  }

}

```

- **Lazy Loading** îmbunătățește timpul de încărcare a unei pagini
  - **descarcă** aplicațiile pe bucăți
  - realizată prin **organizarea aplicației în module separate**

```js
const furnitureRoutes = [ { path: '', children: […] } ]
@NgModule({
  imports: [
    RouterModule.forChild(furnitureRouting)
  ],
  exports: [
    RouterModule
  ]
})

```

- Subjects pot **transforma mai multe valori** în mulți Observers
  - ele **mențin un registru** cu mulți ascultători
  - se comportă atât ca **Observables**, cât și ca **Observers**

```js
let subject = new BehaviorSubject(3);

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});

subject.next(4);

```

## În lecția următoare veți învăța:

- Workshop - Pipes, Interceptors și Subjects

[/slide]
