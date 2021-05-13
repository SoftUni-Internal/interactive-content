# Cerințe de aplicație

[slide hideTitle]

# Ecranul de start

//Video: JS-APPS-Meme-Lounge-Home-4
//Video: JS-APPS-Meme-Lounge-Home-5

Ecranul inițial ar trebui să afișeze navigarea, înregistrarea, autentificarea, imaginea inițială și un subsol.

**Notă:** Această pagină trebuie afișată numai utilizatorilor invitați.

Utilizatorii conectați trebuie redirecționați către pagina **All memes**.

[image assetsSrc="js-application-exap-prep-3.png" /]

[/slide]

[slide hideTitle]
# Bară de navigare

//Video: JS-APPS-Meme-Lounge-Navigation-6
//VIdeo: JS-APPS-Meme-Lounge-Navigation-7

Implementați un **NavBar** pentru aplicație: linkurile de navigare ar trebui să schimbe ecranul curent (vizualizare).


Linkurile de navigare ar trebui să schimbe pagina curentă (vizualizare).

**Oaspeții** (vizitatori neautentificați) pot vedea link-urile către **Home Page**, **All Memes page**, precum și linkurile către paginile de autentificare și înregistrare.

Utilizatorii autentificați ar trebui să poată accesa linkurile către pagina **All Memes page**, the **Create Meme page**, the **My Profile page** și un link pentru **acțiunea de deconectare**.

Bara de navigare trebuie să conțină o felicitare a utilizatorului: "**Welcome,** \{ **user’s email address** \}"

Exemplu de navigare utilizator:

[image assetsSrc="js-application-exap-prep-1.png" /]

**Oaspeți** exemplu de navigare:

[image assetsSrc="js-application-exap-prep-2.png" /]
[/slide]


[slide hideTitle]
# Pagina de logare

// Video: JS-APPS-Meme-Lounge-Login-8
//Video: JS-APPS-Meme-Lounge-Login-9

**Serviciul REST inclus** vine cu următoarele conturi de utilizator **făcute în prealabil**, pe care le puteți utiliza pentru dezvoltare:

```
{ "email": "peter@gmail.com", "password": "123456" }
{ "email": "mary@gmail.com", "password": "123456" }
```


**Pagina de conectare** conține un formular pentru autentificarea utilizatorului existent.

Furnizând un **e-mail și o parolă**, aplicația ar trebui să conecteze un utilizator în sistem dacă nu există câmpuri goale sau date incorecte.

[image assetsSrc="js-application-exap-prep-4.png" /]

Utilizați următoarea **cerere** pentru a efectua o înregistrare:
```
Method: POST
URL: /users/login
```
**Antetele** necesare sunt descrise în documentație. Serviciul așteaptă un corp cu următoarea structură:

Serviciul așteaptă un corp cu următoarea structură:
```
{ 
  email,
  password
} 
```
Dacă are succes, **serviciul REST** va returna informațiile utilizatorului împreună cu o proprietate **tokenul de acces**, care conține **tokenul de sesiune** pentru utilizator.

Aceste informații trebuie stocate folosind **sessionStorage** sau **localStorage** pentru a putea efectua cereri autentificate.

Dacă datele de conectare au reușit, **redirecționați** utilizatorul către pagina **All memes**.

Dacă există o eroare, afișați un mesaj de eroare utilizând un dialog de sistem (**window.alert**).

[/slide]

[slide hideTitle]
# Înregistrați utilizatorul
//Video: JS-APPS-Meme-Lounge-Register-10
//Video: JS-APPS-Meme-Lounge-Register-11

Pagina **Register** conține un formular pentru înregistrarea unui nou utilizator.

Furnizând un **nume de utilizator**, un **e-mail**, o **parolă** și **sex** (**Bărbat sau Femeie**) aplicația ar trebui să înregistreze un nou utilizator în sistem.

Ar trebui să accepte utilizatori noi numai dacă toate câmpurile nu sunt goale și conțin date valide.

[image assetsSrc="js-application-exap-prep-5.png" /]

