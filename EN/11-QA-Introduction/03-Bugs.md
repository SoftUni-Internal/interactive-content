# Bugs

[slide]
# Video

[vimeo-video startTimeInSeconds="0"]
[stream language="EN" videoId="446753427" default /]
[stream language="RO" videoId="" /]
[/video-vimeo]
[/slide]

[slide]
# Software Defects (Bugs)

Defects is the common word, but we call them **bugs** very often. However, defects are the general names of **problems** we may encounter when developing software or indeed the result that we may have from the implementation of this software. 

The possibility of Defects introduced can just happen because of the **following** **reasons**:

* Miscommunication or no communication
* Software complexity
* Programming errors
* Changing requirements
* Time pressures
* Poorly documented code
* Software development tools
* Obsolete automation scripts

[/slide]

[slide]
# Bug Fixing Importance

There are several reasons why should fix a bug as soon as you find it:

## Unfixed bugs camouflage other bugs

If you have one of these bugs hiding somewhere in your code, the sooner you discover it, the better. Don’t delay finding important problems.

## Unfixed bugs suggest quality isn't important

A developer working on software that already contains hastily written, error prone functions, with little or no unit test coverage, is likely to add **more** **code** of the **same** **nature**. Similarly, a tester who has seen tens of reported bugs go unfixed is **unlikely** **to** **be** **enthusiastic** about reporting many more. Of course, it isn't just developers and testers that are affected. Over time, every member of the team will start to ask themselves, "what's the point?", why aim for a high quality product when a **substandard** **one** is the accepted status quo. Don't set substandard quality expectations.

## Unfixed bugs lead to duplicate effort

The greater the number of unfixed bugs, the harder it is to identify whether a bug has already been reported. Imagine a scenario where there are only 5 unfixed bugs. When a "new" bug is discovered, it's easy to identify whether that bug has been reported by someone else. Now imagine trying to perform the same task when there are **50 unfixed bugs** in circulation. It's either going to take a disagreeably long amount of time (time which could be better spent looking for other bugs) or the thought of such an overwhelming task will cause it to be abandoned, often leading to duplicate bugs being reported. These duplicate bugs lead to duplicate investigation and duplicate re-testing. Don't waste time on unnecessary duplication.

## Unfixed bugs lead to unreliable metrics

Different teams analyse bugs in different ways. Some casually monitor how many are left to be fixed, whilst others track everything from their density to their lifespan. Regardless of the complexity, every bug-based metric relies on accurate underlying data. As the number of unfixed bugs increases, it becomes increasing difficult to maintain accurate bug information. Even if the information was correct at the time, the **longer a bug is left unfixed**, the **greater** the chance that information will diverge from reality. The resulting misinformation then ripples through the team. Don’t fall foul of project decisions based on incorrect information.

## Fixing a bug today costs less than tomorrow

If a bug is left to fester in the software you are developing, configuring or maintaining it may **camouflage other bugs**, demotivate the team by suggesting quality isn't important, become the topic of **pointless conversations**, **cause duplicate effort**, **lead to incorrect project metrics**, **distract the project team**, **hinder short-notice releases**, **invalidate estimates** and lead to **unnecessary frustration**. And the longer you leave a bug before fixing it, the more likely these things are to occur and to a greater extent. Don't put your project at risk.

[/slide]