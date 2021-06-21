
# Baza de Date Relațională și NoSQL

[slide hideTitle]

# Baza de Date Relațională

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/04-Mongoose-MongoDB/03-04-05-03-Relational-and-NoSQL-Databases-and-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

O **bază de date relațională** este o colecție de informații stocate în tabele.

Fiecare coloană a tabelului conține un atribut diferit al datelor.

Fiecare tabel din baza de date are un câmp unic de identificare numit **cheie primară**.

Acesta poate lega tabelul original cu altele în care este utilizat ca **cheie externă**.

Aproape toate **bazele de date relaționale** utilizează **SQL** (Structured Query Language - Limbaj de interogare structurată) pentru **extragerea** datelor.

Sintaxa SQL poate fi diferită în funcție de sistemul de gestionare a **bazei de date relaționale** pe care îl utilizați.

Unele dintre cele mai populare **baze de date relaționale** sunt:

- **MySQL**

- **PostgreSQL**

- **Oracle DB**

- **SQLite**

[image assetsSrc="MongoDB-And-Mongoose.png" /]

[/slide]

[slide hideTitle]

# Baza de Date Non-Relațională (NoSQL)

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Back-End/RO/04-Mongoose-MongoDB/06-Non-relationa-Database-(NoSQL)-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Bazele de date non-relaționale** stochează datele diferit de bazele de date relaționale tradiționale.

**Baza de date non-relațională** este mai flexibilă decât cea tradițională, deoarece stochează date într-o formă non-tabelară și s-ar putea baza pe structuri precum documente.

Fișierele documentului pot fi foarte detaliate, conținând o serie de diferite tipuri de informații.

Bazele de date **NoSQL** sunt adesea folosite atunci când trebuie organizate date mari și complexe.

Unele dintre cele mai populare **baze de date non-relaționale** sunt:

- **MongoDB**

- **Cassandra**

- **Redis**

Iată un exemplu simplu de tabel într-o **bază de date relațională:**

| **Id** | **Name** | **Price** | **Quantity** | **Department** |
| :---: | :---: | :---: | :---: | :---: |
| 1 | Milk | 1.49 | 50 | Dairy |
| 2 | Muesli | 2.30 | 120 | Cereal |
| 3 | Apples | 0.60 | 80 | Fruits |

**Aceleași** date într-o **bază de date non-relațională:**

``` js
{
    id: 1,
    name: "Milk",
    price: 1.49,
    quantity: 50,
    department: "Dairy"
},
{
    id: 2,
    name: "Muesli",
    price: 2.30,
    quantity: 120,
    department: "Cereal"
},
{
    id: 3,
    name: "Apples",
    price: 0.60,
    quantity: 80,
    department: "Fruits"
},

```

Principala diferență este că în **baza de date non-relațională** putem adăuga alte intrări fără a fi nevoie să avem aceleași **chei**.

Deci, se poate adăuga un nou produs cu proprietăți diferite:

``` js
{
    id: 4,
    name: "Coca-Cola",
    rating: 25
},
```

În acest exemplu, **adăugăm o intrare nouă** (element) în tabelul nostru fără câmpuri anterioare.

După cum vedem, noul produs nu are un câmp **price**, **department** sau **quantity**

În schimb, are un câmp nou numit **rating**.

Aceasta este principala diferență.

Într-o **bază de date non-relațională**, nu ne bazăm pe o schemă care definește câmpurile în prealabil.

Acest lucru le face foarte flexibile.

[/slide]

