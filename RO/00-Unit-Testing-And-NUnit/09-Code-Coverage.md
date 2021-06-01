# Code Coverage

[slide hideTitle]

# Code Coverage Examples

[video src="https://videos.softuni.bg/hls/PROFESSIONAL-MODULES/QA/2021-04-QA-Automation/02.Unit-Testing/10.code-coverage-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]


Code coverage is a testing metric for **measurement** how many lines/blocks of code are executed during the running of automated tests.

[image assetsSrc="Unit-Testing-NUnit(15).png" /]

From this chart, we can see that all lines that are executed are colored in **green**.

The lines that are never executed (untested lines) are colored in **red**.

Let's see a simple example:

[image assetsSrc="Unit-Testing-NUnit(16).png" /]

In the image above, we can see that the code covered by the tests is marked with **green**.

Most of the time we are covering the **actual code** that we are testing, not the tests themselves.

The `Clear()` method is **red-colored** since we did not cover it.

The lines can be **orange** if they were **partially executed**.

"**Partial execution**" means that the source code was not fully executed by the test suite.

It would occur when we have a condition and not all of the terms are executed.

```csharp
if (isEmptyString(url) && isEmptyString(name)) 
{
    return false;
}
```

If `isEmptyString(url)` returns false, `isEmptyString(name)` is **never executed**. This means - "**partial coverage**".




[/slide]

[slide hideTitle]

# Code Coverage Tools for C#

**Visual Studio** supports **code coverage** for C# only in the **Enterprise edition** which is a **paid product**.

Alternatively, you can use the **Fine Code Coverage** tool which is a **free** extension for **Visual Studio**.

You can download the **Fine Code Coverage** by going into the **"Extensions Tab"** or by clicking **Ctrl + Shift + X** shortcut for Windows.

[image assetsSrc="Unit-Testing-NUnit(17).png" /]

The last step is to run the unit tests to view the **covered lines** in **green** , **red** or **yellow**.

You can view your code coverage report in the **Fine Code Coverage** window.

[image assetsSrc="Unit-Testing-NUnit(18).png" /]


[/slide]