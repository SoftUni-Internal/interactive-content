# Modul Router

[slide hideTitle]

# Definiți Șablonul

Angular-Modules-and-routing-11-12-Router-module

Pentru a crea un șablon, trebuie să parcurgem mai mulți pași.

Primul este să adăugăm o **metaetichetă de bază** în fișierul `index.html`.

Eticheta arată așa: `<base href="/">`.

După aceea, putem adăuga o etichetă de navigare la fișierul `app.component.html` sau orice altă locație:

```js
<nav>
   <a routerLink='/home'>Home</a>
   <a routerLink='/about'>About</a>
</nav>
```

În această etichetă `nav`, folosim **linkuri de router** în loc de **href**.

Acest atribut personalizat suprascrie reîncărcarea paginii implicite pe care o face **href**.

În cele din urmă, trebuie să definim **ieșirea routerului**:

```js
<router-outlet></router-outlet>
```

[/slide]

[slide hideTitle]

### Creați un Modul Router

Angular-Modules-and-routing-13-14-15-Create-Routes-Module

Pentru a crea un modul Router, trebuie mai întâi să creăm un fișier numit `app-routing.module.ts`.

Puteți face acest lucru fie manual, fie utilizând **Angular CLI**:

```
ng generate module app-routing --flat --module=app
```

Odată ce fișierul a fost salvat, ar trebui să importați **NgModule**, **RouterModule** și **Routes**, precum și **componentele dvs.**.

Apoi, puneți rutele într-o matrice, așa cum este arătat mai jos:

```js
const routes: Routes = [
   {
      path: 'home',
      component: HomeComponent,
   },
   {
      path: 'about',
      component: AboutComponent,
   },
];
```

După ce rutele au fost create, modulul ar trebui decorat astfel:

```js
@NgModule({
   declarations: [HomeComponent, AboutComponent],
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutesModule {}
```

În acest exemplu, **rutele** nu vor fi disponibile în afara **modulului**.

Asta pentru că se află în matricea de **declarații**.

Ultimul pas este să **importați** rutele **din modulul** aplicației.

[/slide]

[slide hideTitle]

# Directiva RouterLink

Angular-Modules-and-routing-16-The-RouterLink-Directive

Directiva `RouterLink` transformă elementele în link-uri.

Oferă elementului un comportament similar cu un **href**.

Putem trece locația folosind o **cale de șir**, din nou, similar cu un **href**.

Cealaltă modalitate este de a trece o **matrice**.

Iată un exemplu cu ambele moduri:

- Folosind un **șir**:

```js
<a routerLink='/about'>About</a>
```

-  Folosind o **matrice**:

```js
<a [routerLink]="[ '/users', 12345, 'profile' ]">
   Profile Page
</a>
```

[/slide]

[slide hideTitle]

# Navigați Programatic

Angular-Modules-and-routing-17-Navigate-Programmatically

Putem adăuga un router la o componentă.

Pentru a face acest lucru, trebuie să importăm **Router** din pachetul `@angular/router`.

Odată importat, îl putem transmite ca proprietate constructorului componentei respective:

```js
constructor(
 private router: Router
) { ... }
```

După ce routerul este setat în constructor, trebuie să creăm o metodă care va naviga către o cale dată:

```js
loadData() {
 this.router.navigate([ '/home' ])
}
```

[/slide]

[slide hideTitle]

# Passing Parameters to Routes

Angular-Modules-and-routing-18-Passing-Parameters-to-routes

Când vrem să creăm o adresă URL care conține o rută dinamică, cum ar fi un număr de produs, trebuie să configurăm parametrii.

Luați în considerare următorul traseu: `/catalog/electronics/XYZ5538`

Aici `XYZ5538` este ID-ul a gadget-ului dat.

Trebuie să-l schimbăm, în funcție de produsul pe care utilizatorul decide să îl vizualizeze.

Deci, facem acest lucru adăugând **ID** la calea traseului, în acest format: `:parameter`.

Există două modalități de a face acest lucru - folosind un **șir** sau o **matrice**.

De asemenea, putem trece **unul** sau **mai mulți** parametri.

În acest exemplu, trecem un singur **id** ca parametru:

