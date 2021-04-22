# Polymorphism

[slide hideTitle]
# Ce este Polimorfismul?

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/04-Polymorphism/RO/interactive-java-oop-advanced-polymorphism-3-4-What-is-polymorphism-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Polimorfismul este unul dintre cei patru piloni de bază OOP în limbajele **orientate pe obiecte**.

Ne permite să efectuăm o singură acțiune în multe moduri diferite, oferindu-ne șansa de a schimba comportamentul clasei în timpul rulării.

Se bazează pe conceptul că obiectele de diferite tipuri pot fi accesate prin aceeași interfață sau clasă abstractă.

Fiecare tip va furniza propria sa implementare a comportamentului.

[/slide]

[slide hideTitle]

# Superclass

De exemplu dacă spunem că avem o **superclass** numită `Mammal` care are o metodă numită `makeSound()`. 

**Subclasele** clasei noastre Mammal pot fi **Cats**, **Dogs**, **Pigs**, **Horses** - Și, de asemenea, au implementarea lor individuală pentru a scoate un sunet.

Să vedem asta în cod: 

``` java
class Mammal {
  public void makeSound() {
    System.out.println("The animal makes a sound");
  }
}
```

``` java
class Cat extends Mammal {
  public void makeSound() {
    System.out.println("Meow Meow...");
  }
}
```

``` java
class Dog extends Mammal {
  public void makeSound() {
    System.out.println("Woof Woof!");
  }
}
```

Acum putem merge în clasa `Main` să creăm obiectele `cat` și `dog` și să apelăm metoda `makeSound()` pentru amândouă.


``` java
class Main {
  public static void main(String[] args) {
    Mammal animal = new Mammal();  
    Mammal myCat = new Cat(); 
    Mammal myDog = new Dog(); 
    animal.makeSound();
    myDog.makeSound();
    myCat.makeSound();
  }
}
```

**Datele de ieșire** vor fi:

```
The animal makes a sound
Woof woof!
Meow Meow...
```
[/slide]

[slide hideTitle]

# Operatorul InstanceOf

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/04-Polymorphism/RO/interactive-java-oop-advanced-polymorphism-7-Keyword-Instanceof-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Putem folosi operatorul `instanceOf` pentru a verifica dacă un **obiect** este o instanță a unei **clase** specifice sau nu.

Să vedem un exemplu diferit:

- Mai întâi să declarăm un Map

```java
 Map<Object, Object> map = new HashMap();
```

- Apoi vom crea un `boolean` pentru a evalua rezultatul

```java
boolean result = map instanceof Object;
```

- La final putem afișa rezultatul

```java
System.out.println("Map is instance of Object: " + result);
```

```java live
Map<Object, Object> map = new HashMap();
boolean result = map instanceof Object;
System.out.println("Map is instance of Object: " + result);
```

Din moment ce un `HashMap` este o subclasă a `Object` expresia `map instanceOf Object` evaluează `true`.

Similar putem extinde cerința noastră precedentă și să verificăm dacă obiectele `pet` sunt `instanceOf` ale claselor noastre:

``` java
class Main {
  public static void main(String[] args) {
    Mammal animal = new Mammal();
    Mammal myCat = new Cat();
    Mammal myDog = new Dog();
        
    boolean result = myDog instanceof Mammal;
    boolean result2 = myDog instanceof Cat;
    boolean result3 = myDog instanceof Dog;

    System.out.println(result);
    System.out.println(result2);
    System.out.println(result3);
  }
}
```

**Datele de ieșire** vor fi:

``` 
true
false
true
```

Operatorul `instanceOf` determină dacă există o **o relație** între clase (Bazate pe **moștenire** sau **implementarea interfaței**).

[/slide]


[slide hideTitle]

# Tipuri de Polimorfism

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/04-Polymorphism/RO/interactive-java-oop-advanced-polymorphism-8-9-Types-of-polymorphism-compile-time-polymorphism-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Există **două** tipuri ded **polimorfism** în Java:

