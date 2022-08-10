// CRUD => Create, Read, Update, Delete

// const bodyElement = document.querySelector('body');

// // console.log(bodyElement);

// function myFunction() {
//     console.log("Hello!");
// }

// // bodyElement.addEventListener('click', myFunction());
// // bodyElement.addEventListener('click', () => myFunction());
// bodyElement.addEventListener('click', myFunction);

document.addEventListener('DOMContentLoaded', () => {
    
    // Renders Header
    function renderHeader(bookStore){
        document.querySelector('h1').textContent = bookStore.name;
    }

    // Renders Footer
    function renderFooter(bookStore){
        const footerDivs = document.querySelectorAll('footer div')
        footerDivs[0].textContent = bookStore.name
        footerDivs[1].textContent = bookStore.address
        footerDivs[2].textContent = bookStore.hours
    }

    // Renders Each New Book Card
    function renderBookCard(cardData) {
        // clearList();
        
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

        // btn.addEventListener('click', e => console.log(e.target.parentNode.remove()));
        btn.addEventListener('click', () => li.remove());

        li.append(h3,pAuthor,pPrice,img,btn)
        document.querySelector('#book-list').append(li)
    }

    const form = document.querySelector('#book-form');
    form.addEventListener('submit', handleForm);

    // Handles Form Submission
    // event => submit event
    function handleForm(e) {
        // prevent default form submission
        e.preventDefault();

        // console.log(e.target["form-title"].value);
        // console.log(e.target.title.value);
        // console.log(e.target.author.value);
        // console.log(e.target.price.value);
        // console.log(e.target.imageUrl.value);
        // console.log(e.target.inventory.value);

        const newBook = {
            // id: bookStore.inventory.length ++,
            // id: bookStore.inventory.length = bookStore.inventory.length + 1,
            
            id: bookStore.inventory.length + 1,
            title: e.target.title.value,
            author: e.target.author.value,
            price: e.target.price.value,
            reviews: [],
            inventory: e.target.inventory.value,
            imageUrl: e.target.imageUrl.value,
        }
        
        // add newBook to inventory
        bookStore.inventory.push(newBook);

        // render new book card
        renderBookCard(newBook);
    }

    // Function Invocations
    function loadPage(bookStore) {
        renderHeader(bookStore);
        renderFooter(bookStore);
        bookStore.inventory.forEach(renderBookCard);
    }

    // Initial Page Load
    loadPage(bookStore);

    const switchButton = document.querySelector('#switch-btn');
    switchButton.addEventListener('click', handleSwitch);

    let toggleStore = false;

    function clearList() {
        // clear out list of bookCards
        document.querySelectorAll('li').forEach(li => li.remove());
    }

    function handleSwitch() {
        clearList();
        
        // switch value of toggleStore to its opposite
        toggleStore = !toggleStore;
        
        if(toggleStore) {
            loadPage(secondBookStore);
        } else {
            loadPage(bookStore);
        }    
    }
});