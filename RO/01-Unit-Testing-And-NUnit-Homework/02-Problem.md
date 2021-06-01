# Unit Testing the Collection Class

[slide hideTitle]

# Unit Testing the Collection Class

[video src="https://videos.softuni.bg/hls/PROFESSIONAL-MODULES/QA/2021-04-QA-Automation/02.Unit-Testing/15.collection-tests-homework-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

You are given a C# class `Collection<T>`, which implements a generic collection, holding an indexed sequence of elements:

[image assetsSrc="Unit-Testing-NUnit-Homework(14).png" /]

Write **unit tests** for the class `Collection<T>`. 

Ensure that the **code coverage** is high and that all interesting cases are covered: test **all public methods**, test the **auto growing** of the underlying array, test with valid and invalid ranges, and try to cover all other **special cases**.

[hints]
[hint]

- Test **all public methods**.
- Think about all **different scenarios**, which can happen, e. g. insert at the start, insert at the end, insert at the middle, insert with auto-grow, insert at invalid position, insert into empty collection, etc.
- Ensure you test each method with **valid and invalid data.**
- Implement a **performance test** with 1 million items, with **timeout**.

You may implement the following unit tests:

[image assetsSrc="Unit-Testing-NUnit-Homework(15).png" /]

[/hint]
[/hints]




[/slide]