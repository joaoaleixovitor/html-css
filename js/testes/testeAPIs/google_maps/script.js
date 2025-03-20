const url = "https://www.openstreetmap.org/";

async function getMaps() {
    const response = await fetch(url, {
        mode:"no-cors"
    });


    const data = await response.json;
    console.log(data);
}

getMaps();
