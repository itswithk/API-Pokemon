const API = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=00";

const getData = (api) => {
return fetch(api)
    .then((response) => response.json())
    .then((json) => {
    console.log(json);
    fillData(json);
    })
    .catch((error) => {
    console.log("Error", error);
    });
};



const fillData = (data) => {
let html = "";
data.results.forEach((pokemon) => {
    fetch (pokemon.url)
    .then((response) => response.json())
    .then((json) => {
console.log(json)
    html += ' <div class="col">';
    html += '<div class="card h-100">';
    html += `<img src="${json.sprites.other.dream_world.front_default}" class="card-img-top" width="200" height="250" alt="${pokemon.name}"></img>`;
    //.sprites.other.dream_world.front_default
    html += '<div class="card-body">';
    html += `<h5 class="card-title"> ${pokemon.name} </h5>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
    document.getElementById("dataPokemon").innerHTML = html;
    })

});


};

getData(API);
