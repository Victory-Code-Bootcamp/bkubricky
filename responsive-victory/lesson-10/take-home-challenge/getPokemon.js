async function getPokemon() {
  // Prompt user for the Pokémon name
  const pokemonName = prompt("Enter the name of a Pokémon:").toLowerCase();

  try {
    // Fetch data from the PokéAPI
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    // Check if the response is okay
    if (!response.ok) {
      throw new Error("Pokémon not found");
    }

    // Convert response to JSON
    const data = await response.json();

    // Ask what information the user wants to see
    const showName = confirm("Do you want to see the Pokémon's name?");
    const showHeight = confirm("Do you want to see the Pokémon's height?");
    const showWeight = confirm("Do you want to see the Pokémon's weight?");
    const showAbilities = confirm(
      "Do you want to see the Pokémon's abilities?"
    );
    const showTypes = confirm("Do you want to see the Pokémon's types?");

    // Build the message
    let message = "";

    if (showName) {
      message += `Name: ${data.name}\n`;
    }
    if (showHeight) {
      message += `Height: ${data.height}\n`;
    }
    if (showWeight) {
      message += `Weight: ${data.weight}\n`;
    }
    if (showAbilities) {
      const abilities = data.abilities.map((a) => a.ability.name).join(", ");
      message += `Abilities: ${abilities}\n`;
    }
    if (showTypes) {
      const types = data.types.map((t) => t.type.name).join(", ");
      message += `Types: ${types}\n`;
    }

    // Show final message
    alert(message || "No information selected.");
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
}

// Example usage
getPokemon();
