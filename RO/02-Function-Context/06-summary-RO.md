[slide hideTitle]

# Rezumat

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/RO/js-advanced-function-context-35-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție ați învățat:

**Context funcțional** - obiectul din care a provenit codul este contextul său implicit. 

**Acesta** înseamna că depinde de **unde** și **cum** **este apelată** **funcția** care se execută.

Funcțiile **bind (leagă)**, **apply (aplică)** și **call (apelează)** pot fi folosite pentru a seta în mod explicit valoarea **acesteia**.

 - `call()` - schimbă contextul funcției la obiectul dat.

```js
functionName.call(objectToBind, additionalArguments);
```

- `apply()`- aceeași funcție ca și **call()** dar acceptă o listă de argumente, în timp ce **apply()** acceptă o matrice.

```js
console.log(praise.apply(dog,
    ['A good boy', 'My best friend']
));
```

- `bind()` - creează o **funcție nouă**. Permite obiectelor să împrumute metode de la alte obiecte fără ca noi să facem manual copii ale acelei metode.

Proprietățile **interne** ale obiectelor care vă permit să modificați modul în care se vor comporta proprietățile obiectului:
- **enumerable (enumerabil)**, **configurable (configurabil)** și **writable (modificabil)**
- **seal (sigilare)** și **freeze (înghețare)** care tratează **nealterabilitatea** obiectului


## În lecția următoare veți învăța:

- **Funcții avansate** - ce sunt funcțiile de primă clasă și cele de ordin superior

- Currying și aplicație parțială

- Expresii de funcții invocate imediat

- Încheiere

- Tratarea erorilor

[/slide]