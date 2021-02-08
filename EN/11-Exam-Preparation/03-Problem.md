[slide]
# Problem: Online Shop Unit Tests
[code-task title="Problem: Online Shop Unit Tests" taskId="f86bf04f-a863-47ab-a726-dba5fc759fbf" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

# Task 3: Unit Testing (100 Points)

Download the skeleton from here [mega.nz](https://mega.nz/file/aExQHByZ#e2gCZDTWIFYww3Uuwsy-XOpxXDbjpx0_CabZ1CyPUgI)

You will receive a skeleton with one class inside. 

The class will have some methods, fields and constructors. 

Cover the whole class with unit test to make sure that the class is working as intended.




[/task-description]
[code-io /]
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