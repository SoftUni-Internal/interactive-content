# Strategia de Detectare a Modificărilor

[slide hideTitle]

# Ce este Detectarea Modificărilor?

3-4-Strategia-de-detectare-a-modificărilor

Atunci când facem **modificări** în datele aparținând componentelor noastre, vizualizarea se actualizează **automat**.

Pentru a detecta fiecare modificare, Angular utilizează [NgZone](https://angular.io/guide/zone), care efectuează așa-numitele "**monkey patching**" asupra fiecărei funcții asincrone.

Monkey patching este o tehnică pe care o putem utiliza dacă dorim să **extindem** sau să **modificăm** comportamentul unei **bucăți** de cod / funcție.

NgZone poate recunoaște când **a fost apelată o operațiune asincronă** și/sau dacă această operațiune s-a încheiat. 

Acest lucru îi oferă Angular abilitatea de a observa **când au loc modificări** prin rularea detecției modificărilor, care merge dinspre **nodul cel mai de sus al componentei, până la cele mai de jos frunze ale copacului** și scanează eventualele modificări.

Dacă au fost **detectate** modificări, Angular marchează **componenta**, și numai **componenta modificată va fi redată din nou**.

Dacă **aplicația noastră este foarte mare**, pot apărea întârzieri, dar putem optimiza acel proces prin specificarea modului în care componenta va fi căutată și marcată.  

[/slide]

[slide hideTitle]

# Strategia de Detectare a Modificărilor

DEMO

**Enumeratorii** TypeScript ne permit să declarăm un set de **constante** date, sau, cu alte cuvinte, o **colecție de valori relaționate** care pot fi fie numere, fie șiruri. 

Pentru a **modifica** strategia de detectare, folosim enumeratorul `ChangeDetectionStrategy`:

```js
enum ChangeDetectionStrategy {
  OnPush: 0
  Default: 1
}
```

Trebuie să setăm proprietatea `changeDetection` în decoratorul nostru `@Component` după cum urmează:

```js
@Component({
    selector: 'app-root',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: ...
})
```

În acest exemplu, setăm strategia de detectare folosind sintagma `OnPush`.

Odată setată, ea intră în vigoare începând cu  **următoarea dată când este declanșată detectarea de modificări**.

Dacă **nu setăm** o proprietate `changeDetection`, Angular va aplica metoda **implicită** (**default**) de detectare a modificărilor.

Vom învăța ce înseamnă `onPush` în clipul următor.

[/slide]

[slide hideTitle]

# Strategia de Detectare a Modificărilor - Membrii

5-Strategia-de-detectare-a-modificărilor-Membrii

`ChangeDetectionStrategy` are doi membri:

- `OnPush: 0`:
  - utilizează strategia `CheckOnce` (verifică o dată)
  - detectarea automată a modificărilor este **dezactivată** până la reactivarea prin setarea strategiei la varianta `Default` (`CheckAlways` / verifică întotdeauna)
  - detectarea modificărilor se poate invoca totuși în mod explicit
  - strategia aceasta se aplica tuturor directivelor copil și **nu poate fi** anulată
  
- `Default: 1`:
  - folosește strategia `CheckAlways` (verifică întotdeauna)
  - este setată implicit;
  - detectarea modificărilor se întâmplă automat până când este **dezactivată** explicit prin starea strategiei `OnPush` (`CheckOnce`)

[/slide]
