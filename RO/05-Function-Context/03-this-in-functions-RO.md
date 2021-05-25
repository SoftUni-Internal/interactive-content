# "this" in Functions

[slide hideTitle]

# "this" With Inner Functions

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/RO/js-advanced-function-context-13-14-this-with-inner-functions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Inner functions** sunt funcții care sunt imbricate în interiorul altor funcții.

Încercarea de a apela `this` dintr-o funcție imbricată nu funcționează așa cum era de așteptat:

```js live
let socialMediaUser = {
    name: 'John Doe',
    pageLikes: ['Cute Cats Page', 'Web Programming Gurus', 'SoftUni International'],
    displayLikes: function() {
        this.pageLikes.forEach(function(page) {
            console.log(`User: ${this.name} likes: ${page}`);
        });
    }
}
socialMediaUser.displayLikes();
```

Apelarea `this.name` din interiorul funcției imbricate returnează **undefined**. 

Acest lucru se datorează faptului că `this` se referă la obiectul global în contextul funcțiilor imbricate.

Dacă doriți să utilizați `this` în situații similare, puteți face acest lucru cu **arrow functions**, care vor arata în acest mod.

[/slide]

[slide hideTitle]
# "this" With Arrow Functions

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/03.JS-Advanced-Function-Context/RO/js-advanced-function-context-15-this-with-arrow-functions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Cu **arrow functions** (`=>`), `this` păstrează valoarea **contextului lexical care o înconjoară**

Cu alte cuvinte, ele moștenesc referința `this` de la obiectul parent sau domeniul de aplicare în care sunt utilizate

```js live
let socialMediaUser = {
    name: 'John Doe',
    pageLikes: ['Cute Cats Page', 'Web Programming Gurus', 'SoftUni International'],
    displayLikes: function() {
        this.pageLikes.forEach((page) => {
            console.log(`User: ${this.name} likes: ${page}`);
        });
    }
}
socialMediaUser.displayLikes();
```

De această dată rezultatul este corect și numele utilizatorului nu mai ester **undefined**. 

Diferența dintre exemplul anterior și cel curent este că acum am folosit o **arrow function**.

Această funcție a moștenit contextul din obiectul atașat **socialMediaUser** și așa avem: 

[/slide]