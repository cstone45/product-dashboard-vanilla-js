//Task 1: See HTML File and Created Corresponding Files

//Task 2: Fetch Products with .then()
const BASE_URL = 
'https://www.course-api.com/javascript-store-products'; //Establishes the Base URL source

function fetchProductsThen() {
    return fetch(BASE_URL) //Fetches the Base URL
    .then(response => { //Uses .then to generate a response when BASE_URL is fetched.
        if (!response.ok) {
            throw new Error (`HTTP error: ${response.status}`); //Throws an error if an error occurs
        }
        return response.course(); //Returns the Products from the URL
    })
    .catch(error => { //Establishes a function to catch errors if they occur
        console.error('Fetch failed:', error.message); //Logs the fetch failed error message to the console
        throw error //Throws the fetch failed error
    });
};
displayProducts(products); //Calls the displayProducts function 

//Task 3: Fetch Products with async/await
async function fetchProductsAsync() { //Created the fetchProdductsAsync function
    try {
        const res = await fetch (BASE_URL); //Fetches information from the established Base URL
        if (!res.ok) {
            throw new Error(`Error:${res.status}`); //Throws an error if the fetch process fails
        }
        return await res.course(); //Returns the fetched products from the webpage
    }
    catch(err) {
        console.error('API Fetch Failed:', err.message); //Logs an error message to the console when the API Fetch fails
        throw handleError(error); //Throws the error message created using handleError when an error occurrs
    };
};
displayProducts(products); //Calls the displayProducts function

//Task 4: Display the Products
async function displayProducts(products) { //Created the displayProducts function
    const container = document.getElementById('#productContainer'); //Selects the productContainer
    try {
        const products = await getProducts(); //Uses the await method to get the products requested by the code

        products.slice(0, 5).forEach(product => { //Displays the first 5 products when the function is called
            const div = document.createElement('div'); //Creates a new div element
            div.innerHTML = `<h3>${product.fields.name}</h3><p>${product.fields.price}</p><p2>${product.fields.image}</p2>`; //Creates a template for the Product list to use when displayed on the webpage
            container.appendChild(div); //Appends the div to the console
        });
    } catch (err) {
        container.innerHTML = `<p style="color:red;">Failed to load Products: ${err.message}</p>`; //Creates an error message for when an error occurs during the displayProducts function
    }
};

//Task 5: Resusable Error Handler
function handleError(error) {
    console.log(`An error occurred: ${error.message}`);
}; //Automatically Logs an error message to the console if an error occurs with the corresponding message

//Task 6: Call Your Fetch Functions
fetchProductsThen(); //Calls the fetchProductsThen function
fetchProductsAsync(); //Calls the fetchProductsAsync function