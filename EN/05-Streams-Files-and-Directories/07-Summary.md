[slide hideTitle]
# Summary

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/07-Streams-Files-and-Directories/EN/interactive-java-advanced-streams-files-and-directories-48-Summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## In this lesson you learned:

- Streams are used for reading, writing and transfering data

- There are two main types of streams:
<br/><br/>
    - Input Streams
    
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
<br/><br/>
    - Output Streams
<br/><br/>
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
<br/><br/>
- Buffered streams boost performance
- Streams can be chained together by passing an instance of one stream to another:
<br/><br/>
    ```java
    String path = "D:\\input.txt";

    Scanner reader = new Scanner(new FileInputStream(path));
    ```
<br/><br/>
- Serialization is the process of converting an object to a sequence of bytes, and deserialization is the opposite process

- Serialization and deserialization make it possible for one system to communicate with another system and exchange data regardless of the platform or programming language

[/slide]
