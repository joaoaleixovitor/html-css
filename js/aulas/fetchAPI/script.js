const url = "https://dummyjson.com/products"

async function callAPI() {
    const resp = await fetch(url);
    console.log(resp);
}

callAPI();