# NUnit Basics

[slide hideTitle]

# Test Classes and Test Methods


[video src="https://videos.softuni.bg/hls/PROFESSIONAL-MODULES/QA/2021-04-QA-Automation/02.Unit-Testing/5.nunit-basics-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

To be able to work with **NUnit** framework you will need **3** main components:

The **main** component that you will need is the "**NUnit**". 

**NUnit** package itself contains the framework, the assertions and the attributes inside. All core components are inside this package.

We need the **NUnit3TestAdapter** that will provide the function to run our tests in **Visual Studio** 

The third element is the **Microsoft.NET.Test.Sdk** that will allow us to integrate the testing framework with .NET core.

[image assetsSrc="Unit-Testing-NUnit(12).png" /]

Let's take a look at the **Test Classes and Test Methods**.

The first and main element is importing the **NUnit framework**:

```csharp
using NUnit.Framework;
```

The second attribute that is **optional** is the so called "**TestFixture**".

They marks a class that contains tests and methods.

```csharp
[TestFixture]
```

The test class contains the `[Test]` annotation.

The name of the method must be easy understandable and point what part we are testing and how.

```csharp
using NUnit.Framework;

[TestFixture]
public class SummatorTests 
{
  [Test]
  public void Test_SumTwoNumbers() 
  {
    var sum = Sum(new int[] {1, 2});
    Assert.AreEqual(3, sum);
  }
}

```


[/slide]

[slide hideTitle]

# Initialization and Cleanup Methods


Sometimes we will have a more expensive and heavy operations that will take a time.

Having this in mind, we can **pre-initialize** our **Summator**.

```csharp
private Summator summator;
```

Then in the **SetUp** method we can initialize the **Summator** itself.

```csharp
[SetUp] // or [OneTimeSetUp]
public void TestInitialize()
{
  this.summator = new Summator();
}

```

This method will be executed **before each test**.

```csharp
[TearDown] // or [OneTimeTearDown]
public void TestCleanup()
{
  // … 
}
```

Finally the **TearDown** method will be executed **after each test**.


[/slide]