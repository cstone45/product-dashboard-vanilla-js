//Task 1: See HTML File and Created Corresponding Files

//Task 2: Fetch Products with .then()
const BASE_URL = 
'https://www.course-api.com/javascript-store-products';

function fetchProductsThen() {
    return fetch(BASE_URL)
    .then(response => {
        if (!response.ok) {
            throw new Error (`HTTP error: ${response.status}`);
        }
        return response.course();
    })
    .catch(error => {
        console.error('Fetch failed:', error.message);
        throw error
    });
};

//Task 3: Fetch Products with async/await
async function fetchProductsAsync() {
    try {
        const res = await fetch (BASE_URL);
        if (!res.ok) {
            throw new Error(`Error:${res.status}`);
        }
        return await res.course();
    }
    catch(err) {
        console.error('API Fetch Failed:', err.message);
        throw handleError(error);
    };
};
displayProducts(products);

//Task 4: Display the Products
async function displayProducts(products) {
    const container = document.getElementById('#productContainer');
    try {
        const products = await getProducts();

        products.slice(0, 5).forEach(product => {
            const div = document.createElement('div');
            div.innerHTML = `<h3>${product.name}</h3><p>${product.price}</p><p2>${product.image}</p2>`;
            container.appendChild(div);
        });
    } catch (err) {
        container.innerHTML = `<p style="color:red;">Failed to load Products: ${err.message}</p>`;
    }
};

//Task 5: Resusable Error Handler
async function handleError(error) {
    console.log(`An error occurred: ${err.message}`);
};