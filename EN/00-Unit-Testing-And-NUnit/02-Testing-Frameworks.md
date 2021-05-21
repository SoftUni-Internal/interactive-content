[slide hideTitle]

# Testing Frameworks

[video src="https://videos.softuni.bg/hls/PROFESSIONAL-MODULES/QA/2021-04-QA-Automation/02.Unit-Testing/3.testing-frameworks-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Unit testing frameworks execute the tests and generate reports.

When developers use the testing frameworks:
- When they want to **organize** them in a hierarchy using classes and functions
- In need to **assert** the execution results and exit conditions for correctness
- To handle some specific situations (like "**expected error**" or "**expected timeout**") and to **automate** some aspects of the testing process
(like initializing the testing environment at startup and cleaning it up at shutdown).

**Examples** of unit testing frameworks are:

- **Mocha** testing framework for JavaScript
- **JUnit** framework for Java
- **xUnit** framework for C#
- **Chai** framework for ReactJS and many more...

# Testing Framework Examples:

Unit testing frameworks simplify, structure, and organize the unit testing process, test execution, and reporting.

Let's see the following example:

```c#
using NUnit.Framework;

public class SummatorTests {
    [Test]
    public void Test_SumTwoNumbers() {
        var sum = Sum(new int[] {
            1,
            2
        });
        Assert.AreEqual(3, sum);
    }
}
```

This **example** shows how the test cases from the previous example can be structured within the NUnit framework for C#.

First thing is to include the required **libraries**.

Then, we simply define the **test class**.

The **test** holds a function to check whether the sum of the array [1, 2] is 3.

When we run the tests, we see a test execution report like this, shown on the screenshot below.

[image assetsSrc="Unit-Testing-NUnit.png" /]

Unit test writers usually follow the **"AAA pattern"** which we will cover later in this lesson.

Unit Testing usually covers:

- The straightforward case – the typical use of the function

- The **edge cases** (such as an empty array or negative numbers)

- Performance, error handling, and much more

[/slide]