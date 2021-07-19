# Formulare - Laborator

[slide hideTitle]

# Configurare Inițială

Forms-Lab-1

**Iată un link către** [resources](https://videos.softuni.org/resources/javascript/javascript-angular/07-Forms.zip) **pentru această sarcină.**

Creați o nouă aplicație Angular.

```js
ng new my-app
```

Vi se pun la dispoziție fișiere **HTML** și **CSS** care conțin formularul în sine cu pictograme pentru **styles** și **font awsome** .

Mergeți la [FontAwesome](fontawesome.com) și adăugați linkul HTML furnizat în interiorul `index.html`:

```js
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="icon" type="image/x-icon" href="favicon.ico">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">
```

[/slide]

[slide hideTitle]

# Formular Bazat pe Șabloane

Forms-Lab-2

Generați o componentă **formular de înregistrare** și utilizați **HTML-ul** furnizat pentru a crea un formular **bazat pe șabloane**.

Atașați toate directivele necesare, cum ar fi **ngForm** și **ngModel**.

Utilizați `@ViewChild` pentru a face referire la **NgForm** din interiorul componentei.

Gestionați **trimiterea** formularului. În interiorul funcției de manipulare **resetați** formularul.

Definiți opțiunile pentru ambele liste de selectare ca o **matrice de șiruri** și parcurgeți matricele din șablon.

Adăugați o **valoare implicită** la ambele liste selectate.

Definiți următoarul **CSS** în `register-form.component.css`:

```css
input.ng-valid {
    border-left: 5px solid #42A948; /* green */
}
input.ng-invalid.ng-touched {
    border-left: 5px solid #A94442; /* red */
}
```

## Validarea

- Câmpul de introducere a numelui complet trebuie să conțină **două nume** (numai litere) separate printr-un **spațiu**
    * ambele ar trebui să înceapă cu o literă **mare**
- Câmpul de introducere a e-mailului trebuie să conțină o adresă **de e-mail validă**
- Câmpul de introducere a numărului de telefon trebuie să conțină un număr de **9 cifre**
- Câmpul de introducere a parolei trebuie să fie **între 3 și 16 simboluri** și trebuie să conțină doar **litere** și **cifre**
- Ambele parole trebuie să **se potrivească**

Mesaje de eroare de afișare în interiorul unui `div` cu clasa "**alert alert-danger**" atunci când un câmp de intrare este **nevalid** și **atins**.

**Dezactivați** **butonul de trimitere** dacă câmpul de introducere este **nevalid**.

## Grouping

Înfășurați ambele câmpuri de parolă într-un `ngModelGroup`comun și adăugați **validarea parolei** după definiția grupului.

La **sfârșit**, formularul dvs. ar trebui să arate astfel:

[image assetsSrc="Angular-Forms(1).png" /]

## Creați o directivă privind atributele personalizate

Adăugați un alt câmp de intrare care conține o **imagine URL** la o imagine de profil, utilizați 'fa fa-image' pentru pictograma font awsome.

Validați acest câmp de intrare scriind propria dvs. **directivă de atribute**.

Directiva ar trebui să asculte evenimentele **de intrare** și să valideze dacă valoarea de intrare **începe cu HTTP** și se termină cu **jpg** sau **png**.

Folosiți **Renderer2** pentru a seta **stilul** de margine-stânga al câmpului la roșu sau verde.

Pentru a schimba manual starea unui câmp de intrare în **invalid**, trebuie să injectați **NgForm** în directivă și să utilizați metoda  `setErrors({ 'incorrect': true })` pe control pentru a o marca ca nevalid.

Ștergerea erorilor se face cu `setErrors(null)`.

[image assetsSrc="Angular-Forms(2).png" /]

[/slide]

[slide hideTitle]

# Formulare Reactive

Forms-Lab 3-1
Forms-Lab 3-2

Acum, haideți să creăm o componentă nouă cu numele **register-form-reactive** și să construim același formular folosind abordarea reactivă.

Este recomandat să începeți de la zero prin crearea unei noi aplicații Angular.

```js
ng new my-app
```

Creați-vă propriile **grupuri de formulare** și **controale de formular**.

Opțional, puteți injecta **constructorul formular**.

Validați câmpurile folosind **Validatori**.

[/slide]
