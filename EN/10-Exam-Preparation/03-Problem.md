[slide]
# Problem: Christmas Unit Tests
[code-task title="Problem: Christmas Unit Tests" taskId="98347f73-4ff1-45fa-9f96-98f5a4b739d9" executionType="tests-execution" executionStrategy="java-code" requiresInput]
[code-editor language=java]
```
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your code here
    }
}
```
[/code-editor]
[task-description]
## Description

# Task 3: Unit Tests (100 points)

You will receive a skeleton with **Present** and **PresentBag** classes inside. 

The class will have some methods, fields and one constructor, which are working properly. 

You are **NOT ALLOWED** to change any class. Cover the whole class with unit tests to make sure that the class is working as intended.

You are provided with a **unit test project** in the **project skeleton**.

Note: The **PresentBag** you need to test is in the **package christmas**, so zip package **christmas**.

Do **NOT** use **Mocking** in your unit tests!

Download skeleton from [here](https://mega.nz/file/iIpH0SKJ#aSWnnMGgoxZeUaKcGVAvfXX0usPf379wlER3hDhI4iE)


[/task-description]
[code-io /]
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