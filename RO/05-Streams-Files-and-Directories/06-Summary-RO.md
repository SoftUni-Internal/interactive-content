[slide hideTitle]
# Rezumat

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/07-Streams-Files-and-Directories/RO/interactive-java-advanced-streams-files-and-directories-48-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție ați învățat:

- Fluxurile/stream-urile sunt utilizate pentru transferarea datelor

- Două tipuri principale de fluxuri


     - Fluxuri de intrare

    ```java
    String path = "C:\\input.txt";

    FileInputStream fileStream = 
			new FileInputStream(path);

    int oneByte = fileStream.read();
    while (oneByte >= 0) {
    System.out.print(oneByte);
    oneByte = fileStream.read();
    }
    ```


     - Fluxuri de ieșire


    ```java
    try (FileReader inputStream = new FileReader(input);
             FileWriter outputStream = new FileWriter(output)) {

     int character;
     while ((character = inputStream.read()) != -1) {
         outputStream.write(character);
     }
    } catch (FileNotFoundException ex) {
    System.out.println("Input file not found!");
    } catch (IOException e) {
    e.printStackTrace();
    }
     ```


- Fluxurile de bufere sprijina performanța
- Fluxurile pot fi legate între ele


    ```java
    String path = "D:\\input.txt";

    Scanner reader = new Scanner(new FileInputStream(path));
    ```

    
- Serializarea este un proces de convertire a unui obiect într-o secvență de bytes, iar deserializarea este procesul opus

- Serializarea și deserializarea fac posibil pentru un sistem să comunice cu altul și să facă schimb de date indiferent de platformă sau de limbajul de programare

[/slide]
