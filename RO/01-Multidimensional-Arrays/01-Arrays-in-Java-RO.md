# Matrice în Java

[slide hideTitle]

# Ce este o Matrice

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/03-Multidimentional-Arrays/RO/interactive-java-advanced-multidimensional-arrays-4-5-Array-In-Java-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

O matrice este o **secvență de elemente** care deține un **număr fix de valori de un singur tip**.

**Lungimea** unui tablou **este stabilită atunci când tabloul este creat**.

Fiecare **element** dintr-o matrice se numește **element** și **fiecare element este accesat** prin **indexul său numeric**.

Următoarea ilustrație explică o **matrice întreagă cu 5 elemente**:

[image assetsSrc="Java-Advanced-Multidimensional-Arrays-2.png" /]

După cum se arată în ilustrația de mai sus, **numerotarea elementelor începe cu 0**, prin urmare, **primul element** poate fi accesat la **index 0** și **ultimul la index 4**.

[/slide]


[slide hideTitle]

# Lucrul cu Matricele

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/03-Multidimentional-Arrays/RO/interactive-java-advanced-multidimensional-arrays-6-Working-With-Array-In-Java-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Inițializarea unei matrice:

```java live
int[] numbers = new int[5];

for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}
```

În exemplul de mai sus inițializăm o matrice goală de numere întregi cu lungimea 5:

- `int[]`: pentru a inițializa o matrice, trebuie să selectăm un tip de date
- `numbers`: este numele variabilei
- `new int[5]`: creează o nouă instanță a unei matrici, care va conține 5 numere întregi

Când parcurgem matricea, vor fi tipărite zerouri deoarece valoarea implicită a unui număr întreg este zero.

Valorile elementelor matricei vor fi atribuite în următorul fel:

```java live
int[] numbers = new int[5];

for (int i = 0; i < numbers.length; i++) {
    numbers[i] = i + 1;
    System.out.println(numbers[i]);
}
```

Folosind o **buclă-for**, parcurgem lungimea matricii și atribuim o valoare fiecărui element, iar apoi tipărim elementul curent.

- Accesarea elementelor matrice:
  
``` java live
int[] numbers = {25, 45, 65};

int secondElement = numbers[1];

System.out.println(secondElement);
```

Folosind paranteze drepte, putem accesa un element cu un indice specific într-o matrice și să stocăm acea valoarea într-o variabilă nouă.

[/slide]
