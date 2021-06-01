# "AAA" Pattern

[slide hideTitle]

# The "AAA" Testing Pattern

[video src="https://videos.softuni.bg/hls/PROFESSIONAL-MODULES/QA/2021-04-QA-Automation/02.Unit-Testing/6.The-AAA-pattern-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


This is a **must-know** pattern when creating unit tests.

The AAA pattern (**Arrange-Act-Assert**) has become the **standard** testing pattern in the software industry.

The basis of this pattern is that all tests should follow a default layer.

Let us take a look at this simple example:

```csharp
[Test]
    public void testCalculatorMultiplying() 
    {
        // Arrange - prepare required data
        Calculator calculator = new Calculator();
        var expectedResult = 8;

        // Act - call tested code unit
        var result = calculator.multiply(2, 4);

        // Assert - check if returned output result equals expectedResult
        Assert.AreEqual(expectedSum, actualSum)
    }
```

First, we should **аrrange** all conditions for the testing system.

Then we take the actions **аct**, which aim to produce a certain result.

Finally, we check **аssert** if the expected output matches the generated output.

[/slide]