# Serializarea

[slide hideTitle]

# Serializarea si Deserializarea Obiectelor

În Java, creăm mai multe obiecte care au o perioadă limitată de viață, și fiecare obiect va disparea cu siguranță când se termină executarea programului.

Dar uneori, s-ar putea să dorim  **să reutilizăm** un obiect între mai multe programe sau s-ar putea să dorim  **să transferăm** un obiect către o altă mașină prin rețea.

**Serializarea** ne permite să **convertim starea unui obiect într-un flux/stream de octeți**, care apoi poate fi salvat într-un fișier de pe discul local sau trimis prin rețea la orice altă mașină.

**Deserializarea** ne permite să inversăm procesul, ceea ce înseamnă **reconvertirea a fluxului/stream-ului de octeți serializați într-un obiect**.

În cuvinte mai simple,  **serializarea obiectului** este procesul de **salvare a stării unui obiect** într-o **secvență de octeți** și **deserializarea** este procesul de **reconstituire a unui obiect din acești octeți**.

În general, procesul complet se numește **Serializarea**.

[/slide]

[slide hideTitle]

# Serializarea

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/07-Streams-Files-and-Directories/RO/interactive-java-advanced-streams-files-and-directories-41-Serialization-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Procesul de **Serializarea** este pe **platforma independenta**, un obiect serializat pe o platformă poate fi deserializat pe o altă platformă.

```java
String output = "D:\\names.ser";

List<String> names = new ArrayList<>();
Collections.addAll(names, "Maria", "George", "Peter","Sophia");

FileOutputStream fileOutputStream = new FileOutputStream(output);
ObjectOutputStream objectOutputStream =  new ObjectOutputStream(fileOutputStream);

objectOutputStream.writeObject(names);
```
În primul exemplu de mai sus, creăm un **FileOutputStream** și plasăm locația fișierului în constructorul.

Este o bună practică să stocați obiectul serializat în fișiere cu extensia `.ser`.

Apoi, ambalam the FileOutputStream cu un **ObjectOutputStream**.

Prin metoda `writeObject()` -  structura datelor de nume este scrisă în fișierul de ieșire.


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

De pe alta parte, deserializare face exact opusul.

Ea citește fișiere, conținutul al cărora  sunt obiecte serializate și le încarcă înapoi în memoria programului nostru Java.

În exemplul de mai sus, creăm un FileInputStream ambalat de un ObjectInputStream.

Metoda `readObject()` - returnează înapoi structura datelor de **nume** pe care am stocat-o mai devreme în fișierul.

- Serializarea **Obiectelor personalizate**:

Pentru a serializa obiecte personalizate, acestea trebuie să implementeze interfața serializabilă.

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

Creați o clasă numită "**Cube**". Ar trebui să aibă următoarele **proprietăți** pentru **culoare**, **lățime**, **înălțime** și **adâncime**.
Creați o instanță a clasei cu următoarele valori:
- Color: "green"
- Width: 15.3
- Height: 12.4
- Depth: 3.0

**Serializați** și **deserilizați** instanța creată. Când este salvat într-un fișier, obiectul ar trebui să arate ca exemplul de mai jos.

## Exemple

[image assetsSrc="streams-files-directories-example(7).png" /]


## Sugestii

-	Creați o clasă numită Cube, care ar trebui să implementeze interfața serializabilă:

```java
class Cube implements Serializable {
      String color;
      double width;
      double height;
      double depth;
        
}
```

- Creați o nouă instanță a clasei Cube și setați proprietățile acesteia:

```java
Cube cube = new Cube();
cube.color = "green";
cube.width = 15.3d;
cube.height = 12.4d;
cube.depth = 3d;

```

- Utilizați ObjectOutputStream pentru a serializa obiectul

```java
try(ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(path)) ) {
        oos.writeObject(cube);
} catch (IOException e) {
  e.printStackTrace();
}
```

[/slide]
