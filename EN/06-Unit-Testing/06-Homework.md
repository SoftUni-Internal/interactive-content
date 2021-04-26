# Homework

[slide hideTitle]

# Problem: Database

**Here is a link to the** [resources](https://videos.softuni.org/resources/java/java-oop-advanced/07.Java-OOP-Advanced-Unit-Testing-Exercise-Resources.zip) **for these tasks.**

You will receive a simple class - **Database**. 

It **stores Integers.** Your task is to **test the class.** 

Create **tests** to ensure its methods work as intended.

## Constraints

- The storing array's **capacity** must be **exactly 16 integers.**

  * if the size of the array is not 16 integers long, throw **OperationNotSupportedException**

- The **Add** operation - should **add an element at the next free cell** (similarly to a stack)

  * if the passed in element is null, throw **OperationNotSupportedException**

- The **Remove** operation - should support only removing an element **at the last index** (like a stack)

  * if you try to remove an element from an empty Database throw **OperationNotSupportedException**

- **Constructors** should take in integers only, and store them in an **array**

- The **Fetch method** should return the elements as an **array**


## Hint

Do not forget to **test the constructor(s)** as they are methods too.



[/slide]

[slide hideTitle]

# Problem: Extended Database

You already have the Database class. 

Your task is to **extend** it.

It should hold the following methods:  adding, removing, and finding People. 

In other words, it should store information on People. 

There should be two types of search methods:
- `findById (long id)`
- `findByUsername (String username)`

Each person should have their own unique **id** and a unique **username**. 

Your task is to test these functions.

## Constraints

The database should have these methods:

- `add`

  * if there are multiple users with this id, throw **OperationNotSupportedException**

  * if negative or null id-s are present, throw **OperationNotSupportedException**

- `remove`

- `findByUsername`

  * if no user is present with this username, throw **OperationNotSupportedException**

  * if the username parameter is null, throw **OperationNotSupportedException**

  * all arguments are case-sensitive

- `findById`

  * if no user is present with this id, throw **OperationNotSupportedException**

## Hint

Do not forget to test the constructor(s). 



[/slide]

[slide hideTitle]

# Problem: Iterator Test

Use the **resources** you downloaded in the first task.

You are given a simple class `ListIterator`.

It should receive a collection of Strings which it will iterate through, injected through its constructor. 

You should store the elements in a `List`. 

If there is null passed to the constructor, throw an **OperationNotSupportedException**. 

The class should have three main functions:

- `Move` - should move an internal index position to the next index in the list
    * the method should return **true** if it successful and **false** if there is no next index

- `HasNext` - should return true if there is a next index and false if the index is already at the last element of the list

- `Print` - print the element at the current internal index
    * calling `Print` on a collection without elements should throw the appropriate exception with the message **"Invalid Operation!"** 

| **Command** | **Return Type** | **Description** |
| --- | --- | --- |
| Move | boolean | This command should move the internal index to the next index. |
| Print | void | This command should return the element at the current internal index. |
| HasNext | boolean | Checks whether the collection has a next element. |

## Test 

Create tests to ensure all methods in the class `ListIterator` are working as intended.

## Constraints

- There will be only one **Create** command and it will always be the first command passed

- The final command will always be the **END** command

# Examples

## Example 1
| **Input** | **Output** |
| --- | --- |
| Create | Invalid Operation! |
| Print | 
| END | 

## Example 2
| **Input** | **Output** |
| --- | --- |
| Create Bob George | true |
| HasNext | Bob |
| Print | true |
| Move | George |
| Print |
| END |

## Example 3
| **Input** | **Output** |
| --- | --- |
| Create 1 2 3 | true |
| HasNext | true |
| Move | true |
| HasNext | true |
| HasNext | true |
| Move | false |
| HasNext |
| END |


[/slide]


[slide hideTitle]

# Problem: Custom Linked List

Use the **resources** you downloaded in the first task.

You are given a data structure that needs to be tested. 

Use the Java file **CustomLinkedList.java** and:

- Create a test class and test methods for **all public members** that need to be tested

- Create tests that ensure all methods, getters, and setters **work correctly**

- Use the **@Test(expected = ExpectedException.class)** annotation for methods that are expected to throw an exception in case wrong input is entered

    * these tests do not need assert messages

- Use **meaningful assertion messages** for failed tests


[/slide]

[slide hideTitle]

# Problem: Tire Pressure Monitoring System

Use the **resources** from the first task.

You are given a small project for a system which monitors the pressure in car tires. 

Your task is to write unit tests for the system. 

You will need to use **mocking** in order to pass in dependencies. 

Think about the corner cases of the project.

[/slide]
