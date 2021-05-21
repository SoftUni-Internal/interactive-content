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

In this case, we will name our solution **Summator**.

[image assetsSrc="Unit-Testing-NUnit(3).png" /]


[/slide]

[slide hideTitle]

# Creating a Class for Testing

Now, let's create a class called "**Summator**".

Right click on the **Solution** -> **Add** -> **New Item**

Choose **Class** and name it **Summator**.

[image assetsSrc="Unit-Testing-NUnit(5).png" /]

Let's write a very simple function that will **sum** two numbers.

```Csharp
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

We will see the follow output:

[image assetsSrc="Unit-Testing-NUnit(6).png" /]


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




[/slide]