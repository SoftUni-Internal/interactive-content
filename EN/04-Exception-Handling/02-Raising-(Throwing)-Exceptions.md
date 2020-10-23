
[slide]

# Raising (Throwing) Exceptions

Exceptions are thrown (raised) by the **throw** keyword.

Used to notify the calling code in case of an error or unusual situation.

**When an exception is thrown:**
- The program execution stops
- The exception travels over the stack
   - Until a matching catch block is reached to handle it
   
Unhandled exceptions display an error message.

## Using Throw Keyword

- Throwing an exception with an error message:

```java
throw new IllegalArgumentException("Invalid amount!");
```
- Exceptions can accept message and cause:

```java
try {
  …
} catch (SQLException sqlEx) {
  throw new IllegalStateException("Cannot save invoice.", sqlEx);
}
```
**Note:** if the original exception is not passed, the initial cause of the exception is lost

## Re-Throwing Exceptions

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


[slide]

# Problem: Valid Person

Define a simple class **Person**, which has the following fields:

 **first name**, **last name** and **age.**

**Validate** the data in the **setters**, **throw** appropriate **exceptions** in case invalid data is entered.

[/slide]

[slide]

# Solution: Valid Person

## Step 1. Create a Class Person

Create a class **Person**. The class should contain the following fields: 
**first name (String), last name (String) and age (int)**.

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

## Step 2. Add Getters and Setters and Validate the Data

Add a **getters and setters** for each of the fields. 

Perform validations in their **setters** to keep the state of the **Person** objects correct.

The **first** and **last name** cannot be **null** or **empty** strings. 

To check this, use the **string.IsNullOrEmpty()** method.

The **age** must be in the range **[0 … 120].**

If invalid data is entered, **throw** appropriate exceptions with descriptive **messages**. 

E.g., if an empty name is entered, an appropriate exception may be **IllegalArgumentException**.

Example for validating the **first name** (last name is analagous):

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
   if (age <0 || age > 120) {
      throw new IllegalArgumentException ("Age should be in the range [O...120]");
   }

   this.age = age;
}
```

Now the constructor should make use of the setters instead of modifying the private fields directly:

```java
public Person (String firstName, String lastName, int age) {
   this. setFirstName (firstName);
   this.setLastName (lastName);
   this.setAge (age);
}
```

## Step 3. Test the Person Class
In your main program, test whether your class behaves properly. 

Create several objects of type Person – one with **valid data**, one with an **empty first name**, 
one with **null as last name**, one with **negative age** and one with **age > 120**. 

Check whether executing the code results in errors, when bad data is provided. 

Test the invalid cases one by one by commenting out the other invalid lines of code (your program will stop executing when the first error is encountered).

```java
public static void main(String[] args) {
   Person peter = new Person ( firstName: "Franco", lastName : "Aimee", age: 19);

   Person noName = new Person ( firstName: " " lastName: "Aimee", age: 19);
   Person noLastName = new Person ( firstName: "Franco", lastName: null, age: 19);
   Person negativeAge new Person ( firstName: "Franco", lastName: "Aimee", age: -1);
   Person toooldForThisProgram = new Person ( firstName: "Franco", lastName: "Aimee", age: 121);
}
```

## Step 4. Add Try-Catch Blocks

To prevent the program from blowing up, surround the invalid lines in **try-catch** blocks. 

It’s a good practice to put different catch blocks for the different types of errors you anticipate the operation might throw. 

Print the **message** of the exception in the catch block.

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
