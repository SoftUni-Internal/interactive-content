# Test-Driven Development

[slide hideTitle]

# Unit Testing Approaches

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/08-Test-Driven-Development/EN/Java-OOP-Advanced-Test-Driven-Development-3-4-Unit-Testing-Approaches-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

When creating complex software, one of the things we should consider is the **development approach** to choose.

Two of these development approaches are: 

- The Code-First Approach (create code then test it)
- Test-First Approach (Test-Driven Development)

Both of these are good, but they are suitable for different use cases.

So far, we have always used the **code-driven approach** - we always wrote the code first and then the tests.

When we write tests for code that we already wrote, we may unconsciously make them so they pass, ignoring some corner cases which may break our code. 

That is where the **test-driven approach** comes in place.

[/slide]

[slide hideTitle]

# Code and Test Approach

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/08-Test-Driven-Development/EN/Java-OOP-Advanced-Test-Driven-Development-5-The-code-and-test-approach-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

With the code and test approach, we have **three** main steps:

1. Create an implementation of the functionalities we need

2. Write unit tests for these functionalities that cover all cases

3. Run and either succeed or find bugs in the code

[/slide]

[slide hideTitle]

# Test-Driven Development Approach

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/08-Test-Driven-Development/EN/Java-OOP-Advanced-Test-Driven-Development-6-the-test-driven-development-approach-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

There are **test cases** developed to specify and validate what the code will do.

Their purpose is to test our functionalities - if the tests fail, we may need to fix some bugs and functions.

The test-driven development method allows us to develop tests for every small functionality.

We can consider it as a process that relies on the repetition of a development cycle.

Test-driven development is used to develop tests before code implementation.

[/slide]

[slide hideTitle]

# Test-Driven Development - Steps

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/08-Test-Driven-Development/EN/Java-OOP-Advanced-Test-Driven-Development-7-test-driven-development-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Let us take a look at the sequence of steps we should follow:

- Create a test list aiming to ensure our program is running correctly

- Pick a test

- Write the test for the functionality that should be implemented

- Write just enough code so the program will compile (no implementation, so that the test will not pass)

- Write a small chunk of code to fulfill the test (by implementing a failing test, we ensure that our test is calling the correct code)

- Run all tests (the test will pass now)

- Refactor

- Repeat the process


[/slide]

[slide hideTitle]

# Why TDD

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/08-Test-Driven-Development/EN/Java-OOP-Advanced-Test-Driven-Development-8-Why-TDD-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Let us see some of the advantages of using **TDD**:

- Test-driven development encourages us to develop simple, clean, and meaningful code

- Developers have more time for solving the corner cases that must be covered by these tests, compared to the traditional approach

- TDD has higher coverage of the code because of tis higher test density

[/slide]
