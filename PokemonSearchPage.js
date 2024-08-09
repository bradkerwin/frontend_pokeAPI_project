console.log("Testing");
async function fetchPokemonData(pokemonName) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`); // Obtaining the info from the website.
    const pokemonData = await response.json(); // Converts the fetched data into an object.
    console.log(pokemonData);
    return pokemonData;
}

const handleSubmit = async (event)=>{
    event.preventDefault(); // Prevents the page from refreshing upon a submit event.
    const pokemonName = document.getElementById("search-pokemon").value;
    console.log(pokemonName);
    const pokemonData = await fetchPokemonData(pokemonName);
    const pokemonInfoElement = document.getElementById("pokemon-info");

  
    pokemonInfoElement.innerHTML = `<h2>${pokemonData.name}</h2>
    <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
    <h3>Abilities</h3>
    <ul>
        ${pokemonData.abilities.map(a => `<li>${a.ability.name}</li>`).join("")}
    </ul>
    <h3>Base Experience</h3>
    <p>${pokemonData.base_experience}</p>
    <h3>Sounds:</h3>
    <audio src="${pokemonData.cries.latest}" controls></audio><br>
    <audio src="${pokemonData.cries.legacy}" controls></audio>`
}

async function displayUserData() {
    try{
      const userData = await fetchPokemonData();
      const userInfoElement = document.getElementById("pokemon-info");
    }
    catch(error){
      console.log("Error fetching data:", error);
      const userInfoElement = document.getElementById("pokemon-info");
      userInfoElement.textContent = "Failed to fetch pokemon data";
    }
  }


