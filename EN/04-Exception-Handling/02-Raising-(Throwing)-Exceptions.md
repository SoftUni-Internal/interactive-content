
[slide]

# Raising (Throwing) Exceptions

Exceptions are thrown (raised) by the **throw** keyword.

Used to notify the calling code in case of an error or unusual situation.

**When an exception is thrown:**
- The program execution stops
- The exception travels over the stack
   - Until a matching catch block is reached to handle it
   
Unhandled exceptions display an error message


[/slide]

[slide hideTitle]

# Problem: Valid Person

Define a simple class **Person**, which has the following fields:

 **first name**, **last name** and **age.**

**Validate** the data in the **setters**, **throw** appropriate **exceptions** in case invalid data is entered.

[/slide]

[slide hideTitle]

# Solution: Valid Person

## Step 1. Create a Class Person


[/slide]
