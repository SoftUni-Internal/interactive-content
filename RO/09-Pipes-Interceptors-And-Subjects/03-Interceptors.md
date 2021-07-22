# Interceptori HTTP 

[slide hideTitle]

# Prezentarea Generală a Interceptorilor

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/RO/09-Pipes-Interceptors-Subjects/js-interactive-pipes-interceptors-and-subjects-14-15-HTTP-Interceptors-and-interceptors-overview-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Interceptorii HTTP** sunt o funcționalitate în Angular care **ne oferă o cale foarte eficientă de a intercepta solicitările în curs de desfășurare** sau răspunsurile primite, folosind `HttpClient`.

Atunci când o solicitare este făcută, interceptorii HTTP pot fi folosiți pentru a **intercepta**, **modifica** sau **schimba** solicitarea.

Ei pot modifica solicitarea **adăugând**, **schimbănd** sau **eliminând** o proprietate sau un **antet** pentru o soliciate efectuată.

Interceptorii pot fi **folosiți** îm următoarele cazuri, dar **nu sunt limitați** la acestea.
- Dacă trebuie **să prefixați toate apelurile voastre API** cu un nume de server 
- Setarea unui antet pentru **autorizare** la fiecare solicitare
- Crearea unui **cache global pentru erori** în cazul în care o solicitare HTTP eșuează
- Crearea unui răspuns machetă pentru a fi testat de aplicația voastră
- **Atașarea unui JWT** sau a unui **token de acces** similar

În **Angular 4 și alte versiuni mai noi**, interceptarea este implementată folosind interfața `HttpInterceptor`.

[/slide]


[slide hideTitle]

# Crearea unui Interceptor HTTP

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/RO/09-Pipes-Interceptors-Subjects/js-interactive-pipes-interceptors-and-subjects-16-Create-Http-Interceptor-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Cel mai simplu mod de a crea un interceptor este folosing **CLI-ul Angular**:

`ng generate interceptor token`

Puteți înlocui `token` cu alt nume dacă doriți.

```js
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request);
  }

}

```

Interceptorii sunt **servicii**, ceea ce înseamnă că ei folosesc decoratorul `@Injectable`.

Clasa noastră `TokenInterceptor` trebuie să **implementeze** interfața `HttpInterceptor` din `@angular/common/http`.

Facem acest lucru pentru a putea **folosi** metoda `intercept()`.

[/slide]

[slide hideTitle]

# Interceptarea Solicitărilor

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/RO/09-Pipes-Interceptors-Subjects/js-interactive-pipes-interceptors-and-subjects-17-Intecepting-Requests-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Toate solicitările HTTP** trec prin metoda `intercept()`.

```js
intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request);
}
```

Ea acceptă două argumente:

- `req` - **obiectul răspunsului**, care este de tip `HttpRequest`
- `next` - `HttpHandler`, care are o metodă `handle()`, folosită pentru a returna un **observable** `HttpEvent`.

Este important să vă amintiți că orice `HttpRequest` este **imuabilă**.

Pentru **a modifica o solicitare**, folosim metoda `clone` și creăm o **copie** a solicitării originale:

```js
let newReq = request.clone({
    params: request.params.append('token', 'randomvalue1234');
});
```

Apoi, putem transmite **solicitarea modificată** metodei `next.handle`:

`return next.handle(newReq)`

[/slide]

[slide hideTitle]

# Furnizarea Interceptorului

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/RO/09-Pipes-Interceptors-Subjects/js-interactive-pipes-interceptors-and-subjects-18-Provide-the-Interceptor-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Interceptorul** nostru nou creat trebuie **adăugat** la matricea `HTTP_INTERCEPTORS`.

Mergeți la `app.module.ts` și **importați** clasa voastră interceptor din `token.interceptor.ts`:

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { TokenInterceptor } from './token.interceptor';

import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

În continuare, importați `HTTP_INTERCEPTORS` din `@angular/common/http`.

Înăuntrul matricei `providers`, creați un **provider nou**:

```js
{
    provide: HTTP_INTERCEPTORS,
    useClass: NameOfYourInterceptorClass,
    multi: true
}
```

Proprietatea `multi` ar trebui să fie setată la `true` dacă plănuiți să oferiți **mai mult de o clasă** unui **token** dat.

`HTTP_INTERCEPTORS` este un token pentru **un provider multi** care injectează **o matrice de valori**, în loc de o singură valoare, deci `multi` **trebuie setată la true**.

[/slide]

[slide hideTitle]

# Gestionarea Răspunsurilor

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/RO/09-Pipes-Interceptors-Subjects/js-interactive-pipes-interceptors-and-subjects-19-Handle-Responses-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a **gestiona răspunsuri**, folosim operatorii `pipe` și `tap` din RxJS:

```js
// Other imports...

import { tap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(tap((event : HttpEvent<any>) => {
        if (event instanceof HttpResponse && req.url.endsWith('signin')) {
            this.saveToken(event);
        }
    });
  }
}

```

În acest exemple, folosim metoda `pipe` pentru a face un **lanț** de **operatori** RxJS.

Metoda `tap` este folosită pentru executarea **efectelor secundare**, în acest caz - **salvarea unui token**.

[/slide]

[slide hideTitle]

# Gestionarea Erorilor de Server

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/RO/09-Pipes-Interceptors-Subjects/js-interactive-pipes-interceptors-and-subjects-20-Handle-Server-Errors-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Operatorii `catchError` și `throwError` sunt folosiți pentru **a gestiona erorile de server**:

```js
// Other imports...

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
  .pipe(catchError((error: HttpErrorResponse) => {
     if (error.status === 404) {
        // Here you can log the error using an error logging service
        this.router.navigate([ '/search' ])
     }
     return throwError(err);
  }
));
  }
}

```

Înăuntrul corpului funcției `catchError`, putem **loga eroarea** folosind un **serviciu** personalizat și putem **redirecționa** utilizatorul la o **rută** de rezervă.

De obicei **aruncăm** o **eroare** în instrucțiunea `return`.

[/slide]
