
[slide hideTitle]
# Rezumat

[video src="https://videos.softuni.org/hls/Java/Java-Fundamentals-Methods-And-Arrays/02.Java-Fundamentals-Arrays/RO/02-Java-Fundamentals-Arrays-24-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție ați învățat:
- Matricele conțin o secvență de elemente
- Crearea (alocarea) unei matrice

```java
int[] numbers = { 1, 1, 2, 4, 5 };
```
- Accesarea elementelor matricei după index

```java
numbers[4] = numbers[2] + numbers[3];
System.out.println(numbers[4]);
```

- Citirea matricelor de pe consolă

```java
for (int i = 0; i < n; i++) {
  arr[i] = Integer.parseInt(sc.nextLine()); //read array elements
}
```
- Imprimarea elementelor matricei 

```java
int[] numbers = { 1, 2, 3, 4, 5 };
for (int number : numbers) {
   System.out.println(number + " ");
}
```

- Buclă For-each 

```Java
int[] numbers = { 1, 2, 3, 4, 5 };
for (int number : numbers) {
   System.out.println(number + " ");
}
```

## În lecția următoare, veți învăța:
- Ce este o **metodă**
- Denumirea și cele mai bune practici
- Declararea și **invocarea metodelor**
   - metode de tip Void și Return
- Metode cu parametri
- **Tipuri de valoare** vs. **Tipuri de referință**
- Metode de **supraîncărcare**
- Fluxul de execuție a programului
[/slide]


