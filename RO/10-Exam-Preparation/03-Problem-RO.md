[slide hideTitle]
# Problemă cu Soluție: Online Shop Unit Tests

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/10-Exam-Prep-1/RO/interactive-java-oop-advanced-exam-preparation-3-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

[code-task title="Online Shop Unit Tests" taskId="oop-advanced-java-exam-preparation-2-Online-Shop-Unit-Tests" executionType="tests-execution" executionStrategy="java-unit-tests" requiresInput]

[task-description]
# Descriere

**Folosiți resursele din sarcina anterioară.**

Veți primi o schemă cu o singură clasă în interiorul său.

Clasa va conține câteva metode, câmpuri și constructori.

Acoperiți întreaga clasă cu teste unitare pentru a vă asigura că funcționează conform intenției.

[/task-description]
[code-upload /]
[tests]
[test]
[input]
~~!!!==\#==!!!~~
//computers/ComputerManager.java
package computers;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class ComputerManager \{
    private static final String CAN_NOT_BE_NULL_MESSAGE = "Can not be null!";

    private List\<Computer\> computers;

    public ComputerManager() \{
        this.computers = new ArrayList\<\>();
    \}

    public List\<Computer\> getComputers() \{
        return Collections.unmodifiableList(this.computers);
    \}

    public int getCount() \{
        return this.computers.size();
    \}

    public void addComputer(Computer computer) \{
        this.validateNullValue(computer, CAN_NOT_BE_NULL_MESSAGE);
        boolean flag = this
                .computers
                .stream()
                .filter(c -\> c.getManufacturer().equals(computer.getManufacturer()) && c.getModel().equals(computer.getModel()))
                .findFirst()
                .orElse(null) != null;
        if (flag)
        \{
            throw new IllegalArgumentException("This computer already exists.");
        \}

        this.computers.add(computer);
    \}

    public Computer removeComputer(String manufacturer, String model) \{
        Computer computer = this.getComputer(manufacturer, model);

        this.computers.remove(computer);
        return computer;
    \}

    public Computer getComputer(String manufacturer, String model) \{
        this.validateNullValue(manufacturer, CAN_NOT_BE_NULL_MESSAGE);
        this.validateNullValue(model, CAN_NOT_BE_NULL_MESSAGE);

        Computer computer = this
                .computers
                .stream()
                .filter(c -\> c.getManufacturer().equals(manufacturer) && c.getModel().equals(model))
                .findFirst()
                .orElse(null);

        if (computer == null) \{
            throw new IllegalArgumentException("There is no computer with this manufacturer and model.");
        \}

        return computer;
    \}

    public List\<Computer\> getComputersByManufacturer(String manufacturer) \{
        this.validateNullValue(manufacturer, CAN_NOT_BE_NULL_MESSAGE);

        List\<Computer\> computers = this
                .computers
                .stream()
                .filter(c -\> c.getManufacturer().equals(manufacturer))
                .collect(Collectors.toList());

        return computers;
    \}

    private void validateNullValue(Object variable, String exceptionMessage) \{
        if (variable == null) \{
            throw new IllegalArgumentException(exceptionMessage);
        \}
    \}
\}

~~!!!==\#==!!!~~
//computers/Main.java
package computers;

import java.util.Scanner;

public class Main \{
    public static void main(String\[\] args) \{

    \}
\}

~~!!!==\#==!!!~~
//computers/Computer.java
package computers;

public class Computer \{

    private String manufacturer;
    private String model;
    private double price;

    public Computer(String manufacturer, String model, double price) \{
        this.setManufacturer(manufacturer);
        this.setModel(model);
        this.setPrice(price);
    \}

    public String getManufacturer() \{
        return manufacturer;
    \}

    private void setManufacturer(String manufacturer) \{
        this.manufacturer = manufacturer;
    \}

    public String getModel() \{
        return model;
    \}

    private void setModel(String model) \{
        this.model = model;
    \}

    public double getPrice() \{
        return price;
    \}

