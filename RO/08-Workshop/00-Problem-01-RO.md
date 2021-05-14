# Overview and Details
[slide hideTitle]

# CarTube

**Aici este un link la** [resources](https://videos.softuni.org/resources/javascript/javascript-applications/JS-Applications-Workshop-CarTube.zip) **pentru această sarcină**.

Creați o **aplicație web** (SPA) folosind JavaScript. 

Aplicația trebuie să afișeze în mod dinamic conținutul, în funcție de interacțiunile a utilizatorului.

Ar trebui să suporte operațiunile **user-profiles** și **CRUD** folosind serviciul **REST**.

## Overview
**Implementați** o aplicație front-end (SPA) pentru a vizualiza și gestiona **listări** de mașini. 

Aplicația ar trebui să permită vizitatorilor să navigheze prin diferite anunțuri auto. 

Utilizatorii ar trebui **să se înregistreze** în aplicație oferind un **username** și un **password**, acest lucru ar trebui să le permită să **își creeze** propriile anunțuri. 

Autorii anunțurilor pot, de asemenea  **a edita** sau **a șterge** propriile publicații în orice moment.

## Technical Details

Sunt furnizate următoarele resurse: 

- **Project scaffold**: Un fișier **package.json**, care care conține o listă de dependențe comune

Puteți schimba bibliotecile incluse în funcție de preferință. Secțiunile "**devDependencies**" și "**scripts**" ale fișierului sunt utilizate de suita de testare automată, iar modificarea acestora poate duce la rezultate incorecte ale testelor.

Pentru a **inițializa** proiectul, executați comanda `npm install` prin terminalul din linia de comandă.

- **HTML and CSS files**: Toate vizualizările și paginile necesare pentru aplicație, inclusiv **sample** generat de utilizatorul **content**, sunt incluse în fișierul **index.html**, care este conectat către CSS și alte fișiere statice

**Fiecare vizualizare se află într-o secțiune separată** a fișierului, care poate fi identificată printr-un atribut **unique class name or an id**.

Aplicația dvs. poate utiliza orice metodă preferată (cum ar fi o **templating library** sau setări de vizibilitate manuală) pentru a afișa vizualizarea selectată și pentru a **naviga** între vizualizările a interacțiunile utilizatorului.

- **Local REST service**: Este un server care conține **sample data** și suportă **user registration and CRUD operations** prin cererea REST.

Este inclus in proiectul. 

Fiecare secțiune a acestui document (acolo unde este cazul) include detalii necesare despre **REST endpoints**, cărora trebuie trimise **cereri** și forma corpului cererii preconizate.

Pentru **mai multe informații** despre modul de utilizare a serverului inclus, consultați **Anexa A: Utilizarea serviciului local REST** din acest document.

- **Automated tests**: este inclusă o suită completă de testare, care poate fi utilizată pentru a testa soluția dvs. 

Pentru mai multe informații despre modul rulării testelor, consultați **Appendix B: Running the Test Suite** din acest document.

**Notă:** Când creați elementele HTML și le afișați pe pagină, **aderați cât mai aproape de exemplele HTML** furnizate 

Schimbarea structurii documentului poate **împiedica** reularea corecta a testelor, ceea ce vă poate **afecta evaluarea**. 

Puteți **adăuga atribute** (cum ar fi **classes** și **datasets**) la orice HTML Element, precum și atributele **change** "**href**" pe linkuri și adăugați/modificați atributelee **method** și **action** a Formelor HTML Forms, pentru a facilita funcționarea corectă a unei library de rutare sau a unei alte metode de abstractizare. 

De asemenea, puteți adăuga elemente ascunse pentru a vă ajuta să implementați anumite părți ale cerințelor aplicației.
[/slide]


[slide hideTitle]
# Anexa A: Utilizarea serviciului local REST

## Pornirea serviciului 

Serviciul REST va fi în folderul "**server**" din resursele furnizate. 

Nu are dependențe și poate fi pornit prin deschiderea unui terminal în directorul său prin executarea:

`node server.js `

Dacă este inițializat corect, ar trebui să vedeți un mesaj despre **host address and port**, pe care serviciul va răspunde solicitărilor.

## Trimiterea cererilor  

Pentru a trimite o solicitare, utilizați **hostname** și **port**, afișate în jurnalul de inițializare și **resource address** și **method** așa cum este descris în **application requirements**. 

Dacă datele trebuie incluse în cerere, acestea trebuie să fie **codificate JSON** și trebuie să fie adăugat **antetul de tip conținut** corespunzător.

În mod similar, dacă serviciul urmează să returneze date, acesta va fi **codificat JSON**.

Rețineți că **unele cereri nu returnează un corp** și încercarea de a le analiza va genera o excepție.

Cererile **Read**, precum și cererile **login** și **register**, nu necesită autentificare. 
Toate celelalte cereri trebuie autentificate.

## Anteturi obligatorii

Pentru a trimite datele către server, includeți header-ul **Content-Type** și codificați corpul ca un șir JSON:

```
Content-Type: application/json 
{JSON-encoded request body as described in the application requirements}
```
Pentru a efectua o solicitare autentificată, includeți un **antet X-Authorization**, setat la valoarea **tokenului de sesiune** și returnat printr-o cerere de autentificare sau înregistrare anterioară:

`X-Authorization: {session token}`

## Răspunsul serverului 

The data response:

```
HTTP/1.1 200 OK
Access-Contrl-Allow-Origin: *
Content-Type: application/json
{JSON-encoded response data}
```
Empty response:
```
HTTP/1.1 204 No Content
Access-Contrl-Allow-Origin: *
```
Empty responses:
```
HTTP/1.1 400 Request Error
Access-Contrl-Allow-Origin: *
Content-Type: application/json
{JSON-encoded error message}
```
## Informații suplimentare
Puteți găsi mai multe detalii pe GitHub [repository](https://github.com/softuni-practice-server/softuni-practice-server/blob/master/README.md) of the service.

[/slide]

[slide hideTitle]
# Anexa B: Rularea Test Suite

## Setarea proiectului
Testele necesită un web server pentru a livra conținutul aplicației. 

Există un server web de dezvoltare inclus în schela proiectului, dar puteți folosi un server cu care sunteți familiarizați

Rețineți că instrumentele specializate precum **BrowserSync** pot interfera cu testele. 
 
Pentru a inițializa proiectul cu dependențele sale, deschideți un terminal în folderul care conține fișierul **package.json** și executați următoarele:

`npm install`

Dacă ați modificat secțiunea **devDependencies** a proiectului, este posibil ca testele să nu se inițializeze corect.


[image assetsSrc="js-application-cartube-workshop-1.png" /]

## Executarea testelor
Înainte de a rula suita de testare, asigurați-vă că  serverul web este funcțional și că aplicația poate fi găsită la rădăcina adresei sale de rețea. 

Pentru a porni serverul dev inclus, deschideți un terminal în folderul care conține **package.json** și executați:

`npm run start`

Aceasta este o operație unică, cu excepția cazului în care serverul va fi terminat la un moment dat. 

Poate fi repornit cu aceeași comandă ca mai sus.

Pentru a executa testele, nu închideți terminalul, rulați instanța serverului web, deschideți un terminal nou în folderul care conține **package.json** și executați:

`npm run test`

[image assetsSrc="js-application-cartube-workshop-2.png" /]

Rezultatele testului vor fi afișate în terminal, împreună cu informații detaliate despre problemele întâlnite.

Puteți efectua această operațiune ori de câte ori este necesar, executând din nou comanda.

## Depanarea soluției

Dacă un test eșuează, puteți vizualiza informațiile despre cerințele care nu au fost îndeplinite de aplicația dvs.

Deschideți fișierul **e2e.test.js** în folderul **tests** și navigați la secțiunea așa cum este descris mai jos.

**Primul pas nu va fi necesar dacă utilizați web serverul inclus**.

Asigurați-vă că hostul aplicației este setat corect:

[image assetsSrc="js-application-cartube-workshop-3.png" /]

Valoarea pentru **host** trebuie să fie adresa la care este trimisă cererea dvs.

Asigurați-vă că introducerea acestei adrese într-un browser de internet obișnuit afișează aplicația dvs.

Pentru a efectua un singur test, în loc de întreaga suită (utilă atunci când depanați un singur test eșuat), găsiți testul și adăugați `.only` după referința **it**:

[image assetsSrc="js-application-cartube-workshop-4.png" /]

La mașinile mai lente, unele teste pot necesita mai mult timp pentru finalizare. 

Puteți instrui testele să ruleze mai lent, mărind valorile pentru **interval** și **timeout**:

[image assetsSrc="js-application-cartube-workshop-5.png" /]

**interval** valori mai mari de 500 și **timeout** valori mai mari de 10000 nu sunt recomandate.

Dacă acest lucru nu ajută ca testul să treacă, setați valoarea **DEBUG** la **true** și rulați din nou testele - aceasta va lansa o instanță de browser și vă va permite să vedeți ce este testat, ce vede testul și unde eșuează (sau expiră):

[image assetsSrc="js-application-cartube-workshop-6.png" /]

Dacă acțiunile se întâmplă prea repede, puteți crește valoarea de **slowMo**. 

Dacă browserul se blochează, îl puteți închide și anula testele rămase selectând fereastra terminalului și apăsând `[Ctrl+C]` urmată de litera "**y**" și `[Enter]`.

Lucrul detaliat de căutat este rândul exact în care testul eșuează::

[image assetsSrc="js-application-cartube-workshop-7.png" /]

[/slide]