```js
{ path: 'catalog/:id', component: ProductDetailsComponent }
```

Și aici, avem doi parametri: `:category` și `:id`:

```js
{ path: 'catalog/:category/:id', component: ProductDetailsComponent }
```

[/slide]

[slide hideTitle]

# Preluarea Parametrilor

Angular-Modules-and-routing-19-Fetching-Parameters
Angular-Modules-and-routing-20-Fetching-Parameters-Reactively

Putem folosi **ActivatedRoute** când dorim să preluăm un traseu asociat componentei într-o priză.

Pentru a-l utiliza, trebuie să-l setăm în constructorul componentei:

```js
constructor(
 private route: ActivatedRoute
) { }
```

După ce **ActivatedRoute** a fost setat, putem folosi `this.route.params` pentru a prelua parametrii din URL.

Dacă dorim să obținem parametrii **o singură dată**, putem folosi `this.route.snapshot.params`.

Acest lucru ar trebui făcut în interiorul cârligului ciclului de viață **ngOnInit**:

```js
ngOnInit() {
  const id = this.route.snapshot.params['id'];
}
```

În acest exemplu, realizăm un instantaneu al **id-ului**.

Dacă dorim să schimbăm conținutul unei componente încărcate, putem folosi observabile.

De exemplu, pentru a schimba produsul pe o pagină de detalii, facem următoarele:

```js
ngOnInit() {
  this.route.params
    .subscribe((params: Params) => {
        const id = params['productId']
      }
   )
}
```

Metoda **subscribe** ascultă modificările adresei URL.

Dacă detectează vreuna, recuperează parametrii solicitați.

În acest caz, ascultă **productId**.

[/slide]

[slide hideTitle]

# Query String and Fragments

Angular-Modules-and-routing-21-Query-strings-and-fragments

Putem adăuga ** parametri de interogare ** și ** fragmente ** la adresa URL.

Pentru a face acest lucru, trebuie să le adăugăm la fișierele noastre `component.html`:

```js
<a [routerLink]="[ '/users' ]" [queryParams]="{ search: 'Peter' }" fragment="loading">
</a>
```

Adresa URL rezultată din exemplul de mai sus ar fi: `/users?search=Peter#loading`.

Putem obține parametrul sau fragmentele de pe adresa URL cu următoarele proprietăți:

-  pentru parametri: `this.route.snapshot.queryParams`

-  pentru fragmente: `this.route.snapshot.fragment`

Instantaneul le va prelua o singură dată.

[/slide]

[slide hideTitle]

# Setting Up Child Routes

Angular-Modules-and-routing-22-Setting-up-child-routes

Putem avea și rute imbricate.

De exemplu, dacă avem o pagină cu mai multe secțiuni, acestea pot fi atașate la adresa URL.

În Angular, putem face acest lucru adăugând o **proprietate** pentru copii la **ruta**:

```js
{
  path: 'product', component: ProductComponent, children: [
    { path: ':id', component: ProductComponent },
    { path: ':id/details', component: ProductDetailsComponent }
  ]
}
```

În acest exemplu, avem o cale numită **produs**.

Ca o componentă, adăugăm proprietatea **copii**, unde stocăm rutele imbricate.

De asemenea, ar trebui să adăugăm substituentul `<router-outlet></router-outlet>` la fișierul **html** al componentei.

[/slide]

[slide hideTitle]

# Redirect

Angular-Modules-and-routing-23-Using-Wildcards-and-redirects

Putem redirecționa utilizatorul către o altă cale.

Acest lucru se poate întâmpla prin redarea unei componente diferite.

Redirecționarea este utilă atunci când utilizatorul încearcă să acceseze o pagină care nu există.

Putem returna pagina **404** folosind un **caracter de înlocuire**:

```js
{ path: '*', component: PageNotFoundComponent }
```

Caracterul de înlocuire (wildcard-ul) trebuie să se afle în ultimul traseu, deoarece se va potrivi cu fiecare traseu care nu a fost gestionat.

Pentru a redirecționa, putem folosi proprietatea **redirectTo**.

Îl adăugăm la obiectul rutei.

```js
{ path: '*', component: PageNotFoundComponent, redirectTo: 'notfound' }
```

[/slide]
