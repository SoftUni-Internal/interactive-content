# Șablonul de Publicare Abonare

[slide hideTitle]

# Ce este Pub/Sub?

Șablonul Publicare-Abonare este un model de proiectare arhitecturală utilizat pentru schimbul de mesaje între diferite componente ale sistemului, fără ca acestea să știe despre identitatea celuilalt.

Expeditorii sau, cei numiți editori, nu programează mesajele pentru a fi trimise direct la anumiți destinatari (abonați).

Abonații aleg evenimentele la care doresc să se aboneze și primesc mesaje numai de la ele.

Există un intermediar numit "**message broker**" sau un "**Event Bus**".

Intermediarul "**event bus**" primește mesaje de la "**Editor**" și apoi le transmite către "**Abonat**".

[image assetsSrc="JS-Back-End-Streams-And-Utilities.png" /]

## Demo: Șablon de Editor-Abonat

În primul rând, vom declara o variabilă locală în interiorul funcției pentru a stoca funcțiile de apel invers abonate astfel: `const subscribers = {}`.

Apoi, vom defini metoda `subscribe`, care va fi responsabilă pentru introducerea funcțiilor de apel invers în obiectul `subscribers`.

Verifică dacă proprietatea "**eventName**" din stocarea abonatului este deja o matrice. 

În caz contrar, presupune că acesta va fi prima funcție de apel invers înregistrată pentru `subscribers[eventName]` și inițializează o matrice. 

Apoi, se procedează la împingerea functiei de apel invers în matrice.

Într-o aplicație reală, este posibil să avem scurgeri de memorie dacă ne abonăm la multe funcții de apel invers.

Trebuie să eliminăm funcțiile de apel invers la care ne am abonat atunci când nu mai sunt necesare. 

Cel mai bun loc pentru a implementa acest lucru este valoarea returnată a funcției de abonare.

```js
function pubSub() {
    const subscribers = {};

    function publish(eventName, data) {
        if (!Array.isArray(subscribers[eventName])) {
            return;
        }
        subscribers[eventName].forEach((callback) => {
            callback(data);
        })
    }

    function subscribe(eventName, callback) {
        if (!Array.isArray(subscribers[eventName])) {
            subscribers[eventName] = [];
        }
        subscribers[eventName].push(callback);
        const index = subscribers[eventName].length - 1;
        return {
            unsubscribe() {
                subscribers[eventName].splice(index, 1);
            },
        }
    }
    const unsubscribe = subscribe('food', function(data) {
        console.log(`Received some food: ${data}`);
    })
    unsubscribe();
    return {
        publish,
        subscribe
    }
}
```

[/slide]

[slide hideTitle]

# Avantaje

Șablonul **Pub/Sub** face codul nostru mai flexibil, deoarece editorii și abonații sunt decuplați și lucrează independent unul de celălalt.

Acest lucru permite o scalabilitate mai bună, deoarece este ușor să refolosească funcționalitatea sau să gestioneze o mulțime de evenimente, abonați și editori.

Acest model elimină necesitatea de a verifica în mod constant date noi, făcând periodic cereri API către un server("**polling**"), ceea ce face ca programul nostru să ruleze mai rapid.

Reduce complexitatea prin înlocuirea tuturor conexiunilor punct la punct cu o singură conexiune, care gestionează abonamentele și decide unde să livreze fiecare mesaj.

Șablonul **Pub/Sub** are și dezavantajele sale:

- Face codul mai abstract
- Face codul mai greu pentru depanare

Înainte de a utiliza un anumit model de design, asigurați-vă că sunteți conștienți de dezavantajele sale.

[/slide]

