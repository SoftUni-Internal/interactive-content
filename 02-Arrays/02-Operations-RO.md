# Operațiuni

[slide]
# Metode de matrice

[vimeo-video]
[stream language="EN" videoId="489372517/068155927c" default /]
[stream language="RO" videoId="489372517/068155927c"  /]
[/video-vimeo]

Unele operații care funcționează cu matrice ar putea funcționa și cu valori asemănătoare matricei.

O valoare asemănătoare matricei este un obiect care deține următoarele proprietăți:

- `.length`: deține lungimea obiectului asemănător matricei.

- `[0]`: menține elementul la `index 0` (etc.).

Rețineți că, dacă utilizați numere pentru a adresa proprietăți, acestea sunt întotdeauna constrânse la șiruri.

Prin urmare, `[0]` recuperează valoarea proprietății a cărei cheie este `0`.

Matricele au proprietăți încorporate (metode), dintre care una este `.length`.

Metodele sunt apelate prin plasarea unui punct după numele variabilei: 

``` js live
let nums = [10, 20, 30];
console.log(nums.length);
```
Alte exemple de metode:

- `push()`: adăugarea unui element la sfârșitul matricei 

``` js live
let arr = [10, 20, 30];
arr.push(40, 50);

console.log(arr);
```

[/slide]

[slide]
# Usage

[vimeo-video]
[stream language="EN" videoId="489372490/1ebd778a3f" default /]
[stream language="RO" videoId="489372490/1ebd778a3f"  /]
[/video-vimeo]

- `includes()`: Returnează `true` dacă matricea conține valoarea plasată în paranteze searchElement și` false` în cazul contrar

``` js live
let arr = [10, 20, 30];
console.log(arr.includes(20));
console.log(arr.includes(0));
```

- `toString()`: Convertește toate elementele în șiruri prin intermediul `String()`, le concatenează și returnează rezultatul

``` js live
let arr = [10, 20, 30];

console.log(arr.toString());
```

- `join()`: Creează un șir prin **concatenarea reprezentărilor șirului tuturor elementelor**, folosind ca separator specificat în șirul parantezelor


``` js live
let arr = [10, 20, 30];

console.log(arr.join('@@'));
```

Mai multe metode vor fi examinate în cursul Matrice avansate. 

[/slide]
