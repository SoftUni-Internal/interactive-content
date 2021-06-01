# Mocking

[slide hideTitle]

# What is Mocking?

[video src="https://videos.softuni.bg/hls/PROFESSIONAL-MODULES/QA/2021-04-QA-Automation/02.Unit-Testing/11.mocking-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Mocking objects** simulates the behavior of real objects.

An **example** could be a function that calls an e-mail sending service.

It is **pointless** and **ineffective** to send an e-mail every time we run a test.

The easiest thing is to verify that our **sending** service was called.

A similar case is presented in the following example:

```csharp
[Test]
public void testAlarmClockShouldRingInTheMorning() 
{
  Time time = new Time();
  AlarmClock clock = new AlarmClock(time);
  if (time.isMorning()) {
    // The test will pass only in the morning
    Assert.assertTrue(clock.isRinging());
  }
}
```

# Why Mocking?

One of the most important reasons for using "**Mocking**" is the **optimization** and **speed**.

If we need to access a database from our unit tests, the tests will be much slower.

In some cases, this will be a good sign, since we will want to test the performance, but most of the time we will just need the result from the tests.

The **second** reason is the number of dependencies and components which are required to be able to run a **unit test**.

For example, we do not need to set up a database when we want to test an application.

There are **more cases** for example where you will need to recreate a **specific state** of the system.

The only way this can be done is when the components required for this state can be easily configurated.




[/slide]