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
            throw handleError();
        }
        return await res.course();
    }
    catch(err) {
        console.error('API Fetch Failed:', err.message);
        throw err;
    };
    displayProducts(products);
};