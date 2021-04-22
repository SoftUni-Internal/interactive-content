[slide hideTitle]
# Rezumat

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/06-Reflection/RO/interactive-java-oop-advanced-reflection-and-annotations-47-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție ați învățat:

- Reflecție
     * capacitatea unui limbaj de programare de a fi propriul său meta limbaj

- Reflecția API
     * reflectând clase, constructori, metode, câmpuri

```java
// Get class by its name
Class test = Class.forName("Cat");

// Get names of a given class
String nameClass = myCatClass.getName();
String nameClass = myCatClass.getSimpleName();
```

- Modificatori de acces
  
```java
int modifiers = Cat.class.getModifiers();
Field field = Cat.class.getDeclaredField("name");
System.out.println(Modifier.isPrivate(field.getModifiers()));
```

- Adnotări

```java
@Deprecated 
public void deprecatedMethod() {
  System.out.println("This method is deprecated!");
}
```

## În lecția următoare veți învăța:

- Testarea unității
   - JUnit



[/slide]