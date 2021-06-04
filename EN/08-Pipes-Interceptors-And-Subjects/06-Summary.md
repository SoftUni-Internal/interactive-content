[slide hideTitle]

# Summary

js-interactive-pipes-interceptors-and-subjects-36-Summary

## In this lesson you learned:

- Pipes in Angular are **used to transform data** in the template
  - they take **integers**, **strings**, **arrays** and **date** as input separated with (\|\) to be converted

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
  - they consist of a **header**, **payload** and **signature**, separated by dots

- Interceptors are most often u**sed to automatically attach authentication** information to requests
  - implemented since Angular 4 using `HttpInterceptor`

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

- **Lazy Loading** improves page load time
  - **downloads** applications in pieces
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

- Workshop - Pipes, Interceptors and Subjects


[/slide]
