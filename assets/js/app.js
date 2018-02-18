

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
	contenedorPokemon.innerHTML = '';
	searchedForPokemon = searchPoke.value;
	getPokemon();
})

//llamando los datos de la  api
function getPokemon(){
	//creando objeto con el new
	const pokeRequest = new XMLHttpRequest();
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
		console.log(data);
	const name = data.name
	const type = data.types[0].type.name;
	const ability = data.abilities[0].ability.name;
	const experience = data.base_experience;
	const pokeImg = data.sprites.front_default
	console.log(pokeImg);
	const weight = data.weight;	
}


// console.log()

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})