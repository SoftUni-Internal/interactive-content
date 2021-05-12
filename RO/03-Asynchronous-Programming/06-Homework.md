# Teme Pentru Acasă

[slide hideTitle]

# Problemă: Bus Stop

Pentru a rezolva unele dintre următoarele sarcini, va trebui să utilizați o versiune actualizată a serviciului local REST care poate fi descărcat de la [here](https://videos.softuni.org/resources/javascript/javascript-applications/JS-Apps-Server1.zip). 

Pentru a porni serverul, extrageți-l într-un folder de pe computer și rulați fișierul **start.bat** inclus sau deschideți manual un prompt de comandă și executați comanda `node server.js`.

Descărcați resursele de aici [here](https://videos.softuni.org/resources/javascript/javascript-applications/01_Bus_Stop.zip).

## Descriere

Creați un program JS care afișează orele de sosire ale tuturor autobuzelor pentru o anumită "**stație de autobuz**" când se face clic pe un buton.

Când se face clic pe butonul [**Submit**], numele stației de autobuz ar trebui să apară și lista de mai jos ar trebui să fie completată cu toate autobuzele care sunt așteptate să sosească, împreună cu orele de sosire ale acestora. Luați **valoarea** pentru ID-ul stației de autobuz din câmpul de intrare **stopId**.

Trimiteți o solicitare GET către `http://localhost:3030/jsonstore/bus/businfo/:busId` și transformați răspunsul.

Veți primi un **obiect JSON** în următorul format:

```
stopId: {

 name: stopName,

 buses: { busId: time, ... }

}
```

Plasați proprietatea **name** ca **text** în containerul div cu id-ul **stopName** și fiecare autobuz ca **element de listă** în următorul format:

- "**Bus** \{**busId**\} **arrives in** \{**time**\}"

Dacă solicitarea nu este validă sau informațiile nu sunt în formatul așteptat, afișați **Error**. 

Lista ar trebui să fie ștearsă înainte ca fiecare solicitare să fie trimisă.

**Notă:** Serviciul va răspunde cu date valide la codul autobuzului: 1287, 1308, 1327 și 2334.


## Exemple

[image assetsSrc="asyncprogramming-1.png" /]


```js
<div id="stopInfo" style="width:20em">
   <div>
      <labl for="stopId">Stop ID: </label> 
      <input id="stopId" type="text"> 
      <input id="submit" type="button" value="Check" onclick="getInfo()">
   </div>
   <div id="result">
      <div id="stopName"></div>
      <ul id="buses"></ul>
   </div>
</div>
```

Când se face clic pe butonul \[**Check**\] rezultatele trebuie afișate în elementele corespunzătoare:

[image assetsSrc="asyncprogramming-3.png" /]

```js
<div id="stopInfo" style="width:20em">
   <div>...</div>
   <div id="result">
      <div id="stopName">Buckingham Palace</div>
      <ul id="busses">
      <li>Bus 4 arrives in 13 minutes</li>
      <li>Bus 12 arrives in 6 minutes</li>
      <li>Bus 18 arrives in 7 minutes</li>
      </ul>
   </div>
</div>
```

Dacă apare o eroare, numele opririi se schimbă în Error:

[image assetsSrc="asyncprogramming-5.png" /]

```js
<div id="stopInfo" style="width:20em">
   <div>...</div>
   <div id="result">
      <div id="stopName">Error</div>
      <ul id="buses"></ul>
   </div>
</div>
```

[/slide]

[slide hideTitle]

# Problemă: Bus Schedule

Descărcați resursele de aici [here](https://videos.softuni.org/resources/javascript/javascript-applications/02_Bus_Schedule.zip).

## Descriere

Creați un program JS care urmărește progresul unui autobuz pe ruta sa și îl anunță într-o casetă de informații.

Programul ar trebui să afișeze oprirea viitoare și să solicite de la server numele următoarei, odată ce autobuzul ajunge la stația respectivă.

Autobuzul are două stări - **moving** și **stopped**.

Când este **stopped**, numai butonul [**Depart**] trebuie să fie **activat**, iar caseta de informații trebuie să afișeze numele **stației** curente.

Când este **moving**, numai butonul [**Arrive**] este **activat**, iar caseta de informații trebuie să afișeze numele **stației** viitoare. 

Inițial, în caseta de informații trebuie să apară "**Not Connected**" și butonul [**Arrive**] este **dezactivat**. 

ID-ul primei stații este "**depot**".

Când se face clic pe butonul [**Depart**] trimiteți o cerere GET către server cu ID-ul stației curente la următoarea adresă URL:`http://localhost:3030/jsonstore/bus/schedule/:id`

Veți primi un **obiect JSON** ca răspuns în următorul format:

```
stopId {
 name: stopName,
 next: nextStopId
}
```

Actualizați caseta de informații cu informațiile din răspuns, dezactivați butonul [**Depart**] și activați butonul [ [**Arrive**]. 

Textul din caseta de informații trebuie să fie:

- "**Next stop** \{**stopName**\}"

Când se face clic pe butonul [**Arrive**] actualizați textul, dezactivați butonul [**Arrive**] și activați butonul [**Depart**]. 

Textul din caseta de informații trebuie să fie:

- "**Arriving at** \{**stopName**\}"

Programul va parcurge la infinit întregul program dacă continuați să faceți clic pe butoane.

Dacă se primesc date nevalide, afișați "**Error**" în caseta de informații și **dezactivați** ambele butoane.

## Exemple

Inițial, în caseta de informații apare ca "**Not Connected**" și butonul de sosire este dezactivat.

[image assetsSrc="asyncprogramming-7.png" /]

```js
<div id="schedule">
   <div id="info">
      <span class="info">Not Connected</span>
   </div>
   <div id="controls">
      <input id="depart" value="Depart" type="button" onclick="result.depart()">
      <input id="arrive" value="Arrive" type="button" onclick="result.arrive()" disabled="true">
   </div>
</div>
```

Când se face clic pe [**Depart**], se face o cerere cu primul id. Caseta de informații este actualizată cu noile informații și butoanele sunt schimbate:

[image assetsSrc="asyncprogramming-9.png" /]

```js
<div id="schedule">
   <div id="info">
      <span class="info">Next stop Depot</span>
   </div>
   <div id="controls">
      <input id="depart" value="Depart" type="button" onclick="result.depart()" disabled="disabled">
      <input id="arrive" value="Arrive" type="button" onclick="result.arrive()">
   </div>
</div>
```

Dând clic pe butonul [**Arrive**], se schimbă caseta de informații și se schimbă butoanele. 

Aceasta permite butonului [**Depart**] să poată fi din nou selectabil, ceea ce face o nouă solicitare și actualizează informațiile:

[image assetsSrc="asyncprogramming-11.png" /]

```js
<div id="schedule">
   <div id="info">
      <span class="info">Arriving at Depot</span>
   </div>
   <div id="controls">
      <input id="depart" value="Depart" type="button" onclick="result.depart()">
      <input id="arrive" value="Arrive" type="button" onclick="result.arrive()" disabled="disabled">
   </div>
</div>
```


[/slide]

[slide hideTitle]

# Problemă: Forecaster

Descărcați resursele de aici [here](https://videos.softuni.org/resources/javascript/javascript-applications/03_Forecaster.zip).

## Descriere

Creați un program JS care preia rapoartele meteo **de pe un server** și **le afișează** utilizatorului.

Când utilizatorul scrie numele unei locații și face clic pe butonul [**Get Weather**], trimiteți o cerere GET către server la `http://localhost:3030/jsonstore/forecaster/locations`.

Răspunsul va fi o serie de obiecte cu următoarea structură:

```
{
 name: locationName,
 code: locationCode
}
```

Găsiți obiectul care corespunde numelui pe care utilizatorul l-a trimis în câmpul de introducere cu ID-ul "**location**" și folosiți-i valoarea **codului** pentru a face **încă două** **cereri GET**:

- Pentru condițiile meteorologice actuale, faceți o solicitare la `http://localhost:3030/jsonstore/forecaster/today/:code`

Răspunsul de la server va fi un obiect cu următoarea structură:

```
{ 
  name: locationName,
  forecast: { low: temp,
              high: temp,
              condition: condition } 
}
```

-   Pentru o prognoză de 3 zile, faceți o solicitare la `http://localhost:3030/jsonstore/forecaster/upcoming/:code`

Răspunsul de la server va fi un obiect cu următoarea structură:

```
{ 
  name: locationName,
  forecast: [{ low: temp,
               high: temp,
               condition: condition }, … ] 
}
```

Utilizați informațiile din aceste două obiecte pentru a compune o prognoză în format HTML și introduceți-le în interiorul paginii. 

Rețineți că `<div>` cu un ID de "forecast" trebuie setat la vizibil.

Consultați exemplele pentru detalii.

Dacă apare o **eroare** (serverul nu răspunde sau numele locației nu poate fi găsit) sau dacă datele nu sunt în formatul corect, afișați "**Error**"în **secțiunea de prognoză**.

Utilizați următoarele coduri pentru simbolurile meteo:

- Sunny: `&#x2600;` // ☀
- Partly sunny: `&#x26C5;` // ⛅
- Overcast: `&#x2601;` // ☁
- Rain: `&#x2614; `// ☂
- Degrees: `&#176;` // °

## Exemple

Când începe aplicația, **forecast div** este **ascunsă**.

Când utilizatorul **introduce un nume** și **face clic** pe butonul [**Get Weather**] o cerere GET este trimisă la server.

[image assetsSrc="asyncprogramming-13.png" /]

```js
<div id="request">...</div>
<div id="forecast" style="display:none">
   <div id="current">...</div>
   <div id="upcoming">...</div>
</div>
```

[image assetsSrc="asyncprogramming-15.png" /]

```js
<div id="request">... </div>
<div id="forecast" style="display: block;">
   <div id="current">
      <div class="label">Current conditions</div>
      <div class="forecasts">
         <span class="condition symbol">☀</span>
         <span class="condition">
         <span class="forecast-data">New York, USA</span>
         <span class="forecast-data">8°/19°</span>
         <span class="forecast-data">Sunny</span>
         </span>
      </div>
   </div>
   <div id="upcoming">
      <div class="label">Three-day forecast</div>
      <div class="forecast-info">
         <span class="upcoming">
         <span class="symbol">⛅</span>
         <span class="forecast-data">6°/17°</span>
         <span class="forecast-data">Partly sunny</span>
         </span>
         <span class="upcoming">...</span>
         <span class="upcoming">...</span>
      </div>
   </div>
</div>
```
[/slide]


[slide hideTitle]

# Problemă: Locked Profile

Descărcați resursele de aici [here](https://videos.softuni.org/resources/javascript/javascript-applications/04_Locked_Profile.zip).

## Descriere

**Creați un program JS** care **afișează** și **ascunde** informațiile suplimentare despre utilizatori, pe care le puteți găsi făcând o solicitare GET către server la următoarea adresă URL:

`http://localhost:3030/jsonstore/advanced/profiles`

Răspunsul va fi un obiect care conține informații pentru toți utilizatorii.

Creați un card de profil pentru fiecare utilizator și afișați-l pe pagina web. 

Fiecare articol trebuie să aibă următoarea structură:

[image assetsSrc="asyncprogramming-17.png" /]

[image assetsSrc="asyncprogramming-18v2.png" /]

Când se face clic pe unul dintre **butoanele** [**Show more**] **informațiile ascunse** din containerul **div** trebuie afișate numai dacă **profilul nu este blocat**. 

Dacă profilul curent este **blocat**, nu ar trebui să se întâmple nimic.

[image assetsSrc="asyncprogramming-19.png" /]

Dacă **se afișează informațiile ascunse** și **blocăm** **profilul din nou**, butonul [**Hide it**] ar trebui **să nu funcționeze**!

În caz contrar, când profilul este **deblocat** și facem clic pe butonul [**Hide it**] noile câmpuri trebuie să fie ascunse din nou.

[/slide]


[slide hideTitle]

# Problemă: Accordion

Descărcați resursele de aici [here](https://videos.softuni.org/resources/javascript/javascript-applications/05_Accordion.zip).

## Descriere

Creați o aplicație care afișează **mai puține sau mai multe** informații pentru articolul selectat. La început, trebuie să trimiteți o cerere **GET** către server la:

`http://localhost:3030/jsonstore/advanced/articles/list`

Răspunsul va fi un obiect cu titlurile articolelor.

Făcând clic pe butonul [**More**] pentru **articolul** selectat, acesta ar trebui să **dezvăluie** conținutul **ascuns** al unui div container și **să schimbe** textul butonului în [**Less**]. 

Primiți conținutul făcând o cerere **GET** către server la următoarea adresă URL:

`http://localhost:3030/jsonstore/advanced/articles/details/:id`

Răspunsul va fi un obiect cu proprietatea **id**, **title**, **content**. 

Când se face clic **din nou** pe același buton, **ascunde** containerul div și **schimbă** textul butonului în [**More**].

Butoanele Less sau More ar trebui să fie **comutabile** (ar trebui să puteți face clic pe buton de câte ori doriți).

## Exemple

[image assetsSrc="asyncprogramming-20.png" /]

[image assetsSrc="asyncprogramming-21.png" /]

Fiecare articol trebuie să aibă următoarea structură:

[image assetsSrc="asyncprogramming-22.png" /]

Vi se permite să adăugați atribute noi, dar nu să le modificați pe cele existente.


[/slide]
