[slide hideTitle]

# Unit Testing Approach

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/08-Test-Driven-Development/EN/Java-OOP-Advanced-Test-Driven-Development-3-4-Unit-Testing-Approaches-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

When we are creating complex software one of the things we should consider is the **software development approach** which we should choose.

Two of these development approaches are: 

- The Code First Approach (write code then test code)
- Test First Approach (Test-Driven-Development)

Both of these approaches are good, but they are used in different cases.

So far we have always used the **Code-Driven-Approach**, meaning we always wrote the code first, and then we wrote our tests.

What fails us, in this case, is ourselves.

When we write tests for a code that we wrote, we may unconsciously write them so they pass, ignoring some edge cases which may brake our code. 

That is where the **Test-Driven-Approach** comes in place.

[/slide]

[slide hideTitle]

# Tests in Code and Test Approach

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/08-Test-Driven-Development/EN/Java-OOP-Advanced-Test-Driven-Development-5-The-code-and-test-approach-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

With the code and test approach we are having 3 main steps:

1. Write an implementation of the functionalities we need

2. Write unit tests for these functionalities that cover all the cases

3. Run and Succeed or find bugs in the code

[image assetsSrc="Test-Driven-Development-Approach.png" /]

[/slide]

[slide hideTitle]

# Test Driven Development

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/08-Test-Driven-Development/EN/Java-OOP-Advanced-Test-Driven-Development-6-the-test-driven-development-approach-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

There are test cases, that are developed to specify and validate what the code will do.

Test cases are created to test our functionalities and if the tests fail then we need to write a new code that is **bug-free**.

The test-driven development method allows us to go develop tests for every small functionality.

We can consider it as a process that relies on the repetition of a very short development cycle.

Simply, we can say that a test-driven development is used to develop tests before an actual code implementation.

[image assetsSrc="Test-Driven-Development-Approach(1).png" /]

[/slide]

[slide hideTitle]

# Test-Driven-Development Steps

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/08-Test-Driven-Development/EN/Java-OOP-Advanced-Test-Driven-Development-7-test-driven-development-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Let's take a look at the sequence of steps that are followed:

- Create a test list needed to ensure our program is running correctly

- Pick a test

- Write the test for the function that needs to be implemented

- Write just enough code so the program will compile (there is no implementation, so the test will not pass)

- Write a small chunk of code to fit the test (by writing the failing test we ensure that our test is calling the correct code)

- Run all tests (the test will pass now)

- Refactor

- Repeat the process

[image assetsSrc="Test-Driven-Development-Approach(2).png" /]

[/slide]

[slide hideTitle]

# Why TDD

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/08-Test-Driven-Development/EN/Java-OOP-Advanced-Test-Driven-Development-8-Why-TDD-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Let's see some of the advantages of using **TDD**:

- Test-Driven development encourages us to develop simple, clean, and meaningful code

- Another good use case is that developers may spend more time designing the boundary cases needing to be covered by these tests, compared to the traditional approach

- TDD has more and higher test coverage of the code due to higher test density

[/slide]