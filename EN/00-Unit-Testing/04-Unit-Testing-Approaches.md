# Types of Unit Testing

[slide hideTitle]

# Development Approaches

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/01.JS-Applications-Unit-Testing/EN/interactive-js-apps-unit-testing-16-17-18-19-20-unit-testing-approaches-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

## Code-First

This is a classical approach, where the functionality, is implemented and then the tests are written.

It is not uncommon to have no unit tests at all but this is considered bad practice.

The code first approach is quite popular and widely used.


[/slide]

[slide hideTitle]
# Test-Driven Development

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/01.JS-Applications-Unit-Testing/EN/interactive-js-apps-unit-testing-20-test-driven-development-example-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

With the **Test-First** approach, also known as Test-Driven Development, we write the tests **before** the actual code. 

Everything that can be tested is first described with tests, after which code is written to satisfy the conditions of these tests and ensure they pass.

We keep rerunning the tests and making sure any code we write works.

This way we will **always** know whether our code produces the expected results or not. 

In **Test-Driven Development** we follow these steps:

- Create a test list
- Pick a test
- Compose it 
- Compile and fail
- Write enough code to compile
- Run a test and fail
- Write code to pass the test 
- Remove duplication

[/slide]

[slide hideTitle]
# Why TDD is a better approach?

[video src="https://videos.softuni.org/hls/Javascript/Javascript-Applications/01.JS-Applications-Unit-Testing/EN/interactive-js-apps-unit-testing-21-why-test-driven-development-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- TDD (Test Driven Development) helps find **issues** in an **early** stage of the project and avoid having to rework parts of our code

- Increases the reliability of your code

- Writing code to **satisfy** certain conditions helps us acquire greater focus in the process

- If we create the tests before writing the code, usually they will be more **comprehensive**

- Saves project costs in the long run, fewer bugs means less time spent on fixing them

- Reduces the time required for project development, maintenance will typically be much easier for projects created using TDD

- You are essentially creating documentation while writing the tests

[/slide]
