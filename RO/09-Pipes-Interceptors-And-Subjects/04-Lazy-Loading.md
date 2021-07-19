# Lazy Loading

[slide hideTitle]

# Ce este Lazy Loading?

js-interactive-pipes-interceptors-and-subjects-21-22-Lazy-Loading-and-what-is-lazy-loading

Angular încarcă **toate modulele aplicației** odată ce aplicația pornește, chiar dacă **nu este nevoie de ele** la acel moment. 

Acest comportament **implicit** poate afecta **timpul de încărcare în mod negativ**, mai ales dacă aplicația este **de dimensiune mare**.

De exemplu, acest lucru este valabil dacă un website **are aproximativ 100 de pagini** precum pagina **home**, pagina **dashboard**, pagina **about us**, pagina **contact us**, etc.

Dacă utilizatorul vizitează acel website și **merge înapoi la homepage**, dacă **modelul de lazy loading nu este folosit**, **întregul website va fi descărcat**.

Utilizatorul va trebui să aștepte pentru **descărcarea fiecărei pagini** înainte să poată vedea oricare pagină, chiar dacă nu le va vizita pe toate.

Deci, este **o idee bună să folosiți lazy loading** pentru imagini și videoclipuri, deoarece ele nu sunt **resurse esențiale**.

Nu există **nicio necesitate de a descărca videoclipul complet** atunci când o pagină se încarcă, ci trebuie să așteptați ca utilizatorul **să apese pe butonul de redare**.

În acest fel, **Lazy Loading** îmbunătățește **performanța**, **descărcând selectiv** doar modulele **necesare** **rulării** unei funcționalități specifice. 

Pentru **a implementa** Lazy Loading în proiectul nostru, trebuie **să separăm aplicația noastră** în diferite **module**.

Oricare dintre aceste **module adiționale** va fi încărcat doar atunci când utilizatorul ajunge la **ruta principală a unui modul dat**.

[/slide]

[slide hideTitle]

# Prepararea pentru Lazy Loading

js-interactive-pipes-interceptors-and-subjects-23-Preparing-for-Lazy-Loading

Pentru a vă **prepara** pentru **lazy loading**, creați un **modul funcțional** cu CLI:

`ng generate module products --route products --module app.module`

Puteți înlocui `products` cu un nume potrivit pentru situația voastră.

Executarea acestei comenzi va crea un **folder** numit `products` care va include **două fișiere**:

- `products.module.ts` - conține clasa **lazy-loadable** `ProductsModule`

- `products-routing.module.ts` - conține clasa `ProductsRoutingModule` 

Un `ProductsComponent` va fi **declarat**, iar `ProductsRoutingModule` va fi **importat** înăuntrul noului **modul funcțional**.

[/slide]

[slide hideTitle]

# Nu Importați în Modulul Bootstrap

js-interactive-pipes-interceptors-and-subjects-24-Warning-Don't-Import-in-Bootstrap-Module

Nu trebuie **niciodată** să importați un modul funcțional înăuntrul lui `app.module.ts`.

Din moment ce `AppModule` este folosit pentru **bootstrapping-ul aplicației**, orice modul importat va **începe să fie încărcat imediat** atunci când aplicația rulează.

**Acest lucru se află în contradicție cu scopul conceptului de lazy loading**.

[/slide]

[slide hideTitle]

# Loading Children

js-interactive-pipes-interceptors-and-subjects-25-Load-Children

**Pentru a aplica lazy loading pentru un modul funcțional**, mergeți la `src/app/app-routing.module.ts`:

```js
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  }
];
```

Decalarați noua cale `products` în matricea `routes` și folosiți `loadChildren` pentru a importa `ProductsModule`.

[/slide]

[slide hideTitle]

# Protejarea unui Modul cu CanLoad

js-interactive-pipes-interceptors-and-subjects-26-Protect-Module-with-CanLoad

O clasă poate **implementa** interfața `CanLoad` pentru a **acționa ca o gardă** care **decide** dacă **copiii** pot fi **încărcați**.

De exemple, o clasă `AuthGuard` poate **implementa** `CanLoad` pentru a **împiedica utilizatorii neautorizați** să **acceseze rutele produsului**:

```js
class UserToken {
  // ...
}

class Permissions {
  canLoadChildren(user: UserToken, id: string, segments: UrlSegment[]): boolean {
    return true;
  }
}

@Injectable()
class AuthGuard implements CanLoad {
  constructor(private permissions: Permissions, private currentUser: UserToken) {}

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean>|Promise<boolean>|boolean {
    return this.permissions.canLoadChildren(this.currentUser, route, segments);
  }
}
```

Funcția `canLoad()` are **mai multe gărzi**.

**Toate gărzile** trebuie **să returneze** `true` pentru ca navigarea **să poată continua.**

**Chiar dacă o singură gardă** returnează `false` sau un `UrlTree`, navigarea va fi **anulată**.

[/slide]
