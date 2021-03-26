# "Тhrowing" Exceptions

[slide hideTitle]

# How to throw an Exception

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/EN/Java-Advanced-Exceptions-and-Error-Handling-18-throwing-exceptions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Exceptions are thrown using the **throw** keyword. 

Exceptions are used to notify the person running the code in case of an error occurring or the program producing unexpected results. 

**When an exception is "thrown"**: 

- The program execution stops

- The exception travels over the stack until a matching catch block is reached to handle it 
   
   
Unhandled exceptions display an error message and the program execution ends.

[/slide]

[slide hideTitle]

# Using the "throw" Keyword

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/EN/Java-Advanced-Exceptions-and-Error-Handling-20-using-throw-keyword-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- Throwing an exception with an error message:

```java
throw new IllegalArgumentException("Invalid amount!");
```
- Exceptions can contain a message and a cause:

```java
try {
  …
} catch (SQLException sqlEx) {
  throw new IllegalStateException("Cannot save invoice.", sqlEx);
}
```

[/slide]

[slide hideTitle]

# Re-Throwing Exceptions

[video src="https://videos.softuni.org/hls/Java/Java-Advanced/05-Exception-Handling/EN/Java-Advanced-Exceptions-and-Error-Handling-21-re-throwing-exceptions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- Caught exceptions can be re-thrown again:

```java
try {
   Integer.parseInt(str);
} catch (NumberFormatException ex) {
   System.out.println("Parse failed!");
   throw ex; // Re-throw the caught exception
}
```
**Example:**

```java
public static double sqrt(double value) {
  if (value < 0)
    throw new IllegalArgumentException(
			"Sqrt for negative numbers is undefined!");
  return Math.sqrt(value);
}

public static void main(String[] args) {
  try {
     sqrt(-1);
  } catch (IllegalArgumentException ex) {
     System.err.println("Error: " + ex.getMessage());
     ex.printStackTrace();
  }
}
```
[/slide]


[slide hideTitle]

# Problem with Solution: Valid Person

Define a simple class called **Person**, which has the following fields:

 - first name
 - last name 
 - age

**Validate** the data in the **setters**.
 
**Throw** appropriate **exceptions** in case invalid data is entered.

- **Step 1: Create a Class Person**

The class should contain the following fields: 

- first name (String)
- last name (String)
- age (int)

All fields are **required**, meaning you should have one constructor accepting all three as **parameters**. 

For example:

```java
public class Person {
   private String firstName;
   private String lastName;
   private int age;

   public Person (String firstName, String lastName, int age) {
       // TODO: add setters and validate data

   }

   //TODO: add getters and setters
   
}
```

- **Step 2: Add Getters and Setters and Validate the Data**

Add **getters and setters** for each of the fields. 

Perform validations in their **setters** to keep the state of the **Person** objects correct.

The **first** and **last name** cannot be **null** nor **empty** strings. 

Use the `string.IsNullOrEmpty()` method.

The **age** must be in range [0 … 120].

If the provided data is **invalid**, **throw** the appropriate exceptions with descriptive **messages**.

For example, if the **name** is an **empty string**, an appropriate exception is an **IllegalArgumentException**.

Example for validating the **first name**:

```java
private void setFirstName (String firstName) {
   if (firstName.isBlank ()) {
      throw new IllegalArgumentException ("The first name cannot be null or empty");
   }

   this.firstName = firstName;
}
```
Example for validating the **age**:

```java
private void setAge (int age) {
   if (age < 0 || age > 120) {
      throw new IllegalArgumentException("Age should be in the range [O...120]");
   }

   this.age = age;
}
```

The constructor should use the **setters** instead of modifying the private fields directly:

```java
public Person (String firstName, String lastName, int age) {
   this.setFirstName(firstName);
   this.setLastName(lastName);
   this.setAge(age);
}
```

- **Step 3: Test the Person Class**

In the **Main** class, test whether the class behaves correctly. 

Create several objects of type **Person** – one with **valid data**, one with an **empty string for the first name**, 
one with **null for the last name**, one with a **negative age** and one with an **age higher than 120**. 

Check whether executing the code results in errors in cases where the entered data is invalid. 

Test the invalid cases one by one.

Comment out the other invalid lines of code.

Note: The program will stop executing when the first error occurs.

```java
public static void main(String[] args) {
   Person peter = new Person ( firstName: "Franco", lastName : "Aimee", age: 19);

   Person noName = new Person ( firstName: " " lastName: "Aimee", age: 19);
   Person noLastName = new Person ( firstName: "Franco", lastName: null, age: 19);
   Person negativeAge new Person ( firstName: "Franco", lastName: "Aimee", age: -1);
   Person validPerson = new Person ( firstName: "Franco", lastName: "Aimee", age: 121);
}
```

- **Step 4: Add Try-Catch Blocks**

To prevent the program from stopping, surround the invalid lines in **try-catch** blocks. 

It is good practice to put different **catch blocks** for different types of errors that you anticipate.


Example:

```java
try {
      Person noName = new Person ( firstName: " ", lastName: "Aimee", age: 19);
      
} catch (IllegalArgumentException ex) {
      System.out.println("Exception thrown: " + ex.getMessage());
}

// Result in console:
// Exception thrown: The first name cannot be null or empty
```

[/slide]

