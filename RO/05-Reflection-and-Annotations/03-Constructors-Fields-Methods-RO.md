# Constructori, Câmpuri și Metode

[slide hideTitle]

# Constructori

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/06-Reflection/RO/interactive-java-oop-advanced-reflection-and-annotations-14-15-16-constructors-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Să vedem cum să obținem obiecte constructoare.

Putem folosi **clasa constructor** care oferă următoarele metode în acest scop:

```java
Constructor[] ctors = aClass.getConstructors();

// Această metodă ne permite să obținem numai constructori publici, declarați în clasa noastră și superclasa sa.
```
Dacă dorim să obținem toți constructorii declarați, putem folosi metoda `getDeclaredConstructors():`

``` java
Constructor[] ctors = aClass.getDeclaredConstructors();
```

De asemenea, putem obține constructorul după parametrii săi:

```java
Constructor ctor = aClass.getConstructor(String.class);
```

Să instanțiem obiecte folosind Obiectul Constructor:

``` java
Constructor constructor = MyObject.class.getConstructor(String.class);
MyObject myObject = (MyObject)
        constructor.newInstance("arg1");
```

Metoda `newInstance()` ia o cantitate opțională de parametri.

Trebuie să furnizăm exact un parametru pe argument în constructorul pe care îl invocăm.

Ca și în codul de mai sus - Este un constructor care acceptă un `string`, deci ar trebui să oferim un `string`.

[/slide]

[slide hideTitle]

# Numele și Tipul Câmpurilor

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/06-Reflection/RO/interactive-java-oop-advanced-reflection-and-annotations-17-18-fields-name-and-type-fields-set-and-get-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

În mod analog modului în care "obținem" constructori, putem obține **membri ai clasei**.

Să vedem cum putem primi toate câmpurile **publice**:

``` java
Field field = aClass.getField("fieldname");
Field[] fields = aClass.getFields();
```

Putem folosi `getDeclaredFields()` pentru a obține **toate** câmpurile:

``` java
Field[] fields = aClass.getDeclaredFields();
```

Există, de asemenea, o modalitate de a obține numele și tipurile câmpurilor noastre:

``` java
String fieldName = field.getName();
Object fieldType = field.getType();
```

Să discutăm cum putem seta valoarea unui câmp prin reflecție.

``` java
Field field = targetClass.getDeclaredField(fieldName);
field.setAccessible(true); // Trebuie să schimbăm comportamentul AccessibleObject.

field.set(object, value); // Parametrul obiect trecut la metoda get și set
                          // ar trebui să fie o instanță a clasei care deține câmpul.
```

[/slide]

[slide hideTitle]

# Metode

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/06-Reflection/RO/interactive-java-oop-advanced-reflection-and-annotations-19-20-methods-methods-invoke-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Dacă avem o `clasă` numită Dog cu aceste metode înăuntru:

```java
public class Dog extends Mammal {
    public void makeSound() {
        System.out.println("Woof woof!");
    }
    public void eat() {
        System.out.println("Eating meat");
    }
    public void walk() {
        System.out.println("Walking...");
    }
}

```

Putem **obține** aceste metode cu următoarea sintaxă:

```java
public class Main {
    public static void main(String[] args) throws ClassNotFoundException {
    Method[] methods = Dog.class.getMethods();
    for (Method method : methods) {
       System.out.println("method " + method.getName());
    }
```

**Ieșirea** va fi:

```
method walk
method makeSound
method eat
method wait
method wait
method wait
method equals
method toString
method hashCode
method getClass
method notify
method notifyAll
```

Pe lângă **metodele personalizate** pe care le-am definit (`walk`, `makeSound`, `eat`) avem și metode implicite (`wait`, `equals`, `toString`, `hashCode`, etc).

De asemenea, putem obține metode cu parametrii și tipul de returnare și le putem invoca.

Putem obține toate metodele publice astfel:

```java
Method[] methods = aClass.getMethods();
Method method = aClass.getMethod("doSomething", String.class);
```

## Obținerea de metode fără parametri

De asemenea, putem obține metode fără parametri:

```java 
Method method = aClass.getMethod("doSomething", null); 
//"nul" este setat atunci când dorim o metodă fără parametri.
```

## Obținerea parametrilor unei metode și tipul de returnare

După ce obținem o metodă dată, putem obține parametrii și tipul de returnare:

```java
Class[] paramTypes = method.getParameterTypes();
Class returnType = method.getReturnType();
```

## Obțineți metode cu parametri

```java
Method method = myObject.class.getMethod("methodName", String.class);
Object returnValue = method.invoke(null, "arg1"); 
// Folosim nul pentru metodele statice
```

[/slide]

[slide hideTitle]
# Problemă cu Soluție: Getters and Setters

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/06-Reflection/RO/Getters-and-Setters-problem-and-solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Getters and Setters" taskId="Java-OOP-Advanced-Reflection-Getters-And-Setters" executionType="tests-execution" executionStrategy="java-zip-file-code" requiresInput]

[task-description]
# Descriere


Utilizați reflecția pentru a obține toate metodele **Reflection**.

Apoi pregătiți un algoritm care va recunoaște care sunt metodele **getters** și **seters**.

Sortați fiecare colecție **alfabetic** după numele metodelor.

Imprimați pe consolă fiecare **getter** pe o nouă linie în format:
- „\{**nume**\} **va returna un câmp al clasei** \{**Tip de returnare**\}”

Apoi tipăriți toate setters în format:
- „\{**nume**\} **va seta un câmp al clasei** \{**Tip parametru**\}”


**Fișierul „Reflection.java” nu trebuie modificat în proces.**

[/task-description]
[code-upload allowedMemory="30" /]
[tests]
[test]
[input]
```
Blank Test
```
[/input]
[output]
```
getEmail will return a field of the class java.lang.String
getName will return a field of the class java.lang.String
getWebAddress will return a field of the class java.lang.String
getZip will return a field of the class int
setEmail will set a field of the class java.lang.String
setName will set a field of the class java.lang.String
setWebAddress will set a field of the class java.lang.String
setZip will set a field of the class int
```
[/output]
[/test]
[/tests]
[/code-task]
[/slide]

