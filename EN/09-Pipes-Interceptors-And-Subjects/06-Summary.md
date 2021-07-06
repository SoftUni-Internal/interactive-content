[slide hideTitle]

# Summary

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/EN/09-Pipes-Interceptors-and-Subjects/js-interactive-pipes-interceptors-and-subjects-36-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- Pipes in Angular are **used to transform data** in the template
  - they take **integers**, **strings**, **arrays**, and **dates** as input

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


- JSON Web Tokens are used for **transmitting information securely** between parties as a JSON object
  - this information can be **verified and trusted because** it is digitally signed
  - they consist of a **header**, a **payload**, and a **signature**, separated by dots

- Interceptors are most often **used to automatically attach authentication** information to requests
  - implemented since Angular 4 using the `HttpInterceptor`

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

- **Lazy Loading** improves a page's loading time
  - it **downloads** applications in pieces
  - done by **organizing the application into separate modules**

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

- Subjects can **multicast values** to many Observers
  - they **maintain a registry** of many listeners
  - can act both as **Observables** and **Observers**

```js
let subject = new BehaviorSubject(3);

subject.subscribe({
  next: (v) => console.log(`observerA: ${v}`)
});

subject.next(4);

```

## In the next lesson, you will learn:

- Workshop - Pipes, Interceptors, and Subjects

[/slide]
