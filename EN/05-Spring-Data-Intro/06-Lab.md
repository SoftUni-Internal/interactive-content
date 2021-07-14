# Lab: Account System

[slide hideTitle]

# Project Setup
Your task is to create an account system that has users with accounts and manages money transfer or withdrawal.

Build the system using the code first approach and Spring Data.

The goal is to implement the services and the repositories

## Creating a new Spring project

- Go to the [start.spring.io](https://start.spring.io/) website to create a new Spring project

From here, we can pick either a Maven or a Gradle project, as well as the language we will use.

We can also select the Spring Boot version.

[image assetsSrc="Spring-data-introduction-Lab-1.png" /]

- Then, configure the metadata: 

[image assetsSrc="Spring-data-introduction-Lab-2.png" /]

- Add the Spring Data JPA and MySQL dependencies: 

[image assetsSrc="Spring-data-introduction-Lab-3.png" /]

- In the resources folder of the project, create a new **applications.properties** file, which will hold the  configurations for the project:

```java
#Data Source Properties
spring.datasource.driverClassName = com.mysql.cj.jdbc.Driver
spring.datasource.url = jdbc:mysql://localhost:3306/new_lab?useSSL=false&createDatabaseIfNotExist=true&allowPublicKeyRetrieval=true&serverTimezone=UTC
spring.datasource.username = root
spring.datasource.password = 12345

#JPA Properties
spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL8Dialect
spring.jpa.hibernate.format_sql = TRUE
spring.jpa.hibernate.ddl-auto = update

###Logging Levels
# Disable the default loggers
logging.level.org = WARN
logging.level.blog = WARN

#Show SQL executed with parameter bindings
logging.level.org.hibernate.SQL = DEBUG
logging.level.org.hibernate.type.descriptor = TRACE
```

Create 3 directories to help organize the project:

- **models** – the directory of our database models (entities)

- **repositories** - the package where we will hold the repository interfaces

- **services** - where our service interfaces and implementations will be stored

[/slide]

[slide hideTitle]

# Database Models

Start by setting up the database models. Each one of them will be as follows:

## The User Entity

| **Columns** | **Constraints** |
|---|---|
| id | Accepts **Long** values ; the **Primary Key** |
| username | A **unique value** for each user |
| age | Accepts **Integer** values |
| accounts | Each user can have many accounts, which will be identified by their **id** |

## The Account Entity

| **Columns**  | **Constraints** |
|---|---|
| id | Accepts **Long** values ; the **Primary Key** |
| balance | Accepts **BigDecimal** values |
| user | The owner of the account, which will be identified by their **id** |

Set up the appropriate tables, columns, column properties and table relations.

[/slide]

[slide hideTitle]

# Repositories

Create two repositories – one for the **User** and another for the **Account**

```java
@Repository
public interface AccountRepository extends JPARepository<Account, Long> {
    Account findAccountById(Long id);
}
```

```java
@Repository
public interface UserRepository extends JPARepository<User, Long> {
    
}
```

Add several methods to help you with the data retrieval.

[/slide]

[slide hideTitle]

# Services

Define several service **interfaces**:

```java
public interface AccountService {
    void withdrawMoney(BigDecimal amount, Long id);
    void transferMoney(BigDecimal amount, Long id);
}
```

```java
public interface UserService {
    void registerUser(User user);
}
```

Implement those services in the implementation classes.

Those classes will work on the business logic of the application.

To do that, they should have a **Repository** according to the service type.

```java
@Service
public class AccountServiceImpl implements AccountService {
    
    private final AccountRepository accountRepository:

    public AccountServiceImpl(AccountRepository accountRepository){
        this.accountRepository = accountRepository;
    }

    public void withdrawMoney(BigDecimal amount, Long id) {...}

    public void transferMoney(BigDecimal amount, Long id) {...}
}
```

```java
@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {...}

    public void register(User user) {...}
}
```

The method implementation logic is up to you. Here are some several tips:

-  **AccountServiceImpl**
    * Money withdrawal - should only happen if account is **present** in the database, **belongs to user** and **has enough balance**
    * Money transfer - should only happen if **account belongs to user** and transfer value is **not negative**

- **UserServiceImpl**
    * **User registration** - should only happen if user does not exist in the database
[/slide]

[slide hideTitle]

# The ConsoleRunner

We will test our application in a **ConsoleRunner** class.

```java
@Component 
public class ConsoleRunner implements CommandLineRunner {

    private UserService userService;
    private AccountService accountService;

    public ConsoleRunner(UserService userService, AccountService accountService){
        this.userService = userService;
        this.accountService = accountService;
    }

    @Override
    public void run(String... args) throws Exception {

    }
}
```

[/slide]

[slide hideTitle]

# Test

Test the application by adding logic in the **ConsoleRunner**'s **run** method class:

```java 
public void run(String... args) throws Exception {
    User user = new User();
    user.setUsername("Peter");
    user.setAge(20);

    Account account = new Account();
    account.setBalance(new BigDecimal(25000));

    user.setAccounts(new HashSet<>(){add(account)});
    userService.registerUser(user);

    this.accountService.withdrawMoney(new BigDecimal(20000), account.getId());
    this.accountService.transferMoney(new BigDecimal(20000), account.getId());
}
```

An **account_system** database should be created with tables if everything is written correctly.
[/slide]
