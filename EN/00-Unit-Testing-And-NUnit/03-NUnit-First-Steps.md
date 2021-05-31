# NUnit: First Steps

[slide hideTitle]

# NUnit Overview

[video src="https://videos.softuni.bg/hls/PROFESSIONAL-MODULES/QA/2021-04-QA-Automation/02.Unit-Testing/4.nunit-first-steps-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**NUnit** is an open-source **C#** test framework.

Similar to **JUnit**, **NUnit** has a graphical user interface.

We can run tests continuously and the results will be provided immediately.

**NUnit** has built-in support for **Visual Studio**.

Let's see how to create a blank project in Visual Studio.

[/slide]


[slide hideTitle]

# Creating a Blank Solution

Opening a new Visual Studio tab we are going to create a "new project".

We can type "**blank solution**" in the template search block.

A blank solution is an empty solution that does not contain any project inside.

We can imagine the "blank solution" as a package that will hold our project inside.

[image assetsSrc="Unit-Testing-NUnit(2).png" /]

After we have created a blank solution we can right-click on the newly created solution and press **Add** -> **New Project** 

[image assetsSrc="Unit-Testing-NUnit(4).png" /]

We choose at **Console Application** and the appropriate name for it.

In this case, we will name our solution **ConsoleAppSummator**.

[image assetsSrc="Unit-Testing-NUnit(3).png" /]


[/slide]

[slide hideTitle]

# Creating a Class for Testing

Now, let's create a class called "**Summator**".

Right click on the **Solution** -> **Add** -> **New Item**

Choose **Class** and name it **Summator**.

[image assetsSrc="Unit-Testing-NUnit(5).png" /]

Let's write a very simple function that will **sum** two numbers.

```csharp
public static int Sum(int[] arr) {
  int sum = arr[0];
  for (int i = 1; i < arr.Length; i++)
    sum += arr[i];
  return sum;
}
```

This is the class that we want to test.

Now, we can return to our **Main** method and run our function:

```csharp
static void Main() {
  Console.WriteLine(Summator.Sum(new int[] {
    10,
    20,
    30
  }));
}
```

Press **Ctrl + F5** to enter the **Run Mode**.

We will see the following output:

[image assetsSrc="Unit-Testing-NUnit(6).png" /]

[image srcset="Unit-Testing-NUnit(6).png 0.7x" /]

[/slide]

[slide hideTitle]

# Creating an NUnit Project

Let's create a new NUnit project.

Right click -> **Add** -> **New Project**.

[image assetsSrc="Unit-Testing-NUnit(4).png" /]

Choose the **NUnit Test Project** template.

[image assetsSrc="Unit-Testing-NUnit(8).png" /]

Click **Next** and name the project. Let's name it **SummatorTests**.

Choose the **Target Framework** and click **Create**.

Now, if we look in the "Solution Explorer" tab we will see two different projects.

The first one will be our actual code and the second will be our project where we will handle our tests.

[image assetsSrc="Unit-Testing-NUnit(9).png" /]

To be able to **access** the different projects, we must create a **project reference**.

Right click -> **Add** -> **Project Reference**.

[image assetsSrc="Unit-Testing-NUnit(7).png" /]

Next, we **link** our project to be able to access the **Summator** project.

[image assetsSrc="Unit-Testing-NUnit(10).png" /]


[/slide]

[slide hideTitle]

# Writing The First Test

To write our first test, we will need to create a test method.

```csharp
[Test]
public void Test_SumTwoNumbers()
{
    var numbers = new int[] {3 , 7}; // here we are passing the numbers that we want to test
    var actualSum = Summator.Sum(numbers); // This will apply our Sum function and it will sum the two numbers
    var expectedSum = 10; // correct expected output.
    Assert.AreEqual(expectedSum, actualSum) // Test if the output from our Sum function is the same as the expectedSum
}

```

To run the test we need to **right click** -> **Run Test(s)**.

When the test is compiled we can see the result in the **Test Explorer**.

[image assetsSrc="Unit-Testing-NUnit(11).png" /]

We can test the same function **multiple times**.

For example, we can test the function with an empty array.

Let's write a second test and see the following example:

```csharp
[Test]
public void Test_Summator_EmptyArray() {
  var nums = new int[] {};
  var actualSum = Summator.Sum(nums);
  var expectedSum = 0;
  Assert.AreEqual(expectedSum, actualSum);
}

```

Now on running our test will **fail** because our **Summator** function will expect an array.

To be able to run this test, we have to adjust the function.



```csharp
int Sum(int[] arr) {
  int sum = 0;
  for (int i = 0; i < arr
    .Length; i++)
    sum += arr[i];
  return sum;
}
```

Now, if we **re-run** the tests again the tests will **pass** successfully.





[/slide]
