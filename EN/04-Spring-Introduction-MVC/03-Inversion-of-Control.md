# Inversion of Control

[slide hideTitle]
# Field Injection

[video src="https://videos.softuni.org/hls/Java/Java-Spring-Fundamentals/EN/Spring-Introduction-MVC/28-Inversion-of-control-,1080p,720p,480p,360p,240p,.mp4/urlset/master.m3u8" poster="" /]

Feild injection could be done by using **autowire annotation** on fields member in a class.

It is easier for **writing** and for **adding** new dependencies, but it is not recommended.

These dependencies could **grow in size**, which makes them harder for **maintainability** and control.

Also when writing tests this **problem becomes more severe**, because service could be skipped and not tested.

```java
@Autowired
private ServiceA serviceA
@Autowired
private ServiceB serviceB
@Autowired
private ServiceC serviceC
```

As a rule of thumb when is possible **do not use field injection**.

[/slide]

[slide hideTitle]
# Constructor Injection

In constructor injection, all **dependencies** are located in one place and they are passed through the controller's constructor.

```java
@Autowired
public ControllerA(ServiceA serviceA, ServiceB serviceB, ServiceC serviceC) {
  this.serviceA = serviceA;
  this.serviceB = serviceB;
  this.serviceC = serviceC;
}
```

In this example, if a **dependency is missing** (it is not injected through the constructor) a **compile-time** error will occur. 

Constructor Injection is most **commonly** used and it is the **recommended** way of injecting dependencies into the controller.

[/slide]

[slide hideTitle]
# Setter Injection

In **setter injection**, we have set methods with **autowire annotation**, and services are injected by the spring controller.

Setter injection could be **employed together with constructor injection** and it is recommended to be used when there are is an optional dependency. 


```java
@Service
public class HomeContoller(){
 //...
 @Autowired
 public void setServiceA(ServiceA serviceA) {
   this.serviceA = serviceA;
 }
}
```
[/slide]