

//traer los elementos del html que se usaran
//traer formulario
const form = document.getElementById('pokeform');//form
//input ingreso nombre pokemon
const searchPoke = document.getElementById('pokeName');// label - input
//contenedor donde ira el resultado
const contenedorPokemon = document.getElementById('contenedorPokemon');
let searchedForPokemon;

//Evento submit del formulario e instrucciones a ejecutar 
form.addEventListener('submit', function (e) {
  e.preventDefault();
	//contenedorPokemon.innerHTML = '';
	searchedForPokemon = searchPoke.value;
	getPokemon();
})

//creando objeto XHR
//creando funcion getPokemon() donde se crearan las peticiones
function getPokemon(){
	//creando objeto con el new
	const pokeRequest = new XMLHttpRequest();
	//abriendo coneccion con el open
	/*pokvareRequest.open('GET', 'https://pokeapi.co/api/v2/pokemon-species/1/');*/
	pokeRequest.open('GET', `https://pokeapi.co/api/v2/pokemon/${searchedForPokemon}`);
	pokeRequest.onload = addPoke;
	pokeRequest.onerror = handleError;
	//enviando la peticion
	pokeRequest.send();
}
// funcion que muestra el mensaje de error 
function handleError () {
  console.log( 'An error occurred 😞' );
}
function addPoke(){
	// convertir la respuesta que esta en json en una respuesta javascript
	const data = JSON.parse(this.responseText);
	const responseImg = data.sprites.front_default;
	const responseName = data.name;
	const poke = `<div class="col-xs-6 col-md-4 col-md-3 text-center cardPoke" data-toggle="modal" data-target="#myModal"><div class="pokemon"><img src="${responseImg}" alt=""></div><div class="namePoke">${responseName}</div></div>`;
	contenedorPokemon.innerHTML = poke;



}


// console.log()

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})