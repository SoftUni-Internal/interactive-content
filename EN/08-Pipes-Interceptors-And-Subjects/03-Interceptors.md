# HTTP Interceptors

[slide hideTitle]

# Interceptors Overview

js-interactive-pipes-interceptors-and-subjects-14-15-HTTP-Interceptors-and-interceptors-overview

**HTTP interceptors** are a feature in Angular that **provides a great way to intercept outgoing requests** or incoming responses, by using `HttpClient`.

When a request is made HTTP interceptors can be used to **intercept**, **modify** or **swap** the request, in other words, **we can mutate outgoing requests**.

Mutation means to **add**, **swap** or **remove** a property, or a **header** to an outgoing request.

Interceptors can be **used**, but **not limited** to the following scenarios:
- If you need to **prefix all your API calls** with a server name
- Setting an **authorization** header on each request 
- To create a **global error cache** in case of HTTP request fails
- To create a mock response for your application to test
- **Attaching JWT** or a similar **access token**

In **Angular 4 and newer**, intercepting is implemented using the `HttpInterceptor` interface.
[/slide]


[slide hideTitle]

# Create HTTP Interceptor

js-interactive-pipes-interceptors-and-subjects-16-Create-Http-Interceptor

The easiest way to create an interceptor is by using **Angular CLI**:

`ng generate interceptor token`

You can replace `token` with another name if you want.

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

Interceptors are **services**, which means they use the `@Injectable` decorator.

Our `TokenInterceptor` class must **implement** the `HttpInterceptor` interface from `@angular/common/http`.

We do this to **use** the `intercept()` method.

[/slide]

[slide hideTitle]

# Intercepting Requests

js-interactive-pipes-interceptors-and-subjects-17-Intecepting-Requests

**All HTTP requests** go through the `intercept()` method.

```js
intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request);
}
```

It takes two arguments:

- `req` - the **request object** which is of type `HttpRequest`;
- `next` - the `HttpHandler` which has a `handle()` method, used to return an `HttpEvent` **observable**.

It is important to remember that any `HttpRequest` is **immutable**.

To **modify a request** we use the `clone` method to create a **copy** of the original request:

```js
let newReq = request.clone({
    params: request.params.append('token', 'randomvalue1234');
});
```

We can then pass the **modified request** to the `next.handle` method:

`return next.handle(newReq)`

[/slide]

[slide hideTitle]

# Provide the Interceptor

js-interactive-pipes-interceptors-and-subjects-18-Provide-the-Interceptor

Our newly created **interceptor** has to be **added** to the `HTTP_INTERCEPTORS` array.

Go to `app.module.ts` and **import** your interceptor class from `token.interceptor.ts`:

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

Next, import `HTTP_INTERCEPTORS` from `@angular/common/http`.

Inside the `providers` array, create a **new provider**:

```js
{
    provide: HTTP_INTERCEPTORS,
    useClass: NameOfYourInterceptorClass,
    multi: true
}
```

The `multi` property should equal `true` if you plan to provide **more than one class** to a given **token**.

`HTTP_INTERCEPTORS` is a token for a **multi provider** that injects **an array of values**, rather than a single value, so `multi` **must be set to true**.

[/slide]

[slide hideTitle]

# Handle Responses

js-interactive-pipes-interceptors-and-subjects-19-Handle-Responses

To **handle responses** we use the `pipe` and `tap` operators from RxJS:

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

We use the `pipe` method to make a **chain** of RxJS **operators**.

The `tap` method is used for performing **side effects**, in this case - **saving a token**.

[/slide]

[slide hideTitle]

# Handle Server Errors

js-interactive-pipes-interceptors-and-subjects-20-Handle-Server-Errors

The `catchError` and `throwError` operators are used to **handle server errors**:

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

Inside the `catchError` function body we can **log the error** using a custom **service** and **redirect** the user to a fallback **route**.

We typically **throw** an **error** in the `return` statement.

[/slide]