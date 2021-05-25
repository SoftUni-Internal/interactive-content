[slide hideTitle]

# Destructurarea

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/05.JS-Advanced-Object-Composition/RO/JS-Advanced-Object-Composition-8-9-destructuring-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Sintaxa de alocare a destructurării este o expresie JavaScript care face posibilă despachetarea valorilor din tablouri sau proprietăți din obiecte în variabile distincte.

Să aruncăm o privire la câteva exemple:

```js live
const department = {
    name: 'Engineering',
    data: {
        employeesCount: 20
    }
}
const {
    data
} = department;
console.log(data);
data.employeesCount = 30;
console.log(department);
```

În acest exemplu, facem referire direct la obiectul "**data**" din interiorul obiectului "**department**", atribuindu-l o noua variabila "**data**" folosind această linie de cod: `const { data } = department`.

Puteți vedea că noul obiect "**data**" este o referință la obiectul "**data**" din interiorul obiectului "**department**".

Putem dovedi acest lucru prin schimbarea obiectului "**employeesCount**" din obiectul nou creat "**data**" la 30.

În cele din urmă imprimând obiectul "**department**" putem vedea că și "**employeesCount**" s-a schimbat la 30.

```js live
const classroom = [{
    key: 'StudentOne'
}, {
    key: 'StudentTwo'
}, {
    key: 'StudentThree'
}]
const [firstObj, secondObj, thirdObj] = classroom;
console.log(firstObj);
console.log(secondObj);
console.log(thirdObj);
firstObj.key = 'John Smith';
console.log(firstObj);
console.log(classroom);
```

În acest exemplu, avem un obiect "**classroom**", care e un vector de obiecte.


După destructurare:

- Obiectul de la indexul 0 va fi asignat lui "**firstObj**"

- Obiectul de la indexul 1 va fi asignat lui "**secondObj**" 

- Obiectul de la indexul 2 va fi asignat lui "**thirdObj**"

Amintiți-vă faptul că "**firstObj**", "**secondObj**" și "**thirdObj**" referențiază obiecte din interiorul vectorului "**classroom**". 

Acum, să schimbăm valoarea lui `firstObj.key` în "John Smith" și să printăm valoarea lui "**classroom**".

Putem observa că schimbările au avut loc și acolo, de asemenea.

[/slide]

[slide hideTitle]

# Destructurarea Imbricată

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/05.JS-Advanced-Object-Composition/RO/JS-Advanced-Object-Composition-10-nested-destructuring-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Acum să aruncăm o privire asupra unor destructurări imbricate.

Folosiți această expresie: `const {data: {director}} = department` pentru a crea o nouă variabilă "**director**" prin destructurarea obiectului "**department**".

La fel ca în exemplele de mai sus, noul obiect "**director**" face referire la obiectul "**director**" în interiorul obiectlui "**data**".

```js live
const department = {
    name: 'Engineering',
    data: {
        director: {
            name: 'John',
            position: 'Engineering Director'
        },
        employees: [],
        company: 'Quick Build'
    }
}
const {
    data: {
        director
    }
} = department;
console.log(director);
director.name = 'Peter';
console.log(department);
```

[/slide]

[slide hideTitle]

# Destructurarea Matricilor Imbricate

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/05.JS-Advanced-Object-Composition/RO/JS-Advanced-Object-Composition-11-destructuring-nested-arrays-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

La destructurarea matricilor imbricate este important să cunoașteți poziția la care o căutați.

De asemenea, trebuie să furnizați o variabilă de referință sau un substituent de virgulă pentru fiecare element în sus și până la cel pe care îl căutați.

```js live
const departments = [
    ['Engineering', ['secretary', 'director', 'worker']],
    ['Accounting', ['director', 'accountant']]
];
const [
    [name, positions]
] = departments;
console.log(name);
console.log(positions);
```

În acest exemplu, noile variabile "**name**" și "**positions**" corespund datelor aflate la indexul 0 în obiectul "**departments**".

Parantezele drepte se folosesc la momentul destructurării vectorilor.

Încercați să extrageți datele de la indexul 1 și să le stocați în noi variabile.

Apoi, printați rezultatul.

[/slide]

[slide hideTitle]
# Obiecte și Matrice de Destructurare

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Advanced/05.JS-Advanced-Object-Composition/RO/JS-Advanced-Object-Composition-12-objects-and-arrays-destructuring-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Destructurarea unei matrice de obiecte:

```js live
const employees = [{
    name: 'John',
    position: 'worker'
}, {
    name: 'Jane',
    position: 'secretary'
}];
const [{
    name
}] = employees;
console.log(name);
```

Creați o nouă variabilă "**name**" folosind expresia `const [{name}] = employees`.

În acest caz, "**name**" va fi egal cu "John". 

Folosiți această expresie: `const [{}, {name}] = employees` pentru a atribui "Jane" variabila "**name**" și imprimaț rezultatul.

Destructurarea unui obiect care conține o matrice sau mai multe matrice.

Încercați să imprimați singur restul numelor.

```js live
const company = {
    employees: ['John', 'Jane', 'Sam', 'Suzanne'],
    name: 'Quick Build',
}
const {
    employees: [employee]
} = company;
console.log(employee);
```

[/slide]
