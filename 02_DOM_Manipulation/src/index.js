//BookStore has been moved to data.js 

// console.log(bookStore);

// Add Function to Generate Header
    // name: 'Easley\'s Technical Books'
    // location: "Seattle"
    // number: 9999999999

    // console.log(parentList);

    const parentList = document.querySelector('#book-list');

    function renderHeader() {
        document.querySelector('#name').textContent = bookStore.name;
        document.querySelector('#location').textContent = bookStore.location;
        document.querySelector('#number').textContent = bookStore.number;
    }

// Add Function to Generate Footer
    // name: 'Easley\'s Technical Books'
    // location: "Seattle"
    // number: 9999999999

    function renderFooter() {
        // console.log(document.getElementsByTagName('div'));
        const footerDivs = document.querySelectorAll('footer div');
        
        footerDivs[0].textContent = bookStore.name;
        footerDivs[1].textContent = bookStore.location;
        footerDivs[2].textContent = bookStore.number;

        // const bookStoreValues = [ bookStore.name, bookStore.location, bookStore.number ];
        // footerDivs.forEach(div => div.textContent =  );
    }

// console.log(bookStore.inventory);

// Add Function to Generate Book Cards
    // title
    // author
    // price
    // imageUrl

// bookStore.inventory.forEach(book => { 
//     // console.log(book) 

//     // Create DOM Elements
//     // 1 li element => Container
//     // 1 h3 element, 2 p elements, 1 img element, 1 btn element
    
//     const bookCard = document.createElement('li');
//     const title = document.createElement('h3');
//     const author = document.createElement('p');
//     const price = document.createElement('p');
//     const img = document.createElement('img');
//     const button = document.createElement('button');

//     // Populate DOM Elements with Appropriate Context
//     title.textContent = book.title;
//     author.textContent = book.author;
//     price.textContent = book.price;
//     img.src = book.imageUrl;
//     button.textContent = 'Delete';

//     bookCard.className = 'list-li';

//     // Wrap / Append These to One Another
//     bookCard.append(title, author, price, img, button);
//     parentList.append(bookCard);

//     // parentList.append(bookCard1, bookCard2, bookCard3, ...);
// });

// bookStore.secondInventory.forEach(book => { 
//     // console.log(book) 

//     // Create DOM Elements
//     // 1 li element => Container
//     // 1 h3 element, 2 p elements, 1 img element, 1 btn element
    
//     const bookCard = document.createElement('li');
//     const title = document.createElement('h3');
//     const author = document.createElement('p');
//     const price = document.createElement('p');
//     const img = document.createElement('img');
//     const button = document.createElement('button');

//     // Populate DOM Elements with Appropriate Context
//     title.textContent = book.title;
//     author.textContent = book.author;
//     price.textContent = book.price;
//     img.src = book.imageUrl;
//     button.textContent = 'Delete';

//     bookCard.className = 'list-li';

//     // Wrap / Append These to One Another
//     bookCard.append(title, author, price, img, button);
//     parentList.append(bookCard);

//     // parentList.append(bookCard1, bookCard2, bookCard3, ...);
// });

function renderCard(book) {
    const bookCard = document.createElement('li');
    const title = document.createElement('h3');
    const author = document.createElement('p');
    const price = document.createElement('p');
    const img = document.createElement('img');
    const button = document.createElement('button');

    // Populate DOM Elements with Appropriate Context
    title.textContent = book.title;
    author.textContent = book.author;
    price.textContent = book.price;
    img.src = book.imageUrl;
    button.textContent = 'Delete';

    bookCard.className = 'list-li';

    // Wrap / Append These to One Another
    bookCard.append(title, author, price, img, button);
    parentList.append(bookCard);
}

// Function Invocations
renderHeader();
renderFooter();

// bookStore.inventory.forEach((book, somethingElse) => renderCard(book, somethingElse));
// DRY => DON'T REPEAT YOURSELF
bookStore.inventory.forEach(renderCard);
// bookStore.secondInventory.forEach(renderCard);

// DOM => Client / UI / Front End
// API => Server / DB / Back End

// API => Menu at a Restaurant
    // Endpoints => GET, POST, PATCH / PUT, DELETE