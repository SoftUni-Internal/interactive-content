[slide hideTitle]

# Summary

## In this lesson you learned:

- Pipes in Angular are used to transform data in the template
  - They take integers, strings, arrays and date as input separated with \(|\) to be converted

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


- JSON Web Tokens are used for transmitting information securely between parties as a JSON object
  - This information can be verified and trusted because it is digitally signed
  - They consist of a Header, Payload and Signature, separated by dots

- Interceptors are most often used to automatically attach authentication information to requests
  - Implemented since Angular 4 using `HttpInterceptor`

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

- Lazy Loading improves page load time
  - Downloads applications in pieces
  - Done by organizing the application into separate modules

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

- Subjects can multicast values to many Observers
  - They maintain a registry of many listeners
  - Can act both as Observables and Observers

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
