[slide hideTitle]
# Rezumat

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/02-Inheritance/EN/Java-OOP-Advanced-Inheritance-38-summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## În această lecție ați învățat:

- Moștenirea este un instrument puternic care simplifică **reutilizarea codului**

```java
class Person { … }

class Student extends Person { … }
class Employee extends Person { … }
```

- O **Subclasă moștenește** membri dintr-o **Superclasă**

```java
class Person { … } // Base Class/Parent Class

class Student extends Person { … }  // Subclasă/Copil
class Employee extends Person { … } // Subclasă/Copil
```

- O subclasă poate **suprascrie** metodele

```java
public class Person {  
  public void sleep() { 
	System.out.println("Person sleeping"); } 
}

public class Student extends Person {
  @Override 
  public void sleep(){
	System.out.println("Student sleeping"); }
}
```
Tipuri de reutilizare a codului:

- CLase cu **același rol**

- Clase cu relații **IS-A** sau **IS-A-SUBSTITUTE**

- **Compunere** și **Delegare**


## În lecția următoare veți învăța:


- Moștenirea și interfețe
  * definiție
  * cazuri de utilizare
  
- Abstracția ca principiu OOP
- Ce sunt clasele abstracte
- Interfețe vs. clase abstracte

[/slide]
