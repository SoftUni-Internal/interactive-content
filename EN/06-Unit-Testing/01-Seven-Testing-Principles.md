[slide hideTitle]

# Seven Testing Principles

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/EN/Java-OOP-Advanced-Unit-Testing-3-10-seven-testing-principles-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

There are seven **fundamental** testing principles that make the process of testing software more efficient.

Let us see what the concept behind testing is.

## 1. Testing is context-dependent

Different kinds of sites must be tested differently.

**For example:**

We can have different domains like a **banking platform**,  a **marketing **,  or an **advertisement**, to name a few.

Each of these domains will be tested differently based on their **requirements**, **functions**, **different techniques**, etc.

The same goes for software applications.

## 2. Exhaustive testing is impossible

Put simply - we cannot test everything. 

We have almost **infinite** combinations of **input data**.

Instead, we can test a **few combinations** based on **priority** using different techniques.

Exhaustive testing will take unlimited efforts, and most of them are ineffective.

It is widely endorsed to test input data using different methods like **Boundary Value Analysis** or **Equivalence Partitioning**.

## 3. Defect Clustering

Most of the defects found during **pre-release testing** are related to a small number of modules.

The reason is that the modules may be **too complex**. 

Debugging such modules can be a complicated task.

## 4. Early Testing

The later a bug is found - the more it costs.

The **costs** involved in fixing defects at the start of a project are cheaper, compared to those found during the later stages of testing.

[image assetsSrc="Unit-Testing-Example.png" /]

## 5. Pesticide Paradox

The Pesticide Paradox states that repeating **the same tests** will eventually stop detecting new defects or bugs.

We can overcome this problem by writing new tests and adding new test data.

## 6. Testing shows the presence of defects

It is crucial to understand that even **after testing**, we cannot state that our product is **100% defect-free**.

However, efficient testing techniques **reduce** the chance of undiscovered bugs/defects.

## 7. Absence-Of-Errors Fallacy

Sometimes our software is tested against the wrong requirements.

Finding and fixing defects does not help when:

- The system built is practically unusable

- When our software does not fulfill the user's needs and expectations

[/slide]
