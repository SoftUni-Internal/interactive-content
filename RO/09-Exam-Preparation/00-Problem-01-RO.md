# Prezentare generală și detalii
[slide hideTitle]

# Meme Lounge

// Video: JS-APPS-Meme-Lounge-Overview-1


**Aici aveți un link către** [resurse](https://videos.softuni.org/resources/javascript/javascript-applications/Meme_Lounge.zip) **pentru aceasta sarcină.**

Creați o **aplicație web** (SPA) folosind JavaScript.

Aplicația ar trebui să afișeze conținut dinamic, pe baza interacțiunilor utilizatorilor.

Ar trebui să accepte **profiluri de utilizator** și **CRUD** operațiuni folosind un serviciu **REST**.

## Prezentare generală
Creați o aplicație front-end (SPA) pentru a vizualiza și gestiona **memele**.

Aplicația trebuie să permită vizitatorilor să navigheze prin catalogul **meme**.

Utilizatorii trebuie să poată **să se înregistreze** specificând un **nume de utilizator**, **e-mail**, **parolă** și **sexul lor**, acest lucru le va permite să **creeze** propriile lor postări .

Autorii postărilor pot **de asemenea** să editeze și să **șteargă** propriile publicații în orice moment.

## Technical Details

Vi se oferă următoarele resurse:

- **Project scaffold**: Un fișier **package.json** care conține o listă de dependențe comune

Puteți modifica bibliotecile incluse după preferința dvs. 

Secțiunile "**devDependencies**" și "**scripts**" ale fișierului sunt folosite de suita automatizată de testare, iar alterarea acestora poate duce la  rezutlate incorecte ale testelor.

Pentru a **inițializa** proiectul, executați comanda `npm install` prin terminalul din linia de comandă.

- **Fișiere HTML și CSS**: Toate paginile necesare, inclusiv **conținutul de eșantion** generat de utilizator, sunt incluse în fișierul **index.html**, care face legătura cu CSS și alte elemente ale fișierelor statice

**Fiecare vizualizare se află într-o secțiune separată** a fișierului, care poate fi identificată printr-un **nume de clasă unic sau un atribut id**.

Aplicația dvs. poate utiliza orice metodă preferată (cum ar fi o **bibliotecă de modelare** sau setări de vizibilitate manuală) pentru a afișa o vizualizare selectată și pentru a **naviga** între vizualizări la interacțiunea utilizatorului.

- **Serviciu REST local**: Acesta este un server, care conține **date eșantion** și acceptă **înregistrarea utilizatorilor** și **operațiuni CRUD** prin cereri REST

Este inclus în proiect.

Fiecare secțiune a acestui document (acolo unde este necesar) include detalii despre **punctele finale REST** necesare, către care ar trebui trimise cererile și forma corpului cererii preconizate.

Pentru **mai multe informații** despre modul de utilizare a serverului inclus, consultați **Anexa A: Utilizarea serviciului Local REST** la sfârșitul acestui document.

- **Teste automate**: este inclusă o suită completă de teste, pentru a vă ajuta să examinați codul

Pentru **mai multe informații** despre cum să rulați testele, consultați **Anexa B: Rularea Test Suite** la sfârșitul acestui document.

**Notă:** Când creați elementele HTML și le afișați pe pagină **aderați cât mai aproape de exemplele HTML** furnizate.

Schimbarea structurii documentului poate **împiedica** efectuarea corectă a testelor **ceea ce vă poate afecta evaluarea sarcinii**.

Puteți **adăuga atribute** (cum ar fi **clase** și **seturi de date**) la orice element HTML, precum și **modifica** atributele "**href**" pe linkuri și să adăugați/modificați atributele **metodă** și **acțiune** ale formularelor HTML pentru a facilita funcționarea corectă a unei biblioteci de rutare sau a unei alte metode de abstractizare.

De asemenea, puteți adăuga elemente ascunse pentru a vă ajuta să implementați anumite părți ale cerințelor aplicației.
[/slide]


[slide hideTitle]
# Anexa A: Utilizarea serviciului local REST

## Pornirea serviciului

// Video: JS-APPS-Meme-Lounge-Resources-overview-2

**Serviciul REST** va fi folderul "**server**" din resursele furnizate.

Nu are dependențe și poate fi pornit prin deschiderea unui terminal în directorul său și executarea:

`node server.js`

Dacă inițializează corect, ar trebui să vedeți un mesaj despre **adresa gazdă și portul**, pe care serviciul va răspunde cererilor.

## Trimiterea cererilor

Pentru a trimite o cerere, utilizați **numele gazdei** și **portul**, afișate în logul de inițializare și **adresa resursei** și **metoda** așa cum este descris în **cerințele aplicației**.

Dacă datele trebuie incluse în cerere, acestea trebuie să fie **codificate JSON** și trebuie să fie adăugat **antetul de tip conținut** corespunzător.

În mod similar, dacă serviciul urmează să returneze date, acesta va fi **codificat JSON**.

Rețineți că **unele cereri nu returnează un corp** și încercarea de a le analiza va genera o excepție.

Cererile **Read**, precum și cererile **login** și **regiter**, nu necesită autentificare. Toate celelalte cereri trebuie autentificate.

## Anteturi obligatorii

Pentru a trimite date către server, includeți un antet **Content-Type** și codificați corpul ca un șir JSON:

```
Content-Type: application/json
{JSON-encoded request body as described in the application requirements}
```

Pentru a efectua o solicitare autentificată, includeți un **antet X-Authorization**, setat la valoarea **tokenului de sesiune** și returnat printr-o cerere de autentificare sau înregistrare anterioară:

`X-Authorization: {session token}`

## Răspunsul serverului

Răspunsul de date:

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
```
HTTP/1.1 400 Request Error
Access-Contrl-Allow-Origin: *
Content-Type: application/json
{JSON-encoded error message}
```

## Informații suplimentare
Puteți găsi mai multe detalii în GitHub [depozit] (https://github.com/softuni-practice-server/softuni-practice-server/blob/master/README.md) al serviciului.

[/slide]

[slide hideTitle]
# Api Logic
// Video: JS-APPS-Meme-Lounge-2.1-API.JS 

[/slide]

[slide hideTitle]
# App Logic
// Video: JS-APPS-Meme-Lounge-3 
[/slide]


