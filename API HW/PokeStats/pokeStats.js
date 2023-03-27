function comparePokemonStats() {
    const pokemon1Name = document.getElementById("pokemon1Input").value.toLowerCase();
    const pokemon2Name = document.getElementById("pokemon2Input").value.toLowerCase();

    const apiUrl1 = `https://pokeapi.co/api/v2/pokemon/${pokemon1Name}`;
    const apiUrl2 = `https://pokeapi.co/api/v2/pokemon/${pokemon2Name}`;

    Promise.all([fetch(apiUrl1), fetch(apiUrl2)])
        .then(responses => Promise.all(responses.map(response => response.json())))
        .then(data => {
            const pokemon1 = data[0];
            const pokemon2 = data[1];

            const pokemon1SpriteUrl = pokemon1.sprites.front_default;
            const pokemon2SpriteUrl = pokemon2.sprites.front_default;

            const pokemon1Stats = pokemon1.stats;
            const pokemon2Stats = pokemon2.stats;

            let statsComparison = "<h2>Stats Comparison</h2><ul>";

            for (let i = 0; i < pokemon1Stats.length; i++) {
                const pokemon1StatName = pokemon1Stats[i].stat.name;
                const pokemon1StatValue = pokemon1Stats[i].base_stat;
                const pokemon2StatName = pokemon2Stats[i].stat.name;
                const pokemon2StatValue = pokemon2Stats[i].base_stat;

                statsComparison += `
                    <li>${pokemon1StatName}: ${pokemon1StatValue} vs. ${pokemon2StatValue}</li>
                `;
            }

            statsComparison += "</ul>";
            const pokemonStatsDisplay = document.getElementById("pokemonStats");
            pokemonStatsDisplay.innerHTML = `
                <img src="${pokemon1SpriteUrl}" alt="${pokemon1Name}"><br>
                <img src="${pokemon2SpriteUrl}" alt="${pokemon2Name}"><br>
                ${statsComparison}
            `;
        })
        .catch(error => {
            console.error(error);
            const pokemonStatsDisplay = document.getElementById("pokemonStats");
            pokemonStatsDisplay.innerHTML = "An error occurred while retrieving the Pokémon stats.";
        });
}
