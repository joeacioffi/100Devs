function getRandomCat() {
    const apiKey = "live_zS7rA5cWXIFEpB30M19eRCZPIn1dVmDwx6maw6uiA864yExaMDQIoeFwpauIndVC";
    const apiUrl = "https://api.thecatapi.com/v1/images/search?mime_types=gif";

    fetch(apiUrl, {
        headers: {
            "x-api-key": apiKey
        }
    })
        .then(response => response.json())
        .then(data => {
            const catGifUrl = data[0].url;
            const catGifDisplay = document.getElementById("catGifDisplay");
            catGifDisplay.innerHTML = `<img src="${catGifUrl}" alt="Random Cat Gif">`;
        })
        .catch(error => {
            console.error(error);
            const catGifDisplay = document.getElementById("catGifDisplay");
            catGifDisplay.innerHTML = "An error occurred while retrieving the cat gif.";
        });
}

