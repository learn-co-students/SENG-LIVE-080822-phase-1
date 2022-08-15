// CRUD

// C = Create

// R => Read

// U => Update

// D => Delete

document.addEventListener('DOMContentLoaded', () => {
    // Fetch requests 
        // GET Request 
        function fetchResource(url){
            return fetch(url)
            .then(res => res.json());
        }

        // POST Request
        function createResources(url, body){
            return fetch(url,{
                method: 'POST', 
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            })
            .then(res => res.json());
        }

        // PATCH vs. PUT
        // PATCH => Makes Singular Change
        // PUT => Replaces Entire Original Object 

        function patchResource(url, body) {
            
            // No Error Handling
            // Not Working With Returned Data
            
            return fetch(url,{
                method: 'PATCH', 
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            })
            .then(res => res.json())
            // .then(data => console.log(data))
            // .catch(error => console.log(error));
        }

        function deleteResource(url) {
            return fetch(url,{
                method: 'DELETE'
            })
            .then(res => res.json())
        }

    // Rendering functions
        // Renders Header
        function renderHeader(store){
            document.querySelector('h1').textContent = store.name;
        }
        // Renders Footer
        function renderFooter(store){
            const footerDivs = document.querySelectorAll('footer div');
            footerDivs[0].textContent = store.name;
            footerDivs[1].textContent = store.address;
            footerDivs[2].textContent = store.hours;
        }
    
        function renderBookCard(cardData) {
            const li = document.createElement('li');
            const h3 = document.createElement('h3');
            const pAuthor = document.createElement('p');
            const pPrice = document.createElement('p');
            const pInventory = document.createElement('input');
            const img = document.createElement('img');
            const btn = document.createElement('button');
    
            h3.textContent = cardData.title;
            pAuthor.textContent = cardData.author;
            pPrice.textContent = `$${cardData.price}`;
            pInventory.type = 'number';
            pInventory.value = cardData.inventory;
            btn.textContent = 'Delete';
    
            img.src = cardData.imageUrl;
            li.className = 'list-li';
    
            //Event Listeners 
            btn.addEventListener('click', () => handleDeleteRequest(cardData.id, li));
            pInventory.addEventListener('change', e => handlePatchRequest(cardData.id, e.target.value));

            li.append(h3,pAuthor,pPrice,pInventory,img,btn);
            document.querySelector('#book-list').append(li);
        }
    
    // Event Handlers
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
            };

            // Optimistic Rendering
            // renderBookCard(book);

            createResources('http://localhost:3000/books', book)
            .then(renderBookCard)
            .catch(e => { 
                // removeBookCard(book);
                console.error(e);
            });
        }

        function handlePatchRequest(id, body) {
            patchResource(
                `http://localhost:3000/books/${id}`, 
                { inventory: body }
            )
            .then(data => console.log(data))
            .catch(error => console.log(error));
        }

        function handleDeleteRequest(id, bookCard) {
            deleteResource(`http://localhost:3000/books/${id}`)
            .then(data => { 
                console.log(data);
                bookCard.remove();
            })
            .catch(error => console.log(error));
        }
    
    
    // Invoking functions    
        fetchResource('http://localhost:3000/stores/1')
        // Handle Rendering
        .then(store => {
            renderHeader(store)
            renderFooter(store)
        })
        // Handle Error Catching
        .catch(e => console.error(e));
    
        fetchResource('http://localhost:3000/books')
        .then(books => books.forEach(renderBookCard))
        .catch(e => console.error(e));
    
        document.querySelector('#book-form').addEventListener('submit', handleForm);
})