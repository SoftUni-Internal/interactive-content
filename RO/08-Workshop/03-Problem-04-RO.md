# CRUD

[slide hideTitle]
# Create Car Listing

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/09-JS-Applications-Workshop/EN/CarTube-06-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pagina **Create** este disponibilă utilizatorilor conectați.

Conține un formular pentru a crea noi listări.

Verificați dacă toate câmpurile sunt completate înainte de a trimite cererea.

[image assetsSrc="js-application-cartube-workshop-15.gif" /]

Pentru a crea o listare, trimiteți următoarea **cerere**:

```
Method: POST 
URL: /data/cars 
```
Necesarele **anteturi** sunt descrise în documentație. 

Serviciul așteaptă un corp cu următoarea structură:
```
{ 
  brand, 
  model, 
  description, 
  year, 
  imageUrl, 
  price 
} 
```
Necesarele **anteturi** sunt descrise în documentație. 

Valorile pentru **year** și **price** trebuie să fie numere pozitive. 

Serviciul va returna o listare nou creată.

Dacă e cu succes, **redirecționați** utilizatorul către pagina **All Listings**.
[/slide]


[slide hideTitle]
# Edit Listing

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/09-JS-Applications-Workshop/EN/CarTube-07-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /] 

Pagina **Edit** este disponibilă utilizatorilor conectați și permite autorului să-și  **editeze** propriile listări.

Dacă apăsați pe linkul **Edit** a unei anumite listări din pagina **Details**, se va afișa pagina **Edit**. 

Conține un formular cu câmpuri de intrare pentru toate proprietățile relevante.

Verificați dacă toate câmpurile sunt completate înainte de a trimite cererea.

[image assetsSrc="js-application-cartube-workshop-17.gif" /]

Pentru a edita o listare, trimiteți următoarea **cerere**:

```
Method: PUT 
URL: /data/cars/:id 
```

Unde `:id` este **id** al listei dorite.

Serviciul așteaptă un corp cu următoarea structura:

```
{ 
  brand, 
  model, 
  description, 
  year, 
  imageUrl, 
  price 
} 
```
Necesarele **anteturi** sunt descrise în documentație. 

Valorile pentru **year** și **price** trebuie să fie numere pozitive.  

Serviciul va returna listarea  modificată.

Dacă e cu succes, **redirecționați** utilizatorul către pagina **Details**.

**Notă:** Cererile **PUT**  **nu** fuzionează proprietățile și în schimb vor **înlocui** întreaga listare. 

## Delete Listing 

Acțiunea de ștergere este disponibilă pentru **utilizatorii conectați** și pentru listările pe care le-au creat.

Când autorul dă clic pe **Delete**, trebuie afișat un dialog de confirmare. 

După finalizarea acestui dialog, listarea ar trebui să fie **ștearsă** din sistem.

Pentru a șterge o listare, trimiteți următoarea solicitare:


```
Method: DELETE 
URL: /data/cars/:id 
```

 `:id` este **id** al listei dorite.

Necesarele **headers** sunt descrise în documentație.

Serviciul va returna un obiect, care conține timpul de ștergere.. 

Dacă e cu succes, **redirecționați** utilizatorul către pagina **All Listings**.

[/slide]

[slide hideTitle]
# My Listings

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/09-JS-Applications-Workshop/EN/CarTube-08-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Această pagină afișează toate listările efectuate de utilizatorul curent.

[image assetsSrc="js-application-cartube-workshop-18.gif" /]

Dacă nu există listări, trebuie afișată următoarea vizualizare::

[image assetsSrc="js-application-cartube-workshop-19.gif" /]

Trimiteți următoarea **cerere** pentru a citi lista de anunțuri:

```
Method: GET 
URL: /data/cars?where=_ownerId%3D%22{userId}%22&sortBy=_createdOn%20desc 
```

 `{userId}` este ID-ul utilizatorului conectat în prezent.

Necesarele **anteturi** sunt descrise în documentație.

Serviciul va returna o serie de listări.
[/slide]

