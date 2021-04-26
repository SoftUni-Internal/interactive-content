[slide hideTitle]
# problemă cu Soluție: Christmas Unit Tests

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/10-Exam-Prep-1/RO/interactive-java-oop-advanced-exam-preparation-3-Fixed-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Christmas Unit Tests" taskId="oop-advanced-java-exam-preparation-1-Christmas-Unit-Tests" executionType="tests-execution" executionStrategy="java-unit-tests" requiresInput]   

[task-description]
# Descriere

**Folosiți resursele din sarcina anterioară.**

Va exista un schelet care deține clasele **Present** și **PresentBag**. 

Clasa va avea câteva metode, câmpuri și un singur constructor, care trebuie să funcționeze corespunzător.

**Vă rugăm să nu** modificați conținutul claselor. 

Acoperiți fiecare clasă cu **teste unitare** pentru a vă asigura că funcționează corect.

Vi se oferă un **proiect de testare unitară** în **scheletul de proiect**.

**Nu** folosiți **mocking** în **testele unitare**!

## Submit

Clasa **PresentBag** pe care trebuie să o testați este îm pachetul **Christmas**.

Trebuie să plasați pachetul într-un fișier **zip**.


[/task-description]
[code-upload /] 
[tests]
[test]
[input]
~~!!!==\#==!!!~~
//christmas/Present.java
package christmas;

public class Present \{
    private String name;
    private double magic;

    public Present(String name, double magic)\{
        this.setName(name);
        this.setMagic(magic);
    \}

    private void setName(String name) \{
        this.name = name;
    \}

    private void setMagic(double magic) \{
        this.magic = magic;
    \}

    public String getName() \{
        return name;
    \}

    public double getMagic() \{
        return magic;
    \}
\}

~~!!!==\#==!!!~~
//christmas/PresentBag.java

package christmas;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;

public class PresentBag \{
    private Collection\<Present\> data;

    public PresentBag() \{
        this.data = new ArrayList\<\>();
    \}

    public int getCount() \{
        return this.data.size();
    \}

    public String create(Present present) \{
        if (present == null) \{
            throw new NullPointerException("Present is null");
        \}
        if (this.data.stream().anyMatch(p -\> p.getName().equals(present.getName()))) \{
            throw new IllegalArgumentException(String.format("Present with name %s already exists", present.getName()));
        \}
        this.data.add(present);
        return String.format("Successfully added present %s with magic %.2f", present.getName(), present.getMagic());
    \}

    public boolean remove(String name) \{
        if (name == null \|\| name.trim().isEmpty()) \{
            throw new NullPointerException("Name cannot be null");
        \}

        boolean isRemoved = this.data.removeIf(p -\> p.getName().equals(name));
        return isRemoved;
    \}
    public Present getPresentWithLeastMagic() \{
        Present present = this.data
                .stream()
                .min(Comparator.comparingDouble(Present::getMagic))
                .orElse(null);

        return present;
    \}
    public Present getPresent(String name) \{
        Present present = this.data
                .stream()
                .filter(p -\> p.getName().equals(name))
                .findFirst()
                .orElse(null);

        return present;
    \}
    public Collection\<Present\> getPresents() \{
        return Collections.unmodifiableCollection(this.data);
    \}

\}
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
~~!!!==\#==!!!~~
//christmas/Present.java
package christmas;

public class Present \{
    private String name;
    private double magic;

    public Present(String name, double magic)\{
        this.setName(name);
        this.setMagic(magic);
    \}

    private void setName(String name) \{
        this.name = name;
    \}

    private void setMagic(double magic) \{
        this.magic = magic;
    \}

    public String getName() \{
        return name;
    \}

    public double getMagic() \{
        return magic;
    \}
\}

~~!!!==\#==!!!~~
//christmas/PresentBag.java

package christmas;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;

public class PresentBag \{
    private Collection\<Present\> data;

    public PresentBag() \{
        this.data = new ArrayList\<\>();
    \}

    public int getCount() \{
        return this.data.size();
    \}

    public String create(Present present) \{
        if (present == null) \{
            throw new NullPointerException("Present is null");
        \}
        if (this.data.stream().anyMatch(p -\> p.getName().equals(present.getName()))) \{
            throw new IllegalArgumentException(String.format("Present with name %s already exists", present.getName()));
        \}
        //this.data.add(present);
        return String.format("Successfully added present %s with magic %.2f", present.getName(), present.getMagic());
    \}

    public boolean remove(String name) \{
        if (name == null \|\| name.trim().isEmpty()) \{
            throw new NullPointerException("Name cannot be null");
        \}

        boolean isRemoved = this.data.removeIf(p -\> p.getName().equals(name));
        return isRemoved;
    \}
    public Present getPresentWithLeastMagic() \{
        Present present = this.data
                .stream()
                .min(Comparator.comparingDouble(Present::getMagic))
                .orElse(null);

        return present;
    \}
    public Present getPresent(String name) \{
        Present present = this.data
                .stream()
                .filter(p -\> p.getName().equals(name))
                .findFirst()
                .orElse(null);

        return present;
    \}
    public Collection\<Present\> getPresents() \{
        return Collections.unmodifiableCollection(this.data);
    \}

\}
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
~~!!!==\#==!!!~~
//christmas/Present.java
package christmas;

public class Present \{
    private String name;
    private double magic;

    public Present(String name, double magic)\{
        this.setName(name);
        this.setMagic(magic);
    \}

    private void setName(String name) \{
        this.name = name;
    \}

    private void setMagic(double magic) \{
        this.magic = magic;
    \}

