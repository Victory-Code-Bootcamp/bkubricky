// Fetch a Pokemon's name from the PokeAPI
async function fetchPokemon() {
  try {
    // random pokemon ID
    const id = Math.floor(Math.random() * 1025) + 1;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();

    const capitalizedName =
      data.name.charAt(0).toUpperCase() + data.name.slice(1);
    const imageUrl = data.sprites.other.showdown.front_default;

    const displayDiv = document.getElementById("pokemonDisplay");
    displayDiv.innerHTML = `
      <h1>${capitalizedName}</h1>
      <img src="${imageUrl}" alt="${capitalizedName}">
    `;
  } catch (error) {
    console.error("Failed to fetch Pokémon:", error);
  }
}

function clickMeListener() {
  const clickMeMessage = document.getElementById("output");
  clickMeMessage.innerHTML = `Button was Clicked!`;
}

function addListItems() {
  const listItem = document.getElementById("unordered");
  const text = document.getElementById("inputText");

  if (text.value.trim() !== "") {
    const li = document.createElement("li");
    li.textContent = text.value;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.marginLeft = "10px";
    deleteBtn.addEventListener("click", () => {
      listItem.removeChild(li);
    });

    li.appendChild(deleteBtn);
    listItem.appendChild(li);
    text.value = "";
  }
}

function hideElement() {
  const hiddenElement = document.getElementById("hiddenText");
  if (hiddenElement.style.display === "none") {
    hiddenElement.style.display = "block";
  } else {
    hiddenElement.style.display = "none";
  }
}
// Add event listeners to the buttons
const button = document.getElementById("fetchButton");
button.addEventListener("click", fetchPokemon);

const clickMeButton = document.getElementById("clickMe");
clickMeButton.addEventListener("click", clickMeListener);

const addItem = document.getElementById("addItems");
addItem.addEventListener("click", addListItems);

const hideItem = document.getElementById("hideMe");
hideItem.addEventListener("click", hideElement);
