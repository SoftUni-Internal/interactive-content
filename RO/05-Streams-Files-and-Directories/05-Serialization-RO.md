# Serializarea

[slide hideTitle]

# Serializarea și Deserializarea Obiectelor

Serializarea în Java este procesul prin care un obiect este reprezentat ca o secvență de octeți.

Această secvență conține informații despre tipul obiectului și tipul de date stocate în el.

Procesele de serializare și deserializare sunt utile dacă dorim ca aplicația noastră să poată comunica cu alte aplicații și să trimită sau să primească date care trebuie procesate.

**Serializarea** ne permite să **convertim starea unui obiect într-un flux de octeți**, care apoi poate fi salvat într-un fișier de pe discul local sau trimis prin rețea la orice altă mașină.

**Deserializarea** ne permite să inversăm procesul, ceea ce înseamnă **reconvertirea fluxului de octeți serializat într-un obiect**.

În cuvinte mai simple, **serializarea unui obiect** este procesul de **salvare a stării unui obiect** într-o **secvență de octeți**, iar **deserializarea** este procesul de **reconstituire a unui obiect din octeții** generați.

În general, procesul complet se numește **Serializare**.

[/slide]

[slide hideTitle]

# Serializare

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/07-Streams-Files-and-Directories/RO/interactive-java-advanced-streams-files-and-directories-41-Serialization-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Procesul de **Serializare** este **independent de platformă**, ceea ce înseamnă că un obiect serializat pe o platformă poate fi deserializat pe o altă platformă.

În acest mod, două sisteme fundamental diferite pot lucra împreună și pot partaja date.

```java
String output = "D:\\names.ser";

List<String> names = new ArrayList<>();
Collections.addAll(names, "Maria", "George", "Peter","Sophia");

FileOutputStream fileOutputStream = new FileOutputStream(output);
ObjectOutputStream objectOutputStream =  new ObjectOutputStream(fileOutputStream);

objectOutputStream.writeObject(names);
```
În exemplul de mai sus, creăm un **FileOutputStream** și plasăm locația fișierului în constructor.

Stocarea obiectului serializat în fișiere cu extensia `.ser` este o practică bună.

Apoi, învelim FileOutputStream cu un **ObjectOutputStream**.

Metoda `writeObject()` va realiza scrierea structurii de date **names** în fișierul de ieșire.


[/slide]

[slide hideTitle]
# Deserializare

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/07-Streams-Files-and-Directories/RO/interactive-java-advanced-streams-files-and-directories-43-Deserialization-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

```java
String input = "D:\\names.ser";

FileInputStream fileInputStream = new FileInputStream(input);
ObjectInputStream objectInputStream = new ObjectInputStream(fileInputStream);
List<String> names = (List<String>) objectInputStream.readObject();
```

În timpul procesului de deserializare, un obiect serializat este convertit înapoi în tipul dorit în funcție de necesitate.

În exemplul de mai sus, creăm un FileInputStream învelit de un ObjectInputStream.

Metoda `readObject()` returnează structura de date **names** pe care am stocat-o mai devreme în fișier.

- Serializarea **obiectelor personalizate**:

Pentru a serializa obiecte personalizate, acestea trebuie să implementeze interfața **Serializable**.

```java
class Cube implements Serializable {
  String color;
  double width;
  double height;
  double depth;
}
```

[/slide]

[slide hideTitle]

# Problemă cu Soluție: Serialize Custom Object

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/07-Streams-Files-and-Directories/RO/interactive-java-advanced-streams-files-and-directories-45-Serialize-custom-object-Problem-and-Solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Creați o clasă numită "**Cube**". Trebuie să aibă **proprietățile** **color**, **width**, **height** și **depth**. Creați o instanță a clasei cu următoarele valori:
- Color: "green"
- Width: 15.3
- Height: 12.4
- Depth: 3.0

**Serializați** și **deserializați** instanța creată. Când este salvat într-un fișier, obiectul ar trebui să arate ca în exemplul de mai jos.

## Exemple

[image assetsSrc="streams-files-directories-example(7).png" /]


[hints]
[hint]
Creați o clasă numită Cube, care implementează interfața Serializable:

```java
class Cube implements Serializable {
  String color;
  double width;
  double height;
  double depth;
        
}
```
[/hint] 
[hint]
Creați o nouă instanță a clasei Cube și setați proprietățile acesteia:

```java
Cube cube = new Cube();
cube.color = "green";
cube.width = 15.3d;
cube.height = 12.4d;
cube.depth = 3d;
```
[/hint] 
[hint]
Utilizați ObjectOutputStream pentru a serializa obiectul:

```java
try(ObjectOutputStream oos = 
  new ObjectOutputStream(
    new FileOutputStream(path)) ) {
      oos.writeObject(cube);
} catch (IOException e) {
      e.printStackTrace();
}
```
[/hint] 
[/hints] 

[/slide]
