[slide hideTitle]

# Testing Concepts

Тest-driven **development** (TDD) focuses on unit testing, but they are **, not the same**.

If we write the **logic first** then we write the **test** this can be **considered** unit testing the code (**code-first approach**) but it is **not considered** test-driven development.

TDD is when we write the **tests first** then we write the **application logic**.

We will be writing our tests as if this **logic already exists** it is possible to write tests for code that **does not exist** so we can call **classes** to invoke methods.

The first time we **run these tests** it will **fail** so the TDD way first we write a **failing test** then write the **minimal amount of logic to pass these tests**.

Then we **reflect on the logic** and then run the **test again**, if the test **fails** we go back to the code **until it passes**.

That cycle will keep **repeating itself** until we get the **code** to a **good standard**.

It does not mean that we are going to **write every test** for the **entire project first**.

What we do is to **first write a single** test this could be for a **class** or as just a single **method**, then instantly start to write the **logic** to pass that test.

The **benefits** of TDD are:

- It gives us **clarity** and **direction** while coding classes or a methods 

- Makes clear what we **need** to develop and prevents **scope creep** 

- When we are writing a class all we need to **think** of is "**I am going to write the minimal amount of logic here to pass the test that I already wrote**" 

If we have a **test** that says the **class** is going to **calculate** the power of a certain number and return the **powered number**. 

We are** not going to start writing** other things than you may need **somewhere** down the line.

- If we write your test properly we will then write good **code** that prevents scope creep 

- Another benefit of TDD is it can lead to more **modularized** code due to the focus on building code 

The disadvantage of TDD is that it is complicated and can add "**initial delay**".


[/slide]

[slide hideTitle]

# Common Levels of Software Testing

As we mention in the **beginning** some of the most **common levels** of **Software** Testings are:

- **Unit Testing** - Tests Individual components of code, independent from the infrastructure

- **Component Testing** - Testing of multiple functionalities (a single component)

- **Integration Testing** - Testing of all integrated modules to verify the combined functionality

- **System Testing** - Tests the system as a whole, once all the components are integrated

- **Regression Testing** - Testing that recent program or code change has not adversely affected existing features

- **Acceptance Testing** - Tests if the product meets the client's requirements

Purely done by QAs.

- **Load / Stress Testing** - Test the application's limits by attempting large data processing and introducing abnormal circumstances and conditions (edge cases)

- **Security Testing** - Test if the application has any security flaws and vulnerabilities

- **Other Types of Testing** - Manual, automation, UI, performance, black box, end-to-end testing, etc.

[/slide]

[slide hideTitle]

# Testing

Unit testing **ensures** the correctness of a **particular** unit.

Not testing all **components** may lead to false results.

A single unit may **function correctly**, independent of the infrastructure.

Combining components and testing them **collectively** is necessary.

Every level of testing is **essential** to an application's lifecycle.


## Different Testing Levels

Different Testing levels require **different** times and resources.

If we imagine **testing as a pyramid**, at the bottom of the pyramid **unit tests**, are located, in the middle are **integration** tests and at the top of the pyramid are **functional** tests.

For example, unit tests are **cheaper** and with less **cost/effort** also execution time is very **low**, because of that in a normal **application** they should be as **many** as possible.

On top of the pyramid **tests** are very **expensive** and very **cost/effort** also **execution time is very high**, which means that they should be **less** functional tests.

As a rule of thumb, **functional** tests should be **less** and they should be **organized** in so colled **user journeys**, as opposite of unit tests, which runs constantly and could be a lot more.

[/slide]