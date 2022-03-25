# Exam Preparation - Football Information Solution

[slide hideTitle]

## Download Resources

- Download the needed **resources** from here:
[https://videos.softuni.org/resources/java/Java-ORM-And-Spring-Data/exam-preparation-skeleton.zip](https://videos.softuni.org/resources/java/Java-ORM-And-Spring-Data/exam-preparation-skeleton.zip)

## Setup Project

- Before we start, we need to **extract** the resources in a folder where our project will be located.

[image assetsSrc="1-extract-folders.png" /]

- Choose a directory as shown in the picture and make sure that there are no other files in the folder.

- After we are done, open IntelliJ IDEA. Click on the **Open** button to open your project.

[image assetsSrc="2-open-inteliJ.png" /]

- Choose the folder where you put your resources. IntelliJ is smart, and it displays the folder as a project. **Select** your folder and press **OK**.

[image assetsSrc="3-select-folder" /]

- It will ask you if you trust this project. Click on **Trust Project**.

[image assetsSrc="4-trust-project.png" /]


- Wait for all the **dependencies** to download and load. You can see the loading process in the bottom right corner.

[image assetsSrc="5-wait-to-download-dependencies.png" /]

- If you have done everything correctly, your project will look like this:

[image assetsSrc="6-project-architecture.png" /]

- Open the **pom.xml** located in the root directory and change the **java version** from 11 to 12.

[image assetsSrc="7-change-version.png" /]

- Open your resources folder and check how your **MYSQL** server is configured. From the previous lessons, you will know how to configure it. My password is **12345**, and I will change it to that. 

[image assetsSrc="8-setup-app-properties.png" /]

If you don't know how to configure your **MySQL server**, watch the previous lessons, or read it here: [https://www.onlinetutorialspoint.com/mysql/install-mysql-on-windows-10-step-by-step.html](https://www.onlinetutorialspoint.com/mysql/install-mysql-on-windows-10-step-by-step.html)

## Add Configuration

- We will need to create a **Configuration** class to setup our **beans**. Right-click on the **softuni.exam** folder, then hover on **New** and select **Package**. Choose the name **config** and press the **Enter** button.

[image assetsSrc="9-create-config-package.png" /]

This will create a **package** in which we can add our class.
- In the newly created **config** package create a new **Java Class**.

[image assetsSrc="10-create-class.png" /]

- The name of the class will be **ApplicationBeanConfiguration**, and the type will be **Class**.

[image assetsSrc="11-choose-file-type.png" /]

- Inside the class add the following code:

````Java
@Configuration
public class ApplicationBeanConfiguration {

    @Bean
    public Gson gson() {
        return new GsonBuilder()
                .setPrettyPrinting()
                .create();
    }

    @Bean
    public ModelMapper modelMapper() {
        return null;
    }
}
````
- Be sure to check if your **ApplicationBeanConfiguration** class is with a **@Configuration** annotation. 
- We will later add the needed logic for those methods.

- There will be a few problems with the following code. You will see that the project cannot find the following beans - **Gson** and **ModelMapper**.

[image assetsSrc="12-missing-dependencies.png" /]

- That means that we need to install them. You can do it in various ways, but we will show only the easy way. Right-click on the first error **Gson** and select **Add Marven dependency...**

[image assetsSrc="13-add-maven-dependency.png" /]

- That will open a menu in which we need to select **Search for Artifact**, then type the needed import - **Gson**, select the specific version: **com.google.code.gson::gson::...**, and click **Add**. The version is not important, but the name must be the same.

[image assetsSrc="14-select-artifact.png" /]

- Now we have to wait for the download to **complete**. You can track it in the bottom-right corner. We will be able to **import** our **dependencies**.

[image assetsSrc="15-import-dependency.png" /]

Or we can manually type the import. It will do the same trick.

```Java
import com.google.gson.Gson;
```

- For the next error with **GsonBuilder**, we can just import the package. We have already installed the needed dependency.

```Java
import com.google.gson.GsonBuilder;
```

- Repeat the same process and add the missing dependency for **ModelMapper**. Search for **ModelMapper** and choose the specific dependency:

[image assetsSrc="16-add-modelmapper.png" /]

- After you install it, import the dependency:

```Java
import org.modelmapper.ModelMapper;
```
- This should clear all our errors from the class.

## Add XML Parser

- In the same way, we create a **config** package(folder), create a utils package.

[image assetsSrc="17-create-util-package.png" /]

- Inside the package, we will add 2 files. First, we create a **XmlParser** interface. Right-click on the utils package, hover on **New**, then click **Java Class**. Be careful to choose **Interface** from the options menu.

[image assetsSrc="18-xml-parser-interface.png" /]
 
Inside it we will add the following code:

```Java
package softuni.exam.utils;

import javax.xml.bind.JAXBException;
import java.io.FileNotFoundException;

public interface XmlParser {
    <T> T convertFromFile(String filePath, Class<T> tClass) throws JAXBException, FileNotFoundException;
}
```
- We need to create a class that will **implement** that functionality. In the same package create a **XMLParserImpl** java class.

```Java
package softuni.exam.utils;

import org.springframework.stereotype.Component;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.JAXBException;
import javax.xml.bind.Unmarshaller;
import java.io.FileNotFoundException;
import java.io.FileReader;

@Component
public class XmlParserImpl implements XmlParser {

    @Override
    public <T> T convertFromFile(String filePath, Class<T> tClass) throws JAXBException, FileNotFoundException {
        JAXBContext jaxbContext = JAXBContext.newInstance(tClass);
        Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();

        return (T) unmarshaller.unmarshal(new FileReader(filePath));
    }
}
```

- Be sure that the class has a **@Component** data annotation, and implements our **XmlParser** interface.

- In the **ApplicationBeanConfiguration** we need to create a method for the XML Parser. Let's also update our modelMapper method to return a new instance.

```Java
package softuni.exam.config;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import softuni.exam.utils.XmlParser;
import softuni.exam.utils.XmlParserImpl;

@Configuration
public class ApplicationBeanConfiguration {

    @Bean
    public Gson gson() {
        return new GsonBuilder()
                .excludeFieldsWithoutExposeAnnotation()
                .setPrettyPrinting()
                .create();
    }

    /* New Code */
    @Bean
    public ModelMapper modelMapper() {
        return new ModelMapper();
    }
    @Bean
    public XmlParser xmlParser(){
        return new XmlParserImpl();
    }
}

```

## Add Database Entities

- Let's create inside our **domain** package(folder) a new package called **entities**. Inside it, we will add our models for the database.
Inside the **entities** package, we create a new class called **BaseEntity**:

[image assetsSrc="19-add-base-entity.png" /]

- Inside the class we will add the following code:

```Java
package softuni.exam.domain.entities;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class BaseEntity {

    private Long id;

    public BaseEntity() {
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
```
- Be sure that the class is **abstract** and has annotation **@MappedSuperclass**.

- In the same package **entities**, create another class Picture. Be sure that it **extends** our abstract class **BaseEntity**.

```Java
package softuni.exam.domain.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "pictures")
public class Picture extends BaseEntity {
    private String url;

    public Picture() {
    }

    @Column(name = "url")
    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
```

- Let's create in our **entities** package, another package called **enums**.

[image assetsSrc="20-add-enums.png)" /]

- Inside it we will add **Enum** file called **Position**.

[image assetsSrc="21-enum-type.png" /]

- Be sure that it's from type **Enum**.
- Inside it we add the following code:

```Java
package softuni.exam.domain.entities.enums;

public enum Position {
    GK,
    CD,
    RB,
    LB,
    CM,
    DM,
    CDM,
    LM,
    RM,
    ST,
    CF,
    RW,
    LW;
}
```

- Lets create another 2 class entities called **Player** and **Team**. We again create them in the entities package. Here is what they will look like:

- Player class:

```Java
package softuni.exam.domain.entities;

import softuni.exam.domain.entities.enums.Position;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "players")
public class Player extends BaseEntity {

    private String firstName;
    private String lastName;
    private Integer number;
    private BigDecimal salary;
    private Position position;
    private Picture picture;
    private Team team;

    public Player() {
    }

    @Column(name = "first_name", nullable = false)
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    @Column(name = "last_name", nullable = false)
    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @Column(name = "number", nullable = false)
    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }

    @Column(name = "salary", nullable = false)
    public BigDecimal getSalary() {
        return salary;
    }

    public void setSalary(BigDecimal salary) {
        this.salary = salary;
    }

    @Column(name = "position")
    @Enumerated(EnumType.STRING)
    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "picture_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "fk_players_pictures"), nullable = false)
    public Picture getPicture() {
        return picture;
    }

    public void setPicture(Picture picture) {
        this.picture = picture;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "team_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "fk_players_teams"), nullable = false)
    public Team getTeam() {
        return team;
    }

    public void setTeam(Team team) {
        this.team = team;
    }
}
```

- Team class:

```Java
package softuni.exam.domain.entities;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "teams")
public class Team extends BaseEntity {

    private String name;
    private Picture picture;
    private Set<Player> players;

    public Team() {
    }

    @Column(name = "name", nullable = false)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "picture_id", referencedColumnName = "id", foreignKey = @ForeignKey(name = "fk_teams_pictures"), nullable = false)
    public Picture getPicture() {
        return picture;
    }

    public void setPicture(Picture picture) {
        this.picture = picture;
    }

    @OneToMany(mappedBy = "team")
    public Set<Player> getPlayers() {
        return players;
    }

    public void setPlayers(Set<Player> players) {
        this.players = players;
    }
}
```
[/slide]

[slide hideTitle]

# Add Migration to Database

- We need to migrate our entities to our SQL database. On the right side, you can see a **Database** button. Click on the plus **+** icon and select **Data Source**. After that press on MySQL.

[image assetsSrc="01-configure-db.png" /]


- Open your **application.properties** file located in the **resources** package.
- Type the same credentials to your popup windows and press **Apply**. (If you  are using XAMPP or another 3rd party app, be sure that you have started your MySQL server)

[image assetsSrc="02-configure-db.png" /]

- After the migration is done you can view your database in the right window. Select the name of your database. In this case, it is **exam_db**.

[image assetsSrc="03-configure-db.png" /]

- We can check that every model that we have created exists in our database.

[image assetsSrc="04-configuire-db.png" /]

## Add Binding Entities

We need to create another package inside the **domain** package.
- Right-click on the **domain** package and select **Add New Package**.
- This might open the location of the entities package. You need to remove the word **entities** and type your new package **binding**, as shown in the picture below.

[image assetsSrc="22-add-binding-package.png" /]

- Inside the package, we will store all our binding models. This will include: 

- **PictureCreateBindingModel**
- **ListPictureCreateBindingModel**
- **TeamCreateBindingModel**
- **ListTeamCreateBindingModel**
- **PlayerCreateBindingModel**

Be sure to import the correct dependency for the XmlElement annotation:

```Java
import javax.xml.bind.annotation.XmlElement;
```

### PictureCreateBindingModel


```Java
package softuni.exam.domain.binding;

import com.sun.istack.NotNull;
import javax.xml.bind.annotation.XmlElement;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name = "picture")
@XmlAccessorType(XmlAccessType.FIELD)
public class PictureCreateBindingModel {

    @XmlElement(name = "url")
    private String url;
    private Integer id;

    public PictureCreateBindingModel() {
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
```

### ListPictureCreateBindingModel

```Java
package softuni.exam.domain.binding;

import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;


@XmlRootElement(name = "pictures")
@XmlAccessorType(XmlAccessType.FIELD)
public class ListPictureCreateBindingModel {
    @XmlElement(name = "picture")
    private List<PictureCreateBindingModel> pictures;

    public List<PictureCreateBindingModel> getPictures() {
        return pictures;
    }

    public void setPictures(List<PictureCreateBindingModel> pictures) {
        this.pictures = pictures;
    }
}
```
### TeamCreateBindingModel

```Java
package softuni.exam.domain.binding;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

import com.sun.istack.NotNull;
import org.hibernate.validator.constraints.Length;

@XmlRootElement(name = "team")
@XmlAccessorType(XmlAccessType.FIELD)
public class TeamCreateBindingModel {
    @XmlElement(name = "name")
    private String name;

    @XmlElement(name = "picture")
    private PictureCreateBindingModel picture;
    private Integer id;

    public TeamCreateBindingModel() {
    }

    @NotNull
    @Length(min = 3, max = 20)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @NotNull
    public PictureCreateBindingModel getPicture() {
        return picture;
    }

    public void setPicture(PictureCreateBindingModel picture) {
        this.picture = picture;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
```

### ListTeamCreateBindingModel

```Java
package softuni.exam.domain.binding;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.List;

@XmlRootElement(name = "teams")
@XmlAccessorType(XmlAccessType.FIELD)
public class ListTeamCreateBindingModel {

    @XmlElement(name = "team")
    private List<TeamCreateBindingModel> teams;

    public ListTeamCreateBindingModel() {
    }

    public List<TeamCreateBindingModel> getTeams() {
        return teams;
    }

    public void setTeams(List<TeamCreateBindingModel> teams) {
        this.teams = teams;
    }
}
```

### PlayerCreateBindingModel

```Java
package softuni.exam.domain.binding;

import com.sun.istack.NotNull;
import org.hibernate.validator.constraints.Length;
import softuni.exam.domain.entities.enums.Position;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import java.math.BigDecimal;

public class PlayerCreateBindingModel {
    private String firstName;
    private String lastName;
    private Integer number;
    private BigDecimal salary;
    private Position position;
    private PictureCreateBindingModel picture;
    private TeamCreateBindingModel team;

    public PlayerCreateBindingModel() {
    }

    @NotNull
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    @NotNull
    @Length(min = 3, max = 15)
    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @NotNull
    @Min(value = 1)
    @Max(value = 99)
    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }

    @NotNull
    @Min(value = 0)
    public BigDecimal getSalary() {
        return salary;
    }

    public void setSalary(BigDecimal salary) {
        this.salary = salary;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

    @NotNull
    public PictureCreateBindingModel getPicture() {
        return picture;
    }

    public void setPicture(PictureCreateBindingModel picture) {
        this.picture = picture;
    }

    @NotNull
    public TeamCreateBindingModel getTeam() {
        return team;
    }

    public void setTeam(TeamCreateBindingModel team) {
        this.team = team;
    }
}
```

- If you have some errors be sure that you have imported every library as shown in the code.

[/slide]

[slide hideTitle]

# Add View Models Entities

- Inside the domain package, add a new package called **view**. This is where our View Models will be stored.

[image assetsSrc="23-add-view-package.png" /]


- Again we will create a few classes:

- **PlayerPlayingForViewModel**
- **PlayerSalaryViewModel.**
- **TeamPlayerSalaryViewModel**
- **TeamPlayersViewModel**

### PlayerPlayingForViewModel

```Java
package softuni.exam.domain.view;

import softuni.exam.domain.entities.enums.Position;

public class PlayerPlayingForViewModel {
    private Integer id;
    private String firstName;
    private String lastName;
    private Position position;
    private Integer number;

    public PlayerPlayingForViewModel() {
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
}
```

### PlayerSalaryViewModel

```Java
package softuni.exam.domain.view;

import java.math.BigDecimal;

public class PlayerSalaryViewModel {
    private String firstName;
    private String lastName;
    private BigDecimal salary;
    private Integer number;
    private TeamPlayerSalaryViewModel team;

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public BigDecimal getSalary() {
        return salary;
    }

    public void setSalary(BigDecimal salary) {
        this.salary = salary;
    }

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }

    public TeamPlayerSalaryViewModel getTeam() {
        return team;
    }

    public void setTeam(TeamPlayerSalaryViewModel team) {
        this.team = team;
    }
}
```

### TeamPlayerSalaryViewModel

```Java
package softuni.exam.domain.view;

public class TeamPlayerSalaryViewModel {
    private String name;

    public TeamPlayerSalaryViewModel() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

```

### TeamPlayersViewModel

```Java
package softuni.exam.domain.view;

import java.util.List;

public class TeamPlayersViewModel {
    private String name;
    private List<PlayerPlayingForViewModel> players;

    public TeamPlayersViewModel() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<PlayerPlayingForViewModel> getPlayers() {
        return players;
    }

    public void setPlayers(List<PlayerPlayingForViewModel> players) {
        this.players = players;
    }
}

```

[/slide]

[slide hideTitle]

# Adding Repositories

You will see that below the **domain** package, there is a repository package. Inside it, there are interfaces that have no logic. Inside each of them, we will add the logic needed for the services.

### PictureRepository

```Java
package softuni.exam.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import softuni.exam.domain.entities.Picture;

@Repository
public interface PictureRepository extends JpaRepository<Picture, Integer> {

    Picture findPictureByUrl(String url);
}
```

### PlayerRepository

```Java
package softuni.exam.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import softuni.exam.domain.entities.Player;
import softuni.exam.domain.entities.Team;

import java.math.BigDecimal;
import java.util.List;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Integer> {

    List<Player> findAllByTeamOrderById(Team team);

    List<Player> findAllBySalaryGreaterThanOrderBySalaryDesc(BigDecimal salary);
}
```

### TeamRepository

```Java
package softuni.exam.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import softuni.exam.domain.entities.Team;

@Repository
public interface TeamRepository  extends JpaRepository<Team, Integer> {
    Team findTeamByName(String name);
}
```

## Adding Utils

- Before we head to the services, we need to create 2 helping classes. Because we don't want to repeat the code, we will create a **Validator** package inside the **utils** package. Inside the **Validator**, we will create a class and interface. The class will be ValidatorUtilImpl and it will implement ValidatorUtil.

[image assetsSrc="24-add-validator.png" /]

### ValidatorUtil

```Java
package softuni.exam.utils.Validator;

public interface ValidatorUtil {
    <E> boolean isValid(E entity);
}
```
### ValidatorUtilImpl

```Java
package softuni.exam.utils.Validator;

import javax.validation.Validation;
import javax.validation.Validator;

public class ValidatorUtilImpl implements ValidatorUtil{

    private Validator validator;

    public ValidatorUtilImpl() {
        this.validator = Validation.buildDefaultValidatorFactory().getValidator();
    }

    @Override
    public <E> boolean isValid(E entity) {
        return this.validator.validate(entity).isEmpty();
    }
}
```

- We need to setup it as a bean inside the **ApplicationBeanConfiguration** located in the **config** package.

- Add the following method inside it:
```Java
    @Bean(name = "validator")
    public ValidatorUtil validationUtil() {
        return new ValidatorUtilImpl();
    }
```

- We need to add another helping class for our services. Inside the **utils** package, create a class called **FilePath**. It will look like this:

```Java
package softuni.exam.utils;

public class FilePath {
    public static final String PICTURES_XML = "D:\\Projects\\FootBallProject\\src\\main\\resources\\files\\xml\\pictures.xml";
    public static final String TEAMS_XML = "D:\\Projects\\FootBallProject\\src\\main\\resources\\files\\xml\\teams.xml";
    public static final String PLAYERS_JSON = "D:\\Projects\\FootBallProject\\src\\main\\resources\\files\\json\\players.json";
}
```
**Please note that you have to change the directories to match your project location.**

## Adding Services

- If we go to the **service** package we can see that the services are implemented and have methods, but with no logic inside them. We will add the following code so they will do their job inside the controller.
We will work on: **PictureServiceImpl**, **PlayerServiceImpl**, and **TeamServiceImpl**.

- For our **PictureServiceImpl** we need to change the **PictureService** interface so it can work properly.

```Java
package softuni.exam.service;

import softuni.exam.domain.entities.Picture;

import javax.xml.bind.JAXBException;
import java.io.IOException;

public interface PictureService {
    String importPictures() throws IOException, JAXBException;
    boolean areImported();
    String readPicturesXmlFile() throws IOException;;

    Picture getPictureByUrl(String url);
}
```

### PictureServiceImpl

- With the changes in the interface, we will add in the **PictureServiceImpl** this code:

```Java
package softuni.exam.service.impl;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import softuni.exam.domain.binding.ListPictureCreateBindingModel;
import softuni.exam.domain.binding.PictureCreateBindingModel;
import softuni.exam.domain.entities.Picture;
import softuni.exam.repository.PictureRepository;
import softuni.exam.service.PictureService;
import softuni.exam.utils.FilePath;
import softuni.exam.utils.Validator.ValidatorUtil;
import softuni.exam.utils.XmlParser;

import javax.xml.bind.JAXBException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PictureServiceImpl implements PictureService {

    private PictureRepository pictureRepository;
    private XmlParser xmlParser;
    private ModelMapper modelMapper;
    private ValidatorUtil validator;

    public PictureServiceImpl(PictureRepository pictureRepository, XmlParser xmlParser, ModelMapper modelMapper, ValidatorUtil validator) {
        this.pictureRepository = pictureRepository;
        this.xmlParser = xmlParser;
        this.modelMapper = modelMapper;
        this.validator = validator;
    }


    @Override
    public String importPictures() throws IOException, JAXBException {
        StringBuilder result = new StringBuilder();

        List<PictureCreateBindingModel> pictures = this.xmlParser.
                convertFromFile(FilePath.PICTURES_XML, ListPictureCreateBindingModel.class)
                .getPictures();

        List<Picture> pictureEntities = pictures
                .stream()
                .filter(picture -> {
                    if (this.validator.isValid(picture)) {
                        result.append(String.format("Successfully imported picture - %s\r\n", picture.getUrl()));

                        return true;
                    }
                    result.append("Invalid picture\r\n");

                    return false;
                })
                .map(picture -> this.modelMapper.map(picture, Picture.class))
                .collect(Collectors.toList());

        this.pictureRepository.saveAll(pictureEntities);

        return result.toString()
                .trim();
    }

    @Override
    public boolean areImported() {
        return this.pictureRepository.count() > 0;
    }

    @Override
    public String readPicturesXmlFile() throws IOException {
        return Files.readString(Paths.get(FilePath.PICTURES_XML));
    }

    @Override
    public Picture getPictureByUrl(String url) {
        return this.pictureRepository.findPictureByUrl(url);
    }
}
```
### TeamServiceImpl

- Let's repeat the same process for the **TeamService** and **TeamServiceImpl**.


- **TeamService**:

```Java
package softuni.exam.service;

import softuni.exam.domain.entities.Team;

import javax.xml.bind.JAXBException;
import java.io.IOException;

public interface TeamService {

    String importTeams() throws JAXBException, IOException;

    boolean areImported();

    String readTeamsXmlFile() throws IOException;

    Team getTeamByName(String teamName);
}
```
- **TeamServiceImpl**:

```Java
package softuni.exam.service.impl;


import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import softuni.exam.domain.binding.ListTeamCreateBindingModel;
import softuni.exam.domain.entities.Team;
import softuni.exam.repository.TeamRepository;
import softuni.exam.service.PictureService;
import softuni.exam.service.TeamService;
import softuni.exam.utils.FilePath;
import softuni.exam.utils.Validator.ValidatorUtil;
import softuni.exam.utils.XmlParser;

import javax.transaction.Transactional;
import javax.xml.bind.JAXBException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class TeamServiceImpl implements TeamService {

    private TeamRepository teamRepository;
    private PictureService pictureService;
    private ValidatorUtil validator;
    private ModelMapper modelMapper;
    private XmlParser xmlParser;

    public TeamServiceImpl(TeamRepository teamRepository, PictureService pictureService, ValidatorUtil validator, ModelMapper modelMapper, XmlParser xmlParser) {
        this.teamRepository = teamRepository;
        this.pictureService = pictureService;
        this.validator = validator;
        this.modelMapper = modelMapper;
        this.xmlParser = xmlParser;
    }

    @Override
    public String importTeams() throws JAXBException, IOException {
        ListTeamCreateBindingModel listTeam = this.xmlParser.convertFromFile(FilePath.TEAMS_XML, ListTeamCreateBindingModel.class);
        StringBuilder result = new StringBuilder();

        List<Team> teams = listTeam
                .getTeams()
                .stream()
                .map(currentTeam -> {
                    Team team = this.modelMapper.map(currentTeam, Team.class);
                    team.setPicture(this.pictureService.getPictureByUrl(team.getPicture().getUrl()));

                    return team;
                }).filter(team -> {
                    if (this.validator.isValid(team) && team.getPicture() != null) {
                        result.append(String.format("Successfully imported - %s\r\n", team.getName()));

                        return true;
                    }
                    result.append("Invalid team\r\n");

                    return false;
                }).collect(Collectors.toList());

        this.teamRepository.saveAll(teams);

        return result.toString().trim();
    }

    @Override
    public boolean areImported() {
        return this.teamRepository.count() > 0;
    }

    @Override
    public String readTeamsXmlFile() throws IOException {
        return Files.readString(Paths.get(FilePath.TEAMS_XML));
    }

    @Override
    public Team getTeamByName(String teamName) {
        return this.teamRepository.findTeamByName(teamName);
    }
}
```

### PlayerServiceImpl

- Before we change it we need to fix our **PlayerService** interface. Inside it.

- PlayerService:

```Java
package softuni.exam.service;

import java.io.IOException;
import java.math.BigDecimal;

public interface PlayerService {
    String importPlayers() throws IOException;

    boolean areImported();

    String readPlayersJsonFile() throws IOException;

    String exportPlayersInATeam(String teamName);

    String exportPlayersWithALargerSalaryThanTheGiven(BigDecimal salary);
}
```

- With this code, our **PlayerServcieImpl** will look like this:

```Java
package softuni.exam.service.impl;


import com.google.gson.Gson;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import softuni.exam.domain.binding.PictureCreateBindingModel;
import softuni.exam.domain.binding.PlayerCreateBindingModel;
import softuni.exam.domain.binding.TeamCreateBindingModel;
import softuni.exam.domain.entities.Player;
import softuni.exam.domain.entities.Team;
import softuni.exam.domain.view.PlayerPlayingForViewModel;
import softuni.exam.domain.view.PlayerSalaryViewModel;
import softuni.exam.domain.view.TeamPlayersViewModel;
import softuni.exam.repository.PlayerRepository;
import softuni.exam.service.PictureService;
import softuni.exam.service.PlayerService;
import softuni.exam.service.TeamService;
import softuni.exam.utils.FilePath;
import softuni.exam.utils.Validator.ValidatorUtil;


import javax.transaction.Transactional;
import java.io.IOException;
import java.math.BigDecimal;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class PlayerServiceImpl implements PlayerService {

    private PlayerRepository playerRepository;
    private TeamService teamService;
    private PictureService pictureService;
    private ModelMapper modelMapper;
    private ValidatorUtil validator;
    private Gson gson;

    public PlayerServiceImpl(PlayerRepository playerRepository, TeamService teamService, ModelMapper modelMapper, ValidatorUtil validator, Gson gson, PictureService pictureService) {
        this.playerRepository = playerRepository;
        this.teamService = teamService;
        this.pictureService = pictureService;
        this.modelMapper = modelMapper;
        this.validator = validator;
        this.gson = gson;
    }

    @Override
    public String importPlayers() throws IOException {
        PlayerCreateBindingModel[] playersArray = this.gson.fromJson(this.readPlayersJsonFile(), PlayerCreateBindingModel[].class);
        StringBuilder result = new StringBuilder();

        List<Player> players = Arrays.stream(playersArray)
                .filter(player -> {
                    if (player.getPicture() != null && player.getTeam() != null) {
                        player.setPicture(this.modelMapper.map(this.pictureService.getPictureByUrl(player.getPicture().getUrl()), PictureCreateBindingModel.class));
                        player.setTeam(this.modelMapper.map(this.teamService.getTeamByName(player.getTeam().getName()), TeamCreateBindingModel.class));
                    }

                    if (this.validator.isValid(player)) {
                        result.append(String.format("Successfully imported player: %s %s\r\n", player.getFirstName(), player.getLastName()));

                        return true;
                    }
                    result.append("Invalid player\r\n");

                    return false;
                }).map(currentPlayer -> this.modelMapper.map(currentPlayer, Player.class))
                .collect(Collectors.toList());


        this.playerRepository.saveAll(players);

        return result.toString().trim();
    }

    @Override
    public boolean areImported() {
        return this.playerRepository.count() > 0;
    }

    @Override
    public String readPlayersJsonFile() throws IOException {
        return Files.readString(Paths.get(FilePath.PLAYERS_JSON));
    }

    @Override
    public String exportPlayersWithALargerSalaryThanTheGiven(BigDecimal salary) {
        List<PlayerSalaryViewModel> players = this.playerRepository
                .findAllBySalaryGreaterThanOrderBySalaryDesc(salary)
                .stream()
                .map(player -> this.modelMapper.map(player, PlayerSalaryViewModel.class))
                .collect(Collectors.toList());

        String format = "Player name: %s %s\r\n\tNumber: %s\r\n\tSalary: %s\r\n\tTeam: %s";

        return players.stream()
                .map(player ->
                        String.format(format,
                                player.getFirstName(),
                                player.getLastName(),
                                player.getNumber(),
                                player.getSalary(),
                                player.getTeam() != null ? player.getTeam().getName() : "No team."))
                .collect(Collectors.joining("\r\n"));
    }

    @Override
    public String exportPlayersInATeam(String teamName) {
        Team teamEntity = this.teamService.getTeamByName(teamName);

        if (teamEntity == null) {
            return "Invalid team.";
        }

        TeamPlayersViewModel team = this.modelMapper.map(teamEntity, TeamPlayersViewModel.class);
        String format = "Player name: %s %s - %s\r\nNumber: %s";

        String playersInfo = team.getPlayers()
                .stream()
                .sorted(Comparator.comparing(PlayerPlayingForViewModel::getId))
                .map(player ->
                        String.format(format,
                                player.getFirstName(),
                                player.getLastName(),
                                player.getPosition().name(),
                                player.getNumber()))
                .collect(Collectors.joining("\r\n"));

        return String.format("Team: %s\r\n%s",
                team.getName(),
                playersInfo);
    }
}
```

## Controllers

- For the controllers, we won't be adding new logic. 

- The first error, that we will have to fix is inside the **ImportController**.

- For the **importTeamsConfirm()** we need to change his **thrown Exception** from **FileNotFoundException** to  **IOException**.

```Java
@PostMapping("/teams")
public ModelAndView importTeamsConfirm() throws JAXBException, IOException {
    ...
}
```

- The second error is that we have to add values inside the **ExportController**.

[image assetsSrc="25-add-values-in-controller.png" /]

As shown in the image you have to add values to the two service methods:

```Java
String playersWithSalary = this.playerService.exportPlayersWithALargerSalaryThanTheGiven(BigDecimal.valueOf(100000));
```

```Java
String playersInATeam = this.playerService.exportPlayersInATeam("North Hub");
```

## Test Project

- If we have done everything correctly, you should have no errors. Start your project by clicking the start button as shown in the picture.

[image assetsSrc="26-start-project.png" /]

- Open your browser and go to **http://localhost:8080/**.

[image assetsSrc="27-different-pages.png" /]


- You will see that in the navigation bar we have 2 buttons. Now we will click on **Import XML**.

- This will redirect you the to **Import XML** Page.

[image assetsSrc="28-import-xml.png" /]


- We will click on **Import Pictures**.

[image assetsSrc="29-import-picture.png" /]


- You will see a preview of the **XML document**. By Clicking on the button, we will print the result on our project's console and save the **XML** in our database.

- We can open our project and see that the results are printed on the console.

[image assetsSrc="30-import-picture-console.png" /]

-  To be sure that everything works, we open the database and see that all the results are there.


[image assetsSrc="31-import-check-db.png" /]

- Repeat the same process for **Teams** and **Players**.


## Summary

- This is an example of the exam that you will have. Before the exam start, be sure that you have your own class for the **XML Parser**. You can use the one from the exam preparation but be sure to understand it. On the real exam, you might not have enough time to implement it.
- Your real exam will be the same but the **theme** of the project will be different. (Different Entities)

[/slide]