    public String getName() \{
        return name;
    \}

    public double getMagic() \{
        return magic;
    \}
\}

~~!!!==\#==!!!~~
//christmas/PresentBag.java

package christmas;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;

public class PresentBag \{
    private Collection\<Present\> data;

    public PresentBag() \{
        this.data = new ArrayList\<\>();
    \}

    public int getCount() \{
        return this.data.size();
    \}

    public String create(Present present) \{
        if (present == null) \{
            throw new NullPointerException("Present is null");
        \}
        if (this.data.stream().anyMatch(p -\> p.getName().equals(present.getName()))) \{
            throw new IllegalArgumentException(String.format("Present with name %s already exists", present.getName()));
        \}
        this.data.add(present);
        return String.format("Successfully added present %s with magic %.2f", present.getName(), present.getMagic());
    \}

    public boolean remove(String name) \{
        //if (name == null \|\| name.trim().isEmpty()) \{
        //    throw new NullPointerException("Name cannot be null");
        //\}

        boolean isRemoved = this.data.removeIf(p -\> p.getName().equals(name));
        return isRemoved;
    \}
    public Present getPresentWithLeastMagic() \{
        Present present = this.data
                .stream()
                .min(Comparator.comparingDouble(Present::getMagic))
                .orElse(null);

        return present;
    \}
    public Present getPresent(String name) \{
        Present present = this.data
                .stream()
                .filter(p -\> p.getName().equals(name))
                .findFirst()
                .orElse(null);

        return present;
    \}
    public Collection\<Present\> getPresents() \{
        return Collections.unmodifiableCollection(this.data);
    \}

\}
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
~~!!!==\#==!!!~~
//christmas/Present.java
package christmas;

public class Present \{
    private String name;
    private double magic;

    public Present(String name, double magic)\{
        this.setName(name);
        this.setMagic(magic);
    \}

    private void setName(String name) \{
        this.name = name;
    \}

    private void setMagic(double magic) \{
        this.magic = magic;
    \}

    public String getName() \{
        return name;
    \}

    public double getMagic() \{
        return magic;
    \}
\}

~~!!!==\#==!!!~~
//christmas/PresentBag.java

package christmas;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;

public class PresentBag \{
    private Collection\<Present\> data;

    public PresentBag() \{
        this.data = new ArrayList\<\>();
    \}

    public int getCount() \{
        return this.data.size();
    \}

    public String create(Present present) \{
        if (present == null) \{
            throw new NullPointerException("Present is null");
        \}
        if (this.data.stream().anyMatch(p -\> p.getName().equals(present.getName()))) \{
            throw new IllegalArgumentException(String.format("Present with name %s already exists", present.getName()));
        \}
        this.data.add(present);
        return String.format("Successfully added present %s with magic %.2f", present.getName(), present.getMagic());
    \}

    public boolean remove(String name) \{
        if (name == null \|\| name.trim().isEmpty()) \{
            throw new NullPointerException("Name cannot be null");
        \}

        boolean isRemoved = this.data.removeIf(p -\> p.getName().equals(name));
        return isRemoved;
    \}
    public Present getPresentWithLeastMagic() \{
        Present present = this.data
                .stream()
                .min(Comparator.comparingDouble(Present::getMagic))
                .orElse(null);

        return null;
    \}
    public Present getPresent(String name) \{
        Present present = this.data
                .stream()
                .filter(p -\> p.getName().equals(name))
                .findFirst()
                .orElse(null);

        return present;
    \}
    public Collection\<Present\> getPresents() \{
        return Collections.unmodifiableCollection(this.data);
    \}

\}
[/input]
[output]
Test Passed!
[/output]
[/test]
[test]
[input]
~~!!!==\#==!!!~~
//christmas/Present.java
package christmas;

public class Present \{
    private String name;
    private double magic;

    public Present(String name, double magic)\{
        this.setName(name);
        this.setMagic(magic);
    \}

    private void setName(String name) \{
        this.name = name;
    \}

    private void setMagic(double magic) \{
        this.magic = magic;
    \}

    public String getName() \{
        return name;
    \}

    public double getMagic() \{
        return magic;
    \}
\}

~~!!!==\#==!!!~~
//christmas/PresentBag.java

package christmas;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;

public class PresentBag \{
    private Collection\<Present\> data;

    public PresentBag() \{
        this.data = new ArrayList\<\>();
    \}

    public int getCount() \{
        return this.data.size();
    \}

    public String create(Present present) \{
        if (present == null) \{
            throw new NullPointerException("Present is null");
        \}
        if (this.data.stream().anyMatch(p -\> p.getName().equals(present.getName()))) \{
            throw new IllegalArgumentException(String.format("Present with name %s already exists", present.getName()));
        \}
        this.data.add(present);
        return String.format("Successfully added present %s with magic %.2f", present.getName(), present.getMagic());
    \}

    public boolean remove(String name) \{
        if (name == null \|\| name.trim().isEmpty()) \{
            throw new NullPointerException("Name cannot be null");
        \}

        boolean isRemoved = this.data.removeIf(p -\> p.getName().equals(name));
        return isRemoved;
    \}
    public Present getPresentWithLeastMagic() \{
        Present present = this.data
                .stream()
                .min(Comparator.comparingDouble(Present::getMagic))
                .orElse(null);

        return present;
    \}
    public Present getPresent(String name) \{
        Present present = this.data
                .stream()
                .filter(p -\> p.getName().equals(name))
                .findFirst()
                .orElse(null);

        return null;
    \}
    public Collection\<Present\> getPresents() \{
        return Collections.unmodifiableCollection(this.data);
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
