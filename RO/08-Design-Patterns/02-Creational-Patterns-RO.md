# Șabloane Creaționale

[slide hideTitle]

# Scopuri

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/09-Design-Pattern/RO/Java-OOP-Advanced-Design-Patterns-12-13-creational-patterns-purposes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Șabloanele creaționale sunt **modele creaționale de proiectare a obiectelor**.

Folosim aceste șabloane atunci când trebuie să decidem cum să creăm un obiect al unei clase.

Acestea cuprind **două idei principale**:

- **Încapsularea** de cunoștințe despre clasele pe care le folosește sistemul

- **Ascunderea** modului de creare a instanțelor acestor clase

[/slide]

[slide hideTitle]

# Șablonul Singleton

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/09-Design-Pattern/RO/Java-OOP-Advanced-Design-Patterns-14-15-singleton-pattern-example-and-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Șablonul singleton este unul dintre cele mai utilizate șabloane de proiectare creaționale.

Conceptul său principal este clasa singleton - o clasă care are un singur obiect la un moment dat.

Diferența dintre o clasă normală și o clasă singleton este că folosim un constructor pentru a inițializa clasa normală, în timp ce, pentru o clasă singleton, folosim metoda `getInstance()` .

## Exemplu

Mai întâi, să creăm o clasă singleton:

``` java
public class Singleton {

    // În primul rând, creăm un obiect Singleton
    private static Singleton instance = new Singleton();

    // Apoi, facem constructorul privat
    // În acest fel, clasa nu poate fi instanțiată
    private Singleton(){}

    // Cu metoda getInstance () obținem singurul obiect disponibil
    public static Singleton getInstance() {
        return instance;
    }

    public void printMessage() {
        System.out.println("Hello, I am a singleton class!");
    }
}
```

Să vedem ce se întâmplă în clasa `Main`:

``` java
public class Main {
    public static void main(String[] args) {

    	// Încercarea de a crea un obiect singleton prin intermediul constructorului duce la o eroare:
	// Compile Time Error: constructorul SingleObject () nu este vizibil
	// Singleton object = new Singleton();

        // Obțineți singurul obiect disponibil
        Singleton object = Singleton.getInstance();

        // Imprimați mesajul
        object.printMessage();
    }
}
```

**Ieșirea** va fi:

```
Bună ziua, sunt o clasă singleton!
```

În acest fel, clasa noastră Singleton oferă o metodă pentru a obține instanța **statică** în **lumea exterioară**.


[/slide]

[slide hideTitle]

# Șablon de Prototip

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/09-Design-Pattern/RO/Java-OOP-Advanced-Design-Patterns-16-17-18-prototype-pattern-demo-new-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**șablonul prototip** ne permite să copiem instanța clasei și să creăm un obiect nou din ea.

Această metodă de creare a obiectului ne permite să ascundem complexitatea realizării de noi instanțe de la client.

Obiectul copiat acționează ca un **prototip** și conține toate informațiile despre **obiectul real**.

În loc să folosim cuvântul cheie `new`, putem folosi metoda `clone()`.

Putem adăuga sau elimina obiecte în timpul rulării folosind modelul prototip.

[image assetsSrc = "Design-Patterns.png" /]

Să aruncăm o privire la acest **exemplu**:

``` java
public abstract class Prototype {
    private String id;
    
    // Aceasta este Prototype Class
    public Prototype(String id) {
        this.id = id; 
    }

    public String getId() { 
        return this.id; 
    }
    public abstract Prototype clone();
}
```


``` java
class ConcretePrototype extends Prototype {
    public ConcretePrototype(String id) {
        super(id);
    }
    
    @Override
    public Prototype clone() {
        return (Prototype)this.clone(); 
    }
}
```

Putem folosi **șablonul de proiectare prototip** atunci când:

- Trebuie să instanțiem clase în timpul rulării

- Este complicat sau costisitor pentru noi să creăm o clasă

- Clienții noștri nu trebuie să știe despre crearea și reprezentarea obiectului

[/slide]

[slide hideTitle]

# Șablonul Builder

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/09-Design-Pattern/RO/Java-OOP-Advanced-Design-Patterns-19-builder-pattern-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Șablonul de proiectare Builder** este utilizat pentru a asambla o structură complexă pas cu pas.

În cele din urmă, va returna întregul obiect.

Putem crea un obiect cu o mulțime de opțiuni de configurare posibile.

**Utilizarea** șablonului builder:

- Când procesul nostru de construcție trebuie să permită reprezentări diferite pentru obiectul construit (foarte personalizabil)

- Când dorim ca algoritmul nostru de creare a obiectelor să fie independent de părțile care alcătuiesc obiectul nostru și de procesul de construcție a acestora

Imaginați-vă că vrem să creăm un personaj pentru jocul nostru MMORPG.

Putem face constructorul nostru **să creeze caracterul** pentru noi.

Aruncați o privire la acest **exemplu**:

``` java
// Aceasta este Hero class
public final class Hero {
    private final Race race;
    private final String name;
    private Integer startingHP;
    private final HairColor hairColor;
    private final Armor armor;
    private final Weapon weapon;

 Hero(
     Race race, 
     String name, 
     Integer startingHP, 
     HairColor hairColor, 
     Armor armor, 
     Weapon weapon
     ) {
    this.race = race;
    this.name = name;
    this.startingHP = startingHP;
    this.hairColor = hairColor;
    this.armor = armor;
    this.weapon = weapon;
    }

    // getters...
}
```

Și așa ar trebui să arate clasa noastră **Builder**:

``` java
public class Builder {
    private final Race race;
    private final String name;
    private Integer startingHP;
    private HairColor hairColor;
    private Armor armor;
    private Weapon weapon;

    public Builder(Race race, String name) {
        if (race == null || name == null) {
            throw new IllegalArgumentException("Race and name can not be null");
        }
	
        this.race = race;
        this.name = name;
    }

    public Builder startingHP (Integer startingHP) {
        this.startingHP = startingHP;
        return this;
    }


    public Builder withHairColor(HairColor hairColor) {
        this.hairColor = hairColor;
        return this;
    }

    public Builder withArmor(Armor armor) {
        this.armor = armor;
        return this;
    }

    public Builder withWeapon(Weapon weapon) {
        this.weapon = weapon;
        return this;
    }

    public Hero build() {
        return new Hero(
            this.race,
            this.name,
            this.startingHp,
            this.hairColor,
            this.armor,
            this.weapon
            );
    }
}
```

Cu modelul constructor, avem control asupra etapelor **procesului de construcție**.

Putem crea o reprezentare **diferită** cu **același** proces de construcție.

[/slide]

[slide hideTitle]

# Example: Computer Class

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/09-Design-Pattern/RO/Java-OOP-Advanced-Design-Patterns-20-21-example-computer-class-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[/slide]
