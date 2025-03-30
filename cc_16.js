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