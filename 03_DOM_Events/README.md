# DOM Events

### Learning Objectives
- [x] Understand the importance of event handling in modern web applications
- [x] Understand how callback functions are used with event listeners
- [x] Observe how to add a form to a webpage using HTML and JavaScript
- [x] Observe how onSubmit events are used to receive information from Users via forms
- [x] Explain the purpose of `.preventDefault()` method
- [x] Use MDN to discover and handle multiple JavaScript events

## Deliverables 

<details>
    <br>
    <summary>Add a <code>click</code> event listener to any DOM element and log the event object.</summary>

    const bodyElement = document.querySelector('body');

    // Why do we pass a callback function expression and not a function invocation?
    body.addEventListener('click', e => console.log(e));
</details>
<br>
<details>
    <br>
    <summary>In <code>renderBookCard</code>, add a <code>click</code> event listener to each new <button>Delete</button> button.
    Pass a callback that removes the <code>parentElement</code> book card. You can do this through the <code>li</code> itself or the <code>click</code> event.</summary>
    
    // through 'click' event
    btn.addEventListener('click', e => e.target.parentElement.remove());

    // directly through li
    btn.addEventListener('click', () => li.remove());
</details>
<br>
<details>
    <br>
    <summary>Build a callback function, <code>handleForm</code>, that uses the form's <code>submit</code> event to build a new card object through <code>renderBookCard</code>. </summary>
    
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

    // add event listener to form#book-form handle form submit event
    document.querySelector('#book-form').addEventListener('submit', handleForm)
</details>
<br>
<details>
    <br>
    <summary>Add a <code>DOMContentLoaded</code> event listener to the document and move all of our DOM dependent logic within the callback function. Why might we want to do this?</summary>

    document.addEventListener('DOMContentLoaded', () => {
        // ...all DOM dependent rendering / event handling logic here
    });
</details>
<br>
<details>
    <br>
    <summary>In <code>data.js</code>, create a <code>newBookStore</code> object with the same properties as <code>bookStore</code>. Add a button that toggles between stores and renders content accordingly within the <code>header</code>, <code>footer</code>, and appropriate <code>li</code> elements.</summary>

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

    // style.css

        .container {
            text-align: center;    
        }

        .container button {
            width:190px;
            margin: 15px 5px 15px 5px;
            border: none;
            background-color: #2e824d;
            color: rgb(255, 255, 255);
            padding:3px;
            font-size: large;
            font-weight: bold;
        }

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

</details>
<br>

## Events
As users interact with the DOM, they trigger events that can fire off our JavaScript code to update the DOM or make database changes. 

To pick up events, our code must 'listen' for the event. `addEventListener` will do just that. It takes 2 arguments, the first (1) being the event it's listening for and second (2), the callback function that will run once the event is triggered.

```
div.addEventListener('click', () => console.log('hi'));

// As events are triggered, event objects are passed as an argument to callbacks
div.addEventListener('click', (e) => console.log(e));

```

There are many DOM [event types](https://developer.mozilla.org/en-US/docs/Web/Events).


## Forms
Forms have a variety of <code>inputs</code> that users can interact with. The <code>submit</code> event can be used to retrieve the values of those inputs. 

When a form submits, it will, by default, try to send a request and refresh the page. To prevent that, we need to call <code>e.preventDefault()</code>. Afterward, the <code>event</code> object can be used to pull the form values through the target attribute.

```
<form>
    <input type="text" name='favColor'/>
    <input type="submit" />
</form>

form.addEventListener('submit',(e)=> {
    e.preventDefault;
    
    // Here we are using the 'name' property from the form input to target the corresponding value
    console.log(e.target.faveColor.value);
})

```