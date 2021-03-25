# Matrice Multidimensională

[slide hideTitle]

# Definiție

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/03-Multidimentional-Arrays/RO/interactive-java-advanced-multidimensional-arrays-7-What-Is-Multidimensional-Array-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Tablourile pe care le-ați folosit până acum au conținut o singură coloană de date.

Dar puteți configura o matrice pentru a conține mai **multe coloane**.

Acestea sunt numite **tablouri multi-dimensionale**.

De exemplu, gândiți-vă la o foaie de calcul cu rânduri și coloane.

Dacă aveți 6 rânduri și 5 coloane, foaia dvs. de calcul poate conține 30 de numere.

Ar putea arăta astfel:

[image assetsSrc="Java-Advanced-Multidimensional-Arrays-1.png" /]

[/slide]

[slide hideTitle]

# Declararea și Crearea Matricelor Multidimensionale

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/03-Multidimentional-Arrays/RO/interactive-java-advanced-multidimensional-arrays-8-Declaring-And-Creating-Array-And-Demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Două dintre cele mai utilizate **matrice multidimensionale sunt** matrice bidimensionale și tridimensionale, cunoscute sub numele de matrice `2D`  și `3D` , orice mai sus este rar.

- Crearea matricilor multidimensionale folosind cuvântul cheie `new` - și specificarea dimensiunii a cel puțin unei dimensiuni:

```java 
int[][] intMatrix = new int[3][];
```

În acest exemplu, declarăm o matrice bidimensională goală de numere întregi. Folosim `int[][]` pentru a-i spune compilatorului că dorim o matrice bidimensională.

Similar matricei unidimensionale, folosim cuvântul cheie `new` pentru a aloca memorie în heap pentru matricea noastră.

Observați că trebuie să selectăm o mărime pentru matricea noastră multidimensională și, în acest caz, linia noastră va conține trei elemente.

Implicit, această matrice va conține doar zerouri.

```java 
String[][][] stringCube = new String[5][5][5];
```

Putem crea o matrice multidimensională cu oricare dintre tipurile de date cunoscute.

Aici, creăm o matrice tridimensională de șiruri.

[/slide]


[slide hideTitle]

# Crearea și Inițializarea Matricelor Multidimensionale

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/03-Multidimentional-Arrays/RO/interactive-java-advanced-multidimensional-arrays-9-Initializing-Multi-Array-And-Demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- Crearea și **initializarea** matricii bidimensionale cu sintaxă de comenzi rapide:

```java
int[][] matrix = {
  {1, 2, 3, 4}, // row 0 values
  {5, 6, 7, 8}  // row 1 values
};
```

- **Initializarea** inteligența matricială bidimensionalăh **for-loop**

```java
int[][] matrix = new int[2][4];

int elementValue = 1;

for (int i = 0; i < 2; i++) {
    
    for (int j = 0; j < 4; j++) {
      matrix[i][j] = elementValue;
      elementValue++;
    }
}
```
[/slide]

[slide hideTitle]

# Accesarea Elementelor

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/03-Multidimentional-Arrays/RO/interactive-java-advanced-multidimensional-arrays-10-Accessing-Elements-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Elementele din **matrice bidimensionale** sunt denumite în mod obișnuit prin `x[i][j]` unde `i` este **numărul rândului** și` j` este **numărul coloanei**.

Sintaxa este:

```java
int [][] array = new int [5][5];
array[0][0]  // the first element of the matrix
```

- Obținerea valorii elementului:

```java live
int[][] matrix = {
  {1, 2, 3, 4}, // row 0 values
  {5, 6, 7, 8}  // row 1 values
};

// the third element of the first row is 7
int element = matrix[1][2]; 
System.out.println(element);

```


- Valoarea elementului de setare

```java 
int[][] matrix = {
    {1, 2, 3, 4}, // row 0 values
    {5, 6, 7, 8}  // row 1 values
};
for (int row = 0; row < matrix.length; row++) {
    for (int col = 0; col < matrix[row].length; col++) {

        // setting all elements values to 1
        matrix[row][col] = 1;
    }
}
```

[/slide]