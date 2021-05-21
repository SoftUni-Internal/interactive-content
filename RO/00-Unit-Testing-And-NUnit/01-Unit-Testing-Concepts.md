[slide hideTitle]

# What is Unit Testing?

[video src="https://videos.softuni.bg/hls/PROFESSIONAL-MODULES/QA/2021-04-QA-Automation/02.Unit-Testing/2.unit-testing-concepts-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Unit Testing is an important concept and practice in software development.

In the Unit Testing technique, individual components called **units** are tested.

The main reason is to validate that each specific **unit** performs as expected.

Unit Tests isolate a chunk of code **assuring** and **verifying** its accuracy.

Unit tests are part of the product source code. They aim to improve the code **quality**, **reliability**, and **maintainability**.

Let's see a simple example to illustrate the idea behind "**unit testing**":

```csharp
int Sum(int[] arr) {
    int sum = arr[0];
    for (int i = 1; i < arr
        .Length; i++)
        sum += arr[i];
    return sum;
}
```

We have a function, which sums the elements of a given array of numbers.

We want to test this function, but not by hand.

So, let's write code, which confirms that this function works correctly.

The first test case will check if the sum of the array elements \[1,2\] is **3**.

```java
void Test_SumTwoNumbers() {
        if (Sum(new int[] {
                1,
                2
            }) != 3)
            throw new Exception("1+2 != 3");
}

```

If the execution result is not as expected, the function will **fail with an error**.

Let's see one more test:

```java
void Test_SumEmptyArray() {
    if (Sum(new int[] {}) != 0)
        throw new Exception("sum [] != 0");
}

```

The second test checks whether the sum of an **empty array** is **0**.

This example is just a simple way to illustrate the concept of "unit testing".

Most of the time it is a **bad practice** to combine a **multiple** test cases in a single test function.

A very general way of explaining the unit testing concept is that:

Unit tests execute the code with sample input data and entrance conditions and **check whether the returned result, exit conditions, and behavior are correct**.

There are different **unit testing frameworks**. They structure the tests consistently.

**Unit Testing** consists of different "testing" levels:

- Unit Testing
- Integration Testing
- System Testing

[/slide]

# Different Test Levels

[slide hideTitle]

# Unit Tests

Unit tests take a single component (called "**unit**") and test it.

This can be a **function** or **method** in the code, a **class** or other code component.

For example, a set of unit tests can demonstrate that the service for **registering a new user** checks for duplicated usernames and invalid passwords.

When the input data is correct, it stores the **new user** in the user **repository**.

In this case, the unit test will not use a real database. Instead, it will use a **fake implementation (mock)** of the functions for accessing the user repository.

This way the unit tests check **only certain component**, isolated from the other components, which may not exist at this time.

Unit tests are **automated tests, written by developers**.

They examine the functionality of the single component or unit.

Usually, unit testing is performed at the **earliest stages** of the development process, long before the software is developed and ready for testing by QA engineers.

# Integration Tests

Another type of tests are **"Integration Tests"**

They check the interaction between several components.

For example, if we test whether the user registration service in the back-end correctly stores the new user to the database, this is an integration test.

This integration test checks several components together such as:

- The user registration function in the back-end API

- The data access logic and the database

This integration **test does not test the entire system**.

The difference between unit testing and integration testing is that unit tests examine the functionality of a **single unit** and they mock the external dependencies,
while integration tests examine the functionality on **several units together** and test the integration between the dependent units.

Unit Tests have a smaller scope, which is usually a **single public method** (or function).

Integration Tests implement more complex scenarios.

Integration testing is performed early in the development process after some of the components are written and unit tested, and they need to be integrated into modules with more complex functionality.


# System Tests

System tests and acceptance tests test the entire system: all its components together.

They are the most complex and cover **end-to-end scenarios** (from the front-end to the back-end, the database, and all other system components.
)

For example, if we test whether, after **user registration in the mobile app** of a complex software system, the new user is correctly stored in the database at the server-side, this is a **system test**.

This system test checks all system components together:

- It checks the **user interface** (the front-end), which is the mobile app in our scenario

- The **back-end services** at the server-side, which are called by the mobile app

- The **data access logic**, implemented in the back-end to access the database, and the **database server**, which stored the app data.

System testing is performed late in the development process when the entire system is ready or partially ready.

System testing is usually performed by **QA engineers** or **test automation engineers**.

Modern development processes integrate **system testing in the CI/CD pipeline**.

Projects with less QA resources implement **automated smoke tests** during the system testing phase.

The **smoke tests** check whether the most important functionality works in the most common scenarios.

They just check whether the system is broken or not, without verifying each of its functions.

An example of a smoke test could be to check whether the home page of the system opens correctly.

Projects with more QA resources **automate the testing of the entire system** with all its functionality, covering all its use cases.

This approach is heavy and time-consuming and is rarely used.





[/slide]