[slide hideTitle]

# Summary

## In this lesson you learned:

- Maven is a project management framework
  * easy dependency imports by XMLs

```java
<build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <configuration>
                    <source>15</source>
                    <target>15</target>
                </configuration>
            </plugin>
        </plugins>
    </build>
```

- What the Java Persistence API is
  * an ORM specification

```java
@Entity
@Table(name="user")
public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    
    @Column(name="user_name", length=50, nullable=false, unique=false)
    private String name;
    
    // Fields, getters and setters
}
```

- Hibernate is an open-source ORM framework 
  * maps an object-oriented models to a relational database

```java
<hibernate-mapping>
    <class name="entities.User" table="users"> // Class mapping
        <id name="id" column="id"> // Field mapping
            <generator class="identity" />
        </id>

        <property name="name" column="first_name" />
        <property name="registrationDate" column="registration_date"/> // Field mapping
    </class>
</hibernate-mapping>
```

## In the next lesson you will learn:

- JPA inheritance strategies
- Table relations
- Cascading


[/slide]