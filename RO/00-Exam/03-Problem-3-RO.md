[slide hideTitle]
# Problemă: Easter Races Unit Tests
[code-task title="Easter Races Unit Tests" taskId="Java-OOP-Advanced-Easter-Races-Unit-Tests" executionType="tests-execution" executionStrategy="java-unit-tests" requiresInput]

[task-description]
# Sarcina 3: Testarea unității (100 de puncte)

**Aici este un link către** [resources](https://videos.softuni.org/resources/java/java-oop-advanced/12-Java-OOP-Advanced-Final-Exam-Unit-Testing.zip) **pentru această sarcină.**

Veți primi o schemă cu o singură clasă în interior.

Clasa va consta din metode, câmpuri și constructori.

Acoperiți întreaga clasă cu teste unitare pentru a vă asigura că funcționează conform intenției.


[/task-description]
[code-upload /]
[tests]
[test]
[input]
~~!!!==\#==!!!~~
//garage/Garage.java
package garage;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class Garage \{
    private List\<Car\> cars;

    public Garage() \{
        this.cars = new ArrayList\<\>();
    \}

    public List\<Car\> getCars() \{
        return Collections.unmodifiableList(this.cars);
    \}

    public int getCount() \{
        return this.cars.size();
    \}

    public List\<Car\> findAllCarsWithMaxSpeedAbove(int speed) \{
        List\<Car\> cars = this.cars.stream().filter(c -\> c.getMaxSpeed() \> speed).collect(Collectors.toList());

        return cars;
    \}

    public void addCar(Car car) \{
        if (car == null) \{
            throw new IllegalArgumentException("Car can't be null");
        \}

        this.cars.add(car);
    \}

    public Car getTheMostExpensiveCar() \{
        Car car = this
                .cars
                .stream()
                .sorted((c1, c2) -\> Double.compare(c2.getPrice(), c1.getPrice()))
                .limit(1)
                .findFirst()
                .orElse(null);

        return car;
    \}

    public List\<Car\> findAllCarsByBrand(String brand) \{
        List\<Car\> cars = this.cars.stream().filter(c -\> c.getBrand().equals(brand)).collect(Collectors.toList());

        return cars;
    \}
\}

~~!!!==\#==!!!~~
//garage/Main.java
package computers;

import java.util.Scanner;

public class Main \{
    public static void main(String\[\] args) \{

    \}
\}

~~!!!==\#==!!!~~
//garage/Car.java
package garage;

public class Car \{
    private String brand;
    private int hp;
    private int maxSpeed;
    private double price;

    public Car(String brand, int maxSpeed, double price) \{
        this.setBrand(brand);
        this.setMaxSpeed(maxSpeed);
        this.setPrice(price);
    \}

    public String getBrand() \{
        return brand;
    \}

    private void setBrand(String brand) \{
        this.brand = brand;
    \}

    public double getPrice() \{
        return price;
    \}

    private void setPrice(double price) \{
        this.price = price;
    \}

    public int getMaxSpeed() \{
        return maxSpeed;
    \}

    private void setMaxSpeed(int maxSpeed) \{
        this.maxSpeed = maxSpeed;
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
//garage/Garage.java
package garage;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class Garage \{
    private List\<Car\> cars;

    public Garage() \{
        this.cars = new ArrayList\<\>();
    \}

    public List\<Car\> getCars() \{
        return Collections.unmodifiableList(this.cars);
    \}

    public int getCount() \{
        return this.cars.size();
    \}

    public List\<Car\> findAllCarsWithMaxSpeedAbove(int speed) \{
        List\<Car\> cars = this.cars.stream().filter(c -\> c.getMaxSpeed() \> speed).collect(Collectors.toList());
        return null;
        //return cars;
    \}

    public void addCar(Car car) \{
        if (car == null) \{
            throw new IllegalArgumentException("Car can't be null");
        \}

        this.cars.add(car);
    \}

    public Car getTheMostExpensiveCar() \{
        Car car = this
                .cars
                .stream()
                .sorted((c1, c2) -\> Double.compare(c2.getPrice(), c1.getPrice()))
                .limit(1)
                .findFirst()
                .orElse(null);

        return car;
    \}

    public List\<Car\> findAllCarsByBrand(String brand) \{
        List\<Car\> cars = this.cars.stream().filter(c -\> c.getBrand().equals(brand)).collect(Collectors.toList());

        return cars;
    \}
\}

~~!!!==\#==!!!~~
//garage/Main.java
package computers;

import java.util.Scanner;

public class Main \{
    public static void main(String\[\] args) \{

    \}
\}

~~!!!==\#==!!!~~
//garage/Car.java
package garage;

public class Car \{
    private String brand;
    private int hp;
    private int maxSpeed;
    private double price;

    public Car(String brand, int maxSpeed, double price) \{
        this.setBrand(brand);
        this.setMaxSpeed(maxSpeed);
        this.setPrice(price);
    \}

    public String getBrand() \{
        return brand;
    \}

    private void setBrand(String brand) \{
        this.brand = brand;
    \}

    public double getPrice() \{
        return price;
    \}

    private void setPrice(double price) \{
        this.price = price;
    \}

    public int getMaxSpeed() \{
        return maxSpeed;
    \}

    private void setMaxSpeed(int maxSpeed) \{
        this.maxSpeed = maxSpeed;
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
//garage/Garage.java
package garage;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class Garage \{
    private List\<Car\> cars;

    public Garage() \{
        this.cars = new ArrayList\<\>();
    \}

    public List\<Car\> getCars() \{
        return Collections.unmodifiableList(this.cars);
    \}

    public int getCount() \{
        return this.cars.size();
    \}

    public List\<Car\> findAllCarsWithMaxSpeedAbove(int speed) \{
        List\<Car\> cars = this.cars.stream().filter(c -\> c.getMaxSpeed() \> speed).collect(Collectors.toList());

        return cars;
    \}

    public void addCar(Car car) \{
        if (car == null) \{
            throw new IllegalArgumentException("Car can't be null");
        \}

        //this.cars.add(car);
    \}

    public Car getTheMostExpensiveCar() \{
        Car car = this
                .cars
                .stream()
                .sorted((c1, c2) -\> Double.compare(c2.getPrice(), c1.getPrice()))
                .limit(1)
                .findFirst()
                .orElse(null);

        return car;
    \}

    public List\<Car\> findAllCarsByBrand(String brand) \{
        List\<Car\> cars = this.cars.stream().filter(c -\> c.getBrand().equals(brand)).collect(Collectors.toList());

        return cars;
    \}
\}

~~!!!==\#==!!!~~
//garage/Main.java
package computers;

import java.util.Scanner;

public class Main \{
    public static void main(String\[\] args) \{

    \}
\}

~~!!!==\#==!!!~~
//garage/Car.java
package garage;

public class Car \{
    private String brand;
    private int hp;
    private int maxSpeed;
    private double price;

    public Car(String brand, int maxSpeed, double price) \{
        this.setBrand(brand);
        this.setMaxSpeed(maxSpeed);
        this.setPrice(price);
    \}

    public String getBrand() \{
        return brand;
    \}

    private void setBrand(String brand) \{
        this.brand = brand;
    \}

    public double getPrice() \{
        return price;
    \}

    private void setPrice(double price) \{
        this.price = price;
    \}

    public int getMaxSpeed() \{
        return maxSpeed;
    \}

    private void setMaxSpeed(int maxSpeed) \{
        this.maxSpeed = maxSpeed;
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
//garage/Garage.java
package garage;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class Garage \{
    private List\<Car\> cars;

    public Garage() \{
        this.cars = new ArrayList\<\>();
    \}

    public List\<Car\> getCars() \{
        return Collections.unmodifiableList(this.cars);
    \}

    public int getCount() \{
        return this.cars.size();
    \}

    public List\<Car\> findAllCarsWithMaxSpeedAbove(int speed) \{
        List\<Car\> cars = this.cars.stream().filter(c -\> c.getMaxSpeed() \> speed).collect(Collectors.toList());

        return cars;
    \}

    public void addCar(Car car) \{
        if (car == null) \{
            throw new IllegalArgumentException("Car can't be null");
        \}

        this.cars.add(car);
    \}

    public Car getTheMostExpensiveCar() \{
        Car car = this
                .cars
                .stream()
                .sorted((c1, c2) -\> Double.compare(c2.getPrice(), c1.getPrice()))
                .limit(1)
                .findFirst()
                .orElse(null);
        return null;
        //return car;
    \}

    public List\<Car\> findAllCarsByBrand(String brand) \{
        List\<Car\> cars = this.cars.stream().filter(c -\> c.getBrand().equals(brand)).collect(Collectors.toList());

        return cars;
    \}
\}

~~!!!==\#==!!!~~
//garage/Main.java
package computers;

import java.util.Scanner;

public class Main \{
    public static void main(String\[\] args) \{

    \}
\}

~~!!!==\#==!!!~~
//garage/Car.java
package garage;

public class Car \{
    private String brand;
    private int hp;
    private int maxSpeed;
    private double price;

    public Car(String brand, int maxSpeed, double price) \{
        this.setBrand(brand);
        this.setMaxSpeed(maxSpeed);
        this.setPrice(price);
    \}

    public String getBrand() \{
        return brand;
    \}

    private void setBrand(String brand) \{
        this.brand = brand;
    \}

    public double getPrice() \{
        return price;
    \}

    private void setPrice(double price) \{
        this.price = price;
    \}

    public int getMaxSpeed() \{
        return maxSpeed;
    \}

    private void setMaxSpeed(int maxSpeed) \{
        this.maxSpeed = maxSpeed;
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
//garage/Garage.java
package garage;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public class Garage \{
    private List\<Car\> cars;

    public Garage() \{
        this.cars = new ArrayList\<\>();
    \}

    public List\<Car\> getCars() \{
        return Collections.unmodifiableList(this.cars);
    \}

    public int getCount() \{
        return this.cars.size();
    \}

    public List\<Car\> findAllCarsWithMaxSpeedAbove(int speed) \{
        List\<Car\> cars = this.cars.stream().filter(c -\> c.getMaxSpeed() \> speed).collect(Collectors.toList());

        return cars;
    \}

    public void addCar(Car car) \{
        if (car == null) \{
            throw new IllegalArgumentException("Car can't be null");
        \}

        this.cars.add(car);
    \}

    public Car getTheMostExpensiveCar() \{
        Car car = this
                .cars
                .stream()
                .sorted((c1, c2) -\> Double.compare(c2.getPrice(), c1.getPrice()))
                .limit(1)
                .findFirst()
                .orElse(null);

        return car;
    \}

    public List\<Car\> findAllCarsByBrand(String brand) \{
        List\<Car\> cars = this.cars.stream().filter(c -\> c.getBrand().equals(brand)).collect(Collectors.toList());
        return null;
        //return cars;
    \}
\}

~~!!!==\#==!!!~~
//garage/Main.java
package computers;

import java.util.Scanner;

public class Main \{
    public static void main(String\[\] args) \{

    \}
\}

~~!!!==\#==!!!~~
//garage/Car.java
package garage;

public class Car \{
    private String brand;
    private int hp;
    private int maxSpeed;
    private double price;

    public Car(String brand, int maxSpeed, double price) \{
        this.setBrand(brand);
        this.setMaxSpeed(maxSpeed);
        this.setPrice(price);
    \}

    public String getBrand() \{
        return brand;
    \}

    private void setBrand(String brand) \{
        this.brand = brand;
    \}

    public double getPrice() \{
        return price;
    \}

    private void setPrice(double price) \{
        this.price = price;
    \}

    public int getMaxSpeed() \{
        return maxSpeed;
    \}

    private void setMaxSpeed(int maxSpeed) \{
        this.maxSpeed = maxSpeed;
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
