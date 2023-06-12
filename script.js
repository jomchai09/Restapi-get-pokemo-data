let apiUrl = "https://pokeapi.co/api/v2/pokemon/";
let input = document.querySelector(".pokemon-input");
let PokemonName = document.querySelector(".pokemon-name");
let PokemonImage = document.querySelector(".pokemon-image");

function GetPokemonData() {
  axios
    .get(apiUrl + input.value)
    .then(function (response) {
      PokemonName.innerHTML = response.data.forms[0].name;
      PokemonImage.src = response.data.sprites.front_default;
    })
    .catch(function (error) {
      PokemonName.innerHTML = "(Something Error.)";
      PokemonImage.src = "";
    });
}

let button = document.querySelector(".pokemon-button");
button.addEventListener("click", GetPokemonData);
