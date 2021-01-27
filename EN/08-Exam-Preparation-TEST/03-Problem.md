[slide]
# Problem: Easter Races Unit Tests
[code-task title="Problem: Easter Races Unit Tests" taskId="5849c64b-145e-4719-8d5a-648d35325c96" executionType="tests-execution" executionStrategy="java-code" requiresInput]
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

Download the skeleton from here [mega.nz](https://mega.nz/file/2BwikYCL#1mBhMzd6XeSo-RVEULyleUogP7CjlwsLZ9Tu1llpgzk)

You will receive a skeleton with one class inside. 

The class will have some methods, fields and constructors. 

Cover the whole class with unit test to make sure that the class is working as intended.


[/task-description]
[code-io /]
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