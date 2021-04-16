[slide hideTitle]

# Modificatori de acces

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/06-Reflection/EN/interactive-java-oop-advanced-reflection-and-annotations-24-25-access-modifiers-demo-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Pentru a obține modificatorii de clasă, folosim metoda `getModifiers()`.

```java
int modifiers = aClass.getModifiers();
```
Metoda `getModifiers()` poate fi apelată la **constructori**, **câmpuri** și **metode**.

Putem verifica modificatorii cu următoarele metode:

Dacă setăm o variabilă `name` în clasa noastră `Dog`:

``` java
private String name;
```

Putem folosi sintaxă

```java
int modifiers = Dog.class.getModifiers();
Field field = Dog.class.getDeclaredField("name");
System.out.println(Modifier.isPrivate(field.getModifiers()));
```

Datele de **ieșire** vor fi:

```
true
```
De asemenea, putem **verifica** dacă modificatorii sunt **protejați, publici sau statici** cu următoarele **metode**:

- `Modifier.isProtected(modifiers)`

- `Modifier.isPublic(modifiers)`

- `Modifier.isStatic(modifiers)`



[/slide]

[slide hideTitle]

# Matrice

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/06-Reflection/EN/interactive-java-oop-advanced-reflection-and-annotations-26-arrays-demo-NEW-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Să vedem cum putem crea **Matrice** prin Reflecție:

Putem folosi metoda `Array.newInstance()`.

Să vedem o demonstrație rapidă în clasa noastră principală:


``` java 
import java.lang.reflect.Array;

public class Main {
    public static void main(String[] args) {

        int arr[] = (int[])Array.newInstance(int.class, 5);
        // A new instance is created using the Array.newInstance method.
        
        Array.set(arr, 0, 2); 
        // We set the values of the array with the Array.set() method.
        Array.set(arr, 2, 2);
        Array.set(arr, 1, 9);
        Array.set(arr, 2, 3);
        Array.set(arr, 4, 7);

        System.out.print("The array elements are: ");

        for(int i: arr) {
            System.out.print(i + " ");
        }
    }
}

```

Datele de **ieșire** vor fi:

```
Elementele matricei: 2 9 3 0 7
```


[/slide]

[slide hideTitle]
# Problemă cu soluție: High-Quality Mistakes

[code-task title="High Quality Mistakes" taskId="Java-OOP-Advanced-Reflection-High-Quality-Mistakes" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[code-upload allowedMemory="30" /]
[task-description]

# Descriere

Sunteți deja un expert în scrierea unui  **cod de înaltă calitate**, deci știți ce fel de **modificatori de acces** trebuie să fie setați membrilor unei clase.

Trebuie să verificați codul în clasa Reflection.

Verificați toate **câmpurile și modificatorii de acces pentru metode**.


Sortați fiecare categorie de membri **alfabetic**.

Imprimați toate greșelile pe consolă în următorul **format**:

- Câmpuri:

"\{**fieldName**\} **must be private!**"

- Getters:

"\{**methodName**\} **must be public!**"

- Setters:

"\{**methodName**\} **must be private!**"


[/task-description]
[tests]
[test]
[input]
Blank Test
[/input]
[output]
email must be private!
name must be private!
webAddress must be private!
getWebAddress must be public!
getZip must be public!
setEmail must be private!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

