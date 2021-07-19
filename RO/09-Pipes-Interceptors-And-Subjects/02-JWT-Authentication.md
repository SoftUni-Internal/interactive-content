# JSON Web Token

[slide hideTitle]

# Ce Este JWT?

js-interactive-pipes-interceptors-and-subjects-10-11-JWT-and-what-is-jwt

**JSON Web Token** (JWT) este un standard pentru crearea unui **token** folosit pentru **autentificarea pe server**, care elimină nevoia de **session storage pe partea de server**. 

JWT este **stocat în client**, iar fiecare solicitare trimisă la server ar trebui să conțină un JWT.

Token-urile web pot fi **criptate** și **semnate**, lucru care **verifică** **integritatea** **datelor** conținute .

Fiecare JSON Web Token conține o **semnătură digitală unică** care asigură **transmiterea în siguranță** a **informației**.

Token-urile **criptate** pot **ascunde** această informație de **alte părți**.

Folosirea unui JWT permite **scalarea unui server web**, deoarece nu este necesară **alocarea** **memoriei de server** pentru a menține session storage-ul.

JWT este util pentru crearea unui **API pentru aplicații mobile**, deoarece **nu folosesc cookies**.

**Un API JSON bun trebuie să poată trimite JWT-uri** cu ajutorul anteturilor, dar și să **trimită cookies**, în funcție de tipul aplicației.

[/slide]


[slide hideTitle]

# Când Trebuie să Folosiți JWT?

js-interactive-pipes-interceptors-and-subjects-12-When-should-you-use-JWT

JWT este cel mai des folosit pentru **autorizare** și pentru **schimbul de informații**:

- **Autorizare**:

Fiecare **solicitare** a unui **utilizator logat** înclude token-ul JWT, permițând utilizatorului să **acceseze date și servicii** disponibile doar pentru **utilizatori înregistrați**.

Un caz comun de folosire a unui JWT este cazul în care aplicația folosește **două servere diferite**, de exemplu, o bancă care deține un **server care se ocupă de toate aplicațiile bancare** și un server separat care se ocupă de **planurile de pensionare**.

Acestea sunt **aplicații web complet separate**, dar banca dorește ca utilizatorii care se loghează în aplicația bancară să poată să fie **logați automat și în contul de pensionare**.

Deci, atunci când un utilizator **schimbă serverul bancar** la **serverul pentru pensionare**, ei nu doresc ca utilizatorul să fie nevoit să se **relogheze din nou**.

Ce se întâmplă cu un server normal bazat pe sesiuni este faptul că în timp ce **sesiunea clientului este stocată înăuntrul serverului băncii**, Id-ul sesiunii clientului **nu se găsește în serverul pentru pensionare**, iar utilizatorul trebuie să se logheze atunci când schimbă cele două conturi.

Atunci când este folosit un JWT, **aceeași cheie secretă poate fi partajată între** ambele servere, cel al băncii și cel pentru pensionare. 

Apoi, tot ce rămâne de făcut este **trimiterea aceluași JWT de la client către ambele** servere, iar **utilizatorul va fi autentificat** fără a fi nevoit să se relogheze.    
 
- **Schimbul de Informații**:

JWT este un mod sigur de a **transmite informații** între diferite părți, deoarece poate fi **semnat**.

Ele pot folosi aceeași cheie secretă pentru a **cripta** și **decripta** acele valori, dar și pentru a **verifica autentificarea** și **validitatea token-ului**.

[/slide]

[slide hideTitle]

# Structura JWT 

js-interactive-pipes-interceptors-and-subjects-13-JWT-Structure

Un JSON Web Token consistă în **trei părți**, separate prin **puncte**:

[image assetsSrc="Pipes-Interceptors-And-Subjects-1.png" /]

- "**Header**" - determină **algoritmul folosit pentru codare și decodare**

[image assetsSrc="Pipes-Interceptors-And-Subjects-2.png" /]
 
- "**Payload**" - păstrează toate **datele** pentru aplicație:

[image assetsSrc="Pipes-Interceptors-And-Subjects-3.png" /]

  - "**sub**" - vine de la **subject** și este Id-ul utilizatorului care va fi autentificat
  
Informațiile utilizatorului vor fi stocate în **sesiunea din baza de date** sau înăuntrul **serverului**.

  - "**name**" - este pentru **numele utilizatorului**

  - "**iat**" -  vine de la **issued at** și specifică când a fost **creat token-ul**

Țineți cont de faptul că un JWT poate **expira** după o anumită perioadă de timp, iar datele pe care le păstrează **nu vor mai fi valabile**.
  
- "**Signature**" - cea mai importantă parte a unui JWT, care **ne permite să verificăm** că token-ul **nu a fost schimbat de client** înainte ca acesta să fie trimis înapoi la server:

[image assetsSrc="Pipes-Interceptors-And-Subjects-4.png" /]

**Antetul \(header\) pentru codare** este pe prima linie, urmat de un **punct**, urmat de un **încărcătura (payload) codată**.

Codarea "**base64**" este folosită **pentru ambele secțiuni**, apoi acestea sunt combinate cu virgula.

Spus mai simplu, **antetul** și **încărcătura** sunt **combinate**, lucru care reprezintă **toate datele care sunt trimise** către utilizator.

Apoi, un **algoritm** care este **definit în antet**, în cazul nostru "**HMACSHA256**", codifică informația.
[/slide]
