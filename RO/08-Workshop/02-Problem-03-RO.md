# User AUTH, Catalog and Details Pages

[slide hideTitle]

# Navigation Bar and Home Page

## Navigation Bar

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/09-JS-Applications-Workshop/EN/CarTube-04-1-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Linkurile de navigare ar trebui să schimbe pagina curentă (vizualizare).

**Oaspeții** (vizitatori neautentificați) pot vedea linkurile către pagina **All Listings**, precum și linkurile către paginile **Login** și **Register**.

Utilizatorii autentificați ar trebui să poată accesa linkurile către pagina **All Listings** page, pagina **Create** și linkul către **Logout**.

Exemplu de navigare a unui **Oaspete**:

[image assetsSrc="js-application-cartube-workshop-8.png" /]

Exemplu de navigare a unui **Utilizator**: 

[image assetsSrc="js-application-cartube-workshop-9.gif" /]

## Home Page
Toți utilizatori ar trebui să fie întâmpinați de **Home page**, de unde pot accesa vizualizarea la **Listings**.

[image assetsSrc="js-application-cartube-workshop-12.gif" /]

[/slide]

[slide hideTitle]
# Login and Registration

## Login Page

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/09-JS-Applications-Workshop/EN/CarTube-04-2-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Serviciul **included REST** vine cu următoarele conturi de utilizator premade, pe care le puteți utiliza pentru dezvoltare: 

```
{ "username": "Peter", "password": "123456" } 
{ "username": "John", "password": "123456" } 
```
Pagina **Login** conține un formular pentru autentificarea utilizatorilor.

Furnizând un **username** și **password**, aplicația ar trebui să conecteze un utilizator la sistem dacă nu există **câmpuri goale** și date incorecte.

[image assetsSrc="js-application-cartube-workshop-10.jpg" /]

Trimiteți următoarea **cerere** pentru a efectua o autentificare:
```
Method: POST 
URL: /users/login 
```
Necesarele **anteturi** sunt descrise în documentație. 

Serviciul așteaptă un corp cu următoarea structura:
```
{ 
  username, 
  password 
} 
```

Dacă este cu succes, **REST service** va returna informațiile utilizatorului împreună cu o proprietate **accessToken**, care conține **sesiunea tokenului** a utilizatorului. 

Aceste informații trebuie stocate folosind **sessionStorage** sau **localStorage** pentru a putea efectua cereri autentificate.

Dacă datele de conectare sunt reușite, **redirecționați** utilizatorul către pagina **All Listings**. 

Dacă există o eroare, afișați un mesaj de eroare utilizând un dialog de sistem (**window.alert**).

## Register User 

Pagina **Register** conține un formular pentru a înregistra un nou utilizator.

Furnizând un **username** și **password**, aplicația ar trebui să înregistreze un nou utilizator în sistem dacă nu există **câmpuri goale** sau date incorecte.

[image assetsSrc="js-application-cartube-workshop-11.gif" /]

Trimiteți următoarea **cerere** pentru a efectua o înregistrare:
```
Method: POST 
URL: /users/register 
```
Necesarele **anteturi** sunt descrise în documentație. 

Serviciul așteaptă un corp cu următoarea structura:
```
{ 
  username, 
  password 
} 
```
După o înregistrare reușită **REST service** va returna un obiect nou creat cu o proprietate generată automat `_id` și o proprietate **accessToken**, care conține **sesiunea tokenului** a utilizatorului. 

Aceste informații trebuie stocate folosind **sessionStorage** sau **localStorage** pentru a putea efectua cereri autentificate.

Dacă datele de conectare sunt reușite, **redirecționați** utilizatorul către pagina **All Listings** page. 

Dacă există o eroare, afișați un mesaj de eroare utilizând un dialog de sistem (**window.alert**).

## Logout 

Acțiunea de deconectare este disponibilă pentru utilizatorii conectați. 

Trimiteți următoarea **cerere** pentru a efectua o deconectare:

```
Method: GET
URL: /users/logout
```
Necesarele **anteturi** sunt descrise în documentație. 

După o deconectare reușită, **REST service** va returna **empty response**. 

Ștergeți toate informațiile despre sesiunea în stocarea browserului.

Dacă deconectarea a reușit, **redirecționați** utilizatorul către pagina **Home**.

[/slide]


[slide hideTitle]
# All Listings Page

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/09-JS-Applications-Workshop/EN/CarTube-05-1-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Această pagină afișează toate înregistrările din sistem.

Dacă apăsați pe butonul **details** din car ads, veți ajunge la pagina de detalii a listei selectate.

[image assetsSrc="js-application-cartube-workshop-13.gif" /]

Dacă nu există înregistrări, trebuie afișată următoarea vizualizare:

[image assetsSrc="js-application-cartube-workshop-14.gif" /]

Trimiteți următoarea **cerere** pentru a citi lista de anunțuri:

```
Method: GET 
URL: /data/cars?sortBy=_createdOn%20desc 
```
Necesarele **headers** sunt descrise în documentație. 

Serviciul va returna o serie de înregistrări.
[/slide]

[slide hideTitle]
# Details

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/09-JS-Applications-Workshop/EN/CarTube-05-2-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Toți utilizatorii ar trebui să poată vizualiza **view details** despre înregistrări. 

Dacă apăsați pe linkul **Details** din **car ad** ar trebui **să se afișeze* pagina **Details**. 

Dacă utilizatorul conectat în prezent este creatorul listării, trebuie afișate butoanele **Edit** și **Delete**.

[image assetsSrc="js-application-cartube-workshop-16.gif" /]

Trimiteți următoarea **cerere** pentru a citi o singură listare:
```
Method: GET 
URL: /data/cars/:id 
```
 `:id` este **id** al listării dorite.

Necesarele **anteturi** sunt descrise în documentație.  

Serviciul va returna un singur obiect. 

[/slide]


