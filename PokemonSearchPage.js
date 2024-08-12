console.log("Testing");
async function fetchPokemonData(pokemonName) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`); // Obtaining the info from the website.
    const pokemonData = await response.json(); // Converts the fetched data into an object.
    console.log(pokemonData);
    return pokemonData;
  }
  catch(error){
    console.log("Error fetching data:", error);
    const userInfoElement = document.getElementById("pokemon-info");
    userInfoElement.textContent = "Failed to fetch pokemon data";
  }
}

const handleSubmit = async (event)=>{
    event.preventDefault(); // Prevents the page from refreshing upon a submit event.
    const pokemonName = document.getElementById("search-pokemon").value;
    console.log(pokemonName);
    const pokemonData = await fetchPokemonData(pokemonName);
    const pokemonInfoElement = document.getElementById("pokemon-info");

    if (pokemonData) {

      pokemonInfoElement.innerHTML = `
      <div class="card">
        <h2 class="card-title text-center">${pokemonData.name}</h2>
        <div class="card-body text-center">
          <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
          <h3>Abilities</h3>
          <ul>
              ${pokemonData.abilities.map(a => `<li>${a.ability.name}</li>`).join("")}
          </ul>
          <h3>Base Experience</h3>
          <p>${pokemonData.base_experience}</p>
          <h3>Sounds:</h3>
          <audio src="${pokemonData.cries.latest}" controls></audio><br>
          <audio src="${pokemonData.cries.legacy}" controls></audio>
        </div>
      </div>
      `
  }
}