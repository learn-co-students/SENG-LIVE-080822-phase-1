// Topics

// Declaring vs. Invoking Functions

    // var myVariable = "Test";

    // console.log(myVariable);

    
    // function myFunction()
    
    // Function Declaration
    // Defining a Spell
    // function sayHello() {
    //     console.log("Hello!");
    // }

    // sayHello();

    // function sayHello() {
    //     console.log("Hello!");
    // }

    // Cannot Be Redeclared or Reassigned
    // const sayHello = () => console.log("Hello!");

    // Cannot Reassign Value for sayHello const
    // sayHello = "Something New";

    // Cannot Redeclare sayHello const
    // const sayHello = "Something New";

    // Function Invocation
    // Casting a Spell
    // sayHello();
    

// Scope
    // Global
    // Function
    // Block

//Data 

const inventory = [
        {
            id:1,
            title: 'NEW TITLE!',
            author: 'Marjin Haverbeke',
            price: 10.00,
            reviews: [{userID: 1, content:'Good book, but not great for new coders'}],
            inventory: 10,
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
            
        },
        {
            id:2,
            title: 'JavaScript & JQuery: Interactive Front-End Web Development',
            author: 'Jon Duckett',
            price: 45.75,
            reviews: [{userID: 15, content:'good way to learn JQuery'}],
            inventory: 2,
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
        },
        {
            id:3,
            title: 'JavaScript: The Good Parts',
            author: 'Douglas Crockford',
            price: 36.00,
            reviews: [{userID: 25, content:'I disagree with everything in this book'}, {userID: 250, content:'Only JS book anyone needs'}],
            inventory: 8,
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
        },
        {
            id:4,
            title: 'JavaScript: The Definitive Guide',
            author: 'David Flanagan',
            price: 25.50,
            reviews: [{userID: 44, content:'Great intro to js book'}, {userID: 350, content:'It really is the Definitive guide'}],
            inventory: 0,
            imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg"
            
        },
        {
            id:5,
            title: 'You Don’t Know JS',
            author: 'Kyle Simpson',
            price: 6.00,
            reviews: [{userID: 76, content:'You can find this for free online, no need to pay for it!'}],
            inventory: 7,
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
        }, 
        {
            id:6,
            title: 'Learn Enough JavaScript to Be Dangerous',
            author: 'Michael Hartl',
            price: 24.00,
            reviews: [{userID: 50, content:'pretty good'}],
            inventory: 5,
            imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQyf6xSyTHc7a8mx17ikh6GeTohc88Hn0UgkN-RNF-h4iOwVlkW'

        },
        {
            id:7,
            title: 'Cracking the Coding Interview',
            author: 'Gayle Laakmann McDowell',
            price: 49.95,
            reviews: [{userID: 99, content:'One of the most helpful books for taking on the tech interview'}, {userID:20, content: 'Great but I just wish it was in JavaScript instead of Java' }],
            inventory: 20,
            imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
        }
    ]

    // Bracket Notation
    // console.log(inventory[0]["title"]);

    // Dot Notation
    // Readability => More Legible
    // Writability => Easier / Less Error Prone
    // inventory[0].title = "My Newest Title"
    // inventory[0]["title"] = "My Newest Title"

    // console.log(inventory[0].title)

    // function doSomething() {
    //     console.log("Something");
    // }

    // doSomething();

    // Create a function that's going to console.log / format the price of any given book
    // Example => For first book, "$10.00"

    // book => Parameter
    // Declarations Go With Parameters
    // function priceFormatter(myBook, second="Hello", third="World") {
    
    // MDN + toFixed => Additional Documentation
    function priceFormatter(myBook) {
        // var price = myBook.price;

        // toString();
        // console.log(price.toString());
        console.log(`$${myBook.price.toFixed(2)}`);
    }

    // inventory[0] => Argument
    // Invocations Go With Arguments
    // priceFormatter(inventory[0]);

    // Create a function that pulls Book Author / Title to create a full string
    // Example => "JavaScript & JQuery: Interactive Front-End Web Development by Jon Duckett is on sale!"
    // function outputTitleAndAuthor(myBook) {
    //     // console.log(`${myBook.title} by ${myBook.author} is on sale!`);
    //     console.log(`${myBook.title} by ${myBook.author} is on sale!`);
    // }

    // Implicit Return
    // const outputTitleAndAuthor = myBook => `${myBook.title} by ${myBook.author} is on sale!`;
    
    // Explicit Return
    
    // Global Scope
    // const myString = "Hello!";

    // const outputTitleAndAuthor = myBook => { 
    //     var fullString = `${myBook.title} by ${myBook.author} is on sale!`;

    //     console.log(myString);

    //     return fullString;
    // }
    
    // // console.log(fullString);

    // let returnValue = outputTitleAndAuthor(inventory[1]);

    // // ...
    // // ...
    // // ...

    // returnValue = "New Value";

    // console.log(returnValue);

    // Create a function to build a new Book object with specific attributes
    // Attributes:
        // Title
        // Price
        // Author
        // ImageUrl

    // {
    //     id:7,
    //     title: 'Cracking the Coding Interview',
    //     author: 'Gayle Laakmann McDowell',
    //     price: 49.95,
    //     reviews: [{userID: 99, content:'One of the most helpful books for taking on the tech interview'}, {userID:20, content: 'Great but I just wish it was in JavaScript instead of Java' }],
    //     inventory: 20,
    //     imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
    // }

    const newTitle = "New Book Title";

    function buildBook(title, price, author, imageUrl, reviews=[], stock=0) {
        const newBook = {};

        // id
        newBook.id = inventory.length + 1;
        
        // inventory.length = inventory.length + 1;
        // newBook.id = inventory.length ++;
        
        // title
        newBook.title = title;

        // price
        newBook.price = price;
        
        // author
        newBook.author = author;

        // reviews
        newBook.reviews = reviews;
        
        // inventory
        newBook.inventory = stock;
        
        // imageUrl
        // If an imageUrl is passed, then we want to set that as the Book's imageUrl
        if(imageUrl) {
            newBook.imageUrl = imageUrl;
        } else {
            // If not, we want to set a default imageUrl
            newBook.imageUrl = "Default URL";
        }
        
        inventory.push(newBook);

        return inventory;
    }

    // inventory.length = 7
    // buildBook(newTitle, 15, "First Author", 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg');
    // // inventory.length = 8
    
    // // inventory.length = 8
    // buildBook(newTitle, 20, "Second Author", 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg', [{title: "First Review"}], 5);
    // // inventory.length = 9

    // buildBook(newTitle, 10, "Third Author", "test", "secondTest");

    // console.log(inventory);

    function callbackFunction() {
        console.log("Do Something!");
    }

    function higherOrderFunction(cb) {
        cb();
    }

    higherOrderFunction(callbackFunction);