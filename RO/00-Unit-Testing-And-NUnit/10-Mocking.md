# Mocking

[slide hideTitle]

# What is Mocking?

[video src="https://videos.softuni.bg/hls/PROFESSIONAL-MODULES/QA/2021-04-QA-Automation/02.Unit-Testing/11.mocking-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

**Mocking objects** simulates the behavior of real objects.

An **example** could be a function that calls an e-mail sending service.

It is pointless and ineffective to send an e-mail every time we run a test.

The easiest thing is to verify that our **sending** service was called.

A similar case is presented in the following example:

```csharp
[Test]
public void testAlarmClockShouldRingInTheMorning() {
  Time time = new Time();
  AlarmClock clock = new AlarmClock(time);
  if (time.isMorning()) {
    // The test will pass only in the morning
    Assert.assertTrue(clock.isRinging());
  }
}
```
# Why Mocking?





[/slide]