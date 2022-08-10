# Events

## SWBAT
- [ ] Explain the importance of event handling in modern web applications
- [ ] Explain how callback functions are used with event listeners
- [ ] Observe how to add a form to a webpage using HTML and JavaScript
- [ ] Observe how onSubmit events are used to receive information from Users via forms
- [ ] Explain the purpose of `.preventDefault()` method
- [ ] Use MDN to discover and implement JavaScript events

## Deliverables 

<details>
    <summary>Add an eventListener to any element and log the event object.</summary>
<code>
    const bodyElement = document.querySelector('body');

    // Why do we pass a callback function expression and not a function invocation?
    body.addEventListener('click', e => console.log(e));
</code>
</details>
<br>
<details>
    <summary>In <code>renderBookCard</code>, add an event listener to the Delete button.
    Add a callback that removes the appropriate bookCard. You can do this through the <code>li</code> itself or the <code>click</code> event.</summary>
<br>
<code>  
    
    // through 'click' event
    btn.addEventListener('click', e => e.target.parentElement.remove());

    // directly through li
    btn.addEventListener('click', () => li.remove());

</code>
</details>
<br>
<details>
    <summary>Build a callback function, <code>handleForm</code>, that uses the form's <code>submit</code> event to build a newCard object using <code>renderBookCard</code>. </summary>
<br>
<code>  
    
    function handleForm(e){
        
        // prevent default page refresh
        e.preventDefault();
        
        // build new book object
        const book = {
            title: e.target.title.value,
            author: e.target.author.value,
            price: e.target.price.value,
            imageUrl: e.target.imageUrl.value,
            inventory:e.target.inventory.value,
            reviews: []
        }

        // pass newly made book object to renderBookCard
        renderBookCard(book);
    }

    // add eventListener to form#book-form handle form submit event
    document.querySelector('#book-form').addEventListener('submit', handleForm)

</code>
</details>
<br>
<details>
    <summary>Add a <code>DOMContentLoaded</code> eventListener to the document and move all of our UI logic to within the callback function. Why might we want to do this?</summary>
<br>
<code>  

    document.addEventListener('DOMContentLoaded', () => {
        // ...all DOM dependent rendering / event handling logic here
    });

</code>
</details>
<br>
<details>
    <summary>In <code>data.js</code>, create a <code>newBookStore</code> object with the same properties as <code>bookStore</code>. Using JS, add a button that toggles the store information to use for the <code>header</code>, <code>footer</code>, and appropriate <code>li</code> elements.</summary>
<br>
<code>  

    // data.js
        
        const secondBookStore = {
            location: "New York",
            address:'999 st ne NYC ny 11111',
            ...
        }

    // index.html
    
        <div class="container">
            <div class="vertical-center">
                <button id="switch-btn">Switch Stores</button>
            </div>
        </div>

    // index.js

        function renderBookList(bookStore) {
            bookStore.inventory.forEach(renderBookCard);
        }

        function clearBookList() {
            document.querySelectorAll('li').forEach(li => li.remove());
        }

        function loadPage(bookStore) {
            renderHeader(bookStore);
            renderFooter(bookStore);
            renderBookList(bookStore);
        }

        // Initial page load with Store I
        loadPage(bookStore);

        // Define mutable variable to handle conditional logic
        // in switchStore() below
        let toggleSwitch = false;

        function switchStore() {

            // Each invocation, reassign toggleSwitch to its opposite
            toggleSwitch = !toggleSwitch;

            // Conditional logic to dynamically render each store's page
            if (!toggleSwitch) {

                // Clear out previously rendered list of books
                clearBookList();

                // Re-render header, footer, and booklist for Store I
                loadPage(bookStore);
            } else {
                // Clear out previously rendered list of books
                clearBookList();

                // Re-render header, footer, and booklist for Store II
                loadPage(secondBookStore)
            }
        }

</code>
</details>
<br>

## Events
When the user interacts with the dom, it fires events that trigger an effect in our JavaScript code that can do something. Such as updating the dom or adding content to the database. 

To pick up events, our code must 'listen' for the event. addEventListener will do just that. It takes 2 arguments, the first is the event it's listening for, and the second is the code that will run once the event is triggered.

```
div.addEventListener('click', () => console.log('hi'))

//When events are triggered, the event object is passed to the second argument as an argument to the callback.
div.addEventListener('click', (e) => console.log(e))

```

There are many event types: [Events](https://developer.mozilla.org/en-US/docs/Web/Events)


## Forms
Forms can have a variety of user inputs users can interact with.
The submit event can be used to retrieve the value of those inputs. 

When a form submits, it will, by default, try to send a request and refresh the page. To prevent that, we need to call e.preventDefault(). Afterward, the event can be used to grab the form values through the target attribute.

```
<form>
    <input type="text" name='favColor'/>
    <input type="submit" />
</form>

form.addEventListener('submit',(e)=> {
    e.preventDefault
    //Here we are using the name property from the form to target the specific input.
    console.log(e.target.faveColor.value)
})

```