- Polimorfism **Dinamic** 

- Polimorfism **Static** 


## Polimorfismul Dinamic

**Polimorfismul dinamic** este expus la timpul de rulare.

Prin urmare, **comportamentul** **metodei** este decis la **rulare**.

**Polimorfismul dinamic** este utilizat folosind **metoda de suprascriere**.

Putem declara o metodă în **subclasa noastră**, chiar dacă aceeași metodă este deja prezentă în **clasa părinte**. 

Aceasta se numește **suprascrierea metodei**.

În acest fel, o **clasă copil** își poate deține propria **implementare / proprietate** diferită a unei metode care este deja definită de **clasa părinte**.

**Exemplu**:

``` java
class Animal {
  public void eat() {
    System.out.println("Animals can eat.");
  }
}
```

``` java
class Dog extends Animal {
   public void eat() {
      System.out.println("Dogs can eat meat.");
   }
}
```
Acum clasa noastră `Main`:

``` java
public class Main {
   public static void main(String args[]) {
      Animal animal = new Animal(); // We declare our Animal reference and object
      Animal dog = new Dog();
      animal.eat(); 
      dog.eat();
   }
}
```

**Datele de ieșire** vor fi: 

```
Animals can eat.
Dogs can eat meat.
```
## Polimorfismul Static

Unul dintre modurile în care Java acceptă **polimorfismul static** (denumit și **polimorfism în timp de compilare**) este prin **supraîncărcarea metodei**.

**Supraîncărcarea metodelor** ne permite să avem două sau mai multe **metode** cu același nume, dar o **semnătură diferită**.

Semnătura metodei este siginată de:
- **Numele metodei**
- **Parametrii săi**

Putem supraîncărca o metodă modificând tipurile de parametri, numărul de parametri sau ordinea acestora.

Nu putem avea două metode cu același nume și aceiași parametri, **numele parametrilor nu contează**.

**Exemplu**:

``` java
class Calculation {  
  void sum(int a,int b) {
  System.out.println(a+b);
  }  
  
  void sum(int a,int b,int c){
  System.out.println(a+b+c);
  }  

  public static void main(String args[]) {  
    Calculation calculator = new Calculation();  
    obj.sum(5,10,15);  // 30
    obj.sum(20,40);   // 60
  }  
}  
```


[/slide]

[slide hideTitle]
# Problemă cu Soluție: Math Operation

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/04-Polymorphism/RO/interactive_java_oop_advanced_polymorphism_10_problem_and_solution-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Math Operation" timeLimit=5000 taskId="Java-OOP-Advanced-Polymorphism-Math-Operation" executionType="tests-execution" executionStrategy="java-project-tests"] 
[code-upload allowedMemory="30" /]

[task-description]
# Descriere
Creați o clasă **MathOperation**, care are o metodă `add()`.

`add()` poate fi invocată folosind **două**, **trei** sau **patru numere întregi**.

**Codul tău ar trebui să funcționeze în următorul context:**

```java
public static void main(String[] args) throws IOException {
    MathOperation math = new MathOperation();
    System.out.println(math.add(2, 2));
    System.out.println(math.add(3, 3, 3));
    System.out.println(math.add(4, 4, 4, 4));
}
```


# Exemplu
| **Date de ieșire** |
| --- |
| 4 |
| 9 |
| 16 |


[/task-description]
[tests]
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

public class T01TestAllClassesExists \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";

    private static final String\[\] classNames = new String\[\]\{
            "MathOperation"
    \};

    @Test
    public void test() \{
        assertExistingClasses(classNames);
    \}

    private void assertExistingClasses(String\[\] classNames) \{
        for (String className : classNames) \{
            assertClassExists(className);
        \}
    \}

    private void assertClassExists(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
    \}
\}
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
import org.junit.Assert;
import org.junit.Test;

import java.lang.reflect.Constructor;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;

