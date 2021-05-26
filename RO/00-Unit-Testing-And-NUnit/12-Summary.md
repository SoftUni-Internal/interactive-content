# Summary

[slide hideTitle]

# In this lesson we learned:

[video src="https://videos.softuni.bg/hls/PROFESSIONAL-MODULES/QA/2021-04-QA-Automation/02.Unit-Testing/13.summary-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

- What Unit Testing is

- Testing Frameworks
  - NUnit. How to install it and how to configurate it.

- The **AAA** pattern:
  - how to properly structure our tests.

```csharp
[Test]
    public void testCalculatorMultiplying() 
        // Arrange - prepare required data
        Calculator calculator = new Calculator();
        var expectedResult = 8;

        // Act - call tested code unit
        var result = calculator.multiply(2, 4);

        // Assert - check if returned output result equals expectedResult
        Assert.AreEqual(expectedSum, actualSum)
    }
```

- Code Coverage
  - what describes the "Code Coverage" measurement.
  - different code coverage tools.

- Mocking 
 - what is the concept behind **"Mocking"**
 - how we mock different functions

## In the next lesson you will learn:

- API Testing
  - overview

- Api Testing Tools


[/slide]


