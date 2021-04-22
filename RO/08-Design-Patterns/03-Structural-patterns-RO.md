# Șabloane Structurale

[slide hideTitle]

# Scopuri

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/09-Design-Pattern/RO/Java-OOP-Advanced-Design-Patterns-22-23-structural-patterns-purposes-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Șabloanele  structurale sunt preocupate de modul în care clasele și obiectele sunt compuse pentru a forma structuri mai mari.

Se bazează pe conceptul de interfețe și moștenire, permițând mai multor obiecte sau clase să lucreze împreună.

Acest șablon construiește designul prin identificarea unui mod simplu de a efectua **relația** între diferite entități.

Știind acest lucru, să aruncăm o privire la primul **tipar structural**.

[/slide]

[slide hideTitle]

# Șablonul de Fațadă

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/09-Design-Pattern/RO/Java-OOP-Advanced-Design-Patterns-24-25-27-facade-pattern-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Șablonul de fațadă** este utilizat pentru a ascunde complexitatea sistemului nostru, oferind clientului o interfață **simplificată**.

Cu această interfață, clientul nostru poate accesa sistemul.

Folosim șablonul de fațadă atunci când avem o arhitectură foarte complexă sau dificilă de înțeles.

În acest fel, dependențele de un subsistem sunt reduse la minimum.

Dacă folosim o bibliotecă exterioară, slab proiectată sau prea complexă și folosim doar câteva dintre metodele sale, putem urma acest model pentru a oferi o interfață simplă pentru aceasta.

[image assetsSrc="Design-Patterns(1).png" /]


Să aruncăm o privire la acest exemplu de cod:

``` java
// Avem componentele calculatorului
class CPU {
    public void processData() {
        // logica aici...
    }
}
 
class Memory {
    public void load() { 
        // logica aici...
    }
}
 
class HardDrive {
    public void readdata() {
        // logica aici...
     }
}
 
// Aici este fațada noastră
class Computer {
    private CPU cpu;
    private Memory ram;
    private HardDrive drive;
 
    public Computer() {
        this.cpu = new CPU();
        this.ram = new Memory();
        this.drive = new HardDrive();
    }
 
    public void run() {
        cpu.processData();
        ram.load();
        drive.readdata();
    }
}
```

Și aici metoda noastră principală:
``` java
class Main {
    public static void main(String[] args) {
        Computer computer = new Computer();
        computer.run();
    }
}
```

Acest exemplu ne arată cum un client poate **interacționa** cu fațada (în cazul nostru - **Computer**).

[/slide]

[slide hideTitle]

# Șablonul Composite

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/09-Design-Pattern/RO/Java-OOP-Advanced-Design-Patterns-28-29-32-composite-pattern-demo-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Șablonul Composite ne permite să **combinăm** diferite tipuri de obiecte în **structuri tip arbore**

De asemenea, șablonul nostru composite ar putea descrie o întreagă ierarhie de obiecte.

**Șablonul Composite** este o soluție destul de utilizată pentru majoritatea problemelor care necesită construirea unei structuri de arbore.

Șablonul Composite constă din 3 obiecte principale:

- **Base Component**

- **Leaf**

- **Composite**

[image assetsSrc="Design-Patterns(2).png" /]

Pentru a înțelege mai bine, să vedem acest cod simplu.

În primul rând, creăm o interfață simplă de clasă, care ne va oferi funcționalitatea pentru afișarea informațiilor angajaților:

``` java
public interface Employee {
    public void EmployeeInfo();
}
```

Apoi, creăm clasa noastră care va conține datele unui **worker** și le vom folosi ca **leaf**:

``` java
public class Worker implements Employee {
    private String name;
    private long employeeID;
    private String position;

    public Worker(long employeeID, String name, String position) {
        this.employeeID = employeeID;
        this.name = name;
        this.position = position;
    }

    @Override
    public void EmployeeInfo() {
        System.out.println(employeeID + " " + name);
    }
}
```

După aceea, în structura noastră din viața reală, vom avea **Managers**:

``` java
public class Manager implements Employee {
    private String name;
    private long employeeID;
    private String position;

    public Manager(long employeeID, String name, String position) {
        this.employeeID = employeeID;
        this.name = name;
        this.position = position;
    }

    @Override
    public void EmployeeInfo() {
        System.out.println(employeeID + " " + name);
    }
}
```

Facem o clasă **Director** care va funcționa ca un strat **composite**:

``` java

import java.util.ArrayList;
import java.util.List;

public class Director implements Employee {
    private List<Employee> ListOfEmployees = new ArrayList<Employee>();

    @Override
    public void EmployeeInfo() {
        for(Employee employee:ListOfEmployees) {
            employee.EmployeeInfo();
        }
    }

    public void addEmployee(Employee employee) {
        ListOfEmployees.add(employee);
    }

    public void removeEmployee(Employee employee) {
        ListOfEmployees.remove(employee);
    }
}
```

Și, în cele din urmă, să testăm structura companiei noastre:

``` java
public class Main {
    public static void main (String[] args) {
        Worker firstWorker = new Worker(1, "Michael Peterson", "Marketing");
        Worker secondWorker  = new Worker(2, "Bob Warley", "Marketing");
        Director engDirectory = new Director();
        engDirectory.addEmployee(firstWorker);
        engDirectory.addEmployee(secondWorker);

        Manager firstManager = new Manager(11, "George Bond", "SEO Manager");
        Manager secondManager = new Manager(12, "James Clark", "Marketing Manager");

        Director accDirectory = new Director();
        accDirectory.addEmployee(firstManager);
        accDirectory.addEmployee(secondManager);

        Director directory = new Director();
        directory.addEmployee(engDirectory);
        directory.addEmployee(accDirectory);
        directory.EmployeeInfo();
    }
}
```

Acum, dacă ne testăm programul, **ieșirea** va fi:

```
1 Michael Peterson
2 Bob Warley
11 George Bond
12 James Clark
```
[/slide]