    private void setPrice(double price) \{
        this.price = price;
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
//computers/ComputerManager.java
package computers;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class ComputerManager \{
    private static final String CAN_NOT_BE_NULL_MESSAGE = "Can not be null!";

    private List\<Computer\> computers;

    public ComputerManager() \{
        this.computers = new ArrayList\<\>();
    \}

    public List\<Computer\> getComputers() \{
        return Collections.unmodifiableList(this.computers);
    \}

    public int getCount() \{
	     return 10;
        // return this.computers.size();
    \}

    public void addComputer(Computer computer) \{
        this.validateNullValue(computer, CAN_NOT_BE_NULL_MESSAGE);
        boolean flag = this
                .computers
                .stream()
                .filter(c -\> c.getManufacturer().equals(computer.getManufacturer()) && c.getModel().equals(computer.getModel()))
                .findFirst()
                .orElse(null) != null;
        if (flag)
        \{
            throw new IllegalArgumentException("This computer already exists.");
        \}

        this.computers.add(computer);
    \}

    public Computer removeComputer(String manufacturer, String model) \{
        Computer computer = this.getComputer(manufacturer, model);

        this.computers.remove(computer);
        return computer;
    \}

    public Computer getComputer(String manufacturer, String model) \{
        this.validateNullValue(manufacturer, CAN_NOT_BE_NULL_MESSAGE);
        this.validateNullValue(model, CAN_NOT_BE_NULL_MESSAGE);

        Computer computer = this
                .computers
                .stream()
                .filter(c -\> c.getManufacturer().equals(manufacturer) && c.getModel().equals(model))
                .findFirst()
                .orElse(null);

        if (computer == null) \{
            throw new IllegalArgumentException("There is no computer with this manufacturer and model.");
        \}

        return computer;
    \}

    public List\<Computer\> getComputersByManufacturer(String manufacturer) \{
        this.validateNullValue(manufacturer, CAN_NOT_BE_NULL_MESSAGE);

        List\<Computer\> computers = this
                .computers
                .stream()
                .filter(c -\> c.getManufacturer().equals(manufacturer))
                .collect(Collectors.toList());

        return computers;
    \}

    private void validateNullValue(Object variable, String exceptionMessage) \{
        if (variable == null) \{
            throw new IllegalArgumentException(exceptionMessage);
        \}
    \}
\}

~~!!!==\#==!!!~~
//computers/Main.java
package computers;

import java.util.Scanner;

public class Main \{
    public static void main(String\[\] args) \{

    \}
\}

~~!!!==\#==!!!~~
//computers/Computer.java
package computers;

public class Computer \{

    private String manufacturer;
    private String model;
    private double price;

    public Computer(String manufacturer, String model, double price) \{
        this.setManufacturer(manufacturer);
        this.setModel(model);
        this.setPrice(price);
    \}

    public String getManufacturer() \{
        return manufacturer;
    \}

    private void setManufacturer(String manufacturer) \{
        this.manufacturer = manufacturer;
    \}

    public String getModel() \{
        return model;
    \}

    private void setModel(String model) \{
        this.model = model;
    \}

    public double getPrice() \{
        return price;
    \}

    private void setPrice(double price) \{
        this.price = price;
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
//computers/ComputerManager.java
package computers;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class ComputerManager \{
    private static final String CAN_NOT_BE_NULL_MESSAGE = "Can not be null!";

    private List\<Computer\> computers;

    public ComputerManager() \{
        this.computers = new ArrayList\<\>();
    \}

    public List\<Computer\> getComputers() \{
        return Collections.unmodifiableList(this.computers);
    \}

    public int getCount() \{
        return this.computers.size();
    \}

    public void addComputer(Computer computer) \{
        this.validateNullValue(computer, CAN_NOT_BE_NULL_MESSAGE);
        boolean flag = this
                .computers
                .stream()
                .filter(c -\> c.getManufacturer().equals(computer.getManufacturer()) && c.getModel().equals(computer.getModel()))
                .findFirst()
                .orElse(null) != null;
        if (flag)
        \{
            throw new IllegalArgumentException("This computer already exists.");
        \}

        // this.computers.add(computer);
    \}

    public Computer removeComputer(String manufacturer, String model) \{
        Computer computer = this.getComputer(manufacturer, model);

        this.computers.remove(computer);
        return computer;
    \}

    public Computer getComputer(String manufacturer, String model) \{
        this.validateNullValue(manufacturer, CAN_NOT_BE_NULL_MESSAGE);
        this.validateNullValue(model, CAN_NOT_BE_NULL_MESSAGE);

        Computer computer = this
                .computers
                .stream()
                .filter(c -\> c.getManufacturer().equals(manufacturer) && c.getModel().equals(model))
                .findFirst()
                .orElse(null);

        if (computer == null) \{
            throw new IllegalArgumentException("There is no computer with this manufacturer and model.");
        \}

        return computer;
    \}

    public List\<Computer\> getComputersByManufacturer(String manufacturer) \{
        this.validateNullValue(manufacturer, CAN_NOT_BE_NULL_MESSAGE);

        List\<Computer\> computers = this
                .computers
                .stream()
                .filter(c -\> c.getManufacturer().equals(manufacturer))
                .collect(Collectors.toList());

        return computers;
    \}

    private void validateNullValue(Object variable, String exceptionMessage) \{
        if (variable == null) \{
            throw new IllegalArgumentException(exceptionMessage);
        \}
    \}
\}

~~!!!==\#==!!!~~
//computers/Main.java
package computers;

import java.util.Scanner;

public class Main \{
    public static void main(String\[\] args) \{

    \}
\}

~~!!!==\#==!!!~~
//computers/Computer.java
package computers;

public class Computer \{

    private String manufacturer;
    private String model;
    private double price;

    public Computer(String manufacturer, String model, double price) \{
        this.setManufacturer(manufacturer);
        this.setModel(model);
        this.setPrice(price);
    \}

    public String getManufacturer() \{
        return manufacturer;
    \}

    private void setManufacturer(String manufacturer) \{
        this.manufacturer = manufacturer;
    \}

    public String getModel() \{
        return model;
    \}

    private void setModel(String model) \{
        this.model = model;
    \}

    public double getPrice() \{
        return price;
    \}

    private void setPrice(double price) \{
        this.price = price;
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
//computers/ComputerManager.java
package computers;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class ComputerManager \{
    private static final String CAN_NOT_BE_NULL_MESSAGE = "Can not be null!";

    private List\<Computer\> computers;

    public ComputerManager() \{
        this.computers = new ArrayList\<\>();
    \}

    public List\<Computer\> getComputers() \{
        return Collections.unmodifiableList(this.computers);
    \}

    public int getCount() \{
        return this.computers.size();
    \}

    public void addComputer(Computer computer) \{
        this.validateNullValue(computer, CAN_NOT_BE_NULL_MESSAGE);
        boolean flag = this
                .computers
                .stream()
                .filter(c -\> c.getManufacturer().equals(computer.getManufacturer()) && c.getModel().equals(computer.getModel()))
                .findFirst()
                .orElse(null) != null;
        if (flag)
        \{
            throw new IllegalArgumentException("This computer already exists.");
        \}

        this.computers.add(computer);
    \}

    public Computer removeComputer(String manufacturer, String model) \{
        Computer computer = this.getComputer(manufacturer, model);

        this.computers.remove(computer);
        return computer;
    \}

    public Computer getComputer(String manufacturer, String model) \{
        this.validateNullValue(manufacturer, CAN_NOT_BE_NULL_MESSAGE);
        this.validateNullValue(model, CAN_NOT_BE_NULL_MESSAGE);

        Computer computer = this
                .computers
                .stream()
                .filter(c -\> c.getManufacturer().equals(manufacturer) && c.getModel().equals(model))
                .findFirst()
                .orElse(null);

        if (computer == null) \{
            throw new IllegalArgumentException("There is no computer with this manufacturer and model.");
        \}

		return null;
        //return computer;
    \}

    public List\<Computer\> getComputersByManufacturer(String manufacturer) \{
        this.validateNullValue(manufacturer, CAN_NOT_BE_NULL_MESSAGE);

        List\<Computer\> computers = this
                .computers
                .stream()
                .filter(c -\> c.getManufacturer().equals(manufacturer))
                .collect(Collectors.toList());

        return computers;
    \}

    private void validateNullValue(Object variable, String exceptionMessage) \{
        if (variable == null) \{
            throw new IllegalArgumentException(exceptionMessage);
        \}
    \}
\}

~~!!!==\#==!!!~~
//computers/Main.java
package computers;

import java.util.Scanner;

public class Main \{
    public static void main(String\[\] args) \{

    \}
\}

~~!!!==\#==!!!~~
//computers/Computer.java
package computers;

public class Computer \{

    private String manufacturer;
    private String model;
    private double price;

    public Computer(String manufacturer, String model, double price) \{
        this.setManufacturer(manufacturer);
        this.setModel(model);
        this.setPrice(price);
    \}

    public String getManufacturer() \{
        return manufacturer;
    \}

    private void setManufacturer(String manufacturer) \{
        this.manufacturer = manufacturer;
    \}

    public String getModel() \{
        return model;
    \}

    private void setModel(String model) \{
        this.model = model;
    \}

    public double getPrice() \{
        return price;
    \}

    private void setPrice(double price) \{
        this.price = price;
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
//computers/ComputerManager.java
package computers;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class ComputerManager \{
    private static final String CAN_NOT_BE_NULL_MESSAGE = "Can not be null!";

    private List\<Computer\> computers;

    public ComputerManager() \{
        this.computers = new ArrayList\<\>();
    \}

    public List\<Computer\> getComputers() \{
        return Collections.unmodifiableList(this.computers);
    \}

    public int getCount() \{
        return this.computers.size();
    \}

    public void addComputer(Computer computer) \{
        this.validateNullValue(computer, CAN_NOT_BE_NULL_MESSAGE);
        boolean flag = this
                .computers
                .stream()
                .filter(c -\> c.getManufacturer().equals(computer.getManufacturer()) && c.getModel().equals(computer.getModel()))
                .findFirst()
                .orElse(null) != null;
        if (flag)
        \{
            throw new IllegalArgumentException("This computer already exists.");
        \}

        this.computers.add(computer);
    \}

    public Computer removeComputer(String manufacturer, String model) \{
        Computer computer = this.getComputer(manufacturer, model);

        this.computers.remove(computer);
        return computer;
    \}

    public Computer getComputer(String manufacturer, String model) \{
        this.validateNullValue(manufacturer, CAN_NOT_BE_NULL_MESSAGE);
        this.validateNullValue(model, CAN_NOT_BE_NULL_MESSAGE);

        Computer computer = this
                .computers
                .stream()
                .filter(c -\> c.getManufacturer().equals(manufacturer) && c.getModel().equals(model))
                .findFirst()
                .orElse(null);

        if (computer == null) \{
            throw new IllegalArgumentException("There is no computer with this manufacturer and model.");
        \}

        return computer;
    \}

    public List\<Computer\> getComputersByManufacturer(String manufacturer) \{
        this.validateNullValue(manufacturer, CAN_NOT_BE_NULL_MESSAGE);

        List\<Computer\> computers = this
                .computers
                .stream()
                .filter(c -\> c.getManufacturer().equals(manufacturer))
                .collect(Collectors.toList());

        return null;
        //return computers;
    \}

    private void validateNullValue(Object variable, String exceptionMessage) \{
        if (variable == null) \{
            throw new IllegalArgumentException(exceptionMessage);
        \}
    \}
\}

~~!!!==\#==!!!~~
//computers/Main.java
package computers;

import java.util.Scanner;

public class Main \{
    public static void main(String\[\] args) \{

    \}
\}

~~!!!==\#==!!!~~
//computers/Computer.java
package computers;

public class Computer \{

    private String manufacturer;
    private String model;
    private double price;

    public Computer(String manufacturer, String model, double price) \{
        this.setManufacturer(manufacturer);
        this.setModel(model);
        this.setPrice(price);
    \}

    public String getManufacturer() \{
        return manufacturer;
    \}

    private void setManufacturer(String manufacturer) \{
        this.manufacturer = manufacturer;
    \}

    public String getModel() \{
        return model;
    \}

    private void setModel(String model) \{
        this.model = model;
    \}

    public double getPrice() \{
        return price;
    \}

    private void setPrice(double price) \{
        this.price = price;
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
