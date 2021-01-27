[slide hideTitle]

# Homework

[/slide]

[slide hideTitle]

# Problem: Bookshop system

### Description

Create database for a **Bookshop System**. 

A bookshop keeps **books**. 

A book can have **  ** and many categories. 

Each category can be placed on many books. 

Let's create a class for each main table.
-	**Book**:
     -  id, title (between 1..50 symbols), 
     -  description (optional, up to 1000 symbols), 
     -  edition type (**NORMAL, PROMO or GOLD**), 
     -  price, copies, release date (optional), 
     -  age     restriction (**MINOR, TEEN or ADULT**)
-	**Author**:
    - id, 
    - first name (optional) 
    - and last name
-	**Category**:
    - id, 
    - name

Assume everything, which is not market (optional), is mandatory.

The final schema of the database should look like that:

[image assetsSrc="Spring-data-intro-hw.png" /]
[/slide]

[slide hideTitle]

# Problem: Seed Data into the Database

Create **seedDatabase()** method in the **ConsoleRunner class**. 

That method will fill records in the database.

Use the provided **files (categories.txt, authors.txt, books.txt)** and import the data from them.

```java
//Importing Books from File “books.txt”

//TODO seed Authors from file authors.txt
//TODO seed categories from file categories.txt

BufferedReader booksReader = new BufferedReader(new FileReader("books.txt"));
String line = booksReader.readLine();
while((line = booksReader.readLine()) != null){
    String[] data = line.split("\\s+");

    int authorIndex = random.nextInt(authors.size());
    Author author = authors.get(authorIndex);
    EditionType editionType = EditionType.values()[Integer.parseInt(data[0])];
    SimpleDateFormat formatter = new SimpleDateFormat("d/M/yyyy");
    Date releaseDate = formatter.parse(data[1]);
    int copies = Integer.parseInt(data[2]);
    BigDecimal price = new BigDecimal(data[3]);
    AgeRestriction ageRestriction = AgeRestriction.values()[Integer.parseInt(data[4])];
    StringBuilder titleBuilder = new StringBuilder();
    for (int i = 5; i < data.length; i++) {
        titleBuilder.append(data[i]).append(" ");
    }
    titleBuilder.delete(titleBuilder.lastIndexOf(" "), titleBuilder.lastIndexOf(" "));
    String title = titleBuilder.toString();

    Book book = new Book();
    book.setAuthor(author);
    book.setEditionType(editionType);
    book.setReleaseDate(releaseDate);
    book.setCopies(copies);
    book.setPrice(price);
    book.setAgeRestriction(ageRestriction);
    book.setTitle(title);
    //TODO add random categories for current book
   
    bookService.save(book);
}
``` 
[/slide]