Utilizați următoarea **cerere** pentru a efectua o înregistrare a utilizatorului:
```
Method: POST 
URL: /users/register 
```
**Antetele** necesare sunt descrise în documentație.

Serviciul așteaptă un organism cu următoarea structură:
```
{ 
  username,
  email,
  password,
  gender
} 
```
După înregistrarea cu succes, **serviciul REST** va returna obiectul nou creat cu o proprietate generată automat `_id` și o proprietate **token de acces**, care conține **token de sesiune** pentru utilizator.

Aceste informații trebuie stocate folosind **sessionStorage** sau **localStorage** pentru a putea efectua cereri autentificate.

Dacă înregistrarea a reușit, **redirecționați** utilizatorul către pagina **All memes**.

Dacă există o eroare sau **validările** nu trec, afișați mesajul de eroare corespunzător, utilizând un dialog de sistem (**window.alert**).

[/slide]

[slide hideTitle]
# Deconectare 

//Video: JS-APPS-Meme-Lounge-Logout-12

Acțiunea de deconectare este disponibilă utilizatorilor conectați. Trimiteți următoarea solicitare pentru a deconecta un utilizator:

```
Metodă: GET
URL: /users/logout
```

**Antetele** necesare sunt descrise în documentație.

După o deconectare reușită, **serviciul REST** va returna un **răspuns gol**.

Ștergeți toate informațiile despre sesiune stocate în stocarea browserului.

Dacă deconectarea a reușit, **redirecționați** utilizatorul către **Home page**.

[/slide]


[slide hideTitle]
# Toate memele

// Video: JS-APPS-Meme-Lounge-All-Memes-13
//Video: JS-APPS-Meme-Lounge-All-Memes-14

Această pagină afișează o listă cu toate memele din sistem.
 
Dacă faceți clic pe butonul **detalii** din carduri, veți ajunge la pagina de detalii a memei selectate.
 
Această pagină ar trebui să fie vizibilă pentru oaspeți și utilizatori conectați.

[image assetsSrc="js-application-exap-prep-7.png" /]

Dacă nu există meme, ar trebui afișată următoarea vizualizare:

[image assetsSrc="js-application-exap-prep-8.png" /]

Trimiteți următoarea **cerere** pentru a citi lista de anunțuri:

```
Metodă: GET
URL: /data/memes?sortBy=_createdOn%20desc
```

**Antetele** necesare sunt descrise în documentație. Serviciul va returna o serie de listări.


[/slide]

[slide hideTitle]
# Create Meme Screen 

// Video: JS-APPS-Meme-Lounge-Create-Meme-15

Pagina **Create** este disponibilă utilizatorilor conectați.

Conține un formular pentru crearea unei noi meme.

Verificați dacă toate câmpurile sunt completate înainte de a trimite cererea.

[image assetsSrc="js-application-exap-prep-6.png" /]

Pentru a crea o memă, trimiteți următoarea solicitare:

```
Metodă: POST
URL: /data/memes
```

**Antetele** necesare sunt descrise în documentație.

Serviciul așteaptă un corp cu următoarea structură:

```
{
  title,
  description,
  imageUrl
}
```

Serviciul va returna noua înregistrare creată.

După succes, **redirecționați** utilizatorul către pagina **All memes**.

[/slide]

[slide hideTitle]
# Meme Details

// Video: JS-APPS-Meme-Lounge-Details-16
// Video: JS-APPS-Meme-Lounge-Details-17
// Video: JS-APPS-Meme-Lounge-Details-18

Toți utilizatorii ar trebui să poată **vizualiza pagina de detalii** a memelor.

Dând clic pe link-ul **Details** ar trebui **să se afișeze** pagina **Details** pe mema specifică.

Dacă **utilizatorul conectat în prezent este creatorul** memei, ar trebui afișate butoanele **Edit** și **Delete**.

[image assetsSrc="js-application-exap-prep-9.png" /]

Trimiteți următoarea solicitare pentru a vizualiza o memă:
```
Metodă: GET
URL: /data/memes/:id
```
`:Id-ul` este id-ul memei dorite.

**Antetele** necesare sunt descrise în documentație.

Serviciul va returna un singur obiect.

[/slide]


