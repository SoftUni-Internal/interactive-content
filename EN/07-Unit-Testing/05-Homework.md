[slide]

# Homework

Download the resources: [mega.nz](https://mega.nz/file/GMB1SIoS#t1uL18rgy0jW9rOcspgLbV_kL0xUt9q2_zBXR2Bz0ZE)

# Problem: Database

You are given a simple class - **Database**. It **stores Integers.** Your task is to **test the class.** 

Write **tests**, so you are sure its methods are working as intended.

## Constraints

- Storing array's **capacity** must be **exactly 16 integers.**

  * If the size of the array is not 16 integers long, throw **OperationNotSupportedException**.

- **Add** operation, should **add an element at the next free cell.** (just like a stack)

  * If passed element is null throw **OperationNotSupportedException**.

- **Remove** operation, should support only removing an element **at the last index.** (just like a stack)

  * If you try to remove element from empty Database throw **OperationNotSupportedException**

- **Constructors** should take integers only, and store them in **array.**

- **Fetch method** should return the elements as **array.**


## Hint

Do not forget to **test the constructor(s).** They are methods too!




[/slide]

[slide]

# Problem: Extended Database

You already have a class - Database. This time it is extended. 

There are the following provided methods:  adding, removing and finding People. 

In other words, it should store People. There should be two types of finding methods - first: findById (long id) and the second one: findByUsername (String username).

As you may guess, each person should have its own unique id, and unique username. Your task is to test these functions.

## Constraints

Database should have methods:

- add

  * If there are multiple users with this id, throw **OperationNotSupportedException**.

  * If negative or null ids are present, throw **OperationNotSupportedException**. 

- remove

- findByUsername

  * If no user is present by this username, throw **OperationNotSupportedException**.

  * If username parameter is null, throw **OperationNotSupportedException**.

  * Arguments are all CaseSensitive!

- findById

  * If no user is present by this id, throw **OperationNotSupportedException**.

## Hint

Do not forget to test the constructor(s). They are methods too!



[/slide]

[slide]

# Problem: Iterator Test

You are given a simple class "ListIterator", it should receive the collection (Strings) which it will iterate, through its constructor. You should store the elements in a List and get them initially through its constructor. If there is null passed to the constructor, throw new **OperationNotSupportedException**. The class should have three main functions:

- **Move** - should move an internal index position to the next index in the list, the method should return true if it successfully moved and false if there is no next index.
- **HasNext** - should return true if there is a next index and false if the index is already at the last element of the list.
- **Print** - should print the element at the current internal index, calling Print on a collection without elements should throw an appropriate exception with the message **"Invalid Operation!".** 

| **Command** | **Return Type** | **Description** |
| --- | --- | --- |
| Move | boolean | This command should move the internal index to the next index. |
| Print | void | This command should return the element at the current internal index. |
| HasNext | boolean | Returns whether the collection has a next element. |

## Test 

Create tests, so you are sure all methods in the class ListIterator are working as intended.

## Constraints

- There will always be only **1 Create** command and it will always be the first command passed.
- The last command will always be the only **END** command.

## Examples

| **Input** | **Output** |
| --- | --- |
| Create | Invalid Operation! |
| Print | 
| END | 
| --- | --- |
| Create Bob George | true |
| HasNext | Bob |
| Print | true |
| Move | George |
| Print |
| END |
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


[slide]

# Problem: Custom Linked List

You are given a data structure that needs to be tested. Use the Java file **CustomLinkedList.java** and:

- Create Test Class and Test Methods for **all public members** that need testing.

- Create tests that ensure all methods, getters and setters **work correctly.**

- Use the **@Test(expected = ExpectedException.class)** annotation for methods that are expected to throw exception in case wrong input is entered (those tests don’t need assert messages).

- Give **meaningful assert messages** for failed tests.


[/slide]

[slide]

# Problem: Tire Pressure Monitoring System

You are given a small project for a system which monitors the pressure in car tires. Your task is to write unit tests for the system. You will need to use mocking in order to pass dependencies. Think about the corner cases of the project

[/slide]