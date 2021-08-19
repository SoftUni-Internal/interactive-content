# Spring AOP Advices and Annotations

[slide hideTitle]

# Join Point

In aspect-oriented programming, everything is executed around a joint point.

So the joint point is in aspect-oriented programming is a point in the execution of the program in which behavior can be altered by aspect-oriented programming.

In spring aspect-oriented programming a joint point is always method execution, so whenever one component is executing the method on another component this is a joint point.

Aspect-oriented programming as a concept and also AspectJ implementation of the aspect-oriented programming also supports additional joint points like:

- Constructor execution 
- Reference or field assignment
- Exceptional handling
- Execution of the advice 
- Execution of the static initializers and object initializers

[/slide]

[slide hideTitle]

# Pointcut

[/slide]

[slide hideTitle]

# Example Class

[/slide]

[slide hideTitle]

# Spring Boot Starter AOP Dependency

[/slide]

[slide hideTitle]

# Aspect Class

[/slide]

[slide hideTitle]

# "Before" Example

[/slide]

[slide hideTitle]

# "After" Example

## `@AfterReturning` Example

[/slide]


[slide hideTitle]

# "Around" Example

[/slide]


[slide hideTitle]

# "AfterThrowing" Example

[/slide]


[slide hideTitle]

# Specifying Aspects Ordering

[/slide]