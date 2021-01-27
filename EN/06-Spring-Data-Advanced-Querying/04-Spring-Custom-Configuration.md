[slide hideTitle]

# Spring Custom Configuration

In general Spring Framework is made easy to configure. 

So far, we have configured our project with  **Spring** application.properties file.

```java
//application.properties

#Data Source Properties
spring.datasource.driverClassName = com.mysql.jdbc.Driver
spring.datasource.url = jdbc:mysql://localhost:3306/shampoo_company?useSSL=false&createDatabaseIfNotExist=true
spring.datasource.username = root
spring.datasource.password = 1234
```

[/slide]

[slide hideTitle]

# Java-Based Configuration

Further configuration is done through the JavaConfig file.

The **JavaConfig.java** file refers to the annotation-based configuration, 

back in the days instead of this file, it was using the original XML based configuration.

The actual JavaConfig component is the one that goes through the class files and annotations to build the configuration (as opposed to going through an XML file to build the configuration) and registers your @Beans.

Let's have a look at one **Java.Config** file.

```java
    @Bean
    public EntityManagerFactory entityManagerFactory() {                //This is the JPA configuration

        HibernateJpaVendorAdapter vendorAdapter = new HibernateJpaVendorAdapter();
        vendorAdapter.setDatabase(Database.MYSQL);
        vendorAdapter.setGenerateDdl(true);
        vendorAdapter.setShowSql(true);
        LocalContainerEntityManagerFactoryBean factory = new LocalContainerEntityManagerFactoryBean();
        factory.setJpaVendorAdapter(vendorAdapter);
        factory.setPackagesToScan("com.demo.domain");                  //This is the models package.
        factory.setDataSource(dataSource());
        Properties jpaProperties = new Properties();
        jpaProperties.setProperty("hibernate.hbm2ddl.auto","validate");
        jpaProperties.setProperty("hibernate.format_sql", "true");
        factory.setJpaProperties(jpaProperties);
        factory.afterPropertiesSet();
        return factory.getObject();
    }

@Bean
public PlatformTransactionManager transactionManager() {                //Register a transaction manager.
        JpaTransactionManager txManager = new JpaTransactionManager();
        txManager.setEntityManagerFactory(entityManagerFactory());
        return txManager;
}
```

[/slide]