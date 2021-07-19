# Managementul Stării

[slide hideTitle]

# Introducere în NgRx

03-04-introduction-to-state-management

Framework-ul **NgRx** a fost creat pentru a construi **aplicații reactive Angular**.

El oferă o selecție de **biblioteci** pentru **controlul stării aplicației** și pentru **fluxurile de date**.

Atunci când construim o aplicație Angular, starea este în mod tipic manipulată de un număr de servicii diferite.

Pe măsură ce proiectul nostru crește, poate deveni dificilă urmărirea modificărilor aduse stării sale.

În cazul apariției unei probleme, depanarea devine aproape imposibilă.

NgRx rezolvă această problemă punând starea într-un singur obiect, ceea ce face ca modificările să fie mult mai ușoare.

Inspirat de **Redux**, **NgRx Store** face ca lucrul cu date complexe să fie mai **ușor** de **gestionat** și de **testat**.

[/slide]

[slide hideTitle]

# Pachetele NgRx

05-NgRx-Packages

**Bibliotecile NgRx** sunt împărțite în **patru categorii principale**:

## Managementul Stării

- **Store** - o soluție de management al stării creată pentru Angular
  * construită pe principiile Redux, ea echilibrează puterea lui RxJS
  * stimulează utilizarea Observabilelor

- **Efects** - furnizează un model de efecte secundare pentru NgRx Store:
  * efectele sunt observabile care utilizează acțiuni atât ca sursă, cât și ca destinație
  * ele se pot abona la și pot publica date în fluxul de acțiuni

- **Router Store** - furnizează legături pentru conectarea între Routerul Angular și NgRx Store

- **Entity** - o bibliotecă care oferă un API pentru managementul colecțiilor

- **ComponentStore** - folosită pentru gestionarea stării locale

## Supravegherea Datelor

- **Data** - simplifică managementul intrărilor de date
  * mai puține șabloane de cod ca rezultat
  * extinde pachetul Entitate

## Controlul Aspectului Vizual

- **Component** - permite crearea de aplicații Angular complet reactive:
  * permite mai mult control asupra procesului de randare a componentelor
  * se află în prezent în fază experimentală

## Instrumentar Pentru Dezvoltatori

- **Store Devtools** - furnizează instrumente de dezvoltare pentru `@ngrx/store`

- **Schematics** - o bibliotecă de structuri care furnizează comenzi CLI pentru generarea de construcții:
  * toate celelalte biblioteci trebuie să fie instalate înainte

[/slide]


[slide hideTitle]

# Ciclul de Viață al Managementului de Stare

06-State-Management-Lifecycle

Cele mai importante trei bucăți ale **ciclului de viață al managementului de stare** sunt **store**, **actions**, și **reducers**.

**Magazinul** cuprinde **starea** aplicației într-un singur **obiect** și **operează modificări** asupra acesteia când este **transmisă** o acțiune.

**Acțiunile** sunt responsabile pentru **trimiterea datelor** către un **reductor**.

**Reductorii sau funcțiile de reducere** iau **ultima acțiune care le-a fost transmisă** și o **compară** cu starea curentă, **actualizând starea** atunci când este necesar.

De exemplu, să spunem că utilizatorul face click pe un **buton**. 

Când evenimentul de a face click are loc, dorim să schimbăm **valoarea** afișată a unei componente de pe **bara laterală** - fie să o arătăm fie să o ascundem.

Totuși, cele două componente UI sunt stocate **separat**.

NgRx **manipulează** și stochează aceste modificări de stare într-un **singur** obiect de stare.

Imediat ce s-a apăsat pe buton, componenta sa de încapsulare trimite o **acțiune**.

Această acțiune este trimisă către **funcția de reducere**.

Funcția de reducere ia starea **actuală** și returnează o stare nouă, în funcție de acțiunea ce i-a fost furnizată.

Țineți minte că starea este **imuabilă** - funcția de reducere va returna întotdeauna o **nouă stare**.

[/slide]
