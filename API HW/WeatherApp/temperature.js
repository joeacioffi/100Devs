function getTemperature(event) {
    event.preventDefault();
    const apiKey = "3111d2eac2d61da99ad306155ccfabea";
    const cityName = document.getElementById("cityName").value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperature = Math.floor(data.main.temp);
            const temperatureDisplay = document.getElementById("temperatureDisplay");
            temperatureDisplay.innerHTML = `The current temperature in ${cityName} is ${temperature}&deg;F.`;
        })
        .catch(error => {
            console.error(error);
            const temperatureDisplay = document.getElementById("temperatureDisplay");
            temperatureDisplay.innerHTML = "An error occurred while retrieving the temperature.";
        });
}
