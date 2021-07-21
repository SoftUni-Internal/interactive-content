# Router Guards

[slide hideTitle]

# Guards Overview

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/RO/05-Modules-and-Routing/Angular-Modules-and-routing-24-25-Guards-overview-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Gărzile **împiedică** utilizatorul să acceseze rute **restricționate**.

Pentru a implementa gărzi în aplicația noastră, trebuie să creăm un **serviciu de pază**.

Putem folosi comanda `ng generate guard` în Angular CLI.

```js
ng generate guard guard-name
```

Puteți adăuga steaguri după numele gărzii, cum ar fi `--implements` sau `--flat`.

Steagul `--implements` specifică ce interfețe trebuie implementate în serviciu.

Opțiunile disponibile sunt:
-  `CanActivate`
-  `CanActivateChild`
-  `CanLoad`

Odată ce serviciul este instanțiat, acesta ar trebui să fie **furnizat** în modul, unde se află configurația de rutare.

În cele din urmă, putem adăuga **garda** la ruta **dorită**.

[/slide]

[slide hideTitle]

# CanActivate Guard

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/RO/05-Modules-and-Routing/Angular-Modules-and-routing-26-27-CanActivate-Guard-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Putem folosi **CanActivate** atunci când dorim să verificăm ceva înainte de a permite utilizatorului să acceseze ruta.

De exemplu, dacă un utilizator este conectat, acesta **își poate vedea pagina de profil**.

Dacă nu, aceștia vor fi redirecționați către **paginile de autentificare** sau **de înregistrare**:

```js
@Injectable()
export class AuthGuard implements CanActivate {
   canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
   ): boolean {
      return this.checkIfLogged(state.url);
   }

   checkIfLogged(url: string): boolean {
      // auth logic
   }
}
```

În acest exemplu, dacă utilizatorul este **conectat**, **CanActivate** returnează funcția `checkIfLogged()`.

Această funcție returnează un boolean - ar trebui să **returneze true** pentru un utilizator conectat și **false** în caz contrar.

[/slide]

[slide hideTitle]

# Router Resolver

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Angular/RO/05-Modules-and-Routing/Angular-Modules-and-routing-28-29-30-Angular-Router-Resolver-and-example-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Rezolvatorii sunt **furnizori de date**.

Aceștia ne permit să preluăm date **înainte de a naviga** pe un anumit traseu.

Routerul va aștepta ca datele să fie preluate.

Le apelăm în interiorul obiectului de rută cu **rezolvați proprietatea**:

```js
{
  path: ':id',
  component: UserDetailsComponent,
  resolve: { user: UsersResolver }
}
```

Putem adăuga rezolvatori la ruta **fie ca obiect, fie ca matrice**.

Dacă avem gărzi în traseu, rezolvatorul va aștepta rezultatul lor.

Acesta va determina dacă **să preluăm informațiile** sau nu, în funcție de valoarea returnată a gărzii.

## Creating a Resolver

Pentru a crea un Rezolvator, putem folosi Angular CLI:

```
ng g resolver nameOfTheResolver
```

Următorul exemplu arată sintaxa corectă:

```js
@Injectable()
export class TestResolver implements Resolve<boolean> {
   resolve(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
   ): Observable<boolean> {
      return of(true);

      // Return a service
   }
}
```

Avem o clasă **TestResolver** decorată cu un produs injectabil.

**TestResolver** implementează interfața **Resolve**.

În acest caz, Resolve va returna un boolean.

Odată ce Rezolvatorul a fost creat, trebuie să îl furnizăm în fișierul `app.module`.

După aceea, trebuie să adăugăm Rezolvatorul la **traseul dat**.

Și, în sfârșit, **îl putem implementa într-o componentă**.

Pentru a face acest lucru, trebuie să preluăm datele din instantaneu folosind `this.route.snapshot.data['user'];`.

[/slide]
