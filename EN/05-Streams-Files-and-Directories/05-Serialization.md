# Serialization

[slide hideTitle]

# Serializing and Deserializing Objects

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/07-Streams-Files-and-Directories/EN/interactive-java-advanced-streams-files-and-directories-44-Serializations-Of-Custom-Objects-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Serialization in Java is the process of representing an object as a sequence of bytes. 

This sequence contains information about the object's type and the type of data stored in it.

The process of serializing and deserializing an object is useful when you want your application to be able to comminute with other applications and to send and receive data for processing.

**Serialization** allows us to **convert the state of an object into a byte stream**, which then can be saved into a file on the local disk or sent over the network to any other machine. 

**Deserialization** allows us to reverse the process, which means **reconverting the serialized byte stream to an object** again.

In simple words, object **serialization** is the process of **saving an object's state** to a **sequence of bytes** and **deserialization** is the process of **reconstructing an object from those bytes**.

Generally, the complete process is called **Serialization**.

[/slide]

[slide hideTitle]
# Serializing

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/07-Streams-Files-and-Directories/EN/interactive-java-advanced-streams-files-and-directories-41-Serialization-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

The **Serialization** process is **platform-independent**, an object serialized on one platform can be deserialized on a completely different platform.

In this way, two fundamentally different systems would be able to work with each other and exchange data.

```java
String output = "D:\\names.ser";

List<String> names = new ArrayList<>();
Collections.addAll(names, "Maria", "George", "Peter","Sophia");

FileOutputStream fileOutputStream = new FileOutputStream(output);
ObjectOutputStream objectOutputStream =  new ObjectOutputStream(fileOutputStream);

objectOutputStream.writeObject(names);
```
In the example above first, we create a **FileOutputStream** and placing the file location in the constructor.

It's good practice to store the serialized object in files with extension `.ser`.

Next, we wrap the FileOutputStream with an **ObjectOutputStream**.

By `writeObject()` - method, the names data structure is written to the output file.


[/slide]

[slide hideTitle]
# Deserializing

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/07-Streams-Files-and-Directories/EN/interactive-java-advanced-streams-files-and-directories-43-Deserialization-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

```java
String input = "D:\\names.ser";

FileInputStream fileInputStream = new FileInputStream(input);
ObjectInputStream objectInputStream = new ObjectInputStream(fileInputStream);
List<String> names = (List<String>) objectInputStream.readObject();
```

During the deserializing process, a serialized object is converted back into the required type depending on what is needed.

In the example above, we create a FileInputStream wrapped by an ObjectInputStream.

The `readObject()` method returns the **names** data structure that we previously stored into the file.

- Serialization of **Custom Objects**:

To serialize custom objects, they have to implement the **Serializable interface**.

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

# Problem with Solution: Serialize Custom Object

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/07-Streams-Files-and-Directories/EN/interactive-java-advanced-streams-files-and-directories-45-Serialize-custom-object-Problem-and-Solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Create a class called "**Cube**". It should have **properties** for **color**, **width**, **height**, and **depth**.
Create an instance of the class with the following values:
- Color: "green"
- Width: 15.3
- Height: 12.4
- Depth: 3.0

**Serialize** and **deserialize** the instance created. When saved to a file the object should look like the example below.

## Examples

[image assetsSrc="streams-files-directories-example(7).png" /]


[hints]
[hint]
Create a class called Cube, which implements the Serializable interface:

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
Create a new instance of the Cube class and set its properties:

```java
Cube cube = new Cube();
cube.color = "green";
cube.width = 15.3d;
cube.height = 12.4d;
cube.depth = 3d;
```
[/hint] 
[hint]
Use ObjectOutputStream to serialize the object:

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