public class T02TestAddMethod \{
    private static final String CLASS_NOT_PRESENT_ERROR_MESSAGE = "Class '%s' not present";
    private static final String METHOD_RETURN_TYPE_ERROR = "Method '%s' in class '%s' should have return type '%s'";
    private static final String TEST_METHOD_NAME = "add";
    private static final String CLASS_NAME = "MathOperation";



    private static final String\[\] methodNames = new String\[\]\{
            TEST_METHOD_NAME
    \};

    private static final HashMap\<String, Class\> methodReturnTypes = new HashMap\<String, Class\>() \{\{
        put(TEST_METHOD_NAME, int.class);
    \}\};

    private static final HashMap\<String, Class\[\]\> methodParameters = new HashMap\<String, Class\[\]\>() \{\{
        put(TEST_METHOD_NAME, new Class\[\]\{int.class,int.class\});
    \}\};

    private Object clazz;

    @Test
    public void test() throws NoSuchMethodException, IllegalAccessException, InvocationTargetException, InstantiationException, NoSuchFieldException \{
        assertAddMethodWorksCorrect(methodNames);
    \}

    private void assertAddMethodWorksCorrect(String\[\] methodNames) throws NoSuchMethodException, InstantiationException, IllegalAccessException, InvocationTargetException, NoSuchFieldException \{
        Class cl = getClass(CLASS_NAME);
        Constructor constructor = cl.getConstructor();
        constructor.setAccessible(true);
        clazz = constructor.newInstance();

        Assert.assertEquals(String.format(METHOD_RETURN_TYPE_ERROR,
                    "add",
                    CLASS_NAME,
                    methodReturnTypes.get("add")), int.class, methodReturnTypes.get("add"));

            Method first =cl.getDeclaredMethod("add",int.class,int.class);
            Method second =cl.getDeclaredMethod("add",int.class,int.class,int.class);
            Method third =cl.getDeclaredMethod("add",int.class,int.class,int.class,int.class);
            first.setAccessible(true);


                int result = (int)first.invoke(clazz, 2, 2);
                int result1 = (int)second.invoke(clazz, 3,3,3);
                int result2 = (int)third.invoke(clazz, 4,4,4,4);

            Assert.assertTrue("add not implemented correctly",result==4);
            Assert.assertTrue("add not implemented correctly",result1==9);
            Assert.assertTrue("add not implemented correctly",result2==16);



    \}


    private Class getClass(String className) \{
        Assert.assertTrue(String.format(CLASS_NOT_PRESENT_ERROR_MESSAGE, className),
                Classes.allClasses.containsKey(className));
        return Classes.allClasses.get(className);
    \}
\}
[/input]
[output]
Test Passed!
[/output]
[/test]
[/tests]
[/code-task]
[/slide]


[slide hideTitle]

# Principii ale Metodelor Suprascrise și Supraîncărcate

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/04-Polymorphism/RO/interactive-java-oop-advanced-polymorphism-12-Rules-for-overloading-method-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## Metode suprascrise

- Efectuat în interiorul **subclaselor**

- Toți parametrii trebuie să fie aceiași cu parametrii din **metoda părinte**

- O metodă suprascrisă trebuie să aibă **același tip de returnare**

- Nu putem înlocui metodele **private**, **statice** sau **finale**

- Metodele de suprascriere nu pot genera o **excepție bifată** care este mai mare în ierarhie decât una gednerată de metoda suprascrisă

## Metode de supraîncărcare

- Putem **supraîncărca** metodele atât în ​​**aceeași clasă**, cât și în **subclasa lor**

- Putem **supraîncărca constructori**

- Metodele supraîncărcate pot avea **diferite tipuri de returnare**

- Metodele supraîncărcate trebuie să aibă o **listă de argumente diferite**

- Metodele supraîncărcate ar trebui să facă parte din aceeași clasă, cu **același nume**, dar **parametri diferiți**

[/slide]