[slide hideTitle]
# Edit Meme Screen 

// Video: JS-APPS-Meme-Lounge-Edit-19
// Video: JS-APPS-Meme-Lounge-Edit-Meme-20

Pagina **Edit** este disponibilă utilizatorilor conectați și permite autorului să **editeze** **propriul** lor meme.

Pagina de detalii a fiecărei meme trebuie să conțină un link care ne redirecționează către pagina sa de editare.

Conține un formular cu câmpuri de intrare pentru toate proprietățile relevante. Verificați dacă toate câmpurile sunt completate înainte de a trimite cererea.

[image assetsSrc="js-application-exap-prep-10.png" /]

Pentru a edita o memă, trimiteți următoarea cerere:

```
Method: PUT
URL: /data/memes/:id
```

Unde `:id` este **id** al listei dorite.

Serviciul așteaptă un corp cu următoarea structură:

```
{
  title,
  description,
  imageUrl
}
```

**Antetele** necesare sunt descrise în documentație.

Serviciul va returna înregistrarea modificată.

Dacă reușiți, redirecționați utilizatorul către pagina **Details**.

**Notă:** **cererile** **PUT** **nu** fuzionează proprietățile și în schimb **vor înlocui** întreaga înregistrare.

[/slide]

[slide hideTitle]
# Delete Meme  

// Video: JS-APPS-Meme-Lounge-Delete-21
// Video: JS-APPS-Meme-Lounge-Delete-22

Funcționalitatea de ștergere este disponibilă pentru **utilizatorii conectați** și numai pentru memele create de aceștia.

Când autorul dă clic pe **Delete**, ar trebui afișat un dialog de confirmare.

După finalizarea acestui dialog, mema trebuie ștearsă din sistem.

Pentru a șterge o memă, trimiteți următoarea solicitare:

```
Method: DELETE
URL: /data/memes/:id
```

`:Id-ul` este **id** al listei dorite.

**Antetele** necesare sunt descrise în documentație.

Serviciul va returna un obiect, care conține timpul de ștergere.

După succes, **redirecționați** utilizatorul către pagina **All memes**.


[/slide]

[slide hideTitle]
# User Profile

// Video: JS-APPS-Meme-Lounge-Profile-23
// Video: JS-APPS-Meme-Lounge-Profile-24

Fiecare **utilizator conectat** ar trebui să-și poată vedea profilul făcând clic pe butonul `[My Profile]`.

Câmpurile pentru **Nume de utilizator**, **E-mail** și **Meme-urile mele** ar trebui să fie completate cu datele utilizatorului curent.

Rețineți că câmpul de sex al utilizatorului determină ce imagine este afișată ca avatar al acestuia.

[image assetsSrc="js-application-exap-prep-11.png" /]

Dacă nu există meme, ar trebui afișată următoarea fereastră:

[image assetsSrc="js-application-exap-prep-12.png" /]

Trimiteți următoarea solicitare pentru a citi lista de anunțuri:

```
Method: GET
URL: /data/memes?where=_ownerId%3D%22{userId}%22&sortBy=_createdOn%20desc
```
Unde `{userId}` este ID-ul utilizatorului conectat în prezent.

**Antetele** necesare sunt descrise în documentație.


Serviciul va returna o serie de listări.

[/slide]

[slide hideTitle]
# Bonus: Notificări 

//Video: JS-APPS-Meme-Lounge-Notifications-25
//Video: JS-APPS-Meme-Lounge-Notifications-26

În cazul unei **erori cauzate de acțiunile utilizatorului**, aplicația ar trebui să afișeze un **mesaj de notificare a erorii**, care dispare după 3 secunde.

Există o secțiune stilizată cu id "notificări" în fișierul HTML furnizat.

Erorile pot include **erori de validare** sau mesaje de eroare **returnate** de către serviciul REST, cum ar fi acreditări de utilizator incorecte, pe următoarele pagini: **Register**, **Login**, **Create** and **Edit**.

[image assetsSrc="js-application-exap-prep-13.png" /]

**Pagina Regiter:**
[image assetsSrc="js-application-exap-prep-14.png" /]
 
[/slide]