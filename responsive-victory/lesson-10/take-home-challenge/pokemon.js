// Accordion toggles
document
  .getElementById("toggleAbilities")
  .addEventListener("click", function () {
    const content = document.getElementById("abilitiesContent");
    const expanded = content.style.display === "block";
    content.style.display = expanded ? "none" : "block";
    this.textContent = expanded
      ? "All Known Pokémon Abilities ⌄"
      : "All Known Pokémon Abilities ⌃";
  });

document.getElementById("togglePokemon").addEventListener("click", function () {
  const content = document.getElementById("pokemonListContent");
  const expanded = content.style.display === "block";
  content.style.display = expanded ? "none" : "block";
  this.textContent = expanded
    ? "All Known Pokémon Names ⌄"
    : "All Known Pokémon Names ⌃";
});

// Form submission
document
  .getElementById("pokemonForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();
    const infoBox = document.getElementById("pokemonInfo");
    infoBox.innerHTML = "Loading...";

    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      if (!res.ok) throw new Error("Pokémon not found");
      const data = await res.json();

      let output = "<h2>Selected Pokémon Info</h2><ul>";

      if (document.getElementById("name").checked) {
        output += `<li><strong>Name:</strong> ${data.name}</li>`;
      }
      if (document.getElementById("height").checked) {
        output += `<li><strong>Height:</strong> ${data.height}</li>`;
      }
      if (document.getElementById("weight").checked) {
        output += `<li><strong>Weight:</strong> ${data.weight}</li>`;
      }
      if (document.getElementById("abilities").checked) {
        const abilities = data.abilities.map((a) => a.ability.name).join(", ");
        output += `<li><strong>Abilities:</strong> ${abilities}</li>`;
      }

      output += "</ul>";
      infoBox.innerHTML = output;
    } catch (err) {
      infoBox.innerHTML = `<span style="color: red;">Error: ${err.message}</span>`;
    }
  });

// Fetch all abilities
async function fetchAllAbilities() {
  const listEl = document.getElementById("abilitiesList");
  try {
    const res = await fetch("https://pokeapi.co/api/v2/ability?limit=1000");
    const data = await res.json();

    const abilities = data.results.map((a) => a.name).sort();
    listEl.innerHTML = abilities.map((a) => `<li>${a}</li>`).join("");
  } catch (err) {
    listEl.innerHTML = `<li style="color:red;">Failed to load abilities</li>`;
  }
}

// Fetch all Pokémon
async function fetchAllPokemon() {
  const listEl = document.getElementById("pokemonList");
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1000");
    const data = await res.json();

    const pokemon = data.results.map((p) => p.name).sort();
    listEl.innerHTML = pokemon.map((p) => `<li>${p}</li>`).join("");
  } catch (err) {
    listEl.innerHTML = `<li style="color:red;">Failed to load Pokémon</li>`;
  }
}

// Load lists on page load
fetchAllAbilities();
fetchAllPokemon();
