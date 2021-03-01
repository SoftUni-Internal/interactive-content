# Valoare vs. Tipuri de referință

[slide]

# Valoare și tipuri de referință

[vimeo-video]
[stream language="EN" videoId="489373589/a2a27866c0" default /]
[stream language="RO" videoId="489373589/a2a27866c0"  /]
[/video-vimeo]

Tipurile de valori și tipurile de referință sunt cele două categorii principale de tipuri JavaScript

[image assetsSrc="Value-vs-Reference-Types(1).gif" /]

# Tipuri de valori

O variabilă a unui tip de valoare (date primitive) conține o instanță de tip și păstrează direct valoarea acestora.

Cu tipurile de valori, fiecare variabilă are **propria copie a datelor** și nu este posibil ca operațiunile pe o variabilă să **afecteze cealaltă**.

Când o valoare de tip primitiv este alocată unei alte variabile de același tip, se face o copie.

Când o valoare de tip primitiv este trecută într-o metodă, este transmisă doar o copie a valorii primitive.
Metoda apelată nu are acces la valoarea primitivă originală și, prin urmare, nu o poate modifica.

Metoda apelată poate modifica valoarea copiată.

- Tipurile de date primitive sunt: `undefined`, `boolean`, `number`, `string`, `bigint` și `symbol`.

```js
i = 42;
ch = 'A';
result = true;
```


# Tipuri de referință

Variabilele de **tip referință**  conțin o referință \(indicator, adresă de memorie\) a valorii în sine.

Atunci când un tip de referință este atribuit unui alt tip de referință, ambele vor indica același obiect.

Când un obiect este trecut într-o metodă, metoda numită poate schimba conținutul obiectului transmis acestuia, dar nu și adresa obiectului.

- Datele de tip referință sunt următoarele: `object`, `Array` and `function`.



```js
let cars = ["NIO", "XPang", "Tesla"];
let obj = {firstName:"Maria", lastName:"Agarici"};
```

[/slide]

[slide]
# Valoare și tipuri de referință: Demo

[vimeo-video]
[stream language="EN" videoId="489373150/9d47a9faca" default /]
[stream language="RO" videoId="489373150/9d47a9faca"  /]
[/video-vimeo]

[/slide]
