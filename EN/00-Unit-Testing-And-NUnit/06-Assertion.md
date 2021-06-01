# Assertions

[slide hideTitle]

# Checking the Results and Output Conditions

[video src="https://videos.softuni.bg/hls/PROFESSIONAL-MODULES/QA/2021-04-QA-Automation/02.Unit-Testing/7.Assertions-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

An **Assert** statement is a code used during the development process.

The **Assert statements** or **Assertion** simply allows programs to inspect itself as it runs.

The assertion may be true or false. If the result is true, that means everything is operating as expected.

If the result is false, that means there is **unexpected error** in our code.

Assertions are very useful in complicated programs and high-reliability projects.

## Bool Assertions

```csharp
Assert.That(bool condition); // that will assert that condition is true
```

```csharp
Assert.That(actual, Is.EqualTo(expected)); // assert that the given value is equal, greater than, less than as the expected value
```

```csharp
double percentage = 25.55;
Assert.That(percentage, Is.InRange(20, 40)); // assert that the given percentage value is in range 20-40
```

## String Assertions

Let's take a look at some **String Assertions**:

We can use this **testing assertion**:

```csharp
var greeting = "Hi, I learn in Softuni.org";

StringAssert.Contains(greeting, "Hello");
/*
 * Failure message:
 * StringAssert.Contains failed. String 'Hi, I learn in Softuni.org' does not contain string 'Hello'. .
*/
```

Instead of **this**:

```csharp
Assert.IsTrue(greeting.Contains("Hello"));
/*
 * Failure message:
 * Assert.IsTrue failed. 
 */ 
```

We can use **Assertions** by **regex matching**.

Take a look at the example below:

```csharp
string date = "7/11/2021";
Assert.That(date, Does.Match(@"^\d{1,2}/\d{1,2}/\d{4}$"));
```

That will assure that the date we have entered does match the given regex.

We also have Assertions for **expected exception**:

```csharp
Assert.That(() => { code },
  Throws.InstanceOf<ArgumentOutOfRangeException>()); // Assert that the given code will throw an error
```

## Collection Assertions

```csharp
Assert.That(IEnumerable expected,
  Has.Member(object actual));
```

- That assertion will assure that the expected **Enum** will contain the given object inside.


Take a look at the next examples:


```csharp
var listOfNumbers = new List<int>(){ 1, 3, 5, 9 };

// Equality => we can check element by element equality
Assert.That(listOfNumbers, Is.EqualTo(new []{ 1, 3, 5, 9 }));

// Equivalence => same elements, but can be in a different order
Assert.That(listOfNumbers, Is.EquivalentTo(new []{ 3, 1, 9, 5 }));

// Counts
Assert.That(listOfNumbers.Count, Is.EqualTo(4));
Assert.That(listOfNumbers, Has.Count.EqualTo(4));
```



[/slide]