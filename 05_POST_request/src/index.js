document.addEventListener('DOMContentLoaded', () => {

// Fetch requests 
    // Function for making a GET request 
    // Returns a Promise
    // GET
    function fetchResource(url){
        return fetch('http://localhost:3000/' + url)
        .then(res => res.json())
    }

    // POST
    function createResource(url, object) {
        
        // GET => http://localhost:3000/stores
        // POST => http://localhost:3000/stores
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object)
        })
        .then(res => res.json())
    }

    // PATCH / PUT

    // DELETE
    
    // function postBook(book) {
    //     return fetch(`http://localhost:3000/books`, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(book)
    //     })
    //     .then(res => res.json())
    // }
// Rendering functions
    // Renders Header
    function renderHeader(store){
        document.querySelector('h1').textContent = store.name
    }
    // Renders Footer
    function renderFooter(store){
        const footerDivs = document.querySelectorAll('footer div')
        footerDivs[0].textContent = store.name
        footerDivs[1].textContent = store.address
        footerDivs[2].textContent = store.hours
    }

    function renderBookCard(cardData) {
        const li = document.createElement('li');
        const h3 = document.createElement('h3');
        const pAuthor = document.createElement('p');
        const pPrice = document.createElement('p');
        const img = document.createElement('img');
        const btn = document.createElement('button');

        h3.textContent = cardData.title;
        pAuthor.textContent = cardData.author;
        pPrice.textContent = `$${cardData.price}`;
        btn.textContent = 'Delete';

        img.src = cardData.imageUrl;
        li.className = 'list-li';
        li.id = `${cardData.id}`;

        //Event Listeners 
        btn.addEventListener('click',()=>li.remove());
    
        li.append(h3,pAuthor,pPrice,img,btn);
        document.querySelector('#book-list').append(li);
    }

    function removeBookCard(book) {
        document.querySelector(`#${book.id}`).remove();
    }

    // Event Handlers
    function handleForm(e){
        e.preventDefault();
        
        console.log(e.target["form-title"].value);

        // document.querySelector('.some-class')
        
        // .some-class {
        //     color: "red",
        //     text-decoration: "underline"
        // }

        // const myObject = {
        //     first: "first",
        //     second: "second"
        // }

        // myObject.first // => "first"

        //Builds Book
        const book = {
            title: e.target.title.value,
            author:e.target.author.value,
            price: e.target.price.value,
            imageUrl: e.target.imageUrl.value,
            inventory: e.target.inventory.value,
            reviews:[]
        }
        
        // synchronous - linear
        // let x = 5;
        // let y = 10;
        // console.log(x + y);

        // if (x) {
        //     console.log(x);
        // } else {
        //     console.log(y);
        // }

        // asynchronous
        // createResource('localhost:3000/books', book)
        // .then(data => console.log(data))
        // .catch(err => console.log(err))

        // Optimistic Rendering
        renderBookCard(book);

        createResource('http://localhost:3000/books', book)
        .then(console.log)
        .catch(err => {
            console.log(err);
            // renderBookCard(book);
            removeBookCard(book);
        });
    }

    function handleStoreForm(e){
        // e => 'submit' event
        e.preventDefault();

        //Builds Book
        const store = {
            location: e.target.location.value,
            address: e.target.address.value,
            number: e.target.number.value,
            name: e.target.storeName.value,
            hours: e.target.hours.value
        }

        // console.log(store);

        // // Optimistic Rendering
        // Provides immediate feedback for User
        renderStoreCard(store);

        createResource('http://localhost:3000/stores', store)
        .then(console.log)
        .catch(err => {
            console.log(err);
            // renderBookCard(book);
            removeStoreCard(store);
        });
    }

    // Renders Store Card
    function renderStoreCard(store) {
        // create necessary elements
        const storeCard = document.createElement('li');
        const storeName = document.createElement('h3');
        const storeLocation = document.createElement('p');
        const storeHours = document.createElement('p');

        storeCard.className = 'list-li';
        storeCard.id = `${store.id}`;

        // populate elements with appropriate content
        storeName.textContent = store.name;
        storeLocation.textContent = store.location;
        storeHours.textContent = store.hours;

        // appending to the DOM as necessary
        storeCard.append(storeName, storeLocation, storeHours);
        storesContainer.append(storeCard);

        // add event handling behaviors
        storeCard.addEventListener('click', () => { 
            fetchResource(`stores/${store.id}`) 
            .then(renderHeaderFooter)
            .catch(console.log);
        })
    }

    function removeStoreCard(store) {
        // console.log(store.id);
        
        document.querySelector(`#${store.id}`).remove();
    }

    // BREAK UNTIL :55

    // Invoking functions    
    function renderHeaderFooter(store) {
        renderHeader(store);
        renderFooter(store);
    }

    const storesContainer = document.querySelector('#stores');

    // Render Response Data => Store 
    // Initial Store Render
    fetchResource('stores/1')
    .then(renderHeaderFooter)
    .catch(console.log);

    // Render Response Data => Books
    fetchResource('books')
    .then(books => books.forEach(renderBookCard))
    .catch(console.log);

    // // Render Response Data => Stores
    fetchResource('stores')
    .then(stores => stores.forEach(renderStoreCard))
    .catch(console.log);// Render Functions

    document.querySelector('#book-form').addEventListener('submit', handleForm);
    document.querySelector('#store-form').addEventListener('submit', handleStoreForm);
})