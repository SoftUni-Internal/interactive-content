# Unit Testing

[slide hideTitle]
# Testing

Testing is a phase in the software development life cycle right so when you build software the software should work and should work efficiently and correctly.

So then we should test the software and testing is important.

We have two types of testing:

- **Manual testing:** is testing everything manually so you are taking the outputs you are giving some input
- **Automation testing:** is to write code to automate our testing

In Java JUnit library is used for automation testing.

In different languages, we have defined ways of testing.

We have one more classification of testing which:

- **Functional testing:** it simply means we are testing the code

For example, if we have multiple classes and multiple methods we are testing them so we are testing the actual working on the software.

- **Non-functional testing:** is testing the performance and scalability of the software

An example of good performance is when the software works smoothly and does not give any lag.

When we play a game it should give a proper performance.

When we scale our application and deploy an application on the cloud.

We should not just build software that works but cannot be scaled.

We have two techniques of testing:

- **Black box:**

For example, when we buy a new phone we do not know how this phone works internally.

So what we do is to unlock the phone, test if the camera is working, then test the screen, etc.

What we do is to test the phone outside we do not know what is going on inside, we give the input and expect the output.

- **White box:**

In a white box testing, we do not just test does the phone work, but we open and check each component how does it work.

In coding terms, we will check if the code is correctly written.

There is also four levels of testing:

- **Unit testing:**

In Java we have classes and each class will have certain methods so if we want to test the smallest part of our software which is a class.

So we will test a class and we will call it a unit, we will test each class which is units and this is called **unit testing**.

In Java, if we want to achieve that we have JUnit.

- **Integration testing:**

When we test each component we could combine all the components to test them as software which is **integration testing**.

Integration testing is when we combine a lot of different classes and test them as a whole.

- **System testing:**

When we do unit testing and integration testing we could combine them and do **system testing**.

If our system is deployed and how that works with other software and with the actual data.

- **Acceptance testing:** is when we match our software with the client's requirement

We have a business requirement and we will try to match them with our application's logic.

[/slide]

[slide hideTitle]

# Unit Testing

Unit testing is to segregate each part of the program and test each part individually to check if they are working properly or not.

It isolates the smallest piece of testable software from the remainder of the code and determines if it behaves exactly as we expected and according to the requirements.

Those small pieces of software are usually referred to as unit, and they can be almost anything. 

It can be a line of code, method or a class or some sort of program or a part of application program.

Unit tests gives us much more granular view of how the code, it is performing at basic level.

There is also the practical aspect that when we test very small units the test can run very fast what way we can tests more units quickly.

Unit testing is usually performed at the earlier stages of development process and in many cases it is executed by the developers themself before handing the software over to testing.

[/slide]

[slide hideTitle]

# Mocking

We have a service which gets all the data from the database, and what this service is doing is to finding the greatest number from all numbers.

If we want to test this class we would want to write a unit test, but what would happen is our tests depending on the data in the database.

This way our unit test is having an external dependency and they are never stable data in the database, so even the logic is right, our test may fail.

We should not write tests depending on something external we would want to write tests which are not dependent on changing data.

To write tests which are not depending on external database we can create a mock for this specific data service.

When mocking we create a mock of a specific class and in this example with mocks we can return specific data back.

So we are controlling what data comes back from the data service, so we know what logic will be executed and we can write classes for our business logic when we know that we well receive exactly the same input.

[/slide]

[slide hideTitle]

# Benefits

Unit testing provides numerous benefits including finding software bugs, facilitating change simplifying integration, providing a source of documentation and many others.

Unit testing makes coding process more controlable when we add more and more features to software we sometimes need to change old design.

Changing already tested code is both risky and extremely costly if we have unit tests in place then we can proceed for refactoring very confidently because we know that each part of a code is working properly.

Unit testing improves the quality of the code, it identifies every defect that may have come up before the code is sent for further testing.

Unit testing the code makes it more reusable this means that codee is easier to reuse when we perform unit testing.

Unit testing also helps find software bugs early since unit testing is usually carried out by developers who test individual code before integration issues can be found.

This helps of fixing the bugs early and can be resolved easily without impacting other pieces of code and avoid spending too much resources.

Unit testing also facilitates changes and it simplifies integration, it allows programmers to refactor code and upgrade system libraries and make sure that the module still is working properly 

Unit testing actually verifies the accuracy of each unit after what the units are integrated into an application.

Unit testing provides documentation to developers so it is basically drag and it shows mostly how little code documentation gets written.

Unit testing can make the documentation burden a little easier by encouraging better coding practices and also leaving behind the piece of code that describe what the program is actually going to achieve.

[/slide]