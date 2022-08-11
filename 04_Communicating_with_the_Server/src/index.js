// BREAK UNTIL :02

document.addEventListener('DOMContentLoaded', () => {

    // const myArray = [];
    // const myOtherArray = Array.new([]);

    // // 👇️ Example promise
    // const p = Promise.reject('CONTENTS');

    // p.then(value => {
    //     console.log(`SUCCESS! ${value}`); // 👉️ "hello"
    // }).catch(err => {
    //     console.log(`ERROR! ${err}`);
    // });

    // promise => box
        // statuses => pending, fulfilled, rejected 
        // contents => what's returned / passed on once the promise is resolved
    
    // console.log(fetch('http://localhost:3000/stores'))

    // Handle GET Request
    function handleRequest(url) {
        // console.log(fetch(url))
        return fetch(url)
        .then(res => console.log(res.json()));
    }

    // Handle POST Request

    // Handle PUT / PATCH Request

    // Handle DELETE Request

    function renderHeaderFooter(store) {
        renderHeader(store);
        renderFooter(store);
    }

    // Render Response Data => Store 
    // Initial Store Render
    handleRequest('http://localhost:3000/stores/1')
    .then(renderHeaderFooter)
    .catch(console.log);


    // Render Response Data => Books
    handleRequest('http://localhost:3000/books')
    .then(books => books.forEach(renderBookCard))
    .catch(console.log);

    // // Render Response Data => Stores
    handleRequest('http://localhost:3000/stores')
    .then(stores => stores.forEach(renderStoreCard))
    .catch(console.log);


    // Render Functions

    const storesContainer = document.querySelector('#stores');

    // Renders Store Card
    function renderStoreCard(store) {
        // create necessary elements
        const storeCard = document.createElement('li');
        const storeName = document.createElement('h3');
        const storeLocation = document.createElement('p');
        const storeHours = document.createElement('p');

        storeCard.className = 'list-li'

        // populate elements with appropriate content
        storeName.textContent = store.name;
        storeLocation.textContent = store.location;
        storeHours.textContent = store.hours;

        // appending to the DOM as necessary
        storeCard.append(storeName, storeLocation, storeHours);
        storesContainer.append(storeCard);

        // add event handling behaviors
        storeCard.addEventListener('click', () => { 
            handleRequest(`http://localhost:3000/stores/${store.id}`) 
            .then(renderHeaderFooter)
            .catch(console.log);
        })
    }

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
        const li = document.createElement('li')
        const h3 = document.createElement('h3')
        const pAuthor = document.createElement('p')
        const pPrice = document.createElement('p')
        const img = document.createElement('img')
        const btn = document.createElement('button')

        h3.textContent = cardData.title
        pAuthor.textContent = cardData.author
        pPrice.textContent = `$${cardData.price}`
        btn.textContent = 'Delete'

        img.src = cardData.imageUrl
        li.className = 'list-li'

        //Event Listeners 
        btn.addEventListener('click',()=>li.remove())
    
        li.append(h3,pAuthor,pPrice,img,btn)
        document.querySelector('#book-list').append(li)
    }

// Event handlers 
    function handleForm(e){
        e.preventDefault()
        //Builds Book
        const book = {
            title: e.target.title.value,
            author:e.target.author.value,
            price: e.target.price.value,
            imageUrl: e.target.imageUrl.value,
            inventory:e.target.inventory.value,
            reviews:[]
        }

        // add each new book to bookStore inventory
        bookStore.inventory.push(book);

        renderBookCard(book)
    }

    //Invoking functions
    // Changes are not persisted
    // renderHeader(bookStore)
    // renderFooter(bookStore)
    // bookStore.inventory.forEach(renderBookCard)
    document.querySelector('#book-form').addEventListener('submit', handleForm)
})