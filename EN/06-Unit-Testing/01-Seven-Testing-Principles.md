[slide hideTitle]

# The Seven Testing Principles

[video src="https://videos.softuni.org/hls/Java/Java-OOP-Advanced/07-Unit-Testing/EN/Java-OOP-Advanced-Unit-Testing-3-10-seven-testing-principles-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

There are seven **fundamental** testing principles that make the process of testing software more efficient:

## 1. Testing is context-dependent

Different kinds of software must be tested differently.

**For example:**

We can have different domains like a **banking platform**,  a **marketing **,  or an **advertisement**, to name a few.

Each of these domains will be tested differently based on their **requirements**, **functions**, **different techniques**, etc.

The same goes for software applications.

## 2. Exhaustive testing is impossible

Put simply - we cannot test everything. 

There is usually a near-**infinite** number combinations of **input data**.

Instead, we can test a **few combinations** based on **priority** using different techniques.

Exhaustive testing takes great effort and usually does not provide the expected result.

It is widely endorsed to test input data using more speciffic methods like **Boundary Value Analysis** or **Equivalence Partitioning**.

## 3. Defect Clustering

Most of the defects usually found during **pre-release testing** are caused by a small number of malfunctioning modules.

Some modules may be **too complex**. 

Debugging such modules can be a complicated task.

## 4. Early Testing

The later a bug is found - the more it costs (time and resource-wise).

The **cost** of fixing defects at the start of a project is much smaller, compared to later stages of testing.

[image assetsSrc="Unit-Testing-Example.png" /]

## 5. Pesticide Paradox

The Pesticide Paradox pronciple states that repeating **the same tests** will eventually stop detecting new defects or bugs.

We can overcome this problem by creating new tests and adding new test data.

## 6. Testing shows the presence of defects

It is crucial to understand that even **after testing**, we cannot say that our product is **100% defect-free**.

However, efficient testing techniques **reduce** the chance of undiscovered bugs/defects.

## 7. Absence-Of-Errors Fallacy

Sometimes our software is tested with the wrong requirements.

Finding and fixing defects does not help when:

- The system built is practically unusable for its ourpose

- When our software does not fulfill the user's needs and expectations

[/slide]
