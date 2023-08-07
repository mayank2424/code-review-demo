/** Async data fetching */

const fetchData = async(url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function fetchMultiple() {
    const results = [];

    for(const url of urls) {
        const data = await fetchData(url);
        results.push(data);
    }

    return results;
}
